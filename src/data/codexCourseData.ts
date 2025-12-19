// 30-Hour Udemy-Style Course: Automation Testing with Cypress using OpenAI Codex
// Zero → Enterprise comprehensive course structure

export interface CodexLessonData {
  id: string;
  lessonNumber: number;
  title: string;
  duration: string;
  phase: string;
  description: string;
  whatYouWillLearn: string[];
  whyThisMatters: string;
  whatYouCanDoAfter: string[];
}

export interface CodexPhase {
  id: string;
  title: string;
  description: string;
  lessons: CodexLessonData[];
}

// PHASE 1 — Absolute Foundations (Lessons 1–6)
const phase1Lessons: CodexLessonData[] = [
  {
    id: "codex-lesson-1",
    lessonNumber: 1,
    title: "Understanding Your Computer for Test Automation",
    duration: "1 hour",
    phase: "Phase 1: Absolute Foundations",
    description: "Learn the fundamentals of your operating system, file management, and prepare your computer for test automation development.",
    whatYouWillLearn: [
      "How your operating system works (Windows/Mac/Linux)",
      "Understanding folders, files, and file paths",
      "How to navigate your file system efficiently",
      "What software installation means and how it works",
      "Setting up a dedicated workspace for automation projects"
    ],
    whyThisMatters: "Before writing any code, you need to understand how your computer organizes files and programs. Every test automation project lives in folders, and knowing how to navigate them is the foundation of everything else.",
    whatYouCanDoAfter: [
      "Navigate to any folder on your computer using File Explorer or Finder",
      "Create organized folder structures for projects",
      "Understand what a file path is and how to find it",
      "Distinguish between different file types (.ts, .js, .json, etc.)"
    ]
  },
  {
    id: "codex-lesson-2",
    lessonNumber: 2,
    title: "Installing and Mastering Visual Studio Code",
    duration: "1 hour",
    phase: "Phase 1: Absolute Foundations",
    description: "Download, install, and configure Visual Studio Code - the primary development environment for Cypress test automation.",
    whatYouWillLearn: [
      "How to download VS Code from the official website",
      "Step-by-step installation on Windows, Mac, or Linux",
      "Understanding the VS Code interface and panels",
      "Installing essential extensions for testing",
      "Customizing VS Code for optimal productivity"
    ],
    whyThisMatters: "VS Code is where you will spend 90% of your time as a test automation engineer. Mastering this tool is non-negotiable for productivity.",
    whatYouCanDoAfter: [
      "Open VS Code and navigate all panels confidently",
      "Install and manage extensions",
      "Create and edit files within VS Code",
      "Use basic keyboard shortcuts to speed up your work"
    ]
  },
  {
    id: "codex-lesson-3",
    lessonNumber: 3,
    title: "Terminal Basics for Test Automation",
    duration: "1 hour",
    phase: "Phase 1: Absolute Foundations",
    description: "Learn to use the command line terminal - the essential tool for running tests, installing packages, and managing your automation projects.",
    whatYouWillLearn: [
      "What a terminal is and why developers use it",
      "Opening terminal in VS Code and as standalone",
      "Basic navigation commands (cd, ls/dir, pwd)",
      "Creating and deleting folders from terminal",
      "Understanding command structure and flags"
    ],
    whyThisMatters: "Every Cypress command runs in the terminal. Without terminal skills, you cannot run tests, install dependencies, or manage your project.",
    whatYouCanDoAfter: [
      "Open and close terminal windows",
      "Navigate to any folder using terminal commands",
      "Create project folders from the command line",
      "Run basic commands without fear"
    ]
  },
  {
    id: "codex-lesson-4",
    lessonNumber: 4,
    title: "Node.js and npm - The Foundation of Modern Testing",
    duration: "1 hour",
    phase: "Phase 1: Absolute Foundations",
    description: "Install Node.js and npm, understand what they do, and learn how they power Cypress and every modern JavaScript testing tool.",
    whatYouWillLearn: [
      "What Node.js is and why it's needed for Cypress",
      "Step-by-step Node.js installation verification",
      "What npm is and how package management works",
      "Understanding package.json and node_modules",
      "Installing your first npm packages"
    ],
    whyThisMatters: "Cypress runs on Node.js. npm manages all your testing dependencies. Without these, you cannot use any modern JavaScript testing framework.",
    whatYouCanDoAfter: [
      "Verify Node.js and npm are installed correctly",
      "Understand what happens when you run npm install",
      "Read and understand a basic package.json file",
      "Install packages globally and locally"
    ]
  },
  {
    id: "codex-lesson-5",
    lessonNumber: 5,
    title: "Your First Cypress Installation and Test Run",
    duration: "1 hour",
    phase: "Phase 1: Absolute Foundations",
    description: "Install Cypress from scratch, run the Test Runner for the first time, and execute your very first automated test.",
    whatYouWillLearn: [
      "Creating a new project folder structure",
      "Initializing npm and installing Cypress",
      "Understanding the Cypress folder structure",
      "Opening Cypress Test Runner for the first time",
      "Running example tests and understanding results"
    ],
    whyThisMatters: "This is the moment everything becomes real. You will see actual automated tests running in a browser, controlled entirely by your code.",
    whatYouCanDoAfter: [
      "Install Cypress in any new project",
      "Open the Cypress Test Runner",
      "Run existing tests and see results",
      "Navigate the Cypress folder structure"
    ]
  },
  {
    id: "codex-lesson-6",
    lessonNumber: 6,
    title: "Understanding TypeScript Basics for Cypress",
    duration: "1 hour",
    phase: "Phase 1: Absolute Foundations",
    description: "Learn TypeScript fundamentals - the typed superset of JavaScript that makes Cypress tests more reliable and maintainable.",
    whatYouWillLearn: [
      "What TypeScript is and why enterprises use it",
      "Setting up TypeScript in a Cypress project",
      "Basic types: string, number, boolean, arrays",
      "Understanding type inference and annotations",
      "Converting JavaScript tests to TypeScript"
    ],
    whyThisMatters: "Enterprise teams use TypeScript because it catches errors before tests run. This single skill separates junior from professional testers.",
    whatYouCanDoAfter: [
      "Configure TypeScript in Cypress projects",
      "Write type-safe test variables",
      "Understand TypeScript error messages",
      "Use basic type annotations in your tests"
    ]
  }
];

// PHASE 2 — Cypress Fundamentals (Lessons 7–12)
const phase2Lessons: CodexLessonData[] = [
  {
    id: "codex-lesson-7",
    lessonNumber: 7,
    title: "Writing Your First Real Cypress Test",
    duration: "1 hour",
    phase: "Phase 2: Cypress Fundamentals",
    description: "Write your first complete Cypress test from scratch, understanding test structure, commands, and the describe/it pattern.",
    whatYouWillLearn: [
      "The anatomy of a Cypress test file",
      "describe() and it() blocks explained",
      "Visiting pages with cy.visit()",
      "Basic interactions: click, type, select",
      "Running and debugging your first test"
    ],
    whyThisMatters: "This is the core skill of test automation. Every test you ever write will follow this pattern.",
    whatYouCanDoAfter: [
      "Write a complete test file from scratch",
      "Use describe/it blocks to organize tests",
      "Navigate to URLs and interact with elements",
      "Run tests and interpret results"
    ]
  },
  {
    id: "codex-lesson-8",
    lessonNumber: 8,
    title: "Mastering Element Selectors in Cypress",
    duration: "1 hour",
    phase: "Phase 2: Cypress Fundamentals",
    description: "Learn every method of finding elements on a page - from basic selectors to data-testid attributes used in production.",
    whatYouWillLearn: [
      "CSS selectors for element identification",
      "cy.get(), cy.contains(), cy.find() differences",
      "Using data-testid for reliable element selection",
      "XPath vs CSS: when to use each",
      "Best practices for selector maintenance"
    ],
    whyThisMatters: "Flaky tests are usually caused by bad selectors. Master this and your tests will be stable for years.",
    whatYouCanDoAfter: [
      "Write CSS selectors for any element",
      "Choose the right Cypress command for element selection",
      "Implement data-testid in your testing strategy",
      "Audit and improve existing selectors"
    ]
  },
  {
    id: "codex-lesson-9",
    lessonNumber: 9,
    title: "Cypress Test Structure and Organization",
    duration: "1 hour",
    phase: "Phase 2: Cypress Fundamentals",
    description: "Organize your tests professionally using hooks, fixtures, and proper file structure that scales with enterprise applications.",
    whatYouWillLearn: [
      "before, beforeEach, after, afterEach hooks",
      "Organizing tests by feature vs. by page",
      "Creating and using fixture files",
      "Test isolation and independence principles",
      "Naming conventions used by professionals"
    ],
    whyThisMatters: "Poorly organized tests become unmaintainable. Learn the patterns used by teams managing 10,000+ tests.",
    whatYouCanDoAfter: [
      "Use hooks to set up and tear down test state",
      "Create a scalable folder structure",
      "Load test data from fixture files",
      "Write isolated, independent tests"
    ]
  },
  {
    id: "codex-lesson-10",
    lessonNumber: 10,
    title: "Assertions - Verifying Your Application Works",
    duration: "1 hour",
    phase: "Phase 2: Cypress Fundamentals",
    description: "Master Cypress assertions using Chai matchers - the critical skill that determines if your tests actually catch bugs.",
    whatYouWillLearn: [
      "Understanding should() and expect() assertions",
      "Common assertions: visible, contain, have.length",
      "Chaining multiple assertions",
      "Custom assertion messages for better debugging",
      "Implicit vs explicit assertions"
    ],
    whyThisMatters: "Assertions are how tests verify correctness. Weak assertions mean bugs slip through to production.",
    whatYouCanDoAfter: [
      "Write assertions for any verification scenario",
      "Chain assertions for comprehensive checks",
      "Debug failing assertions effectively",
      "Choose between implicit and explicit assertions"
    ]
  },
  {
    id: "codex-lesson-11",
    lessonNumber: 11,
    title: "Debugging Failing Cypress Tests",
    duration: "1 hour",
    phase: "Phase 2: Cypress Fundamentals",
    description: "Learn systematic debugging techniques to quickly identify and fix failing tests using Cypress DevTools and debugging commands.",
    whatYouWillLearn: [
      "Reading Cypress error messages effectively",
      "Using cy.debug() and cy.pause()",
      "Time-travel debugging in Test Runner",
      "Browser DevTools integration",
      "Common failure patterns and fixes"
    ],
    whyThisMatters: "You will spend significant time debugging. Fast debugging skills directly translate to productivity.",
    whatYouCanDoAfter: [
      "Interpret any Cypress error message",
      "Use debugging commands to pause execution",
      "Inspect element state at any point in time",
      "Fix common test failures quickly"
    ]
  },
  {
    id: "codex-lesson-12",
    lessonNumber: 12,
    title: "From Manual Tester to Automation Engineer Mindset",
    duration: "1 hour",
    phase: "Phase 2: Cypress Fundamentals",
    description: "Transform your thinking from manual testing to automation - understanding when, what, and how to automate effectively.",
    whatYouWillLearn: [
      "What to automate vs. what to test manually",
      "The test automation pyramid",
      "ROI of automation: calculating value",
      "Managing test maintenance burden",
      "Building an automation-first culture"
    ],
    whyThisMatters: "Automation is not about automating everything. Strategic thinking separates effective engineers from script writers.",
    whatYouCanDoAfter: [
      "Identify high-value automation candidates",
      "Calculate ROI for automation efforts",
      "Plan a balanced test strategy",
      "Communicate automation value to stakeholders"
    ]
  }
];

// PHASE 3 — OpenAI Codex Introduction (Lessons 13–17)
const phase3Lessons: CodexLessonData[] = [
  {
    id: "codex-lesson-13",
    lessonNumber: 13,
    title: "Introduction to OpenAI Codex and GitHub Copilot",
    duration: "1 hour",
    phase: "Phase 3: OpenAI Codex Introduction",
    description: "Understand what AI code generation is, how Codex powers GitHub Copilot, and the proper way to use AI in enterprise testing.",
    whatYouWillLearn: [
      "What OpenAI Codex actually is",
      "How GitHub Copilot uses Codex",
      "AI limitations and capabilities for testing",
      "Enterprise safety considerations",
      "The human-AI collaboration model"
    ],
    whyThisMatters: "AI can 10x your productivity, but misuse creates security risks and unreliable tests. Understanding boundaries is critical.",
    whatYouCanDoAfter: [
      "Explain Codex to non-technical stakeholders",
      "Identify appropriate use cases for AI",
      "Recognize AI limitations in test generation",
      "Plan safe AI integration in workflows"
    ]
  },
  {
    id: "codex-lesson-14",
    lessonNumber: 14,
    title: "Installing and Configuring GitHub Copilot in VS Code",
    duration: "1 hour",
    phase: "Phase 3: OpenAI Codex Introduction",
    description: "Complete step-by-step installation of GitHub Copilot, configuration for optimal testing workflows, and verification of setup.",
    whatYouWillLearn: [
      "GitHub account setup for Copilot access",
      "Installing Copilot extension in VS Code",
      "Configuring Copilot settings for testing",
      "Understanding Copilot subscription options",
      "Troubleshooting common installation issues"
    ],
    whyThisMatters: "Proper configuration ensures you get the best AI suggestions for test automation code.",
    whatYouCanDoAfter: [
      "Install GitHub Copilot from scratch",
      "Configure settings for testing workflows",
      "Verify Copilot is working correctly",
      "Troubleshoot common setup problems"
    ]
  },
  {
    id: "codex-lesson-15",
    lessonNumber: 15,
    title: "Your First AI-Generated Cypress Test",
    duration: "1 hour",
    phase: "Phase 3: OpenAI Codex Introduction",
    description: "Write your first Cypress test using AI assistance - from writing prompts to accepting, modifying, and improving AI suggestions.",
    whatYouWillLearn: [
      "Writing effective comments that trigger AI",
      "Accepting and rejecting AI suggestions",
      "Modifying AI output for your needs",
      "When to trust AI vs. write manually",
      "Iterating on AI-generated code"
    ],
    whyThisMatters: "This is where productivity gains begin. Learn the workflow that 10x engineers use daily.",
    whatYouCanDoAfter: [
      "Generate complete Cypress tests using AI",
      "Evaluate AI suggestion quality",
      "Modify AI code to meet requirements",
      "Develop an efficient AI workflow"
    ]
  },
  {
    id: "codex-lesson-16",
    lessonNumber: 16,
    title: "Prompt Engineering Fundamentals for Testers",
    duration: "1 hour",
    phase: "Phase 3: OpenAI Codex Introduction",
    description: "Master the art of writing prompts that generate accurate, production-ready test code - the core skill of AI-assisted development.",
    whatYouWillLearn: [
      "Anatomy of an effective testing prompt",
      "Context loading techniques",
      "Specificity vs. generality in prompts",
      "Iterative prompt refinement",
      "Building a personal prompt library"
    ],
    whyThisMatters: "The quality of AI output is 100% dependent on prompt quality. Master prompts, master AI.",
    whatYouCanDoAfter: [
      "Write prompts that generate accurate code",
      "Refine prompts to improve output",
      "Build a reusable prompt library",
      "Teach prompt engineering to others"
    ]
  },
  {
    id: "codex-lesson-17",
    lessonNumber: 17,
    title: "Safe Enterprise Usage of AI Code Generation",
    duration: "1 hour",
    phase: "Phase 3: OpenAI Codex Introduction",
    description: "Learn the critical safety boundaries for using AI in enterprise environments - what AI must never do and how to ensure compliance.",
    whatYouWillLearn: [
      "AI at authoring-time only - never runtime",
      "Credentials and secrets handling rules",
      "Code review requirements for AI output",
      "Compliance and audit trail maintenance",
      "Enterprise policy development"
    ],
    whyThisMatters: "One security breach can end careers and companies. These rules are non-negotiable.",
    whatYouCanDoAfter: [
      "Implement safe AI usage policies",
      "Review AI code for security issues",
      "Maintain compliance audit trails",
      "Train teams on AI safety"
    ]
  }
];

// PHASE 4 — Framework & Patterns (Lessons 18–23)
const phase4Lessons: CodexLessonData[] = [
  {
    id: "codex-lesson-18",
    lessonNumber: 18,
    title: "Page Object Model (POM) with AI Generation",
    duration: "1 hour",
    phase: "Phase 4: Framework & Patterns",
    description: "Learn the Page Object Model pattern and use AI to generate production-grade page objects that scale across enterprise applications.",
    whatYouWillLearn: [
      "What POM is and why enterprises use it",
      "Designing page object architecture",
      "AI prompts for generating page objects",
      "Methods, locators, and return types",
      "Maintaining page objects over time"
    ],
    whyThisMatters: "POM is the industry standard. Without it, tests become unmaintainable spaghetti code.",
    whatYouCanDoAfter: [
      "Design page object architecture",
      "Generate page objects using AI",
      "Implement chainable methods",
      "Maintain page objects effectively"
    ]
  },
  {
    id: "codex-lesson-19",
    lessonNumber: 19,
    title: "The Screenplay Pattern for Complex Workflows",
    duration: "1 hour",
    phase: "Phase 4: Framework & Patterns",
    description: "Learn the Screenplay pattern - the advanced architecture used by enterprise teams for complex, actor-based test scenarios.",
    whatYouWillLearn: [
      "Screenplay pattern fundamentals",
      "Actors, Tasks, and Questions",
      "When to use Screenplay vs. POM",
      "AI-assisted Screenplay implementation",
      "Combining patterns effectively"
    ],
    whyThisMatters: "Screenplay handles complexity that breaks POM. Enterprise applications need this level of abstraction.",
    whatYouCanDoAfter: [
      "Implement Screenplay pattern",
      "Create Actors, Tasks, and Questions",
      "Choose between POM and Screenplay",
      "Combine patterns for optimal results"
    ]
  },
  {
    id: "codex-lesson-20",
    lessonNumber: 20,
    title: "Hybrid Screenplay + POM Architecture",
    duration: "1 hour",
    phase: "Phase 4: Framework & Patterns",
    description: "Combine Screenplay and Page Object Model into a powerful hybrid architecture that handles any enterprise testing challenge.",
    whatYouWillLearn: [
      "When hybrid architecture makes sense",
      "Layered architecture design",
      "AI generation for hybrid patterns",
      "Real-world implementation examples",
      "Migration strategies from POM to hybrid"
    ],
    whyThisMatters: "The most scalable enterprise frameworks use hybrid approaches. This is senior-level architecture.",
    whatYouCanDoAfter: [
      "Design hybrid architectures",
      "Generate hybrid components with AI",
      "Migrate existing frameworks",
      "Justify architecture decisions"
    ]
  },
  {
    id: "codex-lesson-21",
    lessonNumber: 21,
    title: "Test Data Management Strategies",
    duration: "1 hour",
    phase: "Phase 4: Framework & Patterns",
    description: "Master test data handling - from fixtures to factories to dynamic generation, ensuring tests never fail due to data issues.",
    whatYouWillLearn: [
      "Fixtures for static test data",
      "Factory patterns for dynamic data",
      "AI-generated test data",
      "Database seeding strategies",
      "Data cleanup and isolation"
    ],
    whyThisMatters: "Bad test data is the #1 cause of flaky tests. Master this and your tests become rock solid.",
    whatYouCanDoAfter: [
      "Implement fixture-based testing",
      "Create data factories",
      "Generate realistic test data with AI",
      "Maintain data isolation between tests"
    ]
  },
  {
    id: "codex-lesson-22",
    lessonNumber: 22,
    title: "Custom Commands and Reusable Utilities",
    duration: "1 hour",
    phase: "Phase 4: Framework & Patterns",
    description: "Create powerful custom Cypress commands that encapsulate complex operations and can be reused across your entire test suite.",
    whatYouWillLearn: [
      "Creating custom Cypress commands",
      "Command chaining and return values",
      "AI generation of custom commands",
      "Type definitions for custom commands",
      "Command organization and documentation"
    ],
    whyThisMatters: "Custom commands eliminate code duplication and make tests readable by non-technical stakeholders.",
    whatYouCanDoAfter: [
      "Create any custom command",
      "Add TypeScript types for commands",
      "Generate commands with AI",
      "Organize command libraries"
    ]
  },
  {
    id: "codex-lesson-23",
    lessonNumber: 23,
    title: "Eliminating Flaky Tests Forever",
    duration: "1 hour",
    phase: "Phase 4: Framework & Patterns",
    description: "Learn the root causes of flaky tests and implement patterns that ensure 100% reliable test execution.",
    whatYouWillLearn: [
      "Root causes of test flakiness",
      "Waiting strategies that actually work",
      "Network request handling",
      "Animation and timing issues",
      "Building a flake-free test suite"
    ],
    whyThisMatters: "Flaky tests destroy trust in automation. Zero tolerance for flakiness is the enterprise standard.",
    whatYouCanDoAfter: [
      "Identify flakiness root causes",
      "Implement proper waiting strategies",
      "Handle network timing correctly",
      "Build zero-flake test suites"
    ]
  }
];

// PHASE 5 — Enterprise & CI/CD (Lessons 24–30)
const phase5Lessons: CodexLessonData[] = [
  {
    id: "codex-lesson-24",
    lessonNumber: 24,
    title: "Multi-Environment Configuration (20+ Environments)",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Configure Cypress to run against 20+ different environments - from local development to production-like staging systems.",
    whatYouWillLearn: [
      "Environment configuration architecture",
      "cypress.config.ts for multiple envs",
      "Environment-specific test data",
      "Secret management per environment",
      "Environment switching strategies"
    ],
    whyThisMatters: "Enterprise teams run tests against many environments. Without proper config, this becomes chaos.",
    whatYouCanDoAfter: [
      "Configure Cypress for any environment",
      "Switch environments seamlessly",
      "Manage environment secrets safely",
      "Scale to 20+ environments"
    ]
  },
  {
    id: "codex-lesson-25",
    lessonNumber: 25,
    title: "GitLab CI/CD Pipeline Configuration",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Build production-grade GitLab CI/CD pipelines that run Cypress tests automatically on every code change.",
    whatYouWillLearn: [
      "GitLab CI/CD fundamentals",
      ".gitlab-ci.yml file structure",
      "Cypress Docker images",
      "Pipeline stages and jobs",
      "Artifact collection and reporting"
    ],
    whyThisMatters: "CI/CD is where automation delivers value. Manual test runs are not automation - pipelines are.",
    whatYouCanDoAfter: [
      "Write GitLab CI configuration",
      "Configure Cypress in pipelines",
      "Collect test artifacts",
      "Debug pipeline failures"
    ]
  },
  {
    id: "codex-lesson-26",
    lessonNumber: 26,
    title: "Nightly Regression on ACC/PreProd Environments",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Set up scheduled nightly regression test runs against acceptance and pre-production environments with reporting.",
    whatYouWillLearn: [
      "Scheduled pipeline triggers",
      "Regression test suite organization",
      "Parallel execution for speed",
      "Failure notification systems",
      "Report generation and distribution"
    ],
    whyThisMatters: "Nightly regressions catch bugs before they reach production. This is enterprise standard practice.",
    whatYouCanDoAfter: [
      "Configure scheduled pipelines",
      "Organize regression suites",
      "Set up parallel execution",
      "Configure failure notifications"
    ]
  },
  {
    id: "codex-lesson-27",
    lessonNumber: 27,
    title: "Parallel Test Execution and Sharding",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Reduce test execution time from hours to minutes using parallel execution, sharding, and intelligent test distribution.",
    whatYouWillLearn: [
      "Cypress parallel execution setup",
      "Test sharding strategies",
      "Load balancing across machines",
      "Cypress Dashboard integration",
      "Cost optimization for parallelization"
    ],
    whyThisMatters: "A 2-hour test suite run in 10 minutes changes how teams work. Speed is competitive advantage.",
    whatYouCanDoAfter: [
      "Configure parallel execution",
      "Implement test sharding",
      "Optimize machine utilization",
      "Reduce suite execution time 10x"
    ]
  },
  {
    id: "codex-lesson-28",
    lessonNumber: 28,
    title: "Compliance, Audit Trails, and Governance",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Implement compliance requirements for regulated industries - audit trails, evidence collection, and governance frameworks.",
    whatYouWillLearn: [
      "Regulatory requirements for testing",
      "Audit trail implementation",
      "Test evidence collection",
      "Change management integration",
      "Compliance reporting"
    ],
    whyThisMatters: "Regulated industries (finance, healthcare) have legal requirements. Non-compliance means legal risk.",
    whatYouCanDoAfter: [
      "Implement audit trails",
      "Collect compliance evidence",
      "Generate compliance reports",
      "Meet regulatory requirements"
    ]
  },
  {
    id: "codex-lesson-29",
    lessonNumber: 29,
    title: "Operating AI Codex Safely at Enterprise Scale",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Implement enterprise-wide policies and practices for safe AI usage across large test automation teams.",
    whatYouWillLearn: [
      "Enterprise AI governance frameworks",
      "Team training programs",
      "Code review workflows for AI",
      "Measuring AI effectiveness",
      "Risk mitigation strategies"
    ],
    whyThisMatters: "Scaling AI usage requires governance. Without it, productivity gains come with unacceptable risk.",
    whatYouCanDoAfter: [
      "Develop AI governance policies",
      "Train teams on AI safety",
      "Implement review workflows",
      "Measure and optimize AI usage"
    ]
  },
  {
    id: "codex-lesson-30",
    lessonNumber: 30,
    title: "Capstone: Building an Enterprise Cypress Framework",
    duration: "1 hour",
    phase: "Phase 5: Enterprise & CI/CD",
    description: "Apply everything you've learned to build a complete, production-ready enterprise test automation framework from scratch.",
    whatYouWillLearn: [
      "Framework architecture review",
      "Complete project setup",
      "All patterns integrated",
      "Full CI/CD implementation",
      "Documentation and handoff"
    ],
    whyThisMatters: "This proves you can do the job. A complete portfolio project that demonstrates enterprise skills.",
    whatYouCanDoAfter: [
      "Build enterprise frameworks from scratch",
      "Make architecture decisions confidently",
      "Lead automation initiatives",
      "Function as a junior-to-mid SDET"
    ]
  }
];

// Export all phases
export const codexPhases: CodexPhase[] = [
  {
    id: "phase-1",
    title: "Phase 1: Absolute Foundations",
    description: "Build your foundation - laptop setup, VS Code, terminal, Node.js, and your first Cypress run. No AI yet.",
    lessons: phase1Lessons
  },
  {
    id: "phase-2",
    title: "Phase 2: Cypress Fundamentals",
    description: "Master Cypress core skills - writing tests, selectors, assertions, debugging, and automation mindset.",
    lessons: phase2Lessons
  },
  {
    id: "phase-3",
    title: "Phase 3: OpenAI Codex Introduction",
    description: "Learn AI code generation - what it is, safe usage, GitHub Copilot setup, and your first AI-generated tests.",
    lessons: phase3Lessons
  },
  {
    id: "phase-4",
    title: "Phase 4: Framework & Patterns",
    description: "Enterprise patterns - Page Object Model, Screenplay, hybrid architecture, and flaky test elimination.",
    lessons: phase4Lessons
  },
  {
    id: "phase-5",
    title: "Phase 5: Enterprise & CI/CD",
    description: "Production readiness - multi-environment, GitLab CI/CD, parallelization, compliance, and capstone project.",
    lessons: phase5Lessons
  }
];

// Get all lessons as flat array
export const getAllCodexLessons = (): CodexLessonData[] => {
  return codexPhases.flatMap(phase => phase.lessons);
};

// Get lesson by ID
export const getCodexLessonById = (lessonId: string): CodexLessonData | undefined => {
  return getAllCodexLessons().find(lesson => lesson.id === lessonId);
};

// Get adjacent lessons for navigation
export const getAdjacentLessons = (lessonId: string) => {
  const allLessons = getAllCodexLessons();
  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  
  return {
    previous: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
  };
};
