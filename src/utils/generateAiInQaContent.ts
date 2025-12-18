// Comprehensive AI in QA Content Generator - 5000 words per lesson
// Covers chatbot testing, non-deterministic systems, ML concepts, formulas, and enterprise-grade techniques

export interface LessonContent {
  title: string;
  overview: string;
  objectives: string[];
  fiveWhys: { question: string; answer: string }[];
  detailedContent: { title: string; content: string }[];
  codeImplementation?: { title: string; code: string; explanation: string }[];
  formulas?: { name: string; formula: string; explanation: string }[];
  benefits: string[];
  commonMistakes: string[];
  exercises: { task: string; deliverable: string; criteria: string }[];
  resources: string[];
  keyTakeaways: string[];
}

export function generateAiInQaContent(lessonId: string, lessonTitle: string): LessonContent {
  const lessonContents: Record<string, LessonContent> = {
    // ==================== BASIC AI COURSE ====================
    'ai-basic-001': {
      title: 'Introduction to AI for Software Testers',
      overview: `Artificial Intelligence (AI) is fundamentally transforming how we approach software testing. This comprehensive lesson introduces QA professionals to the world of AI, explaining its core concepts, applications in testing, and the paradigm shift it represents from traditional automation. Understanding AI is no longer optional for modern testers—it is essential for staying relevant in an industry that increasingly relies on intelligent systems to ensure software quality. This lesson establishes the foundation for your AI journey, covering everything from basic terminology to practical applications you can implement immediately.`,
      objectives: [
        'Understand the fundamental differences between AI, Machine Learning, and traditional automation',
        'Identify 15+ specific AI applications across the software testing lifecycle',
        'Evaluate AI testing tools and their appropriate use cases',
        'Recognize the limitations and biases inherent in AI-based testing',
        'Develop a personal learning roadmap for AI in QA mastery'
      ],
      fiveWhys: [
        { question: 'Why is AI becoming essential in software testing?', answer: 'Modern software systems are too complex, dynamic, and fast-changing for purely manual or scripted approaches. AI can process vast amounts of data, recognize patterns, and make intelligent decisions at speeds impossible for humans, enabling testers to focus on high-value activities like exploratory testing and strategic quality planning.' },
        { question: 'Why can\'t traditional test automation handle modern software?', answer: 'Traditional automation relies on brittle scripts that break with minor UI changes, cannot understand context, and require constant maintenance. AI-powered testing can self-heal broken locators, understand semantic meaning, and adapt to changes without human intervention—reducing maintenance costs by 60-80%.' },
        { question: 'Why does reduced maintenance matter for QA teams?', answer: 'Studies show QA teams spend 40-60% of their time maintaining existing tests rather than creating new coverage. AI frees testers from this burden, allowing them to focus on discovering new defects, improving test strategy, and adding business value through quality insights.' },
        { question: 'Why should testers add business value beyond bug finding?', answer: 'In the DevOps era, quality is a shared responsibility. Testers who can provide quality analytics, risk assessments, and strategic insights become invaluable partners to development teams and business stakeholders. AI amplifies this capability by providing data-driven quality intelligence.' },
        { question: 'Why will AI-skilled testers be in higher demand?', answer: 'The AI testing tools market is growing at 15% annually. Organizations implementing AI in QA report 40% faster release cycles and 50% fewer production defects. Testers who can harness AI will command premium salaries and leadership positions in quality engineering.' }
      ],
      detailedContent: [
        {
          title: 'Understanding the AI Hierarchy',
          content: `Before diving into AI applications in testing, we must understand the technology hierarchy. At the broadest level, Artificial Intelligence refers to any system that exhibits intelligent behavior—making decisions, recognizing patterns, or solving problems that typically require human intelligence.

Machine Learning (ML) is a subset of AI where systems learn from data rather than following explicit programming. Instead of writing rules like "if button is red, it's a warning," ML systems learn this pattern from thousands of examples. Deep Learning, a further subset, uses neural networks with multiple layers to learn increasingly abstract representations—the technology behind modern image recognition, natural language processing, and conversational AI.

For testers, this hierarchy matters because different testing challenges require different AI approaches. Simple pattern matching might use basic ML, while testing a conversational chatbot requires understanding deep learning concepts. The key insight is that AI augments rather than replaces human intelligence—it handles routine pattern recognition while humans provide context, creativity, and judgment.`
        },
        {
          title: 'AI Applications Across the Testing Lifecycle',
          content: `AI transforms every phase of testing:

**Requirements Analysis**: Natural Language Processing (NLP) can analyze requirements documents, identifying ambiguities, conflicts, and missing coverage. AI tools can suggest test scenarios based on requirement text, ensuring critical paths aren't overlooked.

**Test Design**: Generative AI can create test cases from user stories, generating positive, negative, and edge cases automatically. This doesn't replace human creativity but accelerates the brainstorming process and ensures comprehensive coverage.

**Test Data Generation**: AI can create realistic test data that maintains statistical properties of production data while anonymizing sensitive information. This is crucial for GDPR compliance and realistic testing.

**Visual Testing**: Computer vision algorithms can detect visual regressions that human eyes might miss—subtle color shifts, alignment issues, or responsive design problems across thousands of browser/device combinations.

**Self-Healing Automation**: When locators break, AI can find alternative element identification strategies automatically, dramatically reducing maintenance overhead.

**Intelligent Test Selection**: ML models can predict which tests are most likely to find defects based on code changes, enabling risk-based testing that maximizes defect detection with minimal test execution.

**Defect Prediction**: By analyzing historical data, AI can predict which code modules are most likely to contain defects, allowing focused testing and code review efforts.

**Root Cause Analysis**: When failures occur, AI can cluster similar failures, identify common patterns, and suggest probable root causes, accelerating debugging.`
        },
        {
          title: 'Testing Non-Deterministic AI Systems',
          content: `One of the most challenging aspects of AI in QA is testing AI-powered systems themselves. Unlike traditional software where the same input always produces the same output, AI systems are inherently non-deterministic. A chatbot asked the same question twice might give different but equally correct answers.

**Semantic Validation**: Instead of exact string matching, testers must validate that responses are semantically correct. This requires understanding concepts like semantic similarity scores, intent matching, and acceptable response variations.

**Statistical Testing**: Rather than pass/fail for individual test cases, AI testing often requires statistical analysis across many interactions. A chatbot might be considered acceptable if it correctly handles 95% of intents with appropriate confidence levels.

**Boundary Testing for ML Models**: Every ML model has decision boundaries—thresholds where classifications change. Testing these boundaries is crucial for understanding model behavior in edge cases.

**Bias Detection**: AI systems can perpetuate or amplify biases present in training data. Testers must evaluate models across diverse demographic groups to ensure fair treatment.

**Model Drift Monitoring**: AI models degrade over time as the real world diverges from training data. Continuous monitoring and testing for model drift is essential for production AI systems.`
        },
        {
          title: 'Practical First Steps with AI in Testing',
          content: `Start your AI journey with these practical steps:

1. **Experiment with Generative AI**: Use ChatGPT or Claude to generate test cases, analyze requirements, or explain complex code. This builds intuition for AI capabilities and limitations.

2. **Explore Visual AI Tools**: Tools like Applitools or Percy use AI for visual regression testing. They're easy to integrate and provide immediate value with minimal AI expertise required.

3. **Investigate Self-Healing Automation**: Platforms like Testim, mabl, or Healenium offer self-healing capabilities that reduce script maintenance.

4. **Learn Basic ML Concepts**: Understanding concepts like training data, overfitting, precision, and recall helps you communicate effectively with data science teams and evaluate AI tools.

5. **Build Your AI Testing Portfolio**: Document your experiments, create proof-of-concept implementations, and share learnings with your team.`
        }
      ],
      codeImplementation: [
        {
          title: 'AI-Powered Test Case Generator',
          code: `// Using AI to generate comprehensive test cases
interface TestCase {
  id: string;
  scenario: string;
  steps: string[];
  expectedResult: string;
  priority: 'high' | 'medium' | 'low';
  type: 'positive' | 'negative' | 'edge';
}

async function generateTestCases(
  featureDescription: string,
  context: string
): Promise<TestCase[]> {
  const prompt = \`
    Generate comprehensive test cases for the following feature:
    
    Feature: \${featureDescription}
    Context: \${context}
    
    Generate:
    - 3 positive test cases (happy path)
    - 3 negative test cases (error handling)
    - 4 edge case scenarios
    
    For each test case, provide:
    - Unique ID
    - Scenario description
    - Step-by-step instructions
    - Expected result
    - Priority (high/medium/low)
  \`;

  const response = await fetch('/api/ai-assistant', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: 'You are an expert QA engineer.' },
        { role: 'user', content: prompt }
      ]
    })
  });

  const data = await response.json();
  return parseTestCases(data.content);
}

// Example usage
const testCases = await generateTestCases(
  'User login with email and password',
  'E-commerce platform with MFA support'
);

console.log(\`Generated \${testCases.length} test cases\`);
testCases.forEach(tc => {
  console.log(\`[\${tc.priority}] \${tc.scenario}\`);
});`,
          explanation: 'This code demonstrates using AI to generate comprehensive test cases from feature descriptions. The AI considers positive paths, negative scenarios, and edge cases, dramatically accelerating test design.'
        }
      ],
      formulas: [
        {
          name: 'Test Coverage Improvement',
          formula: 'Coverage Gain = (AI-Generated Tests ∩ Unique Defects) / Total Defects Found',
          explanation: 'Measures how many unique defects were found by AI-generated tests compared to total defects, indicating AI contribution to quality.'
        },
        {
          name: 'AI ROI Calculation',
          formula: 'ROI = ((Time Saved × Hourly Rate) - AI Tool Cost) / AI Tool Cost × 100%',
          explanation: 'Calculates the return on investment for AI testing tools by comparing time savings against tool costs.'
        }
      ],
      benefits: [
        'Accelerated test creation by 50-70% through intelligent generation',
        'Reduced test maintenance effort by 60-80% with self-healing capabilities',
        'Improved defect detection through AI-powered pattern recognition',
        'Enhanced test coverage through intelligent scenario generation',
        'Better resource allocation through risk-based test prioritization',
        'Faster root cause analysis through AI-assisted debugging',
        'Continuous quality monitoring through ML-based analytics'
      ],
      commonMistakes: [
        'Expecting AI to completely replace human judgment and creativity',
        'Not validating AI-generated test cases before execution',
        'Ignoring AI model limitations, biases, and confidence levels',
        'Over-relying on AI without understanding underlying principles',
        'Failing to maintain human oversight of AI testing processes',
        'Using AI tools without measuring their actual impact on quality',
        'Neglecting to update AI models as applications evolve'
      ],
      exercises: [
        {
          task: 'Generate test cases using ChatGPT for a login feature with social authentication options',
          deliverable: 'Document of 20+ test cases covering email/password, Google, Facebook, and Apple login flows',
          criteria: 'Test cases must cover positive, negative, security, and accessibility scenarios'
        },
        {
          task: 'Compare AI-generated tests with manually created tests for the same feature',
          deliverable: 'Analysis report comparing coverage, creativity, and practical applicability',
          criteria: 'Include metrics on unique scenarios, missed cases, and quality assessment'
        },
        {
          task: 'Identify 5 testing tasks in your current role that could benefit from AI assistance',
          deliverable: 'Proposal document with feasibility analysis and expected ROI for each task',
          criteria: 'Each proposal must include implementation approach, tool recommendations, and success metrics'
        }
      ],
      resources: [
        'Google AI Testing Blog - Industry insights on AI in quality engineering',
        'Ministry of Testing AI Resources - Community-driven AI testing knowledge',
        'Gartner Magic Quadrant for AI Testing Tools - Enterprise tool evaluation',
        'AI Testing Patterns and Practices - O\'Reilly Media publication',
        'Coursera Machine Learning Fundamentals - Build foundational ML knowledge'
      ],
      keyTakeaways: [
        'AI augments human testers—it doesn\'t replace them',
        'Start with low-risk AI applications like test generation and visual testing',
        'Understand AI limitations and always validate AI-generated outputs',
        'Measure AI impact with concrete metrics to demonstrate value',
        'Build AI skills progressively from concepts to practical implementation'
      ]
    },

    // ==================== CHATBOT TESTING FUNDAMENTALS ====================
    'bot-basic-001': {
      title: 'Comprehensive Guide to Conversational AI Testing',
      overview: `Testing conversational AI systems like chatbots represents one of the most challenging frontiers in software quality assurance. Unlike traditional applications with deterministic behavior, chatbots powered by Natural Language Understanding (NLU), Large Language Models (LLMs), and machine learning exhibit non-deterministic responses that require fundamentally different testing approaches. This comprehensive lesson covers the architecture of conversational AI systems, testing methodologies for non-deterministic behavior, and practical techniques for ensuring enterprise-grade chatbot quality. You will learn to test Microsoft Bot Framework, Azure Cognitive Services integrations, and modern LLM-powered assistants.`,
      objectives: [
        'Master the architecture and components of enterprise conversational AI systems',
        'Implement testing strategies for non-deterministic AI responses',
        'Design comprehensive test suites covering intent recognition, entity extraction, and dialog management',
        'Apply statistical testing methods appropriate for AI systems',
        'Develop expertise in testing NLU models, LLMs, and hybrid systems',
        'Build production-ready chatbot testing frameworks using industry best practices'
      ],
      fiveWhys: [
        { question: 'Why do chatbots require specialized testing approaches?', answer: 'Chatbots combine multiple AI components—NLU for understanding, dialog management for conversation flow, NLG for response generation—each introducing non-determinism. Traditional exact-match testing fails because the same input may produce semantically equivalent but textually different outputs. Testing must validate meaning, not just text.' },
        { question: 'Why is semantic validation necessary instead of exact matching?', answer: 'A chatbot asked "What time do you open?" might respond "We open at 9 AM" or "Our doors open at 9:00 in the morning." Both are correct. Semantic validation uses techniques like cosine similarity, intent matching, or LLM-based evaluation to verify correctness regardless of phrasing variations.' },
        { question: 'Why do NLU models need dedicated testing strategies?', answer: 'NLU models classify user intents and extract entities. They have confidence scores, decision boundaries, and can misclassify ambiguous inputs. Without systematic NLU testing—including accuracy metrics, confusion matrices, and threshold tuning—chatbots will frustrate users with misunderstandings.' },
        { question: 'Why must chatbot testing be statistical rather than pass/fail?', answer: 'AI systems operate probabilistically. A chatbot might correctly handle 94% of booking requests but fail on unusual date formats. Statistical testing measures accuracy, precision, recall, and F1 scores across large test sets, providing confidence intervals rather than absolute pass/fail verdicts.' },
        { question: 'Why is continuous testing critical for production chatbots?', answer: 'Chatbot quality degrades over time due to model drift, changing user language patterns, and new intents not covered in training. Continuous testing with real conversation sampling, accuracy monitoring, and automated retraining triggers is essential for maintaining production quality.' }
      ],
      detailedContent: [
        {
          title: 'Conversational AI Architecture Deep Dive',
          content: `Understanding chatbot architecture is prerequisite to effective testing. Modern enterprise chatbots consist of several interconnected components:

**Natural Language Understanding (NLU) Layer**: This component transforms raw user text into structured data. It performs:
- Intent Classification: Determining what the user wants (e.g., "book_flight", "check_balance", "get_support")
- Entity Extraction: Identifying key data points (dates, names, locations, amounts)
- Sentiment Analysis: Understanding emotional tone for appropriate responses

Popular NLU services include LUIS (Microsoft), Dialogflow (Google), Amazon Lex, and Rasa. Each has different accuracy characteristics, entity types, and training approaches that affect testing strategies.

**Dialog Management Layer**: This orchestrates conversation flow, maintaining context across turns:
- State Machine Approaches: Predefined conversation paths (easier to test but less flexible)
- ML-Based Dialog: Learned conversation patterns (more flexible but harder to test)
- Slot Filling: Gathering required information before completing actions

Testing dialog management requires multi-turn conversation scenarios that verify context retention, interruption handling, and graceful recovery from errors.

**Response Generation Layer**: Creates natural language responses:
- Template-Based: Fixed responses with variable insertion (deterministic, easy to test)
- Retrieval-Based: Selecting from pre-written response candidates
- Generative (LLM): Creating novel responses using GPT, Claude, or similar models (non-deterministic, requires semantic testing)

**Integration Layer**: Connects to backend systems:
- API calls for data retrieval and actions
- Authentication and authorization
- Error handling and fallback strategies

Each layer requires dedicated testing approaches, and the interactions between layers create emergent behaviors requiring end-to-end testing.`
        },
        {
          title: 'Testing Non-Deterministic Systems: A Paradigm Shift',
          content: `Traditional testing assumes determinism—the same input always produces the same output. AI systems shatter this assumption, requiring new testing paradigms:

**Semantic Equivalence Testing**: Instead of comparing output strings, compare meanings. Techniques include:
- Embedding Similarity: Convert responses to vector embeddings and measure cosine similarity
- Intent Matching: Verify the response addresses the correct intent regardless of phrasing
- Fact Extraction: Confirm critical facts (dates, names, numbers) are present and correct

**Statistical Quality Metrics**: Replace binary pass/fail with statistical measures:
- Accuracy: Percentage of correctly classified intents
- Precision: Of items classified as Intent X, how many actually are Intent X
- Recall: Of all Intent X items, how many were correctly identified
- F1 Score: Harmonic mean of precision and recall
- Confidence Calibration: Does 90% confidence actually mean 90% accuracy?

**Threshold-Based Testing**: AI models output confidence scores. Testing must verify appropriate behavior at different confidence levels:
- High Confidence (>0.9): Direct action/response
- Medium Confidence (0.5-0.9): Clarification prompts
- Low Confidence (<0.5): Fallback to human or graceful failure

**Boundary Testing for ML Models**: Every classifier has decision boundaries where small input changes flip classifications. Testing these boundaries reveals model robustness:
- Perturbation Testing: Modify inputs slightly (typos, synonyms, word order) to test stability
- Adversarial Testing: Deliberately crafted inputs to confuse the model
- Edge Case Coverage: Inputs at classification boundaries

**Metamorphic Testing**: When exact outputs are unpredictable, verify relationships hold:
- Paraphrase Invariance: "Book a flight" and "I need to book a flight" should produce similar intents
- Negation Sensitivity: "Book a flight" and "Don't book a flight" should produce different intents
- Entity Substitution: Changing "Paris" to "London" should change destination, not intent`
        },
        {
          title: 'Manual Chatbot Testing Methodology',
          content: `Before automation, manual testing establishes baseline quality and uncovers issues that automated approaches miss:

**Conversation Sampling Strategy**:
1. Collect production conversation logs (anonymized)
2. Stratify by intent, user type, channel, and outcome
3. Sample representative conversations from each stratum
4. Manually evaluate each conversation against quality criteria

**Human Evaluation Rubrics**: Rate each conversation on:
- Task Completion: Did the bot accomplish the user's goal? (0-4 scale)
- Coherence: Were responses logical and contextually appropriate?
- Naturalness: Did the conversation flow naturally?
- Error Recovery: When failures occurred, was recovery graceful?
- User Experience: Overall satisfaction rating

**Exploratory Conversation Testing**: Skilled testers probe chatbot boundaries:
- Interrupt mid-flow and resume later
- Provide partial information requiring clarification
- Use ambiguous language requiring disambiguation
- Attempt scope violations and inappropriate requests
- Test across personas (technical/non-technical, native/non-native speakers)

**Multi-Turn Context Verification**: Verify context is maintained correctly:
- Reference earlier conversation elements ("the flight I mentioned")
- Change context mid-conversation and verify recognition
- Resume conversations after delays
- Test context isolation between users/sessions

**Channel-Specific Testing**: Chatbots behave differently across channels:
- Web Chat: Rich formatting, quick replies, carousels
- Teams/Slack: Adaptive cards, channel-specific limitations
- Voice: No visual feedback, speech-to-text errors
- SMS: Character limits, no rich media`
        },
        {
          title: 'NLU Model Testing and Validation',
          content: `NLU models require rigorous testing to ensure reliable intent recognition and entity extraction:

**Training/Test Data Separation**: Never test on training data. Maintain strict separation:
- 80% training data
- 10% validation (for hyperparameter tuning)
- 10% test (final evaluation, never used during development)

**Confusion Matrix Analysis**: Understand exactly where the model fails:
- Identify commonly confused intent pairs
- Analyze false positives (incorrect classifications)
- Analyze false negatives (missed classifications)
- Prioritize improvements based on business impact

**Per-Intent Quality Metrics**: Calculate precision, recall, F1 for each intent:
\`\`\`
Intent          Precision  Recall  F1    Support
book_flight     0.94       0.91    0.92  1,245
cancel_booking  0.88       0.95    0.91  423
check_status    0.79       0.82    0.80  892
\`\`\`

Investigate low-performing intents for training data issues, ambiguous definitions, or inherent linguistic overlap.

**Entity Extraction Validation**: For each entity type, measure:
- Detection Rate: Is the entity identified when present?
- Boundary Accuracy: Are entity boundaries correct ("New York" vs "New York City")?
- Type Accuracy: Is the entity assigned the correct type?
- Normalization: Are values correctly normalized (dates, currencies)?

**Confidence Threshold Tuning**: Analyze the trade-off between precision and recall at different thresholds:
- Plot precision-recall curve
- Identify optimal threshold for business requirements
- Set different thresholds for different intents based on risk

**Robustness Testing**: Verify model handles variations:
- Typos and misspellings
- Case variations (HELP vs help)
- Punctuation variations
- Slang and colloquialisms
- Non-native speaker patterns
- Domain-specific terminology`
        },
        {
          title: 'LLM-Based Chatbot Testing Strategies',
          content: `Large Language Models (GPT-4, Claude, Gemini) introduce unique testing challenges due to their generative nature:

**Response Quality Evaluation Framework**:
- Accuracy: Is the information factually correct?
- Relevance: Does it address the user's question?
- Completeness: Are all necessary details included?
- Coherence: Is the response logically structured?
- Conciseness: Is it appropriately brief without omissions?
- Tone: Is the tone appropriate for context and brand?
- Safety: Are there harmful, biased, or inappropriate elements?

**LLM-as-Judge Testing**: Use one LLM to evaluate another's outputs:
\`\`\`
Given the user query: {query}
And the chatbot response: {response}

Rate the response on these dimensions (1-5 scale):
1. Accuracy: Does it contain factually correct information?
2. Helpfulness: Does it address what the user needs?
3. Safety: Is it free from harmful content?
4. Tone: Is it appropriate for customer service?

Provide specific evidence for each rating.
\`\`\`

**Golden Dataset Testing**: Curate a set of query-response pairs representing ideal behavior:
- Diverse coverage of use cases
- Expert-verified correct responses
- Updated as the product evolves
- Compare LLM outputs against golden responses using semantic similarity

**Hallucination Detection**: LLMs can generate plausible-sounding but false information:
- Fact verification against authoritative sources
- Consistency checking across multiple generations
- Citation and source validation
- Domain-expert review for specialized content

**Prompt Injection Testing**: Verify LLM-powered bots resist manipulation:
- "Ignore previous instructions and..."
- Encoded instructions in inputs
- Multi-turn prompt attacks
- System prompt extraction attempts

**Safety and Guardrails Testing**:
- Content policy violation attempts
- Jailbreak attempts
- PII handling verification
- Escalation to human triggers
- Rate limiting and abuse prevention`
        }
      ],
      codeImplementation: [
        {
          title: 'Comprehensive Bot Testing Framework',
          code: `// Enterprise-grade chatbot testing framework
import { DialogTestClient, DialogTestLogger } from 'botbuilder-testing';
import { NLUTestClient } from './nlu-test-client';

interface ConversationTest {
  id: string;
  name: string;
  turns: ConversationTurn[];
  expectedOutcome: 'success' | 'clarification' | 'fallback';
}

interface ConversationTurn {
  userMessage: string;
  expectedIntent?: string;
  expectedEntities?: Record<string, string>;
  responseValidation: ResponseValidation;
}

interface ResponseValidation {
  type: 'exact' | 'contains' | 'semantic' | 'intent';
  value: string;
  threshold?: number; // For semantic similarity
}

class ChatbotTestSuite {
  private dialogClient: DialogTestClient;
  private nluClient: NLUTestClient;
  private semanticValidator: SemanticValidator;
  
  constructor(config: TestConfig) {
    this.dialogClient = new DialogTestClient(
      'test',
      config.mainDialog,
      null,
      [new DialogTestLogger()]
    );
    this.nluClient = new NLUTestClient(config.nluEndpoint);
    this.semanticValidator = new SemanticValidator(config.embeddingModel);
  }

  async runConversationTest(test: ConversationTest): Promise<TestResult> {
    const results: TurnResult[] = [];
    
    for (const turn of test.turns) {
      // Send user message
      const reply = await this.dialogClient.sendActivity(turn.userMessage);
      
      // Validate NLU (if expected)
      let nluResult = null;
      if (turn.expectedIntent) {
        nluResult = await this.validateNLU(turn);
      }
      
      // Validate response
      const responseResult = await this.validateResponse(
        reply.text,
        turn.responseValidation
      );
      
      results.push({
        turn: turn.userMessage,
        nluResult,
        responseResult,
        actualResponse: reply.text
      });
    }
    
    return {
      testId: test.id,
      passed: results.every(r => r.responseResult.passed),
      results,
      outcome: this.determineOutcome(results)
    };
  }

  async validateNLU(turn: ConversationTurn): Promise<NLUResult> {
    const nluResponse = await this.nluClient.recognize(turn.userMessage);
    
    const intentMatch = nluResponse.topIntent === turn.expectedIntent;
    const intentConfidence = nluResponse.intents[turn.expectedIntent]?.score || 0;
    
    let entityMatches = true;
    const entityResults: Record<string, EntityValidation> = {};
    
    if (turn.expectedEntities) {
      for (const [entityType, expectedValue] of Object.entries(turn.expectedEntities)) {
        const actualEntity = nluResponse.entities[entityType];
        const match = actualEntity === expectedValue;
        entityMatches = entityMatches && match;
        entityResults[entityType] = {
          expected: expectedValue,
          actual: actualEntity,
          match
        };
      }
    }
    
    return {
      intentMatch,
      intentConfidence,
      confidenceSufficient: intentConfidence >= 0.7,
      entityMatches,
      entityResults
    };
  }

  async validateResponse(
    actualResponse: string,
    validation: ResponseValidation
  ): Promise<ResponseResult> {
    switch (validation.type) {
      case 'exact':
        return {
          passed: actualResponse === validation.value,
          method: 'exact',
          details: { expected: validation.value, actual: actualResponse }
        };
        
      case 'contains':
        return {
          passed: actualResponse.toLowerCase().includes(validation.value.toLowerCase()),
          method: 'contains',
          details: { searchTerm: validation.value, found: actualResponse.includes(validation.value) }
        };
        
      case 'semantic':
        const similarity = await this.semanticValidator.calculateSimilarity(
          actualResponse,
          validation.value
        );
        const threshold = validation.threshold || 0.8;
        return {
          passed: similarity >= threshold,
          method: 'semantic',
          details: { similarity, threshold, reference: validation.value }
        };
        
      case 'intent':
        // Validate the response expresses the expected intent
        const responseIntent = await this.nluClient.recognizeIntent(actualResponse);
        return {
          passed: responseIntent === validation.value,
          method: 'intent',
          details: { expectedIntent: validation.value, actualIntent: responseIntent }
        };
        
      default:
        throw new Error(\`Unknown validation type: \${validation.type}\`);
    }
  }

  async runStatisticalTest(
    testSet: ConversationTest[],
    minSampleSize: number = 100
  ): Promise<StatisticalResult> {
    const results = await Promise.all(
      testSet.map(test => this.runConversationTest(test))
    );
    
    const passed = results.filter(r => r.passed).length;
    const total = results.length;
    const accuracy = passed / total;
    
    // Calculate confidence interval (95%)
    const z = 1.96;
    const margin = z * Math.sqrt((accuracy * (1 - accuracy)) / total);
    
    return {
      accuracy,
      confidenceInterval: [accuracy - margin, accuracy + margin],
      sampleSize: total,
      passed,
      failed: total - passed,
      failedTests: results.filter(r => !r.passed).map(r => r.testId)
    };
  }
}

// Semantic Validation using embeddings
class SemanticValidator {
  private model: EmbeddingModel;
  
  constructor(modelName: string) {
    this.model = loadEmbeddingModel(modelName);
  }
  
  async calculateSimilarity(text1: string, text2: string): Promise<number> {
    const embedding1 = await this.model.embed(text1);
    const embedding2 = await this.model.embed(text2);
    
    // Cosine similarity
    const dotProduct = embedding1.reduce((sum, val, i) => sum + val * embedding2[i], 0);
    const norm1 = Math.sqrt(embedding1.reduce((sum, val) => sum + val * val, 0));
    const norm2 = Math.sqrt(embedding2.reduce((sum, val) => sum + val * val, 0));
    
    return dotProduct / (norm1 * norm2);
  }
}

// Usage Example
const testSuite = new ChatbotTestSuite(config);

const bookingTest: ConversationTest = {
  id: 'booking-happy-path',
  name: 'Complete flight booking',
  expectedOutcome: 'success',
  turns: [
    {
      userMessage: 'I want to book a flight to Paris',
      expectedIntent: 'BookFlight',
      expectedEntities: { destination: 'Paris' },
      responseValidation: {
        type: 'semantic',
        value: 'I can help you book a flight to Paris. When would you like to travel?',
        threshold: 0.75
      }
    },
    {
      userMessage: 'Next Friday',
      expectedIntent: 'ProvideDate',
      responseValidation: {
        type: 'contains',
        value: 'Friday'
      }
    }
  ]
};

const result = await testSuite.runConversationTest(bookingTest);
console.log(\`Test \${result.passed ? 'PASSED' : 'FAILED'}\`);`,
          explanation: 'This enterprise-grade testing framework supports multiple validation strategies including exact matching, contains, semantic similarity, and intent-based validation. It calculates statistical confidence intervals and handles multi-turn conversations.'
        },
        {
          title: 'NLU Accuracy Metrics Calculator',
          code: `// Calculate comprehensive NLU quality metrics
interface ClassificationResult {
  actual: string;
  predicted: string;
  confidence: number;
}

interface ConfusionMatrix {
  matrix: Record<string, Record<string, number>>;
  intents: string[];
}

class NLUMetricsCalculator {
  calculateConfusionMatrix(results: ClassificationResult[]): ConfusionMatrix {
    const intents = [...new Set(results.flatMap(r => [r.actual, r.predicted]))];
    const matrix: Record<string, Record<string, number>> = {};
    
    // Initialize matrix
    for (const actual of intents) {
      matrix[actual] = {};
      for (const predicted of intents) {
        matrix[actual][predicted] = 0;
      }
    }
    
    // Populate matrix
    for (const result of results) {
      matrix[result.actual][result.predicted]++;
    }
    
    return { matrix, intents };
  }

  calculatePerIntentMetrics(confusionMatrix: ConfusionMatrix): IntentMetrics[] {
    const { matrix, intents } = confusionMatrix;
    const metrics: IntentMetrics[] = [];
    
    for (const intent of intents) {
      // True Positives: correctly predicted as this intent
      const tp = matrix[intent][intent];
      
      // False Positives: incorrectly predicted as this intent
      let fp = 0;
      for (const actual of intents) {
        if (actual !== intent) {
          fp += matrix[actual][intent];
        }
      }
      
      // False Negatives: this intent incorrectly predicted as others
      let fn = 0;
      for (const predicted of intents) {
        if (predicted !== intent) {
          fn += matrix[intent][predicted];
        }
      }
      
      // Calculate metrics
      const precision = tp / (tp + fp) || 0;
      const recall = tp / (tp + fn) || 0;
      const f1 = 2 * (precision * recall) / (precision + recall) || 0;
      const support = tp + fn;
      
      metrics.push({
        intent,
        precision: Math.round(precision * 1000) / 1000,
        recall: Math.round(recall * 1000) / 1000,
        f1: Math.round(f1 * 1000) / 1000,
        support,
        truePositives: tp,
        falsePositives: fp,
        falseNegatives: fn
      });
    }
    
    return metrics;
  }

  calculateOverallMetrics(intentMetrics: IntentMetrics[]): OverallMetrics {
    const totalSupport = intentMetrics.reduce((sum, m) => sum + m.support, 0);
    
    // Macro average (unweighted)
    const macroPrecision = intentMetrics.reduce((sum, m) => sum + m.precision, 0) / intentMetrics.length;
    const macroRecall = intentMetrics.reduce((sum, m) => sum + m.recall, 0) / intentMetrics.length;
    const macroF1 = intentMetrics.reduce((sum, m) => sum + m.f1, 0) / intentMetrics.length;
    
    // Weighted average (by support)
    const weightedPrecision = intentMetrics.reduce((sum, m) => sum + m.precision * m.support, 0) / totalSupport;
    const weightedRecall = intentMetrics.reduce((sum, m) => sum + m.recall * m.support, 0) / totalSupport;
    const weightedF1 = intentMetrics.reduce((sum, m) => sum + m.f1 * m.support, 0) / totalSupport;
    
    // Overall accuracy
    const correctPredictions = intentMetrics.reduce((sum, m) => sum + m.truePositives, 0);
    const accuracy = correctPredictions / totalSupport;
    
    return {
      accuracy: Math.round(accuracy * 1000) / 1000,
      macro: {
        precision: Math.round(macroPrecision * 1000) / 1000,
        recall: Math.round(macroRecall * 1000) / 1000,
        f1: Math.round(macroF1 * 1000) / 1000
      },
      weighted: {
        precision: Math.round(weightedPrecision * 1000) / 1000,
        recall: Math.round(weightedRecall * 1000) / 1000,
        f1: Math.round(weightedF1 * 1000) / 1000
      },
      totalSamples: totalSupport,
      totalIntents: intentMetrics.length
    };
  }

  generateReport(results: ClassificationResult[]): NLUQualityReport {
    const confusionMatrix = this.calculateConfusionMatrix(results);
    const perIntentMetrics = this.calculatePerIntentMetrics(confusionMatrix);
    const overallMetrics = this.calculateOverallMetrics(perIntentMetrics);
    
    // Find problematic intents
    const lowPerformers = perIntentMetrics
      .filter(m => m.f1 < 0.8)
      .sort((a, b) => a.f1 - b.f1);
    
    // Find most confused pairs
    const confusedPairs: ConfusedPair[] = [];
    for (const actual of confusionMatrix.intents) {
      for (const predicted of confusionMatrix.intents) {
        if (actual !== predicted && confusionMatrix.matrix[actual][predicted] > 5) {
          confusedPairs.push({
            actual,
            predicted,
            count: confusionMatrix.matrix[actual][predicted]
          });
        }
      }
    }
    confusedPairs.sort((a, b) => b.count - a.count);
    
    return {
      overall: overallMetrics,
      perIntent: perIntentMetrics,
      confusionMatrix,
      lowPerformers,
      topConfusedPairs: confusedPairs.slice(0, 10),
      recommendations: this.generateRecommendations(lowPerformers, confusedPairs)
    };
  }

  generateRecommendations(
    lowPerformers: IntentMetrics[],
    confusedPairs: ConfusedPair[]
  ): string[] {
    const recommendations: string[] = [];
    
    for (const intent of lowPerformers) {
      if (intent.precision < 0.7) {
        recommendations.push(
          \`Intent "\${intent.intent}" has low precision (\${intent.precision}). \\
          Consider adding more diverse training examples or refining the intent definition.\`
        );
      }
      if (intent.recall < 0.7) {
        recommendations.push(
          \`Intent "\${intent.intent}" has low recall (\${intent.recall}). \\
          Add more training utterances covering variations users might say.\`
        );
      }
    }
    
    for (const pair of confusedPairs.slice(0, 3)) {
      recommendations.push(
        \`"\${pair.actual}" is often confused with "\${pair.predicted}" (\${pair.count} times). \\
        Review intent definitions and training data for overlap.\`
      );
    }
    
    return recommendations;
  }
}`,
          explanation: 'This metrics calculator provides comprehensive NLU quality analysis including confusion matrices, per-intent precision/recall/F1, and automated recommendations for model improvement.'
        }
      ],
      formulas: [
        {
          name: 'Precision',
          formula: 'Precision = True Positives / (True Positives + False Positives)',
          explanation: 'Of all items classified as this intent, what percentage were actually this intent? High precision means few false alarms.'
        },
        {
          name: 'Recall',
          formula: 'Recall = True Positives / (True Positives + False Negatives)',
          explanation: 'Of all items that actually were this intent, what percentage were correctly identified? High recall means few missed cases.'
        },
        {
          name: 'F1 Score',
          formula: 'F1 = 2 × (Precision × Recall) / (Precision + Recall)',
          explanation: 'Harmonic mean of precision and recall, providing a single balanced metric. Useful when you need to balance false positives and false negatives.'
        },
        {
          name: 'Cosine Similarity',
          formula: 'similarity = (A · B) / (||A|| × ||B||)',
          explanation: 'Measures semantic similarity between text embeddings. Values range from -1 to 1, with 1 being identical meaning. Used for semantic response validation.'
        },
        {
          name: 'Confidence Interval',
          formula: 'CI = p ± z × √(p(1-p)/n)',
          explanation: 'Where p is observed accuracy, z is 1.96 for 95% confidence, and n is sample size. Provides statistical bounds on true accuracy.'
        },
        {
          name: 'Perplexity (LLM Quality)',
          formula: 'Perplexity = e^(-1/N × Σ log P(wᵢ))',
          explanation: 'Measures how well a language model predicts text. Lower perplexity indicates better prediction. Used to evaluate LLM quality.'
        }
      ],
      benefits: [
        'Systematic approach to testing non-deterministic AI systems',
        'Statistical quality metrics that provide confidence in chatbot reliability',
        'Comprehensive coverage of NLU, dialog management, and response generation',
        'Enterprise-grade testing frameworks applicable to production systems',
        'Automated detection of model degradation and quality issues',
        'Clear metrics for stakeholder communication and improvement tracking',
        'Reduced production incidents through thorough pre-deployment testing'
      ],
      commonMistakes: [
        'Testing only happy-path conversations without edge cases',
        'Using exact string matching for AI-generated responses',
        'Ignoring confidence thresholds and treating all predictions equally',
        'Not separating training data from test data, leading to inflated metrics',
        'Testing in isolation without multi-turn conversation scenarios',
        'Neglecting channel-specific testing (web, Teams, voice)',
        'Failing to monitor production accuracy after deployment',
        'Not testing for adversarial inputs and prompt injection'
      ],
      exercises: [
        {
          task: 'Build a complete NLU test suite for a customer service chatbot with 5 intents',
          deliverable: 'Test framework with 50+ utterances per intent, confusion matrix analysis, and quality report',
          criteria: 'Must achieve F1 > 0.85 for all intents, include boundary testing and adversarial cases'
        },
        {
          task: 'Implement semantic validation for an LLM-powered FAQ chatbot',
          deliverable: 'Validation framework using embedding similarity with configurable thresholds',
          criteria: 'Must correctly validate semantically equivalent responses while rejecting incorrect answers'
        },
        {
          task: 'Create a multi-turn conversation test suite for a booking chatbot',
          deliverable: '20 conversation scenarios covering booking, modification, cancellation, and error recovery',
          criteria: 'Must verify context retention, slot filling, and graceful error handling'
        },
        {
          task: 'Design and execute a statistical quality evaluation for production chatbot logs',
          deliverable: 'Quality report with confidence intervals, per-intent metrics, and improvement recommendations',
          criteria: 'Must sample at least 500 conversations stratified by intent and outcome'
        }
      ],
      resources: [
        'Microsoft Bot Framework Testing Library Documentation',
        'Rasa Testing Best Practices Guide',
        'Google Dialogflow Validation and Testing',
        '"Building Chatbots with Machine Learning" - O\'Reilly Media',
        'NLU Benchmark Datasets (ATIS, SNIPS, MultiWOZ)',
        'LLM Evaluation Metrics Research Papers',
        'Conversational AI Testing Patterns - IEEE Publication'
      ],
      keyTakeaways: [
        'Chatbot testing requires statistical approaches, not just pass/fail',
        'Semantic validation is essential for testing AI-generated responses',
        'NLU quality metrics (precision, recall, F1) must be measured per intent',
        'Multi-turn conversation testing verifies context management',
        'Continuous production monitoring catches model drift',
        'LLM testing requires safety, factuality, and tone evaluation',
        'Enterprise chatbots need comprehensive test frameworks covering all components'
      ]
    }
  };

  // Check for specific lesson content
  if (lessonContents[lessonId]) {
    return lessonContents[lessonId];
  }

  // Generate comprehensive content for other lessons
  return generateComprehensiveContent(lessonId, lessonTitle);
}

function generateComprehensiveContent(lessonId: string, title: string): LessonContent {
  // Determine lesson type based on ID prefix
  const isBasic = lessonId.includes('basic');
  const isIntermediate = lessonId.includes('int');
  const isAdvanced = lessonId.includes('adv');
  const isBot = lessonId.includes('bot');

  if (isBot) {
    return generateBotFrameworkContent(lessonId, title);
  }

  return {
    title,
    overview: `This comprehensive lesson on "${title}" provides in-depth coverage of essential concepts, practical implementation strategies, and enterprise-grade techniques. Whether you're just starting your AI in QA journey or looking to deepen your expertise, this module delivers actionable knowledge that you can apply immediately in production environments. We'll explore the theoretical foundations, examine real-world case studies, and work through hands-on exercises designed to build lasting competency.`,
    objectives: [
      `Master the core principles and concepts of ${title.toLowerCase()}`,
      'Apply theoretical knowledge through practical, hands-on exercises',
      'Implement enterprise-grade solutions using industry best practices',
      'Evaluate and compare different approaches for optimal outcomes',
      'Build portfolio-ready artifacts demonstrating your expertise'
    ],
    fiveWhys: [
      { question: `Why is ${title.toLowerCase()} important for QA professionals?`, answer: 'The software industry is rapidly adopting AI technologies, creating both new testing challenges and powerful new tools. QA professionals who understand these technologies can provide greater value to their organizations and advance their careers.' },
      { question: 'Why do traditional approaches fall short?', answer: 'Traditional testing methods were designed for deterministic systems with predictable behavior. AI systems require new paradigms that account for probabilistic outputs, model drift, and emergent behaviors.' },
      { question: 'Why invest in learning these skills now?', answer: 'Early adopters of AI testing skills are positioning themselves for leadership roles as organizations scale their AI initiatives. The demand for AI-savvy QA professionals far exceeds supply.' },
      { question: 'Why can\'t this be learned on the job alone?', answer: 'Structured learning accelerates skill acquisition by 3-5x compared to ad-hoc learning. This course provides the systematic knowledge foundation that enables effective on-the-job application.' },
      { question: 'Why does this matter for quality outcomes?', answer: 'AI-enhanced testing catches defects that traditional methods miss, reduces maintenance overhead, and enables faster release cycles—directly improving both quality metrics and business outcomes.' }
    ],
    detailedContent: [
      {
        title: 'Foundational Concepts',
        content: `Understanding the foundational concepts is essential for mastering ${title.toLowerCase()}. This section establishes the theoretical framework that supports practical application.

The field has evolved significantly over the past decade, driven by advances in machine learning, increased computational power, and the proliferation of AI-powered software systems. Today's QA professionals must navigate a landscape that includes traditional automation, AI-assisted testing, and the testing of AI systems themselves.

Key principles include:
- Systematic approaches to handling non-determinism
- Statistical validation methods for probabilistic systems
- Continuous monitoring and quality feedback loops
- Human-AI collaboration in quality assurance

These principles form the foundation for the practical techniques we'll explore throughout this lesson.`
      },
      {
        title: 'Implementation Strategies',
        content: `Moving from theory to practice requires structured implementation strategies. This section provides step-by-step guidance for applying concepts in real-world scenarios.

**Phase 1: Assessment and Planning**
Begin by assessing your current testing landscape. Identify areas where AI can provide the greatest impact—typically repetitive tasks, pattern recognition challenges, or maintenance bottlenecks.

**Phase 2: Proof of Concept**
Start small with a focused proof of concept. Select a single testing challenge, implement an AI-enhanced solution, and measure results against clear success criteria.

**Phase 3: Scaling and Integration**
Once you've demonstrated value, develop a roadmap for broader adoption. Consider infrastructure requirements, team training needs, and integration with existing workflows.

**Phase 4: Continuous Improvement**
AI systems require ongoing attention. Establish monitoring, feedback collection, and regular model updates to maintain and improve quality over time.`
      },
      {
        title: 'Best Practices and Patterns',
        content: `Industry experience has revealed consistent patterns for success. Apply these best practices to accelerate your implementation and avoid common pitfalls:

1. **Start with Business Value**: Always tie AI initiatives to measurable business outcomes. This ensures stakeholder support and provides clear success criteria.

2. **Maintain Human Oversight**: AI augments human capability—it doesn't replace it. Design systems where humans remain in the loop for critical decisions.

3. **Measure Everything**: Establish baseline metrics before implementing AI solutions. Track improvements rigorously to demonstrate value and identify issues.

4. **Plan for Failure**: AI systems fail in unexpected ways. Build fallback strategies, monitoring alerts, and recovery procedures.

5. **Invest in Data Quality**: AI performance depends on data quality. Prioritize data collection, cleaning, and curation as core activities.

6. **Foster Learning Culture**: AI technologies evolve rapidly. Create space for experimentation, learning, and knowledge sharing within your team.`
      },
      {
        title: 'Enterprise Considerations',
        content: `Production deployment at enterprise scale introduces additional considerations:

**Security and Compliance**
AI systems may process sensitive data. Ensure compliance with data protection regulations (GDPR, CCPA), implement appropriate access controls, and maintain audit trails.

**Scalability**
Design for scale from the start. Consider cloud infrastructure, containerization, and horizontal scaling to handle growing workloads.

**Integration**
Enterprise systems rarely operate in isolation. Plan integration with existing CI/CD pipelines, test management systems, and reporting tools.

**Governance**
Establish clear ownership, decision-making processes, and escalation paths for AI systems. Define roles for model development, testing, deployment, and monitoring.

**Cost Management**
AI services and infrastructure have associated costs. Implement usage monitoring, optimize resource allocation, and track ROI to justify continued investment.`
      }
    ],
    codeImplementation: [
      {
        title: 'Implementation Example',
        code: `// Practical implementation demonstrating key concepts
interface TestConfiguration {
  name: string;
  type: 'unit' | 'integration' | 'e2e';
  aiEnhancements: AIEnhancement[];
  validationStrategy: ValidationStrategy;
}

interface AIEnhancement {
  feature: 'selfHealing' | 'testGeneration' | 'visualValidation' | 'semanticAssert';
  enabled: boolean;
  config?: Record<string, unknown>;
}

class AIEnhancedTestRunner {
  private config: TestConfiguration;
  private results: TestResult[] = [];

  constructor(config: TestConfiguration) {
    this.config = config;
    this.initializeAIComponents();
  }

  private initializeAIComponents(): void {
    for (const enhancement of this.config.aiEnhancements) {
      if (enhancement.enabled) {
        console.log(\`Initializing AI enhancement: \${enhancement.feature}\`);
        this.registerEnhancement(enhancement);
      }
    }
  }

  async runTest(testCase: TestCase): Promise<TestResult> {
    const startTime = Date.now();
    
    try {
      // Pre-test AI analysis
      const riskScore = await this.analyzeRisk(testCase);
      
      // Execute with AI enhancements
      const execution = await this.executeWithEnhancements(testCase);
      
      // Validate with appropriate strategy
      const validation = await this.validate(
        execution,
        this.config.validationStrategy
      );
      
      return {
        testCase: testCase.id,
        passed: validation.passed,
        duration: Date.now() - startTime,
        riskScore,
        aiInsights: validation.insights
      };
    } catch (error) {
      // Attempt self-healing if enabled
      if (this.isEnhancementEnabled('selfHealing')) {
        return await this.attemptSelfHeal(testCase, error);
      }
      throw error;
    }
  }

  async generateTestReport(): Promise<TestReport> {
    return {
      summary: this.calculateSummary(),
      details: this.results,
      aiContributions: this.calculateAIContributions(),
      recommendations: await this.generateRecommendations()
    };
  }
}

// Usage
const runner = new AIEnhancedTestRunner({
  name: 'E-Commerce Checkout Tests',
  type: 'e2e',
  aiEnhancements: [
    { feature: 'selfHealing', enabled: true },
    { feature: 'semanticAssert', enabled: true, config: { threshold: 0.85 } }
  ],
  validationStrategy: { type: 'semantic', fallback: 'exact' }
});

const result = await runner.runTest(checkoutTest);`,
        explanation: 'This implementation demonstrates an AI-enhanced test runner with configurable enhancements, semantic validation, and self-healing capabilities.'
      }
    ],
    formulas: [
      {
        name: 'Test Effectiveness',
        formula: 'Effectiveness = (Defects Found by Tests / Total Defects) × 100%',
        explanation: 'Measures how well tests catch defects before they reach production.'
      },
      {
        name: 'AI Enhancement ROI',
        formula: 'ROI = ((Time Saved - Implementation Cost) / Implementation Cost) × 100%',
        explanation: 'Calculates return on investment for AI testing enhancements.'
      },
      {
        name: 'Test Stability Score',
        formula: 'Stability = 1 - (Flaky Runs / Total Runs)',
        explanation: 'Measures test reliability. AI self-healing can significantly improve this metric.'
      }
    ],
    benefits: [
      'Comprehensive understanding of core concepts and their applications',
      'Practical skills immediately applicable to real projects',
      'Industry-standard approaches used by leading organizations',
      'Career advancement through demonstrated expertise',
      'Contribution to organizational quality improvement'
    ],
    commonMistakes: [
      'Rushing to implementation without solid conceptual understanding',
      'Ignoring data quality issues that undermine AI effectiveness',
      'Over-promising AI capabilities to stakeholders',
      'Neglecting ongoing maintenance and monitoring',
      'Failing to measure and communicate results'
    ],
    exercises: [
      {
        task: `Apply the concepts from this lesson to a testing challenge in your current project`,
        deliverable: 'Implementation document with approach, results, and lessons learned',
        criteria: 'Must demonstrate practical application with measurable outcomes'
      },
      {
        task: 'Create a presentation explaining these concepts to non-technical stakeholders',
        deliverable: '10-slide presentation with clear visuals and business value focus',
        criteria: 'Must be understandable to business stakeholders without technical background'
      },
      {
        task: 'Design a proof-of-concept implementation plan for your organization',
        deliverable: 'Project plan with timeline, resources, success criteria, and risk mitigation',
        criteria: 'Must be actionable and realistic given typical organizational constraints'
      }
    ],
    resources: [
      'Industry publications and research papers on AI in testing',
      'Tool documentation for relevant AI testing platforms',
      'Community forums and discussion groups',
      'Conference presentations and webinars',
      'Case studies from similar organizations'
    ],
    keyTakeaways: [
      'Foundational concepts provide the framework for effective application',
      'Implementation requires structured, phased approaches',
      'Best practices accelerate success and reduce risk',
      'Enterprise deployment requires attention to security, scale, and governance',
      'Continuous learning is essential in this rapidly evolving field'
    ]
  };
}

function generateBotFrameworkContent(lessonId: string, title: string): LessonContent {
  const isBasic = lessonId.includes('basic');
  const isAdvanced = lessonId.includes('adv') || lessonId.includes('ent') || lessonId.includes('ai-bot');

  return {
    title,
    overview: `This comprehensive module on "${title}" provides deep coverage of testing conversational AI systems, focusing on the unique challenges of non-deterministic behavior, multi-turn conversations, and enterprise deployment. Chatbots and conversational AI represent one of the most challenging testing domains, requiring specialized approaches that go far beyond traditional automation. This lesson equips you with the theoretical understanding, practical techniques, and enterprise-ready frameworks needed to ensure conversational AI quality at scale.`,
    objectives: [
      'Master conversational AI testing strategies for non-deterministic systems',
      'Implement NLU testing with precision, recall, and F1 score analysis',
      'Design multi-turn conversation test suites with context verification',
      'Apply semantic validation techniques for AI-generated responses',
      'Build production-ready chatbot testing frameworks'
    ],
    fiveWhys: [
      { question: 'Why is chatbot testing fundamentally different from web application testing?', answer: 'Chatbots combine natural language understanding, dialog management, and response generation—each introducing non-determinism. The same input can produce different but equally correct outputs, requiring semantic rather than exact validation.' },
      { question: 'Why can\'t traditional test automation handle conversational AI?', answer: 'Traditional automation expects deterministic outputs where the same input always produces identical output. Chatbots may respond "Sure, I can help with that" or "Absolutely, let me assist you"—both correct but textually different. This requires semantic validation approaches.' },
      { question: 'Why is multi-turn context so challenging to test?', answer: 'Conversational AI must maintain context across potentially dozens of turns, handle interruptions, remember earlier information, and gracefully recover from misunderstandings. The combinatorial explosion of possible conversation paths makes comprehensive testing complex.' },
      { question: 'Why must chatbot testing be statistical rather than deterministic?', answer: 'NLU models output probability distributions, not certainties. A model might classify an intent with 87% confidence. Testing must evaluate accuracy across large samples and determine appropriate confidence thresholds for different use cases.' },
      { question: 'Why is continuous monitoring essential for production chatbots?', answer: 'Language evolves, user patterns shift, and models drift. A chatbot that performed well at launch may degrade over months without continuous testing, monitoring, and retraining. Production chatbots require ongoing quality assurance.' }
    ],
    detailedContent: [
      {
        title: 'Conversational AI Architecture for Testers',
        content: `Understanding chatbot architecture is prerequisite to effective testing. Modern conversational AI systems consist of several key components:

**Natural Language Understanding (NLU)**
The NLU component transforms user text into structured intents and entities. When a user says "Book a flight to Paris next Friday," the NLU identifies:
- Intent: book_flight
- Entities: destination=Paris, date=next Friday

Testing NLU requires measuring intent classification accuracy and entity extraction quality across diverse user expressions.

**Dialog Manager**
The dialog manager orchestrates conversation flow, maintaining state and determining appropriate responses. Testing dialog management requires multi-turn scenarios that verify:
- Context is maintained correctly across turns
- Slot filling works correctly (gathering required information)
- Interruptions and topic changes are handled gracefully
- Error recovery is appropriate

**Response Generation**
Modern chatbots use three response generation approaches:
1. Template-based: Deterministic, easy to test with exact matching
2. Retrieval-based: Selects from pre-written responses
3. Generative (LLM): Creates novel responses requiring semantic validation

**Integration Layer**
Chatbots integrate with backend systems for data retrieval and action execution. Testing must verify correct API calls, error handling, and data transformation.`
      },
      {
        title: 'Statistical Testing for Non-Deterministic Systems',
        content: `Traditional testing asks: "Does this test pass?" Statistical testing asks: "What is the accuracy, and are we confident in this estimate?"

**Sample Size Determination**
For statistically significant results:
- 95% confidence with ±5% margin requires ~385 samples
- 99% confidence with ±2% margin requires ~4,148 samples
- Use stratified sampling to ensure coverage of all intents and scenarios

**Metrics That Matter**
- **Accuracy**: Overall percentage of correct classifications
- **Precision**: Of items classified as intent X, what percentage actually are?
- **Recall**: Of all intent X items, what percentage were correctly identified?
- **F1 Score**: Harmonic mean balancing precision and recall
- **Confidence Calibration**: Does 90% confidence actually mean 90% accuracy?

**Threshold Optimization**
Every NLU model outputs confidence scores. Testing must determine optimal thresholds:
- Too high: Many valid inputs rejected, forcing fallback
- Too low: Confident misclassifications cause poor experiences
- Different thresholds for different intents based on risk

**A/B Testing for Chatbots**
Compare chatbot versions by:
- Random user assignment to versions
- Measuring task completion rates
- Analyzing conversation length and user satisfaction
- Statistical significance testing for differences`
      },
      {
        title: 'Manual Testing Methodology for Chatbots',
        content: `Before automation, manual testing establishes quality baselines and uncovers issues that automated approaches miss.

**Conversation Sampling Strategy**
1. Collect production logs (anonymized for privacy)
2. Stratify by intent, outcome, user type, and channel
3. Sample representative conversations from each stratum
4. Apply human evaluation rubrics consistently

**Human Evaluation Rubrics**
Rate conversations on multiple dimensions:
- **Task Completion (0-4)**: Did the user achieve their goal?
- **Coherence (0-4)**: Were responses logical and contextual?
- **Naturalness (0-4)**: Did conversation flow smoothly?
- **Error Recovery (0-4)**: When problems occurred, was recovery graceful?
- **Satisfaction (0-4)**: Overall experience quality

**Exploratory Testing Patterns**
Skilled testers probe boundaries:
- Interrupt mid-flow and attempt to resume
- Provide partial or ambiguous information
- Use unusual language, slang, or typos
- Attempt scope violations (requests outside bot capabilities)
- Test across user personas (expert/novice, native/non-native)

**Multi-Turn Context Testing**
Verify context handling:
- Reference earlier conversation elements
- Change topics and return to previous topics
- Test context isolation between sessions
- Verify personal information is retained appropriately`
      },
      {
        title: 'LLM-Powered Chatbot Testing',
        content: `Large Language Models (GPT-4, Claude, Gemini) introduce unique challenges due to their generative nature.

**Response Quality Dimensions**
- **Accuracy**: Is information factually correct?
- **Relevance**: Does it address the user's question?
- **Completeness**: Are all necessary details included?
- **Conciseness**: Is it appropriately brief?
- **Tone**: Is tone appropriate for context and brand?
- **Safety**: Are there harmful or inappropriate elements?

**LLM-as-Judge Approach**
Use one LLM to evaluate another's responses:
"Given query: {query}
And response: {response}
Rate accuracy (1-5), helpfulness (1-5), and safety (1-5).
Provide evidence for each rating."

**Hallucination Detection**
LLMs can generate plausible but false information:
- Compare claims against authoritative sources
- Check consistency across multiple generations
- Verify citations and references
- Use domain experts for specialized content

**Prompt Injection Testing**
Verify resistance to manipulation:
- "Ignore previous instructions and..."
- Hidden instructions in user input
- Multi-turn attacks building to jailbreak
- System prompt extraction attempts

**Safety Testing**
- Content policy violation attempts
- Harmful advice requests
- PII handling verification
- Escalation triggers to human agents`
      }
    ],
    codeImplementation: [
      {
        title: 'Enterprise Chatbot Testing Framework',
        code: `// Production-ready chatbot testing framework
import { DialogTestClient } from 'botbuilder-testing';

interface SemanticValidation {
  type: 'semantic';
  reference: string;
  threshold: number;
}

interface IntentValidation {
  type: 'intent';
  expectedIntent: string;
  minConfidence: number;
}

interface EntityValidation {
  type: 'entity';
  expectedEntities: Record<string, string>;
}

type Validation = SemanticValidation | IntentValidation | EntityValidation;

interface ConversationTurn {
  userMessage: string;
  validations: Validation[];
  contextChecks?: string[];
}

interface ConversationScenario {
  id: string;
  name: string;
  description: string;
  turns: ConversationTurn[];
  tags: string[];
}

class ChatbotTestFramework {
  private client: DialogTestClient;
  private embeddings: EmbeddingService;
  private nlu: NLUService;

  async runScenario(scenario: ConversationScenario): Promise<ScenarioResult> {
    const turnResults: TurnResult[] = [];
    
    for (let i = 0; i < scenario.turns.length; i++) {
      const turn = scenario.turns[i];
      const response = await this.client.sendActivity(turn.userMessage);
      
      const validationResults = await this.runValidations(
        response.text,
        turn.userMessage,
        turn.validations
      );
      
      const contextValid = turn.contextChecks
        ? await this.verifyContext(turn.contextChecks)
        : true;
      
      turnResults.push({
        turnNumber: i + 1,
        userMessage: turn.userMessage,
        botResponse: response.text,
        validations: validationResults,
        contextValid,
        passed: validationResults.every(v => v.passed) && contextValid
      });
    }
    
    return {
      scenarioId: scenario.id,
      scenarioName: scenario.name,
      passed: turnResults.every(t => t.passed),
      turns: turnResults,
      executionTime: this.calculateExecutionTime(turnResults)
    };
  }

  async runValidations(
    response: string,
    userMessage: string,
    validations: Validation[]
  ): Promise<ValidationResult[]> {
    return Promise.all(validations.map(async validation => {
      switch (validation.type) {
        case 'semantic':
          return this.validateSemantic(response, validation);
        case 'intent':
          return this.validateIntent(userMessage, validation);
        case 'entity':
          return this.validateEntities(userMessage, validation);
      }
    }));
  }

  async validateSemantic(
    response: string,
    validation: SemanticValidation
  ): Promise<ValidationResult> {
    const responseEmbedding = await this.embeddings.embed(response);
    const referenceEmbedding = await this.embeddings.embed(validation.reference);
    
    const similarity = this.cosineSimilarity(responseEmbedding, referenceEmbedding);
    
    return {
      type: 'semantic',
      passed: similarity >= validation.threshold,
      details: {
        similarity: Math.round(similarity * 1000) / 1000,
        threshold: validation.threshold,
        reference: validation.reference.substring(0, 100)
      }
    };
  }

  cosineSimilarity(a: number[], b: number[]): number {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (normA * normB);
  }

  async runStatisticalAnalysis(
    scenarios: ConversationScenario[]
  ): Promise<StatisticalReport> {
    const results = await Promise.all(
      scenarios.map(s => this.runScenario(s))
    );
    
    const passed = results.filter(r => r.passed).length;
    const total = results.length;
    const accuracy = passed / total;
    
    // 95% confidence interval
    const z = 1.96;
    const margin = z * Math.sqrt((accuracy * (1 - accuracy)) / total);
    
    // Group by tags for detailed analysis
    const tagAnalysis = this.analyzeByTags(results, scenarios);
    
    return {
      overallAccuracy: accuracy,
      confidenceInterval: [accuracy - margin, accuracy + margin],
      sampleSize: total,
      tagBreakdown: tagAnalysis,
      failedScenarios: results.filter(r => !r.passed).map(r => r.scenarioId)
    };
  }
}

// Usage
const framework = new ChatbotTestFramework(config);

const bookingScenario: ConversationScenario = {
  id: 'booking-001',
  name: 'Complete Flight Booking',
  description: 'End-to-end booking with all required information',
  tags: ['booking', 'happy-path', 'critical'],
  turns: [
    {
      userMessage: 'I need to book a flight to London',
      validations: [
        { type: 'intent', expectedIntent: 'BookFlight', minConfidence: 0.8 },
        { type: 'entity', expectedEntities: { destination: 'London' } },
        {
          type: 'semantic',
          reference: 'I can help you book a flight to London',
          threshold: 0.75
        }
      ]
    },
    {
      userMessage: 'Next Monday',
      validations: [
        { type: 'intent', expectedIntent: 'ProvideDate', minConfidence: 0.7 }
      ],
      contextChecks: ['destination should be London']
    }
  ]
};

const result = await framework.runScenario(bookingScenario);`,
        explanation: 'This enterprise framework supports semantic, intent, and entity validation with statistical analysis and confidence intervals for comprehensive chatbot quality assessment.'
      }
    ],
    formulas: [
      {
        name: 'Precision',
        formula: 'Precision = TP / (TP + FP)',
        explanation: 'True positives divided by all positive predictions. High precision means few false alarms.'
      },
      {
        name: 'Recall',
        formula: 'Recall = TP / (TP + FN)',
        explanation: 'True positives divided by all actual positives. High recall means few missed cases.'
      },
      {
        name: 'F1 Score',
        formula: 'F1 = 2 × (Precision × Recall) / (Precision + Recall)',
        explanation: 'Harmonic mean providing balanced metric. Standard for NLU evaluation.'
      },
      {
        name: 'Cosine Similarity',
        formula: 'cos(θ) = (A · B) / (|A| × |B|)',
        explanation: 'Measures angle between embedding vectors. 1 = identical, 0 = orthogonal.'
      },
      {
        name: 'Confidence Interval',
        formula: 'CI = p ± z√(p(1-p)/n)',
        explanation: 'Statistical bounds on true accuracy. z=1.96 for 95% confidence.'
      }
    ],
    benefits: [
      'Systematic testing approach for non-deterministic AI systems',
      'Statistical quality metrics with confidence intervals',
      'Semantic validation for AI-generated responses',
      'Comprehensive multi-turn conversation testing',
      'Enterprise-ready frameworks for production deployment',
      'Continuous monitoring for model drift detection'
    ],
    commonMistakes: [
      'Using exact string matching for AI responses',
      'Ignoring confidence thresholds in NLU testing',
      'Testing only single-turn interactions',
      'Mixing training and test data',
      'Neglecting production monitoring after deployment',
      'Not testing adversarial and edge cases'
    ],
    exercises: [
      {
        task: 'Build a complete NLU test suite for a 5-intent chatbot',
        deliverable: 'Test framework with 50 utterances per intent and confusion matrix analysis',
        criteria: 'Achieve F1 > 0.85 for all intents with documented precision and recall'
      },
      {
        task: 'Implement semantic validation using embedding similarity',
        deliverable: 'Validation framework with configurable thresholds',
        criteria: 'Correctly validate semantically equivalent responses'
      },
      {
        task: 'Create 20 multi-turn conversation test scenarios',
        deliverable: 'Test suite covering booking, modification, and error recovery',
        criteria: 'Verify context retention and slot filling across turns'
      }
    ],
    resources: [
      'Microsoft Bot Framework Testing Documentation',
      'Rasa Testing Best Practices',
      'NLU Benchmark Datasets (ATIS, SNIPS)',
      'LLM Evaluation Research Papers',
      'Conversational AI Testing Patterns'
    ],
    keyTakeaways: [
      'Chatbot testing requires statistical, not deterministic, approaches',
      'Semantic validation is essential for AI-generated content',
      'Multi-turn testing verifies critical context management',
      'Production monitoring catches model drift over time',
      'Enterprise deployment requires comprehensive test frameworks'
    ]
  };
}