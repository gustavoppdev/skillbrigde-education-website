// Components
import SectionTitle from "@/components/common/SectionTitle";
import CourseCard from "./CourseCard";

// Constants
import { Courses } from "@/constants";

export const OurCourses = () => {
  return (
    <section
      id="courses"
      className="section-container mt-15 lg:mt-25 2xl:mt-37.5 scroll-m-4"
    >
      <SectionTitle
        translationNamespace="Sections.OurCourses"
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
