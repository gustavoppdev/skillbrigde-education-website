// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Types
import { Course } from "@/types";

type Props = {
  course: Course;
};

const CourseCardImages = ({ course }: Props) => {
  const t = useTranslations("Pages.Courses");

  return (
    <div className="flex gap-2.5 md:gap-5 lg:gap-7.5">
      {course.images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-479/422 rounded overflow-hidden w-full group cursor-pointer"
        >
          <Image
            src={image.src}
            alt={t(course.title)}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 768px) 196px, (max-width: 1024px) 216px, (max-width: 1280px) 295px, (max-width: 1536px) 353px, 450px"
            placeholder="blur"
            blurDataURL={image.src}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default CourseCardImages;
