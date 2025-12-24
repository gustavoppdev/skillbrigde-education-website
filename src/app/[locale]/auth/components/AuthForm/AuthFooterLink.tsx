import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  layout: "SignIn" | "SignUp";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}

export const AuthFooterLink = ({ layout, t }: Props) => {
  if (layout === "SignUp") {
    return (
      <p className="text-sm flex gap-1 justify-center">
        {t.rich("login", {
          emphasis: (chunks: ReactNode) => (
            <Link
              href="/auth/sign-in"
              className="underline flex items-center gap-1"
            >
              {chunks}
              <ArrowRight className="size-4 -rotate-45" />
            </Link>
          ),
        })}
      </p>
    );
  }

  return (
    <p className="text-sm flex gap-1 justify-center">
      {t.rich("register", {
        emphasis: (chunks: ReactNode) => (
          <Link
            href="/auth/sign-up"
            className="underline flex items-center gap-1"
          >
            {chunks}
            <ArrowRight className="size-4 -rotate-45" />
          </Link>
        ),
      })}
    </p>
  );
};
