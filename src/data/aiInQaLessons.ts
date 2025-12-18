// AI in QA Learning Structure
// From Junior QA to Director Level - AI & GenAI Skills by Role

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced';
  isFree?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

// BASIC AI IN QA COURSE (Junior QA Level)
export const basicAiInQaCourse: Course = {
  id: 'basic-ai-qa',
  title: 'AI Foundations for QA Professionals',
  description: 'Essential AI and GenAI concepts for Junior to Mid-level QA Engineers',
  sections: [
    {
      id: 'ai-section-1-foundations',
      title: 'Section 1: AI & GenAI Fundamentals (14 lessons)',
      description: 'Core AI concepts every QA professional must know',
      lessons: [
        { id: 'ai-basic-001', title: 'Introduction to AI for Testers', duration: '18 min', level: 'basic', isFree: true },
        { id: 'ai-basic-002', title: 'Machine Learning Basics', duration: '22 min', level: 'basic', isFree: true },
        { id: 'ai-basic-003', title: 'Understanding Neural Networks', duration: '25 min', level: 'basic', isFree: true },
        { id: 'ai-basic-004', title: 'What is Generative AI?', duration: '20 min', level: 'basic', isFree: true },
        { id: 'ai-basic-005', title: 'Large Language Models (LLMs) Explained', duration: '24 min', level: 'basic', isFree: true },
        { id: 'ai-basic-006', title: 'ChatGPT, Claude, Gemini Overview', duration: '19 min', level: 'basic' },
        { id: 'ai-basic-007', title: 'AI Terminology for QA', duration: '16 min', level: 'basic' },
        { id: 'ai-basic-008', title: 'Prompt Engineering Basics', duration: '23 min', level: 'basic' },
        { id: 'ai-basic-009', title: 'AI Ethics and Limitations', duration: '21 min', level: 'basic' },
        { id: 'ai-basic-010', title: 'AI vs Traditional Automation', duration: '18 min', level: 'basic' },
        { id: 'ai-basic-011', title: 'Computer Vision for Testing', duration: '26 min', level: 'basic' },
        { id: 'ai-basic-012', title: 'Natural Language Processing', duration: '24 min', level: 'basic' },
        { id: 'ai-basic-013', title: 'AI Model Types for QA', duration: '20 min', level: 'basic' },
        { id: 'ai-basic-014', title: 'When to Use AI in Testing', duration: '17 min', level: 'basic' },
      ],
    },
    {
      id: 'ai-section-2-tools',
      title: 'Section 2: AI Tools for Daily Testing (13 lessons)',
      description: 'Practical AI tools every tester should master',
      lessons: [
        { id: 'ai-basic-015', title: 'Using ChatGPT for Test Cases', duration: '22 min', level: 'basic' },
        { id: 'ai-basic-016', title: 'AI-Powered Bug Reporting', duration: '18 min', level: 'basic' },
        { id: 'ai-basic-017', title: 'Test Data Generation with AI', duration: '24 min', level: 'basic' },
        { id: 'ai-basic-018', title: 'AI Code Review Assistants', duration: '20 min', level: 'basic' },
        { id: 'ai-basic-019', title: 'GitHub Copilot for Test Scripts', duration: '26 min', level: 'basic' },
        { id: 'ai-basic-020', title: 'AI Documentation Tools', duration: '17 min', level: 'basic' },
        { id: 'ai-basic-021', title: 'Testim and AI Visual Testing', duration: '25 min', level: 'basic' },
        { id: 'ai-basic-022', title: 'Applitools Eyes Introduction', duration: '28 min', level: 'basic' },
        { id: 'ai-basic-023', title: 'mabl AI Testing Platform', duration: '23 min', level: 'basic' },
        { id: 'ai-basic-024', title: 'Katalon AI Features', duration: '21 min', level: 'basic' },
        { id: 'ai-basic-025', title: 'Functionize Overview', duration: '19 min', level: 'basic' },
        { id: 'ai-basic-026', title: 'AI Locator Strategies', duration: '22 min', level: 'basic' },
        { id: 'ai-basic-027', title: 'Self-Healing Tests', duration: '24 min', level: 'basic' },
      ],
    },
    {
      id: 'ai-section-3-prompts',
      title: 'Section 3: Prompt Engineering for QA (12 lessons)',
      description: 'Master prompting techniques for testing tasks',
      lessons: [
        { id: 'ai-basic-028', title: 'Crafting Effective Prompts', duration: '20 min', level: 'basic' },
        { id: 'ai-basic-029', title: 'Test Case Generation Prompts', duration: '24 min', level: 'basic' },
        { id: 'ai-basic-030', title: 'Bug Analysis Prompts', duration: '18 min', level: 'basic' },
        { id: 'ai-basic-031', title: 'Code Explanation Prompts', duration: '22 min', level: 'basic' },
        { id: 'ai-basic-032', title: 'Test Script Debugging Prompts', duration: '21 min', level: 'basic' },
        { id: 'ai-basic-033', title: 'API Test Generation Prompts', duration: '25 min', level: 'basic' },
        { id: 'ai-basic-034', title: 'Chain of Thought Prompting', duration: '23 min', level: 'basic' },
        { id: 'ai-basic-035', title: 'Few-Shot Learning for Tests', duration: '26 min', level: 'basic' },
        { id: 'ai-basic-036', title: 'Role-Based Prompting', duration: '19 min', level: 'basic' },
        { id: 'ai-basic-037', title: 'Prompt Templates Library', duration: '22 min', level: 'basic' },
        { id: 'ai-basic-038', title: 'Iterative Prompt Refinement', duration: '20 min', level: 'basic' },
        { id: 'ai-basic-039', title: 'Common Prompt Mistakes', duration: '17 min', level: 'basic' },
      ],
    },
  ],
};

// INTERMEDIATE AI IN QA COURSE (Senior QA / Lead Level)
export const intermediateAiInQaCourse: Course = {
  id: 'intermediate-ai-qa',
  title: 'AI-Powered Test Automation',
  description: 'Advanced AI implementation for Senior QA Engineers and Test Leads',
  sections: [
    {
      id: 'ai-section-4-automation',
      title: 'Section 4: AI Test Automation (14 lessons)',
      description: 'Integrating AI into automation frameworks',
      lessons: [
        { id: 'ai-int-001', title: 'AI-Enhanced Selenium', duration: '28 min', level: 'intermediate' },
        { id: 'ai-int-002', title: 'AI with Playwright', duration: '30 min', level: 'intermediate' },
        { id: 'ai-int-003', title: 'AI with Cypress', duration: '27 min', level: 'intermediate' },
        { id: 'ai-int-004', title: 'Building Self-Healing Frameworks', duration: '35 min', level: 'intermediate' },
        { id: 'ai-int-005', title: 'Dynamic Locator Generation', duration: '26 min', level: 'intermediate' },
        { id: 'ai-int-006', title: 'AI Visual Regression Testing', duration: '32 min', level: 'intermediate' },
        { id: 'ai-int-007', title: 'Smart Test Prioritization', duration: '29 min', level: 'intermediate' },
        { id: 'ai-int-008', title: 'Predictive Test Selection', duration: '31 min', level: 'intermediate' },
        { id: 'ai-int-009', title: 'AI Test Impact Analysis', duration: '28 min', level: 'intermediate' },
        { id: 'ai-int-010', title: 'Flaky Test Detection with AI', duration: '25 min', level: 'intermediate' },
        { id: 'ai-int-011', title: 'AI Root Cause Analysis', duration: '30 min', level: 'intermediate' },
        { id: 'ai-int-012', title: 'Natural Language Test Scripts', duration: '33 min', level: 'intermediate' },
        { id: 'ai-int-013', title: 'AI-Driven Test Maintenance', duration: '27 min', level: 'intermediate' },
        { id: 'ai-int-014', title: 'Autonomous Testing Concepts', duration: '34 min', level: 'intermediate' },
      ],
    },
    {
      id: 'ai-section-5-api',
      title: 'Section 5: AI API Testing (13 lessons)',
      description: 'Leveraging AI for API and backend testing',
      lessons: [
        { id: 'ai-int-015', title: 'AI-Generated API Tests', duration: '26 min', level: 'intermediate' },
        { id: 'ai-int-016', title: 'Contract Testing with AI', duration: '29 min', level: 'intermediate' },
        { id: 'ai-int-017', title: 'AI Schema Validation', duration: '24 min', level: 'intermediate' },
        { id: 'ai-int-018', title: 'Intelligent Mock Generation', duration: '28 min', level: 'intermediate' },
        { id: 'ai-int-019', title: 'AI Response Validation', duration: '25 min', level: 'intermediate' },
        { id: 'ai-int-020', title: 'Anomaly Detection in APIs', duration: '31 min', level: 'intermediate' },
        { id: 'ai-int-021', title: 'AI Load Test Analysis', duration: '30 min', level: 'intermediate' },
        { id: 'ai-int-022', title: 'Security Testing with AI', duration: '33 min', level: 'intermediate' },
        { id: 'ai-int-023', title: 'GraphQL AI Testing', duration: '27 min', level: 'intermediate' },
        { id: 'ai-int-024', title: 'AI Chaos Engineering', duration: '32 min', level: 'intermediate' },
        { id: 'ai-int-025', title: 'Intelligent Test Orchestration', duration: '28 min', level: 'intermediate' },
        { id: 'ai-int-026', title: 'AI API Documentation Testing', duration: '23 min', level: 'intermediate' },
        { id: 'ai-int-027', title: 'Predictive API Failures', duration: '29 min', level: 'intermediate' },
      ],
    },
    {
      id: 'ai-section-6-mlops',
      title: 'Section 6: Testing AI/ML Systems (14 lessons)',
      description: 'Quality assurance for AI/ML applications',
      lessons: [
        { id: 'ai-int-028', title: 'Testing ML Models', duration: '32 min', level: 'intermediate' },
        { id: 'ai-int-029', title: 'Data Quality Testing', duration: '28 min', level: 'intermediate' },
        { id: 'ai-int-030', title: 'Model Validation Strategies', duration: '35 min', level: 'intermediate' },
        { id: 'ai-int-031', title: 'Bias Testing in AI', duration: '30 min', level: 'intermediate' },
        { id: 'ai-int-032', title: 'AI Fairness Testing', duration: '29 min', level: 'intermediate' },
        { id: 'ai-int-033', title: 'Model Performance Testing', duration: '27 min', level: 'intermediate' },
        { id: 'ai-int-034', title: 'AI Regression Testing', duration: '26 min', level: 'intermediate' },
        { id: 'ai-int-035', title: 'LLM Output Testing', duration: '33 min', level: 'intermediate' },
        { id: 'ai-int-036', title: 'Prompt Injection Testing', duration: '31 min', level: 'intermediate' },
        { id: 'ai-int-037', title: 'AI Hallucination Detection', duration: '28 min', level: 'intermediate' },
        { id: 'ai-int-038', title: 'MLOps Pipeline Testing', duration: '34 min', level: 'intermediate' },
        { id: 'ai-int-039', title: 'AI Model Monitoring', duration: '29 min', level: 'intermediate' },
        { id: 'ai-int-040', title: 'A/B Testing for AI', duration: '25 min', level: 'intermediate' },
        { id: 'ai-int-041', title: 'AI Ethics in Testing', duration: '26 min', level: 'intermediate' },
      ],
    },
  ],
};

// ADVANCED AI IN QA COURSE (Manager & Director Level)
export const advancedAiInQaCourse: Course = {
  id: 'advanced-ai-qa',
  title: 'AI Strategy for QA Leadership',
  description: 'Strategic AI implementation for QA Managers and Directors',
  sections: [
    {
      id: 'ai-section-7-strategy',
      title: 'Section 7: AI Strategy & Vision (14 lessons)',
      description: 'Building AI-powered QA organizations',
      lessons: [
        { id: 'ai-adv-001', title: 'AI Vision for QA Teams', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-002', title: 'AI Maturity Assessment', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-003', title: 'AI Roadmap Development', duration: '35 min', level: 'advanced' },
        { id: 'ai-adv-004', title: 'AI Tool Selection Framework', duration: '32 min', level: 'advanced' },
        { id: 'ai-adv-005', title: 'Build vs Buy AI Solutions', duration: '29 min', level: 'advanced' },
        { id: 'ai-adv-006', title: 'AI Vendor Evaluation', duration: '27 min', level: 'advanced' },
        { id: 'ai-adv-007', title: 'AI POC Management', duration: '26 min', level: 'advanced' },
        { id: 'ai-adv-008', title: 'Scaling AI in Testing', duration: '33 min', level: 'advanced' },
        { id: 'ai-adv-009', title: 'AI Integration Architecture', duration: '36 min', level: 'advanced' },
        { id: 'ai-adv-010', title: 'AI Governance Framework', duration: '31 min', level: 'advanced' },
        { id: 'ai-adv-011', title: 'AI Risk Management', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-012', title: 'AI Compliance Requirements', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-013', title: 'AI Security Considerations', duration: '29 min', level: 'advanced' },
        { id: 'ai-adv-014', title: 'AI Change Management', duration: '27 min', level: 'advanced' },
      ],
    },
    {
      id: 'ai-section-8-team',
      title: 'Section 8: Building AI-Ready Teams (13 lessons)',
      description: 'Developing AI capabilities in QA teams',
      lessons: [
        { id: 'ai-adv-015', title: 'AI Skills Assessment', duration: '26 min', level: 'advanced' },
        { id: 'ai-adv-016', title: 'AI Training Programs', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-017', title: 'Hiring AI-Savvy Testers', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-018', title: 'AI Centers of Excellence', duration: '34 min', level: 'advanced' },
        { id: 'ai-adv-019', title: 'AI Champions Network', duration: '25 min', level: 'advanced' },
        { id: 'ai-adv-020', title: 'AI Adoption Resistance', duration: '27 min', level: 'advanced' },
        { id: 'ai-adv-021', title: 'AI Collaboration Models', duration: '29 min', level: 'advanced' },
        { id: 'ai-adv-022', title: 'AI Knowledge Sharing', duration: '24 min', level: 'advanced' },
        { id: 'ai-adv-023', title: 'AI Community Building', duration: '26 min', level: 'advanced' },
        { id: 'ai-adv-024', title: 'AI Career Paths', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-025', title: 'AI Performance Metrics', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-026', title: 'AI Success Stories', duration: '23 min', level: 'advanced' },
        { id: 'ai-adv-027', title: 'Future of AI in QA', duration: '32 min', level: 'advanced' },
      ],
    },
    {
      id: 'ai-section-9-roi',
      title: 'Section 9: AI ROI & Business Case (13 lessons)',
      description: 'Measuring and communicating AI value',
      lessons: [
        { id: 'ai-adv-028', title: 'AI ROI Framework', duration: '32 min', level: 'advanced' },
        { id: 'ai-adv-029', title: 'AI Cost-Benefit Analysis', duration: '29 min', level: 'advanced' },
        { id: 'ai-adv-030', title: 'AI Metrics & KPIs', duration: '27 min', level: 'advanced' },
        { id: 'ai-adv-031', title: 'AI Business Cases', duration: '34 min', level: 'advanced' },
        { id: 'ai-adv-032', title: 'Executive AI Presentations', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-033', title: 'AI Budget Planning', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-034', title: 'AI Value Realization', duration: '31 min', level: 'advanced' },
        { id: 'ai-adv-035', title: 'AI Productivity Metrics', duration: '26 min', level: 'advanced' },
        { id: 'ai-adv-036', title: 'AI Quality Improvement', duration: '29 min', level: 'advanced' },
        { id: 'ai-adv-037', title: 'AI Time-to-Market Impact', duration: '25 min', level: 'advanced' },
        { id: 'ai-adv-038', title: 'AI Customer Satisfaction', duration: '27 min', level: 'advanced' },
        { id: 'ai-adv-039', title: 'Competitive AI Analysis', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-040', title: 'AI Investment Strategies', duration: '33 min', level: 'advanced' },
      ],
    },
    {
      id: 'ai-section-10-innovation',
      title: 'Section 10: AI Innovation & Future (14 lessons)',
      description: 'Emerging AI technologies and future trends',
      lessons: [
        { id: 'ai-adv-041', title: 'Autonomous Testing Future', duration: '35 min', level: 'advanced' },
        { id: 'ai-adv-042', title: 'AI Agents in Testing', duration: '32 min', level: 'advanced' },
        { id: 'ai-adv-043', title: 'Multi-Modal AI Testing', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-044', title: 'AI Code Generation', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-045', title: 'AI Requirements Analysis', duration: '31 min', level: 'advanced' },
        { id: 'ai-adv-046', title: 'Intelligent Test Design', duration: '29 min', level: 'advanced' },
        { id: 'ai-adv-047', title: 'AI-Driven DevOps', duration: '33 min', level: 'advanced' },
        { id: 'ai-adv-048', title: 'Cognitive QA', duration: '34 min', level: 'advanced' },
        { id: 'ai-adv-049', title: 'AI Test Analytics', duration: '27 min', level: 'advanced' },
        { id: 'ai-adv-050', title: 'Predictive Quality', duration: '30 min', level: 'advanced' },
        { id: 'ai-adv-051', title: 'AI Industry Trends', duration: '28 min', level: 'advanced' },
        { id: 'ai-adv-052', title: 'AI Research Directions', duration: '31 min', level: 'advanced' },
        { id: 'ai-adv-053', title: 'Building AI Innovation Labs', duration: '36 min', level: 'advanced' },
        { id: 'ai-adv-054', title: 'QA in the Age of AGI', duration: '35 min', level: 'advanced' },
      ],
    },
  ],
};

// MICROSOFT BOT FRAMEWORK TESTING COURSE
// From Beginner to Practitioner - Testing Conversational AI Chatbots
export const microsoftBotFrameworkCourse: Course = {
  id: 'bot-framework-testing',
  title: 'Microsoft Bot Framework Testing',
  description: 'Complete guide to testing conversational chatbots built with Microsoft Bot Framework - from basic concepts to advanced enterprise testing',
  sections: [
    {
      id: 'bot-section-1-foundations',
      title: 'Section 1: Bot Framework Testing Fundamentals (14 lessons)',
      description: 'Understanding chatbot architecture and foundational testing concepts',
      lessons: [
        { id: 'bot-basic-001', title: 'Introduction to Microsoft Bot Framework', duration: '45 min', level: 'basic', isFree: true },
        { id: 'bot-basic-002', title: 'Bot Architecture and Components Overview', duration: '50 min', level: 'basic', isFree: true },
        { id: 'bot-basic-003', title: 'Understanding Bot Service and Channels', duration: '45 min', level: 'basic', isFree: true },
        { id: 'bot-basic-004', title: 'Bot Emulator Setup and Configuration', duration: '40 min', level: 'basic', isFree: true },
        { id: 'bot-basic-005', title: 'Conversation Flow Testing Basics', duration: '48 min', level: 'basic', isFree: true },
        { id: 'bot-basic-006', title: 'Dialog and Waterfall Testing', duration: '52 min', level: 'basic' },
        { id: 'bot-basic-007', title: 'Testing Bot Responses and Prompts', duration: '45 min', level: 'basic' },
        { id: 'bot-basic-008', title: 'State Management Testing', duration: '50 min', level: 'basic' },
        { id: 'bot-basic-009', title: 'Intent Recognition Testing', duration: '55 min', level: 'basic' },
        { id: 'bot-basic-010', title: 'Entity Extraction Validation', duration: '48 min', level: 'basic' },
        { id: 'bot-basic-011', title: 'LUIS Integration Testing', duration: '55 min', level: 'basic' },
        { id: 'bot-basic-012', title: 'QnA Maker Testing Strategies', duration: '50 min', level: 'basic' },
        { id: 'bot-basic-013', title: 'Basic Unit Testing for Bots', duration: '45 min', level: 'basic' },
        { id: 'bot-basic-014', title: 'Manual Testing Best Practices', duration: '42 min', level: 'basic' },
      ],
    },
    {
      id: 'bot-section-2-automation',
      title: 'Section 2: Automated Bot Testing (13 lessons)',
      description: 'Building automated test suites for conversational bots',
      lessons: [
        { id: 'bot-basic-015', title: 'Bot Framework Testing Library Setup', duration: '50 min', level: 'basic' },
        { id: 'bot-basic-016', title: 'Creating Test Adapters', duration: '55 min', level: 'basic' },
        { id: 'bot-basic-017', title: 'Mocking Bot Dependencies', duration: '48 min', level: 'basic' },
        { id: 'bot-basic-018', title: 'Dialog Unit Testing Patterns', duration: '52 min', level: 'basic' },
        { id: 'bot-basic-019', title: 'Testing Adaptive Cards', duration: '45 min', level: 'basic' },
        { id: 'bot-basic-020', title: 'Testing Rich Media Responses', duration: '48 min', level: 'basic' },
        { id: 'bot-basic-021', title: 'Integration Testing with Emulator', duration: '55 min', level: 'basic' },
        { id: 'bot-basic-022', title: 'End-to-End Conversation Tests', duration: '58 min', level: 'basic' },
        { id: 'bot-basic-023', title: 'Testing Multi-Turn Conversations', duration: '52 min', level: 'basic' },
        { id: 'bot-basic-024', title: 'Regression Testing Strategies', duration: '48 min', level: 'basic' },
        { id: 'bot-basic-025', title: 'Test Data Management for Bots', duration: '45 min', level: 'basic' },
        { id: 'bot-basic-026', title: 'CI/CD Pipeline Integration', duration: '55 min', level: 'basic' },
        { id: 'bot-basic-027', title: 'Test Reporting and Analytics', duration: '42 min', level: 'basic' },
      ],
    },
    {
      id: 'bot-section-3-advanced',
      title: 'Section 3: Advanced Bot Testing Techniques (14 lessons)',
      description: 'Professional-level testing for complex bot implementations',
      lessons: [
        { id: 'bot-int-001', title: 'Testing Azure Cognitive Services Integration', duration: '60 min', level: 'intermediate' },
        { id: 'bot-int-002', title: 'NLP Model Testing and Validation', duration: '58 min', level: 'intermediate' },
        { id: 'bot-int-003', title: 'Testing Bot with Speech Services', duration: '55 min', level: 'intermediate' },
        { id: 'bot-int-004', title: 'Multi-Channel Testing Strategies', duration: '52 min', level: 'intermediate' },
        { id: 'bot-int-005', title: 'Testing Microsoft Teams Bots', duration: '58 min', level: 'intermediate' },
        { id: 'bot-int-006', title: 'Slack and Web Chat Testing', duration: '50 min', level: 'intermediate' },
        { id: 'bot-int-007', title: 'Testing Bot Security and Auth', duration: '62 min', level: 'intermediate' },
        { id: 'bot-int-008', title: 'Performance Testing for Bots', duration: '55 min', level: 'intermediate' },
        { id: 'bot-int-009', title: 'Load Testing Conversations', duration: '58 min', level: 'intermediate' },
        { id: 'bot-int-010', title: 'Concurrency and State Testing', duration: '52 min', level: 'intermediate' },
        { id: 'bot-int-011', title: 'Testing Bot Middleware', duration: '48 min', level: 'intermediate' },
        { id: 'bot-int-012', title: 'Error Handling and Fallback Testing', duration: '55 min', level: 'intermediate' },
        { id: 'bot-int-013', title: 'Testing Proactive Messages', duration: '50 min', level: 'intermediate' },
        { id: 'bot-int-014', title: 'Testing Bot Analytics Integration', duration: '52 min', level: 'intermediate' },
      ],
    },
    {
      id: 'bot-section-4-enterprise',
      title: 'Section 4: Enterprise Bot Testing (13 lessons)',
      description: 'Testing conversational AI at enterprise scale',
      lessons: [
        { id: 'bot-int-015', title: 'Enterprise Bot Architecture Testing', duration: '62 min', level: 'intermediate' },
        { id: 'bot-int-016', title: 'Testing Bot Composer Solutions', duration: '58 min', level: 'intermediate' },
        { id: 'bot-int-017', title: 'Power Virtual Agents Testing', duration: '55 min', level: 'intermediate' },
        { id: 'bot-int-018', title: 'Testing Knowledge Bases at Scale', duration: '52 min', level: 'intermediate' },
        { id: 'bot-int-019', title: 'Multi-Language Bot Testing', duration: '60 min', level: 'intermediate' },
        { id: 'bot-int-020', title: 'Testing Localization and i18n', duration: '55 min', level: 'intermediate' },
        { id: 'bot-int-021', title: 'Accessibility Testing for Bots', duration: '48 min', level: 'intermediate' },
        { id: 'bot-int-022', title: 'Compliance and Regulatory Testing', duration: '58 min', level: 'intermediate' },
        { id: 'bot-int-023', title: 'Testing Data Privacy (GDPR/CCPA)', duration: '55 min', level: 'intermediate' },
        { id: 'bot-int-024', title: 'Testing Bot with Backend APIs', duration: '52 min', level: 'intermediate' },
        { id: 'bot-int-025', title: 'Database Integration Testing', duration: '50 min', level: 'intermediate' },
        { id: 'bot-int-026', title: 'Testing External Service Integrations', duration: '58 min', level: 'intermediate' },
        { id: 'bot-int-027', title: 'Monitoring and Alerting Setup', duration: '55 min', level: 'intermediate' },
      ],
    },
    {
      id: 'bot-section-5-practitioner',
      title: 'Section 5: Practitioner Level - AI-Powered Testing (14 lessons)',
      description: 'Advanced AI techniques for testing conversational chatbots',
      lessons: [
        { id: 'bot-adv-001', title: 'AI Test Generation for Chatbots', duration: '65 min', level: 'advanced' },
        { id: 'bot-adv-002', title: 'Testing LLM-Powered Bots', duration: '68 min', level: 'advanced' },
        { id: 'bot-adv-003', title: 'GPT Integration Testing', duration: '60 min', level: 'advanced' },
        { id: 'bot-adv-004', title: 'Testing Azure OpenAI Bots', duration: '62 min', level: 'advanced' },
        { id: 'bot-adv-005', title: 'Prompt Engineering Validation', duration: '58 min', level: 'advanced' },
        { id: 'bot-adv-006', title: 'Testing AI Hallucinations', duration: '55 min', level: 'advanced' },
        { id: 'bot-adv-007', title: 'Bias Detection in Bot Responses', duration: '60 min', level: 'advanced' },
        { id: 'bot-adv-008', title: 'Testing Conversation Context', duration: '52 min', level: 'advanced' },
        { id: 'bot-adv-009', title: 'Long-Context Window Testing', duration: '58 min', level: 'advanced' },
        { id: 'bot-adv-010', title: 'Testing RAG-Based Chatbots', duration: '65 min', level: 'advanced' },
        { id: 'bot-adv-011', title: 'Vector Database Testing', duration: '55 min', level: 'advanced' },
        { id: 'bot-adv-012', title: 'Testing Semantic Search Quality', duration: '58 min', level: 'advanced' },
        { id: 'bot-adv-013', title: 'Chaos Engineering for Bots', duration: '52 min', level: 'advanced' },
        { id: 'bot-adv-014', title: 'Building Bot Testing Frameworks', duration: '68 min', level: 'advanced' },
      ],
    },
    {
      id: 'bot-section-6-leadership',
      title: 'Section 6: Bot Testing Leadership (13 lessons)',
      description: 'Leading conversational AI testing teams and strategy',
      lessons: [
        { id: 'bot-adv-015', title: 'Building Conversational AI Test Teams', duration: '60 min', level: 'advanced' },
        { id: 'bot-adv-016', title: 'Bot Testing Strategy Development', duration: '58 min', level: 'advanced' },
        { id: 'bot-adv-017', title: 'ROI Measurement for Bot Testing', duration: '55 min', level: 'advanced' },
        { id: 'bot-adv-018', title: 'Vendor Selection for Bot Platforms', duration: '52 min', level: 'advanced' },
        { id: 'bot-adv-019', title: 'Tool Evaluation and Selection', duration: '50 min', level: 'advanced' },
        { id: 'bot-adv-020', title: 'Test Environment Management', duration: '55 min', level: 'advanced' },
        { id: 'bot-adv-021', title: 'Bot Quality Metrics and KPIs', duration: '58 min', level: 'advanced' },
        { id: 'bot-adv-022', title: 'Customer Satisfaction Measurement', duration: '52 min', level: 'advanced' },
        { id: 'bot-adv-023', title: 'Continuous Improvement Programs', duration: '55 min', level: 'advanced' },
        { id: 'bot-adv-024', title: 'Bot Testing Center of Excellence', duration: '62 min', level: 'advanced' },
        { id: 'bot-adv-025', title: 'Training Teams on Bot Testing', duration: '48 min', level: 'advanced' },
        { id: 'bot-adv-026', title: 'Future of Conversational AI Testing', duration: '55 min', level: 'advanced' },
        { id: 'bot-adv-027', title: 'Building Your Bot Testing Career', duration: '50 min', level: 'advanced' },
      ],
    },
  ],
};

// Export all courses
export const allAiInQaCourses = [
  basicAiInQaCourse,
  intermediateAiInQaCourse,
  advancedAiInQaCourse,
  microsoftBotFrameworkCourse,
];
