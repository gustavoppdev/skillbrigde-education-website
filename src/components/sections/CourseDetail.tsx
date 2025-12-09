import { Course } from "@/types";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  course: Course;
};

const CourseDetail = ({ course }: Props) => {
  const t = useTranslations("Pages.Home.OurCourses");
  return (
    <div className="bg-white rounded-[8px] p-6 lg:p-10 flex flex-col gap-10">
      {/* Detalhes */}
      <div className="space-y-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg lg:text-xl">
              {t(course.title)}
            </h3>
            <p className="text-app-grey-35 text-sm md:text-base">
              {t(course.description)}
            </p>
          </div>

          <Button variant={"outline"}>View Course</Button>
        </div>

        <div className="flex gap-2.5">
          {course.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded overflow-hidden w-full"
            >
              <Image src={image.src} alt="" fill className="object-contain" />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between items-start sm:items-center sm:flex-row gap-2 ">
          <div className="flex items-center gap-2">
            {[t(course.duration), t(course.difficulty)].map((item) => (
              <span
                key={item}
                className="text-sm text-app-grey-30 border border-app-white-95 px-3.5 py-2 rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-medium text-sm">By {t(course.teacher)}</p>
        </div>
      </div>
      {/* Conteúdo */}
      <div className="rounded-[10px] border border-app-white-95">
        <h4 className="py-4 lg:py-5 px-5 lg:px-6 border-b border-app-white-95 font-semibold lg:text-lg">
          Curriculum
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
    </div>
  );
};

export default CourseDetail;
