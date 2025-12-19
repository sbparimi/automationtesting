// Comprehensive Content Generator for 30-Hour Udemy-Style Cypress + AI Codex Course
// Each section provides detailed step-by-step how-to guides

export interface LessonSection {
  title: string;
  duration: string;
  content: SectionContent[];
}

export interface SectionContent {
  type: 'explanation' | 'steps' | 'code' | 'warning' | 'tip' | 'checkpoint';
  title?: string;
  content: string;
  code?: string;
  steps?: StepByStep[];
}

export interface StepByStep {
  step: number;
  action: string;
  details: string;
  verification?: string;
  screenshot?: string;
}

export interface HandsOnExercise {
  title: string;
  objective: string;
  problem: string;
  prerequisites: string[];
  steps: ExerciseStep[];
  expectedOutput: string;
  troubleshooting: TroubleshootingItem[];
}

export interface ExerciseStep {
  stepNumber: number;
  instruction: string;
  howTo: string;
  code?: string;
  verification: string;
}

export interface TroubleshootingItem {
  issue: string;
  cause: string;
  solution: string;
}

export interface ExitChecklist {
  items: ChecklistItem[];
}

export interface ChecklistItem {
  skill: string;
  verification: string;
}

export interface CompleteLessonContent {
  lessonId: string;
  lessonNumber: number;
  title: string;
  overview: string;
  beginnerSection: LessonSection;
  intermediateSection: LessonSection;
  advancedSection: LessonSection;
  handsOnExercise: HandsOnExercise;
  exitChecklist: ExitChecklist;
}

// ============================================================================
// LESSON 1: Understanding Your Computer for Test Automation
// ============================================================================
const lesson1Content: CompleteLessonContent = {
  lessonId: "codex-lesson-1",
  lessonNumber: 1,
  title: "Understanding Your Computer for Test Automation",
  overview: "Before writing any test automation code, you need to understand how your computer organizes and manages files. This lesson teaches you the foundational skills of navigating your operating system, understanding file paths, and creating organized project structures. These skills are essential because every Cypress project lives in folders, and every test file has a specific location that matters.",
  
  beginnerSection: {
    title: "Beginner: Computer Basics for Complete Beginners",
    duration: "25 minutes",
    content: [
      {
        type: 'explanation',
        title: "What is an Operating System?",
        content: `Your operating system (OS) is the software that makes your computer work. It's like the manager of your computer - it controls the screen, keyboard, mouse, and organizes all your files.

**The Three Main Operating Systems:**

1. **Windows** - Made by Microsoft. Most common in corporate environments. You'll see the Windows logo (four squares) when you start your computer.

2. **macOS** - Made by Apple. Used on MacBooks and iMacs. You'll see an Apple logo when you start your computer.

3. **Linux** - Free and open-source. Popular with developers. Ubuntu is the most common version.

**Why This Matters for Test Automation:**
Cypress works on all three operating systems, but the commands and file paths look slightly different on each. You need to know which OS you're using to follow instructions correctly.

**How to Check Your Operating System:**

On Windows:
- Click the Start button (Windows logo in bottom-left corner)
- Type "About your PC" and press Enter
- Look for "Windows 10" or "Windows 11" under "Windows specifications"

On Mac:
- Click the Apple logo in the top-left corner of your screen
- Click "About This Mac"
- You'll see the macOS version (like "macOS Ventura" or "macOS Sonoma")

On Linux:
- Open Terminal (search for "Terminal" in your applications)
- Type: lsb_release -a
- Press Enter
- Look for "Description" to see your version`
      },
      {
        type: 'steps',
        title: "How to Open File Explorer/Finder",
        content: "File Explorer (Windows) or Finder (Mac) is the application you use to browse files and folders on your computer.",
        steps: [
          {
            step: 1,
            action: "Locate the File Explorer/Finder icon",
            details: "On Windows: Look at the taskbar (the bar at the bottom of your screen). Find the yellow folder icon. On Mac: Look at the Dock (the bar at the bottom of your screen). Find the blue and white smiley face icon.",
            verification: "You should see the icon on your taskbar/dock."
          },
          {
            step: 2,
            action: "Click the icon to open File Explorer/Finder",
            details: "Single-click with your left mouse button on the icon. A window will open showing your files and folders.",
            verification: "A new window opens showing folders like 'Documents', 'Downloads', 'Desktop'."
          },
          {
            step: 3,
            action: "Understand what you're seeing",
            details: "The left side shows common locations (shortcuts). The main area shows the contents of the current folder. The address bar at the top shows where you are.",
            verification: "You can identify the three areas: sidebar, main content, address bar."
          }
        ]
      },
      {
        type: 'explanation',
        title: "Understanding Files and Folders",
        content: `**What is a Folder?**
A folder (also called a "directory") is a container that holds files or other folders. Think of it like a physical folder in a filing cabinet - it groups related things together.

**What is a File?**
A file is a single document, image, program, or piece of data. Files have names and extensions. The extension (the part after the dot) tells your computer what type of file it is.

**Common File Types in Test Automation:**
- **.ts** - TypeScript file (your test code)
- **.js** - JavaScript file (sometimes used for configuration)
- **.json** - Configuration data (like package.json)
- **.yml** or **.yaml** - Configuration files (like CI/CD pipelines)
- **.html** - Web page files

**Example:** A file named \`login.spec.ts\` is a TypeScript test file that tests login functionality.

**Creating a New Folder:**

On Windows:
1. Open File Explorer
2. Navigate to where you want the new folder
3. Right-click in empty space
4. Click "New" → "Folder"
5. Type the name and press Enter

On Mac:
1. Open Finder
2. Navigate to where you want the new folder
3. Right-click in empty space (or Control + Click)
4. Click "New Folder"
5. Type the name and press Enter`
      },
      {
        type: 'explanation',
        title: "Understanding File Paths",
        content: `**What is a File Path?**
A file path is the address of a file or folder on your computer. It tells you exactly where something is located, like a street address for files.

**Windows File Paths:**
Windows uses backslashes (\\) to separate folders.
Example: \`C:\\Users\\YourName\\Documents\\cypress-project\\cypress\\e2e\\login.spec.ts\`

Breaking this down:
- C: = The drive (usually your main hard drive)
- Users = A system folder
- YourName = Your user account folder
- Documents = Your Documents folder
- cypress-project = Your project folder
- cypress = Cypress folder inside your project
- e2e = End-to-end tests folder
- login.spec.ts = The actual test file

**Mac/Linux File Paths:**
Mac and Linux use forward slashes (/) to separate folders.
Example: \`/Users/YourName/Documents/cypress-project/cypress/e2e/login.spec.ts\`

**How to Find a File's Path:**

On Windows:
1. Navigate to the file in File Explorer
2. Click in the address bar at the top
3. The full path appears - you can copy it (Ctrl+C)

On Mac:
1. Navigate to the file in Finder
2. Right-click the file
3. Hold the Option key - "Copy" changes to "Copy as Pathname"
4. Click it to copy the path`
      },
      {
        type: 'checkpoint',
        title: "Beginner Checkpoint",
        content: `Before moving on, verify you can do all of these:

✅ You know which operating system you're using (Windows, Mac, or Linux)
✅ You can open File Explorer (Windows) or Finder (Mac)
✅ You understand the difference between a file and a folder
✅ You can create a new folder
✅ You can find the path to any file on your computer

If you cannot do any of these, go back and practice until you can.`
      }
    ]
  },
  
  intermediateSection: {
    title: "Intermediate: Setting Up Your Workspace",
    duration: "20 minutes",
    content: [
      {
        type: 'explanation',
        title: "Why Workspace Organization Matters",
        content: `Professional developers organize their projects in a consistent location. This makes it easier to find projects, navigate between them, and avoid confusion.

**The Professional Approach:**
Create a dedicated folder for all your automation projects. This folder should be:
- Easy to find (not buried deep in other folders)
- Named clearly (like "automation-projects" or "cypress-projects")
- Separate from personal files (not in Downloads or Desktop)

**Recommended Location:**
- Windows: \`C:\\Users\\YourName\\automation-projects\`
- Mac: \`/Users/YourName/automation-projects\`

**Why Not Desktop or Downloads?**
- Desktop gets cluttered quickly
- Downloads is for temporary files
- These locations make terminal navigation harder`
      },
      {
        type: 'steps',
        title: "How to Create Your Professional Workspace",
        content: "Follow these exact steps to create your workspace folder:",
        steps: [
          {
            step: 1,
            action: "Open File Explorer/Finder",
            details: "Click the File Explorer icon (Windows) or Finder icon (Mac) in your taskbar/dock.",
            verification: "File Explorer/Finder window is open."
          },
          {
            step: 2,
            action: "Navigate to your user folder",
            details: "On Windows: Click 'This PC' in the sidebar, then double-click 'Local Disk (C:)', then 'Users', then your username folder. On Mac: Click 'Go' in the menu bar, then 'Home', or press Cmd+Shift+H.",
            verification: "You see folders like 'Documents', 'Downloads', 'Desktop'."
          },
          {
            step: 3,
            action: "Create the automation-projects folder",
            details: "Right-click in empty space → New → Folder. Name it 'automation-projects' (all lowercase, hyphen between words). Press Enter.",
            verification: "You see a new folder named 'automation-projects'."
          },
          {
            step: 4,
            action: "Open your new folder",
            details: "Double-click the 'automation-projects' folder to open it.",
            verification: "The folder opens and is empty."
          },
          {
            step: 5,
            action: "Note the path",
            details: "Click in the address bar to see the full path. Write this down or memorize it. You'll use this path constantly.",
            verification: "You know the full path to your workspace folder."
          }
        ]
      },
      {
        type: 'explanation',
        title: "Standard Project Folder Structure",
        content: `Every Cypress project should follow a consistent structure. Here's what a well-organized project looks like:

\`\`\`
my-cypress-project/
├── cypress/
│   ├── e2e/                    # Your test files go here
│   │   ├── login.cy.ts
│   │   └── checkout.cy.ts
│   ├── fixtures/               # Test data files
│   │   └── users.json
│   ├── support/                # Reusable commands and setup
│   │   ├── commands.ts
│   │   └── e2e.ts
│   └── downloads/              # Downloaded files during tests
├── node_modules/               # Installed packages (don't edit)
├── cypress.config.ts           # Cypress configuration
├── package.json                # Project dependencies
├── package-lock.json           # Dependency lock file
└── tsconfig.json               # TypeScript configuration
\`\`\`

**What Each Folder/File Does:**
- **cypress/e2e/** - All your test files live here. Each file tests one feature.
- **cypress/fixtures/** - JSON files with test data (usernames, products, etc.)
- **cypress/support/** - Helper functions used across multiple tests
- **node_modules/** - NEVER edit this. It's managed by npm.
- **cypress.config.ts** - Settings for how Cypress runs
- **package.json** - Lists what packages your project needs`
      },
      {
        type: 'tip',
        title: "Pro Tip: Naming Conventions",
        content: `**Always use these naming conventions:**

1. **Folder names:** lowercase with hyphens
   - ✅ \`my-cypress-project\`
   - ❌ \`My Cypress Project\` (spaces cause problems)
   - ❌ \`MyCypressProject\` (harder to read)

2. **Test file names:** feature-name.cy.ts
   - ✅ \`login.cy.ts\`
   - ✅ \`checkout-flow.cy.ts\`
   - ❌ \`Login.cy.ts\` (don't start with capital)
   - ❌ \`login.spec.ts\` (use .cy.ts for Cypress)

3. **No spaces ever:** Replace spaces with hyphens
   - ✅ \`user-registration.cy.ts\`
   - ❌ \`user registration.cy.ts\`

**Why This Matters:**
- Terminal commands break with spaces in names
- Consistent naming makes projects predictable
- Other developers expect these conventions`
      }
    ]
  },
  
  advancedSection: {
    title: "Advanced: Enterprise Workspace Management",
    duration: "10 minutes",
    content: [
      {
        type: 'explanation',
        title: "Managing Multiple Projects",
        content: `In enterprise environments, you'll work on multiple projects simultaneously. Here's how professionals organize multiple projects:

\`\`\`
automation-projects/
├── company-web-app/           # Main web application tests
│   └── cypress/
├── company-mobile-web/        # Mobile web tests
│   └── cypress/
├── company-api-tests/         # API-only tests (no UI)
│   └── cypress/
├── shared-libraries/          # Reusable code across projects
│   ├── custom-commands/
│   └── page-objects/
└── documentation/             # Team documentation
    ├── setup-guides/
    └── coding-standards/
\`\`\`

**Key Principles:**
1. One repository per application
2. Shared code in separate library
3. Documentation alongside code`
      },
      {
        type: 'explanation',
        title: "Environment-Specific Folders",
        content: `Enterprise projects run tests against multiple environments (development, staging, production). Your structure should support this:

\`\`\`
cypress/
├── e2e/
│   ├── smoke/                 # Quick tests for all environments
│   ├── regression/            # Full test suite
│   └── environment-specific/
│       ├── dev-only/          # Tests that only run in dev
│       └── prod-monitoring/   # Production monitoring tests
├── fixtures/
│   ├── dev/                   # Development test data
│   ├── staging/               # Staging test data
│   └── production/            # Production test data
└── config/
    ├── dev.config.ts          # Development settings
    ├── staging.config.ts      # Staging settings
    └── production.config.ts   # Production settings
\`\`\`

This structure allows you to:
- Run different tests per environment
- Use different test data per environment
- Keep environment-specific configuration separate`
      },
      {
        type: 'warning',
        title: "Critical: Never Store Secrets in Files",
        content: `**NEVER put sensitive data in your project files:**

❌ Don't do this:
\`\`\`json
// fixtures/users.json
{
  "adminPassword": "RealPassword123!"
}
\`\`\`

✅ Do this instead:
\`\`\`json
// fixtures/users.json
{
  "adminUsername": "testadmin"
  // Password comes from environment variable
}
\`\`\`

**Why:**
- Code gets committed to repositories
- Repositories may be public or shared
- Leaked credentials = security breach
- Compliance violations in regulated industries

**Solution:** Environment variables (covered in Lesson 24)`
      }
    ]
  },
  
  handsOnExercise: {
    title: "Exercise: Set Up Your Automation Workspace",
    objective: "Create a professional workspace structure and your first project folder.",
    problem: "You need to create an organized workspace for all your Cypress projects, following professional naming conventions and folder structures.",
    prerequisites: [
      "Computer with Windows, Mac, or Linux",
      "Administrator access to create folders",
      "File Explorer/Finder access"
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Open File Explorer (Windows) or Finder (Mac)",
        howTo: "On Windows: Click the yellow folder icon in your taskbar at the bottom of the screen. On Mac: Click the blue and white smiley face icon in your Dock. If you don't see it, press Cmd+Space, type 'Finder', and press Enter.",
        verification: "A window opens showing your files and folders."
      },
      {
        stepNumber: 2,
        instruction: "Navigate to your user home folder",
        howTo: "On Windows: In the left sidebar, click 'This PC'. Then double-click 'Local Disk (C:)'. Double-click 'Users'. Double-click your username folder (it will match your Windows login name). On Mac: Click 'Go' in the top menu bar, then click 'Home'. Or press Cmd+Shift+H.",
        verification: "You see folders like 'Documents', 'Downloads', 'Desktop', 'Pictures'."
      },
      {
        stepNumber: 3,
        instruction: "Create the automation-projects folder",
        howTo: "Right-click in any empty white space in the main area (not on any existing folder). In the menu that appears, click 'New' (Windows) or hover over 'New' to see more options. Click 'Folder' or 'New Folder'. A new folder appears with its name highlighted. Type exactly: automation-projects (all lowercase, with a hyphen). Press Enter to confirm the name.",
        verification: "You see a new folder named 'automation-projects' in your user folder."
      },
      {
        stepNumber: 4,
        instruction: "Open your new workspace folder",
        howTo: "Double-click the 'automation-projects' folder to open it.",
        verification: "The folder opens and is completely empty."
      },
      {
        stepNumber: 5,
        instruction: "Create your first project folder",
        howTo: "Inside automation-projects, right-click in empty space, click New → Folder. Name it: my-first-cypress-project (all lowercase, hyphens between words). Press Enter.",
        verification: "You have a folder named 'my-first-cypress-project' inside 'automation-projects'."
      },
      {
        stepNumber: 6,
        instruction: "Get and record the full path",
        howTo: "On Windows: Click once in the address bar at the top of File Explorer. The path changes to text form. Select all (Ctrl+A) and copy (Ctrl+C). On Mac: Right-click the folder, hold the Option key, click 'Copy as Pathname'. Open Notes or any text app. Paste (Ctrl+V or Cmd+V) and save this path.",
        code: "# Your path should look like:\n# Windows: C:\\Users\\YourName\\automation-projects\\my-first-cypress-project\n# Mac: /Users/YourName/automation-projects/my-first-cypress-project",
        verification: "You have the full path saved somewhere you can reference it."
      },
      {
        stepNumber: 7,
        instruction: "Create standard project subfolders",
        howTo: "Open 'my-first-cypress-project'. Create these folders inside it (right-click → New → Folder for each): 'cypress', 'documentation', 'config'",
        verification: "Your project folder contains three empty folders: cypress, documentation, config."
      }
    ],
    expectedOutput: `After completing this exercise, your folder structure should look like this:

automation-projects/
└── my-first-cypress-project/
    ├── cypress/
    ├── documentation/
    └── config/

And you should have the full path saved:
- Windows: C:\\Users\\[YourName]\\automation-projects\\my-first-cypress-project
- Mac: /Users/[YourName]/automation-projects/my-first-cypress-project`,
    troubleshooting: [
      {
        issue: "I can't find my user folder",
        cause: "The sidebar navigation is confusing, or you're looking in the wrong place.",
        solution: "On Windows: Open File Explorer, type %USERPROFILE% in the address bar, press Enter. On Mac: Press Cmd+Shift+H in Finder."
      },
      {
        issue: "Right-click doesn't show 'New Folder' option",
        cause: "You might be right-clicking on an existing folder instead of empty space.",
        solution: "Make sure you're clicking in the white/empty area of the folder, not on any existing folder or file."
      },
      {
        issue: "I accidentally created a folder with spaces in the name",
        cause: "You typed 'my first cypress project' instead of 'my-first-cypress-project'.",
        solution: "Right-click the folder, select 'Rename', change spaces to hyphens, press Enter."
      },
      {
        issue: "I don't have permission to create folders",
        cause: "Your user account may have restrictions, especially on work computers.",
        solution: "Contact your IT department, or try creating the folder in your Documents folder instead."
      }
    ]
  },
  
  exitChecklist: {
    items: [
      {
        skill: "I know which operating system I'm using",
        verification: "I can state whether I'm using Windows 10, Windows 11, macOS (version), or Linux (distribution)."
      },
      {
        skill: "I can open File Explorer/Finder",
        verification: "I can click the icon and open the file browsing window without help."
      },
      {
        skill: "I understand files vs folders",
        verification: "I can explain that folders contain files or other folders, and files have extensions like .ts or .json."
      },
      {
        skill: "I can find the path to any file",
        verification: "I can click on any file and tell you its complete path from root to filename."
      },
      {
        skill: "I have created my workspace folder",
        verification: "I have an 'automation-projects' folder in my user directory."
      },
      {
        skill: "I know the naming conventions",
        verification: "I will use lowercase with hyphens: 'my-project' not 'My Project' or 'myProject'."
      }
    ]
  }
};

// ============================================================================
// LESSON 2: Installing and Mastering Visual Studio Code
// ============================================================================
const lesson2Content: CompleteLessonContent = {
  lessonId: "codex-lesson-2",
  lessonNumber: 2,
  title: "Installing and Mastering Visual Studio Code",
  overview: "Visual Studio Code (VS Code) is the code editor where you will write all your Cypress tests. This lesson provides complete step-by-step instructions for downloading, installing, and configuring VS Code. You will learn every part of the interface and install the essential extensions for test automation.",
  
  beginnerSection: {
    title: "Beginner: Downloading and Installing VS Code",
    duration: "25 minutes",
    content: [
      {
        type: 'explanation',
        title: "What is Visual Studio Code?",
        content: `Visual Studio Code (VS Code) is a free code editor made by Microsoft. It's where you will:
- Write your test code
- Run commands
- Install extensions that help you code faster
- Debug problems in your tests

**Why VS Code?**
- It's completely free
- It works on Windows, Mac, and Linux
- It has thousands of extensions (including GitHub Copilot)
- It's the most popular code editor in the world
- Almost every tutorial and guide assumes you're using it

**Note:** VS Code is different from "Visual Studio". Visual Studio is a larger, more complex program. Make sure you download "Visual Studio Code" specifically.`
      },
      {
        type: 'steps',
        title: "How to Download VS Code",
        content: "Follow these exact steps to download VS Code:",
        steps: [
          {
            step: 1,
            action: "Open your web browser",
            details: "Click on Chrome, Firefox, Safari, or Edge icon to open your web browser.",
            verification: "Your web browser is open with a blank page or your home page."
          },
          {
            step: 2,
            action: "Go to the VS Code website",
            details: "Click in the address bar at the top of your browser. Type: code.visualstudio.com and press Enter.",
            verification: "You see the Visual Studio Code website with a blue 'Download' button."
          },
          {
            step: 3,
            action: "Click the Download button",
            details: "The website automatically detects your operating system. Click the large blue 'Download for Windows/Mac/Linux' button. If it shows the wrong OS, click the small arrow next to the button to choose the correct one.",
            verification: "A file starts downloading. You may see it in the bottom of your browser or in your Downloads folder."
          },
          {
            step: 4,
            action: "Wait for the download to complete",
            details: "The file is about 80-100 MB. On slow internet, this may take a few minutes. Watch the progress bar until it completes.",
            verification: "The download is complete. You have a file named something like 'VSCodeUserSetup-x64-1.XX.X.exe' (Windows) or 'VSCode-darwin.dmg' (Mac)."
          }
        ]
      },
      {
        type: 'steps',
        title: "How to Install VS Code on Windows",
        content: "If you're on Windows, follow these steps:",
        steps: [
          {
            step: 1,
            action: "Open your Downloads folder",
            details: "Open File Explorer (yellow folder icon). Click 'Downloads' in the left sidebar.",
            verification: "You see the VS Code installer file."
          },
          {
            step: 2,
            action: "Run the installer",
            details: "Double-click the file that starts with 'VSCodeUserSetup'. If Windows asks 'Do you want to allow this app to make changes?', click 'Yes'.",
            verification: "The VS Code Setup Wizard opens."
          },
          {
            step: 3,
            action: "Accept the license agreement",
            details: "Read the license if you want. Click the circle next to 'I accept the agreement'. Click 'Next'.",
            verification: "You move to the next screen."
          },
          {
            step: 4,
            action: "Choose installation location",
            details: "Leave the default location (usually C:\\Users\\YourName\\AppData\\Local\\Programs\\Microsoft VS Code). Click 'Next'.",
            verification: "You move to the next screen."
          },
          {
            step: 5,
            action: "Choose Start Menu folder",
            details: "Leave the default 'Visual Studio Code'. Click 'Next'.",
            verification: "You move to the next screen."
          },
          {
            step: 6,
            action: "Select additional tasks (IMPORTANT)",
            details: "Check ALL of these boxes: ✅ Create a desktop icon, ✅ Add 'Open with Code' action to Windows Explorer file context menu, ✅ Add 'Open with Code' action to Windows Explorer directory context menu, ✅ Register Code as an editor for supported file types, ✅ Add to PATH. Click 'Next'.",
            verification: "All checkboxes are checked."
          },
          {
            step: 7,
            action: "Install",
            details: "Click 'Install'. Wait for the installation to complete. This takes 1-2 minutes.",
            verification: "You see 'Completing the Visual Studio Code Setup Wizard'."
          },
          {
            step: 8,
            action: "Finish and launch",
            details: "Check 'Launch Visual Studio Code'. Click 'Finish'.",
            verification: "VS Code opens for the first time."
          }
        ]
      },
      {
        type: 'steps',
        title: "How to Install VS Code on Mac",
        content: "If you're on Mac, follow these steps:",
        steps: [
          {
            step: 1,
            action: "Open your Downloads folder",
            details: "Click the Finder icon in your Dock. Click 'Downloads' in the left sidebar.",
            verification: "You see the VS Code .dmg file."
          },
          {
            step: 2,
            action: "Open the installer",
            details: "Double-click the file named 'VSCode-darwin-universal.dmg' or similar.",
            verification: "A window opens showing the VS Code icon and an Applications folder."
          },
          {
            step: 3,
            action: "Drag VS Code to Applications",
            details: "Click and hold the VS Code icon. Drag it onto the Applications folder icon. Release.",
            verification: "A progress bar appears while copying."
          },
          {
            step: 4,
            action: "Eject the installer",
            details: "Right-click the VS Code disk image on your desktop. Click 'Eject'. Or drag it to the Trash.",
            verification: "The installer disk image disappears from your desktop."
          },
          {
            step: 5,
            action: "Open VS Code from Applications",
            details: "Open Finder. Click 'Applications' in the sidebar. Double-click 'Visual Studio Code'.",
            verification: "If Mac asks 'Are you sure you want to open it?', click 'Open'."
          },
          {
            step: 6,
            action: "Add VS Code to your Dock",
            details: "While VS Code is running, right-click its icon in the Dock. Click 'Options' → 'Keep in Dock'.",
            verification: "The VS Code icon stays in your Dock even after closing the app."
          }
        ]
      }
    ]
  },
  
  intermediateSection: {
    title: "Intermediate: Understanding the VS Code Interface",
    duration: "20 minutes",
    content: [
      {
        type: 'explanation',
        title: "The VS Code Window Layout",
        content: `When you open VS Code, you see several areas:

**1. Activity Bar (far left)**
Vertical bar with icons:
- 📁 Explorer (files and folders)
- 🔍 Search (find in files)
- 🔀 Source Control (Git)
- 🐛 Run and Debug (debugging)
- 📦 Extensions (add-ons)

**2. Side Bar (next to Activity Bar)**
Shows content based on which Activity Bar icon is selected. Usually shows your project files.

**3. Editor Area (center)**
This is where you write code. You can have multiple files open in tabs.

**4. Panel (bottom)**
Shows:
- Terminal (command line)
- Problems (errors and warnings)
- Output (messages from extensions)
- Debug Console (debugging info)

**5. Status Bar (very bottom)**
Shows current file info, line number, language mode, and more.`
      },
      {
        type: 'steps',
        title: "How to Open a Folder in VS Code",
        content: "Always work with folders (projects) open, not individual files:",
        steps: [
          {
            step: 1,
            action: "Open VS Code",
            details: "Click the VS Code icon on your desktop, taskbar, or Dock.",
            verification: "VS Code opens. You may see a Welcome tab."
          },
          {
            step: 2,
            action: "Click 'Open Folder'",
            details: "On the Welcome tab, click 'Open Folder'. Or use the menu: File → Open Folder (Windows/Linux) or File → Open (Mac).",
            verification: "A file browser dialog opens."
          },
          {
            step: 3,
            action: "Navigate to your project folder",
            details: "Find and click on your 'my-first-cypress-project' folder from Lesson 1. Click 'Select Folder' (Windows) or 'Open' (Mac).",
            verification: "VS Code shows your project folder in the Explorer side bar."
          }
        ]
      },
      {
        type: 'explanation',
        title: "Essential Keyboard Shortcuts",
        content: `Memorize these shortcuts to work 10x faster:

**File Operations:**
- \`Ctrl+N\` / \`Cmd+N\` - New file
- \`Ctrl+O\` / \`Cmd+O\` - Open file
- \`Ctrl+S\` / \`Cmd+S\` - Save file
- \`Ctrl+Shift+S\` / \`Cmd+Shift+S\` - Save As
- \`Ctrl+W\` / \`Cmd+W\` - Close current file

**Editing:**
- \`Ctrl+C\` / \`Cmd+C\` - Copy
- \`Ctrl+X\` / \`Cmd+X\` - Cut
- \`Ctrl+V\` / \`Cmd+V\` - Paste
- \`Ctrl+Z\` / \`Cmd+Z\` - Undo
- \`Ctrl+Shift+Z\` / \`Cmd+Shift+Z\` - Redo
- \`Ctrl+/\` / \`Cmd+/\` - Toggle comment

**Navigation:**
- \`Ctrl+P\` / \`Cmd+P\` - Quick open file by name
- \`Ctrl+G\` / \`Cmd+G\` - Go to line number
- \`Ctrl+F\` / \`Cmd+F\` - Find in file
- \`Ctrl+H\` / \`Cmd+H\` - Find and replace

**View:**
- \`Ctrl+\`\` / \`Cmd+\`\` - Toggle terminal
- \`Ctrl+B\` / \`Cmd+B\` - Toggle side bar
- \`Ctrl+Shift+E\` / \`Cmd+Shift+E\` - Explorer view
- \`Ctrl+Shift+X\` / \`Cmd+Shift+X\` - Extensions view`
      },
      {
        type: 'steps',
        title: "How to Open and Use the Terminal",
        content: "The integrated terminal is where you'll run Cypress commands:",
        steps: [
          {
            step: 1,
            action: "Open the terminal",
            details: "Press Ctrl+` (the backtick key, usually above Tab). Or go to View → Terminal in the menu.",
            verification: "A terminal panel appears at the bottom of VS Code."
          },
          {
            step: 2,
            action: "Verify the terminal location",
            details: "Look at the terminal prompt. It should show your project folder path. If it says 'my-first-cypress-project', you're in the right place.",
            verification: "The terminal shows your project folder name."
          },
          {
            step: 3,
            action: "Try a command",
            details: "Type: echo Hello World and press Enter.",
            verification: "The terminal prints 'Hello World' back to you."
          }
        ]
      }
    ]
  },
  
  advancedSection: {
    title: "Advanced: Essential Extensions for Testing",
    duration: "10 minutes",
    content: [
      {
        type: 'explanation',
        title: "What Are Extensions?",
        content: `Extensions add new features to VS Code. For Cypress testing, you need specific extensions that provide:
- Syntax highlighting for test files
- Auto-completion for Cypress commands
- TypeScript support
- AI assistance (GitHub Copilot)

**How Extensions Work:**
Extensions run inside VS Code and modify its behavior. They're like apps for your code editor.`
      },
      {
        type: 'steps',
        title: "How to Install Essential Extensions",
        content: "Install these extensions in order:",
        steps: [
          {
            step: 1,
            action: "Open Extensions panel",
            details: "Click the Extensions icon in the Activity Bar (looks like four squares). Or press Ctrl+Shift+X / Cmd+Shift+X.",
            verification: "The Extensions panel opens showing 'Search Extensions in Marketplace'."
          },
          {
            step: 2,
            action: "Install ESLint",
            details: "Type 'ESLint' in the search box. Find 'ESLint' by Microsoft (should be first result). Click the blue 'Install' button.",
            verification: "'Install' changes to 'Uninstall' and a gear icon."
          },
          {
            step: 3,
            action: "Install Prettier",
            details: "Search for 'Prettier - Code formatter'. Find the one by Prettier (has millions of downloads). Click 'Install'.",
            verification: "Prettier is installed."
          },
          {
            step: 4,
            action: "Install TypeScript support",
            details: "TypeScript is built into VS Code, but search for 'TypeScript Hero' and install it for better imports.",
            verification: "TypeScript Hero is installed."
          },
          {
            step: 5,
            action: "Install Cypress snippets",
            details: "Search for 'Cypress Snippets'. Install 'Cypress Snippets' by Cliff Su or similar with good reviews.",
            verification: "Cypress Snippets is installed."
          }
        ]
      },
      {
        type: 'tip',
        title: "Extension Recommendation: Install GitHub Copilot in Lesson 14",
        content: `We'll install GitHub Copilot later in the course (Lesson 14) because:
1. It requires a GitHub account
2. It may require a paid subscription
3. You need to understand coding basics first

For now, the extensions we installed will help you write code faster and catch errors early.`
      }
    ]
  },
  
  handsOnExercise: {
    title: "Exercise: Set Up VS Code for Cypress Development",
    objective: "Install VS Code, configure it properly, and install essential extensions.",
    problem: "You need a fully configured VS Code installation ready for Cypress test development.",
    prerequisites: [
      "Completed Lesson 1 (workspace folder exists)",
      "Internet connection for downloads",
      "Administrator access for installation"
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Download VS Code from the official website",
        howTo: "Open your browser. Type code.visualstudio.com in the address bar. Press Enter. Click the large blue download button. The website detects your OS automatically.",
        verification: "A file is downloading (look at bottom of browser or Downloads folder)."
      },
      {
        stepNumber: 2,
        instruction: "Install VS Code following the steps for your OS",
        howTo: "See the detailed installation steps in the Beginner section above. On Windows, make sure to check ALL boxes on the 'Select Additional Tasks' screen. On Mac, drag the icon to Applications folder.",
        verification: "VS Code opens when you launch it."
      },
      {
        stepNumber: 3,
        instruction: "Open your project folder in VS Code",
        howTo: "In VS Code, click File → Open Folder (Windows/Linux) or File → Open (Mac). Navigate to your automation-projects → my-first-cypress-project folder. Click 'Select Folder' or 'Open'.",
        verification: "You see your project folder structure in the left Explorer panel."
      },
      {
        stepNumber: 4,
        instruction: "Open the integrated terminal",
        howTo: "Press Ctrl+` (backtick key) or Cmd+` on Mac. The terminal panel appears at the bottom.",
        code: "# The terminal should show something like:\n# PS C:\\Users\\YourName\\automation-projects\\my-first-cypress-project>\n# or\n# YourName@MacBook my-first-cypress-project %",
        verification: "Terminal is open and shows your project folder name."
      },
      {
        stepNumber: 5,
        instruction: "Install the ESLint extension",
        howTo: "Press Ctrl+Shift+X (Cmd+Shift+X on Mac) to open Extensions. Type 'ESLint' in the search box. Click the blue 'Install' button on 'ESLint' by Microsoft.",
        verification: "The button changes to show a gear icon and 'Uninstall'."
      },
      {
        stepNumber: 6,
        instruction: "Install Prettier extension",
        howTo: "While still in Extensions, clear the search box. Type 'Prettier'. Install 'Prettier - Code formatter' by Prettier.",
        verification: "Prettier is installed."
      },
      {
        stepNumber: 7,
        instruction: "Create a test file to verify setup",
        howTo: "Press Ctrl+N (Cmd+N on Mac) to create a new file. Type: console.log('VS Code is ready!'); Press Ctrl+S (Cmd+S on Mac). Name the file 'test.ts' and save it in your project folder.",
        code: "console.log('VS Code is ready!');",
        verification: "The file is saved and shows TypeScript syntax highlighting (console is a different color than log)."
      }
    ],
    expectedOutput: `After completing this exercise:
- VS Code is installed and opens correctly
- Your project folder is open in VS Code
- The terminal is accessible (Ctrl+\`)
- ESLint and Prettier extensions are installed
- You have a test.ts file with syntax highlighting`,
    troubleshooting: [
      {
        issue: "VS Code won't open after installation",
        cause: "Installation may have failed or antivirus blocked it.",
        solution: "Try running the installer again as Administrator. Right-click installer → 'Run as administrator'."
      },
      {
        issue: "Terminal shows wrong folder",
        cause: "You may have opened VS Code without opening a folder.",
        solution: "File → Open Folder, select your project folder, then reopen terminal."
      },
      {
        issue: "Extensions search shows no results",
        cause: "No internet connection or proxy issues.",
        solution: "Check your internet connection. If on corporate network, contact IT about proxy settings."
      },
      {
        issue: "Can't find the backtick key for terminal",
        cause: "Different keyboard layouts have it in different places.",
        solution: "Use View → Terminal from the menu instead."
      }
    ]
  },
  
  exitChecklist: {
    items: [
      {
        skill: "VS Code is installed",
        verification: "I can launch VS Code from my desktop, taskbar, or Dock."
      },
      {
        skill: "I can open folders in VS Code",
        verification: "File → Open Folder works and shows my project in Explorer."
      },
      {
        skill: "I understand the VS Code interface",
        verification: "I can identify Activity Bar, Side Bar, Editor, Panel, and Status Bar."
      },
      {
        skill: "I can use the integrated terminal",
        verification: "Pressing Ctrl+` opens the terminal showing my project folder."
      },
      {
        skill: "I know basic keyboard shortcuts",
        verification: "I can save (Ctrl+S), open files (Ctrl+P), and toggle terminal (Ctrl+`)."
      },
      {
        skill: "Essential extensions are installed",
        verification: "ESLint and Prettier show in my installed extensions."
      }
    ]
  }
};

// ============================================================================
// CONTENT GENERATOR FUNCTION
// ============================================================================

const lessonContentMap: Record<string, CompleteLessonContent> = {
  "codex-lesson-1": lesson1Content,
  "codex-lesson-2": lesson2Content,
};

// Generate placeholder content for lessons that haven't been fully defined yet
function generatePlaceholderContent(lessonId: string, lessonNumber: number, title: string): CompleteLessonContent {
  return {
    lessonId,
    lessonNumber,
    title,
    overview: `This comprehensive lesson covers ${title}. You will learn step-by-step instructions for implementing enterprise-grade test automation practices.`,
    
    beginnerSection: {
      title: "Beginner: Foundations and Basic Concepts",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: `What is ${title}?`,
          content: `This section introduces the fundamental concepts of ${title}. As a beginner, you will learn what this concept means, why it exists, and how it fits into the bigger picture of test automation.

**Key Points:**
- Definition and purpose
- Real-world applications
- Why this matters for your career

**Prerequisites:**
- Previous lessons completed
- VS Code installed and configured
- Basic understanding of file navigation`
        },
        {
          type: 'steps',
          title: "How to Get Started",
          content: "Follow these step-by-step instructions:",
          steps: [
            {
              step: 1,
              action: "Open VS Code",
              details: "Launch VS Code by clicking its icon. Open your project folder if not already open.",
              verification: "VS Code shows your project in the Explorer panel."
            },
            {
              step: 2,
              action: "Open the terminal",
              details: "Press Ctrl+` (backtick) to open the integrated terminal.",
              verification: "Terminal is open at the bottom of VS Code."
            },
            {
              step: 3,
              action: "Prepare your workspace",
              details: "Make sure you're in the correct project folder by checking the terminal prompt.",
              verification: "Terminal shows your project folder name."
            }
          ]
        }
      ]
    },
    
    intermediateSection: {
      title: "Intermediate: Building Your Skills",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Implementing Core Concepts",
          content: `Now that you understand the basics, let's build on that knowledge with practical implementation.

**In this section you will:**
- Write actual code
- Implement real patterns
- Practice common scenarios

**What to expect:**
- Code examples with explanations
- Step-by-step instructions
- Common patterns used by professionals`
        },
        {
          type: 'code',
          title: "Code Example",
          content: "Here's a production-ready example:",
          code: `// Example code for ${title}
describe('Example Test Suite', () => {
  beforeEach(() => {
    // Setup runs before each test
    cy.visit('/');
  });

  it('should demonstrate the concept', () => {
    // Your test code here
    cy.get('[data-testid="example"]').should('be.visible');
  });
});`
        }
      ]
    },
    
    advancedSection: {
      title: "Advanced: Enterprise Implementation",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Enterprise Considerations",
          content: `**Scaling This Concept:**
When working in enterprise environments, you need to consider:
- Multi-team collaboration
- Compliance requirements
- Performance at scale
- Maintainability over years

**Best Practices:**
- Follow established patterns
- Document your decisions
- Consider security implications
- Plan for growth`
        },
        {
          type: 'warning',
          title: "Critical: Security Considerations",
          content: `Remember these non-negotiable security rules:
- Never commit secrets to code
- Always review AI-generated code
- Follow your organization's security policies
- Report any potential vulnerabilities`
        }
      ]
    },
    
    handsOnExercise: {
      title: `Exercise: Practice ${title}`,
      objective: `Apply what you learned about ${title} in a hands-on exercise.`,
      problem: "Put your knowledge into practice with this guided exercise.",
      prerequisites: [
        "Completed previous lessons",
        "VS Code with extensions installed",
        "Project folder set up"
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: "Set up your environment",
          howTo: "Open VS Code and navigate to your project folder. Make sure the terminal is ready.",
          verification: "VS Code is open with your project folder visible."
        },
        {
          stepNumber: 2,
          instruction: "Create a new test file",
          howTo: "Press Ctrl+N to create a new file. Save it as lesson-${lessonNumber}-exercise.cy.ts in your cypress/e2e folder.",
          code: `// cypress/e2e/lesson-${lessonNumber}-exercise.cy.ts\ndescribe('Lesson ${lessonNumber} Exercise', () => {\n  it('demonstrates the concept', () => {\n    // Your code here\n  });\n});`,
          verification: "The file is created with the starter code."
        },
        {
          stepNumber: 3,
          instruction: "Implement the solution",
          howTo: "Follow the patterns learned in this lesson to complete the test.",
          verification: "Your test runs successfully."
        }
      ],
      expectedOutput: `After completing this exercise, you should have:
- A working test file demonstrating the concepts
- Practical experience with ${title}
- Confidence to apply this knowledge in real projects`,
      troubleshooting: [
        {
          issue: "Test fails to run",
          cause: "Syntax error or missing configuration.",
          solution: "Check for typos and ensure Cypress is properly installed."
        }
      ]
    },
    
    exitChecklist: {
      items: [
        {
          skill: "I understand the core concept",
          verification: "I can explain what this topic is and why it matters."
        },
        {
          skill: "I can implement the basic pattern",
          verification: "I can write code demonstrating this concept without copying."
        },
        {
          skill: "I know when to use this",
          verification: "I can identify scenarios where this pattern applies."
        },
        {
          skill: "I completed the exercise",
          verification: "My exercise code runs successfully."
        }
      ]
    }
  };
}

export function generateCodexCourseContent(lessonId: string): CompleteLessonContent | null {
  // Return fully defined content if available
  if (lessonContentMap[lessonId]) {
    return lessonContentMap[lessonId];
  }
  
  // Extract lesson number from ID
  const match = lessonId.match(/codex-lesson-(\d+)/);
  if (!match) return null;
  
  const lessonNumber = parseInt(match[1]);
  
  // Import lesson data to get title
  // For now, return placeholder with lesson number
  const lessonTitles: Record<number, string> = {
    1: "Understanding Your Computer for Test Automation",
    2: "Installing and Mastering Visual Studio Code",
    3: "Terminal Basics for Test Automation",
    4: "Node.js and npm - The Foundation of Modern Testing",
    5: "Your First Cypress Installation and Test Run",
    6: "Understanding TypeScript Basics for Cypress",
    7: "Writing Your First Real Cypress Test",
    8: "Mastering Element Selectors in Cypress",
    9: "Cypress Test Structure and Organization",
    10: "Assertions - Verifying Your Application Works",
    11: "Debugging Failing Cypress Tests",
    12: "From Manual Tester to Automation Engineer Mindset",
    13: "Introduction to OpenAI Codex and GitHub Copilot",
    14: "Installing and Configuring GitHub Copilot in VS Code",
    15: "Your First AI-Generated Cypress Test",
    16: "Prompt Engineering Fundamentals for Testers",
    17: "Safe Enterprise Usage of AI Code Generation",
    18: "Page Object Model (POM) with AI Generation",
    19: "The Screenplay Pattern for Complex Workflows",
    20: "Hybrid Screenplay + POM Architecture",
    21: "Test Data Management Strategies",
    22: "Custom Commands and Reusable Utilities",
    23: "Eliminating Flaky Tests Forever",
    24: "Multi-Environment Configuration (20+ Environments)",
    25: "GitLab CI/CD Pipeline Configuration",
    26: "Nightly Regression on ACC/PreProd Environments",
    27: "Parallel Test Execution and Sharding",
    28: "Compliance, Audit Trails, and Governance",
    29: "Operating AI Codex Safely at Enterprise Scale",
    30: "Capstone: Building an Enterprise Cypress Framework"
  };
  
  const title = lessonTitles[lessonNumber] || `Lesson ${lessonNumber}`;
  
  return generatePlaceholderContent(lessonId, lessonNumber, title);
}

export default generateCodexCourseContent;
