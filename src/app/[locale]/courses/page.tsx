// Components
import PageTitle from "@/components/common/PageTitle";
import { CoursePreviewCard } from "./components/CoursePreviewCard";

// Constants
import { Courses } from "@/constants";

const CoursesPage = () => {
  return (
    <main className="section-container">
      <PageTitle translationNamespace="Pages.Courses" />

      <section className="flex flex-col gap-5 lg:gap-10">
        {Courses.map((course) => (
          <CoursePreviewCard key={course.slug} course={course} />
        ))}
      </section>
    </main>
  );
};

export default CoursesPage;
