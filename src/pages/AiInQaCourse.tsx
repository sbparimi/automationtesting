import { CourseLayout } from "@/components/CourseLayout";
import { allAiInQaCourses } from "@/data/aiInQaLessons";

const AiInQaCourse = () => {
  return (
    <CourseLayout
      title="AI in Quality Assurance"
      subtitle="From Junior QA to Director Level. Learn AI fundamentals, prompt engineering, AI-powered automation, and strategic AI leadership for modern testing."
      badgeText="AI & GenAI"
      courses={allAiInQaCourses}
      lessonPath="ai-qa-lesson"
      roleJourney={["Junior QA", "Mid QA", "Senior QA", "Lead", "Manager", "Director"]}
    />
  );
};

export default AiInQaCourse;
