import Image from "next/image";
import { Button } from "@/components/ui/button";
import { googleIcon } from "@/assets";

interface Props {
  t: (key: string) => string;
  isSubmitting: boolean;
}

export const AuthGoogleLogin = ({ t, isSubmitting }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-row items-center gap-2">
        <div className="flex-1 h-px bg-app-white-90"></div>
        <p className="text-app-grey-60 text-sm uppercase">{t("or")}</p>
        <div className="flex-1 h-px bg-app-white-90"></div>
      </div>

      <Button
        type="button"
        variant={"outline"}
        className="w-full"
        size={"lg"}
        disabled={isSubmitting}
      >
        <Image src={googleIcon} alt="Google" width={24} height={24} />
        {t("loginWithGoogle")}
      </Button>
    </div>
  );
};
