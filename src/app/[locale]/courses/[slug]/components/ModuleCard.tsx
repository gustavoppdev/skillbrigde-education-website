import { CourseModule } from "@/types";
import { Clock3 } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  module: CourseModule;
};

const ModuleCard = ({ module }: Props) => {
  const t = useTranslations("Pages.Courses");

  return (
    <li
      key={module.moduleNumber}
      className="flex flex-col gap-7.5 lg:gap-10 p-7.5 lg:p-10 rounded-lg bg-white hover:shadow transition-all duration-300 cursor-pointer"
    >
      <h2 className="font-bold text-5xl lg:text-6xl self-end">
        {module.moduleNumber}
      </h2>

      <h3 className="font-semibold text-lg lg:text-xl">{t(module.title)}</h3>

      <ul className="flex flex-col gap-4">
        {module.lessons.map((lesson) => (
          <li
            key={lesson.lessonNumber}
            className="border border-app-white-95 rounded-[6px] p-5 flex justify-between items-center flex-wrap lg:flex-nowrap gap-1.5 group hover:border-app-primary-80 hover:shadow-lg shadow-app-primary-95 transition-all duration-300"
          >
            <div className="space-y-1 max-w-2xs 2xl:max-w-xs text-balance">
              <h4 className="font-medium">{t(lesson.title)}</h4>
              <p className="text-sm text-app-grey-35">
                {t(lesson.lessonNumber)}
              </p>
            </div>

            <span className="rounded-[6px] bg-app-white-97 group-hover:bg-app-primary-90 transition-colors duration-300 p-2.5 flex items-center gap-1 text-app-grey-35">
              <Clock3 className="size-4" strokeWidth={"1"} />
              <p className="text-sm">{t(lesson.duration)}</p>
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ModuleCard;
