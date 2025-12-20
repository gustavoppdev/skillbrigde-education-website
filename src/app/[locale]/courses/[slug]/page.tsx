import PageTitle from "@/components/common/PageTitle";
import { getCourseBySlug } from "@/lib/utils";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function OpenCoursePage({ params }: Props) {
  const { locale, slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Verificação de Segurança: O slug na URL é o slug correto para este locale?
  // Se o usuário acessar /pt/courses/web-design-fundamentals (slug EN no locale PT)
  // nós redirecionamos para o slug correto em PT.
  const correctSlugForLocale = course.slugs[locale as "en" | "pt"];

  if (slug !== correctSlugForLocale) {
    redirect(`/${locale}/courses/${correctSlugForLocale}`);
  }

  return (
    <main className="section-container">
      <PageTitle
        translationNamespace={`Pages.OpenCourse.${
          course.slugs[locale as "en" | "pt"]
        }`}
      />
    </main>
  );
}
