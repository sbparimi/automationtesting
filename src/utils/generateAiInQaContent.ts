// Dynamic content generator for AI in QA lessons

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

export function generateAiInQaContent(lessonId: string, lessonTitle: string): LessonContent {
  const lessonContents: Record<string, LessonContent> = {
    'ai-basic-001': {
      title: 'Introduction to AI for Testers',
      objectives: [
        'Understand what AI means for software testing',
        'Identify AI applications in QA workflows',
        'Learn the difference between AI, ML, and automation',
        'Recognize AI opportunities in your testing'
      ],
      fiveWhys: [
        { question: 'Why AI in testing?', answer: 'AI can handle complex patterns, learn from data, and make intelligent decisions that traditional automation cannot.' },
        { question: 'Why can\'t traditional automation do this?', answer: 'Traditional automation follows scripted rules; AI adapts and learns from new situations.' },
        { question: 'Why is adaptation important?', answer: 'Modern applications change frequently; AI reduces maintenance by self-adjusting.' },
        { question: 'Why reduce maintenance?', answer: 'Test maintenance consumes 40-60% of QA effort; AI frees testers for valuable work.' },
        { question: 'Why free testers?', answer: 'Human intelligence is best used for exploratory, creative, and strategic testing.' }
      ],
      codeImplementation: [
        {
          title: 'AI-Powered Test Helper',
          code: `// Example: Using AI to generate test suggestions
async function getTestSuggestions(featureDescription: string) {
  const response = await fetch('/api/ai-assistant', {
    method: 'POST',
    body: JSON.stringify({
      prompt: \`Generate test cases for: \${featureDescription}\`,
      type: 'test-generation'
    })
  });
  
  const suggestions = await response.json();
  return suggestions.testCases;
}

// Usage
const tests = await getTestSuggestions(
  'User login with email and password'
);
// Returns: Array of test case suggestions`,
          explanation: 'A simple example of using AI to assist with test case generation.'
        }
      ],
      benefits: [
        'Faster test creation and maintenance',
        'Intelligent test prioritization',
        'Pattern recognition for defects',
        'Natural language test writing',
        'Self-healing test scripts'
      ],
      commonMistakes: [
        'Expecting AI to replace all manual testing',
        'Not validating AI-generated tests',
        'Ignoring AI limitations and biases',
        'Over-relying on AI without understanding'
      ],
      exercises: [
        'List 5 tasks AI could help with in your testing',
        'Try generating test cases with ChatGPT',
        'Compare AI suggestions vs manual test design',
        'Identify AI tools relevant to your tech stack'
      ],
      resources: [
        'AI in Testing whitepaper',
        'Google AI testing blog',
        'Ministry of Testing AI resources',
        'AI testing tool comparisons'
      ]
    },
    'ai-int-001': {
      title: 'AI-Enhanced Selenium',
      objectives: [
        'Integrate AI capabilities with Selenium WebDriver',
        'Implement self-healing locators',
        'Use AI for element detection and interaction',
        'Build intelligent wait strategies'
      ],
      fiveWhys: [
        { question: 'Why enhance Selenium with AI?', answer: 'Selenium tests are brittle; AI adds resilience through intelligent element detection.' },
        { question: 'Why are Selenium tests brittle?', answer: 'Small UI changes break locators, causing false failures and maintenance overhead.' },
        { question: 'Why does this cause maintenance?', answer: 'Teams spend significant time updating locators instead of writing new tests.' },
        { question: 'Why not use better locators?', answer: 'Even best practices fail when apps change; AI can adapt automatically.' },
        { question: 'Why can AI adapt?', answer: 'AI learns element patterns and finds alternatives when primary locators fail.' }
      ],
      codeImplementation: [
        {
          title: 'Self-Healing Locator',
          code: `// AI-powered self-healing locator implementation
class AILocator {
  private primaryLocator: string;
  private alternatives: string[] = [];
  private aiService: AIService;

  async findElement(driver: WebDriver): Promise<WebElement> {
    // Try primary locator first
    try {
      return await driver.findElement(By.css(this.primaryLocator));
    } catch (e) {
      // Use AI to find alternative
      const element = await this.aiService.findSimilarElement({
        page: await driver.getPageSource(),
        target: this.primaryLocator,
        context: this.alternatives
      });
      
      // Learn and update alternatives
      if (element.newLocator) {
        this.alternatives.push(element.newLocator);
      }
      
      return element.webElement;
    }
  }
}`,
          explanation: 'A self-healing locator that uses AI to find elements when primary locators fail.'
        }
      ],
      benefits: [
        'Reduced test maintenance by 60-80%',
        'Higher test reliability',
        'Faster test execution recovery',
        'Better ROI on automation investment',
        'More time for test development'
      ],
      commonMistakes: [
        'Relying solely on AI without fallbacks',
        'Not monitoring AI decisions',
        'Ignoring performance overhead',
        'Using AI for simple, stable elements'
      ],
      exercises: [
        'Implement a basic self-healing locator',
        'Measure maintenance reduction over time',
        'Compare AI vs traditional locator strategies',
        'Build an element pattern library'
      ],
      resources: [
        'Healenium documentation',
        'Testim.io AI features',
        'Applitools visual AI',
        'AI testing frameworks comparison'
      ]
    },
    'ai-adv-001': {
      title: 'AI Vision for QA Teams',
      objectives: [
        'Define AI vision aligned with business strategy',
        'Create compelling narratives for stakeholders',
        'Build roadmaps for AI transformation',
        'Establish success metrics and milestones'
      ],
      fiveWhys: [
        { question: 'Why need an AI vision?', answer: 'Without clear vision, AI initiatives become scattered experiments without lasting impact.' },
        { question: 'Why scattered experiments?', answer: 'Teams pursue different tools and approaches without coordination or clear goals.' },
        { question: 'Why does this fail?', answer: 'Disconnected efforts waste resources and fail to demonstrate business value.' },
        { question: 'Why does value matter?', answer: 'Executive support and funding depend on showing tangible business outcomes.' },
        { question: 'Why need executive support?', answer: 'AI transformation requires investment, culture change, and organizational commitment.' }
      ],
      codeImplementation: [
        {
          title: 'AI Vision Framework',
          code: `# AI Vision Document Template

## Executive Summary
- Vision: "AI-augmented testing enabling 10x faster delivery"
- Timeline: 18-month transformation
- Investment: $X with Y% ROI in 24 months

## Strategic Pillars
1. Intelligent Test Creation
   - AI-generated test cases
   - Natural language testing
   
2. Self-Healing Automation
   - 80% reduction in maintenance
   - Autonomous test repair

3. Predictive Quality
   - Risk-based test selection
   - Defect prediction models

4. AI-Powered Analytics
   - Quality insights dashboard
   - Trend analysis and forecasting

## Success Metrics
- Test creation time: -50%
- Maintenance effort: -70%
- Release confidence: +30%
- Cost per release: -40%`,
          explanation: 'A framework for creating an AI vision document that resonates with executives.'
        }
      ],
      benefits: [
        'Clear direction for AI investments',
        'Stakeholder alignment and support',
        'Measurable transformation progress',
        'Competitive advantage in quality',
        'Talent attraction and retention'
      ],
      commonMistakes: [
        'Creating vision without stakeholder input',
        'Being too ambitious without quick wins',
        'Ignoring change management needs',
        'Not adapting vision as AI evolves'
      ],
      exercises: [
        'Draft AI vision for your organization',
        'Present to key stakeholders for feedback',
        'Create 90-day quick win plan',
        'Design metrics dashboard'
      ],
      resources: [
        'Gartner AI in testing reports',
        'Forrester testing wave analysis',
        'AI transformation case studies',
        'Change management frameworks'
      ]
    }
  };

  if (lessonContents[lessonId]) {
    return lessonContents[lessonId];
  }

  return generateGenericContent(lessonId, lessonTitle);
}

function generateGenericContent(lessonId: string, title: string): LessonContent {
  return {
    title,
    objectives: [
      `Master the fundamentals of ${title}`,
      `Apply ${title} concepts in real projects`,
      `Understand best practices and patterns`,
      `Evaluate effectiveness and ROI`
    ],
    fiveWhys: [
      { question: `Why learn ${title}?`, answer: 'AI is transforming QA; this skill is essential for modern testing professionals.' },
      { question: 'Why is AI transforming QA?', answer: 'AI can process data, recognize patterns, and make decisions faster than humans.' },
      { question: 'Why is speed important?', answer: 'Faster feedback loops enable continuous delivery and rapid innovation.' },
      { question: 'Why continuous delivery?', answer: 'Market demands require frequent, reliable releases to stay competitive.' },
      { question: 'Why stay competitive?', answer: 'Companies that ship faster with quality win customers and market share.' }
    ],
    benefits: [
      'Enhanced testing efficiency',
      'Better defect detection',
      'Reduced manual effort',
      'Improved test coverage',
      'Future-proof skills'
    ],
    commonMistakes: [
      'Starting without clear goals',
      'Ignoring data quality requirements',
      'Not measuring AI effectiveness',
      'Over-automating without value assessment'
    ],
    exercises: [
      `Create implementation plan for ${title}`,
      'Measure before/after metrics',
      'Document lessons learned',
      'Share knowledge with team'
    ],
    resources: [
      'AI testing community resources',
      'Tool vendor documentation',
      'Industry research reports',
      'Online courses and tutorials'
    ]
  };
}
