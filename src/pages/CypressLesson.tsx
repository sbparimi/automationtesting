import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, BookOpen, Code, CheckCircle, AlertCircle } from "lucide-react";
import { allCypressCourses } from "@/data/cypressLessons";

// Cypress-specific lesson content
const cypressLessonContent: Record<string, {
  title: string;
  objectives: string[];
  concept: string;
  whys: { question: string; answer: string }[];
  cypressImplementation: { title: string; code: string; explanation: string }[];
  benefits: string[];
  commonMistakes: { mistake: string; solution: string }[];
  exercises: { title: string; task: string; solution: string }[];
  resources: string[];
}> = {
  'cy-basic-001': {
    title: 'Introduction to Cypress Architecture',
    objectives: [
      'Understand Cypress architecture and how it differs from Selenium',
      'Learn about the Cypress execution model and browser control',
      'Master the Cypress command queue and asynchronous nature',
      'Understand automatic waiting and retry-ability',
      'Learn the Cypress test runner components'
    ],
    concept: `Cypress is a next-generation front-end testing tool built for the modern web. Unlike traditional testing frameworks like Selenium, Cypress runs directly in the browser alongside your application, providing unprecedented control and visibility.

**Key Architectural Components:**

1. **Browser Control**: Cypress operates inside the browser, not outside it. This fundamental difference allows Cypress to synchronously execute commands and respond to every DOM event in real-time.

2. **Cypress Proxy**: All network traffic passes through Cypress, giving you complete control over requests and responses without modifying your application code.

3. **Command Queue**: Cypress commands don't execute immediately. They're enqueued and run asynchronously, but Cypress manages this complexity for you.

4. **Test Runner**: The Cypress Test Runner is split into two parts:
   - Left side: Command Log (shows every command executed)
   - Right side: Your application under test

5. **Automatic Waiting**: Cypress automatically waits for elements to exist, be visible, be enabled, and not be covered. No need for explicit waits or sleeps.`,
    whys: [
      {
        question: 'Why does Cypress run inside the browser instead of outside like Selenium?',
        answer: 'Running inside the browser gives Cypress direct access to the DOM, window object, and all JavaScript events. This enables synchronous execution, automatic waiting, time-travel debugging, and makes tests faster and more reliable.'
      },
      {
        question: 'Why does Cypress use a command queue instead of executing commands immediately?',
        answer: 'The command queue allows Cypress to chain commands fluently and manage asynchronous operations automatically. It enables features like automatic retries, time-travel debugging, and provides a clear command log for debugging.'
      },
      {
        question: 'Why does all network traffic go through Cypress proxy?',
        answer: 'The proxy gives Cypress the ability to intercept, stub, and modify network requests and responses. This enables powerful features like API mocking, response validation, and network testing without touching your application code.'
      },
      {
        question: 'Why does Cypress provide automatic waiting?',
        answer: 'Automatic waiting eliminates flaky tests caused by timing issues. Cypress intelligently waits for elements and commands to complete, making tests more reliable and removing the need for manual waits or sleeps.'
      },
      {
        question: 'Why is the Test Runner split into Command Log and Application Preview?',
        answer: 'This split view provides real-time feedback. The Command Log shows what Cypress is doing (with time-travel capability), while the Application Preview shows the actual state of your app, making debugging incredibly efficient.'
      }
    ],
    cypressImplementation: [
      {
        title: 'Basic Cypress Test Structure',
        code: `// cypress/e2e/architecture-demo.cy.js
describe('Cypress Architecture Demo', () => {
  it('demonstrates Cypress command queue', () => {
    // Commands are queued, not executed immediately
    cy.visit('https://example.cypress.io')
    
    cy.log('This is logged to command log')
    console.log('This executes immediately in browser console')
    
    // Get element - command is queued
    cy.get('h1').should('be.visible')
    
    // Multiple commands chain together
    cy.get('.todo-list li')
      .first()
      .should('contain', 'Pay electric bill')
      .find('.toggle')
      .check()
  })
  
  it('shows automatic waiting in action', () => {
    cy.visit('https://example.cypress.io/commands/waiting')
    
    // Cypress waits up to 4 seconds for element to appear
    cy.get('.wait-button').click()
    cy.get('.wait-success')
      .should('be.visible')
      .and('contain', 'Data loaded')
    
    // No need for explicit waits!
  })
})`,
        explanation: 'Cypress enqueues commands and executes them asynchronously. Notice how we chain commands fluently and Cypress handles all waiting automatically.'
      },
      {
        title: 'Understanding the Test Runner',
        code: `// cypress/e2e/test-runner-demo.cy.js
describe('Test Runner Features', () => {
  it('demonstrates time-travel debugging', () => {
    cy.visit('https://example.cypress.io')
    
    // Each command appears in Command Log
    cy.get('h1').click() // Hover over this in Command Log
    cy.url().should('include', 'cypress.io')
    
    // Click on any command in Command Log to see app state at that moment
    // This is time-travel debugging!
  })
  
  it('shows command details', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    
    // Click command in log to see:
    // - Elements found
    // - Assertions made
    // - Time taken
    // - Console output
    cy.get('.query-btn')
      .should('have.length', 1)
      .and('contain', 'Button')
  })
})`,
        explanation: 'The Test Runner provides powerful debugging capabilities. Click any command in the Command Log to see the application state at that exact moment (time-travel debugging).'
      },
      {
        title: 'Cypress Proxy and Network Control',
        code: `// cypress/e2e/network-demo.cy.js
describe('Network Control via Proxy', () => {
  it('intercepts network requests', () => {
    // Cypress proxy allows request interception
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: {
        users: [
          { id: 1, name: 'Test User' }
        ]
      }
    }).as('getUsers')
    
    cy.visit('/users')
    
    // Wait for intercepted request
    cy.wait('@getUsers').its('response.statusCode').should('eq', 200)
    
    // All traffic flows through Cypress - no app changes needed!
  })
  
  it('modifies responses on the fly', () => {
    cy.intercept('GET', '/api/products', (req) => {
      req.reply((res) => {
        // Modify response before it reaches the app
        res.body.products = res.body.products.slice(0, 3)
        return res
      })
    })
    
    cy.visit('/products')
    cy.get('.product-item').should('have.length', 3)
  })
})`,
        explanation: 'The Cypress proxy sits between your browser and the server, giving you complete control over network traffic without modifying application code.'
      },
      {
        title: 'Automatic Retry-ability',
        code: `// cypress/e2e/retry-demo.cy.js
describe('Automatic Retry', () => {
  it('retries assertions until they pass', () => {
    cy.visit('/dynamic-content')
    
    // Cypress will retry this assertion until it passes or times out
    // No manual polling needed!
    cy.get('.loading-message')
      .should('not.exist')
    
    cy.get('.content')
      .should('be.visible')
      .and('contain', 'Loaded data')
  })
  
  it('configures retry timeout', () => {
    // Change default timeout for this command
    cy.get('.slow-element', { timeout: 10000 })
      .should('be.visible')
    
    // Or change globally in cypress.config.js:
    // defaultCommandTimeout: 10000
  })
  
  it('combines multiple retry-able assertions', () => {
    cy.visit('/form')
    
    cy.get('input[name="email"]')
      .should('be.visible')
      .and('be.enabled')
      .and('have.attr', 'placeholder', 'Enter email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
    
    // All assertions retry automatically!
  })
})`,
        explanation: 'Cypress automatically retries commands and assertions until they pass or timeout. This eliminates flaky tests caused by timing issues in modern async applications.'
      }
    ],
    benefits: [
      'Direct browser access enables real-time debugging and time-travel',
      'Automatic waiting eliminates 90% of flaky test issues',
      'Network control without modifying application code',
      'Faster test execution (runs in the same event loop)',
      'Superior developer experience with instant feedback',
      'Built-in screenshot and video recording',
      'No need for external drivers or dependencies'
    ],
    commonMistakes: [
      {
        mistake: 'Treating Cypress commands as synchronous and expecting immediate execution',
        solution: 'Remember commands are queued. Use .then() to work with values: cy.get(\'.text\').then($el => { const text = $el.text() })'
      },
      {
        mistake: 'Adding manual waits with cy.wait(5000) instead of using smart assertions',
        solution: 'Use assertions like .should(\'be.visible\') which retry automatically instead of arbitrary waits'
      },
      {
        mistake: 'Not understanding that Cypress runs in the browser (same-origin policy)',
        solution: 'Use cy.visit() for navigation and cy.intercept() for cross-origin requests instead of direct navigation'
      },
      {
        mistake: 'Storing return values in variables: const button = cy.get(\'button\')',
        solution: 'Cypress commands return Chainables, not elements. Use aliases or .then() to work with values'
      },
      {
        mistake: 'Writing tests that depend on each other or shared state',
        solution: 'Each test should be independent. Use beforeEach hooks to set up clean state for every test'
      }
    ],
    exercises: [
      {
        title: 'Exercise 1: Command Queue Understanding',
        task: 'Create a test that demonstrates the difference between Cypress commands (queued) and JavaScript (immediate). Log messages at different points to show execution order.',
        solution: `describe('Command Queue Exercise', () => {
  it('demonstrates execution order', () => {
    console.log('1. This runs immediately')
    
    cy.log('2. This is queued')
    
    console.log('3. This also runs immediately')
    
    cy.visit('https://example.cypress.io')
    
    console.log('4. Still immediate')
    
    cy.get('h1').then(() => {
      console.log('5. This runs when command executes')
    })
    
    console.log('6. Immediate again')
    
    // Console output: 1, 3, 4, 6, 2, 5
    // Cypress commands run after all immediate JS
  })
})`
      },
      {
        title: 'Exercise 2: Automatic Waiting',
        task: 'Write a test that clicks a button which loads content after 2 seconds. Don\'t use cy.wait() - let Cypress wait automatically.',
        solution: `describe('Automatic Waiting Exercise', () => {
  it('waits for dynamic content', () => {
    cy.visit('https://example.cypress.io/commands/waiting')
    
    // Click button that triggers 2-second delay
    cy.get('#wait-button').click()
    
    // No cy.wait(2000) needed!
    // Cypress automatically waits for element to appear
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Data loaded')
    
    // This passes because Cypress retries until element exists
  })
})`
      },
      {
        title: 'Exercise 3: Network Interception',
        task: 'Create a test that intercepts an API call and returns mock data. Verify the mock data appears in the UI.',
        solution: `describe('Network Interception Exercise', () => {
  it('mocks API response', () => {
    // Intercept API call before visiting page
    cy.intercept('GET', '**/api/todos', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Learn Cypress', completed: false },
        { id: 2, title: 'Build Tests', completed: true }
      ]
    }).as('getTodos')
    
    cy.visit('/todos')
    
    // Wait for intercepted request
    cy.wait('@getTodos')
    
    // Verify mock data in UI
    cy.get('.todo-item').should('have.length', 2)
    cy.contains('Learn Cypress').should('be.visible')
  })
})`
      },
      {
        title: 'Exercise 4: Time-Travel Debugging',
        task: 'Write a test with 5+ commands. Run it and practice clicking on each command in the Command Log to see the application state.',
        solution: `describe('Time-Travel Exercise', () => {
  it('demonstrates time-travel debugging', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    
    cy.get('.action-email')
      .type('test@email.com')
      .should('have.value', 'test@email.com')
    
    cy.get('.action-disabled')
      .should('be.disabled')
    
    cy.get('.action-focus')
      .focus()
      .should('have.class', 'focus')
    
    // Run this test, then click each command in the log
    // Notice how the right panel shows app state at that moment!
  })
})`
      },
      {
        title: 'Exercise 5: Chaining Commands',
        task: 'Create a test that finds a list, filters to specific items, and performs assertions - all in one fluent chain.',
        solution: `describe('Command Chaining Exercise', () => {
  it('chains multiple commands fluently', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    
    // Fluent chaining - each command builds on previous
    cy.get('.query-list')
      .find('li')
      .should('have.length.greaterThan', 2)
      .first()
      .should('contain', 'Bananas')
      .and('have.class', 'query-list-item')
    
    // Alternative with filtering
    cy.get('.query-list li')
      .filter('.third')
      .should('contain', 'Cucumber')
  })
})`
      }
    ],
    resources: [
      'Cypress Official Docs: How Cypress Works',
      'Cypress Architecture Deep Dive Blog',
      'Understanding the Command Queue',
      'Automatic Waiting and Retry-ability Guide',
      'Network Control Best Practices'
    ]
  },
  'cy-basic-002': {
    title: 'Installing Cypress and Project Setup',
    objectives: [
      'Install Cypress in a new or existing project',
      'Understand npm vs yarn installation methods',
      'Configure package.json scripts for Cypress',
      'Explore the Cypress folder structure',
      'Run Cypress for the first time'
    ],
    concept: `Installing Cypress is straightforward, but understanding the proper setup ensures a smooth testing experience. Cypress can be added to any project with a package.json file.

**Installation Methods:**

1. **NPM Installation**: npm install cypress --save-dev
2. **Yarn Installation**: yarn add cypress --dev
3. **Direct Download**: Cypress binary can be downloaded directly (rare)

**Project Structure After Installation:**

When you first open Cypress, it automatically creates a folder structure:
- cypress/
  - e2e/ (your test files)
  - fixtures/ (test data)
  - support/ (custom commands, helpers)
- cypress.config.js (main configuration)

**Package.json Scripts:**

Adding scripts makes running Cypress convenient:
- "cy:open" - Opens Cypress Test Runner (development)
- "cy:run" - Runs tests headlessly (CI/CD)
- "cy:run:chrome" - Runs in specific browser`,
    whys: [
      {
        question: 'Why install Cypress as a dev dependency (--save-dev)?',
        answer: 'Cypress is a testing tool used during development and CI/CD, not in production. Installing as devDependency keeps production bundle smaller and separates testing tools from runtime dependencies.'
      },
      {
        question: 'Why does Cypress create its own folder structure?',
        answer: 'The standardized structure ensures consistency across projects and teams. It separates concerns (tests, fixtures, custom commands) and makes Cypress configuration discoverable and maintainable.'
      },
      {
        question: 'Why use npm scripts instead of running cypress commands directly?',
        answer: 'Scripts provide consistency across team members, hide complexity, enable easy CI/CD integration, and allow passing common configuration flags without remembering syntax.'
      },
      {
        question: 'Why does Cypress download a binary after npm install?',
        answer: 'Cypress includes a full browser automation framework with Electron browser. The npm package downloads the platform-specific binary needed to control browsers and run tests.'
      },
      {
        question: 'Why create separate scripts for "open" and "run" modes?',
        answer: 'Open mode is for development (interactive, debugging). Run mode is for CI/CD (headless, faster). Separating them makes the intent clear and allows different configurations for each environment.'
      }
    ],
    cypressImplementation: [
      {
        title: 'Step 1: Create New Project',
        code: `# Create new project directory
mkdir my-cypress-project
cd my-cypress-project

# Initialize package.json
npm init -y

# Output: package.json created with defaults`,
        explanation: 'Start with a fresh project or navigate to existing one with package.json'
      },
      {
        title: 'Step 2: Install Cypress',
        code: `# Install Cypress as dev dependency
npm install cypress --save-dev

# OR using yarn
yarn add cypress --dev

# Cypress will download (may take a few minutes)
# You'll see progress: Downloading Cypress binary...`,
        explanation: 'Cypress package installs and downloads the binary needed to run tests'
      },
      {
        title: 'Step 3: Configure package.json Scripts',
        code: `// package.json
{
  "name": "my-cypress-project",
  "version": "1.0.0",
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:firefox": "cypress run --browser firefox",
    "cy:run:headed": "cypress run --headed",
    "cy:run:spec": "cypress run --spec 'cypress/e2e/**/*.cy.js'"
  },
  "devDependencies": {
    "cypress": "^13.0.0"
  }
}`,
        explanation: 'Add convenient scripts for different Cypress execution modes and browsers'
      },
      {
        title: 'Step 4: Open Cypress for First Time',
        code: `# Run the open command
npm run cy:open

# Cypress will:
# 1. Create folder structure
# 2. Add example tests
# 3. Create cypress.config.js
# 4. Open the Cypress Test Runner`,
        explanation: 'First run creates the complete folder structure and example tests'
      },
      {
        title: 'Step 5: Explore Generated Folder Structure',
        code: `my-cypress-project/
├── cypress/
│   ├── e2e/
│   │   └── spec.cy.js         # Your test files
│   ├── fixtures/
│   │   └── example.json       # Test data
│   ├── support/
│   │   ├── commands.js        # Custom commands
│   │   └── e2e.js            # Runs before each test
├── cypress.config.js          # Main configuration
├── node_modules/
├── package.json
└── package-lock.json`,
        explanation: 'Cypress creates an organized structure separating tests, data, and configuration'
      },
      {
        title: 'Step 6: Create Your First Test',
        code: `// cypress/e2e/first-test.cy.js
describe('My First Cypress Test', () => {
  it('visits the app', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
  
  it('clicks a link', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})`,
        explanation: 'Create a simple test file to verify installation works correctly'
      },
      {
        title: 'Step 7: Basic cypress.config.js Setup',
        code: `// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})`,
        explanation: 'Configure Cypress with sensible defaults for your project'
      }
    ],
    benefits: [
      'No external dependencies or drivers needed',
      'Works with any existing JavaScript project',
      'Automatic folder structure organization',
      'Easy team onboarding with npm install',
      'Consistent setup across different machines',
      'Built-in TypeScript support (optional)',
      'Works offline after initial binary download'
    ],
    commonMistakes: [
      {
        mistake: 'Installing Cypress globally instead of as project dependency',
        solution: 'Always install per-project with --save-dev. This ensures version consistency and works in CI/CD'
      },
      {
        mistake: 'Running "cypress open" directly instead of through npm scripts',
        solution: 'Use "npm run cy:open" so the script runs with project context and correct binary path'
      },
      {
        mistake: 'Committing node_modules or Cypress binary to version control',
        solution: 'Add node_modules to .gitignore. Team members run npm install to get Cypress'
      },
      {
        mistake: 'Not configuring baseUrl in cypress.config.js',
        solution: 'Set baseUrl to avoid repeating full URLs in every cy.visit(). Makes tests more maintainable'
      },
      {
        mistake: 'Deleting the cypress/support folder thinking it\'s not needed',
        solution: 'Keep support folder - it\'s where custom commands and global configurations belong'
      }
    ],
    exercises: [
      {
        title: 'Exercise 1: Fresh Installation',
        task: 'Create a new project from scratch, install Cypress, and verify the folder structure was created correctly.',
        solution: `# Terminal commands
mkdir cypress-practice
cd cypress-practice
npm init -y
npm install cypress --save-dev
npx cypress open

# Verify these folders exist:
# cypress/e2e
# cypress/fixtures
# cypress/support
# cypress.config.js`
      },
      {
        title: 'Exercise 2: Configure npm Scripts',
        task: 'Add npm scripts for opening Cypress, running headless, and running in Chrome browser only.',
        solution: `// package.json
{
  "scripts": {
    "test:open": "cypress open",
    "test:run": "cypress run",
    "test:chrome": "cypress run --browser chrome",
    "test:headed": "cypress run --headed --browser chrome"
  }
}

// Run them:
// npm run test:open
// npm run test:run
// npm run test:chrome`
      },
      {
        title: 'Exercise 3: Customize Configuration',
        task: 'Modify cypress.config.js to set a custom viewport size, enable video recording, and set a baseUrl.',
        solution: `// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 10000
  }
})`
      },
      {
        title: 'Exercise 4: Create Test File Structure',
        task: 'Organize test files into logical folders: auth/, products/, checkout/. Create one test in each.',
        solution: `// cypress/e2e/auth/login.cy.js
describe('Authentication', () => {
  it('logs in successfully', () => {
    cy.visit('/login')
    // test code
  })
})

// cypress/e2e/products/search.cy.js
describe('Product Search', () => {
  it('searches for products', () => {
    cy.visit('/products')
    // test code
  })
})

// cypress/e2e/checkout/payment.cy.js
describe('Checkout Process', () => {
  it('completes payment', () => {
    cy.visit('/checkout')
    // test code
  })
})`
      },
      {
        title: 'Exercise 5: Add TypeScript Support',
        task: 'Configure Cypress to work with TypeScript. Create a tsconfig.json and rename a test file to .ts.',
        solution: `// Install TypeScript
npm install typescript --save-dev

// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}

// Rename test file
// first-test.cy.js → first-test.cy.ts

// cypress/e2e/first-test.cy.ts
describe('TypeScript Test', () => {
  it('works with TypeScript', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible')
  })
})`
      }
    ],
    resources: [
      'Cypress Installation Guide',
      'Configuration Options Reference',
      'Project Structure Best Practices',
      'TypeScript Support Documentation',
      'NPM vs Yarn with Cypress'
    ]
  }
};

const CypressLesson = () => {
  const { lessonId } = useParams();
  
  const findLesson = () => {
    for (const course of allCypressCourses) {
      for (const section of course.sections) {
        const lesson = section.lessons.find(l => l.id === lessonId);
        if (lesson) return { lesson, section, course };
      }
    }
    return null;
  };

  const lessonData = findLesson();
  const content = lessonId ? cypressLessonContent[lessonId] : null;

  if (!lessonData || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/cypress">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cypress Course
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { lesson, section, course } = lessonData;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header with Lesson Title */}
          <div className="mb-8">
            <Link to="/cypress">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cypress Course
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">{course.title}</Badge>
              <Badge variant="outline">{section.title}</Badge>
              <Badge className="bg-gradient-button">{lesson.level}</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              {content.title}
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Duration: {lesson.duration} • {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)} Level
            </p>
          </div>

          {/* Learning Objectives */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Concept Explanation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Concept Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {content.concept.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4 whitespace-pre-wrap">{para}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 5 Whys */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>The 5 Whys - Deep Understanding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.whys.map((why, i) => (
                <div key={i} className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">{why.question}</h4>
                  <p className="text-muted-foreground">{why.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Cypress Implementation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Cypress Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.cypressImplementation.map((impl, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold mb-3">{impl.title}</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-3">
                    <code className="text-sm">{impl.code}</code>
                  </pre>
                  <p className="text-muted-foreground italic">{impl.explanation}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Common Mistakes & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content.commonMistakes.map((mistake, i) => (
                <div key={i} className="border border-destructive/20 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-2">❌ Mistake:</h4>
                  <p className="mb-3">{mistake.mistake}</p>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Solution:</h4>
                  <p className="text-muted-foreground">{mistake.solution}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Practice Exercises */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Practice Exercises</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.exercises.map((exercise, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{exercise.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Task:</h4>
                    <p className="text-muted-foreground">{exercise.task}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{exercise.solution}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.resources.map((resource, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-12 flex justify-center">
            <Link to="/cypress">
              <Button size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Cypress Lessons
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CypressLesson;