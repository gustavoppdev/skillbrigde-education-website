"use client";

// Next-Intl
import { useTranslations } from "next-intl";

// Zod & React-Hook-Form
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// Components
import { FieldInput } from "@/components/common/FieldInput";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
  containerStyles?: string;
};

// Esquema de validação com Zod
// Regex
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const phoneRegex = /^[0-9+\s()-]+$/;

const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: "firstName" })
    .regex(nameRegex, { message: "invalidName" }),
  lastName: z
    .string()
    .trim()
    .min(3, { message: "lastName" })
    .regex(nameRegex, { message: "invalidName" }),
  email: z.email({ message: "email" }).trim(),
  subject: z.string().trim().min(3, { message: "subject" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "messageMin" })
    .max(1000, { message: "messageMax" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "phoneMin" })
    .regex(phoneRegex, { message: "invalidPhone" }),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const ContactForm = ({ containerStyles }: Props) => {
  const t = useTranslations("Sections.ContactForm");
  const tErrors = useTranslations("Others.ContactErrors");

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      email: "",
      subject: "",
      message: "",
      lastName: "",
      phone: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      // Simulando envio para API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      form.reset();
      toast.success(t("success"));
    } catch (error) {
      console.error(error);
      toast.error(t("error"));
    }
  };

  return (
    <div className={`${containerStyles} p-7.5 lg:p-15 `}>
      <form
        id="contactForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        {/* Nome e Sobrenome */}
        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FieldInput
            control={form.control}
            name="firstName"
            label={t("firstName")}
            placeholder={t("firstNamePlaceholder")}
            tErrors={tErrors}
          />
          <FieldInput
            control={form.control}
            name="lastName"
            label={t("lastName")}
            placeholder={t("lastNamePlaceholder")}
            tErrors={tErrors}
          />
        </FieldGroup>

        {/* Email e Telefone */}
        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FieldInput
            control={form.control}
            name="email"
            label={t("email")}
            placeholder={t("emailPlaceholder")}
            tErrors={tErrors}
          />

          <FieldInput
            control={form.control}
            name="phone"
            label={t("phone")}
            placeholder={t("phonePlaceholder")}
            tErrors={tErrors}
          />
        </FieldGroup>

        <FieldInput
          control={form.control}
          name="subject"
          label={t("subject")}
          placeholder={t("subjectPlaceholder")}
          tErrors={tErrors}
        />

        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="message">{t("message")}</FieldLabel>
              <Textarea
                {...field}
                placeholder={t("messagePlaceholder")}
                aria-invalid={fieldState.invalid}
                className="p-5 text-sm bg-app-white-99 border-app-white-95 h-[138px]"
              />
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-fit sm:mx-auto mt-1.5 lg:mt-4"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            t("sendBtn")
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
