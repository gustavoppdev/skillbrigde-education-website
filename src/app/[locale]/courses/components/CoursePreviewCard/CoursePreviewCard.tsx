// Next.js & Next-Intl
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import CourseCardHeader from "./CourseCardHeader";
import CourseCardImages from "./CourseCardImages";
import CourseCardModules from "./CourseCardModules";

// Types
import { Course } from "@/types";

type Props = {
  course: Course;
};

export const CoursePreviewCard = ({ course }: Props) => {
  const t = useTranslations("Pages.Courses");
  const tt = useTranslations("Sections.CoursePreview");
  const locale = useLocale() as "en" | "pt";

  return (
    <Link
      href={{
        pathname: "/courses/[slug]",
        params: { slug: course.slugs[locale] },
      }}
      className="bg-white rounded-[8px] p-6 lg:p-10 flex flex-col gap-5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border border-transparent hover:border-app-white-95/50"
    >
      {/* Detalhes */}
      <div className="space-y-6">
        {/* Header */}
        <CourseCardHeader course={course} />

        {/* Imagens */}
        <CourseCardImages course={course} />

        {/* Duração, dificuldade e professor */}
        <div className="flex flex-col justify-between items-start sm:items-center sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            {[t(course.duration), t(course.difficulty)].map((item) => (
              <span
                key={item}
                className="text-sm text-app-grey-30 border px-3.5 py-2 rounded-sm hover:bg-app-white-97"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-medium text-sm self-end">
            {tt("by")} {t(course.teacher)}
          </p>
        </div>
      </div>

      {/* Modulos */}
      <CourseCardModules course={course} />
    </Link>
  );
};
