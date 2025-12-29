// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

// Components & Types
import { Button } from "@/components/ui/button";
import { Course } from "@/types";

type Props = {
  course: Course;
};

const CourseCard = ({ course }: Props) => {
  const t = useTranslations("Pages.Courses");
  const tt = useTranslations("Sections.OurCourses");
  const locale = useLocale() as "en" | "pt";

  return (
    <Link
      href={{
        pathname: "/courses/[slug]",
        params: { slug: course.slugs[locale] },
      }}
      className="group p-6 lg:p-10 bg-white rounded-[10px] flex flex-col gap-y-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="relative aspect-9/5 overflow-hidden rounded-md">
        <Image
          src={course.images[0]}
          alt={t(course.title)}
          fill
          placeholder="blur"
          blurDataURL={course.images[0].src}
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 40vw, 600px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Textos */}
      <div className="flex flex-col gap-6">
        {/* Duração, Dificuldade e Professor */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {[t(course.duration), t(course.difficulty)].map((item) => (
              <span
                key={item}
                className="text-sm text-app-grey-30 border px-3.5 py-2 rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-medium text-sm">
            {tt("by")} {t(course.teacher)}
          </p>
        </div>

        {/* Descrição */}
        <div className="space-y-2.5">
          <h2 className="font-semibold text-xl">{t(course.title)}</h2>
          <p className="text-app-grey-30 text-sm lg:text-base">
            {t(course.description)}
          </p>
        </div>
      </div>

      <Button
        variant={"secondary"}
        className="w-full transition-transform active:scale-95"
      >
        {tt("getNowBtn")}
      </Button>
    </Link>
  );
};

export default CourseCard;
