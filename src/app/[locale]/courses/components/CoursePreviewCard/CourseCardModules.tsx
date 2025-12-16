// Next-Intl
import { useTranslations } from "next-intl";

// Types
import { Course } from "@/types";

type Props = {
  course: Course;
};

const CourseCardModules = ({ course }: Props) => {
  const t = useTranslations("Pages.Courses");
  const tt = useTranslations("Sections.CoursePreview");

  return (
    <div className="rounded-[10px] border border-app-white-95">
      <h4 className="py-4 lg:py-5 px-5 lg:px-6 border-b border-app-white-95 font-semibold lg:text-lg">
        {tt("curriculum")}
      </h4>

      <ul className="p-6 lg:p-10 flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between">
        {course.modules.map((module) => (
          <li
            key={module.title}
            className="flex flex-col gap-3 border-b lg:border-b-0 last:border-b-0 pb-4 lg:border-r lg:last:border-r-0 lg:pr-4 border-app-white-95"
          >
            <h5 className="font-extrabold text-3xl lg:text-4xl">
              {module.moduleNumber}
            </h5>
            <p className="font-medium text-sm lg:Text-base">
              {t(module.title)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCardModules;
