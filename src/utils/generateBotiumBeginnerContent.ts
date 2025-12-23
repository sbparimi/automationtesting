// Comprehensive Botium Framework Content Generator - Udemy Style
// Ultra-detailed step-by-step instructions for absolute beginners
// Each lesson explains concepts as if the reader knows NOTHING about chatbots or AI

import { LessonContent } from './generateAiInQaContent';

export function generateBotiumBeginnerContent(lessonId: string, lessonTitle: string): LessonContent | null {
  const beginnerContents: Record<string, LessonContent> = {
    // ==================== SECTION 1: INTRODUCTION TO BOTIUM ECOSYSTEM ====================
    
    'botium-basic-001': {
      title: 'Introduction to Botium Framework',
      overview: `Welcome to your first step into the exciting world of chatbot testing! Before we dive into Botium, let's understand what we're actually testing. If you've ever talked to a customer service chat on a website, asked Siri a question, or used Amazon Alexa, you've interacted with a chatbot. These chatbots need to be tested just like any other software, but they're special - they understand human language and respond in natural ways. That's where Botium comes in. Botium is like a robot that talks to other robots (chatbots) and checks if they're responding correctly. In this lesson, we'll start from absolute zero and build your understanding step by step.`,
      objectives: [
        'Understand what a chatbot is and why they exist in simple terms',
        'Learn what makes testing chatbots different from testing regular software',
        'Discover what Botium is and why it was created',
        'Understand the basic concept of automated chatbot testing',
        'Know the different parts of Botium (Core, Box, CLI, Bench)',
        'Feel confident about starting your chatbot testing journey'
      ],
      fiveWhys: [
        { 
          question: 'What is a chatbot, really?', 
          answer: 'A chatbot is a computer program that can have a conversation with humans. Think of it like a very smart auto-reply system. When you type "What are your store hours?", the chatbot understands your question (that\'s the AI part) and gives you an answer like "We\'re open 9 AM to 5 PM." Behind the scenes, the chatbot has been trained to recognize thousands of different ways people might ask about store hours and knows how to respond appropriately.' 
        },
        { 
          question: 'Why can\'t we test chatbots like regular websites?', 
          answer: 'Regular software testing is predictable: click a button, get a specific result. Chatbots are different because humans don\'t speak in exact phrases. You might say "What time do you open?", "When can I visit?", or "Are you open now?" - all meaning the same thing. The chatbot might respond with "We open at 9 AM" or "Our doors open at 9:00" - both are correct! This variability makes traditional testing tools useless for chatbots.' 
        },
        { 
          question: 'What problem does Botium solve?', 
          answer: 'Botium solves the problem of testing conversations automatically. Instead of a human manually chatting with a bot and checking responses (slow and error-prone), Botium can simulate thousands of conversations in seconds. It understands that "We open at 9 AM" and "9:00 AM is our opening time" both mean the same thing, so it can validate responses intelligently.' 
        },
        { 
          question: 'Why is Botium called "the Selenium for Chatbots"?', 
          answer: 'Selenium is a famous tool that automates web browser testing. Before Selenium, testers had to click through websites manually. Selenium changed that. Botium does the same thing for chatbots - it automates the conversation testing process. Just as Selenium can test any website, Botium can test any chatbot, regardless of which platform it\'s built on.' 
        },
        { 
          question: 'Why should I learn Botium as a tester?', 
          answer: 'Chatbots are everywhere - banking, healthcare, e-commerce, customer service. Every company using chatbots needs people who can test them. There are very few chatbot testing experts, but the demand is growing rapidly. Learning Botium makes you valuable in a field where most testers have zero experience.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Understanding Chatbots from Scratch',
          content: `Let's start at the very beginning. Forget everything technical for a moment.

**What is a Chatbot in Simple Terms?**

Imagine you hire a new employee whose only job is to answer customer questions via text chat. This employee:
- Can work 24 hours a day, 7 days a week
- Can talk to thousands of customers at the same time
- Never gets tired, never gets rude
- Gives consistent answers every time

A chatbot is exactly this - but it's a computer program, not a human.

**Real-World Examples You've Probably Used:**

1. **Customer Service Chat** - That little chat bubble on websites asking "How can I help you?"
2. **Siri, Alexa, Google Assistant** - Voice-based chatbots (yes, voice assistants are chatbots!)
3. **Banking Apps** - "Check my balance" features in banking apps
4. **Food Ordering** - "Order my usual" features in delivery apps
5. **Facebook Messenger Bots** - Businesses that auto-reply on Facebook

**How Does a Chatbot "Understand" You?**

When you say "What's the weather like?", the chatbot goes through these steps:

\`\`\`
Step 1: LISTEN - Receive your text message
         ↓
Step 2: UNDERSTAND - Figure out what you're asking about (weather)
         ↓
Step 3: THINK - Look up the weather information
         ↓
Step 4: RESPOND - Send back "It's 72°F and sunny!"
\`\`\`

The "UNDERSTAND" part is where AI magic happens. The chatbot uses something called NLU (Natural Language Understanding) to figure out your intent - what you actually want.

**The Amazing Thing About Modern Chatbots:**

You don't have to say exact phrases. All of these would work:
- "What's the weather?"
- "How's the weather today?"
- "Is it going to rain?"
- "Do I need an umbrella?"
- "What should I wear outside?"

The chatbot understands that all of these are asking about weather!`
        },
        {
          title: 'Step 2: Why Testing Chatbots is Different (And Challenging)',
          content: `Now that you understand what chatbots are, let's see why testing them is special.

**The Challenge: Chatbots Don't Give Exact Answers**

Imagine testing a calculator:
- Input: 2 + 2
- Expected Output: 4
- Actual Output: 4
- Result: PASS ✅

Simple, right? The answer is always exactly "4".

Now imagine testing a chatbot:
- Input: "What are your hours?"
- Expected Output: ??? 

The chatbot might say:
- "We're open 9 AM to 5 PM"
- "Our hours are 9-5"
- "We open at 9 and close at 5"
- "You can visit us between 9 AM and 5 PM!"
- "Mon-Fri 9-5, weekends 10-4"

ALL of these are correct answers! This is called **non-deterministic behavior** - the same input can produce different (but valid) outputs.

**The Testing Challenges:**

\`\`\`
Challenge 1: MULTIPLE VALID ANSWERS
             Same question → Many correct responses
             
Challenge 2: CONTEXT MATTERS
             "What about tomorrow?" depends on previous conversation
             
Challenge 3: PERSONALITY & TONE
             Bot should be friendly, professional, helpful
             
Challenge 4: ERROR HANDLING
             What happens when the bot doesn't understand?
             
Challenge 5: RICH RESPONSES
             Buttons, images, cards, not just text
\`\`\`

**Why Regular Testing Tools Fail:**

Traditional automation tools like Selenium expect:
\`\`\`
ASSERT response == "We're open 9 AM to 5 PM"
\`\`\`

But the bot might say "Our hours are 9-5" and the test would FAIL - even though the answer is correct!

**What We Need:**

A smart testing tool that can:
1. Understand that different responses can be equally correct
2. Check if the MEANING is right, not just exact words
3. Validate rich content like buttons and cards
4. Handle multi-turn conversations with context
5. Work with any chatbot platform

This is exactly what Botium does!`
        },
        {
          title: 'Step 3: Introducing Botium - Your Chatbot Testing Companion',
          content: `**What is Botium?**

Botium is a free, open-source testing framework designed specifically for chatbots. Think of it as:
- Your automated conversation partner
- A quality checker for chatbot responses
- A tool that talks to bots so you don't have to (manually)

**The Botium Family - Four Main Parts:**

Imagine a family where each member has a special role:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    THE BOTIUM FAMILY                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  👨‍💻 BOTIUM CORE (The Brain)                                │
│     The engine that actually runs tests                      │
│     Free, open-source, the heart of everything               │
│                                                              │
│  ⌨️ BOTIUM CLI (The Keyboard Warrior)                        │
│     Command-line tool for running tests                      │
│     Perfect for automation and CI/CD                         │
│                                                              │
│  📊 BOTIUM BOX (The Manager)                                 │
│     Web-based dashboard for teams                            │
│     Great for collaboration and reporting                    │
│                                                              │
│  ⚡ BOTIUM BENCH (The Stress Tester)                         │
│     Tests how many users the bot can handle                  │
│     Performance and load testing                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
\`\`\`

**For This Course, We'll Focus On:**
- **Botium Core** - The foundation
- **Botium CLI** - What you'll use daily

**The "Write Once, Test Everywhere" Promise:**

Here's the magic of Botium. You can write ONE test:

\`\`\`
greeting_test

#me
Hello!

#bot
*welcome*
\`\`\`

And run it against:
- Dialogflow (Google's chatbot platform)
- Amazon Lex (Amazon's chatbot platform)
- Microsoft Bot Framework
- IBM Watson
- Custom-built chatbots
- And 20+ other platforms!

You just change a configuration file, and the same test works everywhere.`
        },
        {
          title: 'Step 4: Your First Look at BotiumScript',
          content: `**What is BotiumScript?**

BotiumScript is the simple language Botium uses to write tests. It's designed to look like a real conversation - even your non-technical manager can read it!

**The Basic Structure:**

\`\`\`
test_name_here

#me
(what the user says)

#bot
(what the bot should respond)

#me
(user's next message)

#bot
(bot's next response)
\`\`\`

**A Real Example - Testing a Weather Bot:**

\`\`\`
weather_greeting_test

#me
Hi there!

#bot
Hello! I'm WeatherBot. How can I help you today?

#me
What's the weather in London?

#bot
In London, it's currently 18°C and cloudy.
\`\`\`

**Reading This Test:**
1. The test is named "weather_greeting_test"
2. The user (that's us, marked with #me) says "Hi there!"
3. The bot should respond with the exact greeting shown
4. The user asks about London weather
5. The bot should respond with weather info

**But Wait - What About Different Responses?**

Remember, bots don't give exact answers. Botium has smart matching:

\`\`\`
#bot
*weather*London*

Matches: "The weather in London is cloudy"
Matches: "London weather update: 18°C"
Matches: "Here's the weather for London today"
\`\`\`

The * symbols mean "anything can be here" - as long as "weather" and "London" appear somewhere in the response, the test passes!

**This is Just the Beginning:**

BotiumScript can also:
- Check buttons and quick replies
- Validate images and cards
- Use variables and dynamic data
- Handle complex conversation flows
- And much more!

We'll learn all of this step by step in upcoming lessons.`
        },
        {
          title: 'Step 5: Setting Expectations - What You Will Learn',
          content: `**Your 30-Day Journey:**

This course is designed to make you job-ready in 30 days. Here's the roadmap:

\`\`\`
WEEK 1: FOUNDATIONS (Days 1-7)
├── Understanding chatbots and AI basics
├── Installing Botium on your computer
├── Writing your first simple tests
├── Learning BotiumScript syntax
└── Running tests and reading results

WEEK 2: CORE SKILLS (Days 8-14)
├── Testing different response types
├── Handling conversation context
├── Using variables and test data
├── Connecting to real chatbots
└── Basic debugging techniques

WEEK 3: PROFESSIONAL SKILLS (Days 15-21)
├── Testing NLU (intent recognition)
├── Performance testing with Bench
├── CI/CD integration basics
├── Test organization strategies
└── Reporting and documentation

WEEK 4: JOB-READY (Days 22-30)
├── Real-world project simulation
├── Enterprise testing patterns
├── Best practices and pitfalls
├── Building your portfolio
└── Interview preparation
\`\`\`

**What You'll Be Able to Do After This Course:**

✅ Test ANY chatbot on ANY platform
✅ Write comprehensive test suites
✅ Set up automated testing pipelines
✅ Find and report chatbot bugs effectively
✅ Speak confidently about chatbot QA in interviews
✅ Contribute to chatbot testing strategies in your team

**Prerequisites:**

- Basic computer skills (you can install software, use terminal/command line)
- Some testing background helps but is NOT required
- NO programming experience needed (we'll teach what you need)
- Curiosity and willingness to learn!

**Tools You'll Need:**

\`\`\`
REQUIRED:
├── A computer (Windows, Mac, or Linux)
├── Node.js installed (we'll show you how)
├── A text editor (VS Code recommended, free)
└── Internet connection

OPTIONAL (for later lessons):
├── Access to a chatbot platform (Dialogflow, etc.)
├── GitHub account (for version control)
└── A cloud account for CI/CD
\`\`\`

Let's begin this journey together! In the next lesson, we'll understand Botium's architecture in simple terms.`
        }
      ],
      codeImplementation: [
        {
          title: 'Your First BotiumScript Test File',
          code: `# Save this as: my_first_test.convo.txt

# ================================================
# TEST 1: Simple Greeting
# This tests if the bot responds to hello
# ================================================

simple_greeting

#me
Hello

#bot
*hello*

# ================================================
# TEST 2: Asking for Help
# This tests the help functionality
# ================================================

help_request

#me
I need help

#bot
*help*

# ================================================
# TEST 3: Goodbye Flow
# This tests if the bot says goodbye properly
# ================================================

goodbye_flow

#me
Goodbye

#bot
*bye*`,
          explanation: `This is your very first test file! Let's break it down:

**The File Name**: my_first_test.convo.txt
- Botium looks for files ending in .convo.txt
- This tells Botium "this is a conversation test file"

**Comments**: Lines starting with #
- Wait, isn't #me a comment? No! #me and #bot are special
- Regular comments explain what the test does
- Good practice: Always comment your tests

**Test Name**: The first line of each test (e.g., simple_greeting)
- No spaces allowed in test names
- Use underscores_like_this
- Should describe what you're testing

**#me**: What the user says
- This is the message we send to the chatbot
- Simulates a real user typing

**#bot**: What we expect
- This is what the bot should respond with
- Using * means "anything can appear here"
- *hello* means the response should contain "hello"`
        },
        {
          title: 'Your First Configuration File',
          code: `// Save this as: botium.json

{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "MyFirstChatbotTest",
      "CONTAINERMODE": "echo",
      "SCRIPTING_NORMALIZE_TEXT": true
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}

// EXPLANATION OF EACH SETTING:

// PROJECTNAME: Give your project a name
//   - Can be anything descriptive
//   - Appears in reports and logs

// CONTAINERMODE: Which chatbot to test
//   - "echo" = A fake bot that echoes your message (for practice!)
//   - "dialogflow" = Google Dialogflow
//   - "lex" = Amazon Lex
//   - We start with "echo" to learn without needing a real bot

// SCRIPTING_NORMALIZE_TEXT: Clean up text before comparing
//   - Removes extra spaces
//   - Standardizes case
//   - Makes matching more reliable

// Sources > LOCALPATH: Where to find your test files
//   - "./tests" means a folder named "tests" in the same directory
//   - Put all your .convo.txt files there`,
          explanation: `The botium.json file tells Botium:
1. What your project is called
2. Which chatbot platform to connect to
3. Where to find your test files
4. Various settings for how tests should run

For learning, we use the "echo" mode - a fake bot that just echoes back what you say. This lets you learn BotiumScript without needing access to a real chatbot platform.`
        },
        {
          title: 'Understanding Test Results',
          code: `# When you run: botium-cli run

# You'll see output like this:

✓ simple_greeting (45ms)
✗ help_request (52ms)
    Expected: *help*
    Actual: "I'm not sure what you mean"
✓ goodbye_flow (38ms)

# ================================================
# WHAT DOES THIS MEAN?
# ================================================

# ✓ = PASSED - The bot responded correctly
# ✗ = FAILED - The bot's response didn't match

# The number in (parentheses) is how long the test took

# For failed tests, you'll see:
# - What you expected
# - What the bot actually said
# - This helps you debug!

# ================================================
# SUMMARY AT THE END
# ================================================

Tests: 2 passed, 1 failed, 3 total
Time: 0.135s

# This tells you:
# - 2 tests passed
# - 1 test failed
# - 3 tests ran in total
# - All tests took 0.135 seconds`,
          explanation: `Understanding test results is crucial:

**Passed Tests (✓)**: The bot responded correctly. The response matched your expectation.

**Failed Tests (✗)**: Something went wrong. Either:
- The bot gave an unexpected response
- The bot didn't respond at all
- The connection failed
- Your expectation was too strict

**How to Debug Failures**:
1. Look at "Expected" vs "Actual"
2. Is your expectation realistic?
3. Is the bot actually broken?
4. Did you use the right matching pattern?

**Pro Tip**: When starting out, make your expectations flexible with * wildcards. You can make them stricter later!`
        }
      ],
      formulas: [
        {
          name: 'Test Coverage Basics',
          formula: 'Coverage % = (Number of Tested Scenarios / Total Possible Scenarios) × 100',
          explanation: `This tells you how much of your chatbot you've tested. If your bot handles 10 different types of questions and you've written tests for 7 of them, your coverage is 70%. Aim for at least 80% coverage of critical paths.`
        },
        {
          name: 'Test Pass Rate',
          formula: 'Pass Rate % = (Passed Tests / Total Tests) × 100',
          explanation: `This tells you how healthy your chatbot is. If 95 out of 100 tests pass, you have a 95% pass rate. A sudden drop in pass rate often means a new bug was introduced.`
        }
      ],
      benefits: [
        'You can now explain what a chatbot is to anyone',
        'You understand why chatbot testing needs special tools',
        'You know what Botium is and its main components',
        'You can read simple BotiumScript tests',
        'You have a clear 30-day learning roadmap',
        'You feel confident to start this learning journey'
      ],
      commonMistakes: [
        'Expecting chatbot tests to work like traditional automation (they don\'t!)',
        'Using exact text matching when the bot gives varied responses',
        'Not understanding that the same question can have multiple valid answers',
        'Thinking you need programming experience to start (you don\'t!)',
        'Rushing ahead without understanding the fundamentals',
        'Not practicing with the echo mode before connecting to real bots'
      ],
      exercises: [
        {
          task: 'Write down 5 chatbots you\'ve interacted with in the past month',
          deliverable: 'A list with: Name, Platform, What you asked, How it responded',
          criteria: 'Include at least one chatbot that gave an unexpected response'
        },
        {
          task: 'Create a simple conversation script on paper',
          deliverable: 'A 3-turn conversation you would want to test',
          criteria: 'Include greeting, a main question, and a follow-up question'
        },
        {
          task: 'Research one chatbot platform (Dialogflow, Lex, or Watson)',
          deliverable: 'A half-page summary of what it does and who uses it',
          criteria: 'Include at least 2 real-world examples of companies using it'
        }
      ],
      resources: [
        'Botium Official Documentation: https://botium-docs.readthedocs.io',
        'What is a Chatbot? (IBM Explanation): https://www.ibm.com/topics/chatbots',
        'Dialogflow Introduction (Google): https://cloud.google.com/dialogflow',
        'Chatbot Testing 101 (Article)',
        'Join Botium Community on GitHub for questions'
      ],
      keyTakeaways: [
        'Chatbots are computer programs that have conversations with humans',
        'Testing chatbots is different because responses can vary',
        'Botium is a specialized tool for chatbot testing',
        'BotiumScript is a simple language that looks like a conversation',
        'You don\'t need programming experience to get started',
        'This course will make you job-ready in 30 days'
      ]
    },

    'botium-basic-002': {
      title: 'Botium Architecture and Components Overview',
      overview: `In this lesson, we'll look "under the hood" of Botium to understand how it works. Don't worry - we won't get too technical. Think of this like understanding how a car works: you don't need to build an engine, but knowing the basics helps you drive better and diagnose problems. By the end of this lesson, you'll understand how Botium talks to chatbots, why it can work with any platform, and where to look when things go wrong.`,
      objectives: [
        'Understand the "connector" concept with a simple analogy',
        'Learn how a test flows from your script to the chatbot and back',
        'Know the difference between Botium Core, CLI, Box, and Bench',
        'Understand what "capabilities" are and why they matter',
        'Be able to explain Botium architecture to a non-technical person',
        'Know where to look when troubleshooting'
      ],
      fiveWhys: [
        { 
          question: 'Why do I need to understand architecture?', 
          answer: 'When your tests fail, understanding architecture helps you pinpoint the problem. Is it your test script? The connection to the chatbot? The chatbot itself? Architecture knowledge turns hours of confused debugging into minutes of targeted investigation.' 
        },
        { 
          question: 'What is a "connector" in simple terms?', 
          answer: 'A connector is like a universal adapter for travelers. Your laptop plug (Botium) is the same, but you use different adapters (connectors) for different countries (chatbot platforms). The Dialogflow connector knows how to talk to Dialogflow. The Alexa connector knows how to talk to Alexa. Your tests stay the same!' 
        },
        { 
          question: 'Why does Botium have so many parts (Core, CLI, Box)?', 
          answer: 'Different people need different tools. A developer wants CLI for quick testing. A test manager wants Box for reports and dashboards. A performance engineer wants Bench for load testing. By separating these, each tool stays focused and simple, and you only use what you need.' 
        },
        { 
          question: 'What are "capabilities" and why should I care?', 
          answer: 'Capabilities are settings that tell Botium how to behave. They\'re like adjusting the settings on your phone. You set your language, volume, brightness. In Botium, you set which chatbot to connect to, how long to wait for responses, and how strictly to match text. Wrong capabilities = wrong test behavior.' 
        },
        { 
          question: 'How does knowing this help me write better tests?', 
          answer: 'Understanding the flow helps you write realistic tests. You\'ll know why some assertions work and others don\'t. You\'ll understand why timing matters. You\'ll be able to use advanced features like hooks and custom asserters because you understand where they fit in the pipeline.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: The Big Picture - How Botium Tests Work',
          content: `Let's start with a simple analogy. Imagine you're a quality inspector at a phone factory.

**The Phone Factory Analogy:**

\`\`\`
YOU (Inspector)          TESTING DEVICE           PHONE BEING TESTED
      ↓                        ↓                         ↓
"I'll test this          "I'll call the          "Incoming call
 phone's calling          number you              detected...
 feature"                 specify"                 Answering..."
      ↓                        ↓                         ↓
"Call 555-1234"    →     Makes the call      →    Ring ring!
      ↓                        ↓                         ↓
"Did it ring?"     ←     Reports result      ←    "Yes, connected!"
\`\`\`

Now replace the parts:
- **YOU** = Your BotiumScript test file
- **TESTING DEVICE** = Botium
- **PHONE** = The chatbot you're testing

**In Botium Terms:**

\`\`\`
YOUR TEST FILE           BOTIUM                    CHATBOT
  (.convo.txt)            (Core)                  (e.g., Dialogflow)
      ↓                     ↓                          ↓
"Test: greeting"       "I'll send this         "Message received:
#me: Hello             message to the           'Hello'"
                       chatbot"
      ↓                     ↓                          ↓
"Send 'Hello'"    →    Sends via connector  →   Processes message
      ↓                     ↓                          ↓
"Did bot say     ←     Reports response     ←   "Hello! How can I
 hello back?"                                     help you?"
      ↓
"Contains 'hello'? 
 ✓ PASS!"
\`\`\`

**The Three Steps of Every Test:**

1. **SEND** - Botium sends your message to the chatbot
2. **RECEIVE** - The chatbot processes and responds
3. **VALIDATE** - Botium checks if the response matches your expectations

That's it! Every single Botium test follows these three steps. Everything else is just details about HOW each step happens.`
        },
        {
          title: 'Step 2: Understanding Connectors (The Magic Translators)',
          content: `**The Problem: Every Chatbot Platform is Different**

Imagine you're a translator at the United Nations. Each country speaks a different language:

\`\`\`
GOOGLE'S DIALOGFLOW    speaks    "Dialogflow language"
AMAZON'S LEX           speaks    "Lex language"
MICROSOFT BOTS         speaks    "Bot Framework language"
IBM WATSON             speaks    "Watson language"
\`\`\`

Your test script "speaks" BotiumScript. How do you communicate with all these different platforms?

**The Solution: Connectors as Translators**

\`\`\`
                    YOUR BOTIUMSCRIPT TEST
                           ↓
                    "Hello, check weather"
                           ↓
         ┌─────────────────┼─────────────────┐
         ↓                 ↓                 ↓
    Dialogflow        Lex Connector      Watson
    Connector                            Connector
         ↓                 ↓                 ↓
    Translates to     Translates to     Translates to
    Dialogflow API    Lex API           Watson API
         ↓                 ↓                 ↓
    DIALOGFLOW BOT    AMAZON LEX BOT    WATSON BOT
\`\`\`

**Each Connector Knows:**
- How to authenticate with that platform
- How to send messages in the right format
- How to receive and parse responses
- How to extract buttons, cards, and rich content
- How to get intent and entity information

**Available Connectors (Partial List):**

| Connector | Platform | Who Uses It |
|-----------|----------|-------------|
| dialogflow | Google Dialogflow ES | Most common |
| dialogflowcx | Google Dialogflow CX | Newer Google bots |
| lex | Amazon Lex V1 | AWS users |
| lexv2 | Amazon Lex V2 | Newer AWS bots |
| directline3 | Microsoft Bot Framework | Azure users |
| watson | IBM Watson Assistant | IBM users |
| rasa | Rasa Open Source | Self-hosted bots |
| generic | Any REST API | Custom bots |
| echo | Built-in test bot | Learning! |

**Changing Connectors is Easy:**

\`\`\`json
// To test Dialogflow:
{ "CONTAINERMODE": "dialogflow" }

// To test Amazon Lex:
{ "CONTAINERMODE": "lex" }

// Same test file works with both!
\`\`\`

Your tests don't change. Only the connector configuration changes.`
        },
        {
          title: 'Step 3: The Botium Family Explained',
          content: `Remember our "Botium Family" from Lesson 1? Let's understand each member in detail.

**👨‍💻 BOTIUM CORE - The Brain**

This is the engine that powers everything. You never use Core directly (it's a programmer thing), but it's running behind the scenes whenever you use CLI or Box.

\`\`\`
BOTIUM CORE does:
├── Reads your .convo.txt test files
├── Manages connections to chatbots via connectors
├── Sends messages and receives responses
├── Compares actual vs expected results
├── Reports pass/fail for each test
└── Provides extension points (hooks, custom asserters)
\`\`\`

**Think of it like:** The engine in your car. You don't interact with it directly, but it powers everything.

**⌨️ BOTIUM CLI - The Keyboard Warrior**

CLI stands for Command Line Interface. It's the tool you'll use most often.

\`\`\`bash
# Common CLI commands:
botium-cli run              # Run all tests
botium-cli run --filter "greeting*"  # Run specific tests
botium-cli emulator         # Interactive chat mode
botium-cli --help           # Show all commands
\`\`\`

**Think of it like:** The gas pedal and steering wheel. Your main interface for driving.

**When to use CLI:**
- Running tests during development
- Setting up CI/CD pipelines
- Quick debugging sessions
- Individual/small team work

**📊 BOTIUM BOX - The Manager's Dashboard**

Box is a web application for teams. It adds visual management on top of Core.

\`\`\`
BOTIUM BOX provides:
├── Visual test case editor (no code!)
├── Team collaboration features
├── Scheduled test runs
├── Beautiful dashboards and reports
├── Test history and trends
├── Role-based access control
└── API for integrations
\`\`\`

**Think of it like:** A car's dashboard with speedometer, fuel gauge, and GPS.

**When to use Box:**
- Enterprise teams
- Non-technical test managers
- Executive reporting
- Collaboration across teams

**⚡ BOTIUM BENCH - The Stress Tester**

Bench tests if your chatbot can handle heavy load.

\`\`\`
BOTIUM BENCH asks:
├── How many users can chat simultaneously?
├── How fast does the bot respond under load?
├── When does performance degrade?
├── What's the breaking point?
└── Are there memory leaks over time?
\`\`\`

**Think of it like:** Testing if your car engine can handle a steep mountain road at high speed for hours.

**When to use Bench:**
- Before major launches
- After infrastructure changes
- Capacity planning
- SLA verification`
        },
        {
          title: 'Step 4: Understanding Capabilities (Your Control Panel)',
          content: `**What Are Capabilities?**

Capabilities are settings that control how Botium behaves. They're defined in your botium.json file.

**Analogy: Your Phone's Settings App**

Your phone has hundreds of settings:
- Display brightness
- Sound volume
- Language
- WiFi configuration
- And many more...

Botium has similar settings (capabilities):
- Which chatbot to connect to
- How long to wait for responses
- How strictly to match text
- And many more...

**Categories of Capabilities:**

\`\`\`
1. CONNECTION CAPABILITIES
   Tell Botium how to reach the chatbot
   ├── CONTAINERMODE: "dialogflow" (which platform)
   ├── DIALOGFLOW_PROJECT_ID: "my-project" (project to connect to)
   └── DIALOGFLOW_CLIENT_EMAIL: "..." (authentication)

2. BEHAVIOR CAPABILITIES
   Tell Botium how to run tests
   ├── WAITFORBOTTIMEOUT: 10000 (wait 10 seconds for response)
   ├── SCRIPTING_MATCHING_MODE: "wildcard" (how to match responses)
   └── SCRIPTING_NORMALIZE_TEXT: true (clean up text)

3. ASSERTION CAPABILITIES
   Tell Botium how to validate responses
   ├── SCRIPTING_ENABLE_MEMORY: true (remember variables)
   ├── ASSERTERS: [...] (custom validators)
   └── SCRIPTING_TXT_EOL: "\\n" (line ending style)
\`\`\`

**A Complete botium.json Example:**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "CustomerServiceBot",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "my-company-bot",
      "DIALOGFLOW_LANGUAGE_CODE": "en",
      "WAITFORBOTTIMEOUT": 15000,
      "SCRIPTING_NORMALIZE_TEXT": true,
      "SCRIPTING_ENABLE_MEMORY": true
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}
\`\`\`

**Reading This Configuration:**
- **PROJECTNAME**: Friendly name for reports
- **CONTAINERMODE**: Using Dialogflow connector
- **PROJECT_ID**: Which Dialogflow project to test
- **LANGUAGE_CODE**: Bot speaks English
- **WAITFORBOTTIMEOUT**: Wait up to 15 seconds for response
- **NORMALIZE_TEXT**: Clean up whitespace differences
- **ENABLE_MEMORY**: Allow variable capture
- **LOCALPATH**: Find tests in ./tests folder

**The Most Important Capabilities to Know:**

| Capability | What It Does | Default |
|------------|--------------|---------|
| CONTAINERMODE | Which connector to use | required |
| WAITFORBOTTIMEOUT | Max wait for response (ms) | 10000 |
| SCRIPTING_MATCHING_MODE | How to match text | includeLowerCase |
| SCRIPTING_NORMALIZE_TEXT | Normalize whitespace | true |`
        },
        {
          title: 'Step 5: The Complete Test Flow (End-to-End)',
          content: `Now let's see exactly what happens when you run a test, step by step.

**Your Test File:**
\`\`\`
weather_test

#me
What's the weather?

#bot
*weather*
\`\`\`

**The Journey:**

\`\`\`
STEP 1: You type "botium-cli run"
        ↓
CLI loads botium.json configuration
        ↓
STEP 2: Botium Core starts up
        ↓
Reads all .convo.txt files from LOCALPATH
        ↓
STEP 3: For test "weather_test":
        ↓
Core creates a Connector instance
(e.g., DialogflowConnector if CONTAINERMODE: "dialogflow")
        ↓
STEP 4: Connector.Build()
        ↓
Connector authenticates with platform
        ↓
STEP 5: Connector.Start()
        ↓
Connector starts a new conversation session
        ↓
STEP 6: Process "#me What's the weather?"
        ↓
Core calls Connector.UserSays("What's the weather?")
        ↓
STEP 7: Connector sends to chatbot API
        ↓
Chatbot processes message
        ↓
STEP 8: Chatbot responds
        ↓
Connector receives: "It's sunny and 72°F today!"
        ↓
STEP 9: Core validates response
        ↓
Expected: *weather*
Does "It's sunny and 72°F today!" contain "weather"?
NO - but wait, that's wrong! 
        ↓
Actually, we're testing if it's about weather
Let's adjust our test to: *sunny*
        ↓
STEP 10: Report result
        ↓
✓ weather_test PASSED (156ms)
        ↓
STEP 11: Connector.Stop()
        ↓
Clean up conversation session
        ↓
STEP 12: Move to next test...
\`\`\`

**When Things Go Wrong:**

| Error Location | Symptom | Common Causes |
|---------------|---------|---------------|
| Step 4 (Build) | "Authentication failed" | Wrong credentials |
| Step 5 (Start) | "Connection timeout" | Network issues |
| Step 7 (Send) | "Request failed" | API errors |
| Step 8 (Receive) | "Timeout waiting for bot" | Bot too slow |
| Step 9 (Validate) | "Assertion failed" | Bot response didn't match |

Understanding this flow helps you know exactly where to look when debugging!`
        }
      ],
      codeImplementation: [
        {
          title: 'Different Configuration Examples',
          code: `// ================================================
// CONFIGURATION 1: Local Testing (Echo Mode)
// ================================================
// Use this when learning - no real chatbot needed!

{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "LearningBotium",
      "CONTAINERMODE": "echo"
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}

// ================================================
// CONFIGURATION 2: Dialogflow Testing
// ================================================
// When you're ready to test a real Dialogflow bot

{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "MyDialogflowBot",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "your-project-id",
      "DIALOGFLOW_ENVIRONMENT": "draft",
      "DIALOGFLOW_CLIENT_EMAIL": "your-service-account@project.iam.gserviceaccount.com",
      "DIALOGFLOW_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\nYour key here\\n-----END PRIVATE KEY-----\\n",
      "DIALOGFLOW_LANGUAGE_CODE": "en"
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}

// ================================================
// CONFIGURATION 3: Using Environment Variables
// ================================================
// Best practice: Don't put secrets in files!

{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "SecureBot",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\${DIALOGFLOW_PROJECT}",
      "DIALOGFLOW_CLIENT_EMAIL": "\${DIALOGFLOW_EMAIL}",
      "DIALOGFLOW_PRIVATE_KEY": "\${DIALOGFLOW_KEY}"
    }
  }
}

// Then set environment variables:
// export DIALOGFLOW_PROJECT=my-project-id
// export DIALOGFLOW_EMAIL=service@project.iam.gserviceaccount.com
// export DIALOGFLOW_KEY="-----BEGIN PRIVATE KEY-----..."`,
          explanation: `Three configuration patterns:

1. **Echo Mode**: Perfect for learning. The "echo" connector just repeats what you say - no real chatbot needed.

2. **Dialogflow Direct**: Credentials directly in the file. OK for personal learning, but never commit secrets to git!

3. **Environment Variables**: The professional way. Secrets stay out of your code files. This is how teams work.

Which to use:
- Learning → Echo Mode
- Personal projects → Dialogflow Direct (but add botium.json to .gitignore!)
- Team/Production → Environment Variables`
        },
        {
          title: 'Complete Folder Structure',
          code: `# Your project should look like this:

my-chatbot-tests/
│
├── botium.json          # Main configuration file
│
├── tests/               # All test files go here
│   ├── greeting.convo.txt
│   ├── weather.convo.txt
│   ├── booking.convo.txt
│   └── faq.convo.txt
│
├── data/                # Test data files
│   └── variables.scriptingmemory.txt
│
├── reports/             # Generated reports go here
│   └── (auto-generated)
│
└── package.json         # Node.js project file


# ================================================
# SETTING UP A NEW PROJECT - STEP BY STEP
# ================================================

# Step 1: Create project folder
mkdir my-chatbot-tests
cd my-chatbot-tests

# Step 2: Initialize Node.js project
npm init -y

# Step 3: Install Botium
npm install --save-dev botium-core botium-cli

# Step 4: Create folders
mkdir tests
mkdir data
mkdir reports

# Step 5: Create botium.json (copy from examples above)

# Step 6: Create your first test
# Create file: tests/greeting.convo.txt

# Step 7: Run tests!
npx botium-cli run`,
          explanation: `This folder structure is the standard way to organize Botium projects:

- **botium.json**: Your main configuration. Always at the root.
- **tests/**: All your .convo.txt files. Keep them organized!
- **data/**: Variables, utterances, and other test data.
- **reports/**: Where test reports get saved.
- **package.json**: Node.js project file (created by npm init).

Following this structure makes it easy for team members to understand your project.`
        }
      ],
      formulas: [
        {
          name: 'Test Execution Time',
          formula: 'Total Time = (Connection Time) + (Number of Messages × Avg Response Time) + (Cleanup Time)',
          explanation: `Understanding what affects test speed:
- Connection Time: How long to connect to chatbot (usually 1-3 seconds)
- Number of Messages: Each #me/#bot exchange adds time
- Avg Response Time: How fast the chatbot replies (varies by platform)
- Cleanup Time: Closing the connection (usually under 1 second)

If tests are slow, check which part is taking longest!`
        },
        {
          name: 'Connector Selection',
          formula: 'Right Connector = Match(Chatbot Platform, Available Connectors)',
          explanation: `Simple guide:
- Building on Dialogflow? → Use "dialogflow" or "dialogflowcx"
- Building on AWS? → Use "lex" or "lexv2"
- Building on Azure? → Use "directline3"
- Building on IBM? → Use "watson"
- Custom REST API? → Use "generic"
- Just learning? → Use "echo"`
        }
      ],
      benefits: [
        'You understand how Botium works internally',
        'You can debug problems faster by knowing where to look',
        'You can explain Botium architecture to colleagues',
        'You know which Botium tool to use for different needs',
        'You understand capabilities and how to configure them',
        'You can set up a proper project structure'
      ],
      commonMistakes: [
        'Trying to use the wrong connector for your platform',
        'Forgetting to set required capabilities',
        'Putting secrets directly in botium.json (use environment variables!)',
        'Not understanding why tests are slow (missing the flow)',
        'Jumping to advanced features without understanding basics',
        'Not organizing tests in proper folder structure'
      ],
      exercises: [
        {
          task: 'Create a complete Botium project structure on your computer',
          deliverable: 'A folder with botium.json, tests/ folder, and one test file',
          criteria: 'Running "npx botium-cli run" shows no errors (can be 0 tests)'
        },
        {
          task: 'Draw the test flow diagram from memory',
          deliverable: 'A hand-drawn or digital diagram showing all 12 steps',
          criteria: 'Include: CLI, Core, Connector, Chatbot, Response, Validation'
        },
        {
          task: 'Research which connector you would need for a project at work',
          deliverable: 'Name of connector and 3 required capabilities',
          criteria: 'Identify authentication requirements for that connector'
        }
      ],
      resources: [
        'Botium Connectors List: https://github.com/codeforequity-at/botium-core',
        'Botium Capabilities Reference: https://botium-docs.readthedocs.io/en/latest/05_botiumscript/index.html',
        'Setting Up Environment Variables (guide)',
        'Botium CLI Command Reference',
        'Connector-Specific Documentation'
      ],
      keyTakeaways: [
        'Botium works by: SEND → RECEIVE → VALIDATE',
        'Connectors are adapters that let Botium talk to any platform',
        'Core is the engine, CLI is your interface, Box is for teams, Bench is for performance',
        'Capabilities are settings that control Botium behavior',
        'Understanding the flow helps you debug problems quickly',
        'Use echo mode for learning, real connectors for production'
      ]
    },

    'botium-basic-003': {
      title: 'Installing Botium CLI and Box',
      overview: `Time to get your hands dirty! In this lesson, you'll install Botium on your computer and run your very first test. We'll go through every step with screenshots and troubleshooting tips. Even if you've never used a command line before, you'll be able to follow along. By the end of this lesson, you'll have a working Botium installation and will have run a successful test.`,
      objectives: [
        'Install Node.js on your computer (Windows, Mac, or Linux)',
        'Install Botium CLI using npm',
        'Verify your installation is working correctly',
        'Create your first test project',
        'Run your first test and see it pass',
        'Understand common installation problems and how to fix them'
      ],
      fiveWhys: [
        { 
          question: 'Why do I need Node.js?', 
          answer: 'Botium is built using JavaScript/Node.js. Node.js is like the engine that runs Botium. Just like you need a browser to view websites, you need Node.js to run Botium. It\'s free, safe, and used by millions of developers worldwide.' 
        },
        { 
          question: 'What is npm?', 
          answer: 'npm (Node Package Manager) is like an app store for developers. Instead of going to a website and downloading installers, you type "npm install botium-cli" and it automatically downloads and sets up Botium for you. It\'s the standard way to install JavaScript tools.' 
        },
        { 
          question: 'Why use the command line instead of a regular installer?', 
          answer: 'The command line might seem scary at first, but it\'s actually simpler for developer tools. You type one command, and everything is installed. No clicking through wizards. Plus, you\'ll need the command line to run tests anyway, so you might as well get comfortable with it now.' 
        },
        { 
          question: 'What if I get errors during installation?', 
          answer: 'Installation errors are common and usually easy to fix. Most problems are: wrong Node.js version, permission issues, or network problems. We\'ll cover the most common errors and their solutions in this lesson.' 
        },
        { 
          question: 'Do I need to install Botium Box too?', 
          answer: 'No! Botium Box is optional and is for teams who want a web interface. For learning and most testing needs, Botium CLI is enough. We\'ll focus on CLI in this course. You can always add Box later if your team needs it.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Check Your System Requirements',
          content: `Before we install anything, let's make sure your computer is ready.

**Minimum Requirements:**

\`\`\`
Operating System:
├── Windows 10 or later
├── macOS 10.13 or later
└── Linux (any modern distribution)

Hardware:
├── 4GB RAM minimum (8GB recommended)
├── 500MB free disk space
└── Internet connection

Software:
├── A text editor (VS Code recommended)
└── Terminal/Command Prompt access
\`\`\`

**Checking Your Current Setup:**

**On Windows:**
1. Press Win + R
2. Type "cmd" and press Enter
3. A black window opens - this is Command Prompt

**On Mac:**
1. Press Cmd + Space
2. Type "Terminal" and press Enter
3. A terminal window opens

**On Linux:**
1. Press Ctrl + Alt + T
2. Or search for "Terminal" in applications

**Let's Check If You Already Have Node.js:**

Type this command and press Enter:
\`\`\`bash
node --version
\`\`\`

**What You Might See:**

\`\`\`
If Node.js is installed:
v18.17.0  (or any version number)

If Node.js is NOT installed:
'node' is not recognized...  (Windows)
command not found: node  (Mac/Linux)
\`\`\`

Don't worry if it's not installed - we'll install it next!`
        },
        {
          title: 'Step 2: Installing Node.js (The Engine)',
          content: `**Download Node.js:**

1. Open your web browser
2. Go to: https://nodejs.org
3. You'll see two download buttons:
   - LTS (Long Term Support) ← Choose this one!
   - Current

**Why LTS?** LTS versions are more stable and tested. Perfect for our needs.

**Installation Steps - Windows:**

\`\`\`
Step 1: Download the .msi installer from nodejs.org

Step 2: Double-click the downloaded file

Step 3: Click "Next" through the wizard
        ✓ Accept the license agreement
        ✓ Keep default installation path
        ✓ Keep default components

Step 4: IMPORTANT: Check "Automatically install necessary tools"
        This installs additional dependencies we might need

Step 5: Click "Install" and wait
        (May ask for administrator permission - click Yes)

Step 6: Click "Finish"
\`\`\`

**Installation Steps - Mac:**

\`\`\`
Step 1: Download the .pkg installer from nodejs.org

Step 2: Double-click the downloaded file

Step 3: Follow the installer prompts
        ✓ Click Continue
        ✓ Agree to license
        ✓ Click Install
        ✓ Enter your password when asked

Step 4: Click "Close" when done
\`\`\`

**Installation Steps - Linux (Ubuntu/Debian):**

\`\`\`bash
# Open Terminal and run these commands:

# Update package list
sudo apt update

# Install Node.js
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
\`\`\`

**Verify Installation Success:**

Open a NEW terminal window (important!) and type:

\`\`\`bash
node --version
\`\`\`

You should see something like: \`v18.17.0\`

Also verify npm:
\`\`\`bash
npm --version
\`\`\`

You should see something like: \`9.6.7\`

🎉 **Node.js is installed!**`
        },
        {
          title: 'Step 3: Installing Botium CLI',
          content: `Now that Node.js is ready, installing Botium is just one command!

**The Installation Command:**

\`\`\`bash
npm install -g botium-cli botium-core
\`\`\`

**What This Command Does:**
- \`npm install\` = Download and install packages
- \`-g\` = Install globally (available everywhere on your computer)
- \`botium-cli\` = The command-line tool
- \`botium-core\` = The engine

**Run the Command:**

1. Open your terminal
2. Copy and paste the command above
3. Press Enter
4. Wait... (might take 1-2 minutes)

**What You'll See:**

\`\`\`
npm WARN deprecated some-package@1.2.3: some message
added 234 packages in 45s
\`\`\`

**Warnings Are Normal!** As long as you don't see "ERROR" in red, you're fine.

**Verify Botium Installation:**

\`\`\`bash
botium-cli --version
\`\`\`

You should see something like: \`2.9.0\`

**If You Get Permission Errors (Mac/Linux):**

\`\`\`bash
# Option 1: Use sudo (not recommended but works)
sudo npm install -g botium-cli botium-core

# Option 2: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:\$PATH

# Then install again
npm install -g botium-cli botium-core
\`\`\`

**If You Get Permission Errors (Windows):**

1. Close your command prompt
2. Right-click on Command Prompt in the Start menu
3. Select "Run as Administrator"
4. Try the install command again

🎉 **Botium CLI is installed!**`
        },
        {
          title: 'Step 4: Create Your First Project',
          content: `Let's create a proper Botium project with your first working test!

**Create Project Folder:**

\`\`\`bash
# Windows
mkdir C:\\botium-learning
cd C:\\botium-learning

# Mac/Linux
mkdir ~/botium-learning
cd ~/botium-learning
\`\`\`

**Initialize the Project:**

\`\`\`bash
npm init -y
\`\`\`

This creates a package.json file. You'll see output like:
\`\`\`
Wrote to /your/path/botium-learning/package.json:
{
  "name": "botium-learning",
  ...
}
\`\`\`

**Install Botium Locally (Best Practice):**

\`\`\`bash
npm install --save-dev botium-core
\`\`\`

**Create botium.json Configuration:**

Create a new file called \`botium.json\` with this content:

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "MyFirstBot",
      "CONTAINERMODE": "echo"
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}
\`\`\`

**Create Tests Folder:**

\`\`\`bash
mkdir tests
\`\`\`

**Create Your First Test:**

Create a file called \`tests/hello.convo.txt\`:

\`\`\`
hello_test

#me
Hello

#bot
Hello
\`\`\`

**Your Project Should Look Like:**

\`\`\`
botium-learning/
├── botium.json
├── package.json
├── node_modules/
└── tests/
    └── hello.convo.txt
\`\`\`

Perfect! You're ready to run your first test!`
        },
        {
          title: 'Step 5: Run Your First Test!',
          content: `This is the moment of truth! Let's run your first Botium test.

**The Command:**

\`\`\`bash
botium-cli run
\`\`\`

**What You Should See:**

\`\`\`
Botium Test - Running...

✓ hello_test (25ms)

1 passing (28ms)
\`\`\`

🎉🎉🎉 **YOU DID IT!** 🎉🎉🎉

Your first chatbot test passed!

**Let's Make It Fail (On Purpose):**

Edit \`tests/hello.convo.txt\` to:

\`\`\`
hello_test

#me
Hello

#bot
Goodbye
\`\`\`

Run again:
\`\`\`bash
botium-cli run
\`\`\`

**Now You'll See:**

\`\`\`
Botium Test - Running...

✗ hello_test (32ms)
    Expected: Goodbye
    Actual: Hello

0 passing
1 failing (35ms)
\`\`\`

**Understanding the Failure:**
- The echo bot returns "Hello" (it echoes what you said)
- You expected "Goodbye"
- They don't match → Test fails

**Fix it back and run again to see it pass!**

**Try the Interactive Emulator:**

\`\`\`bash
botium-cli emulator
\`\`\`

Now you can chat with the echo bot interactively!

\`\`\`
Bot: (waiting for input)
You: Hello there!
Bot: Hello there!
You: How are you?
Bot: How are you?
You: exit
(emulator closes)
\`\`\`

The echo bot just repeats what you say. Later, you'll connect to real chatbots that give intelligent responses!`
        },
        {
          title: 'Step 6: Common Installation Problems and Solutions',
          content: `Even experienced developers hit installation problems. Here are the most common issues and how to fix them.

**Problem 1: "node is not recognized"**

\`\`\`
Symptom: 'node' is not recognized as a command

Cause: Node.js not in PATH

Fix (Windows):
1. Restart your computer (seriously, this often works)
2. If still broken, reinstall Node.js and check "Add to PATH"

Fix (Mac/Linux):
1. Open a new terminal window
2. If still broken, add to PATH manually:
   echo 'export PATH="/usr/local/bin:\$PATH"' >> ~/.bashrc
   source ~/.bashrc
\`\`\`

**Problem 2: "EACCES permission denied"**

\`\`\`
Symptom: npm WARN checkPermissions Missing write access

Cause: npm doesn't have permission to write files

Fix (Mac/Linux):
# Change npm's default directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:\$PATH' >> ~/.bashrc
source ~/.bashrc

# Then install again
npm install -g botium-cli botium-core

Fix (Windows):
# Run Command Prompt as Administrator
\`\`\`

**Problem 3: "ECONNRESET" or "network timeout"**

\`\`\`
Symptom: npm ERR! network This is a problem with your network connection

Cause: Firewall, proxy, or bad internet connection

Fix:
# Check if you're behind a corporate proxy
npm config set proxy http://your-proxy:8080
npm config set https-proxy http://your-proxy:8080

# Or try a different registry
npm config set registry https://registry.npmmirror.com
\`\`\`

**Problem 4: "Cannot find module"**

\`\`\`
Symptom: Error: Cannot find module 'botium-core'

Cause: Modules not installed in current directory

Fix:
# Make sure you're in your project directory
cd /path/to/your/project

# Install locally
npm install botium-core

# Or run using npx
npx botium-cli run
\`\`\`

**Problem 5: "Invalid configuration"**

\`\`\`
Symptom: Error parsing botium.json

Cause: Typo in JSON file

Fix:
# Validate your JSON at:
# https://jsonlint.com/
# Copy your botium.json content and check for errors

Common JSON mistakes:
- Missing comma between items
- Extra comma after last item
- Using single quotes instead of double
- Missing closing brackets
\`\`\`

**Still Stuck?**

1. Google the exact error message
2. Check Botium GitHub Issues: https://github.com/codeforequity-at/botium-core/issues
3. Ask in Botium community forums
4. Stack Overflow with [botium] tag`
        }
      ],
      codeImplementation: [
        {
          title: 'Complete Installation Commands Summary',
          code: `# ================================================
# COMPLETE INSTALLATION GUIDE - ALL STEPS
# ================================================

# STEP 1: Install Node.js
# Download from https://nodejs.org (LTS version)
# Follow the installer

# STEP 2: Verify Node.js installation
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher

# STEP 3: Install Botium CLI globally
npm install -g botium-cli botium-core

# STEP 4: Verify Botium installation
botium-cli --version    # Should show version number

# STEP 5: Create project
mkdir my-chatbot-tests
cd my-chatbot-tests
npm init -y
npm install --save-dev botium-core

# STEP 6: Create botium.json
# (copy the JSON below into a file named botium.json)

# STEP 7: Create tests folder
mkdir tests

# STEP 8: Create first test file
# (copy the test below into tests/first.convo.txt)

# STEP 9: Run tests!
botium-cli run

# STEP 10: Celebrate! 🎉`,
          explanation: `This is your complete reference for installation. Keep it handy!

Tips:
- If one step fails, fix it before moving to the next
- Use the exact commands shown (spaces matter!)
- Node version should be 18 or higher for best compatibility`
        },
        {
          title: 'Project Files to Create',
          code: `// FILE 1: botium.json
// Save this in your project root folder

{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "LearningBotium",
      "CONTAINERMODE": "echo"
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}


// FILE 2: tests/greeting.convo.txt
// Save this in the tests folder

greeting_test

#me
Hello

#bot
Hello


// FILE 3: tests/weather.convo.txt
// Another test file to practice with

weather_test

#me
What is the weather?

#bot
What is the weather?


// FILE 4: package.json
// Created by npm init -y, you can leave as-is

{
  "name": "my-chatbot-tests",
  "version": "1.0.0",
  "description": "My first Botium project",
  "scripts": {
    "test": "botium-cli run"
  },
  "devDependencies": {
    "botium-core": "^2.9.0"
  }
}`,
          explanation: `Create these files in your project:

1. **botium.json**: Configuration - tells Botium how to run
2. **tests/greeting.convo.txt**: Your first test
3. **tests/weather.convo.txt**: A second test to practice
4. **package.json**: Node.js project file (auto-generated, just add the scripts section)

The "test" script in package.json means you can also run:
\`npm test\` instead of \`botium-cli run\``
        },
        {
          title: 'Helpful Commands Reference',
          code: `# ================================================
# BOTIUM CLI COMMANDS YOU'LL USE DAILY
# ================================================

# Run all tests
botium-cli run

# Run tests with specific filter
botium-cli run --filter "greeting*"

# Run tests and save report
botium-cli run --output junit ./reports/results.xml

# Interactive chatbot mode
botium-cli emulator

# Show help
botium-cli --help

# Show version
botium-cli --version

# ================================================
# USEFUL NPM COMMANDS
# ================================================

# Install a package
npm install <package-name>

# Install as dev dependency
npm install --save-dev <package-name>

# Install globally
npm install -g <package-name>

# Run a script from package.json
npm test

# Update packages
npm update

# List installed packages
npm list

# ================================================
# TROUBLESHOOTING COMMANDS
# ================================================

# Clear npm cache (helps with weird errors)
npm cache clean --force

# Check npm configuration
npm config list

# Check Node.js version
node --version

# Check npm version
npm --version

# Find where npm installs global packages
npm root -g`,
          explanation: `Bookmark this reference! These are the commands you'll use most often.

Pro tips:
- Use \`--help\` with any command to see all options
- Use \`--verbose\` to see more detailed output
- Clear cache when you have unexplainable errors`
        }
      ],
      formulas: [
        {
          name: 'Version Compatibility',
          formula: 'Node.js LTS + Latest Botium = Best Stability',
          explanation: `Always use the LTS (Long Term Support) version of Node.js with the latest Botium. This combination is the most tested and stable. Avoid using odd-numbered Node.js versions (15, 17, 19) as these are experimental.`
        },
        {
          name: 'Installation Success Check',
          formula: 'node --version ✓ + npm --version ✓ + botium-cli --version ✓ = Ready to Go!',
          explanation: `If all three commands return version numbers (not errors), your installation is complete. If any fails, focus on fixing that specific component.`
        }
      ],
      benefits: [
        'Botium is installed and working on your computer',
        'You understand the project structure',
        'You have run your first test successfully',
        'You know how to troubleshoot common problems',
        'You can use the interactive emulator for experimentation',
        'You are ready for the next lesson!'
      ],
      commonMistakes: [
        'Running commands without administrator/sudo privileges when needed',
        'Not opening a new terminal after installing Node.js',
        'Forgetting to create the tests folder before running tests',
        'Having typos in botium.json (JSON is picky about syntax!)',
        'Installing only botium-cli without botium-core',
        'Not being in the correct directory when running commands'
      ],
      exercises: [
        {
          task: 'Complete the full installation on your computer',
          deliverable: 'Screenshot of "botium-cli --version" showing a version number',
          criteria: 'Installation works without errors'
        },
        {
          task: 'Create a project with 3 different test files',
          deliverable: 'Project folder with botium.json and tests/three-tests.convo.txt files',
          criteria: 'All 3 tests pass when you run "botium-cli run"'
        },
        {
          task: 'Make a test fail intentionally and understand the error',
          deliverable: 'Screenshot of a failed test with your explanation of why it failed',
          criteria: 'Correctly identify Expected vs Actual values'
        }
      ],
      resources: [
        'Node.js Official Download: https://nodejs.org',
        'VS Code Download: https://code.visualstudio.com',
        'Botium CLI npm page: https://www.npmjs.com/package/botium-cli',
        'JSON Validator: https://jsonlint.com',
        'Botium Getting Started Guide: https://botium-docs.readthedocs.io'
      ],
      keyTakeaways: [
        'Node.js is required to run Botium',
        'Use npm to install Botium CLI and Core',
        'The echo connector is perfect for learning',
        'botium.json tells Botium how to configure tests',
        'Test files go in a folder and end with .convo.txt',
        'When in doubt, check version numbers and restart terminal!'
      ]
    },

    // ==================== LESSON 4: BOTIUM CORE VS BOX VS BENCH ====================
    
    'botium-basic-004': {
      title: 'Botium Core vs Botium Box vs Botium Bench',
      overview: `Now that you have Botium installed, you might be wondering: "Wait, there are THREE different Botium products? Which one do I need?" Don't worry - this is one of the most common questions beginners have! In this lesson, we'll clearly explain what each tool does, when to use it, and how they work together. Think of it like this: if you were building a house, you'd need different tools for different jobs - a hammer for nails, a saw for cutting wood, a measuring tape for sizing. Botium works the same way. By the end of this lesson, you'll know exactly which Botium tool to reach for in any situation.`,
      objectives: [
        'Understand what Botium Core is and what it does',
        'Understand what Botium Box is and when to use it',
        'Understand what Botium Bench is and why it matters',
        'Know how all three products work together',
        'Be able to choose the right tool for your testing needs',
        'Understand the difference between open-source and commercial options'
      ],
      fiveWhys: [
        { 
          question: 'Why are there three different Botium products?', 
          answer: 'Each product solves a different problem! Botium Core is the engine that talks to chatbots. Botium Box is a web interface for teams. Botium Bench is for measuring performance. It\'s like having a car engine (Core), a car with dashboard and steering wheel (Box), and a speedometer/diagnostic tool (Bench). You need all parts for different purposes.' 
        },
        { 
          question: 'Can I just use Botium Core without the others?', 
          answer: 'Absolutely! Many teams use only Botium Core with the CLI. It\'s free, open-source, and can do everything you need for automated testing. Box and Bench add convenience and features, but they\'re not required. Start with Core, and add the others if you need their specific features.' 
        },
        { 
          question: 'What\'s the main difference between Core and Box?', 
          answer: 'Botium Core is a programming library and command-line tool - you work with it through code and terminal commands. Botium Box is a web application with buttons, forms, and dashboards. If you prefer clicking over coding, Box is easier. If you love the command line and want full control, Core is perfect.' 
        },
        { 
          question: 'When would I need Botium Bench?', 
          answer: 'Botium Bench is for load testing and performance measurement. Use it when you need to know: "How many users can my chatbot handle at once?" or "How fast does my bot respond under pressure?" If your chatbot will serve thousands of users, Bench is essential.' 
        },
        { 
          question: 'Is Botium Box free or paid?', 
          answer: 'Botium Box has both free (community) and paid (enterprise) versions. The free version has limitations on users and test runs. The paid version adds advanced features, more capacity, and support. Botium Core is completely free and open-source forever.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Understanding the Botium Family (Simple Analogy)',
          content: \`Let's start with a simple analogy that makes everything clear.

**The Restaurant Kitchen Analogy**

Imagine you're running a restaurant kitchen:

\`\`\`
BOTIUM CORE = The Chef's Skills and Recipes
├── This is the actual cooking knowledge
├── The chef can cook any dish from any cuisine
├── Works directly with ingredients (chatbots)
└── The foundation everything else is built on

BOTIUM BOX = The Restaurant Management System
├── A tablet/computer for managing orders
├── Anyone can use it, even non-chefs
├── Shows nice dashboards and reports
└── Makes the restaurant run smoothly

BOTIUM BENCH = The Health Inspector / Quality Tester
├── Tests how fast dishes come out
├── Checks how many orders can be handled
├── Measures quality under pressure
└── Ensures everything works at scale
\`\`\`

**In Technical Terms:**

| Component | Type | Who Uses It | How You Use It |
|-----------|------|-------------|----------------|
| Botium Core | Library/Engine | Developers, Automation Engineers | Code, CLI commands |
| Botium Box | Web Application | QA Teams, Managers, Anyone | Click buttons, fill forms |
| Botium Bench | Performance Tool | Performance Engineers | Load test scenarios |

**The Key Insight:**

Botium Core is the BRAIN - it's what actually talks to chatbots and understands conversations.
Box and Bench are just different INTERFACES to that brain.\`
        },
        {
          title: 'Step 2: Deep Dive into Botium Core',
          content: \`Let's understand Botium Core in detail.

**What Exactly IS Botium Core?**

Botium Core is:
- An npm package (JavaScript library)
- The "engine" that connects to chatbots
- The thing that sends messages and receives responses
- Completely FREE and open-source

\`\`\`
HOW BOTIUM CORE WORKS:
                                    
Your Test Script ──> Botium Core ──> Connector ──> Your Chatbot
    (what to say)     (engine)     (translator)    (being tested)
                          │
                          └── Validates the response
\`\`\`

**What Botium Core Can Do:**

1. **Connect to ANY chatbot platform:**
   - Dialogflow, IBM Watson, Amazon Lex
   - Microsoft Bot Framework, Rasa
   - Custom chatbots via REST API
   - And many more!

2. **Run test conversations:**
   - Send user messages
   - Receive bot responses
   - Check if responses are correct

3. **Generate test cases:**
   - Extract intents from your bot
   - Create test variations automatically

**The Core Components:**

\`\`\`
BOTIUM CORE PACKAGE INCLUDES:
├── botium-core        ← The main library
├── Connectors         ← Plugins for different chatbot platforms  
├── Asserters          ← Ways to check responses
├── Scripting Engine   ← Reads your test files
└── Reporting          ← Outputs test results
\`\`\`

**Code Example - Using Botium Core Directly:**

\`\`\`javascript
// This is how developers use Botium Core in code
const BotDriver = require('botium-core').BotDriver

// Create a bot driver instance
const driver = new BotDriver()

// Start a conversation
async function testMyBot() {
  // Initialize the connection
  await driver.Build()
  
  // Start a new conversation
  const container = await driver.Start()
  
  // Send a message
  await container.UserSays('Hello')
  
  // Get the bot's response
  const response = await container.WaitBotSays()
  
  console.log('Bot said:', response.messageText)
  
  // Clean up
  await container.Stop()
  await driver.Clean()
}

testMyBot()
\`\`\`

**When to Use Botium Core:**

✅ You're comfortable with command line
✅ You want maximum flexibility
✅ You need to integrate with existing code
✅ You want it completely free
✅ You're building a custom CI/CD pipeline

❌ You want a visual interface
❌ Your team doesn't know programming
❌ You need collaboration features\`
        },
        {
          title: 'Step 3: Deep Dive into Botium Box',
          content: \`Now let's explore Botium Box - the visual interface.

**What Exactly IS Botium Box?**

Botium Box is:
- A web application (like Gmail or Facebook)
- A user-friendly interface to Botium Core
- A collaboration platform for teams
- Available in Community (free) and Enterprise (paid) versions

\`\`\`
BOTIUM BOX ARCHITECTURE:
                                    
┌─────────────────────────────────────────────┐
│            BOTIUM BOX (Web App)              │
│  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Dashboard  │  │    Test Editor          │ │
│  │  - Charts   │  │    - Visual test builder│ │
│  │  - Stats    │  │    - No coding needed   │ │
│  └─────────────┘  └─────────────────────────┘ │
│  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Team       │  │    CI/CD Integration    │ │
│  │  Management │  │    - Jenkins, GitLab    │ │
│  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────┘
              │
              │ Uses internally
              ▼
        ┌─────────────┐
        │ BOTIUM CORE │
        │  (Engine)   │
        └─────────────┘
\`\`\`

**What You Can Do in Botium Box:**

1. **Visual Test Creation:**
   - Write tests without knowing code
   - Click to add user messages
   - Click to add expected responses
   - Drag and drop to reorder

2. **Team Collaboration:**
   - Multiple users can work together
   - Role-based access (admin, tester, viewer)
   - Comment on tests
   - Track changes

3. **Pretty Dashboards:**
   - See pass/fail rates at a glance
   - Trend charts over time
   - Identify flaky tests
   - Executive-friendly reports

4. **Scheduling:**
   - Run tests automatically every hour/day
   - Get email notifications on failures
   - Set up monitoring

**Botium Box vs Botium Core Comparison:**

| Feature | Botium Core | Botium Box |
|---------|-------------|------------|
| Interface | Command Line | Web Browser |
| Cost | Free | Free + Paid tiers |
| Test Creation | Write code/scripts | Click and type |
| Collaboration | Via Git | Built-in |
| Dashboards | Generate manually | Built-in |
| Learning Curve | Steeper | Gentler |

**Screenshot Description - What Botium Box Looks Like:**

\`\`\`
┌────────────────────────────────────────────────────────┐
│ 🤖 Botium Box                    [Dashboard] [Tests]   │
├────────────────────────────────────────────────────────┤
│                                                        │
│  📊 Test Results Overview                              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                  │
│  │  ✅ 127  │ │  ❌ 3   │ │  ⏭️ 5   │                  │
│  │ Passed  │ │ Failed  │ │ Skipped │                  │
│  └─────────┘ └─────────┘ └─────────┘                  │
│                                                        │
│  📈 Trend (Last 7 Days)                               │
│  ─────────────────────────                            │
│  Pass Rate: 97.2% ▲                                   │
│                                                        │
│  🔴 Recent Failures:                                  │
│  • Order Pizza Intent - Wrong response                │
│  • Weather Query - Timeout                            │
│  • Greeting Test - Missing button                     │
│                                                        │
└────────────────────────────────────────────────────────┘
\`\`\`

**When to Use Botium Box:**

✅ Your team includes non-programmers
✅ You want beautiful dashboards for stakeholders
✅ You need team collaboration features
✅ You want scheduled automated testing
✅ You prefer clicking over typing commands

❌ You need maximum customization
❌ You want everything free forever
❌ You're the only person doing testing\`
        },
        {
          title: 'Step 4: Deep Dive into Botium Bench',
          content: \`Finally, let's understand Botium Bench - the performance testing tool.

**What Exactly IS Botium Bench?**

Botium Bench is:
- A performance and load testing tool
- Designed specifically for chatbots
- Measures how your bot handles stress
- Answers "How many users can talk to my bot at once?"

\`\`\`
WHY PERFORMANCE TESTING MATTERS FOR CHATBOTS:
                                    
Normal Day:           Black Friday Sale:
   😊                    😊😊😊😊😊😊😊
   │                     │││││││││││
   └──> 🤖               └──> 🤖 💥❓
  1 user                 100 users!
  Works fine             Bot crashes?

Botium Bench tests this BEFORE it happens in production!
\`\`\`

**What Botium Bench Measures:**

1. **Response Time:**
   - How fast does the bot reply?
   - Average, minimum, maximum times
   - 95th percentile (worst 5% of cases)

2. **Throughput:**
   - How many conversations per minute?
   - Messages processed per second
   - Requests per second

3. **Concurrency:**
   - How many simultaneous users?
   - What happens when 10, 100, 1000 users chat at once?

4. **Error Rate:**
   - Does the bot crash under load?
   - Are there timeout errors?
   - Does quality decrease with more users?

**Performance Testing Scenarios:**

\`\`\`
SCENARIO 1: LOAD TEST
─────────────────────
"Can my bot handle expected load?"

Start: 10 users
Ramp up: Add 10 users every minute
End: 100 users
Duration: 15 minutes

SCENARIO 2: STRESS TEST  
────────────────────────
"At what point does my bot break?"

Start: 50 users
Ramp up: Double users every 2 minutes
End: Until bot fails
Find the breaking point!

SCENARIO 3: ENDURANCE TEST
──────────────────────────
"Does performance degrade over time?"

Users: 50 constant
Duration: 4 hours
Watch for memory leaks
\`\`\`

**Sample Botium Bench Report:**

\`\`\`
╔════════════════════════════════════════════════════╗
║           BOTIUM BENCH PERFORMANCE REPORT          ║
╠════════════════════════════════════════════════════╣
║ Test Duration: 30 minutes                          ║
║ Total Conversations: 1,247                         ║
║ Messages Exchanged: 8,729                          ║
╠════════════════════════════════════════════════════╣
║ RESPONSE TIMES                                     ║
║ ├── Average: 234ms ✅                              ║
║ ├── Minimum: 89ms                                  ║
║ ├── Maximum: 2,341ms                               ║
║ └── 95th Percentile: 567ms ⚠️                     ║
╠════════════════════════════════════════════════════╣
║ THROUGHPUT                                         ║
║ ├── Conversations/minute: 41.5                     ║
║ └── Messages/second: 4.8                           ║
╠════════════════════════════════════════════════════╣
║ ERRORS                                             ║
║ ├── Timeouts: 3 (0.02%)                           ║
║ ├── Errors: 0 (0.00%)                             ║
║ └── Success Rate: 99.98% ✅                        ║
╚════════════════════════════════════════════════════╝
\`\`\`

**When to Use Botium Bench:**

✅ Your chatbot will serve many users
✅ You're launching a new product
✅ You need to find the breaking point
✅ Performance is a requirement
✅ You want to compare before/after optimization

❌ You're still building the chatbot
❌ It's an internal tool with few users
❌ You haven't done functional testing yet\`
        },
        {
          title: 'Step 5: How All Three Work Together',
          content: \`Now let's see how Core, Box, and Bench complement each other.

**The Complete Testing Workflow:**

\`\`\`
PHASE 1: DEVELOPMENT (Use Core)
────────────────────────────────
Developer writes chatbot
    │
    ▼
Uses Botium Core + CLI for quick testing
    │
    ▼
Fixes bugs, runs tests, iterates fast


PHASE 2: TEAM TESTING (Use Box)
────────────────────────────────
Code is deployed to test environment
    │
    ▼
QA team uses Botium Box to:
  - Run full regression suite
  - Create new test cases
  - Review dashboards
    │
    ▼
Stakeholders view reports in Box


PHASE 3: PRODUCTION READINESS (Use Bench)
────────────────────────────────────────
Before going live:
    │
    ▼
Run Botium Bench performance tests
    │
    ▼
Verify the bot handles expected load
    │
    ▼
Green light for production! 🚀
\`\`\`

**A Day in the Life - Using All Three:**

\`\`\`
9:00 AM - Developer commits new feature
    └── CI/CD triggers Botium Core tests
    
10:00 AM - Tests pass, deployed to QA environment
    └── Botium Box scheduled tests run automatically
    
11:00 AM - QA Engineer opens Botium Box
    └── Creates 5 new test cases for the feature
    └── Runs them, finds 2 bugs
    
2:00 PM - Bugs fixed, tests pass in Box
    └── Product Manager views dashboard in Box
    └── Approves for performance testing
    
3:00 PM - Performance Engineer runs Botium Bench
    └── 500 concurrent user test
    └── Response time: 200ms average ✅
    
4:00 PM - All green! 
    └── Deploy to production with confidence
\`\`\`

**Decision Guide - Which Tool to Start With:**

\`\`\`
START HERE
    │
    ▼
Are you a developer comfortable with CLI?
    │
    ├── YES ──> Start with BOTIUM CORE
    │           (Free, powerful, flexible)
    │
    └── NO ───> Start with BOTIUM BOX
                (Easy to use, visual interface)

                    │
                    ▼
            Is your chatbot going to production soon?
                    │
                    ├── YES ──> Add BOTIUM BENCH
                    │           (Performance testing)
                    │
                    └── NO ───> Continue learning Core/Box
\`\`\`

**Quick Reference Card:**

| Question | Answer |
|----------|--------|
| "I want to learn chatbot testing" | Start with Core + CLI |
| "My team needs to test together" | Add Botium Box |
| "We're going live next month" | Run Botium Bench tests |
| "I want it free forever" | Use only Botium Core |
| "Boss wants pretty reports" | Botium Box dashboards |\`
        }
      ],
      codeExamples: [
        {
          title: 'Quick Comparison Commands',
          code: \`# USING BOTIUM CORE (Command Line)
# ──────────────────────────────────
# Run tests from terminal
botium-cli run

# Generate test cases
botium-cli nlpanalytics

# Get help
botium-cli --help


# USING BOTIUM BOX (Web Interface)
# ──────────────────────────────────
# Access via browser: http://localhost:4000
# Click "New Test Set" button
# Type your test conversations
# Click "Run Tests" button
# View results in dashboard


# USING BOTIUM BENCH (Performance)
# ──────────────────────────────────
# Define scenario in botium-bench.json
# Run: botium-bench run
# View performance metrics in output\`,
          explanation: \`This shows the different ways you interact with each tool:
- Core: You type commands in terminal
- Box: You click in a web browser
- Bench: You run performance scenarios\`
        },
        {
          title: 'Checking Which Components You Have Installed',
          code: \`# Check Botium Core installation
npm list -g botium-core

# Check Botium CLI installation  
botium-cli --version

# Check if Botium Box is running (if using Docker)
docker ps | grep botium-box

# Check Botium Bench installation
npm list -g botium-bench

# Install Botium Core if missing
npm install -g botium-core botium-cli

# Install Botium Bench if missing
npm install -g botium-bench\`,
          explanation: \`Use these commands to see what's installed on your system and install missing components.\`
        }
      ],
      formulas: [
        {
          name: 'Tool Selection Formula',
          formula: 'Your Role + Team Size + Budget = Best Botium Tool Choice',
          explanation: \`Solo developer + command line comfort + $0 = Botium Core
Team of testers + mixed skills + some budget = Botium Box
Performance requirements + go-live deadline = Add Botium Bench\`
        },
        {
          name: 'Complete Testing Coverage',
          formula: 'Core (Functional) + Box (Collaboration) + Bench (Performance) = Enterprise-Ready Testing',
          explanation: \`Large organizations typically use all three tools together. Core runs in CI/CD, Box enables team collaboration, Bench validates performance before releases.\`
        }
      ],
      benefits: [
        'You now understand the purpose of each Botium component',
        'You can explain the differences to teammates and managers',
        'You know which tool to start with based on your situation',
        'You understand how the tools work together',
        'You can make informed decisions about Botium adoption',
        'You have a clear learning path forward'
      ],
      commonMistakes: [
        'Thinking you MUST use all three tools (you don\'t - start with Core!)',
        'Skipping Botium Core and jumping straight to Box without understanding the basics',
        'Running performance tests (Bench) before functional tests work (premature)',
        'Assuming Botium Box does something Core cannot (Box uses Core internally)',
        'Not realizing Core is completely free and incredibly powerful alone'
      ],
      exercises: [
        {
          task: 'Create a comparison chart for your team',
          deliverable: 'A one-page document comparing Core vs Box vs Bench for your organization',
          criteria: 'Include pros/cons, cost, and your recommendation'
        },
        {
          task: 'Run the same test in CLI and Box',
          deliverable: 'Screenshots showing the same test running in both interfaces',
          criteria: 'Explain which interface you prefer and why'
        },
        {
          task: 'Identify your organization\'s needs',
          deliverable: 'Written analysis: Which Botium tools does your team need and why?',
          criteria: 'Consider team size, skills, budget, and requirements'
        }
      ],
      resources: [
        'Botium Core GitHub: https://github.com/codeforequity-at/botium-core',
        'Botium Box Documentation: https://botium-docs.readthedocs.io/en/latest/box/',
        'Botium Bench Guide: https://botium-docs.readthedocs.io/en/latest/bench/',
        'Comparison Article: https://medium.com/botium/botium-in-a-nutshell'
      ],
      keyTakeaways: [
        'Botium Core is the free, open-source engine that talks to chatbots',
        'Botium Box is a web interface for teams who prefer clicking over coding',
        'Botium Bench is for performance testing under load',
        'All three tools can work together in enterprise settings',
        'Start with Core - you can always add Box and Bench later!'
      ]
    },

    // ==================== LESSON 5: UNDERSTANDING CONNECTORS ====================
    
    'botium-basic-005': {
      title: 'Understanding Connectors for Different Platforms',
      overview: \`Here's a crucial concept that makes Botium so powerful: CONNECTORS. Think of connectors as universal translators. Just like you'd need a translator to communicate with someone who speaks a different language, Botium needs connectors to "speak" with different chatbot platforms. Whether your chatbot is built on Dialogflow, IBM Watson, Amazon Lex, or any other platform, there's a connector for it. In this lesson, we'll demystify connectors and help you understand which one you need for your chatbot.\`,
      objectives: [
        'Understand what a connector is and why it\'s needed',
        'Learn about the most common connectors available',
        'Know how to identify which connector your chatbot needs',
        'Understand how connectors are installed and configured',
        'Be able to troubleshoot basic connector issues',
        'Know the difference between platform and generic connectors'
      ],
      fiveWhys: [
        { 
          question: 'Why do we need connectors at all?', 
          answer: 'Every chatbot platform has its own unique way of communicating. Dialogflow uses a different API than IBM Watson, which is different from Amazon Lex. Without connectors, Botium would need to be rebuilt for every platform. Connectors act as adapters that translate Botium\'s standard format into each platform\'s specific format.' 
        },
        { 
          question: 'How do I know which connector to use?', 
          answer: 'It depends on how your chatbot is built. If your team used Dialogflow, use the Dialogflow connector. If they used Microsoft Bot Framework, use that connector. Don\'t know what platform was used? Ask your developers, or look at the chatbot\'s admin panel or code.' 
        },
        { 
          question: 'What if there\'s no connector for my chatbot?', 
          answer: 'Good news! Most chatbots have a way to communicate via REST API (web calls). You can use the generic HTTP/JSON connector for almost any chatbot. Worst case, you can write a custom connector, but that\'s rarely needed.' 
        },
        { 
          question: 'Are connectors free?', 
          answer: 'Yes! All official Botium connectors are free and open-source. They\'re available as npm packages that you install just like any other Node.js package. Some commercial chatbot platforms may have API costs, but the connector itself is free.' 
        },
        { 
          question: 'Can I use multiple connectors?', 
          answer: 'Yes, but typically one connector per project. If you have multiple chatbots on different platforms, you\'d create separate Botium projects for each. However, you could switch connectors between test runs if testing the same bot deployed on different platforms.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: What Exactly IS a Connector? (Visual Explanation)',
          content: \`Let's make this crystal clear with a visual explanation.

**The Universal Adapter Analogy:**

You know how when you travel to different countries, the electrical outlets are different? You need adapters:

\`\`\`
YOUR LAPTOP                     WALL OUTLET
(Same laptop)     ADAPTER       (Different in each country)
    💻    ──────>  🔌  ──────>  🔲 US (Type A)
    💻    ──────>  🔌  ──────>  🔲 UK (Type G)  
    💻    ──────>  🔌  ──────>  🔲 EU (Type C)
    💻    ──────>  🔌  ──────>  🔲 AU (Type I)
\`\`\`

Botium connectors work exactly the same way:

\`\`\`
YOUR TEST                       CHATBOT PLATFORM
(Same test script)  CONNECTOR   (Different API for each)
    📄    ────────>  🔌  ────────>  🤖 Dialogflow
    📄    ────────>  🔌  ────────>  🤖 IBM Watson
    📄    ────────>  🔌  ────────>  🤖 Amazon Lex
    📄    ────────>  🔌  ────────>  🤖 Microsoft Bot Framework
\`\`\`

**Why This Is Brilliant:**

You write your test ONCE. Then just change the connector to test on any platform!

**The Technical Reality:**

Each chatbot platform has its own API (Application Programming Interface):

\`\`\`
DIALOGFLOW API:
POST https://dialogflow.googleapis.com/v2/sessions/{session}:detectIntent
{
  "queryInput": {
    "text": { "text": "Hello", "languageCode": "en" }
  }
}

IBM WATSON API:
POST https://api.us-south.assistant.watson.cloud.ibm.com/instances/{id}/v2/sessions/{session}/message
{
  "input": { "text": "Hello" }
}

AMAZON LEX API:
POST https://runtime.lex.{region}.amazonaws.com/bot/{botName}/text
{
  "inputText": "Hello"
}
\`\`\`

See how different they are? A connector handles all of this complexity for you!\`
        },
        {
          title: 'Step 2: The Most Common Connectors (Complete List)',
          content: \`Let's go through all the major connectors available.

**TIER 1: Major Cloud Platforms**

These are the most commonly used chatbot platforms:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ CONNECTOR               │ NPM PACKAGE                       │
├─────────────────────────┼───────────────────────────────────┤
│ Google Dialogflow       │ botium-connector-dialogflow       │
│ Google Dialogflow CX    │ botium-connector-dialogflow-cx    │
│ IBM Watson Assistant    │ botium-connector-watson           │
│ Amazon Lex              │ botium-connector-lex              │
│ Microsoft Bot Framework │ botium-connector-directline       │
│ Microsoft LUIS          │ botium-connector-luis             │
└─────────────────────────┴───────────────────────────────────┘
\`\`\`

**TIER 2: Open Source Platforms**

Free chatbot frameworks:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ CONNECTOR               │ NPM PACKAGE                       │
├─────────────────────────┼───────────────────────────────────┤
│ Rasa                    │ botium-connector-rasa             │
│ Botpress                │ botium-connector-botpress         │
│ Wit.ai                  │ botium-connector-wit              │
│ Alexa Skills            │ botium-connector-alexa-avs        │
│ Google Actions          │ botium-connector-google-assistant │
└─────────────────────────┴───────────────────────────────────┘
\`\`\`

**TIER 3: Generic Connectors (The Swiss Army Knives)**

When you don't have a specific connector:

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ CONNECTOR               │ USE CASE                          │
├─────────────────────────┼───────────────────────────────────┤
│ botium-connector-echo   │ Testing Botium itself (learning)  │
│ botium-connector-http   │ Any chatbot with REST API         │
│ botium-connector-websocket │ WebSocket-based chat          │
│ botium-connector-webdriver │ Web page chat widgets         │
└─────────────────────────┴───────────────────────────────────┘
\`\`\`

**TIER 4: Enterprise/Specialized**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ CONNECTOR               │ NPM PACKAGE                       │
├─────────────────────────┼───────────────────────────────────┤
│ SAP Conversational AI   │ botium-connector-sapcai           │
│ Kore.ai                 │ botium-connector-koreai           │
│ Nuance Mix              │ botium-connector-nuance           │
│ Cognigy                 │ botium-connector-cognigy          │
└─────────────────────────┴───────────────────────────────────┘
\`\`\`

**Finding the Right Connector - Decision Tree:**

\`\`\`
What platform is your chatbot built on?
│
├── Google Cloud
│   └── Is it Dialogflow CX or ES?
│       ├── ES ──> botium-connector-dialogflow
│       └── CX ──> botium-connector-dialogflow-cx
│
├── IBM Cloud
│   └── botium-connector-watson
│
├── AWS
│   └── botium-connector-lex
│
├── Microsoft Azure
│   └── Is it a Bot Framework bot or just LUIS?
│       ├── Bot Framework ──> botium-connector-directline
│       └── LUIS only ──> botium-connector-luis
│
├── Open Source (Rasa, Botpress, etc.)
│   └── Use the specific connector
│
├── Custom/In-House Bot
│   └── Does it have a REST API?
│       ├── Yes ──> botium-connector-http
│       └── No ──> May need custom connector
│
└── Don't Know / Learning
    └── botium-connector-echo (for practice)
\`\`\`\`
        },
        {
          title: 'Step 3: Installing and Configuring a Connector',
          content: \`Now let's walk through the practical steps of using a connector.

**Step 3.1: Installing a Connector**

All connectors are npm packages. Install like this:

\`\`\`bash
# General pattern:
npm install <connector-name>

# Examples:
npm install botium-connector-dialogflow
npm install botium-connector-watson
npm install botium-connector-echo  # For learning

# Install globally (accessible everywhere):
npm install -g botium-connector-dialogflow
\`\`\`

**Step 3.2: Telling Botium Which Connector to Use**

In your botium.json file, specify the connector:

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My Chatbot Tests",
      "CONTAINERMODE": "dialogflow"  // <-- This is the connector!
    }
  }
}
\`\`\`

**Common CONTAINERMODE Values:**

\`\`\`
CONTAINERMODE VALUE      │  MEANING
─────────────────────────┼────────────────────────────
"echo"                   │  Echo connector (testing)
"dialogflow"             │  Google Dialogflow ES
"dialogflow-cx"          │  Google Dialogflow CX
"watson"                 │  IBM Watson Assistant
"lex"                    │  Amazon Lex
"directline"             │  Microsoft Bot Framework
"http"                   │  Generic HTTP/REST API
"websocket"              │  WebSocket chat
\`\`\`

**Step 3.3: Connector-Specific Configuration**

Each connector needs specific settings. Here are examples:

**Example 1: Dialogflow Connector**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My Dialogflow Bot Test",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "your-project-id",
      "DIALOGFLOW_CLIENT_EMAIL": "your-service-account@your-project.iam.gserviceaccount.com",
      "DIALOGFLOW_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\nYOUR_KEY_HERE\\n-----END PRIVATE KEY-----"
    }
  }
}
\`\`\`

**Example 2: IBM Watson Connector**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My Watson Bot Test",
      "CONTAINERMODE": "watson",
      "WATSON_APIKEY": "your-api-key",
      "WATSON_URL": "https://api.us-south.assistant.watson.cloud.ibm.com",
      "WATSON_ASSISTANT_ID": "your-assistant-id"
    }
  }
}
\`\`\`

**Example 3: Echo Connector (No Config Needed!)**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Learning Botium",
      "CONTAINERMODE": "echo"
    }
  }
}
\`\`\`

**Step 3.4: Where Do I Get These Credentials?**

\`\`\`
DIALOGFLOW:
1. Go to Google Cloud Console
2. Select your project
3. Go to IAM & Admin > Service Accounts
4. Create a new service account
5. Download the JSON key file
6. Extract PROJECT_ID, CLIENT_EMAIL, PRIVATE_KEY

IBM WATSON:
1. Go to IBM Cloud dashboard
2. Open your Watson Assistant service
3. Click on "Manage" tab
4. Copy the API Key and URL
5. Get Assistant ID from Settings

AMAZON LEX:
1. Go to AWS Console
2. Navigate to Amazon Lex
3. Get Bot Name, Bot Alias, Region
4. Create IAM credentials with Lex permissions
\`\`\`\`
        },
        {
          title: 'Step 4: The Echo Connector - Your Training Wheels',
          content: \`Before testing real chatbots, master the echo connector.

**What is the Echo Connector?**

The echo connector is a "fake" chatbot that simply echoes back whatever you say to it:

\`\`\`
YOU: Hello
BOT: You said: Hello

YOU: What is the weather?
BOT: You said: What is the weather?

YOU: Book a flight to Paris
BOT: You said: Book a flight to Paris
\`\`\`

**Why Use the Echo Connector?**

1. **No credentials needed** - Works immediately
2. **100% predictable** - Always responds the same way
3. **Perfect for learning** - Focus on Botium, not chatbot issues
4. **Test your tests** - Make sure your test scripts work before testing real bots

**Setting Up the Echo Connector:**

\`\`\`bash
# Create project folder
mkdir botium-echo-practice
cd botium-echo-practice

# Create botium.json
echo '{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Echo Practice",
      "CONTAINERMODE": "echo"
    }
  }
}' > botium.json

# Create test folder
mkdir tests
\`\`\`

**Writing Tests for Echo Connector:**

Create \`tests/test1.convo.txt\`:

\`\`\`
test echo response

#me
Hello there

#bot
You said: Hello there

#me
Testing 123

#bot
You said: Testing 123
\`\`\`

**Run the Test:**

\`\`\`bash
botium-cli run

# Expected output:
# ✓ test echo response
# 1 passing
\`\`\`

**Practice Exercise with Echo:**

Try different scenarios:

\`\`\`
# tests/multiline.convo.txt
test multiline message

#me
This is line one
And line two
And line three

#bot
You said: This is line one
And line two
And line three
\`\`\`

**Transition to Real Connector:**

Once comfortable with echo, the process is simple:

\`\`\`
1. Change CONTAINERMODE in botium.json
2. Add connector-specific credentials
3. Update test expectations (bot responses will be different!)
4. Run tests against real chatbot
\`\`\`\`
        },
        {
          title: 'Step 5: Troubleshooting Common Connector Issues',
          content: \`Here are the most common problems and their solutions.

**Problem 1: "Connector not found"**

\`\`\`bash
ERROR: Container mode echo not found

SOLUTION:
# Make sure connector is installed
npm install botium-connector-echo

# Or globally
npm install -g botium-core
npm install -g botium-connector-echo
\`\`\`

**Problem 2: "Authentication failed"**

\`\`\`bash
ERROR: 401 Unauthorized or Authentication failed

SOLUTION:
# Double-check credentials in botium.json
# Common issues:
# - Typos in API keys
# - Expired credentials
# - Wrong project ID
# - Missing permissions in cloud console
\`\`\`

**Problem 3: "Connection timeout"**

\`\`\`bash
ERROR: ETIMEDOUT or Connection timed out

SOLUTION:
# Check if chatbot service is running
# Check network/firewall settings
# Verify URL is correct
# Try pinging the service manually
curl https://your-chatbot-url.com/health
\`\`\`

**Problem 4: "Invalid response format"**

\`\`\`bash
ERROR: Unable to parse response

SOLUTION:
# Your chatbot might be returning unexpected format
# Enable debug logging to see raw response:
export DEBUG=botium*
botium-cli run
\`\`\`

**Debugging Checklist:**

\`\`\`
☐ Is the connector installed? (npm list -g botium-connector-*)
☐ Is CONTAINERMODE spelled correctly in botium.json?
☐ Are all required capabilities set for this connector?
☐ Are credentials valid and not expired?
☐ Is the chatbot service running and accessible?
☐ Can you access the chatbot manually (via its own interface)?
☐ Are there any firewall or network issues?
\`\`\`

**Getting Help:**

If you're stuck:
1. Check Botium documentation for your specific connector
2. Search GitHub issues for similar problems
3. Enable debug mode: \`DEBUG=botium* botium-cli run\`
4. Ask in Botium community forums\`
        }
      ],
      codeExamples: [
        {
          title: 'Complete botium.json Examples for Different Connectors',
          code: \`// ========================================
// EXAMPLE 1: ECHO CONNECTOR (Simplest)
// ========================================
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Learning Project",
      "CONTAINERMODE": "echo"
    }
  }
}

// ========================================
// EXAMPLE 2: DIALOGFLOW ES CONNECTOR
// ========================================
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My Dialogflow Bot",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "my-gcp-project-id",
      "DIALOGFLOW_LANGUAGE_CODE": "en",
      "DIALOGFLOW_CLIENT_EMAIL": "botium@my-project.iam.gserviceaccount.com",
      "DIALOGFLOW_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----"
    }
  }
}

// ========================================
// EXAMPLE 3: IBM WATSON CONNECTOR
// ========================================
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My Watson Bot",
      "CONTAINERMODE": "watson",
      "WATSON_APIKEY": "your-watson-api-key",
      "WATSON_URL": "https://api.us-south.assistant.watson.cloud.ibm.com",
      "WATSON_ASSISTANT_ID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "WATSON_VERSION": "2021-11-27"
    }
  }
}

// ========================================
// EXAMPLE 4: GENERIC HTTP CONNECTOR
// ========================================
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Custom REST Bot",
      "CONTAINERMODE": "http",
      "HTTP_ENDPOINT": "https://my-chatbot.com/api/message",
      "HTTP_METHOD": "POST",
      "HTTP_BODY_TEMPLATE": "{ \\"message\\": \\"{{msg.messageText}}\\" }",
      "HTTP_RESPONSE_JSONPATH": "$.response.text"
    }
  }
}\`,
          explanation: \`These are complete, working examples. Copy the one that matches your chatbot platform and fill in your credentials.\`
        },
        {
          title: 'Installing Multiple Connectors',
          code: \`# If you test multiple chatbot platforms, install all needed connectors

# Install connectors you need
npm install -g botium-connector-dialogflow
npm install -g botium-connector-watson
npm install -g botium-connector-echo

# List installed connectors
npm list -g | grep botium-connector

# Sample output:
# ├── botium-connector-dialogflow@1.0.0
# ├── botium-connector-echo@1.0.0
# └── botium-connector-watson@1.0.0

# Switch between them by changing botium.json
# No need to reinstall - just change CONTAINERMODE\`,
          explanation: \`You can have multiple connectors installed. Botium uses whichever one you specify in CONTAINERMODE.\`
        }
      ],
      formulas: [
        {
          name: 'Connector Selection',
          formula: 'Chatbot Platform + Platform Version = Correct Connector',
          explanation: \`Identify your chatbot platform first, then find the matching connector. For example, Dialogflow ES uses "dialogflow" connector, while Dialogflow CX uses "dialogflow-cx" connector - they're different!\`
        },
        {
          name: 'Configuration Completeness',
          formula: 'CONTAINERMODE + Required Capabilities = Working Connection',
          explanation: \`Every connector needs: 1) The CONTAINERMODE value, and 2) Its specific required capabilities (like API keys, URLs, etc.). Missing any of these = error.\`
        }
      ],
      benefits: [
        'You understand what connectors are and why they exist',
        'You know how to find the right connector for any chatbot',
        'You can install and configure connectors',
        'You can use the echo connector for safe practice',
        'You can troubleshoot common connector issues',
        'You\'re ready to connect to real chatbots!'
      ],
      commonMistakes: [
        'Forgetting to install the connector package (npm install)',
        'Misspelling CONTAINERMODE value in botium.json',
        'Using wrong credentials or expired API keys',
        'Confusing Dialogflow ES and CX connectors',
        'Not reading the specific connector documentation',
        'Testing against production chatbot instead of test environment'
      ],
      exercises: [
        {
          task: 'Master the echo connector',
          deliverable: 'Create 5 different test conversations using the echo connector',
          criteria: 'All 5 tests pass when running botium-cli run'
        },
        {
          task: 'Research your chatbot\'s platform',
          deliverable: 'Document which platform your chatbot uses and find the matching connector',
          criteria: 'Include connector name, npm package, and documentation link'
        },
        {
          task: 'Create a botium.json template',
          deliverable: 'botium.json file with placeholders for your chatbot\'s connector',
          criteria: 'All required capabilities are listed with clear TODO comments'
        }
      ],
      resources: [
        'Botium Connectors Overview: https://botium-docs.readthedocs.io/en/latest/connectors/',
        'Dialogflow Connector: https://github.com/codeforequity-at/botium-connector-dialogflow',
        'Watson Connector: https://github.com/codeforequity-at/botium-connector-watson',
        'HTTP Connector (Universal): https://github.com/codeforequity-at/botium-connector-http'
      ],
      keyTakeaways: [
        'Connectors are adapters that let Botium talk to different chatbot platforms',
        'Each major platform has its own connector (Dialogflow, Watson, Lex, etc.)',
        'The echo connector is perfect for learning without a real chatbot',
        'Connectors are installed via npm and configured in botium.json',
        'CONTAINERMODE specifies which connector to use'
      ]
    },

    // ==================== LESSON 6: SETTING UP YOUR FIRST PROJECT ====================
    
    'botium-basic-006': {
      title: 'Setting Up Your First Botium Project',
      overview: \`It's time to get hands-on! In this lesson, we're going to create a complete Botium project from scratch. We'll go step by step, explaining every file, every folder, and every command. By the end, you'll have a working project structure that you can use as a template for all your future chatbot testing projects. Don't worry if you're new to this - we'll explain everything as if you've never created a testing project before.\`,
      objectives: [
        'Create a complete Botium project folder structure',
        'Understand the purpose of each file and folder',
        'Write your first test conversation',
        'Run tests and interpret results',
        'Understand project organization best practices',
        'Be able to replicate this setup for any chatbot'
      ],
      fiveWhys: [
        { 
          question: 'Why do I need a specific project structure?', 
          answer: 'Organization matters! A well-structured project is easier to maintain, share with teammates, and scale. Botium expects certain files in certain places. A random collection of files leads to confusion and errors.' 
        },
        { 
          question: 'What files does a Botium project absolutely need?', 
          answer: 'At minimum: botium.json (configuration) and at least one .convo.txt file (test conversation). Everything else is optional but recommended for larger projects.' 
        },
        { 
          question: 'Can I organize my tests differently than shown?', 
          answer: 'Yes! Botium is flexible. You can put tests in different folders, use different file extensions (.yml, .json), and organize by feature or priority. But start with the standard structure until you understand it.' 
        },
        { 
          question: 'Do I need to create this manually or is there a generator?', 
          answer: 'You can use \`botium-cli init\` to generate a starter project, but understanding the manual process teaches you more. We\'ll show both approaches.' 
        },
        { 
          question: 'How do I know if my project is set up correctly?', 
          answer: 'Run \`botium-cli run\` - if it finds and runs your tests without errors, your structure is correct. If you see errors about missing files or configs, something is wrong.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: The Complete Project Structure (Visual Map)',
          content: \`Let's visualize exactly what we're building.

**The Standard Botium Project Structure:**

\`\`\`
my-chatbot-tests/               ← Your project root folder
│
├── botium.json                 ← REQUIRED: Main configuration file
│
├── tests/                      ← REQUIRED: Folder for test files
│   ├── greeting.convo.txt      ← Test: greeting conversation
│   ├── order.convo.txt         ← Test: ordering flow
│   ├── help.convo.txt          ← Test: help requests
│   └── goodbye.convo.txt       ← Test: ending conversation
│
├── utterances/                 ← OPTIONAL: Reusable phrases
│   ├── greetings.utterances.txt
│   └── farewells.utterances.txt
│
├── scripts/                    ← OPTIONAL: Additional scripts
│   └── setup.js
│
├── reports/                    ← OPTIONAL: Output folder for reports
│   └── .gitkeep
│
├── package.json                ← OPTIONAL: npm project file
│
└── README.md                   ← OPTIONAL: Project documentation
\`\`\`

**What Each File/Folder Does:**

| Item | Purpose | Required? |
|------|---------|-----------|
| botium.json | Tells Botium how to connect to your chatbot | ✅ YES |
| tests/ | Contains your test conversations | ✅ YES |
| *.convo.txt | Individual test files | ✅ At least 1 |
| utterances/ | Reusable phrases (we'll cover later) | ❌ No |
| scripts/ | Custom JavaScript for advanced tests | ❌ No |
| reports/ | Where test reports go | ❌ No |
| package.json | Standard npm project file | ❌ No |

**Minimal Project (Just the Essentials):**

\`\`\`
my-simple-project/
├── botium.json
└── tests/
    └── my-test.convo.txt
\`\`\`

That's it! Two things: config file and test folder with at least one test.\`
        },
        {
          title: 'Step 2: Creating Your Project Step-by-Step',
          content: \`Let's build this together, command by command.

**Step 2.1: Create the Project Folder**

Open your terminal and type:

\`\`\`bash
# Create a new folder for your project
mkdir my-chatbot-tests

# Move into that folder
cd my-chatbot-tests

# Verify you're in the right place
pwd

# Should show something like: /Users/yourname/my-chatbot-tests
\`\`\`

**Step 2.2: Create the Configuration File**

\`\`\`bash
# Create botium.json using a text command
# (Or you can use a text editor - we'll show both ways)

# OPTION A: Using the command line
cat > botium.json << 'EOF'
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My First Chatbot Test",
      "CONTAINERMODE": "echo"
    }
  }
}
EOF

# OPTION B: Using a text editor
# 1. Open VS Code: code .
# 2. Create new file named "botium.json"
# 3. Paste the content above
# 4. Save the file
\`\`\`

**Step 2.3: Create the Tests Folder**

\`\`\`bash
# Create the tests folder
mkdir tests

# Verify it was created
ls

# Should show:
# botium.json  tests
\`\`\`

**Step 2.4: Create Your First Test File**

\`\`\`bash
# Create a test file
cat > tests/greeting.convo.txt << 'EOF'
greeting test

#me
Hello

#bot
You said: Hello
EOF

# Verify the file was created
cat tests/greeting.convo.txt
\`\`\`

**Step 2.5: Verify Your Structure**

\`\`\`bash
# See all files and folders
ls -la

# Output should be:
# botium.json
# tests/

# Check what's in tests folder
ls tests/

# Output should be:
# greeting.convo.txt
\`\`\`

**Step 2.6: Run Your First Test!**

\`\`\`bash
# Run all tests
botium-cli run

# Expected output:
# ✓ greeting test (XXms)
# 1 passing
\`\`\`

🎉 **Congratulations! You just created and ran your first Botium project!**\`
        },
        {
          title: 'Step 3: Understanding the botium.json File in Detail',
          content: \`Let's break down the configuration file line by line.

**The Complete botium.json Structure:**

\`\`\`json
{
  "botium": {                           // All Botium config goes here
    "Capabilities": {                   // Settings for your tests
      "PROJECTNAME": "My Project",      // A name for your project
      "CONTAINERMODE": "echo"           // Which connector to use
    },
    "Sources": {                        // Where to find test files
      "LOCALPATH": "./tests"            // Default: looks in ./tests
    },
    "Envs": {                           // Environment-specific settings
      // Optional: different settings per environment
    }
  }
}
\`\`\`

**Breaking Down Each Section:**

**1. PROJECTNAME** - Just a label for your project
\`\`\`json
"PROJECTNAME": "My Chatbot Tests"
\`\`\`
- Used in reports and logs
- Can be anything descriptive
- Helps identify the project in output

**2. CONTAINERMODE** - The connector to use
\`\`\`json
"CONTAINERMODE": "echo"
\`\`\`
- This is the most important setting!
- Tells Botium which chatbot platform to connect to
- "echo" is for practice, real connectors for real bots

**3. Sources (Optional)** - Where tests live
\`\`\`json
"Sources": {
  "LOCALPATH": "./tests",
  "GITPATH": "https://github.com/repo/tests"  // Can even pull from Git!
}
\`\`\`
- Default is "./tests" folder
- You can specify different paths
- Can even load tests from Git repositories!

**Common Additional Settings:**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Production Bot Tests",
      "CONTAINERMODE": "dialogflow",
      
      // Timeout settings (in milliseconds)
      "WAITFORBOTTIMEOUT": 10000,       // Wait 10 seconds for response
      
      // Retry settings
      "RETRY": 3,                        // Retry failed tests 3 times
      
      // Parallel execution
      "PARALLEL": 2,                     // Run 2 tests at once
      
      // Connector-specific settings
      "DIALOGFLOW_PROJECT_ID": "my-project"
    }
  }
}
\`\`\`

**Environment Variables Instead of Hardcoding:**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Secure Bot Tests",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\$GOOGLE_PROJECT_ID",
      "DIALOGFLOW_PRIVATE_KEY": "\$GOOGLE_PRIVATE_KEY"
    }
  }
}
\`\`\`

Then set environment variables:
\`\`\`bash
export GOOGLE_PROJECT_ID="my-project"
export GOOGLE_PRIVATE_KEY="-----BEGIN..."
botium-cli run
\`\`\`

This keeps secrets out of your code!\`
        },
        {
          title: 'Step 4: Writing Effective Test Conversations',
          content: \`Now let's create meaningful tests.

**Anatomy of a .convo.txt File:**

\`\`\`
test name goes here           ← First line is ALWAYS the test name

#me                           ← #me means user message
Hello, I need help            ← What the user says

#bot                          ← #bot means chatbot response
How can I help you today?     ← What you expect the bot to say

#me                           ← Another user message
What are your hours?

#bot                          ← Another expected response
We are open 9 AM to 5 PM.
\`\`\`

**Rules to Remember:**

1. **First line = Test name** (no # symbol)
2. **#me** = User message (what you send)
3. **#bot** = Expected bot response (what you check)
4. **Blank lines** are ignored
5. **Comments** start with // (ignored)

**Creating Multiple Test Files:**

\`\`\`bash
# Test 1: tests/greeting.convo.txt
cat > tests/greeting.convo.txt << 'EOF'
test greeting flow

#me
Hello

#bot
You said: Hello

#me
Hi there

#bot
You said: Hi there
EOF

# Test 2: tests/help.convo.txt
cat > tests/help.convo.txt << 'EOF'
test help request

#me
I need help

#bot
You said: I need help

#me
Help me please

#bot
You said: Help me please
EOF

# Test 3: tests/goodbye.convo.txt
cat > tests/goodbye.convo.txt << 'EOF'
test goodbye flow

#me
Goodbye

#bot
You said: Goodbye

#me
See you later

#bot
You said: See you later
EOF
\`\`\`

**Organizing Tests by Feature:**

For larger projects, organize by feature:

\`\`\`
tests/
├── ordering/
│   ├── add-to-cart.convo.txt
│   ├── checkout.convo.txt
│   └── payment.convo.txt
├── account/
│   ├── login.convo.txt
│   ├── register.convo.txt
│   └── reset-password.convo.txt
└── support/
    ├── faq.convo.txt
    └── contact-agent.convo.txt
\`\`\`

Botium automatically finds all .convo.txt files in all subdirectories!

**Naming Convention Best Practices:**

\`\`\`
GOOD file names:
✅ order-pizza.convo.txt
✅ check-balance.convo.txt
✅ reset-password.convo.txt

BAD file names:
❌ test1.convo.txt (not descriptive)
❌ mytest.convo.txt (doesn't explain what it tests)
❌ temp.convo.txt (temporary file in version control)
\`\`\`\`
        },
        {
          title: 'Step 5: Running Tests and Understanding Output',
          content: \`Let's explore the different ways to run tests.

**Basic Test Execution:**

\`\`\`bash
# Run all tests in the default location (./tests)
botium-cli run

# Sample output for passing tests:
# ✓ test greeting flow (23ms)
# ✓ test help request (18ms)
# ✓ test goodbye flow (21ms)
# 
# 3 passing (102ms)
\`\`\`

**Running Specific Tests:**

\`\`\`bash
# Run only tests matching a pattern
botium-cli run --filter "greeting"

# Run tests from a specific folder
botium-cli run --testdir ./tests/ordering

# Run a single test file
botium-cli run --testfile ./tests/greeting.convo.txt
\`\`\`

**Understanding Test Output:**

\`\`\`
SUCCESS OUTPUT:
────────────────
  ✓ test greeting flow (23ms)     ← ✓ means passed
  ✓ test help request (18ms)       ← (Xms) is execution time
  ✓ test goodbye flow (21ms)

  3 passing (102ms)                ← Total summary


FAILURE OUTPUT:
────────────────
  ✓ test greeting flow (23ms)
  ✗ test order pizza (45ms)        ← ✗ means failed
  ✓ test goodbye flow (21ms)

  2 passing
  1 failing

  1) test order pizza:
     AssertionError: Expected bot response to contain "Thank you"
     + expected: "Thank you for your order"
     - actual:   "Your order has been placed"
\`\`\`

**Verbose Mode for Debugging:**

\`\`\`bash
# See detailed output
botium-cli run --verbose

# Even more detail
DEBUG=botium* botium-cli run

# Sample verbose output:
# [DEBUG] Loading connector: echo
# [DEBUG] Starting container...
# [DEBUG] Sending: "Hello"
# [DEBUG] Received: "You said: Hello"
# [DEBUG] Assertion passed
\`\`\`

**Generating Reports:**

\`\`\`bash
# Create JUnit XML report (for CI/CD)
botium-cli run --output junit-report.xml

# Create HTML report (for humans)
botium-cli run --output report.html

# Both formats
botium-cli run --output junit-report.xml --output report.html
\`\`\`

**Common Exit Codes:**

\`\`\`
Exit Code 0  = All tests passed ✅
Exit Code 1  = One or more tests failed ❌
Exit Code 2  = Configuration error
Exit Code 3  = No tests found
\`\`\`

Useful for CI/CD pipelines!\`
        }
      ],
      codeExamples: [
        {
          title: 'Complete Project Setup Script',
          code: \`#!/bin/bash
# Complete Botium Project Setup Script
# Save this as setup-botium-project.sh and run it

# Ask for project name
echo "Enter project name:"
read PROJECT_NAME

# Create project structure
mkdir -p "$PROJECT_NAME"/{tests,utterances,reports}
cd "$PROJECT_NAME"

# Create botium.json
cat > botium.json << EOF
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "$PROJECT_NAME",
      "CONTAINERMODE": "echo"
    },
    "Sources": {
      "LOCALPATH": "./tests"
    }
  }
}
EOF

# Create sample test files
cat > tests/greeting.convo.txt << 'EOF'
test greeting conversation

#me
Hello

#bot
You said: Hello

#me
Hi there

#bot
You said: Hi there
EOF

cat > tests/help.convo.txt << 'EOF'
test help request

#me
I need help

#bot
You said: I need help
EOF

cat > tests/goodbye.convo.txt << 'EOF'
test goodbye conversation

#me
Goodbye

#bot
You said: Goodbye
EOF

# Create README
cat > README.md << 'EOF'
# $PROJECT_NAME

## Setup
1. Install Botium: \\\`npm install -g botium-cli botium-core botium-connector-echo\\\`
2. Run tests: \\\`botium-cli run\\\`

## Project Structure
- \\\`botium.json\\\` - Configuration
- \\\`tests/\\\` - Test conversations
- \\\`reports/\\\` - Test reports
EOF

# Print success message
echo ""
echo "✅ Project '$PROJECT_NAME' created successfully!"
echo ""
echo "To run tests:"
echo "  cd $PROJECT_NAME"
echo "  botium-cli run"
echo ""
ls -la\`,
          explanation: \`This script automates the entire project setup. Just run it and answer the prompt!\`
        },
        {
          title: 'Using botium-cli init (Alternative Method)',
          code: \`# Botium can also generate a starter project for you

# Initialize a new project
botium-cli init

# This creates:
# - botium.json with basic configuration
# - tests/ folder
# - Sample test file

# Walkthrough of what it asks:
# 1. "Which connector?" - Choose echo for learning
# 2. "Project name?" - Enter your project name
# 3. Creates files automatically

# Verify the created structure
ls -la
cat botium.json
ls tests/

# Then you can run immediately
botium-cli run\`,
          explanation: \`The init command is faster but gives you less control. Good for quick starts!\`
        }
      ],
      formulas: [
        {
          name: 'Minimum Viable Project',
          formula: 'botium.json + tests/*.convo.txt = Working Botium Project',
          explanation: \`You only need two things: a configuration file and at least one test file. Everything else is optional enhancement.\`
        },
        {
          name: 'Project Complexity',
          formula: 'Number of Features × Variations per Feature = Minimum Test Count',
          explanation: \`If your chatbot has 10 features and each needs 3 test variations, you need at least 30 test files. Plan your structure accordingly!\`
        }
      ],
      benefits: [
        'You can create a Botium project from scratch',
        'You understand the purpose of every file',
        'You can write and organize test files',
        'You can run tests and interpret results',
        'You have a reusable template for future projects',
        'You understand project organization best practices'
      ],
      commonMistakes: [
        'Creating botium.json with invalid JSON syntax (use a validator!)',
        'Forgetting the first line of .convo.txt must be the test name',
        'Using #Me or #BOT instead of #me and #bot (case sensitive)',
        'Not creating the tests folder before adding test files',
        'Putting spaces in folder or file names (use hyphens)',
        'Not running from the project root directory'
      ],
      exercises: [
        {
          task: 'Create a project with 5 test files',
          deliverable: 'A complete project folder with botium.json and 5 different test files',
          criteria: 'All 5 tests pass when running botium-cli run'
        },
        {
          task: 'Organize tests into subfolders',
          deliverable: 'Tests organized into at least 2 subfolders by feature',
          criteria: 'All tests still run correctly with botium-cli run'
        },
        {
          task: 'Generate different report formats',
          deliverable: 'Both JUnit XML and HTML reports from the same test run',
          criteria: 'Both report files are generated and contain accurate results'
        }
      ],
      resources: [
        'Botium CLI Reference: https://botium-docs.readthedocs.io/en/latest/cli/',
        'BotiumScript Format: https://botium-docs.readthedocs.io/en/latest/botiumscript/',
        'VS Code Extension for Botium: Search "Botium" in VS Code extensions'
      ],
      keyTakeaways: [
        'A Botium project needs botium.json and at least one test file',
        'The tests folder is the default location for test files',
        'Test files must start with the test name on the first line',
        '#me = user input, #bot = expected bot response',
        'Use descriptive file names and organize by feature for larger projects'
      ]
    },

    // ==================== LESSON 7: BOTIUM CONFIGURATION ====================
    
    'botium-basic-007': {
      title: 'Botium Configuration with botium.json',
      overview: \`Now that you've created your first project, let's master the configuration file. The botium.json file is like the brain of your project - it controls everything from which chatbot to connect to, how long to wait for responses, how many tests to run at once, and much more. Understanding configuration deeply will give you superpowers to handle any testing scenario. In this lesson, we'll explore every possible setting and when to use each one.\`,
      objectives: [
        'Master all sections of the botium.json file',
        'Understand Capabilities and when to use each one',
        'Learn how to use environment variables for security',
        'Know how to configure different environments',
        'Troubleshoot configuration issues',
        'Create production-ready configurations'
      ],
      fiveWhys: [
        { 
          question: 'Why is configuration so important?', 
          answer: 'Configuration determines how Botium behaves. Wrong settings can cause false failures (tests fail when the chatbot is actually working) or false passes (tests pass when the chatbot is broken). Proper configuration is the difference between reliable and useless tests.' 
        },
        { 
          question: 'What are Capabilities?', 
          answer: 'Capabilities are individual settings that control Botium behavior. Think of them like dials on a control panel - each dial adjusts one specific thing. Some control the connector, some control timeouts, some control assertions.' 
        },
        { 
          question: 'Why use environment variables?', 
          answer: 'Security! API keys and passwords should never be in code. Environment variables keep secrets outside your codebase. Also, they make it easy to switch between environments (dev, test, prod) without changing files.' 
        },
        { 
          question: 'Can I have different configs for different environments?', 
          answer: 'Absolutely! You can have botium.json for default settings, then override with environment variables or separate config files for dev, test, and production.' 
        },
        { 
          question: 'What happens if my configuration is wrong?', 
          answer: 'Botium will usually tell you with an error message. Common issues: connection failures, timeouts, or "capability not found" errors. The error message usually points to which setting is wrong.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: The Complete Configuration Structure',
          content: \`Let's see the full picture of what botium.json can contain.

**Complete botium.json Structure:**

\`\`\`json
{
  "botium": {
    
    "Capabilities": {
      // REQUIRED SETTINGS
      "PROJECTNAME": "My Bot Tests",
      "CONTAINERMODE": "echo",
      
      // CONNECTOR SETTINGS (varies by connector)
      // ... connector-specific settings ...
      
      // TIMEOUT SETTINGS
      "WAITFORBOTTIMEOUT": 10000,
      "STARTCONTAINERTIMEOUT": 30000,
      
      // ASSERTION SETTINGS
      "ASSERTERS": ["BUTTONS", "MEDIA", "CARDS"],
      
      // SCRIPTING SETTINGS
      "SCRIPTING_ENABLE_MEMORY": true,
      "SCRIPTING_NORMALIZE_TEXT": true,
      
      // PARALLEL EXECUTION
      "PARALLEL": 4
    },
    
    "Sources": {
      "LOCALPATH": "./tests",
      "RECURSIVE": true,
      "FILTER": "*.convo.txt"
    },
    
    "Envs": {
      // Environment-specific overrides
    }
    
  }
}
\`\`\`

**Visual Representation of Configuration Sections:**

\`\`\`
botium.json
    │
    ├── Capabilities
    │   ├── Project Identity
    │   │   └── PROJECTNAME
    │   │
    │   ├── Connector Settings
    │   │   ├── CONTAINERMODE
    │   │   └── (connector-specific settings)
    │   │
    │   ├── Timing Settings
    │   │   ├── WAITFORBOTTIMEOUT
    │   │   ├── STARTCONTAINERTIMEOUT
    │   │   └── RETRY
    │   │
    │   ├── Assertion Settings
    │   │   ├── ASSERTERS
    │   │   └── (custom asserters)
    │   │
    │   └── Scripting Settings
    │       ├── SCRIPTING_ENABLE_MEMORY
    │       └── SCRIPTING_NORMALIZE_TEXT
    │
    ├── Sources
    │   ├── LOCALPATH
    │   ├── RECURSIVE
    │   └── FILTER
    │
    └── Envs
        ├── development
        ├── testing
        └── production
\`\`\`\`
        },
        {
          title: 'Step 2: Essential Capabilities Explained',
          content: \`Let's go through the most important capabilities.

**1. PROJECTNAME - Your Project's Identity**

\`\`\`json
"PROJECTNAME": "E-commerce Chatbot Tests"
\`\`\`

- Used in reports and logs
- Make it descriptive!
- Examples: "Banking Bot Regression", "HR Assistant UAT"

**2. CONTAINERMODE - The Connector**

\`\`\`json
"CONTAINERMODE": "dialogflow"
\`\`\`

- Tells Botium which connector to use
- Must match an installed connector
- Common values: "echo", "dialogflow", "watson", "lex", "http"

**3. WAITFORBOTTIMEOUT - Response Timeout**

\`\`\`json
"WAITFORBOTTIMEOUT": 10000  // 10 seconds
\`\`\`

- How long to wait for bot response (in milliseconds)
- Default: 10000 (10 seconds)
- Increase for slow bots, decrease for faster tests
- Set too low = false failures; too high = slow tests

\`\`\`
1000ms  = 1 second   (very fast bots)
5000ms  = 5 seconds  (typical web chatbots)
10000ms = 10 seconds (default, good for most)
30000ms = 30 seconds (slow AI/LLM bots)
60000ms = 60 seconds (very slow processing)
\`\`\`

**4. STARTCONTAINERTIMEOUT - Connection Timeout**

\`\`\`json
"STARTCONTAINERTIMEOUT": 30000  // 30 seconds
\`\`\`

- How long to wait when connecting to the chatbot
- Matters for cold starts (first connection)
- Default: 120000 (2 minutes)

**5. RETRY - Failed Test Retry**

\`\`\`json
"RETRY": 3
\`\`\`

- Retry failed tests this many times
- Useful for flaky tests or unstable networks
- 0 = no retries, 3 = retry failed tests up to 3 times

**6. PARALLEL - Concurrent Tests**

\`\`\`json
"PARALLEL": 4
\`\`\`

- Run this many tests at the same time
- Speeds up test execution
- Be careful: some chatbots can't handle multiple sessions!

**7. SCRIPTING_NORMALIZE_TEXT - Clean Up Responses**

\`\`\`json
"SCRIPTING_NORMALIZE_TEXT": true
\`\`\`

- Removes extra whitespace and normalizes text
- Makes matching less sensitive to formatting
- Recommended: true

**8. SCRIPTING_ENABLE_MEMORY - Remember Variables**

\`\`\`json
"SCRIPTING_ENABLE_MEMORY": true
\`\`\`

- Allow tests to remember values between turns
- Needed for dynamic data (order IDs, names, etc.)
- Enable when tests need to use variables\`
        },
        {
          title: 'Step 3: Connector-Specific Configuration',
          content: \`Each connector has its own required settings.

**ECHO CONNECTOR (for learning)**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Learning",
      "CONTAINERMODE": "echo"
      // No additional settings needed!
    }
  }
}
\`\`\`

**DIALOGFLOW ES CONNECTOR**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Dialogflow Tests",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "my-project-id",
      "DIALOGFLOW_CLIENT_EMAIL": "my-service-account@my-project.iam.gserviceaccount.com",
      "DIALOGFLOW_PRIVATE_KEY": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----",
      "DIALOGFLOW_LANGUAGE_CODE": "en"
    }
  }
}
\`\`\`

Required capabilities for Dialogflow:
- DIALOGFLOW_PROJECT_ID: Your GCP project ID
- DIALOGFLOW_CLIENT_EMAIL: Service account email
- DIALOGFLOW_PRIVATE_KEY: Private key from JSON file

**IBM WATSON CONNECTOR**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Watson Tests",
      "CONTAINERMODE": "watson",
      "WATSON_APIKEY": "your-api-key",
      "WATSON_URL": "https://api.us-south.assistant.watson.cloud.ibm.com",
      "WATSON_ASSISTANT_ID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "WATSON_VERSION": "2021-11-27"
    }
  }
}
\`\`\`

**HTTP CONNECTOR (Generic REST API)**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Custom API Bot",
      "CONTAINERMODE": "http",
      "HTTP_ENDPOINT": "https://my-chatbot.com/api/message",
      "HTTP_METHOD": "POST",
      "HTTP_HEADERS": {
        "Content-Type": "application/json",
        "Authorization": "Bearer my-token"
      },
      "HTTP_BODY_TEMPLATE": "{ \\"text\\": \\"{{msg.messageText}}\\" }",
      "HTTP_RESPONSE_JSONPATH": "$.response.text"
    }
  }
}
\`\`\`

HTTP connector is VERY flexible - works with almost any REST API!\`
        },
        {
          title: 'Step 4: Using Environment Variables (Security Best Practice)',
          content: \`NEVER put secrets directly in botium.json. Use environment variables!

**Why Environment Variables?**

\`\`\`
❌ BAD: Secrets in code
{
  "DIALOGFLOW_PRIVATE_KEY": "actual-private-key-here"
}
// If you commit this to Git, your secret is exposed!

✅ GOOD: Environment variable reference
{
  "DIALOGFLOW_PRIVATE_KEY": "\$DIALOGFLOW_KEY"
}
// The actual key lives outside your code
\`\`\`

**Method 1: Using \$ in botium.json**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Secure Project",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\$GCP_PROJECT_ID",
      "DIALOGFLOW_CLIENT_EMAIL": "\$GCP_CLIENT_EMAIL",
      "DIALOGFLOW_PRIVATE_KEY": "\$GCP_PRIVATE_KEY"
    }
  }
}
\`\`\`

Then set the environment variables before running:

\`\`\`bash
# On Mac/Linux
export GCP_PROJECT_ID="my-project-123"
export GCP_CLIENT_EMAIL="service@my-project.iam.gserviceaccount.com"
export GCP_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----"

# On Windows (Command Prompt)
set GCP_PROJECT_ID=my-project-123
set GCP_CLIENT_EMAIL=service@my-project.iam.gserviceaccount.com

# On Windows (PowerShell)
\$env:GCP_PROJECT_ID="my-project-123"
\$env:GCP_CLIENT_EMAIL="service@my-project.iam.gserviceaccount.com"

# Then run tests
botium-cli run
\`\`\`

**Method 2: Using a .env File**

Create a file named \`.env\` in your project:

\`\`\`bash
# .env file (add to .gitignore!)
GCP_PROJECT_ID=my-project-123
GCP_CLIENT_EMAIL=service@my-project.iam.gserviceaccount.com
GCP_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----"
\`\`\`

Install dotenv and load it:

\`\`\`bash
npm install dotenv
\`\`\`

**CRITICAL: Add .env to .gitignore!**

\`\`\`bash
# .gitignore
.env
*.env
.env.*
\`\`\`

**Method 3: Per-Environment Config Files**

\`\`\`
my-project/
├── botium.json           # Base configuration (no secrets)
├── botium.dev.json       # Development overrides
├── botium.test.json      # Test environment overrides
└── botium.prod.json      # Production overrides (gitignored)
\`\`\`

Run with specific config:

\`\`\`bash
# Use specific config file
BOTIUM_CONFIG=./botium.dev.json botium-cli run
\`\`\`\`
        },
        {
          title: 'Step 5: Advanced Configuration Patterns',
          content: \`Let's explore some advanced configuration scenarios.

**Pattern 1: Configuring Multiple Environments**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Multi-Env Project",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\$DIALOGFLOW_PROJECT"
    },
    "Envs": {
      "development": {
        "DIALOGFLOW_PROJECT_ID": "dev-project"
      },
      "staging": {
        "DIALOGFLOW_PROJECT_ID": "staging-project"
      },
      "production": {
        "DIALOGFLOW_PROJECT_ID": "prod-project"
      }
    }
  }
}
\`\`\`

Run for specific environment:

\`\`\`bash
BOTIUM_ENV=development botium-cli run
BOTIUM_ENV=staging botium-cli run
BOTIUM_ENV=production botium-cli run
\`\`\`

**Pattern 2: Configuring Custom Asserters**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "With Custom Assertions",
      "CONTAINERMODE": "echo",
      "ASSERTERS": [
        {
          "ref": "INTENT",
          "src": "./asserters/IntentAsserter"
        }
      ]
    }
  }
}
\`\`\`

**Pattern 3: Configuring Test Sources**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Multiple Sources"
    },
    "Sources": {
      "LOCALPATH": [
        "./tests/regression",
        "./tests/smoke",
        "./tests/integration"
      ],
      "RECURSIVE": true,
      "FILTER": "*.convo.txt"
    }
  }
}
\`\`\`

**Pattern 4: Slow Bot Configuration**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Slow AI Bot Tests",
      "CONTAINERMODE": "http",
      "WAITFORBOTTIMEOUT": 60000,       // 60 seconds (LLMs can be slow)
      "STARTCONTAINERTIMEOUT": 120000,  // 2 minutes for cold start
      "RETRY": 3                         // Retry on timeout
    }
  }
}
\`\`\`

**Configuration Validation Checklist:**

\`\`\`
☐ PROJECTNAME is set and descriptive
☐ CONTAINERMODE matches installed connector
☐ All required connector capabilities are set
☐ No secrets in the config file (use env vars)
☐ Timeout values appropriate for your bot
☐ .env file is in .gitignore
☐ Config file is valid JSON (use a validator)
\`\`\`\`
        }
      ],
      codeExamples: [
        {
          title: 'Complete Production-Ready Configuration',
          code: \`// botium.json - Production ready template
{
  "botium": {
    "Capabilities": {
      // Project Identity
      "PROJECTNAME": "Production Bot Tests",
      
      // Connector
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\$DIALOGFLOW_PROJECT_ID",
      "DIALOGFLOW_CLIENT_EMAIL": "\$DIALOGFLOW_CLIENT_EMAIL",
      "DIALOGFLOW_PRIVATE_KEY": "\$DIALOGFLOW_PRIVATE_KEY",
      "DIALOGFLOW_LANGUAGE_CODE": "en",
      
      // Timing (adjust based on your bot's speed)
      "WAITFORBOTTIMEOUT": 15000,
      "STARTCONTAINERTIMEOUT": 60000,
      
      // Execution
      "RETRY": 2,
      "PARALLEL": 4,
      
      // Scripting
      "SCRIPTING_NORMALIZE_TEXT": true,
      "SCRIPTING_ENABLE_MEMORY": true,
      
      // Asserters
      "ASSERTERS": ["BUTTONS", "MEDIA", "CARDS"]
    },
    "Sources": {
      "LOCALPATH": "./tests",
      "RECURSIVE": true
    }
  }
}\`,
          explanation: \`This is a complete, production-ready configuration. All secrets are in environment variables, timeouts are reasonable, and all major features are enabled.\`
        },
        {
          title: 'Configuration Validation Script',
          code: \`#!/bin/bash
# validate-config.sh - Validate your Botium configuration

echo "Validating botium.json..."

# Check if file exists
if [ ! -f "botium.json" ]; then
    echo "❌ ERROR: botium.json not found!"
    exit 1
fi

# Validate JSON syntax
if ! jq empty botium.json 2>/dev/null; then
    echo "❌ ERROR: botium.json has invalid JSON syntax!"
    echo "Use https://jsonlint.com to find the error"
    exit 1
fi

echo "✅ JSON syntax is valid"

# Check for required fields
PROJECT=$(jq -r '.botium.Capabilities.PROJECTNAME' botium.json)
MODE=$(jq -r '.botium.Capabilities.CONTAINERMODE' botium.json)

if [ "$PROJECT" == "null" ]; then
    echo "⚠️  WARNING: PROJECTNAME not set"
fi

if [ "$MODE" == "null" ]; then
    echo "❌ ERROR: CONTAINERMODE not set!"
    exit 1
fi

echo "✅ CONTAINERMODE: $MODE"

# Check for hardcoded secrets (basic check)
if grep -q "PRIVATE_KEY.*BEGIN" botium.json; then
    echo "⚠️  WARNING: Possible hardcoded private key detected!"
    echo "   Use environment variables instead: \\\$VAR_NAME"
fi

if grep -q "APIKEY.*[a-zA-Z0-9]{20}" botium.json; then
    echo "⚠️  WARNING: Possible hardcoded API key detected!"
    echo "   Use environment variables instead: \\\$VAR_NAME"
fi

echo ""
echo "✅ Configuration validation complete!"
botium-cli run --dry-run\`,
          explanation: \`This script validates your configuration before running tests. It checks JSON syntax, required fields, and warns about hardcoded secrets.\`
        }
      ],
      formulas: [
        {
          name: 'Timeout Calculation',
          formula: 'Average Bot Response Time × 3 = Safe WAITFORBOTTIMEOUT',
          explanation: \`If your bot typically responds in 2 seconds, set timeout to 6 seconds. This gives enough buffer for slow responses without waiting too long on actual failures.\`
        },
        {
          name: 'Parallel Execution',
          formula: 'Bot Concurrent Session Limit ÷ 2 = Safe PARALLEL Value',
          explanation: \`If your chatbot can handle 10 simultaneous sessions, set PARALLEL to 5. This leaves room for other users and prevents overwhelming the bot.\`
        }
      ],
      benefits: [
        'You can configure Botium for any scenario',
        'You understand all major capabilities and when to use them',
        'You know how to keep secrets secure with environment variables',
        'You can set up multi-environment testing',
        'You can troubleshoot configuration issues',
        'You can create production-ready configurations'
      ],
      commonMistakes: [
        'Hardcoding secrets in botium.json (security risk!)',
        'Setting WAITFORBOTTIMEOUT too low (causes false failures)',
        'Setting PARALLEL too high (overwhelms the chatbot)',
        'Forgetting to install the connector before using it',
        'Invalid JSON syntax (missing commas, wrong brackets)',
        'Using wrong capability names (they\'re case-sensitive!)'
      ],
      exercises: [
        {
          task: 'Create secure configurations',
          deliverable: 'botium.json using environment variables for all secrets, plus a .env.example file',
          criteria: 'No actual secrets in any committed files'
        },
        {
          task: 'Set up multi-environment config',
          deliverable: 'Configuration that works with dev, test, and prod environments',
          criteria: 'Can switch environments with a single command'
        },
        {
          task: 'Optimize timeout settings',
          deliverable: 'Test your chatbot and document optimal timeout values',
          criteria: 'Explain why you chose each value based on testing'
        }
      ],
      resources: [
        'Botium Capabilities Reference: https://botium-docs.readthedocs.io/en/latest/capabilities/',
        'Environment Variables Best Practices: https://12factor.net/config',
        'JSON Validator: https://jsonlint.com'
      ],
      keyTakeaways: [
        'botium.json controls all aspects of Botium behavior',
        'Capabilities are the individual settings you configure',
        'Never hardcode secrets - use environment variables',
        'Set timeouts based on your bot\'s actual performance',
        'Validate your JSON syntax before running tests'
      ]
    },

    // ==================== LESSON 8: UNDERSTANDING CAPABILITIES ====================
    
    'botium-basic-008': {
      title: 'Understanding Capabilities and Settings',
      overview: \`In the previous lesson, we covered configuration basics. Now let's go deeper into Capabilities - the individual settings that control every aspect of Botium's behavior. Think of Capabilities as the "control panel" of Botium. Each capability is like a dial or switch that adjusts one specific behavior. By the end of this lesson, you'll know every important capability and when to use it.\`,
      objectives: [
        'Understand the complete capabilities system',
        'Know all major capability categories',
        'Learn when to use which capability',
        'Master capability naming conventions',
        'Troubleshoot capability-related issues',
        'Create optimal capability configurations'
      ],
      fiveWhys: [
        { 
          question: 'What makes Capabilities different from regular configuration?', 
          answer: 'Capabilities are Botium-specific settings with special naming conventions. They\'re organized by purpose and follow patterns. Regular config is just key-value pairs; Capabilities are a structured system.' 
        },
        { 
          question: 'How do I know which capabilities exist?', 
          answer: 'There are three sources: 1) Botium core capabilities (PROJECTNAME, WAITFORBOTTIMEOUT, etc.), 2) Connector-specific capabilities (DIALOGFLOW_*, WATSON_*, etc.), 3) Plugin capabilities. The documentation lists all core ones.' 
        },
        { 
          question: 'Why are capability names so long and uppercase?', 
          answer: 'It\'s a convention for clarity. Uppercase distinguishes them from regular variables. Prefixes like SCRIPTING_ or HTTP_ group related capabilities. Long names are self-documenting.' 
        },
        { 
          question: 'What happens if I use a capability that doesn\'t exist?', 
          answer: 'Botium usually ignores unknown capabilities. This is by design - it allows forward compatibility. But if you misspell a valid capability, it won\'t work and you won\'t get an error!' 
        },
        { 
          question: 'Can I create my own capabilities?', 
          answer: 'Yes! Custom capabilities are used by custom connectors and asserters. You can create any capability name you want, then read it in your custom code.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Capability Categories Overview',
          content: \`Capabilities are organized into logical categories.

**The Complete Capability Map:**

\`\`\`
CAPABILITY CATEGORIES
    │
    ├── 🎯 Core Capabilities
    │   ├── PROJECTNAME
    │   ├── CONTAINERMODE
    │   └── (container setup)
    │
    ├── ⏱️ Timing Capabilities
    │   ├── WAITFORBOTTIMEOUT
    │   ├── STARTCONTAINERTIMEOUT
    │   ├── STOPCONTAINERTIMEOUT
    │   └── (other timeouts)
    │
    ├── 📝 Scripting Capabilities
    │   ├── SCRIPTING_ENABLE_MEMORY
    │   ├── SCRIPTING_NORMALIZE_TEXT
    │   ├── SCRIPTING_MATCHING_MODE
    │   └── (text processing)
    │
    ├── ✅ Assertion Capabilities
    │   ├── ASSERTERS
    │   ├── ASSERTER_* settings
    │   └── (validation config)
    │
    ├── 🔌 Connector Capabilities
    │   ├── DIALOGFLOW_*
    │   ├── WATSON_*
    │   ├── HTTP_*
    │   └── (platform-specific)
    │
    ├── 🔄 Retry & Error Handling
    │   ├── RETRY
    │   ├── RETRY_ON_ERROR
    │   └── (resilience config)
    │
    └── 📊 Reporting Capabilities
        ├── REPORT_*
        └── (output formats)
\`\`\`

**How to Read Capability Names:**

\`\`\`
PREFIX_SPECIFIC_SETTING

Examples:
├── SCRIPTING_ENABLE_MEMORY
│   ├── SCRIPTING_  = Category: scripting engine
│   ├── ENABLE_     = Action: turn on
│   └── MEMORY      = Feature: variable memory
│
├── DIALOGFLOW_PROJECT_ID
│   ├── DIALOGFLOW_ = Category: Dialogflow connector
│   ├── PROJECT_    = Relates to: project
│   └── ID          = Value: identifier
│
└── WAITFORBOTTIMEOUT
    ├── WAITFOR     = Action: wait for
    ├── BOT         = Subject: bot response
    └── TIMEOUT     = Type: timeout value
\`\`\`\`
        },
        {
          title: 'Step 2: Core Capabilities Deep Dive',
          content: \`Let's examine the essential core capabilities.

**PROJECTNAME**

\`\`\`json
"PROJECTNAME": "My Bot Tests v2.1"
\`\`\`

| Property | Value |
|----------|-------|
| Required | Recommended (not strictly required) |
| Type | String |
| Default | "Botium" |
| Used in | Reports, logs, identification |

**CONTAINERMODE**

\`\`\`json
"CONTAINERMODE": "dialogflow"
\`\`\`

| Property | Value |
|----------|-------|
| Required | YES |
| Type | String |
| Default | None (must specify) |
| Values | "echo", "dialogflow", "watson", "http", etc. |

This is the MOST IMPORTANT capability - it tells Botium which connector to use!

**WAITFORBOTTIMEOUT**

\`\`\`json
"WAITFORBOTTIMEOUT": 10000
\`\`\`

| Property | Value |
|----------|-------|
| Required | No |
| Type | Number (milliseconds) |
| Default | 10000 (10 seconds) |
| Range | 1000 - 300000 |

How long to wait for bot to respond before failing.

**STARTCONTAINERTIMEOUT**

\`\`\`json
"STARTCONTAINERTIMEOUT": 30000
\`\`\`

| Property | Value |
|----------|-------|
| Required | No |
| Type | Number (milliseconds) |
| Default | 120000 (2 minutes) |
| Range | 5000 - 600000 |

How long to wait when initially connecting to chatbot.

**STOPCONTAINERTIMEOUT**

\`\`\`json
"STOPCONTAINERTIMEOUT": 10000
\`\`\`

| Property | Value |
|----------|-------|
| Required | No |
| Type | Number (milliseconds) |
| Default | 10000 |

How long to wait when disconnecting from chatbot.

**PARALLEL**

\`\`\`json
"PARALLEL": 4
\`\`\`

| Property | Value |
|----------|-------|
| Required | No |
| Type | Number |
| Default | 1 |
| Range | 1 - depends on system |

Number of tests to run concurrently. Higher = faster but more resource-intensive.\`
        },
        {
          title: 'Step 3: Scripting Capabilities',
          content: \`These capabilities control how test scripts are processed.

**SCRIPTING_ENABLE_MEMORY**

\`\`\`json
"SCRIPTING_ENABLE_MEMORY": true
\`\`\`

Enables variable storage between conversation turns.

\`\`\`
Without memory:
#me
My name is John
#bot
Hello!
#me
What is my name?  // Bot won't remember!

With memory:
#me
My name is \$name
// Later in test, you can use \$name
\`\`\`

**SCRIPTING_NORMALIZE_TEXT**

\`\`\`json
"SCRIPTING_NORMALIZE_TEXT": true
\`\`\`

Normalizes text before comparison:
- Removes extra whitespace
- Trims leading/trailing spaces
- Normalizes line breaks

\`\`\`
Without normalization:
Expected: "Hello there"
Actual:   "Hello  there"  // Extra space = FAIL!

With normalization:
Expected: "Hello there"
Actual:   "Hello  there"  // Normalized = PASS!
\`\`\`

**SCRIPTING_MATCHING_MODE**

\`\`\`json
"SCRIPTING_MATCHING_MODE": "include"
\`\`\`

How to match bot responses:

| Mode | Description |
|------|-------------|
| "exact" | Must match exactly |
| "include" | Expected must be contained in actual |
| "regex" | Expected is a regular expression |
| "wildcards" | Use * for wildcards |

Examples:

\`\`\`
Expected: "Hello"
Actual: "Hello, how can I help you?"

Mode "exact"   -> FAIL (not exact match)
Mode "include" -> PASS ("Hello" is included)
Mode "regex"   -> PASS (if regex matches)
\`\`\`

**SCRIPTING_UTTEXPANSION_MODE**

\`\`\`json
"SCRIPTING_UTTEXPANSION_MODE": "all"
\`\`\`

How to expand utterance lists:

| Mode | Description |
|------|-------------|
| "all" | Test all variations |
| "random" | Pick one randomly |
| "first" | Use first only |

**SCRIPTING_FORMAT**

\`\`\`json
"SCRIPTING_FORMAT": "convo"
\`\`\`

| Value | File Type |
|-------|-----------|
| "convo" | .convo.txt files |
| "xlsx" | Excel spreadsheets |
| "csv" | CSV files |
| "yaml" | YAML files |\`
        },
        {
          title: 'Step 4: Assertion Capabilities',
          content: \`Control how responses are validated.

**ASSERTERS**

\`\`\`json
"ASSERTERS": [
  "BUTTONS",
  "MEDIA",
  "CARDS",
  "INTENT",
  "ENTITIES"
]
\`\`\`

Enable specific asserters for rich content validation.

**Built-in Asserters:**

| Asserter | Validates |
|----------|-----------|
| BUTTONS | Button labels and values |
| MEDIA | Images, videos, audio |
| CARDS | Card content (title, subtitle, etc.) |
| INTENT | Intent recognition |
| ENTITIES | Entity extraction |
| CONFIDENCE | Confidence scores |

**ASSERTER_CONFIDENCE_THRESHOLD**

\`\`\`json
"ASSERTER_CONFIDENCE_THRESHOLD": 0.7
\`\`\`

Minimum confidence score for assertions (0.0 - 1.0).

**ASSERTER_INTENT_MATCHING**

\`\`\`json
"ASSERTER_INTENT_MATCHING": "exact"
\`\`\`

| Mode | Description |
|------|-------------|
| "exact" | Intent name must match exactly |
| "include" | Expected intent contained in actual |

**Custom Asserter Example:**

\`\`\`json
{
  "ASSERTERS": [
    {
      "ref": "SENTIMENT",
      "src": "./asserters/SentimentAsserter.js"
    }
  ]
}
\`\`\`

**Assertion in Test Files:**

\`\`\`
test with assertions

#me
Hello

#bot
Hi there!
INTENT greeting
CONFIDENCE 0.9
BUTTONS cancel|Cancel order, track|Track order
\`\`\`\`
        },
        {
          title: 'Step 5: HTTP Connector Capabilities',
          content: \`The HTTP connector is extremely flexible and deserves special attention.

**HTTP_ENDPOINT**

\`\`\`json
"HTTP_ENDPOINT": "https://my-chatbot.com/api/message"
\`\`\`

The URL to send messages to.

**HTTP_METHOD**

\`\`\`json
"HTTP_METHOD": "POST"
\`\`\`

HTTP method: GET, POST, PUT, PATCH.

**HTTP_HEADERS**

\`\`\`json
"HTTP_HEADERS": {
  "Content-Type": "application/json",
  "Authorization": "Bearer \$API_TOKEN",
  "X-Custom-Header": "custom-value"
}
\`\`\`

Headers to include with each request.

**HTTP_BODY_TEMPLATE**

\`\`\`json
"HTTP_BODY_TEMPLATE": "{ \\"message\\": \\"{{msg.messageText}}\\", \\"session\\": \\"{{botium.conversationId}}\\" }"
\`\`\`

Template for request body. Available variables:
- {{msg.messageText}} - The user message
- {{botium.conversationId}} - Unique conversation ID
- {{msg.timestamp}} - Message timestamp

**HTTP_RESPONSE_JSONPATH**

\`\`\`json
"HTTP_RESPONSE_JSONPATH": "$.response.text"
\`\`\`

JSONPath to extract bot response from API response.

Examples:
\`\`\`
API Response:                    JSONPath:
{                               
  "response": {                  $.response.text
    "text": "Hello!"             -> "Hello!"
  }
}

{
  "data": {                      $.data.reply.message
    "reply": {
      "message": "Hi there"      -> "Hi there"
    }
  }
}

{
  "replies": [                   $.replies[0]
    "First reply",               -> "First reply"
    "Second reply"
  ]
}
\`\`\`

**Complete HTTP Example:**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "REST API Bot Tests",
      "CONTAINERMODE": "http",
      "HTTP_ENDPOINT": "https://api.mybot.com/chat",
      "HTTP_METHOD": "POST",
      "HTTP_HEADERS": {
        "Content-Type": "application/json",
        "Authorization": "Bearer \$BOT_API_KEY"
      },
      "HTTP_BODY_TEMPLATE": "{
        \\"text\\": \\"{{msg.messageText}}\\",
        \\"userId\\": \\"{{botium.conversationId}}\\",
        \\"timestamp\\": \\"{{msg.timestamp}}\\"
      }",
      "HTTP_RESPONSE_JSONPATH": "$.data.response.text"
    }
  }
}
\`\`\`\`
        }
      ],
      codeExamples: [
        {
          title: 'Capability Reference Card',
          code: \`// COMPLETE CAPABILITY REFERENCE
// Copy and customize for your needs

{
  "botium": {
    "Capabilities": {
      
      // ===== CORE =====
      "PROJECTNAME": "My Project",
      "CONTAINERMODE": "echo",          // or "dialogflow", "watson", "http", etc.
      
      // ===== TIMING (milliseconds) =====
      "WAITFORBOTTIMEOUT": 10000,       // Wait for bot response
      "STARTCONTAINERTIMEOUT": 30000,   // Connection timeout
      "STOPCONTAINERTIMEOUT": 10000,    // Disconnect timeout
      
      // ===== EXECUTION =====
      "PARALLEL": 4,                    // Concurrent tests
      "RETRY": 2,                       // Retry failed tests
      
      // ===== SCRIPTING =====
      "SCRIPTING_ENABLE_MEMORY": true,  // Enable variables
      "SCRIPTING_NORMALIZE_TEXT": true, // Clean up text
      "SCRIPTING_MATCHING_MODE": "include", // "exact", "include", "regex"
      
      // ===== ASSERTIONS =====
      "ASSERTERS": [
        "BUTTONS",
        "MEDIA",
        "CARDS"
      ],
      
      // ===== HTTP CONNECTOR =====
      // (Only if using HTTP connector)
      "HTTP_ENDPOINT": "https://api.bot.com/message",
      "HTTP_METHOD": "POST",
      "HTTP_HEADERS": {
        "Content-Type": "application/json"
      },
      "HTTP_BODY_TEMPLATE": "{\\"text\\": \\"{{msg.messageText}}\\"}",
      "HTTP_RESPONSE_JSONPATH": "$.response.text"
    }
  }
}\`,
          explanation: \`This is a comprehensive template showing all major capabilities. Start with this and remove what you don't need.\`
        },
        {
          title: 'Troubleshooting Capability Issues',
          code: \`# DIAGNOSING CAPABILITY PROBLEMS

# Problem: "Unknown capability"
# Solution: Check spelling! Capabilities are case-sensitive
# Wrong: "projectName" 
# Right: "PROJECTNAME"

# Problem: "Timeout" errors
# Solution: Increase timeout values
# Before:
"WAITFORBOTTIMEOUT": 5000
# After:
"WAITFORBOTTIMEOUT": 30000

# Problem: "Connector not found"
# Solution: Install the connector and verify CONTAINERMODE
npm install -g botium-connector-dialogflow
# Then verify:
npm list -g | grep botium-connector

# Problem: "Response doesn't match"
# Solution: Enable SCRIPTING_NORMALIZE_TEXT
"SCRIPTING_NORMALIZE_TEXT": true

# Problem: "Can't extract response"
# Solution: Verify HTTP_RESPONSE_JSONPATH matches actual response
# Debug by logging the raw response:
"HTTP_RESPONSE_HOOK": "console.log(JSON.stringify(response, null, 2))"

# Problem: "Tests pass locally, fail in CI"
# Solution: Check environment variables are set in CI
# Add debug logging:
DEBUG=botium* botium-cli run\`,
          explanation: \`Common capability issues and their solutions.\`
        }
      ],
      formulas: [
        {
          name: 'Capability Discovery',
          formula: 'CONNECTOR_PREFIX + FEATURE_NAME = Capability Name',
          explanation: \`To find a capability, combine the connector prefix with the feature. For Dialogflow language setting: DIALOGFLOW_ + LANGUAGE_CODE = DIALOGFLOW_LANGUAGE_CODE\`
        },
        {
          name: 'Optimal Timeout',
          formula: 'P99 Response Time × 2 = WAITFORBOTTIMEOUT',
          explanation: \`Measure your bot's 99th percentile response time (slowest 1%) and double it. This catches almost all responses while still failing on actual issues.\`
        }
      ],
      benefits: [
        'You understand the complete capabilities system',
        'You know all major capability categories',
        'You can configure any capability correctly',
        'You can troubleshoot capability issues',
        'You can create optimized configurations',
        'You understand capability naming conventions'
      ],
      commonMistakes: [
        'Wrong case in capability names (they\'re UPPERCASE!)',
        'Using wrong prefix for connector-specific capabilities',
        'Not enabling SCRIPTING_ENABLE_MEMORY when using variables',
        'Setting timeouts in seconds instead of milliseconds',
        'Forgetting to install asserters before enabling them',
        'Not matching HTTP_RESPONSE_JSONPATH to actual response structure'
      ],
      exercises: [
        {
          task: 'Create a timing-optimized configuration',
          deliverable: 'botium.json with carefully chosen timeout values based on your bot\'s performance',
          criteria: 'Document how you determined each timeout value'
        },
        {
          task: 'Configure the HTTP connector',
          deliverable: 'Working HTTP connector configuration for a public chatbot API',
          criteria: 'Tests pass and correctly extract bot responses'
        },
        {
          task: 'Enable and test asserters',
          deliverable: 'Configuration with BUTTONS and INTENT asserters, plus test files using them',
          criteria: 'Tests correctly validate buttons and intents'
        }
      ],
      resources: [
        'Full Capabilities Reference: https://botium-docs.readthedocs.io/en/latest/capabilities/',
        'HTTP Connector Guide: https://botium-docs.readthedocs.io/en/latest/connectors/http/',
        'Asserters Documentation: https://botium-docs.readthedocs.io/en/latest/assertions/'
      ],
      keyTakeaways: [
        'Capabilities are organized by category (Core, Scripting, Assertion, etc.)',
        'Capability names follow patterns: PREFIX_FEATURE_DETAIL',
        'All capability names are UPPERCASE',
        'Timeout values are in milliseconds',
        'Enable SCRIPTING_NORMALIZE_TEXT for more reliable matching'
      ]
    },

    // ==================== LESSON 9: ENVIRONMENT SETUP ====================
    
    'botium-basic-009': {
      title: 'Environment Setup for Different Chatbot Types',
      overview: \`Different chatbots require different environments. A Dialogflow bot needs Google Cloud credentials. A Watson bot needs IBM Cloud setup. A custom bot might need VPN access. In this lesson, we'll cover how to prepare your environment for testing any type of chatbot. We'll walk through the setup process for each major platform, step by step.\`,
      objectives: [
        'Set up environment for Google Cloud/Dialogflow',
        'Set up environment for IBM Cloud/Watson',
        'Set up environment for AWS/Lex',
        'Configure environment variables securely',
        'Handle network and access requirements',
        'Troubleshoot environment issues'
      ],
      fiveWhys: [
        { 
          question: 'Why does environment setup matter?', 
          answer: 'Without proper environment setup, Botium can\'t connect to your chatbot. Each platform has authentication requirements - API keys, service accounts, access tokens. Getting these right is essential before any testing can happen.' 
        },
        { 
          question: 'What do I need to set up for cloud chatbots?', 
          answer: 'Three things: 1) Access credentials (API keys, service accounts), 2) Network access (can your computer reach the chatbot?), 3) Permissions (does your account have access to the chatbot?).' 
        },
        { 
          question: 'Why not just put credentials in the config file?', 
          answer: 'Security! Config files get committed to Git, shared with teammates, and might leak. Environment variables keep secrets separate from code. They\'re the industry standard for credentials.' 
        },
        { 
          question: 'What if I\'m behind a corporate firewall?', 
          answer: 'You may need proxy settings, VPN access, or firewall exceptions. We\'ll cover how to configure Botium to work in restricted network environments.' 
        },
        { 
          question: 'How do I know if my environment is set up correctly?', 
          answer: 'Run a simple connection test! Each platform has a "hello" test you can run. If it responds, your environment is ready. If it fails, the error message usually tells you what\'s missing.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: General Environment Setup Checklist',
          content: \`Before diving into specific platforms, here's what every environment needs.

**Universal Requirements Checklist:**

\`\`\`
BEFORE TESTING ANY CHATBOT:

☐ Node.js installed (v14+ recommended)
  → Check: node --version

☐ npm working
  → Check: npm --version

☐ Botium CLI installed
  → Check: botium-cli --version

☐ Relevant connector installed
  → Check: npm list -g | grep botium-connector

☐ Network access to chatbot platform
  → Check: ping api.dialogflow.com (or relevant URL)

☐ Credentials obtained from platform
  → API keys, service accounts, tokens

☐ Environment variables configured
  → Check: echo \$MY_API_KEY

☐ Test project created
  → botium.json + test folder
\`\`\`

**Environment Variables - The Right Way:**

\`\`\`bash
# Method 1: Export in terminal (temporary, current session only)
export DIALOGFLOW_PROJECT_ID="my-project"

# Method 2: Add to shell profile (permanent)
echo 'export DIALOGFLOW_PROJECT_ID="my-project"' >> ~/.bashrc
source ~/.bashrc

# Method 3: Use .env file (project-specific)
echo 'DIALOGFLOW_PROJECT_ID=my-project' >> .env

# Method 4: Use a secrets manager (enterprise)
# AWS Secrets Manager, HashiCorp Vault, etc.
\`\`\`

**Testing Your Environment:**

\`\`\`bash
# Create a simple test
mkdir env-test && cd env-test

# Create minimal config
echo '{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Environment Test",
      "CONTAINERMODE": "echo"
    }
  }
}' > botium.json

# Create test
mkdir tests
echo 'env test
#me
hello
#bot
You said: hello' > tests/env.convo.txt

# Run test
botium-cli run

# If this passes, your basic environment is working!
\`\`\`\`
        },
        {
          title: 'Step 2: Google Dialogflow Environment Setup',
          content: \`Complete step-by-step for Dialogflow.

**Step 2.1: Create a Google Cloud Project**

\`\`\`
1. Go to: https://console.cloud.google.com
2. Click "Select a project" → "New Project"
3. Enter project name → Click "Create"
4. Note your PROJECT_ID (you'll need it!)
\`\`\`

**Step 2.2: Enable Dialogflow API**

\`\`\`
1. In Google Cloud Console, go to "APIs & Services"
2. Click "Enable APIs and Services"
3. Search for "Dialogflow API"
4. Click "Enable"
\`\`\`

**Step 2.3: Create Service Account**

\`\`\`
1. Go to "IAM & Admin" → "Service Accounts"
2. Click "Create Service Account"
3. Name: "botium-testing"
4. Role: "Dialogflow API Client"
5. Click "Create Key" → "JSON"
6. Save the downloaded JSON file securely!
\`\`\`

**Step 2.4: Extract Credentials from JSON**

The downloaded JSON looks like this:
\`\`\`json
{
  "type": "service_account",
  "project_id": "my-project-123",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n",
  "client_email": "botium@my-project.iam.gserviceaccount.com",
  ...
}
\`\`\`

Extract these values:
- project_id → DIALOGFLOW_PROJECT_ID
- client_email → DIALOGFLOW_CLIENT_EMAIL
- private_key → DIALOGFLOW_PRIVATE_KEY

**Step 2.5: Set Environment Variables**

\`\`\`bash
# Set environment variables
export DIALOGFLOW_PROJECT_ID="my-project-123"
export DIALOGFLOW_CLIENT_EMAIL="botium@my-project.iam.gserviceaccount.com"
export DIALOGFLOW_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
YOUR_KEY_HERE
-----END PRIVATE KEY-----"

# Verify they're set
echo \$DIALOGFLOW_PROJECT_ID
\`\`\`

**Step 2.6: Create Botium Configuration**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Dialogflow Bot Tests",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\$DIALOGFLOW_PROJECT_ID",
      "DIALOGFLOW_CLIENT_EMAIL": "\$DIALOGFLOW_CLIENT_EMAIL",
      "DIALOGFLOW_PRIVATE_KEY": "\$DIALOGFLOW_PRIVATE_KEY",
      "DIALOGFLOW_LANGUAGE_CODE": "en"
    }
  }
}
\`\`\`

**Step 2.7: Test the Connection**

\`\`\`bash
# Create a simple test
echo 'dialogflow connection test
#me
hello
#bot
*' > tests/connection.convo.txt

# Run it
botium-cli run

# If it passes, your Dialogflow environment is ready!
\`\`\`\`
        },
        {
          title: 'Step 3: IBM Watson Environment Setup',
          content: \`Complete step-by-step for IBM Watson Assistant.

**Step 3.1: Create IBM Cloud Account**

\`\`\`
1. Go to: https://cloud.ibm.com
2. Create account (free tier available)
3. Verify email
4. Log in to dashboard
\`\`\`

**Step 3.2: Create Watson Assistant Service**

\`\`\`
1. Click "Create resource"
2. Search "Watson Assistant"
3. Select the service
4. Choose pricing plan (Lite = free)
5. Click "Create"
\`\`\`

**Step 3.3: Get Credentials**

\`\`\`
1. Open your Watson Assistant service
2. Click "Manage" in left sidebar
3. Find "Credentials" section:
   - API Key: Copy this
   - URL: Copy this (e.g., https://api.us-south.assistant.watson.cloud.ibm.com)
4. Go to your assistant
5. Click Settings → API Details
6. Copy "Assistant ID"
\`\`\`

**Step 3.4: Set Environment Variables**

\`\`\`bash
export WATSON_APIKEY="your-api-key-here"
export WATSON_URL="https://api.us-south.assistant.watson.cloud.ibm.com"
export WATSON_ASSISTANT_ID="your-assistant-id-here"

# Verify
echo \$WATSON_APIKEY
\`\`\`

**Step 3.5: Install Watson Connector**

\`\`\`bash
npm install -g botium-connector-watson
\`\`\`

**Step 3.6: Create Configuration**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Watson Bot Tests",
      "CONTAINERMODE": "watson",
      "WATSON_APIKEY": "\$WATSON_APIKEY",
      "WATSON_URL": "\$WATSON_URL",
      "WATSON_ASSISTANT_ID": "\$WATSON_ASSISTANT_ID",
      "WATSON_VERSION": "2021-11-27"
    }
  }
}
\`\`\`

**Step 3.7: Test Connection**

\`\`\`bash
echo 'watson connection test
#me
hello
#bot
*' > tests/connection.convo.txt

botium-cli run
\`\`\`\`
        },
        {
          title: 'Step 4: Custom/HTTP Bot Environment Setup',
          content: \`For bots with REST APIs.

**When to Use HTTP Connector:**

- Your bot has a REST API but no specific connector
- You're testing a custom-built chatbot
- The platform doesn't have a Botium connector

**Step 4.1: Gather API Information**

You need to know:
1. API endpoint URL
2. HTTP method (POST, GET)
3. Request format (how to send messages)
4. Response format (how to read replies)
5. Authentication method

**Step 4.2: Example - Simple REST Bot**

API Documentation says:
\`\`\`
POST https://api.mybot.com/chat
Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN

Request Body:
{
  "message": "user message here",
  "sessionId": "unique-session-id"
}

Response:
{
  "reply": "bot response here",
  "confidence": 0.95
}
\`\`\`

**Step 4.3: Create Configuration**

\`\`\`json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Custom REST Bot",
      "CONTAINERMODE": "http",
      "HTTP_ENDPOINT": "https://api.mybot.com/chat",
      "HTTP_METHOD": "POST",
      "HTTP_HEADERS": {
        "Content-Type": "application/json",
        "Authorization": "Bearer \$BOT_API_TOKEN"
      },
      "HTTP_BODY_TEMPLATE": "{
        \\"message\\": \\"{{msg.messageText}}\\",
        \\"sessionId\\": \\"{{botium.conversationId}}\\"
      }",
      "HTTP_RESPONSE_JSONPATH": "$.reply"
    }
  }
}
\`\`\`

**Step 4.4: Understanding the Template Variables**

| Variable | Description |
|----------|-------------|
| {{msg.messageText}} | The user's message |
| {{botium.conversationId}} | Unique session ID |
| {{msg.timestamp}} | Current timestamp |
| {{botium.stepId}} | Current step number |

**Step 4.5: Debug API Responses**

\`\`\`bash
# First, test the API manually with curl
curl -X POST https://api.mybot.com/chat \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"message": "hello", "sessionId": "test-123"}'

# Check the response structure
# Use that to set HTTP_RESPONSE_JSONPATH correctly
\`\`\`\`
        },
        {
          title: 'Step 5: Network and Firewall Considerations',
          content: \`Handling network restrictions.

**Common Network Issues:**

\`\`\`
PROBLEM: "ETIMEDOUT" or "Connection refused"
CAUSE: Firewall blocking outbound connections
SOLUTION: Whitelist the chatbot platform URLs

PROBLEM: "ENOTFOUND" (DNS resolution failed)
CAUSE: DNS not resolving the hostname
SOLUTION: Check internet connection, try Google DNS (8.8.8.8)

PROBLEM: "Unable to verify certificate"
CAUSE: SSL/TLS certificate issues
SOLUTION: Update Node.js or set NODE_TLS_REJECT_UNAUTHORIZED=0 (not for production!)
\`\`\`

**Working Behind a Corporate Proxy:**

\`\`\`bash
# Set proxy environment variables
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"

# If proxy requires authentication
export HTTP_PROXY="http://username:password@proxy.company.com:8080"

# Run Botium with proxy
botium-cli run
\`\`\`

**For Node.js/npm Proxy:**

\`\`\`bash
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
\`\`\`

**URLs to Whitelist (by Platform):**

\`\`\`
DIALOGFLOW:
- *.googleapis.com
- accounts.google.com

IBM WATSON:
- *.watson.cloud.ibm.com
- iam.cloud.ibm.com

AMAZON LEX:
- *.amazonaws.com

MICROSOFT BOT FRAMEWORK:
- *.botframework.com
- login.microsoftonline.com
\`\`\`

**VPN Considerations:**

Some chatbots are only accessible via VPN:
\`\`\`
1. Connect to VPN first
2. Verify you can reach the chatbot URL: curl https://internal-bot.company.com
3. Then run Botium tests
\`\`\`

**Testing Network Connectivity:**

\`\`\`bash
# Test DNS resolution
nslookup api.dialogflow.com

# Test if port is open
nc -zv api.dialogflow.com 443

# Test full connectivity
curl -I https://api.dialogflow.com

# If behind proxy, test with proxy
curl -x http://proxy:8080 https://api.dialogflow.com
\`\`\`\`
        }
      ],
      codeExamples: [
        {
          title: 'Environment Validation Script',
          code: \`#!/bin/bash
# validate-environment.sh
# Validates your Botium environment is ready

echo "======================================"
echo "Botium Environment Validation Script"
echo "======================================"
echo ""

# Check Node.js
echo -n "Node.js: "
if command -v node &> /dev/null; then
    node --version
else
    echo "❌ NOT INSTALLED"
    echo "   Install from https://nodejs.org"
fi

# Check npm
echo -n "npm: "
if command -v npm &> /dev/null; then
    npm --version
else
    echo "❌ NOT INSTALLED"
fi

# Check Botium CLI
echo -n "Botium CLI: "
if command -v botium-cli &> /dev/null; then
    botium-cli --version
else
    echo "❌ NOT INSTALLED"
    echo "   Run: npm install -g botium-cli"
fi

# List installed connectors
echo ""
echo "Installed Connectors:"
npm list -g 2>/dev/null | grep botium-connector || echo "   None found"

# Check environment variables
echo ""
echo "Environment Variables:"

vars=("DIALOGFLOW_PROJECT_ID" "DIALOGFLOW_CLIENT_EMAIL" "WATSON_APIKEY" "WATSON_URL")
for var in "\${vars[@]}"; do
    if [ -n "\${!var}" ]; then
        echo "   ✅ $var is set"
    fi
done

# Test network connectivity
echo ""
echo "Network Connectivity:"
platforms=("api.dialogflow.com" "api.us-south.assistant.watson.cloud.ibm.com")
for platform in "\${platforms[@]}"; do
    echo -n "   $platform: "
    if curl -s --head --connect-timeout 5 "https://$platform" > /dev/null; then
        echo "✅ Reachable"
    else
        echo "❌ Not reachable"
    fi
done

echo ""
echo "======================================"
echo "Validation complete!"
echo "======================================"\`,
          explanation: \`Save this as validate-environment.sh and run it to check your environment.\`
        },
        {
          title: 'Multi-Platform .env Template',
          code: \`# .env file template for Botium
# Copy to .env and fill in your values
# NEVER commit this file to Git!

# ====== DIALOGFLOW ======
DIALOGFLOW_PROJECT_ID=your-project-id
DIALOGFLOW_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
DIALOGFLOW_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
your-private-key-here
-----END PRIVATE KEY-----"

# ====== IBM WATSON ======
WATSON_APIKEY=your-watson-api-key
WATSON_URL=https://api.us-south.assistant.watson.cloud.ibm.com
WATSON_ASSISTANT_ID=your-assistant-id

# ====== AMAZON LEX ======
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
LEX_BOT_NAME=your-bot-name
LEX_BOT_ALIAS=your-bot-alias

# ====== CUSTOM HTTP BOT ======
BOT_API_URL=https://your-bot.com/api/chat
BOT_API_TOKEN=your-api-token

# ====== PROXY (if needed) ======
# HTTP_PROXY=http://proxy.company.com:8080
# HTTPS_PROXY=http://proxy.company.com:8080\`,
          explanation: \`Use this as a template for your .env file. Only fill in what you need.\`
        }
      ],
      formulas: [
        {
          name: 'Environment Readiness',
          formula: 'Node.js + Connector + Credentials + Network Access = Ready to Test',
          explanation: \`All four components must be working. Missing any one means tests won't run. Check them in this order: Node first, then connector, then credentials, then network.\`
        },
        {
          name: 'Credential Security',
          formula: 'Secrets in Environment Variables + .env in .gitignore = Secure Setup',
          explanation: \`Never put secrets in code files. Always use environment variables. Always add .env to .gitignore.\`
        }
      ],
      benefits: [
        'You can set up Botium for any chatbot platform',
        'You understand credential management best practices',
        'You can troubleshoot network and access issues',
        'You know how to work with proxy and firewall restrictions',
        'You have templates for all major platforms',
        'You can validate your environment before testing'
      ],
      commonMistakes: [
        'Committing .env or credentials to Git',
        'Not setting environment variables before running tests',
        'Wrong URL format for Watson (different regions have different URLs)',
        'Forgetting to enable APIs in Google Cloud Console',
        'Not installing the connector before trying to use it',
        'Setting proxy environment variables incorrectly'
      ],
      exercises: [
        {
          task: 'Set up environment for your chatbot platform',
          deliverable: 'Working environment with all credentials configured',
          criteria: 'Basic connection test passes'
        },
        {
          task: 'Create a secure .env file',
          deliverable: '.env file with credentials + .gitignore entry',
          criteria: 'Verify .env is ignored by Git'
        },
        {
          task: 'Run the environment validation script',
          deliverable: 'Output showing all checks pass',
          criteria: 'All required components are installed and configured'
        }
      ],
      resources: [
        'Google Cloud Console: https://console.cloud.google.com',
        'IBM Cloud Dashboard: https://cloud.ibm.com',
        'AWS Console: https://console.aws.amazon.com',
        'dotenv npm package: https://www.npmjs.com/package/dotenv'
      ],
      keyTakeaways: [
        'Each platform needs specific credentials and setup',
        'Always use environment variables for secrets',
        'Test network connectivity before debugging code issues',
        'Keep .env files out of version control',
        'Validate your environment before running tests'
      ]
    },

    // ==================== LESSON 10: CONNECTING TO YOUR FIRST CHATBOT ====================
    
    'botium-basic-010': {
      title: 'Connecting to Your First Chatbot',
      overview: \`This is the moment you've been working toward! In this lesson, we'll take everything you've learned and connect Botium to a REAL chatbot. We'll go through the entire process: choosing a chatbot, configuring the connection, writing tests, running them, and interpreting results. By the end, you'll have successfully tested your first real chatbot!\`,
      objectives: [
        'Connect Botium to a real chatbot (not just echo)',
        'Write meaningful test conversations',
        'Run tests and interpret results',
        'Debug connection issues',
        'Create a complete test suite',
        'Feel confident testing any chatbot'
      ],
      fiveWhys: [
        { 
          question: 'Why is this lesson different from previous ones?', 
          answer: 'Previous lessons used the echo connector for safe learning. Now we\'re connecting to actual chatbots that can fail, timeout, or respond unexpectedly. This is real-world testing!' 
        },
        { 
          question: 'What if I don\'t have access to a chatbot to test?', 
          answer: 'We\'ll provide options! You can use public demo chatbots, create a free Dialogflow agent, or use Botium\'s sample bots. Everyone can practice.' 
        },
        { 
          question: 'How do I know what responses to expect?', 
          answer: 'First, manually test the chatbot to learn its responses. Then write tests based on actual behavior. You can also use wildcards (*) initially to accept any response.' 
        },
        { 
          question: 'What if my tests fail?', 
          answer: 'Failures are learning opportunities! We\'ll cover how to read error messages, debug issues, and fix problems. Most failures come from timing, matching, or configuration issues.' 
        },
        { 
          question: 'Can I test chatbots I don\'t have credentials for?', 
          answer: 'Only if they have public APIs or demo modes. Most enterprise chatbots require credentials. But there are public chatbots and demos you can practice with.' 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Choosing Your First Real Chatbot',
          content: \`Let's identify what chatbot you'll test.

**Option A: Your Company's Chatbot**

If you have access to a chatbot at work:
\`\`\`
☐ Get credentials from your team
☐ Identify the platform (Dialogflow, Watson, etc.)
☐ Get access to a TEST environment (not production!)
☐ Ask about rate limits or restrictions
\`\`\`

**Option B: Create a Free Dialogflow Agent**

\`\`\`
1. Go to: https://dialogflow.cloud.google.com
2. Create new agent
3. Use a pre-built agent (Small Talk, FAQ) for instant testing
4. Follow the credentials setup from Lesson 9
\`\`\`

**Option C: Use a Public Demo Bot**

Some bots are publicly accessible for testing:
\`\`\`
- Dialogflow demo: https://dialogflow.cloud.google.com/cx/projects
- Some websites have chatbots you can access via HTTP
- Botium sample bots
\`\`\`

**Option D: Use the Echo Connector with Realistic Tests**

Even echo can simulate real testing:
\`\`\`json
{
  "botium": {
    "Capabilities": {
      "CONTAINERMODE": "echo",
      "ECHO_RESPONSE_PREFIX": ""  // Remove "You said: " prefix
    }
  }
}
\`\`\`

**Making Your Decision:**

\`\`\`
START
  │
  ├── Do you have access to a real chatbot?
  │   ├── YES → Use it! Best learning experience.
  │   └── NO ──┐
  │            │
  │            ├── Can you create a Dialogflow agent?
  │            │   ├── YES → Create one (it's free!)
  │            │   └── NO ──┐
  │            │            │
  │            │            └── Use HTTP connector with
  │            │                public chatbot or
  │            │                continue with echo
  │
  └── Ready to connect!
\`\`\`\`
        },
        {
          title: 'Step 2: Connecting to Dialogflow (Most Common)',
          content: \`Let's connect to a Dialogflow chatbot step by step.

**Step 2.1: Verify Prerequisites**

\`\`\`bash
# Check connector is installed
npm list -g | grep botium-connector-dialogflow

# If not installed:
npm install -g botium-connector-dialogflow

# Verify environment variables are set
echo \$DIALOGFLOW_PROJECT_ID
echo \$DIALOGFLOW_CLIENT_EMAIL
\`\`\`

**Step 2.2: Create the Project Structure**

\`\`\`bash
mkdir dialogflow-tests
cd dialogflow-tests

# Create configuration
cat > botium.json << 'EOF'
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "My Dialogflow Bot Tests",
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "\$DIALOGFLOW_PROJECT_ID",
      "DIALOGFLOW_CLIENT_EMAIL": "\$DIALOGFLOW_CLIENT_EMAIL",
      "DIALOGFLOW_PRIVATE_KEY": "\$DIALOGFLOW_PRIVATE_KEY",
      "DIALOGFLOW_LANGUAGE_CODE": "en",
      "WAITFORBOTTIMEOUT": 15000
    }
  }
}
EOF

mkdir tests
\`\`\`

**Step 2.3: Discover Your Bot's Capabilities**

Before writing tests, learn what your bot can do:

\`\`\`bash
# Interactive mode - talk to your bot
botium-cli emulator

# Type messages and see responses
# Note down the intents and typical responses
\`\`\`

**Step 2.4: Write Your First Real Test**

Based on what you discovered:

\`\`\`bash
cat > tests/greeting.convo.txt << 'EOF'
test greeting intent

#me
Hello

#bot
*
EOF
\`\`\`

Using \`*\` wildcard initially accepts any response. This tests the connection works.

**Step 2.5: Run and Verify**

\`\`\`bash
botium-cli run

# Expected:
# ✓ test greeting intent
# 1 passing
\`\`\`

**If it passes:** Your connection works! Now refine the tests.

**Step 2.6: Refine with Actual Expectations**

Now that you know the connection works, update tests:

\`\`\`bash
cat > tests/greeting.convo.txt << 'EOF'
test greeting intent

#me
Hello

#bot
Hi! How can I help you today?
EOF
\`\`\`

Use the actual response your bot gives!\`
        },
        {
          title: 'Step 3: Writing Meaningful Test Conversations',
          content: \`Let's create a comprehensive test suite.

**Test Categories to Cover:**

\`\`\`
1. HAPPY PATH TESTS
   - Main flows work correctly
   - Expected responses come back

2. NEGATIVE TESTS
   - What happens with gibberish?
   - What happens with unexpected input?

3. EDGE CASE TESTS
   - Very long messages
   - Special characters
   - Empty or whitespace only

4. MULTI-TURN TESTS
   - Conversations with multiple exchanges
   - Context is maintained
\`\`\`

**Happy Path Test Example:**

\`\`\`
test order pizza flow

#me
I want to order a pizza

#bot
What size pizza would you like?

#me
Large

#bot
What toppings?

#me
Pepperoni

#bot
Your order for a large pepperoni pizza has been placed!
\`\`\`

**Negative Test Example:**

\`\`\`
test unknown input

#me
asdfghjkl qwerty

#bot
I'm sorry, I didn't understand that. Can you rephrase?
\`\`\`

**Edge Case Test:**

\`\`\`
test special characters

#me
Hello! @#\$%^&*()

#bot
*
\`\`\`

**Multi-Turn with Context:**

\`\`\`
test remember order details

#me
I want to book a flight to Paris

#bot
When would you like to travel?

#me
Next Friday

#bot
I've found flights to Paris for next Friday.

#me
What's my destination again?

#bot
Paris
\`\`\`

**Using Partial Matching:**

When exact matching is too strict:

\`\`\`
test flexible response

#me
What's the weather?

#bot
*weather*
\`\`\`

The \`*weather*\` pattern matches any response containing "weather".\`
        },
        {
          title: 'Step 4: Running Tests and Interpreting Results',
          content: \`Understanding what test output means.

**Running Tests:**

\`\`\`bash
# Run all tests
botium-cli run

# Run with verbose output
botium-cli run --verbose

# Run specific test
botium-cli run --filter "greeting"

# Run with detailed debugging
DEBUG=botium* botium-cli run
\`\`\`

**Understanding Output:**

\`\`\`
SUCCESS OUTPUT:
───────────────
  ✓ test greeting (234ms)          ← Test passed
  ✓ test order pizza (456ms)       ← (Xms) = how long it took
  ✓ test unknown input (123ms)

  3 passing (1s)                   ← All tests passed!


FAILURE OUTPUT:
───────────────
  ✓ test greeting (234ms)
  ✗ test order pizza (456ms)       ← ✗ means FAILED
  ✓ test unknown input (123ms)

  2 passing
  1 failing

  1) test order pizza:

     AssertionError: Expected bot response to contain:
       "Your order has been placed"
     
     But got:
       "I need your delivery address first"
     
     at step 4 of conversation
\`\`\`

**Reading Failure Messages:**

\`\`\`
AssertionError: Expected bot response to contain:
  "Your order has been placed"          ← What you expected
  
But got:
  "I need your delivery address first"  ← What actually came back

at step 4 of conversation               ← Where in the test it failed
\`\`\`

**Common Failure Causes:**

| Error | Meaning | Solution |
|-------|---------|----------|
| "Expected X but got Y" | Wrong response | Update test or fix bot |
| "Timeout" | Bot didn't respond | Increase timeout |
| "Connection failed" | Can't reach bot | Check credentials/network |
| "Authentication error" | Bad credentials | Verify API keys |

**Verbose Mode Shows Everything:**

\`\`\`bash
botium-cli run --verbose

# Shows:
# [INFO] Loading test: greeting.convo.txt
# [DEBUG] Sending: "Hello"
# [DEBUG] Waiting for response...
# [DEBUG] Received: "Hi there!"
# [DEBUG] Matching against: "Hi there!"
# [INFO] ✓ Assertion passed
\`\`\`\`
        },
        {
          title: 'Step 5: Debugging Connection Issues',
          content: \`When things go wrong, here's how to fix them.

**Problem 1: Authentication Failed**

\`\`\`bash
ERROR: 401 Unauthorized

DIAGNOSIS:
1. Check credentials are set:
   echo \$DIALOGFLOW_PROJECT_ID
   echo \$DIALOGFLOW_CLIENT_EMAIL

2. Check credentials are correct:
   - Project ID matches Google Cloud project
   - Email is complete service account email
   - Private key includes BEGIN/END markers

3. Check service account has permissions:
   - Go to Google Cloud Console
   - IAM & Admin → IAM
   - Find service account, verify "Dialogflow API Client" role

FIX:
export DIALOGFLOW_PROJECT_ID="correct-project-id"
# Re-download service account key if needed
\`\`\`

**Problem 2: Timeout Errors**

\`\`\`bash
ERROR: Timeout waiting for bot response

DIAGNOSIS:
1. Is the chatbot slow?
   - Try manually: botium-cli emulator
   - Time how long responses take

2. Is the bot overwhelmed?
   - Reduce PARALLEL setting
   - Check chatbot dashboard for errors

FIX:
# Increase timeout
"WAITFORBOTTIMEOUT": 30000  // 30 seconds
\`\`\`

**Problem 3: Response Doesn't Match**

\`\`\`bash
ERROR: Expected "Hello!" but got "Hi there!"

DIAGNOSIS:
- The bot's response changed
- The bot has multiple response variations
- There are extra spaces or formatting

FIX OPTIONS:
1. Update expected response in test
2. Use wildcard: "*"
3. Use partial match: "*Hi*"
4. Enable normalization:
   "SCRIPTING_NORMALIZE_TEXT": true
\`\`\`

**Problem 4: Connection Refused**

\`\`\`bash
ERROR: ECONNREFUSED or Connection refused

DIAGNOSIS:
1. Is the chatbot service running?
   - Check platform status page
   - Try the chatbot's web interface

2. Are you behind a firewall?
   - Can you reach the URL? curl https://api.dialogflow.com

3. VPN required?
   - Connect to VPN and try again

FIX:
# Set proxy if behind corporate firewall
export HTTPS_PROXY=http://proxy:8080
\`\`\`

**Problem 5: "Connector Not Found"**

\`\`\`bash
ERROR: Container mode dialogflow not found

FIX:
npm install -g botium-connector-dialogflow

# Verify installation
npm list -g | grep botium-connector
\`\`\`

**Debug Mode - See Everything:**

\`\`\`bash
DEBUG=botium* botium-cli run

# This shows:
# - Every message sent
# - Every response received
# - Configuration being used
# - Network requests made
# - Exact point of failure
\`\`\`\`
        }
      ],
      codeExamples: [
        {
          title: 'Complete Test Suite Template',
          code: \`# tests/01-greeting.convo.txt
test greeting - say hello

#me
Hello

#bot
*hello*

---

# tests/02-greeting-variations.convo.txt
test greeting - say hi

#me  
Hi there

#bot
*

---

# tests/03-help-request.convo.txt
test help flow

#me
I need help

#bot
*help*

---

# tests/04-unknown-input.convo.txt
test fallback - gibberish

#me
asdfjkl qwerty zxcv

#bot
*sorry*didn't understand*

---

# tests/05-goodbye.convo.txt
test goodbye flow

#me
Goodbye

#bot
*bye*

---

# tests/06-multi-turn.convo.txt
test multi-turn conversation

#me
Hi

#bot
*

#me
What can you help me with?

#bot
*

#me
Thanks, goodbye

#bot
*\`,
          explanation: \`This is a basic test suite template. Start with wildcards (*) to verify connections work, then refine with actual expectations.\`
        },
        {
          title: 'Quick Connection Test Script',
          code: \`#!/bin/bash
# quick-test.sh
# Run this to quickly test your chatbot connection

echo "🔌 Testing chatbot connection..."
echo ""

# Create temporary test
TMP_DIR=$(mktemp -d)
cd "\$TMP_DIR"

# Create minimal config
cat > botium.json << 'EOF'
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Connection Test",
      "CONTAINERMODE": "\$CONTAINERMODE",
      "WAITFORBOTTIMEOUT": 15000
    }
  }
}
EOF

# If using echo connector
if [ "\$CONTAINERMODE" == "echo" ]; then
  echo "Testing with echo connector..."
fi

# Create test directory and test file
mkdir tests
echo 'connection test
#me
hello
#bot
*' > tests/connection.convo.txt

# Run test
echo ""
echo "Running test..."
botium-cli run

EXIT_CODE=\$?

# Cleanup
cd ~
rm -rf "\$TMP_DIR"

if [ \$EXIT_CODE -eq 0 ]; then
  echo ""
  echo "✅ Connection successful! Your chatbot is ready for testing."
else
  echo ""
  echo "❌ Connection failed. Check your configuration."
fi

exit \$EXIT_CODE\`,
          explanation: \`Run this script to quickly verify your chatbot connection is working before writing tests.\`
        }
      ],
      formulas: [
        {
          name: 'Test Development Workflow',
          formula: 'Manual Test → Capture Response → Write Test → Automate → Refine',
          explanation: \`Always start by manually testing the chatbot to understand its behavior. Then write tests based on actual responses. Refine as needed.\`
        },
        {
          name: 'Test Coverage',
          formula: 'Happy Paths + Edge Cases + Errors + Multi-Turn = Complete Coverage',
          explanation: \`A good test suite covers successful flows, boundary cases, error handling, and complex conversations.\`
        }
      ],
      benefits: [
        'You have connected Botium to a real chatbot',
        'You can write meaningful test conversations',
        'You understand test output and failures',
        'You can debug connection issues',
        'You have a complete test suite template',
        'You\'re ready to test any chatbot confidently!'
      ],
      commonMistakes: [
        'Writing tests without first manually testing the chatbot',
        'Expecting exact responses from non-deterministic AI bots',
        'Not using wildcards during initial connection testing',
        'Ignoring timeout settings for slow bots',
        'Testing against production instead of test environment',
        'Not enabling verbose/debug mode when troubleshooting'
      ],
      exercises: [
        {
          task: 'Connect to your first real chatbot',
          deliverable: 'Working connection with at least one passing test',
          criteria: 'botium-cli run shows at least 1 passing test'
        },
        {
          task: 'Create a 10-test suite',
          deliverable: 'Test folder with 10 different test conversations',
          criteria: 'Tests cover greeting, help, errors, and multi-turn flows'
        },
        {
          task: 'Troubleshoot and fix a failure',
          deliverable: 'Document a failure you encountered and how you fixed it',
          criteria: 'Explain the error message and your debugging steps'
        }
      ],
      resources: [
        'Botium CLI Reference: https://botium-docs.readthedocs.io/en/latest/cli/',
        'Dialogflow Console: https://dialogflow.cloud.google.com',
        'Botium Interactive Emulator: Run \`botium-cli emulator\`'
      ],
      keyTakeaways: [
        'Always manually test the chatbot before writing automated tests',
        'Start with wildcards (*) to verify connection works',
        'Read error messages carefully - they tell you what\'s wrong',
        'Use verbose mode (--verbose) for debugging',
        'Build test suites incrementally: start simple, add complexity'
      ]
    }
  };

  return beginnerContents[lessonId] || null;
}
