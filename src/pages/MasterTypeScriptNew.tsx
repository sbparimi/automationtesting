import { CourseLayout } from "@/components/CourseLayout";
import { basicTypeScriptCourse, intermediateTypeScriptCourse, advancedTypeScriptCourse } from "@/data/typeScriptLessons";

const MasterTypeScript = () => {
  const allCourses = [basicTypeScriptCourse, intermediateTypeScriptCourse, advancedTypeScriptCourse];

  return (
    <CourseLayout
      title="Master TypeScript for Test Automation"
      subtitle="LinkedIn Learning-style organization with detailed 5000+ word lessons. Each topic includes concept explanation, 5 Whys analysis, practical exercises, and production-grade code snippets for both Playwright & Cypress."
      badgeText="TypeScript Mastery"
      courses={allCourses}
      lessonPath="typescript-lesson"
      roleJourney={["Variables", "Types", "Functions", "Classes", "Generics", "Advanced"]}
    />
  );
};

export default MasterTypeScript;
