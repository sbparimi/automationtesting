import { CourseLayout } from "@/components/CourseLayout";
import { allCypressCourses } from "@/data/cypressLessons";

const CypressCourse = () => {
  return (
    <CourseLayout
      title="Master Cypress Test Automation"
      subtitle="Build production-ready test automation frameworks from scratch. Master custom commands, network control, TypeScript integration, and enterprise CI/CD pipelines."
      badgeText="Cypress Framework"
      courses={allCypressCourses}
      lessonPath="cypress-lesson"
      roleJourney={["Setup", "Selectors", "Commands", "Fixtures", "Plugins", "CI/CD"]}
    />
  );
};

export default CypressCourse;
