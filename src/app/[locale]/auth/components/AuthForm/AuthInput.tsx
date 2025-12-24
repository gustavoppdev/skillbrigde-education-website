"use client";

import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// Interface genérica para aceitar qualquer schema do Zod/RHF
interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: string;
  tErrors: (key: string) => string;
}

export const AuthInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  tErrors,
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="flex flex-col">
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <div className="relative w-full">
            <Input
              {...field}
              id={`authForm-${name}`}
              aria-invalid={fieldState.invalid}
              placeholder={placeholder}
              type={inputType}
              className={`p-5 text-sm bg-app-white-99 border-app-white-95 h-[61px] lg:h-[64px] w-full ${
                isPassword ? "pr-12" : ""
              }`}
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-app-grey-40 hover:text-app-grey-30 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            )}
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
  );
};
