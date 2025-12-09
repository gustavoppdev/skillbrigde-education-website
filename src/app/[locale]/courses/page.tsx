import PageTitle from "@/components/common/PageTitle";
import CourseDetail from "@/components/sections/CourseDetail";
import { Courses } from "@/constants";

const CoursesPage = () => {
  return (
    <section className="section-container">
      <PageTitle translationNamespace="Pages.Courses" />

      <div className="flex flex-col gap-5 lg:gap-10">
        {Courses.map((course) => (
          <CourseDetail key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesPage;
