import { CourseLayout } from "@/components/CourseLayout";
import { allCodexCourses } from "@/data/codexLessons";

const CodexCourse = () => {
  return (
    <CourseLayout
      title="AI-Powered Test Automation with OpenAI Codex"
      subtitle="Master GitHub Copilot and AI assistants to 10x your Playwright and Cypress productivity. From basic prompts to production-grade frameworks with CI/CD pipelines."
      badgeText="AI + Automation"
      courses={allCodexCourses}
      lessonPath="codex-lesson"
      roleJourney={["VSCode Setup", "Prompts", "POM", "CI/CD", "Enterprise"]}
    />
  );
};

export default CodexCourse;
