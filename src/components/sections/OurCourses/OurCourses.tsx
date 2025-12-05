import SectionTitle from "@/components/common/SectionTitle";
import { Courses } from "@/constants";
import CourseCard from "./CourseCard";

export const OurCourses = () => {
  return (
    <section className="section-container mt-15 lg:mt-25 2xl:mt-37.5">
      <SectionTitle
        translationNamespace="Pages.Home.OurCourses"
        viewMore={true}
        viewMoreUrl="/courses"
      />
      <div className="mt-10 lg:mt-15 2xl:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {Courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
};
