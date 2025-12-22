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
    }
  };

  return beginnerContents[lessonId] || null;
}
