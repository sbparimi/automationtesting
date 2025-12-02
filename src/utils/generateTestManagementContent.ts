// Dynamic content generator for Test Management lessons

export interface LessonContent {
  title: string;
  objectives: string[];
  fiveWhys: { question: string; answer: string }[];
  codeImplementation?: { title: string; code: string; explanation: string }[];
  benefits: string[];
  commonMistakes: string[];
  exercises: string[];
  resources: string[];
}

export function generateTestManagementContent(lessonId: string, lessonTitle: string): LessonContent {
  const lessonContents: Record<string, LessonContent> = {
    'tm-basic-001': {
      title: 'Introduction to TMAP Next',
      objectives: [
        'Understand TMAP Next methodology and its evolution',
        'Learn the core principles of structured testing',
        'Identify when to apply TMAP Next in projects',
        'Recognize TMAP Next lifecycle phases'
      ],
      fiveWhys: [
        { question: 'Why use TMAP Next?', answer: 'TMAP Next provides a comprehensive, business-driven test approach that ensures quality while optimizing resources and time.' },
        { question: 'Why is it business-driven?', answer: 'Because testing should deliver value aligned with business objectives, not just find bugs.' },
        { question: 'Why align with business objectives?', answer: 'To ensure testing effort focuses on what matters most to stakeholders and end-users.' },
        { question: 'Why focus on stakeholders?', answer: 'Stakeholder satisfaction determines project success and quality perception.' },
        { question: 'Why does perception matter?', answer: 'Quality is ultimately judged by users, making their perspective the true measure of success.' }
      ],
      benefits: [
        'Structured approach reduces testing chaos',
        'Risk-based prioritization optimizes effort',
        'Clear communication with stakeholders',
        'Scalable from small to enterprise projects',
        'Industry-proven methodology'
      ],
      commonMistakes: [
        'Applying TMAP rigidly without context',
        'Ignoring business objectives in test planning',
        'Over-documenting at the expense of testing',
        'Treating TMAP as a checklist not a framework'
      ],
      exercises: [
        'Map your current test process to TMAP Next phases',
        'Identify gaps in your testing approach',
        'Create a TMAP adoption roadmap',
        'Present TMAP benefits to stakeholders'
      ],
      resources: [
        'TMAP Next official documentation',
        'TMap Suite handbook',
        'Sogeti testing resources',
        'ISTQB foundation syllabus'
      ]
    },
    'tm-adv-001': {
      title: 'Enterprise Test Strategy Design',
      objectives: [
        'Design organization-wide test strategies',
        'Align testing with business goals at enterprise level',
        'Create governance models for multi-team testing',
        'Establish quality metrics for executive reporting'
      ],
      fiveWhys: [
        { question: 'Why need enterprise strategy?', answer: 'Individual team strategies create silos, inconsistency, and missed integration opportunities.' },
        { question: 'Why does inconsistency matter?', answer: 'Inconsistent testing leads to quality gaps, duplicated effort, and unpredictable releases.' },
        { question: 'Why unpredictable releases?', answer: 'Without unified standards, quality varies making release decisions unreliable.' },
        { question: 'Why does this impact business?', answer: 'Unreliable releases damage customer trust, increase support costs, and slow innovation.' },
        { question: 'Why slow innovation?', answer: 'Teams spend time fixing preventable issues instead of delivering new value.' }
      ],
      codeImplementation: [
        {
          title: 'Test Strategy Template',
          code: `# Enterprise Test Strategy Document

## 1. Vision & Objectives
- Quality vision: "Zero critical defects in production"
- Business alignment: Map to company OKRs
- Success metrics: Release confidence score > 95%

## 2. Governance Structure
- Test Architecture Board (TAB)
- Quality Guild representatives
- Monthly strategy reviews

## 3. Standards & Practices
- Test pyramid ratios: 70% unit, 20% integration, 10% E2E
- Coverage requirements by risk tier
- Automation-first mandate

## 4. Tools & Infrastructure
- Approved tool stack
- Shared test environments
- CI/CD integration requirements`,
          explanation: 'A comprehensive test strategy document template for enterprise-wide adoption.'
        }
      ],
      benefits: [
        'Consistent quality across all products',
        'Optimized testing investments',
        'Clear executive visibility',
        'Reduced time-to-market',
        'Improved cross-team collaboration'
      ],
      commonMistakes: [
        'Creating strategy without stakeholder buy-in',
        'Over-standardizing without flexibility',
        'Ignoring team autonomy needs',
        'Not measuring strategy effectiveness'
      ],
      exercises: [
        'Audit current test strategies across teams',
        'Design governance structure proposal',
        'Create executive quality dashboard',
        'Present ROI of unified strategy'
      ],
      resources: [
        'Enterprise Architecture patterns',
        'IT governance frameworks (COBIT)',
        'Quality management standards (ISO)',
        'Industry case studies'
      ]
    }
  };

  // Return specific content or generate generic content
  if (lessonContents[lessonId]) {
    return lessonContents[lessonId];
  }

  // Generate content based on lesson title pattern
  return generateGenericContent(lessonId, lessonTitle);
}

function generateGenericContent(lessonId: string, title: string): LessonContent {
  const isBasic = lessonId.includes('basic');
  const isIntermediate = lessonId.includes('int');
  const isAdvanced = lessonId.includes('adv');

  return {
    title,
    objectives: [
      `Understand core concepts of ${title}`,
      `Apply ${title} in real-world scenarios`,
      `Identify best practices and common patterns`,
      `Evaluate when to use ${title} effectively`
    ],
    fiveWhys: [
      { question: `Why is ${title} important?`, answer: 'It provides structured approach to solve common testing challenges efficiently.' },
      { question: 'Why use structured approaches?', answer: 'Structured approaches ensure consistency, repeatability, and quality outcomes.' },
      { question: 'Why does consistency matter?', answer: 'Consistent processes reduce variability and improve predictability of results.' },
      { question: 'Why seek predictability?', answer: 'Predictable testing enables better planning, resource allocation, and stakeholder confidence.' },
      { question: 'Why build confidence?', answer: 'Stakeholder confidence leads to better support for QA initiatives and career growth.' }
    ],
    benefits: [
      'Improved testing efficiency',
      'Better resource utilization',
      'Enhanced quality outcomes',
      'Clear documentation and knowledge transfer',
      'Industry-standard practices'
    ],
    commonMistakes: [
      'Rushing implementation without understanding',
      'Not adapting to project context',
      'Ignoring team feedback',
      'Over-engineering simple solutions'
    ],
    exercises: [
      `Create a practical implementation plan for ${title}`,
      'Document lessons learned from application',
      'Share knowledge with team members',
      'Measure effectiveness with metrics'
    ],
    resources: [
      'ISTQB syllabus materials',
      'TMAP Next documentation',
      'Industry blogs and articles',
      'Professional testing communities'
    ]
  };
}
