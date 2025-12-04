import { CourseLayout } from "@/components/CourseLayout";
import { allTestManagementCourses } from "@/data/testManagementLessons";

const TestManagementCourse = () => {
  return (
    <CourseLayout
      title="Test Management Mastery"
      subtitle="From Junior Tester to Engineering Manager & Director. Master TMAP Next methodology, test strategy, governance, and leadership skills for enterprise QA."
      badgeText="TMAP Next"
      courses={allTestManagementCourses}
      lessonPath="test-management-lesson"
      roleJourney={["Junior QA", "Mid QA", "Senior QA", "Lead", "Manager", "Director"]}
    />
  );
};

export default TestManagementCourse;
