// Next.js
import { notFound, redirect } from "next/navigation";

// Components
import PageTitle from "@/components/common/PageTitle";
import CourseCardImages from "../components/CoursePreviewCard/CourseCardImages";
import ModuleCard from "./components/ModuleCard";

// Lib
import { getCourseBySlug } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function OpenCoursePage({ params }: Props) {
  const { locale, slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const correctSlugForLocale = course.slugs[locale as "en" | "pt"];

  if (slug !== correctSlugForLocale) {
    redirect(`/${locale}/courses/${correctSlugForLocale}`);
  }

  return (
    <main className="section-container">
      <PageTitle translationNamespace={`Pages.OpenCourse.${course.slugs.en}`} />

      <section className="mb-12.5 lg:mb-20">
        <CourseCardImages course={course} />
      </section>

      <section>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {course.modules.map((module) => (
            <ModuleCard key={module.moduleNumber} module={module} />
          ))}
        </ul>
      </section>
    </main>
  );
}
