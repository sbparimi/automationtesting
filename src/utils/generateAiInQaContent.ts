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
    },
    // Microsoft Bot Framework Testing Content
    'bot-basic-001': {
      title: 'Introduction to Microsoft Bot Framework',
      objectives: [
        'Understand the Microsoft Bot Framework architecture and ecosystem',
        'Identify the core components of conversational AI platforms',
        'Learn the fundamentals of chatbot testing requirements',
        'Set up your first bot testing environment'
      ],
      fiveWhys: [
        { question: 'Why test chatbots differently than web apps?', answer: 'Chatbots have unique challenges: non-deterministic responses, natural language understanding, conversation state management, and multi-channel deployment that require specialized testing approaches.' },
        { question: 'Why is conversation state critical?', answer: 'Unlike stateless web requests, chatbots maintain complex conversation context across multiple turns, making state management bugs particularly difficult to detect and reproduce.' },
        { question: 'Why do multi-turn conversations create complexity?', answer: 'Users can take unexpected paths, provide ambiguous input, or return to previous topics, creating an exponential number of possible conversation flows to test.' },
        { question: 'Why can\'t traditional automation handle this?', answer: 'Traditional UI automation expects deterministic outcomes. Chatbots powered by AI/ML may provide semantically correct but textually different responses, requiring semantic validation.' },
        { question: 'Why invest in bot testing expertise?', answer: 'Conversational AI is rapidly growing. Organizations deploying untested bots risk customer frustration, brand damage, and compliance violations.' }
      ],
      codeImplementation: [
        {
          title: 'Basic Bot Test Setup',
          code: `// Setting up Bot Framework Testing Library
import { DialogTestClient, DialogTestLogger } from 'botbuilder-testing';
import { MainDialog } from '../dialogs/mainDialog';

describe('MainDialog Tests', () => {
  let client: DialogTestClient;
  
  beforeEach(() => {
    client = new DialogTestClient(
      'test',
      new MainDialog(),
      null,
      [new DialogTestLogger()]
    );
  });

  test('should greet user on first message', async () => {
    const reply = await client.sendActivity('Hello');
    
    expect(reply.text).toContain('Welcome');
    expect(client.dialogTurnResult.status).toBe('waiting');
  });

  test('should handle unknown intent gracefully', async () => {
    const reply = await client.sendActivity('asdfghjkl');
    
    expect(reply.text).toContain('not understand');
  });
});`,
          explanation: 'A basic test setup using the Bot Framework Testing library to validate conversation flows.'
        }
      ],
      benefits: [
        'Early detection of conversation flow issues',
        'Reduced customer escalations due to bot failures',
        'Faster iteration on bot improvements',
        'Better confidence in production deployments',
        'Compliance with enterprise quality standards'
      ],
      commonMistakes: [
        'Testing only happy path conversations',
        'Ignoring edge cases in natural language input',
        'Not testing across all deployment channels',
        'Expecting exact string matches for AI responses',
        'Skipping state persistence testing'
      ],
      exercises: [
        'Set up Bot Emulator and connect to a sample bot',
        'Create a test plan for a simple FAQ chatbot',
        'Document 20 test scenarios covering various user intents',
        'Test the same conversation across web chat and Teams'
      ],
      resources: [
        'Microsoft Bot Framework documentation',
        'Bot Framework Testing Library GitHub',
        'Azure Bot Service documentation',
        'Conversational AI testing patterns'
      ]
    },
    'bot-int-001': {
      title: 'Testing Azure Cognitive Services Integration',
      objectives: [
        'Test LUIS intent recognition accuracy and entity extraction',
        'Validate QnA Maker knowledge base responses',
        'Test Azure Speech Services integration',
        'Implement cognitive services mocking strategies'
      ],
      fiveWhys: [
        { question: 'Why test cognitive services separately?', answer: 'Cognitive services are the "brain" of intelligent bots. Issues in LUIS or QnA Maker cascade through the entire conversation, making isolated testing essential.' },
        { question: 'Why does intent accuracy matter so much?', answer: 'A misclassified intent sends users down wrong conversation paths, causing frustration and support escalations that damage customer relationships.' },
        { question: 'Why mock cognitive services in testing?', answer: 'Cognitive services calls are slow and costly. Mocking provides fast, deterministic tests for conversation logic while dedicated tests validate AI accuracy.' },
        { question: 'Why test entity extraction specifically?', answer: 'Entities carry critical data like dates, names, and numbers. Incorrect extraction leads to wrong actions, bad database queries, or misleading responses.' },
        { question: 'Why measure cognitive service metrics?', answer: 'AI accuracy degrades over time as language evolves. Continuous measurement identifies model drift before it impacts production users.' }
      ],
      codeImplementation: [
        {
          title: 'LUIS Recognition Testing',
          code: `// Testing LUIS Intent Recognition
import { LuisRecognizer } from 'botbuilder-ai';
import { TestAdapter, TurnContext } from 'botbuilder';

describe('LUIS Integration Tests', () => {
  let recognizer: LuisRecognizer;
  
  beforeAll(() => {
    recognizer = new LuisRecognizer({
      applicationId: process.env.LUIS_APP_ID!,
      endpointKey: process.env.LUIS_API_KEY!,
      endpoint: process.env.LUIS_ENDPOINT!
    });
  });

  test('should recognize booking intent', async () => {
    const adapter = new TestAdapter();
    
    await adapter.send('I want to book a flight to Paris')
      .assertReply(async (activity, description) => {
        const context = new TurnContext(adapter, activity);
        const result = await recognizer.recognize(context);
        
        expect(result.intents.BookFlight).toBeDefined();
        expect(result.intents.BookFlight.score).toBeGreaterThan(0.8);
        expect(result.entities.destination).toContain('Paris');
      });
  });

  test('should handle low confidence gracefully', async () => {
    const adapter = new TestAdapter();
    
    await adapter.send('maybe something about travel')
      .assertReply(async (activity) => {
        const context = new TurnContext(adapter, activity);
        const result = await recognizer.recognize(context);
        
        const topIntent = LuisRecognizer.topIntent(result);
        const confidence = result.intents[topIntent]?.score || 0;
        
        if (confidence < 0.5) {
          // Should trigger clarification flow
          expect(true).toBe(true);
        }
      });
  });
});`,
          explanation: 'Testing LUIS recognition with confidence thresholds and entity validation.'
        }
      ],
      benefits: [
        'Validated NLU accuracy before deployment',
        'Confidence in AI service integration',
        'Faster debugging of conversation issues',
        'Clear metrics for AI model performance',
        'Reduced production incidents'
      ],
      commonMistakes: [
        'Testing with production cognitive services in CI/CD',
        'Not setting confidence thresholds for intents',
        'Ignoring entity extraction validation',
        'Missing negative test cases',
        'Not monitoring model accuracy over time'
      ],
      exercises: [
        'Create a LUIS test suite with 50 utterances per intent',
        'Measure and document your LUIS model accuracy',
        'Build a QnA Maker validation framework',
        'Implement cognitive services mocking for unit tests'
      ],
      resources: [
        'LUIS batch testing documentation',
        'QnA Maker testing best practices',
        'Azure Cognitive Services SDK',
        'NLU testing patterns'
      ]
    },
    'bot-adv-001': {
      title: 'AI Test Generation for Chatbots',
      objectives: [
        'Use AI to generate comprehensive test conversations',
        'Implement semantic validation for bot responses',
        'Build self-healing test suites for conversational AI',
        'Create intelligent test oracles for non-deterministic responses'
      ],
      fiveWhys: [
        { question: 'Why use AI to test AI-powered bots?', answer: 'AI-powered bots produce varied, semantically correct responses that traditional exact-match testing cannot validate. AI testers can evaluate semantic correctness.' },
        { question: 'Why is semantic validation essential?', answer: 'A bot saying "Sure, I can help with that" and "Absolutely! Let me assist you" are semantically equivalent but textually different. Only semantic validation catches real issues.' },
        { question: 'Why generate tests with AI?', answer: 'Manual test creation cannot cover the infinite variations of natural language input. AI generates diverse, realistic test scenarios at scale.' },
        { question: 'Why do LLM-powered bots need special testing?', answer: 'LLMs can hallucinate, produce harmful content, or deviate from intended behavior. Testing must validate response safety and accuracy.' },
        { question: 'Why invest in AI testing infrastructure?', answer: 'As conversational AI becomes central to customer experience, testing infrastructure determines competitive advantage in quality and speed.' }
      ],
      codeImplementation: [
        {
          title: 'AI-Powered Test Generation',
          code: `// Using AI to Generate and Validate Bot Tests
import OpenAI from 'openai';

class AIBotTester {
  private openai: OpenAI;
  private botClient: BotTestClient;

  async generateTestConversations(intent: string, count: number) {
    const prompt = \`Generate \${count} realistic user messages for the intent: \${intent}
    Include variations in:
    - Formal vs casual language
    - Questions vs statements
    - With and without typos
    - Different phrasings
    
    Return as JSON array of strings.\`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' }
    });

    return JSON.parse(response.choices[0].message.content!);
  }

  async validateBotResponse(
    userMessage: string,
    botResponse: string,
    expectedBehavior: string
  ): Promise<ValidationResult> {
    const prompt = \`Evaluate if the bot response is appropriate:
    
    User: \${userMessage}
    Bot: \${botResponse}
    
    Expected behavior: \${expectedBehavior}
    
    Evaluate:
    1. Does the response address the user's intent? (yes/no)
    2. Is the response accurate and helpful? (yes/no)
    3. Is the response safe and appropriate? (yes/no)
    4. Confidence score (0-100)
    5. Issues found (if any)
    
    Return as JSON.\`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' }
    });

    return JSON.parse(response.choices[0].message.content!);
  }

  async runAITestSuite(testCases: TestCase[]) {
    const results: TestResult[] = [];
    
    for (const testCase of testCases) {
      const botResponse = await this.botClient.send(testCase.userMessage);
      
      const validation = await this.validateBotResponse(
        testCase.userMessage,
        botResponse.text,
        testCase.expectedBehavior
      );

      results.push({
        testCase,
        botResponse,
        validation,
        passed: validation.confidence > 80 && validation.isSafe
      });
    }

    return results;
  }
}`,
          explanation: 'An AI-powered testing framework that generates test conversations and validates responses semantically.'
        }
      ],
      benefits: [
        'Comprehensive test coverage through AI generation',
        'Semantic validation for non-deterministic responses',
        'Automated detection of harmful or inappropriate content',
        'Scalable testing for complex conversation flows',
        'Continuous validation of AI model quality'
      ],
      commonMistakes: [
        'Relying solely on AI without human review',
        'Not validating AI test generation quality',
        'Ignoring edge cases AI might miss',
        'Not establishing baseline accuracy metrics',
        'Treating AI validation as infallible'
      ],
      exercises: [
        'Build an AI test generator for your bot\'s main intents',
        'Implement semantic response validation',
        'Create a hallucination detection framework',
        'Measure and compare AI vs manual test effectiveness'
      ],
      resources: [
        'Prompt engineering for testing',
        'AI testing frameworks',
        'LLM evaluation techniques',
        'Responsible AI testing guidelines'
      ]
    }
  };

  if (lessonContents[lessonId]) {
    return lessonContents[lessonId];
  }

  return generateGenericContent(lessonId, lessonTitle);
}

function generateGenericContent(lessonId: string, title: string): LessonContent {
  const isBotFramework = lessonId.startsWith('bot-');
  
  if (isBotFramework) {
    return generateBotFrameworkContent(lessonId, title);
  }
  
  return {
    title,
    objectives: [
      `Master the fundamentals of ${title}`,
      `Apply ${title} concepts in real projects`,
      'Understand best practices and patterns',
      'Evaluate effectiveness and ROI'
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

function generateBotFrameworkContent(lessonId: string, title: string): LessonContent {
  const isBasic = lessonId.includes('basic');
  const isIntermediate = lessonId.includes('int');
  
  const levelContext = isBasic 
    ? 'QA engineers learning chatbot testing fundamentals'
    : isIntermediate 
      ? 'Senior testers implementing enterprise bot testing'
      : 'Test architects leading conversational AI quality';

  return {
    title,
    objectives: [
      `Master the principles and practices of ${title}`,
      `Apply ${title} in Microsoft Bot Framework projects`,
      'Develop testing strategies for conversational AI',
      'Build reusable test frameworks and patterns'
    ],
    fiveWhys: [
      { question: `Why is ${title} critical for chatbot testing?`, answer: `${title} directly impacts the quality of conversational experiences. Poor testing leads to frustrated users and damaged brand reputation.` },
      { question: 'Why focus on conversation quality?', answer: 'Chatbots are often the first point of customer contact. Quality conversations build trust and drive business outcomes.' },
      { question: 'Why is trust important for chatbots?', answer: 'Users quickly abandon bots that misunderstand them or provide wrong answers. Trust determines adoption and success.' },
      { question: 'Why does adoption matter?', answer: 'Bot ROI depends on user adoption. Testing ensures bots meet user expectations and deliver intended value.' },
      { question: 'Why invest in specialized bot testing?', answer: 'Conversational AI has unique challenges that traditional testing approaches cannot address effectively.' }
    ],
    codeImplementation: [
      {
        title: `${title} Implementation`,
        code: `// Example implementation for ${title}
import { DialogTestClient, DialogTestLogger } from 'botbuilder-testing';
import { TestAdapter, TurnContext } from 'botbuilder';

describe('Bot Tests', () => {
  let testClient: DialogTestClient;

  beforeEach(() => {
    testClient = new DialogTestClient(
      'test',
      new YourDialog(),
      null,
      [new DialogTestLogger()]
    );
  });

  test('should handle expected conversation flow', async () => {
    let reply = await testClient.sendActivity('Start');
    expect(reply.text).toBeDefined();
    
    reply = await testClient.sendActivity('Next step');
    expect(reply.text).toContain('expected response');
  });

  test('should handle error scenarios gracefully', async () => {
    const reply = await testClient.sendActivity('invalid input');
    expect(reply.text).toContain('help');
  });
});`,
        explanation: `A practical example demonstrating ${title} with the Bot Framework Testing library.`
      }
    ],
    benefits: [
      'Higher chatbot quality and reliability',
      'Faster development and iteration cycles',
      'Better user satisfaction scores',
      'Reduced support escalations',
      'Confidence in production deployments',
      'Competitive advantage in conversational AI'
    ],
    commonMistakes: [
      'Testing only happy path conversations',
      'Ignoring multi-channel deployment differences',
      'Not testing state management across sessions',
      'Expecting exact text matches for AI responses',
      'Skipping performance and load testing'
    ],
    exercises: [
      `Current State Assessment: Evaluate your current ${title} practices and identify gaps.`,
      `Implementation Plan: Create a detailed plan for implementing ${title} in your bot testing strategy.`,
      `Test Framework: Build a reusable test framework component for ${title}.`,
      `Team Workshop: Design a training session to teach your team about ${title}.`,
      `Metrics Dashboard: Define KPIs for measuring success in ${title}.`
    ],
    resources: [
      'Microsoft Bot Framework documentation',
      'Bot Builder Testing Library GitHub',
      'Azure Cognitive Services testing guides',
      'Conversational AI testing community',
      'Microsoft Learn Bot Framework path'
    ]
  };
}
