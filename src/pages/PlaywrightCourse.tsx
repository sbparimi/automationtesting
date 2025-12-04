import { CourseLayout } from "@/components/CourseLayout";
import { allPlaywrightCourses } from "@/data/playwrightLessons";

const PlaywrightCourse = () => {
  return (
    <CourseLayout
      title="Master Playwright Test Automation"
      subtitle="Build enterprise-grade test automation from the ground up. Master Page Object Model, TypeScript best practices, API testing, visual regression, and CI/CD integration."
      badgeText="Playwright Framework"
      courses={allPlaywrightCourses}
      lessonPath="playwright-lesson"
      roleJourney={["Setup", "Locators", "POM", "API Testing", "Visual", "CI/CD"]}
    />
  );
};

export default PlaywrightCourse;
