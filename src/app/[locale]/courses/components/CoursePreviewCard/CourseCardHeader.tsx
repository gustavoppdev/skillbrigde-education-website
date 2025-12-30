// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Types
import { Course } from "@/types";

type Props = {
  course: Course;
};

const CourseCardHeader = ({ course }: Props) => {
  const t = useTranslations("Pages.Courses");
  const tt = useTranslations("Sections.CoursePreview");

  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      {/* Nome e descrição */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg lg:text-xl">{t(course.title)}</h3>
        <p className="text-app-grey-35 text-sm md:text-base">
          {t(course.description)}
        </p>
      </div>
      {/* Botão */}
      <Button variant={"outline"} className="bg-app-white-99">
        {tt("viewCourseBtn")}
      </Button>
    </div>
  );
};

export default CourseCardHeader;
