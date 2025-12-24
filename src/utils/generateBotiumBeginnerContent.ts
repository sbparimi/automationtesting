// Comprehensive Botium Framework Content Generator - Udemy Style
// Ultra-detailed step-by-step instructions for absolute beginners
// Each lesson explains concepts as if the reader knows NOTHING about chatbots or AI

import { LessonContent } from './generateAiInQaContent';

// Helper function to create code blocks without template literal issues
const codeBlock = (code: string, lang = ''): string => {
  return '\n```' + lang + '\n' + code + '\n```\n';
};

export function generateBotiumBeginnerContent(lessonId: string, lessonTitle: string): LessonContent | null {
  const beginnerContents: Record<string, LessonContent> = {
    // ==================== SECTION 1: INTRODUCTION TO BOTIUM ECOSYSTEM ====================
    
    'botium-basic-001': {
      title: 'Introduction to Botium Framework',
      overview: "Welcome to your first step into the exciting world of chatbot testing! Before we dive into Botium, let's understand what we're actually testing. If you've ever talked to a customer service chat on a website, asked Siri a question, or used Amazon Alexa, you've interacted with a chatbot. These chatbots need to be tested just like any other software, but they're special - they understand human language and respond in natural ways. That's where Botium comes in. Botium is like a robot that talks to other robots (chatbots) and checks if they're responding correctly. In this lesson, we'll start from absolute zero and build your understanding step by step.",
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
          answer: "A chatbot is a computer program that can have a conversation with humans. Think of it like a very smart auto-reply system. When you type \"What are your store hours?\", the chatbot understands your question (that's the AI part) and gives you an answer like \"We're open 9 AM to 5 PM.\" Behind the scenes, the chatbot has been trained to recognize thousands of different ways people might ask about store hours and knows how to respond appropriately." 
        },
        { 
          question: "Why can't we test chatbots like regular websites?", 
          answer: "Regular software testing is predictable: click a button, get a specific result. Chatbots are different because humans don't speak in exact phrases. You might say \"What time do you open?\", \"When can I visit?\", or \"Are you open now?\" - all meaning the same thing. The chatbot might respond with \"We open at 9 AM\" or \"Our doors open at 9:00\" - both are correct! This variability makes traditional testing tools useless for chatbots." 
        },
        { 
          question: 'What problem does Botium solve?', 
          answer: "Botium solves the problem of testing conversations automatically. Instead of a human manually chatting with a bot and checking responses (slow and error-prone), Botium can simulate thousands of conversations in seconds. It understands that \"We open at 9 AM\" and \"9:00 AM is our opening time\" both mean the same thing, so it can validate responses intelligently." 
        },
        { 
          question: 'Why is Botium called "the Selenium for Chatbots"?', 
          answer: "Selenium is a famous tool that automates web browser testing. Before Selenium, testers had to click through websites manually. Selenium changed that. Botium does the same thing for chatbots - it automates the conversation testing process. Just as Selenium can test any website, Botium can test any chatbot, regardless of which platform it's built on." 
        },
        { 
          question: 'Why should I learn Botium as a tester?', 
          answer: "Chatbots are everywhere - banking, healthcare, e-commerce, customer service. Every company using chatbots needs people who can test them. There are very few chatbot testing experts, but the demand is growing rapidly. Learning Botium makes you valuable in a field where most testers have zero experience." 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Understanding Chatbots from Scratch',
          content: "Let's start at the very beginning. Forget everything technical for a moment.\n\n**What is a Chatbot in Simple Terms?**\n\nImagine you hire a new employee whose only job is to answer customer questions via text chat. This employee:\n- Can work 24 hours a day, 7 days a week\n- Can talk to thousands of customers at the same time\n- Never gets tired, never gets rude\n- Gives consistent answers every time\n\nA chatbot is exactly this - but it's a computer program, not a human.\n\n**Real-World Examples You've Probably Used:**\n\n1. **Customer Service Chat** - That little chat bubble on websites asking \"How can I help you?\"\n2. **Siri, Alexa, Google Assistant** - Voice-based chatbots (yes, voice assistants are chatbots!)\n3. **Banking Apps** - \"Check my balance\" features in banking apps\n4. **Food Ordering** - \"Order my usual\" features in delivery apps\n5. **Facebook Messenger Bots** - Businesses that auto-reply on Facebook\n\n**How Does a Chatbot \"Understand\" You?**\n\nWhen you say \"What's the weather like?\", the chatbot goes through these steps:" + codeBlock("Step 1: LISTEN - Receive your text message\n         ↓\nStep 2: UNDERSTAND - Figure out what you're asking about (weather)\n         ↓\nStep 3: THINK - Look up the weather information\n         ↓\nStep 4: RESPOND - Send back \"It's 72°F and sunny!\"") + "\nThe \"UNDERSTAND\" part is where AI magic happens. The chatbot uses something called NLU (Natural Language Understanding) to figure out your intent - what you actually want.\n\n**The Amazing Thing About Modern Chatbots:**\n\nYou don't have to say exact phrases. All of these would work:\n- \"What's the weather?\"\n- \"How's the weather today?\"\n- \"Is it going to rain?\"\n- \"Do I need an umbrella?\"\n- \"What should I wear outside?\"\n\nThe chatbot understands that all of these are asking about weather!"
        },
        {
          title: 'Step 2: Why Testing Chatbots is Different (And Challenging)',
          content: "Now that you understand what chatbots are, let's see why testing them is special.\n\n**The Challenge: Chatbots Don't Give Exact Answers**\n\nImagine testing a calculator:\n- Input: 2 + 2\n- Expected: 4\n- If you get 4, the test PASSES\n- If you get anything else, the test FAILS\n\nSimple, right? Now imagine testing a chatbot:\n- Input: \"What time do you open?\"\n- The chatbot might say:\n  - \"We open at 9 AM\"\n  - \"Our doors open at 9:00 in the morning\"\n  - \"9 AM! Can't wait to see you!\"\n  - \"The store opens at 9:00 AM sharp\"\n\nAll of these are CORRECT! But they're all different. How do you write a test for this?\n\n**The Five Challenges of Chatbot Testing:**" + codeBlock("Challenge 1: VARIABILITY\n├── Same intent, different responses\n└── How do you check \"correct\" when correct varies?\n\nChallenge 2: CONTEXT\n├── Chatbots remember conversation history\n└── Response depends on what was said before\n\nChallenge 3: NATURAL LANGUAGE\n├── Typos, slang, abbreviations\n└── \"wat time u open?\" should still work!\n\nChallenge 4: MULTI-TURN CONVERSATIONS\n├── Some conversations take 10+ messages\n└── Each step depends on previous steps\n\nChallenge 5: PLATFORM DIVERSITY\n├── Dialogflow, Watson, Lex, Rasa, custom bots\n└── Each has different APIs and formats") + "\n\n**This Is Why Normal Testing Tools Don't Work:**\n\nSelenium? It clicks buttons - chatbots don't have buttons.\nPostman? It tests APIs with exact responses - chatbots are fuzzy.\nManual Testing? Too slow - chatbots need thousands of test cases.\n\n**This is exactly why Botium was created!**"
        },
        {
          title: 'Step 3: What is Botium? (The Complete Picture)',
          content: "Now let's understand what Botium actually is.\n\n**Botium in One Sentence:**\n\nBotium is a tool that automatically has conversations with chatbots and checks if their responses are correct.\n\n**The Botium Family:**\n\nBotium isn't just one thing - it's a family of tools:" + codeBlock("BOTIUM FAMILY\n├── Botium Core (The Engine)\n│   └── The heart of everything - does the actual testing\n├── Botium CLI (Command Line Interface)\n│   └── Run tests from terminal/command prompt\n├── Botium Bindings (Integrations)\n│   └── Works with Mocha, Jest, Jasmine test frameworks\n├── Botium Box (Web Interface)\n│   └── Beautiful dashboard - no coding needed\n└── Botium Bench (Performance Testing)\n    └── Test how many users your bot can handle") + "\n\n**How Botium Works (Simple Version):**" + codeBlock("YOU write: \"Test if bot says hello\"\n      ↓\nBOTIUM reads your test\n      ↓\nBOTIUM connects to your chatbot\n      ↓\nBOTIUM sends: \"Hello\"\n      ↓\nCHATBOT responds: \"Hi there! How can I help?\"\n      ↓\nBOTIUM checks: Does response match expectations?\n      ↓\nBOTIUM reports: TEST PASSED ✓ or FAILED ✗") + "\n\n**What Makes Botium Special:**\n\n1. **Platform Agnostic** - Works with ANY chatbot platform\n2. **Smart Matching** - Understands variations in responses\n3. **Easy to Learn** - Simple script format\n4. **Open Source** - Free to use (Botium Core)\n5. **Scalable** - Can run thousands of tests"
        },
        {
          title: 'Step 4: Your First Look at Botium (What Tests Look Like)',
          content: "Let's see what Botium tests actually look like. Don't worry about understanding everything - just get a feel for it.\n\n**A Botium Test in Plain English:**" + codeBlock("Test Name: Check greeting\n\n1. User says: \"Hello\"\n2. Bot should say: something containing \"Hi\" or \"Hello\"") + "\n\n**The Same Test in Botium Format:**" + codeBlock("greeting test\n\n#me\nHello\n\n#bot\nHi", "text") + "\n\n**That's it! Breaking it down:**\n- Line 1: The test name (\"greeting test\")\n- Line 3: #me means \"the user says\"\n- Line 4: What the user says (\"Hello\")\n- Line 6: #bot means \"the chatbot should respond\"\n- Line 7: What we expect (contains \"Hi\")\n\n**A More Complex Test:**" + codeBlock("order pizza test\n\n#me\nI want to order a pizza\n\n#bot\nWhat size would you like?\n\n#me\nLarge please\n\n#bot\nWhat toppings?", "text") + "\n\n**This tests a conversation flow:**\n1. User wants pizza → Bot asks size\n2. User says large → Bot asks toppings\n\nBotium runs through this entire conversation automatically!"
        },
        {
          title: 'Step 5: Setting Up Your Mental Model',
          content: "Before we start installing anything, let's build a clear mental picture.\n\n**Think of Botium as a Robot Tester:**" + codeBlock("╔═══════════════════════════════════════╗\n║         YOUR CHATBOT                   ║\n║   (Dialogflow, Watson, Alexa, etc.)   ║\n╚═══════════════════════════════════════╝\n              ↑↓ Conversation\n╔═══════════════════════════════════════╗\n║           BOTIUM                       ║\n║   (Pretends to be a human user)       ║\n║   - Sends messages                     ║\n║   - Receives responses                 ║\n║   - Checks if responses are correct    ║\n╚═══════════════════════════════════════╝\n              ↑ Instructions\n╔═══════════════════════════════════════╗\n║         YOUR TEST FILES               ║\n║   (Tell Botium what to test)          ║\n╚═══════════════════════════════════════╝") + "\n\n**The Testing Workflow:**" + codeBlock("1. WRITE - Create test conversation files\n          ↓\n2. CONFIGURE - Tell Botium which chatbot to test\n          ↓\n3. RUN - Execute the tests\n          ↓\n4. REVIEW - Look at the results\n          ↓\n5. FIX - If tests fail, fix the chatbot or the test\n          ↓\n6. REPEAT - Keep testing!") + "\n\n**Key Terminology You'll Hear:**\n\n| Term | Simple Meaning |\n|------|----------------|\n| Connector | A plugin that connects to a specific chatbot type |\n| Capability | A setting in Botium (like timeout duration) |\n| Convo File | A file containing test conversations |\n| Utterance | A single message in a conversation |\n| Intent | What the user is trying to do (e.g., \"book flight\") |\n| Entity | A specific piece of info (e.g., \"New York\", \"tomorrow\") |"
        }
      ],
      codeExamples: [
        {
          title: 'Your First Botium Test File',
          code: "# Save this as: greeting.convo.txt\n# This is a comment - Botium ignores lines starting with #\n\ngreeting test\n\n#me\nHello\n\n#bot\nHi\n\n# What this does:\n# 1. Sends \"Hello\" to the chatbot\n# 2. Expects response containing \"Hi\"\n# 3. Passes if \"Hi\" appears anywhere in response",
          explanation: "This is the simplest possible Botium test. The #me section is what the user says, and the #bot section is what we expect the bot to respond with."
        },
        {
          title: 'Multi-Turn Conversation Test',
          code: "# Save this as: book_flight.convo.txt\n\nbook flight test\n\n#me\nI want to book a flight\n\n#bot\nWhere would you like to fly to?\n\n#me\nNew York\n\n#bot\nWhen would you like to travel?\n\n#me\nNext Friday\n\n#bot\nI found flights to New York for next Friday",
          explanation: "This tests a complete conversation flow. Botium will go through each exchange automatically and verify the bot responds correctly at each step."
        }
      ],
      formulas: [
        {
          name: 'The Chatbot Testing Equation',
          formula: 'Test = User Message + Expected Bot Response',
          explanation: 'Every chatbot test consists of what the user says and what the bot should respond. Botium sends the user message and checks if the bot response matches expectations.'
        },
        {
          name: 'The Coverage Formula',
          formula: 'Good Coverage = All Intents × Common Variations × Edge Cases',
          explanation: 'A well-tested chatbot has tests for every intent (booking, FAQ, etc.), common ways users express those intents, and unusual edge cases.'
        }
      ],
      benefits: [
        'You now understand what chatbots are and how they work at a basic level',
        'You understand why chatbot testing is uniquely challenging',
        'You know what Botium is and what problems it solves',
        'You have seen what Botium tests look like',
        'You understand the key terminology used in chatbot testing',
        'You are ready to start your hands-on Botium journey!'
      ],
      commonMistakes: [
        'Thinking chatbots always give the same response (they often vary!)',
        'Trying to use web testing tools for chatbots (they are not designed for conversations)',
        'Expecting to learn everything at once (take it step by step)',
        'Skipping the fundamentals to jump into advanced topics',
        'Not understanding the difference between Botium Core and Botium Box'
      ],
      exercises: [
        {
          task: 'Find 5 chatbots in your daily life',
          deliverable: 'A list of 5 chatbots you interact with, noting what they do',
          criteria: 'Include at least one customer service bot, one voice assistant, and one specialized bot'
        },
        {
          task: 'Write a conversation script on paper',
          deliverable: 'A 5-turn conversation between a user and a banking chatbot',
          criteria: 'Include: greeting, balance inquiry, clarifying question, answer, and goodbye'
        },
        {
          task: 'Identify testing challenges',
          deliverable: 'List 3 ways a chatbot might correctly answer "What is my balance?"',
          criteria: 'Show how the same intent can have multiple valid responses'
        }
      ],
      resources: [
        'Botium Official Documentation: https://botium-docs.readthedocs.io/',
        'Botium GitHub Repository: https://github.com/codeforequity-at/botium-core',
        'What is a Chatbot? - IBM: https://www.ibm.com/topics/chatbots',
        'NLU Explained Simply: https://www.ibm.com/topics/natural-language-understanding'
      ],
      keyTakeaways: [
        'Chatbots are programs that have conversations - they understand language and respond naturally',
        'Testing chatbots is hard because responses vary and conversations have multiple turns',
        'Botium is the Selenium of chatbots - it automates conversation testing',
        'Botium works with any chatbot platform through connectors',
        'Tests are simple: define what the user says and what the bot should respond'
      ]
    },

    'botium-basic-002': {
      title: 'Installing Botium Framework',
      overview: "Now that you understand what Botium is, it's time to get it running on your computer! This lesson will guide you through every single step of the installation process. We'll install Node.js (the platform Botium runs on), npm (the package manager), and finally Botium itself. Don't worry if you've never used a command line before - we'll explain every command in detail.",
      objectives: [
        'Install Node.js on your computer (Windows, Mac, or Linux)',
        'Understand what npm is and how to use it',
        'Install Botium Core globally on your system',
        'Install the Botium CLI (Command Line Interface)',
        'Verify your installation is working correctly',
        'Troubleshoot common installation problems'
      ],
      fiveWhys: [
        { 
          question: 'Why do I need Node.js?', 
          answer: "Botium is written in JavaScript, and Node.js is the platform that runs JavaScript outside of a web browser. Think of Node.js as the engine that powers Botium. Without it, Botium simply cannot run." 
        },
        { 
          question: 'What is npm and why do I need it?', 
          answer: "npm stands for Node Package Manager. It's like an app store for JavaScript tools. When you want to install Botium, you use npm to download and install it. npm also handles all the other pieces of software that Botium needs to work." 
        },
        { 
          question: 'What is the difference between global and local installation?', 
          answer: "A global installation puts Botium on your entire computer, so you can use it anywhere. A local installation puts it only in one project folder. We recommend global installation for beginners because it's simpler - you install once and use everywhere." 
        },
        { 
          question: 'Why do we install Botium CLI separately?', 
          answer: "Botium Core is the engine (library), and Botium CLI is the interface (commands). Core does the work, CLI lets you control it from the terminal. You need both: Core to run tests, CLI to give commands." 
        },
        { 
          question: 'What if the installation fails?', 
          answer: "Don't panic! Installation issues are common and usually easy to fix. Common problems include: old Node.js version, permission issues (especially on Mac/Linux), or network problems. We'll cover solutions for all of these." 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Installing Node.js (The Foundation)',
          content: "Node.js is the first thing we need to install. Let's do this step by step for each operating system.\n\n**For Windows Users:**\n\n1. Open your web browser\n2. Go to: https://nodejs.org/\n3. You'll see two download buttons:\n   - LTS (Long Term Support) - **CHOOSE THIS ONE**\n   - Current - Don't use this (it's less stable)\n4. Click the LTS button to download\n5. Run the downloaded file (nodejs-XX.XX.X-x64.msi)\n6. Click \"Next\" on each screen (default settings are fine)\n7. When asked about tools, check \"Automatically install necessary tools\"\n8. Click \"Install\" and wait\n9. Click \"Finish\"\n\n**For Mac Users:**\n\nOption 1 - Direct Download:\n1. Go to: https://nodejs.org/\n2. Click the LTS download button\n3. Open the downloaded .pkg file\n4. Follow the installer prompts\n\nOption 2 - Using Homebrew (if you have it):" + codeBlock("# Open Terminal and run:\nbrew install node", "bash") + "\n\n**For Linux Users (Ubuntu/Debian):**" + codeBlock("# Open Terminal and run these commands:\nsudo apt update\nsudo apt install nodejs npm", "bash") + "\n\n**Verifying Node.js Installation:**\n\nAfter installation, verify it worked:" + codeBlock("# Open Terminal (Mac/Linux) or Command Prompt (Windows)\n# Type this command and press Enter:\n\nnode --version\n\n# You should see something like:\nv20.10.0\n\n# Also check npm:\nnpm --version\n\n# You should see something like:\n10.2.0", "bash") + "\n\n**What These Version Numbers Mean:**\n- v20.10.0 means Node.js version 20.10.0\n- You need at least version 16 or higher for Botium\n- If your version is lower, download the latest from nodejs.org"
        },
        {
          title: 'Step 2: Understanding the Command Line Basics',
          content: "Before we continue, let's make sure you're comfortable with the command line.\n\n**Opening the Terminal/Command Line:**\n\n**Windows:**\n1. Press Windows key + R\n2. Type \"cmd\" and press Enter\n3. A black window will open - this is Command Prompt\n\n**Mac:**\n1. Press Command + Space (opens Spotlight)\n2. Type \"Terminal\" and press Enter\n3. A window will open - this is Terminal\n\n**Linux:**\n1. Press Ctrl + Alt + T\n2. Or find \"Terminal\" in your applications\n\n**Basic Commands You'll Need:**" + codeBlock("# See where you are (current folder)\nWindows: cd\nMac/Linux: pwd\n\n# List files in current folder\nWindows: dir\nMac/Linux: ls\n\n# Change to a different folder\ncd folder-name\n\n# Go back to previous folder\ncd ..\n\n# Go to home folder\nWindows: cd %USERPROFILE%\nMac/Linux: cd ~", "bash") + "\n\n**Creating a Test Folder:**\n\nLet's create a folder for our Botium learning:" + codeBlock("# Create a new folder\nmkdir botium-learning\n\n# Go into that folder\ncd botium-learning\n\n# Verify you're in the right place\nWindows: cd\nMac/Linux: pwd\n\n# Should show something like:\n# C:\\Users\\YourName\\botium-learning (Windows)\n# /home/yourname/botium-learning (Linux)\n# /Users/yourname/botium-learning (Mac)", "bash")
        },
        {
          title: 'Step 3: Installing Botium Core (Global Installation)',
          content: "Now let's install Botium Core. We'll install it globally so you can use it from anywhere.\n\n**The Installation Command:**" + codeBlock("npm install -g botium-core", "bash") + "\n\n**What This Command Means:**\n- npm: Use the Node Package Manager\n- install: We want to install something\n- -g: Install globally (on your whole computer)\n- botium-core: The name of the package to install\n\n**Running the Command:**" + codeBlock("# Open your Terminal/Command Prompt\n# Type this command and press Enter:\n\nnpm install -g botium-core\n\n# You'll see lots of text scrolling...\n# Wait for it to finish (may take 1-2 minutes)\n# When done, you'll see something like:\n\nadded 150 packages in 45s", "bash") + "\n\n**For Mac/Linux Users - If You Get Permission Error:**\n\nYou might see: \"EACCES: permission denied\"\n\nSolution 1 - Use sudo (quick fix):" + codeBlock("sudo npm install -g botium-core\n# Enter your password when prompted", "bash") + "\n\nSolution 2 - Fix npm permissions (better long-term):" + codeBlock("# Create a directory for global packages\nmkdir ~/.npm-global\n\n# Configure npm to use it\nnpm config set prefix '~/.npm-global'\n\n# Add to your PATH (add this line to ~/.bashrc or ~/.zshrc)\nexport PATH=~/.npm-global/bin:$PATH\n\n# Reload your shell\nsource ~/.bashrc  # or source ~/.zshrc\n\n# Now install without sudo\nnpm install -g botium-core", "bash")
        },
        {
          title: 'Step 4: Installing Botium CLI',
          content: "Botium CLI gives us commands to run tests. Let's install it.\n\n**The Installation Command:**" + codeBlock("npm install -g botium-cli", "bash") + "\n\n**Running the Command:**" + codeBlock("# In your Terminal/Command Prompt:\n\nnpm install -g botium-cli\n\n# Wait for installation to complete...\n# You should see:\n\nadded 50 packages in 20s", "bash") + "\n\n**Verifying CLI Installation:**" + codeBlock("# Check if botium-cli is installed:\n\nbotium-cli --version\n\n# You should see something like:\n1.0.0\n\n# If you see a version number, it's working!", "bash") + "\n\n**What Commands Does CLI Give Us?**" + codeBlock("# See all available commands:\nbotium-cli --help\n\n# You'll see:\nUsage: botium-cli [options] [command]\n\nCommands:\n  run          Run test cases\n  emulator     Interactive conversation mode\n  nlpanalytics Analyze NLP quality\n  import       Import test cases from chatbot\n  export       Export test cases\n  ...", "bash")
        },
        {
          title: 'Step 5: Installing the Echo Connector (For Testing)',
          content: "To verify our installation works, we'll install a simple connector called \"echo\" that just echoes back what you say.\n\n**Install Echo Connector:**" + codeBlock("npm install -g botium-connector-echo", "bash") + "\n\n**Why Echo Connector?**\n\n- It doesn't need any external services\n- It simply echoes back what you say\n- Perfect for testing that Botium is working\n- We'll use real connectors (Dialogflow, etc.) later\n\n**Verifying Everything is Installed:**" + codeBlock("# Check all installations:\n\nnode --version      # Should show v16+ \nnpm --version       # Should show 8+\nbotium-cli --version # Should show version number\n\n# List globally installed packages:\nnpm list -g --depth=0\n\n# You should see:\n├── botium-cli@X.X.X\n├── botium-connector-echo@X.X.X\n└── botium-core@X.X.X", "bash")
        },
        {
          title: 'Step 6: Your First Botium Test (Verification)',
          content: "Let's run a test to make sure everything works!\n\n**Step 6.1: Create a Test Folder**" + codeBlock("# Navigate to your botium-learning folder\ncd botium-learning\n\n# Create a folder for this test\nmkdir first-test\ncd first-test", "bash") + "\n\n**Step 6.2: Create the Configuration File**\n\nCreate a file called `botium.json`:" + codeBlock("{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"My First Botium Test\",\n      \"CONTAINERMODE\": \"echo\"\n    }\n  }\n}", "json") + "\n\n**How to create this file:**\n\nWindows:" + codeBlock("# Use notepad\nnotepad botium.json\n# Paste the JSON above, save and close", "bash") + "\n\nMac/Linux:" + codeBlock("# Use nano or any text editor\nnano botium.json\n# Paste the JSON above\n# Press Ctrl+X, then Y, then Enter to save", "bash") + "\n\n**Step 6.3: Create a Test Conversation**\n\nCreate a folder called `spec` and a test file:" + codeBlock("# Create spec folder\nmkdir spec\n\n# Create test file (Windows)\nnotepad spec/hello.convo.txt\n\n# Create test file (Mac/Linux)\nnano spec/hello.convo.txt", "bash") + "\n\nPut this in the file:" + codeBlock("Hello Test\n\n#me\nHello Botium!\n\n#bot\nYou said: Hello Botium!", "text") + "\n\n**Step 6.4: Run the Test!**" + codeBlock("# Make sure you're in the first-test folder\n# Run the test:\n\nbotium-cli run\n\n# You should see:\n✓ Hello Test (50ms)\n\n1 passing (200ms)", "bash") + "\n\n**Congratulations! If you see \"1 passing\", Botium is working!**"
        }
      ],
      codeExamples: [
        {
          title: 'Complete Installation Script (Copy-Paste Ready)',
          code: "# ===== BOTIUM INSTALLATION SCRIPT =====\n# Run these commands one by one\n\n# 1. Check Node.js (must be 16+)\nnode --version\n\n# 2. Install Botium Core globally\nnpm install -g botium-core\n\n# 3. Install Botium CLI\nnpm install -g botium-cli\n\n# 4. Install Echo Connector (for testing)\nnpm install -g botium-connector-echo\n\n# 5. Verify installations\nbotium-cli --version\n\n# 6. Create test folder\nmkdir ~/botium-learning\ncd ~/botium-learning\n\n# Done! Ready to write tests.",
          explanation: "Copy these commands and run them one by one in your terminal. This will set up a complete Botium environment."
        },
        {
          title: 'First Test - Complete Files',
          code: "// ===== FILE 1: botium.json =====\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"First Test\",\n      \"CONTAINERMODE\": \"echo\"\n    }\n  }\n}\n\n// ===== FILE 2: spec/hello.convo.txt =====\nHello Test\n\n#me\nHello World!\n\n#bot\nYou said: Hello World!",
          explanation: "These are the two files you need for your first test. The botium.json configures Botium, and the .convo.txt file defines the test conversation."
        }
      ],
      formulas: [
        {
          name: 'Installation Formula',
          formula: 'Node.js + npm + botium-core + botium-cli + connector = Ready to Test',
          explanation: 'You need all these components for a working Botium setup. Node.js runs JavaScript, npm installs packages, core is the engine, CLI is the interface, and connectors talk to chatbots.'
        }
      ],
      benefits: [
        'You have a complete Botium installation on your computer',
        'You understand what each component does',
        'You can run your first Botium test',
        'You know how to troubleshoot common installation problems',
        'You are ready to start writing real chatbot tests'
      ],
      commonMistakes: [
        'Using an old Node.js version (must be 16 or higher)',
        'Forgetting the -g flag for global installation',
        'Not having admin/sudo permissions for global installs',
        'Typos in package names (botium-core not botium_core)',
        'Running commands in the wrong directory',
        'Not creating the spec folder for test files'
      ],
      exercises: [
        {
          task: 'Complete the installation on your computer',
          deliverable: 'Screenshot showing botium-cli --version output',
          criteria: 'Version number is displayed without errors'
        },
        {
          task: 'Run your first test successfully',
          deliverable: 'Screenshot showing "1 passing" in terminal',
          criteria: 'The Hello Test passes with the echo connector'
        },
        {
          task: 'Create a second test',
          deliverable: 'A new test file that tests a different message',
          criteria: 'Both tests pass when running botium-cli run'
        }
      ],
      resources: [
        'Node.js Official Download: https://nodejs.org/',
        'npm Documentation: https://docs.npmjs.com/',
        'Botium Core npm: https://www.npmjs.com/package/botium-core',
        'Botium CLI npm: https://www.npmjs.com/package/botium-cli'
      ],
      keyTakeaways: [
        'Node.js is required - it runs Botium',
        'npm installs Botium and its dependencies',
        'Use -g flag for global installation',
        'You need both botium-core and botium-cli',
        'The echo connector is perfect for testing your installation',
        'Always verify with botium-cli --version'
      ]
    },

    'botium-basic-003': {
      title: 'Botium Core vs Box vs Bench',
      overview: "Botium comes in different flavors, and understanding which one to use is crucial for your testing strategy. In this lesson, we'll explore the three main Botium products in depth: Botium Core (the open-source engine), Botium Box (the enterprise web platform), and Botium Bench (the performance testing tool). By the end, you'll know exactly which tool to use for different scenarios.",
      objectives: [
        'Understand the core differences between Botium Core, Box, and Bench',
        'Know when to use each tool based on your needs',
        'Learn the advantages and limitations of each product',
        'Make informed decisions about which Botium product fits your project',
        'Understand the licensing and cost differences',
        'Plan your chatbot testing strategy effectively'
      ],
      fiveWhys: [
        { 
          question: 'Why are there multiple Botium products?', 
          answer: "Different teams have different needs. Developers prefer command-line tools and code. QA teams often prefer visual interfaces. Performance engineers need specialized load testing tools. Botium created products for each audience." 
        },
        { 
          question: "What's the main difference between Core and Box?", 
          answer: "Botium Core is a programming library and command-line tool - you work with it through code and terminal commands. Botium Box is a web application with buttons, forms, and dashboards. If you prefer clicking over coding, Box is easier. If you love the command line and want full control, Core is perfect." 
        },
        { 
          question: 'When would I need Botium Bench?', 
          answer: "Botium Bench is for load testing and performance measurement. Use it when you need to know: \"How many users can my chatbot handle at once?\" or \"How fast does my bot respond under pressure?\" If your chatbot will serve thousands of users, Bench is essential." 
        },
        { 
          question: 'Is Botium Box free or paid?', 
          answer: "Botium Box has both free (community) and paid (enterprise) versions. The free version has limitations on users and test runs. The paid version adds advanced features, more capacity, and support. Botium Core is completely free and open-source forever." 
        },
        { 
          question: 'Can I use Core and Box together?', 
          answer: "Yes! Many teams use Core for CI/CD integration (automated testing in their build pipeline) and Box for manual exploratory testing and reporting. They complement each other well. Box actually uses Core under the hood." 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Understanding the Botium Family (Simple Analogy)',
          content: "Let's start with a simple analogy that makes everything clear.\n\n**The Restaurant Kitchen Analogy**\n\nImagine you're running a restaurant kitchen:" + codeBlock("BOTIUM CORE = The Chef's Skills and Recipes\n├── This is the actual cooking knowledge\n├── The chef can cook any dish from any cuisine\n├── Works directly with ingredients (chatbots)\n└── The foundation everything else is built on\n\nBOTIUM BOX = The Restaurant Management System\n├── A tablet/computer for managing orders\n├── Anyone can use it, even non-chefs\n├── Shows nice dashboards and reports\n└── Makes the restaurant run smoothly\n\nBOTIUM BENCH = The Health Inspector / Quality Tester\n├── Tests how fast dishes come out\n├── Checks how many orders can be handled\n├── Measures quality under pressure\n└── Ensures everything works at scale") + "\n\n**In Technical Terms:**\n\n| Component | Type | Who Uses It | How You Use It |\n|-----------|------|-------------|----------------|\n| Botium Core | Library/Engine | Developers, Automation Engineers | Code, CLI commands |\n| Botium Box | Web Application | QA Teams, Managers, Anyone | Click buttons, fill forms |\n| Botium Bench | Performance Tool | Performance Engineers | Load test scenarios |\n\n**The Key Insight:**\n\nBotium Core is the BRAIN - it's what actually talks to chatbots and understands conversations.\nBox and Bench are just different INTERFACES to that brain."
        },
        {
          title: 'Step 2: Deep Dive into Botium Core',
          content: "Let's understand Botium Core in detail.\n\n**What Exactly IS Botium Core?**\n\nBotium Core is:\n- An npm package (JavaScript library)\n- The \"engine\" that connects to chatbots\n- The thing that sends messages and receives responses\n- Completely FREE and open-source" + codeBlock("HOW BOTIUM CORE WORKS:\n                                    \nYour Test Script ──> Botium Core ──> Connector ──> Your Chatbot\n    (what to say)     (engine)     (translator)    (being tested)\n                          │\n                          └── Validates the response") + "\n\n**What Botium Core Can Do:**\n\n1. **Connect to ANY chatbot platform:**\n   - Dialogflow, IBM Watson, Amazon Lex\n   - Microsoft Bot Framework, Rasa\n   - Custom chatbots via REST API\n   - And many more!\n\n2. **Run test conversations:**\n   - Send user messages\n   - Receive bot responses\n   - Check if responses are correct\n\n3. **Generate test cases:**\n   - Extract intents from your bot\n   - Create test variations automatically\n\n**The Core Components:**" + codeBlock("BOTIUM CORE PACKAGE INCLUDES:\n├── botium-core        ← The main library\n├── Connectors         ← Plugins for different chatbot platforms  \n├── Asserters          ← Ways to check responses\n├── Scripting Engine   ← Reads your test files\n└── Reporting          ← Outputs test results") + "\n\n**When to Use Botium Core:**\n\n✅ You're comfortable with command line\n✅ You want to integrate with CI/CD pipelines\n✅ You need maximum flexibility and control\n✅ You're a developer or automation engineer\n✅ Budget is limited (it's free!)\n\n❌ You prefer visual interfaces\n❌ Non-technical team members need access\n❌ You need built-in reporting dashboards"
        },
        {
          title: 'Step 3: Deep Dive into Botium Box',
          content: "Now let's explore Botium Box in detail.\n\n**What Exactly IS Botium Box?**\n\nBotium Box is:\n- A web-based application\n- A visual interface for chatbot testing\n- A collaboration platform for teams\n- Available as cloud service or self-hosted\n\n**The Botium Box Interface:**" + codeBlock("BOTIUM BOX MAIN SCREENS:\n\n┌─────────────────────────────────────────┐\n│  DASHBOARD                              │\n│  ├── Test Run Statistics                │\n│  ├── Pass/Fail Trends                   │\n│  └── Recent Activity                    │\n├─────────────────────────────────────────┤\n│  TEST SETS                              │\n│  ├── Create/Edit Tests Visually        │\n│  ├── Import from Chatbot               │\n│  └── Organize in Folders                │\n├─────────────────────────────────────────┤\n│  CHATBOTS                               │\n│  ├── Configure Connections              │\n│  ├── Manage Credentials                 │\n│  └── Test Connection                    │\n├─────────────────────────────────────────┤\n│  REPORTS                                │\n│  ├── Detailed Test Results              │\n│  ├── Export to PDF/HTML                 │\n│  └── Share with Team                    │\n└─────────────────────────────────────────┘") + "\n\n**What Botium Box Can Do:**\n\n1. **Visual Test Creation:**\n   - Point-and-click test building\n   - Conversation flow visualization\n   - No coding required for basic tests\n\n2. **Team Collaboration:**\n   - Multiple user accounts\n   - Role-based permissions\n   - Shared test libraries\n\n3. **Reporting & Analytics:**\n   - Beautiful dashboards\n   - Trend analysis over time\n   - Exportable reports\n\n4. **Chatbot Management:**\n   - Store configurations securely\n   - Quick-switch between bots\n   - Credential vault\n\n**Botium Box Editions:**" + codeBlock("COMMUNITY EDITION (Free)\n├── Limited to 100 test runs/month\n├── 1 user\n├── Basic features\n└── Good for learning and small projects\n\nENTERPRISE EDITION (Paid)\n├── Unlimited test runs\n├── Multiple users with roles\n├── Advanced analytics\n├── Priority support\n├── SSO integration\n└── For production use") + "\n\n**When to Use Botium Box:**\n\n✅ Non-technical team members need to write tests\n✅ You need beautiful reports for stakeholders\n✅ Team collaboration is important\n✅ You prefer clicking over coding\n✅ You need a quick start without setup\n\n❌ You need full programmatic control\n❌ Budget is extremely limited\n❌ You only need CI/CD integration"
        },
        {
          title: 'Step 4: Deep Dive into Botium Bench',
          content: "Let's understand Botium Bench and performance testing.\n\n**What Exactly IS Botium Bench?**\n\nBotium Bench is:\n- A performance and load testing tool\n- Specifically designed for chatbots\n- Tests how bots perform under stress\n- Measures response times and throughput" + codeBlock("BOTIUM BENCH ANSWERS THESE QUESTIONS:\n\n1. How many concurrent users can my bot handle?\n   └── Can it handle 100? 1000? 10000 users at once?\n\n2. How fast does my bot respond under load?\n   └── 200ms? 2 seconds? Does it degrade?\n\n3. At what point does my bot break?\n   └── When does it start failing or timing out?\n\n4. How does response time change with load?\n   └── Fast with 10 users, slow with 1000?") + "\n\n**Why Performance Testing Matters for Chatbots:**" + codeBlock("SCENARIO WITHOUT PERFORMANCE TESTING:\n\nBlack Friday Sale:\n├── Normal days: 100 users/hour → Bot works fine\n├── Black Friday: 10,000 users/hour → ???\n├── Bot crashes → Angry customers\n├── Lost sales → Lost money\n└── Bad reviews → Damaged reputation\n\nSCENARIO WITH PERFORMANCE TESTING:\n\nBlack Friday Sale:\n├── You tested with 20,000 simulated users\n├── You know bot handles 15,000/hour max\n├── You scaled up infrastructure before the sale\n├── Bot handles traffic smoothly\n└── Happy customers!") + "\n\n**Botium Bench Metrics:**" + codeBlock("WHAT BOTIUM BENCH MEASURES:\n\n1. RESPONSE TIME\n   ├── Average response time\n   ├── 90th percentile (90% of responses faster than this)\n   ├── 99th percentile (99% of responses faster than this)\n   └── Maximum response time\n\n2. THROUGHPUT\n   ├── Conversations per second\n   ├── Messages per minute\n   └── Successful vs failed responses\n\n3. ERROR RATE\n   ├── Percentage of failed requests\n   ├── Types of errors\n   └── When errors start occurring\n\n4. RESOURCE USAGE\n   ├── Bot's CPU usage\n   ├── Memory consumption\n   └── Network bandwidth") + "\n\n**When to Use Botium Bench:**\n\n✅ Your bot will serve many concurrent users\n✅ Response time is critical for user experience\n✅ You're launching a high-traffic application\n✅ You need to know your bot's limits\n✅ You're planning for scaling\n\n❌ You have a small, internal bot\n❌ You're still in early development\n❌ Performance isn't a concern yet"
        },
        {
          title: 'Step 5: Comparison Chart & Decision Guide',
          content: "Let's put everything together with a comprehensive comparison.\n\n**Side-by-Side Comparison:**" + codeBlock("FEATURE                    CORE      BOX       BENCH\n─────────────────────────────────────────────────────\nFunctional Testing          ✅        ✅         ❌\nPerformance Testing         ❌        ❌         ✅\nCommand Line Interface      ✅        ❌         ✅\nWeb Interface              ❌        ✅         ✅\nFree/Open Source           ✅        ⚠️*        ❌\nVisual Test Editor         ❌        ✅         ❌\nCI/CD Integration          ✅        ✅         ✅\nTeam Collaboration         ❌        ✅         ✅\nReporting Dashboards       ⚠️**      ✅         ✅\nLoad Testing               ❌        ❌         ✅\nNLP Analytics              ✅        ✅         ❌\n─────────────────────────────────────────────────────\n\n* Box has free Community Edition with limits\n** Core can output reports but no built-in dashboards") + "\n\n**Decision Flowchart:**" + codeBlock("START\n  │\n  ▼\nDo you need performance/load testing?\n  │\n  ├── YES ──────────────────────────> Use BOTIUM BENCH\n  │\n  ▼ NO\nDo you prefer visual interfaces over command line?\n  │\n  ├── YES ──────────────────────────> Use BOTIUM BOX\n  │\n  ▼ NO\nDo you need team collaboration features?\n  │\n  ├── YES ──────────────────────────> Consider BOTIUM BOX\n  │\n  ▼ NO\nAre you integrating with CI/CD pipelines?\n  │\n  ├── YES ──────────────────────────> Use BOTIUM CORE\n  │\n  ▼ NO\nIs budget a major concern?\n  │\n  ├── YES ──────────────────────────> Use BOTIUM CORE (free!)\n  │\n  ▼ NO\nStart with BOTIUM CORE, upgrade to BOX if needed") + "\n\n**Cost Comparison:**" + codeBlock("BOTIUM CORE\n├── Cost: $0 (Forever free, open source)\n├── Support: Community forums, GitHub issues\n└── Best for: Developers, startups, CI/CD\n\nBOTIUM BOX COMMUNITY\n├── Cost: $0 (Limited features)\n├── Limits: 100 test runs/month, 1 user\n└── Best for: Learning, small projects\n\nBOTIUM BOX ENTERPRISE\n├── Cost: Contact sales (varies by usage)\n├── Includes: Unlimited runs, team features, support\n└── Best for: Enterprise teams, production use\n\nBOTIUM BENCH\n├── Cost: Subscription-based\n├── Pricing: Based on concurrent virtual users\n└── Best for: High-traffic bots, production systems")
        }
      ],
      codeExamples: [
        {
          title: 'Botium Core Example - Full Test Setup',
          code: "// Using Botium Core programmatically (JavaScript)\n\nconst BotiumBindings = require('botium-bindings');\nconst { BotDriver } = require('botium-core');\n\n// Create driver with configuration\nconst driver = new BotDriver({\n  CONTAINERMODE: 'echo',\n  PROJECTNAME: 'My Test'\n});\n\n// Run a test programmatically\nasync function runTest() {\n  const container = await driver.Build();\n  await container.Start();\n  \n  // Send a message\n  await container.UserSays({ messageText: 'Hello' });\n  \n  // Wait for response\n  const response = await container.WaitBotSays();\n  console.log('Bot said:', response.messageText);\n  \n  await container.Stop();\n}\n\nrunTest();",
          explanation: "This shows how to use Botium Core as a JavaScript library for maximum control. You can integrate this into any Node.js application."
        },
        {
          title: 'Botium Core CLI Example',
          code: "# Create test folder structure\nmkdir my-bot-tests\ncd my-bot-tests\n\n# Create configuration\ncat > botium.json << 'EOF'\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"My Bot Tests\",\n      \"CONTAINERMODE\": \"echo\"\n    }\n  }\n}\nEOF\n\n# Create test file\nmkdir spec\ncat > spec/greeting.convo.txt << 'EOF'\nGreeting Test\n\n#me\nHello\n\n#bot\nYou said: Hello\nEOF\n\n# Run tests\nbotium-cli run\n\n# Generate JUnit report for CI/CD\nbotium-cli run --output junit --output-file results.xml",
          explanation: "This shows how to use Botium CLI for command-line testing. Perfect for CI/CD pipelines like Jenkins, GitHub Actions, etc."
        }
      ],
      formulas: [
        {
          name: 'Tool Selection Formula',
          formula: 'Right Tool = Your Skills + Team Needs + Budget + Use Case',
          explanation: 'Choose based on your technical comfort (CLI vs GUI), team size and roles, available budget, and whether you need functional or performance testing.'
        },
        {
          name: 'Testing Stack Formula',
          formula: 'Complete Strategy = Core (CI/CD) + Box (Collaboration) + Bench (Performance)',
          explanation: 'For comprehensive testing, many organizations use all three: Core for automated pipelines, Box for team collaboration, and Bench for performance validation.'
        }
      ],
      benefits: [
        'You understand the purpose of each Botium product',
        'You can make informed decisions about which tool to use',
        'You know the cost implications of each choice',
        'You can recommend the right tool for different teams',
        'You understand how the products work together'
      ],
      commonMistakes: [
        'Thinking you must choose only one (they work together!)',
        'Using Box when CLI would be simpler for automation',
        'Skipping performance testing for high-traffic bots',
        'Paying for Box when Core meets all your needs',
        'Not considering team skills when choosing tools'
      ],
      exercises: [
        {
          task: 'Analyze your testing needs',
          deliverable: 'A written assessment of which Botium product(s) fit your current project',
          criteria: 'Consider team size, technical skills, budget, and testing requirements'
        },
        {
          task: 'Try Botium Core',
          deliverable: 'Run at least 5 test cases using botium-cli',
          criteria: 'All tests pass and you can explain what each test does'
        },
        {
          task: 'Explore Botium Box',
          deliverable: 'Create a free account and run the sample test project',
          criteria: 'Navigate the interface and generate a test report'
        }
      ],
      resources: [
        'Botium Core GitHub: https://github.com/codeforequity-at/botium-core',
        'Botium Box: https://www.botium.ai/botium-box/',
        'Botium Documentation: https://botium-docs.readthedocs.io/',
        'Botium Pricing: https://www.botium.ai/pricing/'
      ],
      keyTakeaways: [
        'Botium Core = Free, open-source, command-line, for developers',
        'Botium Box = Web interface, team collaboration, visual testing',
        'Botium Bench = Performance and load testing for scalability',
        'Core is the engine that powers both Box and Bench',
        'You can use multiple products together for comprehensive testing',
        'Start with Core (free), upgrade to Box/Bench when needed'
      ]
    },

    'botium-int-004': {
      title: 'Understanding Botium Connectors',
      overview: "Connectors are the bridge between Botium and your chatbot. They translate Botium's commands into the language your chatbot understands. In this lesson, we'll explore what connectors are, how they work, and how to choose the right one for your chatbot platform.",
      objectives: [
        'Understand what Botium connectors are and why they exist',
        'Learn the architecture of connectors',
        'Know which connector to use for popular chatbot platforms',
        'Install and configure connectors',
        'Troubleshoot common connector issues',
        'Understand how to use the HTTP/REST connector for custom bots'
      ],
      fiveWhys: [
        { 
          question: 'What exactly is a connector?', 
          answer: "A connector is a plugin that translates Botium's universal test commands into the specific API calls your chatbot platform understands. Think of it as a translator between Botium and your chatbot." 
        },
        { 
          question: 'Why do we need different connectors?', 
          answer: "Every chatbot platform has its own way of receiving messages and sending responses. Dialogflow uses Google APIs, Watson uses IBM APIs, Alexa uses Amazon APIs. Connectors handle these differences so you can write tests once and run them anywhere." 
        },
        { 
          question: 'Which connector should I use?', 
          answer: "Use the connector that matches your chatbot platform. If your bot is built on Dialogflow, use botium-connector-dialogflow. If it's a custom REST API bot, use botium-connector-http. We'll provide a complete list in this lesson." 
        },
        { 
          question: 'What if there is no connector for my bot?', 
          answer: "You have two options: use the HTTP/REST connector (works with any API-based bot) or create a custom connector. The HTTP connector covers 90% of cases for custom bots." 
        },
        { 
          question: 'How do connectors handle authentication?', 
          answer: "Each connector has its own way of handling authentication. Some use API keys, some use OAuth, some use service accounts. The connector documentation tells you exactly what credentials you need." 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: The Connector Concept (Simple Analogy)',
          content: "Let's understand connectors with a simple analogy.\n\n**The Universal Remote Analogy:**\n\nImagine you have a universal TV remote. This remote can control any TV - Samsung, LG, Sony, etc. How does it work?\n\n- The remote has \"profiles\" for each TV brand\n- When you select \"Samsung mode\", it sends Samsung-compatible signals\n- When you select \"LG mode\", it sends LG-compatible signals\n- You press the same buttons, but the signals are different\n\n**Botium Connectors Work The Same Way:**" + codeBlock("                 YOUR TEST\n                    │\n            \"Send: Hello\"\n                    │\n                    ▼\n              BOTIUM CORE\n                    │\n        ┌───────────┼───────────┐\n        │           │           │\n        ▼           ▼           ▼\n   Dialogflow   Watson     Alexa\n   Connector   Connector  Connector\n        │           │           │\n   Uses Google  Uses IBM   Uses Amazon\n   API calls    API calls   API calls\n        │           │           │\n        ▼           ▼           ▼\n   Dialogflow    Watson     Alexa\n   Chatbot       Chatbot    Skill") + "\n\n**The Key Insight:**\n\nYou write your test ONCE. The connector translates it to the right format for each platform. This is why Botium is \"platform agnostic\" - it works with ANY chatbot!"
        },
        {
          title: 'Step 2: Available Connectors (Complete List)',
          content: "Here's a complete list of official Botium connectors and when to use each.\n\n**Tier 1: Major Platforms (Most Popular):**" + codeBlock("CONNECTOR                    CHATBOT PLATFORM\n───────────────────────────────────────────────\nbotium-connector-dialogflow  Google Dialogflow ES & CX\nbotium-connector-watson      IBM Watson Assistant\nbotium-connector-alexa       Amazon Alexa Skills\nbotium-connector-lex         Amazon Lex (v1 & v2)\nbotium-connector-azure       Microsoft Bot Framework\nbotium-connector-rasa        Rasa Open Source") + "\n\n**Tier 2: Generic Connectors (For Custom Bots):**" + codeBlock("CONNECTOR                    USE CASE\n───────────────────────────────────────────────\nbotium-connector-http        Any REST API chatbot\nbotium-connector-websocket   WebSocket-based bots\nbotium-connector-webdriverio Browser-based bots\nbotium-connector-echo        Testing (echoes input)") + "\n\n**Tier 3: Specialized Platforms:**" + codeBlock("CONNECTOR                    PLATFORM\n───────────────────────────────────────────────\nbotium-connector-directline  MS Direct Line (Teams, etc.)\nbotium-connector-botkit      Botkit framework\nbotium-connector-fbmessenger Facebook Messenger\nbotium-connector-twilio      Twilio Autopilot\nbotium-connector-kore        Kore.ai") + "\n\n**How To Choose:**" + codeBlock("DECISION TREE:\n\n1. Is your bot on a major platform (Dialogflow, Watson, etc.)?\n   └── YES → Use the platform-specific connector\n\n2. Is your bot a REST API?\n   └── YES → Use botium-connector-http\n\n3. Is your bot WebSocket-based?\n   └── YES → Use botium-connector-websocket\n\n4. Is your bot embedded in a web page?\n   └── YES → Use botium-connector-webdriverio\n\n5. Not sure?\n   └── Try botium-connector-http first (works for most cases)")
        },
        {
          title: 'Step 3: Installing Connectors',
          content: "Let's learn how to install connectors.\n\n**Basic Installation Pattern:**" + codeBlock("# Global installation (recommended for beginners)\nnpm install -g botium-connector-PLATFORM\n\n# Examples:\nnpm install -g botium-connector-dialogflow\nnpm install -g botium-connector-watson\nnpm install -g botium-connector-http", "bash") + "\n\n**Local Installation (for project-specific):**" + codeBlock("# Inside your project folder\nnpm install botium-connector-PLATFORM\n\n# Or save as dev dependency\nnpm install --save-dev botium-connector-dialogflow", "bash") + "\n\n**Verifying Installation:**" + codeBlock("# List all installed connectors\nnpm list -g 2>/dev/null | grep botium-connector\n\n# You should see:\n├── botium-connector-dialogflow@X.X.X\n├── botium-connector-echo@X.X.X\n└── botium-connector-http@X.X.X", "bash") + "\n\n**Common Installation Issues:**" + codeBlock("PROBLEM: npm install fails with permission error\nSOLUTION: Use sudo (Mac/Linux) or run as admin (Windows)\n\nsudo npm install -g botium-connector-dialogflow\n\n---\n\nPROBLEM: Connector not found when running tests\nSOLUTION: Make sure CONTAINERMODE matches connector name\n\n// botium.json\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"CONTAINERMODE\": \"dialogflow\"  // Must match!\n    }\n  }\n}", "bash")
        },
        {
          title: 'Step 4: Configuring Connectors (With Examples)',
          content: "Each connector requires specific configuration. Let's look at the most common ones.\n\n**Echo Connector (For Learning):**" + codeBlock("// botium.json - Echo connector (simplest)\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"Echo Test\",\n      \"CONTAINERMODE\": \"echo\"\n    }\n  }\n}\n\n// No credentials needed - just echoes back input!", "json") + "\n\n**Dialogflow ES Connector:**" + codeBlock("// botium.json - Dialogflow ES\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"Dialogflow Test\",\n      \"CONTAINERMODE\": \"dialogflow\",\n      \"DIALOGFLOW_PROJECT_ID\": \"your-project-id\",\n      \"DIALOGFLOW_CLIENT_EMAIL\": \"your-service-account@your-project.iam.gserviceaccount.com\",\n      \"DIALOGFLOW_PRIVATE_KEY\": \"-----BEGIN PRIVATE KEY-----\\nYOUR_PRIVATE_KEY_HERE\\n-----END PRIVATE KEY-----\\n\"\n    }\n  }\n}\n\n// How to get these credentials:\n// 1. Go to Google Cloud Console\n// 2. Navigate to IAM & Admin > Service Accounts\n// 3. Create new service account\n// 4. Download JSON key file\n// 5. Copy values from the JSON file", "json") + "\n\n**HTTP/REST Connector (For Custom Bots):**" + codeBlock("// botium.json - HTTP connector\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"Custom Bot Test\",\n      \"CONTAINERMODE\": \"http\",\n      \"HTTP_ENDPOINT\": \"https://your-bot-api.com/chat\",\n      \"HTTP_METHOD\": \"POST\",\n      \"HTTP_HEADERS\": {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"Bearer YOUR_API_KEY\"\n      },\n      \"HTTP_BODY_TEMPLATE\": \"{ \\\"message\\\": \\\"{{msg.messageText}}\\\", \\\"userId\\\": \\\"{{botium.conversationId}}\\\" }\",\n      \"HTTP_RESPONSE_JSONPATH\": \"$.response.text\"\n    }\n  }\n}\n\n// This works with ANY REST API chatbot!", "json") + "\n\n**Watson Assistant Connector:**" + codeBlock("// botium.json - Watson Assistant\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"Watson Test\",\n      \"CONTAINERMODE\": \"watson\",\n      \"WATSON_APIKEY\": \"your-api-key-here\",\n      \"WATSON_URL\": \"https://api.us-south.assistant.watson.cloud.ibm.com\",\n      \"WATSON_ASSISTANT_ID\": \"your-assistant-id\"\n    }\n  }\n}\n\n// How to get these:\n// 1. IBM Cloud Dashboard\n// 2. Open your Watson Assistant service\n// 3. Go to Settings\n// 4. Copy API Key and URL", "json")
        },
        {
          title: 'Step 5: Testing Your Connector Setup',
          content: "After configuration, let's verify the connector works.\n\n**Step-by-Step Verification:**" + codeBlock("# Step 1: Create a simple test file\nmkdir spec\n\ncat > spec/connection-test.convo.txt << 'EOF'\nConnection Test\n\n#me\nHello\n\n#bot\n*\nEOF", "bash") + "\n\n**What the * wildcard means:**\n- * matches ANY response\n- We use it first to test the connection works\n- If the bot responds with ANYTHING, the test passes\n- Later we'll replace * with actual expected responses\n\n**Running the Test:**" + codeBlock("# Run the test\nbotium-cli run\n\n# SUCCESS looks like:\n✓ Connection Test (500ms)\n1 passing (1s)\n\n# FAILURE might look like:\n✗ Connection Test\n  Error: Authentication failed\n  # This means credentials are wrong", "bash") + "\n\n**Using the Emulator (Interactive Testing):**" + codeBlock("# Start interactive mode\nbotium-cli emulator\n\n# You'll see:\n> Botium> \n\n# Type messages and see responses:\nBotium> Hello\nBot: Hi there! How can I help?\n\n# This is great for debugging connections!\n# Type 'exit' to quit", "bash") + "\n\n**Debugging Connection Issues:**" + codeBlock("# Enable verbose output\nbotium-cli run --verbose\n\n# Enable debug mode (shows all API calls)\nDEBUG=botium* botium-cli run\n\n# This shows exactly what Botium is sending\n# and what it's receiving back", "bash")
        }
      ],
      codeExamples: [
        {
          title: 'Complete Connector Setup Checklist',
          code: "# CONNECTOR SETUP CHECKLIST\n\n# 1. Install the connector\nnpm install -g botium-connector-YOURPLATFORM\n\n# 2. Create project folder\nmkdir my-bot-tests && cd my-bot-tests\n\n# 3. Create botium.json with correct CONTAINERMODE\n# (use examples from this lesson)\n\n# 4. Create test folder and file\nmkdir spec\necho 'Test\\n\\n#me\\nHello\\n\\n#bot\\n*' > spec/test.convo.txt\n\n# 5. Test the connection\nbotium-cli run\n\n# 6. If it fails, debug with:\nDEBUG=botium* botium-cli run\n\n# 7. If it passes, replace * with real expectations\n# 8. Build out your test suite!",
          explanation: "Follow this checklist every time you set up a new connector. It ensures you don't miss any steps."
        },
        {
          title: 'HTTP Connector Template',
          code: "// Universal HTTP connector template\n// Works with most REST API chatbots\n\n{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"My REST Bot\",\n      \"CONTAINERMODE\": \"http\",\n      \n      // Basic settings\n      \"HTTP_ENDPOINT\": \"https://your-api.com/chat\",\n      \"HTTP_METHOD\": \"POST\",\n      \n      // Headers (customize as needed)\n      \"HTTP_HEADERS\": {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"Bearer ${API_KEY}\"\n      },\n      \n      // Request body template\n      // {{msg.messageText}} = user's message\n      // {{botium.conversationId}} = unique session ID\n      \"HTTP_BODY_TEMPLATE\": {\n        \"message\": \"{{msg.messageText}}\",\n        \"sessionId\": \"{{botium.conversationId}}\"\n      },\n      \n      // How to find bot's response in API response\n      // Adjust based on your API's response format\n      \"HTTP_RESPONSE_JSONPATH\": \"$.response.text\"\n    }\n  }\n}",
          explanation: "This template works with most REST API chatbots. Just customize the endpoint, headers, body format, and response path."
        }
      ],
      formulas: [
        {
          name: 'Connector Selection Formula',
          formula: 'Known Platform → Platform Connector | Unknown/Custom → HTTP Connector',
          explanation: 'If your bot is on a known platform, use its connector. For custom bots, the HTTP connector almost always works.'
        }
      ],
      benefits: [
        'You understand what connectors are and how they work',
        'You can choose the right connector for any chatbot',
        'You can install and configure connectors',
        'You know how to troubleshoot connection issues',
        'You can use the HTTP connector for custom bots'
      ],
      commonMistakes: [
        'Installing connector but forgetting to set CONTAINERMODE',
        'Typos in connector names (dialogflow not DialogFlow)',
        'Wrong credentials or expired API keys',
        'Not matching HTTP_RESPONSE_JSONPATH to actual response format',
        'Forgetting to install connector before using it'
      ],
      exercises: [
        {
          task: 'Set up the Echo connector',
          deliverable: 'Working echo connector with 3 passing tests',
          criteria: 'All tests pass and you understand the configuration'
        },
        {
          task: 'Configure the HTTP connector',
          deliverable: 'HTTP connector configured for a public bot API',
          criteria: 'Successfully connect and get responses from a real API'
        },
        {
          task: 'Debug a failing connection',
          deliverable: 'Use DEBUG mode to identify and fix a configuration error',
          criteria: 'Show the debug output and explain what was wrong'
        }
      ],
      resources: [
        'Botium Connectors List: https://github.com/codeforequity-at/botium-core/wiki/Botium-Connectors',
        'HTTP Connector Guide: https://github.com/codeforequity-at/botium-connector-http',
        'Dialogflow Connector: https://github.com/codeforequity-at/botium-connector-dialogflow',
        'Watson Connector: https://github.com/codeforequity-at/botium-connector-watson'
      ],
      keyTakeaways: [
        'Connectors translate between Botium and chatbot platforms',
        'Use platform-specific connectors when available',
        'HTTP connector works for most custom REST API bots',
        'CONTAINERMODE must match the connector name',
        'Use emulator and debug mode to troubleshoot connections'
      ]
    },

    'botium-int-005': {
      title: 'Setting Up Your First Botium Project',
      overview: "Now it's time to create your first real Botium project! In this hands-on lesson, we'll set up a complete project structure, write test conversations, run tests, and interpret results. By the end, you'll have a working project template you can use for any chatbot testing.",
      objectives: [
        'Create a proper Botium project structure',
        'Write test conversations in BotiumScript format',
        'Run tests and understand the output',
        'Organize tests into logical groups',
        'Generate test reports',
        'Build a reusable project template'
      ],
      fiveWhys: [
        { 
          question: 'What files do I need in a Botium project?', 
          answer: "At minimum, you need botium.json (configuration) and at least one .convo.txt file (test conversations). A well-organized project also has folders for different test types, utilities, and reports." 
        },
        { 
          question: 'Why use .convo.txt format?', 
          answer: "BotiumScript (.convo.txt) is designed specifically for conversation testing. It's human-readable, easy to write, and supports advanced features like wildcards, assertions, and multi-turn dialogues. It's much simpler than writing code." 
        },
        { 
          question: 'How should I organize my tests?', 
          answer: "Organize by feature, intent, or user journey. For example: greetings/, faq/, ordering/, errors/. This makes it easy to run specific test groups and maintain the test suite as it grows." 
        },
        { 
          question: 'What do test results mean?', 
          answer: "Passing means the bot responded as expected. Failing means it didn't. The output shows exactly what was expected vs. what was received, making debugging straightforward." 
        },
        { 
          question: 'How do I share test reports?', 
          answer: "Botium can generate reports in multiple formats: JUnit XML (for CI/CD), JSON (for processing), HTML (for stakeholders). You specify the format when running tests." 
        }
      ],
      detailedContent: [
        {
          title: 'Step 1: Creating the Project Structure',
          content: "Let's create a professional project structure.\n\n**The Recommended Structure:**" + codeBlock("my-chatbot-tests/\n├── botium.json           # Main configuration\n├── botium.local.json     # Local overrides (gitignored)\n├── package.json          # npm project file\n├── README.md             # Project documentation\n├── spec/                 # All test files\n│   ├── greetings/       # Greeting tests\n│   │   ├── hello.convo.txt\n│   │   └── goodbye.convo.txt\n│   ├── faq/             # FAQ tests\n│   │   ├── hours.convo.txt\n│   │   └── location.convo.txt\n│   ├── flows/           # Multi-turn flows\n│   │   └── order-pizza.convo.txt\n│   └── errors/          # Error handling tests\n│       └── invalid-input.convo.txt\n├── reports/             # Generated reports\n└── scripts/             # Helper scripts") + "\n\n**Creating This Structure:**" + codeBlock("# Create main folder\nmkdir my-chatbot-tests\ncd my-chatbot-tests\n\n# Initialize npm project\nnpm init -y\n\n# Install Botium locally\nnpm install --save-dev botium-core botium-cli\n\n# Create folder structure\nmkdir -p spec/greetings spec/faq spec/flows spec/errors\nmkdir reports scripts\n\n# Create placeholder files\ntouch README.md botium.json", "bash") + "\n\n**Why This Structure?**\n\n1. **spec/** - Standard testing convention (like RSpec, Jasmine)\n2. **Subfolders** - Group related tests together\n3. **reports/** - Keep generated reports separate\n4. **scripts/** - Helper scripts for common tasks\n5. **botium.local.json** - Local settings that shouldn't be in git"
        },
        {
          title: 'Step 2: Creating the Configuration File',
          content: "Let's create a comprehensive botium.json.\n\n**Basic Configuration:**" + codeBlock("{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"My Chatbot Tests\",\n      \"CONTAINERMODE\": \"echo\",\n      \"WAITFORBOTTIMEOUT\": 10000\n    },\n    \"Sources\": {\n      \"LOCALPATH\": \"./spec\",\n      \"RECURSIVE\": true\n    }\n  }\n}", "json") + "\n\n**What Each Setting Does:**" + codeBlock("SETTING              MEANING\n─────────────────────────────────────────────────\nPROJECTNAME          Shows in reports/logs\nCONTAINERMODE        Which connector to use\nWAITFORBOTTIMEOUT    Max wait for response (ms)\nLOCALPATH            Where test files are\nRECURSIVE            Include subfolders?") + "\n\n**Production Configuration Example:**" + codeBlock("{\n  \"botium\": {\n    \"Capabilities\": {\n      \"PROJECTNAME\": \"Production Bot Regression\",\n      \"CONTAINERMODE\": \"dialogflow\",\n      \n      \"DIALOGFLOW_PROJECT_ID\": \"$DIALOGFLOW_PROJECT_ID\",\n      \"DIALOGFLOW_CLIENT_EMAIL\": \"$DIALOGFLOW_CLIENT_EMAIL\",\n      \"DIALOGFLOW_PRIVATE_KEY\": \"$DIALOGFLOW_PRIVATE_KEY\",\n      \n      \"WAITFORBOTTIMEOUT\": 15000,\n      \"RETRY\": 2\n    },\n    \"Sources\": {\n      \"LOCALPATH\": \"./spec\",\n      \"RECURSIVE\": true,\n      \"FILTER\": \"*.convo.txt\"\n    }\n  }\n}", "json") + "\n\n**Using Environment Variables:**\n\nNotice the $VARIABLE syntax? This lets you keep secrets out of your config:\n" + codeBlock("# Set environment variables\nexport DIALOGFLOW_PROJECT_ID=\"my-project\"\nexport DIALOGFLOW_CLIENT_EMAIL=\"my-sa@my-project.iam.gserviceaccount.com\"\nexport DIALOGFLOW_PRIVATE_KEY=\"-----BEGIN PRIVATE KEY-----...\"\n\n# Now botium.json will use these values", "bash")
        },
        {
          title: 'Step 3: Writing Your First Test Conversations',
          content: "Let's write some real test conversations.\n\n**Simple Greeting Test:**" + codeBlock("# File: spec/greetings/hello.convo.txt\n\nHello Greeting Test\n\n#me\nHello\n\n#bot\nHi there! How can I help you today?", "text") + "\n\n**FAQ Test with Partial Match:**" + codeBlock("# File: spec/faq/hours.convo.txt\n\nStore Hours Query\n\n#me\nWhat are your store hours?\n\n#bot\n9 AM", "text") + "\n\n**Note:** The bot response \"9 AM\" will match any response containing \"9 AM\". The bot could say \"We're open from 9 AM to 5 PM\" and it would still pass!\n\n**Multi-Turn Conversation:**" + codeBlock("# File: spec/flows/order-pizza.convo.txt\n\nPizza Order Flow\n\n#me\nI want to order a pizza\n\n#bot\nWhat size would you like?\n\n#me\nLarge\n\n#bot\nWhat toppings?\n\n#me\nPepperoni and mushrooms\n\n#bot\npizza\norder", "text") + "\n\n**Error Handling Test:**" + codeBlock("# File: spec/errors/invalid-input.convo.txt\n\nInvalid Input Handling\n\n#me\nasdfghjkl\n\n#bot\nsorry\nunderstand", "text") + "\n\n**Understanding the Format:**" + codeBlock("LINE 1: Test name (required)\n        ↓\nBLANK LINE (required)\n        ↓\n#me\n        ↓\nUser message (what user says)\n        ↓\nBLANK LINE (optional but recommended)\n        ↓\n#bot\n        ↓\nExpected response (words to look for)")
        },
        {
          title: 'Step 4: Running Tests and Understanding Output',
          content: "Let's run tests and interpret the results.\n\n**Basic Test Run:**" + codeBlock("# Run all tests\nbotium-cli run\n\n# Output:\n  Greeting Test\n    ✓ Hello Greeting Test (120ms)\n\n  FAQ Tests\n    ✓ Store Hours Query (85ms)\n\n  Order Flow\n    ✓ Pizza Order Flow (340ms)\n\n  Error Handling\n    ✓ Invalid Input Handling (95ms)\n\n  4 passing (640ms)", "bash") + "\n\n**When a Test Fails:**" + codeBlock("  Greeting Test\n    ✗ Hello Greeting Test\n      Expected: Hi there!\n      Actual: Good morning! What can I do for you?\n      \n      AssertionError: Expected bot response to contain \"Hi there!\"\n      but got \"Good morning! What can I do for you?\"\n\n  0 passing\n  1 failing", "bash") + "\n\n**Verbose Output (For Debugging):**" + codeBlock("# Run with verbose flag\nbotium-cli run --verbose\n\n# Shows:\n# - Exact messages sent\n# - Exact responses received\n# - Timing for each step\n# - Connector actions", "bash") + "\n\n**Running Specific Tests:**" + codeBlock("# Run tests from a specific folder\nbotium-cli run --spec spec/greetings/\n\n# Run a specific test file\nbotium-cli run --spec spec/faq/hours.convo.txt\n\n# Run tests matching a pattern\nbotium-cli run --filter \"*order*\"", "bash")
        },
        {
          title: 'Step 5: Generating Reports',
          content: "Let's generate professional test reports.\n\n**JUnit XML (For CI/CD):**" + codeBlock("# Generate JUnit report\nbotium-cli run --output junit --output-file reports/junit.xml\n\n# This works with:\n# - Jenkins\n# - GitHub Actions\n# - GitLab CI\n# - Azure DevOps\n# - Any CI tool that reads JUnit XML", "bash") + "\n\n**JSON Report (For Processing):**" + codeBlock("# Generate JSON report\nbotium-cli run --output json --output-file reports/results.json\n\n# Use this to:\n# - Process results programmatically\n# - Create custom dashboards\n# - Integrate with other tools", "bash") + "\n\n**Multiple Outputs:**" + codeBlock("# Generate multiple formats at once\nbotium-cli run \\\n  --output junit --output-file reports/junit.xml \\\n  --output json --output-file reports/results.json", "bash") + "\n\n**Sample JUnit Output:**" + codeBlock("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<testsuites>\n  <testsuite name=\"My Chatbot Tests\" tests=\"4\" failures=\"0\" time=\"0.640\">\n    <testcase name=\"Hello Greeting Test\" time=\"0.120\"/>\n    <testcase name=\"Store Hours Query\" time=\"0.085\"/>\n    <testcase name=\"Pizza Order Flow\" time=\"0.340\"/>\n    <testcase name=\"Invalid Input Handling\" time=\"0.095\"/>\n  </testsuite>\n</testsuites>", "xml")
        },
        {
          title: 'Step 6: Creating a Reusable Template',
          content: "Let's create a template you can reuse for any project.\n\n**The Complete Template:**" + codeBlock("# Clone or create this structure:\n\nmy-bot-template/\n├── botium.json\n├── botium.local.json.example\n├── package.json\n├── README.md\n├── .gitignore\n├── spec/\n│   ├── smoke/\n│   │   └── connection.convo.txt\n│   ├── greetings/\n│   ├── faq/\n│   ├── flows/\n│   └── errors/\n├── reports/\n│   └── .gitkeep\n└── scripts/\n    ├── run-smoke.sh\n    ├── run-all.sh\n    └── generate-report.sh", "text") + "\n\n**Essential .gitignore:**" + codeBlock("# .gitignore\n\n# Local config with secrets\nbotium.local.json\n\n# Reports\nreports/*.xml\nreports/*.json\nreports/*.html\n\n# Node modules\nnode_modules/\n\n# Environment files\n.env\n.env.local", "text") + "\n\n**Connection Smoke Test:**" + codeBlock("# spec/smoke/connection.convo.txt\n# Run this first to verify connection works\n\nSmoke Test - Connection Verification\n\n#me\nHello\n\n#bot\n*", "text") + "\n\n**Helper Scripts:**" + codeBlock("#!/bin/bash\n# scripts/run-smoke.sh\n\necho \"Running smoke tests...\"\nbotium-cli run --spec spec/smoke/\necho \"Smoke tests complete.\"", "bash") + codeBlock("#!/bin/bash\n# scripts/run-all.sh\n\necho \"Running all tests...\"\nbotium-cli run \\\n  --output junit --output-file reports/results.xml \\\n  --output json --output-file reports/results.json\necho \"All tests complete. Reports saved to /reports\"", "bash")
        }
      ],
      codeExamples: [
        {
          title: 'Complete Project Template - package.json',
          code: "{\n  \"name\": \"my-chatbot-tests\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Automated chatbot tests using Botium\",\n  \"scripts\": {\n    \"test\": \"botium-cli run\",\n    \"test:smoke\": \"botium-cli run --spec spec/smoke/\",\n    \"test:verbose\": \"botium-cli run --verbose\",\n    \"test:report\": \"botium-cli run --output junit --output-file reports/results.xml\",\n    \"emulator\": \"botium-cli emulator\"\n  },\n  \"devDependencies\": {\n    \"botium-core\": \"^latest\",\n    \"botium-cli\": \"^latest\",\n    \"botium-connector-echo\": \"^latest\"\n  }\n}",
          explanation: "This package.json defines npm scripts for common tasks. Run 'npm test' for tests, 'npm run test:smoke' for quick verification, etc."
        },
        {
          title: 'Test Connection Script',
          code: "#!/bin/bash\n# scripts/test-connection.sh\n# Quick script to verify chatbot connection works\n\nTMP_DIR=$(mktemp -d)\nTMP_TEST=\"$TMP_DIR/connection.convo.txt\"\n\ncat > \"$TMP_TEST\" << 'EOF'\nConnection Test\n\n#me\nHello\n\n#bot\n*\nEOF\n\necho \"Testing connection...\"\nbotium-cli run --spec \"$TMP_DIR/\"\nEXIT_CODE=$?\n\nrm -rf \"$TMP_DIR\"\n\nif [ $EXIT_CODE -eq 0 ]; then\n  echo \"\"\n  echo \"✅ Connection successful! Your chatbot is ready for testing.\"\nelse\n  echo \"\"\n  echo \"❌ Connection failed. Check your configuration.\"\nfi\n\nexit $EXIT_CODE",
          explanation: "Run this script to quickly verify your chatbot connection is working before writing tests."
        }
      ],
      formulas: [
        {
          name: 'Test Development Workflow',
          formula: 'Manual Test → Capture Response → Write Test → Automate → Refine',
          explanation: "Always start by manually testing the chatbot to understand its behavior. Then write tests based on actual responses. Refine as needed."
        },
        {
          name: 'Test Coverage',
          formula: 'Happy Paths + Edge Cases + Errors + Multi-Turn = Complete Coverage',
          explanation: "A good test suite covers successful flows, boundary cases, error handling, and complex conversations."
        }
      ],
      benefits: [
        'You have connected Botium to a real chatbot',
        'You can write meaningful test conversations',
        'You understand test output and failures',
        'You can debug connection issues',
        'You have a complete test suite template',
        "You're ready to test any chatbot confidently!"
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
        'Botium Interactive Emulator: Run `botium-cli emulator`'
      ],
      keyTakeaways: [
        'Always manually test the chatbot before writing automated tests',
        'Start with wildcards (*) to verify connection works',
        "Read error messages carefully - they tell you what's wrong",
        'Use verbose mode (--verbose) for debugging',
        'Build test suites incrementally: start simple, add complexity'
      ]
    }
  };

  return beginnerContents[lessonId] || null;
}
