"use client";

// React
import { useEffect, useState } from "react";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

// Zod & React-Hook-Form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

// Services & Utils
import { AuthService } from "@/lib/auth";

// Components
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldInput } from "@/components/common/FieldInput";
import { AuthGoogleLogin } from "./AuthGoogleLogin";
import { AuthFooterLink } from "./AuthFooterLink";

// Icons
import { Loader2 } from "lucide-react";

type Props = {
  layout: "SignIn" | "SignUp";
};

// Esquema de validação com Zod
const authFormSchema = z.object({
  email: z.email({ message: "email" }),
  password: z.string().min(6, { message: "password" }),
  fullName: z
    .string()
    .min(3, { message: "fullName" })
    .optional()
    .or(z.literal("")),
  rememberMe: z.boolean().optional(),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "termsRequired",
  }),
});

type AuthFormSchema = z.infer<typeof authFormSchema>;

export const AuthForm = ({ layout }: Props) => {
  const t = useTranslations(
    layout === "SignIn" ? "Sections.SignIn" : "Sections.SignUp"
  );
  const tErrors = useTranslations("Others.AuthErrors");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AuthFormSchema>({
    resolver: zodResolver(authFormSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      rememberMe: false,
      agreeToTerms: layout === "SignIn", // Se for login, termos já estão "aceitos" logicamente, ou ignorados
    },
  });

  /**
   * Manipula o envio do formulário.
   * Decide entre Login ou Cadastro baseado na prop 'layout'.
   */
  const onSubmit = async (data: AuthFormSchema) => {
    if (layout === "SignUp" && (!data.fullName || data.fullName.length < 3)) {
      form.setError("fullName", { message: "fullName" });
      return;
    }

    try {
      setIsLoading(true);
      if (layout === "SignUp") {
        // Fluxo de Cadastro
        AuthService.register({
          email: data.email,
          password: data.password,
          fullName: data.fullName,
        });
      } else {
        // Fluxo de Login
        AuthService.login({
          email: data.email,
          password: data.password,
        });
      }

      // Sucesso: Redireciona para a Home
      router.push("/");
      router.refresh();
    } catch (error) {
      // Tratamento de erros vindo do AuthService
      if (error instanceof Error) {
        if (error.message === "UserAlreadyExists") {
          form.setError("email", { message: "userAlreadyExists" });
        } else if (error.message === "InvalidCredentials") {
          form.setError("root", { message: "invalidCredentials" });
        } else {
          form.setError("root", { message: "genericError" });
        }
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="p-7.5 lg:p-10 bg-white rounded-lg flex flex-col gap-y-7.5 lg:gap-y-10">
      {/* Cabeçalho do Formulário */}
      <div className="space-y-2 lg:space-y-3 text-center">
        <h1 className="font-semibold text-3xl">{t("title")}</h1>
        <p className="text-sm lg:text-base text-app-grey-30 ">
          {t("description")}
        </p>
      </div>

      {/* Formulário */}
      <form
        id="authForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-7.5"
      >
        {/* Erro Geral (Ex: Credenciais Inválidas) */}
        {form.formState.errors.root && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm text-center">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {tErrors(form.formState.errors.root.message as any)}
          </div>
        )}

        {/* Campo Nome Completo (Apenas Cadastro) */}
        {layout === "SignUp" && (
          <FieldInput
            control={form.control}
            name="fullName"
            label={t("fullName")}
            placeholder={t("fullNamePlaceholder")}
            tErrors={tErrors}
          />
        )}

        {/* Campo Email */}
        <FieldInput
          control={form.control}
          name="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          type="email"
          tErrors={tErrors}
        />

        {/* Campo Senha */}
        <FieldInput
          control={form.control}
          name="password"
          label={t("password")}
          placeholder={t("passwordPlaceholder")}
          type="password"
          tErrors={tErrors}
        />

        {/* Lembrar-me e Esqueci a Senha (Apenas Login) */}
        {layout === "SignIn" && (
          <FieldGroup className="flex flex-row justify-between">
            <Controller
              name="rememberMe"
              control={form.control}
              render={({ field }) => (
                <Field className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="rememberMe"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="size-6!"
                  />
                  <FieldLabel
                    htmlFor="rememberMe"
                    className="text-app-grey-40 font-normal cursor-pointer select-none"
                  >
                    {t("rememberMe")}
                  </FieldLabel>
                </Field>
              )}
            />

            <Button
              variant={"link"}
              type="button"
              size={"sm"}
              className="self-end w-fit! text-app-grey-30 font-normal"
            >
              {t("forgotPassword")}
            </Button>
          </FieldGroup>
        )}

        {/* Termos de Uso (Apenas Cadastro) */}
        {layout === "SignUp" && (
          <Controller
            name="agreeToTerms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="agreeToTerms"
                    name={field.name}
                    checked={field.value}
                    aria-invalid={fieldState.invalid}
                    onCheckedChange={field.onChange}
                    className="size-6!"
                  />
                  <FieldLabel
                    htmlFor="agreeToTerms"
                    className="text-app-grey-40 font-normal cursor-pointer"
                  >
                    <p className="text-sm ">
                      {t.rich("agreeToTheTerms", {
                        emphasis1: (chunks) => (
                          <span className="underline">{chunks}</span>
                        ),
                        emphasis2: (chunks) => (
                          <span className="underline">{chunks}</span>
                        ),
                      })}
                    </p>
                  </FieldLabel>
                </div>

                {fieldState.invalid && (
                  <FieldError
                    errors={[
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      { message: tErrors(fieldState.error?.message as any) },
                    ]}
                  />
                )}
              </Field>
            )}
          />
        )}

        {/* Botão de Envio */}
        <Button
          type="submit"
          className="w-full"
          size={"lg"}
          disabled={form.formState.isSubmitting}
        >
          {isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            t("authBtn")
          )}
        </Button>

        {/* Login Social (Google) */}
        <AuthGoogleLogin t={t} isSubmitting={form.formState.isSubmitting} />

        {/* Rodapé: Link para Alternar entre Login/Cadastro */}
        <AuthFooterLink layout={layout} t={t} />
      </form>
    </div>
  );
};
