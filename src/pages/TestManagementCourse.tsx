import { CourseLayout } from "@/components/CourseLayout";
import { allTestManagementCourses } from "@/data/testManagementLessons";

const TestManagementCourse = () => {
  return (
    <CourseLayout
      title="Test Management & Leadership"
      subtitle="From Test Manager to Head of QA. Master Agile leadership, engineering management, executive communications, budget management, and organizational strategy for the cloud and AI era."
      badgeText="Leadership"
      courses={allTestManagementCourses}
      lessonPath="test-management-lesson"
      roleJourney={["Test Manager", "Sr. Test Manager", "Sr. Eng Manager", "Head of QA", "VP Quality"]}
    />
  );
};

export default TestManagementCourse;
