// Comprehensive Content Generator for 30-Hour Udemy-Style Cypress + AI Codex Course
// Each lesson provides detailed step-by-step how-to guides

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
  code?: string;
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
// LESSON CONTENT DEFINITIONS
// ============================================================================

const lessonContents: Record<string, CompleteLessonContent> = {
  // LESSON 1
  "codex-lesson-1": {
    lessonId: "codex-lesson-1",
    lessonNumber: 1,
    title: "Understanding Your Computer for Test Automation",
    overview: "Before writing any test automation code, you need to understand how your computer organizes and manages files. This lesson teaches you the foundational skills of navigating your operating system, understanding file paths, and creating organized project structures.",
    beginnerSection: {
      title: "Beginner: Computer Basics for Complete Beginners",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is an Operating System?",
          content: `Your operating system (OS) is the software that makes your computer work. It controls the screen, keyboard, mouse, and organizes all your files.

**The Three Main Operating Systems:**

1. **Windows** - Made by Microsoft. Most common in corporate environments.
2. **macOS** - Made by Apple. Used on MacBooks and iMacs.
3. **Linux** - Free and open-source. Popular with developers.

**How to Check Your Operating System:**

On Windows:
- Click the Start button (Windows logo in bottom-left)
- Type "About your PC" and press Enter
- Look for "Windows 10" or "Windows 11"

On Mac:
- Click the Apple logo in the top-left corner
- Click "About This Mac"
- You'll see the macOS version`
        },
        {
          type: 'steps',
          title: "How to Open File Explorer/Finder",
          content: "File Explorer (Windows) or Finder (Mac) is how you browse files on your computer.",
          steps: [
            { step: 1, action: "Locate the File Explorer/Finder icon", details: "On Windows: Look at the taskbar for the yellow folder icon. On Mac: Look at the Dock for the blue/white smiley face.", verification: "You see the icon." },
            { step: 2, action: "Click the icon to open", details: "Single-click with your left mouse button.", verification: "A window opens showing folders like 'Documents', 'Downloads'." },
            { step: 3, action: "Understand the layout", details: "Left side = shortcuts. Main area = folder contents. Address bar = current location.", verification: "You can identify all three areas." }
          ]
        },
        {
          type: 'explanation',
          title: "Understanding File Paths",
          content: `A file path is the address of a file on your computer.

**Windows paths use backslashes:**
C:\\Users\\YourName\\Documents\\my-project\\test.ts

**Mac/Linux paths use forward slashes:**
/Users/YourName/Documents/my-project/test.ts

**How to Find a File's Path:**
- Windows: Navigate to file, click address bar, copy
- Mac: Right-click file, hold Option key, click "Copy as Pathname"`
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Setting Up Your Workspace",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Creating a Professional Workspace",
          content: `Create a dedicated folder for all automation projects:

**Recommended Location:**
- Windows: C:\\Users\\YourName\\automation-projects
- Mac: /Users/YourName/automation-projects

**Why This Location?**
- Easy to find
- Not buried in other folders
- Terminal-friendly (no spaces in path)`
        },
        {
          type: 'steps',
          title: "Create Your Workspace Folder",
          content: "Follow these steps exactly:",
          steps: [
            { step: 1, action: "Open File Explorer/Finder", details: "Click the icon in taskbar/dock.", verification: "Window opens." },
            { step: 2, action: "Navigate to your user folder", details: "Windows: This PC → C: → Users → YourName. Mac: Go → Home.", verification: "You see Documents, Downloads, Desktop." },
            { step: 3, action: "Create new folder", details: "Right-click empty space → New → Folder. Name: automation-projects", verification: "Folder appears with correct name." },
            { step: 4, action: "Create first project folder inside", details: "Open automation-projects, create folder: my-first-cypress-project", verification: "You have nested folder structure." }
          ]
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
          content: `Enterprise structure:
automation-projects/
├── company-web-app/
├── company-mobile-web/
├── shared-libraries/
└── documentation/`
        },
        {
          type: 'warning',
          title: "Never Store Secrets in Files",
          content: `NEVER put passwords or API keys in your project files. They get committed to repositories and can be exposed. Use environment variables instead (covered in Lesson 24).`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Set Up Your Automation Workspace",
      objective: "Create a professional workspace structure.",
      problem: "You need an organized workspace for all your Cypress projects.",
      prerequisites: ["Computer access", "Administrator rights"],
      steps: [
        { stepNumber: 1, instruction: "Open File Explorer/Finder", howTo: "Click the folder icon in taskbar (Windows) or Dock (Mac).", verification: "Window opens showing files." },
        { stepNumber: 2, instruction: "Navigate to your user folder", howTo: "Windows: Click This PC, then C:, Users, your username. Mac: Go menu → Home.", verification: "You see Documents, Downloads folders." },
        { stepNumber: 3, instruction: "Create automation-projects folder", howTo: "Right-click empty space → New → Folder. Type: automation-projects", verification: "Folder created with correct name." },
        { stepNumber: 4, instruction: "Create my-first-cypress-project inside", howTo: "Double-click automation-projects, right-click → New → Folder. Type: my-first-cypress-project", verification: "Nested folder exists." },
        { stepNumber: 5, instruction: "Record the full path", howTo: "Click address bar to see full path. Save it somewhere.", code: "# Windows: C:\\Users\\YourName\\automation-projects\\my-first-cypress-project\n# Mac: /Users/YourName/automation-projects/my-first-cypress-project", verification: "You have the path saved." }
      ],
      expectedOutput: "automation-projects/my-first-cypress-project folder exists with full path recorded.",
      troubleshooting: [
        { issue: "Can't create folder", cause: "No permissions.", solution: "Try in Documents folder instead, or contact IT." },
        { issue: "Folder name has spaces", cause: "Typed 'my first cypress project'", solution: "Right-click → Rename → use hyphens: my-first-cypress-project" }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "I know my operating system", verification: "I can state Windows/Mac/Linux version." },
        { skill: "I can open File Explorer/Finder", verification: "I can click the icon and browse files." },
        { skill: "I understand file paths", verification: "I can find and copy any file's path." },
        { skill: "I created my workspace", verification: "automation-projects folder exists with my-first-cypress-project inside." }
      ]
    }
  },

  // LESSON 2
  "codex-lesson-2": {
    lessonId: "codex-lesson-2",
    lessonNumber: 2,
    title: "Installing and Mastering Visual Studio Code",
    overview: "Visual Studio Code is where you will write all your Cypress tests. This lesson provides complete installation instructions and teaches you the essential features you need for test automation.",
    beginnerSection: {
      title: "Beginner: Downloading and Installing VS Code",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is Visual Studio Code?",
          content: `VS Code is a free code editor by Microsoft. It's where you:
- Write test code
- Run terminal commands
- Install helpful extensions
- Debug problems

**Note:** VS Code is different from "Visual Studio". Make sure you download "Visual Studio Code".`
        },
        {
          type: 'steps',
          title: "Download and Install VS Code",
          content: "Follow these exact steps:",
          steps: [
            { step: 1, action: "Open your web browser", details: "Click Chrome, Firefox, Edge, or Safari.", verification: "Browser is open." },
            { step: 2, action: "Go to code.visualstudio.com", details: "Type the URL in address bar, press Enter.", verification: "VS Code website loads with blue Download button." },
            { step: 3, action: "Click Download", details: "Click the blue button. It auto-detects your OS.", verification: "File starts downloading." },
            { step: 4, action: "Run the installer", details: "Open Downloads folder, double-click the file. Windows: Check ALL boxes on 'Additional Tasks' screen.", verification: "VS Code opens after installation." }
          ]
        },
        {
          type: 'explanation',
          title: "VS Code Interface Overview",
          content: `**Activity Bar (far left):** Icons for Explorer, Search, Git, Debug, Extensions
**Side Bar:** Shows content based on selected icon
**Editor Area (center):** Where you write code
**Panel (bottom):** Terminal, Problems, Output
**Status Bar (very bottom):** File info, line number`
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Essential Features",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Essential Keyboard Shortcuts",
          content: `Memorize these to work 10x faster:

**File Operations:**
- Ctrl+S / Cmd+S - Save
- Ctrl+N / Cmd+N - New file
- Ctrl+W / Cmd+W - Close file

**Editing:**
- Ctrl+C / Cmd+C - Copy
- Ctrl+V / Cmd+V - Paste
- Ctrl+Z / Cmd+Z - Undo
- Ctrl+/ / Cmd+/ - Toggle comment

**Navigation:**
- Ctrl+P / Cmd+P - Quick open file
- Ctrl+\` / Cmd+\` - Toggle terminal
- Ctrl+B / Cmd+B - Toggle sidebar`
        },
        {
          type: 'steps',
          title: "Opening a Folder in VS Code",
          content: "Always work with project folders open:",
          steps: [
            { step: 1, action: "Open VS Code", details: "Click VS Code icon.", verification: "VS Code opens." },
            { step: 2, action: "Click File → Open Folder", details: "Or use Ctrl+K, Ctrl+O.", verification: "File browser opens." },
            { step: 3, action: "Select your project folder", details: "Navigate to my-first-cypress-project, click Select Folder.", verification: "Project appears in Explorer sidebar." }
          ]
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Essential Extensions",
      duration: "10 minutes",
      content: [
        {
          type: 'steps',
          title: "Install Essential Extensions",
          content: "Install these extensions for Cypress development:",
          steps: [
            { step: 1, action: "Open Extensions panel", details: "Click Extensions icon (4 squares) or Ctrl+Shift+X.", verification: "Extensions panel opens." },
            { step: 2, action: "Install ESLint", details: "Search 'ESLint', click Install on Microsoft's version.", verification: "ESLint installed." },
            { step: 3, action: "Install Prettier", details: "Search 'Prettier', install 'Prettier - Code formatter'.", verification: "Prettier installed." },
            { step: 4, action: "Install Cypress Snippets", details: "Search 'Cypress Snippets', install.", verification: "Snippets available." }
          ]
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Set Up VS Code",
      objective: "Install VS Code and essential extensions.",
      problem: "You need a fully configured code editor for Cypress development.",
      prerequisites: ["Internet connection", "Admin access"],
      steps: [
        { stepNumber: 1, instruction: "Download VS Code", howTo: "Go to code.visualstudio.com, click Download.", verification: "File downloading." },
        { stepNumber: 2, instruction: "Install VS Code", howTo: "Run downloaded file, follow prompts. On Windows: check ALL boxes.", verification: "VS Code opens." },
        { stepNumber: 3, instruction: "Open your project folder", howTo: "File → Open Folder → select my-first-cypress-project.", verification: "Folder visible in sidebar." },
        { stepNumber: 4, instruction: "Open terminal", howTo: "Press Ctrl+` (backtick key above Tab).", code: "# Terminal should show your project path", verification: "Terminal panel appears at bottom." },
        { stepNumber: 5, instruction: "Install ESLint extension", howTo: "Ctrl+Shift+X, search ESLint, click Install.", verification: "ESLint shows 'Uninstall' button." }
      ],
      expectedOutput: "VS Code installed with project open, terminal accessible, ESLint installed.",
      troubleshooting: [
        { issue: "VS Code won't open", cause: "Installation failed.", solution: "Run installer as Administrator." },
        { issue: "Can't find backtick key", cause: "Different keyboard.", solution: "Use View → Terminal menu." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "VS Code is installed", verification: "I can launch VS Code from desktop/taskbar." },
        { skill: "I can open folders", verification: "File → Open Folder works." },
        { skill: "I can use terminal", verification: "Ctrl+` opens terminal." },
        { skill: "Extensions installed", verification: "ESLint and Prettier show in Extensions." }
      ]
    }
  },

  // LESSON 3
  "codex-lesson-3": {
    lessonId: "codex-lesson-3",
    lessonNumber: 3,
    title: "Terminal Basics for Test Automation",
    overview: "The terminal (command line) is essential for running Cypress tests, installing packages, and managing projects. This lesson teaches you the commands you'll use daily.",
    beginnerSection: {
      title: "Beginner: What is the Terminal?",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "Understanding the Terminal",
          content: `The terminal is a text-based way to control your computer. Instead of clicking icons, you type commands.

**Why Developers Use Terminal:**
- Faster than clicking through menus
- Can automate repetitive tasks
- Required for npm and Cypress commands
- Works the same across projects

**Terminal Names by OS:**
- Windows: Command Prompt, PowerShell, or Terminal
- Mac: Terminal
- Linux: Terminal

**The VS Code Terminal:**
VS Code has a built-in terminal. Press Ctrl+\` to open it. This is where you'll run all Cypress commands.`
        },
        {
          type: 'steps',
          title: "Opening and Using the Terminal",
          content: "Learn to open terminal in VS Code:",
          steps: [
            { step: 1, action: "Open VS Code with your project", details: "Launch VS Code, File → Open Folder → your project.", verification: "Project visible in sidebar." },
            { step: 2, action: "Open integrated terminal", details: "Press Ctrl+` (backtick) or View → Terminal.", verification: "Terminal panel appears at bottom." },
            { step: 3, action: "Check your location", details: "The prompt shows your current folder. Should show your project name.", verification: "Terminal shows my-first-cypress-project." },
            { step: 4, action: "Try the echo command", details: "Type: echo Hello World and press Enter.", verification: "Terminal prints 'Hello World'." }
          ]
        },
        {
          type: 'explanation',
          title: "Essential Navigation Commands",
          content: `**Print Current Directory:**
- Windows: cd (just cd alone)
- Mac/Linux: pwd

**List Files in Current Folder:**
- Windows: dir
- Mac/Linux: ls

**Change Directory (go into a folder):**
cd foldername

**Go Up One Folder:**
cd ..

**Go to Home Folder:**
- Windows: cd %USERPROFILE%
- Mac/Linux: cd ~

**Clear Terminal Screen:**
- Windows: cls
- Mac/Linux: clear`
        },
        {
          type: 'code',
          title: "Practice These Commands",
          content: "Try each command in your terminal:",
          code: `# See where you are
pwd        # Mac/Linux
cd         # Windows

# List files
ls         # Mac/Linux
dir        # Windows

# Go into a folder
cd cypress

# Go back up
cd ..

# Clear screen
clear      # Mac/Linux
cls        # Windows`
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Working with Files and Folders",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Creating and Managing Files",
          content: `**Create a New Folder:**
mkdir foldername

**Create a New File:**
- Windows: type nul > filename.txt
- Mac/Linux: touch filename.txt

**Delete a File:**
- Windows: del filename.txt
- Mac/Linux: rm filename.txt

**Delete a Folder:**
- Windows: rmdir foldername
- Mac/Linux: rm -r foldername

**Copy a File:**
- Windows: copy source.txt dest.txt
- Mac/Linux: cp source.txt dest.txt`
        },
        {
          type: 'steps',
          title: "Create Project Structure via Terminal",
          content: "Create folders using terminal commands:",
          steps: [
            { step: 1, action: "Ensure you're in project folder", details: "Terminal should show my-first-cypress-project.", verification: "Correct folder shown." },
            { step: 2, action: "Create cypress folder", details: "Type: mkdir cypress and press Enter.", verification: "No error message." },
            { step: 3, action: "Create subfolders", details: "Type: mkdir cypress/e2e and press Enter.", verification: "No error." },
            { step: 4, action: "Verify creation", details: "Type: ls cypress (Mac) or dir cypress (Windows).", verification: "You see e2e folder listed." }
          ]
        },
        {
          type: 'tip',
          title: "Tab Completion",
          content: `**Pro Tip: Use Tab to autocomplete!**

Type the first few letters of a folder/file name, then press Tab. The terminal will complete it for you.

Example:
- Type: cd cyp
- Press Tab
- Terminal completes to: cd cypress

This prevents typos and speeds up your workflow.`
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Command Chaining and History",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Running Multiple Commands",
          content: `**Chain Commands (run one after another):**
command1 && command2

Example: mkdir test && cd test
Creates folder AND enters it.

**Command History:**
- Press Up Arrow to see previous commands
- Press Down Arrow to go forward
- Type history (Mac/Linux) to see all recent commands

**Stopping a Running Command:**
Press Ctrl+C to stop any running process.`
        },
        {
          type: 'warning',
          title: "Dangerous Commands to Avoid",
          content: `**NEVER run these without understanding them:**

rm -rf /  (Linux/Mac) - Deletes EVERYTHING
del /F /S /Q *  (Windows) - Deletes all files

**Always double-check:**
- The folder you're in (pwd or cd)
- The command you're about to run
- That you have backups of important data`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Master Terminal Navigation",
      objective: "Practice essential terminal commands.",
      problem: "Create a complete project folder structure using only terminal commands.",
      prerequisites: ["VS Code installed", "Project folder exists"],
      steps: [
        { stepNumber: 1, instruction: "Open terminal in VS Code", howTo: "Open VS Code with project folder, press Ctrl+`.", verification: "Terminal shows your project path." },
        { stepNumber: 2, instruction: "Verify your location", howTo: "Type pwd (Mac) or cd (Windows).", code: "pwd\n# Should show: /Users/YourName/automation-projects/my-first-cypress-project", verification: "Path matches your project." },
        { stepNumber: 3, instruction: "Create cypress folder", howTo: "Type: mkdir cypress", verification: "No error message." },
        { stepNumber: 4, instruction: "Create subfolders", howTo: "Type: mkdir cypress/e2e cypress/fixtures cypress/support", verification: "All folders created." },
        { stepNumber: 5, instruction: "Create a test file", howTo: "Mac: touch cypress/e2e/example.cy.ts\nWindows: type nul > cypress\\e2e\\example.cy.ts", verification: "File created." },
        { stepNumber: 6, instruction: "Verify structure", howTo: "Type: ls -R cypress (Mac) or dir /S cypress (Windows)", code: "# Should show:\n# cypress/e2e/example.cy.ts\n# cypress/fixtures/\n# cypress/support/", verification: "All folders and file visible." }
      ],
      expectedOutput: "Project has cypress folder with e2e, fixtures, support subfolders, and example.cy.ts file.",
      troubleshooting: [
        { issue: "'mkdir' not recognized", cause: "Wrong terminal type.", solution: "Make sure you're using PowerShell or cmd on Windows." },
        { issue: "Permission denied", cause: "No write access.", solution: "Try running VS Code as Administrator." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "I can open terminal in VS Code", verification: "Ctrl+` opens terminal." },
        { skill: "I can navigate folders", verification: "I can use cd and pwd/dir." },
        { skill: "I can create folders", verification: "mkdir creates folders." },
        { skill: "I can list files", verification: "ls or dir shows folder contents." },
        { skill: "I understand Tab completion", verification: "I use Tab to autocomplete paths." }
      ]
    }
  },

  // LESSON 4
  "codex-lesson-4": {
    lessonId: "codex-lesson-4",
    lessonNumber: 4,
    title: "Node.js and npm - The Foundation of Modern Testing",
    overview: "Node.js and npm are required to run Cypress. This lesson explains what they are, how to install them, and how they work together to power your test automation.",
    beginnerSection: {
      title: "Beginner: Understanding Node.js and npm",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is Node.js?",
          content: `Node.js is a program that runs JavaScript code on your computer. Normally, JavaScript only runs in web browsers. Node.js lets it run anywhere.

**Why Do You Need Node.js for Cypress?**
- Cypress is written in JavaScript
- Node.js runs the Cypress test runner
- Without Node.js, Cypress cannot work

**What is npm?**
npm (Node Package Manager) is a tool that comes with Node.js. It:
- Downloads and installs packages (like Cypress)
- Manages project dependencies
- Runs scripts defined in your project

Think of npm as an "app store" for JavaScript tools.`
        },
        {
          type: 'steps',
          title: "Install Node.js (Includes npm)",
          content: "Download and install Node.js:",
          steps: [
            { step: 1, action: "Go to nodejs.org", details: "Open browser, type nodejs.org, press Enter.", verification: "Node.js website loads." },
            { step: 2, action: "Download LTS version", details: "Click the button that says 'LTS' (Long Term Support). This is the stable version.", verification: "Installer file downloads." },
            { step: 3, action: "Run the installer", details: "Open Downloads folder, double-click the .msi (Windows) or .pkg (Mac) file.", verification: "Installer wizard opens." },
            { step: 4, action: "Follow installation prompts", details: "Click Next through all screens. Accept defaults. Click Install when prompted.", verification: "Installation completes." },
            { step: 5, action: "Restart VS Code", details: "Close VS Code completely and reopen it.", verification: "VS Code opens fresh." }
          ]
        },
        {
          type: 'steps',
          title: "Verify Node.js and npm Installation",
          content: "Confirm everything installed correctly:",
          steps: [
            { step: 1, action: "Open terminal in VS Code", details: "Press Ctrl+`.", verification: "Terminal opens." },
            { step: 2, action: "Check Node.js version", details: "Type: node --version and press Enter.", code: "node --version\n# Should output something like: v20.10.0", verification: "Version number appears (v18+ is good)." },
            { step: 3, action: "Check npm version", details: "Type: npm --version and press Enter.", code: "npm --version\n# Should output something like: 10.2.0", verification: "Version number appears." }
          ]
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Understanding package.json",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is package.json?",
          content: `package.json is a file that describes your project. It contains:
- Project name and version
- List of dependencies (packages your project needs)
- Scripts (commands you can run)

Every Node.js project needs a package.json file.`
        },
        {
          type: 'steps',
          title: "Create package.json for Your Project",
          content: "Initialize your project with npm:",
          steps: [
            { step: 1, action: "Navigate to project folder", details: "Terminal should show my-first-cypress-project.", verification: "Correct folder." },
            { step: 2, action: "Initialize npm", details: "Type: npm init -y and press Enter. The -y flag accepts all defaults.", code: "npm init -y\n# Creates package.json with default values", verification: "Message says 'Created package.json'." },
            { step: 3, action: "View package.json", details: "Open package.json in VS Code by clicking it in the sidebar.", verification: "JSON file opens in editor." }
          ]
        },
        {
          type: 'explanation',
          title: "Understanding package.json Contents",
          content: `Here's what each field means:

{
  "name": "my-first-cypress-project",  // Project name
  "version": "1.0.0",                   // Your version
  "description": "",                    // What your project does
  "main": "index.js",                   // Entry point (not used in testing)
  "scripts": {                          // Commands you can run
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {},                   // Packages needed to run
  "devDependencies": {}                 // Packages needed for development
}`
        },
        {
          type: 'explanation',
          title: "Installing Packages with npm",
          content: `**Install a package:**
npm install packagename

**Install as dev dependency (for testing tools):**
npm install --save-dev packagename

**What happens when you install:**
1. npm downloads the package
2. Puts it in node_modules folder
3. Adds it to package.json
4. Creates/updates package-lock.json`
        }
      ]
    },
    advancedSection: {
      title: "Advanced: npm Scripts and node_modules",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Understanding node_modules",
          content: `**node_modules folder:**
- Contains all installed packages
- Can get VERY large (100MB+)
- Should NEVER be edited manually
- Should NEVER be committed to Git

**If node_modules is deleted:**
Run npm install to recreate it from package.json.

**package-lock.json:**
- Records exact versions of all packages
- Ensures consistent installs across computers
- SHOULD be committed to Git`
        },
        {
          type: 'tip',
          title: "Useful npm Commands",
          content: `**npm install** - Install all packages from package.json
**npm install package** - Install specific package
**npm uninstall package** - Remove a package
**npm update** - Update all packages
**npm run scriptname** - Run a script from package.json
**npm list** - Show installed packages
**npm outdated** - Show packages needing updates`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Set Up Node.js Project",
      objective: "Install Node.js and initialize your project.",
      problem: "Your project needs Node.js and package.json to install Cypress.",
      prerequisites: ["VS Code installed", "Project folder created"],
      steps: [
        { stepNumber: 1, instruction: "Download Node.js", howTo: "Go to nodejs.org, click LTS download button.", verification: "File downloads." },
        { stepNumber: 2, instruction: "Install Node.js", howTo: "Run downloaded file, click Next through all prompts, Install.", verification: "Installation completes." },
        { stepNumber: 3, instruction: "Restart VS Code", howTo: "Close VS Code, reopen it, open your project folder.", verification: "VS Code opens with project." },
        { stepNumber: 4, instruction: "Verify Node.js", howTo: "Open terminal (Ctrl+`), type: node --version", code: "node --version\n# Example output: v20.10.0", verification: "Version number shows." },
        { stepNumber: 5, instruction: "Verify npm", howTo: "Type: npm --version", code: "npm --version\n# Example output: 10.2.0", verification: "Version number shows." },
        { stepNumber: 6, instruction: "Initialize project", howTo: "Type: npm init -y", verification: "package.json created message." },
        { stepNumber: 7, instruction: "Verify package.json", howTo: "Click package.json in VS Code sidebar.", verification: "JSON file opens showing project info." }
      ],
      expectedOutput: "Node.js and npm installed, package.json exists in project root.",
      troubleshooting: [
        { issue: "'node' not recognized", cause: "Node.js not in PATH.", solution: "Restart computer and try again." },
        { issue: "npm init fails", cause: "Not in project folder.", solution: "cd to your project folder first." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "Node.js is installed", verification: "node --version shows version." },
        { skill: "npm is installed", verification: "npm --version shows version." },
        { skill: "I understand package.json", verification: "I can explain what each field does." },
        { skill: "Project is initialized", verification: "package.json exists in my project." }
      ]
    }
  },

  // LESSON 5
  "codex-lesson-5": {
    lessonId: "codex-lesson-5",
    lessonNumber: 5,
    title: "Your First Cypress Installation and Test Run",
    overview: "This is the moment everything becomes real. You will install Cypress, run the Test Runner for the first time, and execute automated tests that control a real browser.",
    beginnerSection: {
      title: "Beginner: Installing Cypress",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is Cypress?",
          content: `Cypress is a test automation tool that:
- Controls web browsers automatically
- Runs tests you write in JavaScript/TypeScript
- Shows you exactly what's happening
- Takes screenshots and videos of tests

**How Cypress Works:**
1. You write test code describing actions (click, type, etc.)
2. Cypress opens a browser
3. Cypress performs the actions automatically
4. Cypress reports pass/fail results`
        },
        {
          type: 'steps',
          title: "Install Cypress",
          content: "Install Cypress using npm:",
          steps: [
            { step: 1, action: "Open terminal in VS Code", details: "Press Ctrl+` in your project.", verification: "Terminal opens in project folder." },
            { step: 2, action: "Install Cypress as dev dependency", details: "Type: npm install cypress --save-dev and press Enter.", code: "npm install cypress --save-dev\n# This downloads Cypress (may take 1-2 minutes)", verification: "No errors. 'added X packages' message." },
            { step: 3, action: "Verify installation", details: "Check package.json - you should see cypress in devDependencies.", verification: "cypress appears in devDependencies." }
          ]
        },
        {
          type: 'steps',
          title: "Open Cypress for the First Time",
          content: "Launch the Cypress Test Runner:",
          steps: [
            { step: 1, action: "Run Cypress open command", details: "Type: npx cypress open and press Enter.", code: "npx cypress open\n# First run takes longer - Cypress verifies installation", verification: "Cypress window opens." },
            { step: 2, action: "Select E2E Testing", details: "Click 'E2E Testing' option in the Cypress welcome screen.", verification: "Configuration screen appears." },
            { step: 3, action: "Continue with configuration", details: "Click 'Continue' - Cypress creates necessary files.", verification: "Browser selection screen appears." },
            { step: 4, action: "Select Chrome browser", details: "Click 'Chrome' (or your preferred browser), then 'Start E2E Testing'.", verification: "Browser opens with Cypress interface." }
          ]
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Understanding Cypress Structure",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Cypress Folder Structure",
          content: `After first run, Cypress creates:

my-first-cypress-project/
├── cypress/
│   ├── e2e/              # Your test files go here
│   ├── fixtures/         # Test data (JSON files)
│   ├── support/          # Helper functions
│   │   ├── commands.ts   # Custom commands
│   │   └── e2e.ts        # Runs before each test
│   └── downloads/        # Downloaded files
├── cypress.config.ts     # Cypress configuration
├── node_modules/         # Installed packages
└── package.json          # Project config`
        },
        {
          type: 'steps',
          title: "Create Your First Test File",
          content: "Create a simple test:",
          steps: [
            { step: 1, action: "Create new file in cypress/e2e", details: "Right-click cypress/e2e folder → New File → Name it: first-test.cy.ts", verification: "File appears in sidebar." },
            { step: 2, action: "Add test code", details: "Copy this code into the file:", code: `describe('My First Test', () => {
  it('visits a website', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})`, verification: "Code appears in editor." },
            { step: 3, action: "Save the file", details: "Press Ctrl+S.", verification: "File saved (no dot next to filename)." }
          ]
        },
        {
          type: 'steps',
          title: "Run Your First Test",
          content: "Execute the test in Cypress:",
          steps: [
            { step: 1, action: "Return to Cypress Test Runner", details: "Click on the Cypress window (or run npx cypress open again).", verification: "Cypress interface visible." },
            { step: 2, action: "Click on your test file", details: "Click 'first-test.cy.ts' in the list.", verification: "Browser opens with test running." },
            { step: 3, action: "Watch the test execute", details: "Cypress opens example.com and verifies text.", verification: "Test passes (green checkmark)." }
          ]
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Cypress Configuration",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Understanding cypress.config.ts",
          content: `Configuration file controls Cypress behavior:`,
          code: `import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',  // Default URL
    viewportWidth: 1280,                // Browser width
    viewportHeight: 720,                // Browser height
    video: true,                        // Record videos
    screenshotOnRunFailure: true,       // Screenshot on fail
    setupNodeEvents(on, config) {
      // Add plugins here
    },
  },
});`
        },
        {
          type: 'tip',
          title: "Running Tests from Terminal",
          content: `**Interactive mode (with UI):**
npx cypress open

**Headless mode (no UI, for CI/CD):**
npx cypress run

**Run specific test file:**
npx cypress run --spec "cypress/e2e/first-test.cy.ts"

**Run in specific browser:**
npx cypress run --browser chrome`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Install Cypress and Run First Test",
      objective: "Complete Cypress setup and run your first automated test.",
      problem: "Install Cypress and verify it works by running a test.",
      prerequisites: ["Node.js installed", "package.json exists"],
      steps: [
        { stepNumber: 1, instruction: "Install Cypress", howTo: "Open terminal, type: npm install cypress --save-dev", code: "npm install cypress --save-dev", verification: "'added X packages' message appears." },
        { stepNumber: 2, instruction: "Open Cypress", howTo: "Type: npx cypress open", verification: "Cypress window opens." },
        { stepNumber: 3, instruction: "Select E2E Testing", howTo: "Click 'E2E Testing' in Cypress.", verification: "Config screen appears." },
        { stepNumber: 4, instruction: "Continue and select browser", howTo: "Click Continue, then select Chrome, click Start.", verification: "Browser opens." },
        { stepNumber: 5, instruction: "Create test file", howTo: "In VS Code, right-click cypress/e2e → New File → first-test.cy.ts", verification: "File created." },
        { stepNumber: 6, instruction: "Add test code", howTo: "Paste this code:", code: `describe('My First Test', () => {
  it('visits example.com', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})`, verification: "Code in file." },
        { stepNumber: 7, instruction: "Run the test", howTo: "Click first-test.cy.ts in Cypress Test Runner.", verification: "Test passes with green checkmark." }
      ],
      expectedOutput: "Cypress installed, test file created, test passes showing green checkmark.",
      troubleshooting: [
        { issue: "Cypress install hangs", cause: "Network issues.", solution: "Wait longer or check internet connection." },
        { issue: "Browser doesn't open", cause: "Chrome not installed.", solution: "Install Chrome or select different browser." },
        { issue: "Test not visible in Cypress", cause: "Wrong file location.", solution: "Make sure file is in cypress/e2e folder." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "Cypress is installed", verification: "package.json shows cypress in devDependencies." },
        { skill: "I can open Cypress", verification: "npx cypress open launches Test Runner." },
        { skill: "I created a test file", verification: "first-test.cy.ts exists in cypress/e2e." },
        { skill: "I ran my first test", verification: "Test passed with green checkmark." }
      ]
    }
  }
};

// Generate content for remaining lessons (6-30)
function generateLessonContent(lessonNumber: number): CompleteLessonContent {
  const lessonTitles: Record<number, string> = {
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

  const lessonDescriptions: Record<number, string> = {
    6: "TypeScript adds type safety to JavaScript, catching errors before tests run. This lesson teaches TypeScript fundamentals for Cypress testing.",
    7: "Learn the complete structure of Cypress tests - describe blocks, it blocks, hooks, and how to organize tests professionally.",
    8: "Selectors find elements on the page. Master CSS selectors, data-testid attributes, and best practices for reliable tests.",
    9: "Organize tests with before/after hooks, fixtures for test data, and folder structures that scale to thousands of tests.",
    10: "Assertions verify your application works correctly. Learn should(), expect(), and how to write comprehensive verifications.",
    11: "When tests fail, you need to debug quickly. Learn time-travel debugging, cy.pause(), and systematic troubleshooting.",
    12: "Transform your thinking from manual testing to automation. Learn what to automate, ROI calculations, and strategic test planning.",
    13: "Understand what OpenAI Codex is, how GitHub Copilot uses it, and the proper boundaries for AI in enterprise testing.",
    14: "Step-by-step GitHub Copilot installation, configuration for testing workflows, and verification of setup.",
    15: "Generate your first complete Cypress test using AI. Learn to write prompts, accept suggestions, and iterate on results.",
    16: "Master prompt engineering - the skill that determines AI output quality. Learn context loading, specificity, and refinement.",
    17: "Critical safety rules for AI in enterprise: authoring-time only, no credentials, code review requirements, compliance.",
    18: "Learn Page Object Model pattern and use AI to generate production-grade page objects that scale across applications.",
    19: "The Screenplay pattern handles complex workflows. Learn Actors, Tasks, Questions, and when to use vs POM.",
    20: "Combine Screenplay and POM into powerful hybrid architectures used by enterprise teams.",
    21: "Master test data handling - fixtures, factories, dynamic generation, database seeding, and data isolation.",
    22: "Create powerful custom Cypress commands that eliminate duplication and make tests readable.",
    23: "Eliminate flaky tests forever. Learn root causes, waiting strategies, network handling, and building reliable suites.",
    24: "Configure Cypress for 20+ environments - environment configs, secret management, and seamless switching.",
    25: "Build production GitLab CI/CD pipelines that run Cypress tests automatically on every code change.",
    26: "Set up scheduled nightly regression runs against ACC/PreProd with parallel execution and failure notifications.",
    27: "Reduce test execution from hours to minutes using parallel execution, sharding, and intelligent distribution.",
    28: "Implement compliance requirements - audit trails, evidence collection, change management, and governance.",
    29: "Scale AI usage safely across enterprise teams - governance frameworks, training programs, risk mitigation.",
    30: "Apply everything to build a complete enterprise Cypress framework from scratch as your capstone project."
  };

  const title = lessonTitles[lessonNumber] || `Lesson ${lessonNumber}`;
  const overview = lessonDescriptions[lessonNumber] || `Comprehensive lesson on ${title}.`;

  // Generate specific content based on lesson number
  return {
    lessonId: `codex-lesson-${lessonNumber}`,
    lessonNumber,
    title,
    overview,
    beginnerSection: generateBeginnerSection(lessonNumber, title),
    intermediateSection: generateIntermediateSection(lessonNumber, title),
    advancedSection: generateAdvancedSection(lessonNumber, title),
    handsOnExercise: generateExercise(lessonNumber, title),
    exitChecklist: generateChecklist(lessonNumber, title)
  };
}

function generateBeginnerSection(lessonNumber: number, title: string): LessonSection {
  const contents: Record<number, SectionContent[]> = {
    6: [
      { type: 'explanation', title: "What is TypeScript?", content: `TypeScript is JavaScript with types. Types tell the computer what kind of data you're working with.

**Why Use TypeScript?**
- Catches errors before running tests
- Better autocomplete in VS Code
- Easier to understand code
- Industry standard for enterprise

**Basic Types:**
- string: Text like "hello"
- number: Numbers like 42
- boolean: true or false
- array: List of items like [1, 2, 3]` },
      { type: 'steps', title: "Setting Up TypeScript", content: "Configure TypeScript for Cypress:", steps: [
        { step: 1, action: "Cypress already includes TypeScript", details: "When you created cypress.config.ts, TypeScript was set up.", verification: "cypress.config.ts exists." },
        { step: 2, action: "Create tsconfig.json if missing", details: "Usually Cypress creates this. If not, create it.", verification: "tsconfig.json exists." },
        { step: 3, action: "Verify .ts files work", details: "Your test files should be .cy.ts extension.", verification: "Tests run without type errors." }
      ]}
    ],
    7: [
      { type: 'explanation', title: "Anatomy of a Cypress Test", content: `Every Cypress test has this structure:

describe('Feature Name', () => {
  it('should do something', () => {
    // Test code here
  })
})

**describe()** - Groups related tests together
**it()** - A single test case
**cy.** - Cypress commands (visit, get, click, etc.)` },
      { type: 'code', title: "Complete Test Example", content: "Here's a real-world test:", code: `describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should display login form', () => {
    cy.get('[data-testid="email"]').should('be.visible')
    cy.get('[data-testid="password"]').should('be.visible')
    cy.get('[data-testid="submit"]').should('contain', 'Log In')
  })

  it('should show error for invalid credentials', () => {
    cy.get('[data-testid="email"]').type('wrong@email.com')
    cy.get('[data-testid="password"]').type('wrongpass')
    cy.get('[data-testid="submit"]').click()
    cy.get('[data-testid="error"]').should('be.visible')
  })
})` }
    ],
    8: [
      { type: 'explanation', title: "What Are Selectors?", content: `Selectors find elements on the page. Without selectors, Cypress can't click buttons or type in fields.

**Types of Selectors:**
1. **CSS Selectors** - Most common
2. **data-testid** - Most reliable
3. **cy.contains()** - Find by text

**CSS Selector Examples:**
- #id - Element with specific ID
- .class - Element with class
- button - All button elements
- [attribute] - Element with attribute` },
      { type: 'code', title: "Selector Examples", content: "Different ways to select elements:", code: `// By ID
cy.get('#submit-button')

// By class
cy.get('.btn-primary')

// By data-testid (RECOMMENDED)
cy.get('[data-testid="login-form"]')

// By text content
cy.contains('Submit')

// By attribute
cy.get('[type="email"]')

// Chained selectors
cy.get('.form').find('input').first()` }
    ],
    13: [
      { type: 'explanation', title: "What is OpenAI Codex?", content: `OpenAI Codex is an AI that understands code. It powers GitHub Copilot.

**What Codex Does:**
- Reads your comments and code context
- Suggests code completions
- Generates entire functions
- Understands natural language

**What Codex is NOT:**
- Not a replacement for testers
- Not infallible (makes mistakes)
- Not for runtime execution
- Not for handling credentials

**GitHub Copilot:**
Copilot is VS Code extension powered by Codex.` },
      { type: 'warning', title: "Critical: Codex Safety Rules", content: `ALWAYS REMEMBER:
1. Codex is used at AUTHORING time only
2. Never let AI handle credentials
3. Always review AI-generated code
4. AI never runs during test execution
5. AI never makes test decisions autonomously` }
    ],
    14: [
      { type: 'steps', title: "Install GitHub Copilot", content: "Step-by-step installation:", steps: [
        { step: 1, action: "Sign up for GitHub account", details: "Go to github.com, click Sign Up, create account.", verification: "You can log in to GitHub." },
        { step: 2, action: "Subscribe to Copilot", details: "Go to github.com/features/copilot, click 'Start my free trial' or subscribe.", verification: "Copilot subscription active." },
        { step: 3, action: "Open VS Code Extensions", details: "Press Ctrl+Shift+X to open Extensions panel.", verification: "Extensions panel opens." },
        { step: 4, action: "Search and install GitHub Copilot", details: "Search 'GitHub Copilot', click Install.", verification: "Copilot installed." },
        { step: 5, action: "Sign in to GitHub in VS Code", details: "Click 'Sign in to GitHub' prompt, authorize in browser.", verification: "VS Code connected to GitHub." }
      ]}
    ],
    15: [
      { type: 'explanation', title: "Your First AI-Generated Test", content: `Now let's use Copilot to generate a test!

**The Process:**
1. Write a comment describing what you want
2. Press Enter and wait
3. Copilot shows suggestion in gray
4. Press Tab to accept, Esc to reject

**Good Prompts:**
- Be specific about the page
- Describe the actions
- Mention what to verify` },
      { type: 'code', title: "Triggering Copilot", content: "Write this comment and see what happens:", code: `// Test the login page:
// 1. Visit /login
// 2. Enter email: test@example.com
// 3. Enter password: Test123!
// 4. Click submit
// 5. Verify redirect to /dashboard

// Copilot will suggest code below this line...` }
    ],
    25: [
      { type: 'explanation', title: "What is GitLab CI/CD?", content: `CI/CD = Continuous Integration / Continuous Deployment

**What It Does:**
- Automatically runs tests when code changes
- Runs in the cloud, not your computer
- Reports pass/fail status
- Can block bad code from merging

**How It Works:**
1. You push code to GitLab
2. GitLab reads .gitlab-ci.yml file
3. GitLab runs your tests
4. Results appear in GitLab UI` },
      { type: 'code', title: "Basic GitLab CI Configuration", content: "Create .gitlab-ci.yml in project root:", code: `# .gitlab-ci.yml
stages:
  - test

cypress_tests:
  stage: test
  image: cypress/browsers:node18.12.0-chrome107
  script:
    - npm ci
    - npx cypress run
  artifacts:
    when: always
    paths:
      - cypress/videos
      - cypress/screenshots` }
    ]
  };

  return {
    title: "Beginner: Foundation Concepts",
    duration: "25 minutes",
    content: contents[lessonNumber] || [
      { type: 'explanation', title: `Introduction to ${title}`, content: `This section covers the fundamental concepts of ${title}.\n\nYou will learn:\n- What this concept is\n- Why it matters\n- How it fits into test automation\n- Step-by-step basics` },
      { type: 'steps', title: "Getting Started", content: "Follow these steps:", steps: [
        { step: 1, action: "Open your project in VS Code", details: "Launch VS Code, File → Open Folder → your project.", verification: "Project visible in sidebar." },
        { step: 2, action: "Open terminal", details: "Press Ctrl+` to open terminal.", verification: "Terminal panel visible." },
        { step: 3, action: "Prepare your environment", details: "Ensure you're in the correct folder.", verification: "Terminal shows project name." }
      ]}
    ]
  };
}

function generateIntermediateSection(lessonNumber: number, title: string): LessonSection {
  const contents: Record<number, SectionContent[]> = {
    6: [
      { type: 'explanation', title: "Type Annotations", content: `Tell TypeScript what type a variable is:

const name: string = 'John'
const age: number = 30
const isActive: boolean = true

**Function Types:**
function greet(name: string): string {
  return 'Hello ' + name
}

**Object Types (Interfaces):**
interface User {
  name: string
  email: string
  age: number
}` },
      { type: 'code', title: "TypeScript in Cypress", content: "Typing page objects:", code: `interface LoginPageElements {
  emailInput: string
  passwordInput: string
  submitButton: string
  errorMessage: string
}

const selectors: LoginPageElements = {
  emailInput: '[data-testid="email"]',
  passwordInput: '[data-testid="password"]',
  submitButton: '[data-testid="submit"]',
  errorMessage: '[data-testid="error"]'
}

cy.get(selectors.emailInput).type('test@example.com')` }
    ],
    7: [
      { type: 'explanation', title: "Test Hooks", content: `Hooks run code at specific times:

**before()** - Once before ALL tests
**beforeEach()** - Before EACH test
**after()** - Once after ALL tests  
**afterEach()** - After EACH test

Use hooks for:
- Setting up test data
- Logging in users
- Cleaning up after tests` },
      { type: 'code', title: "Using Hooks", content: "Complete example with hooks:", code: `describe('Shopping Cart', () => {
  before(() => {
    // Runs once - set up test data
    cy.task('seedDatabase')
  })

  beforeEach(() => {
    // Runs before each test - log in
    cy.login('test@example.com', 'password123')
    cy.visit('/cart')
  })

  afterEach(() => {
    // Runs after each test - clear cart
    cy.clearCart()
  })

  it('adds item to cart', () => {
    cy.get('[data-testid="add-item"]').click()
    cy.get('[data-testid="cart-count"]').should('contain', '1')
  })

  it('removes item from cart', () => {
    cy.get('[data-testid="remove-item"]').click()
    cy.get('[data-testid="cart-empty"]').should('be.visible')
  })
})` }
    ],
    8: [
      { type: 'explanation', title: "Best Practice: data-testid", content: `data-testid attributes are the MOST RELIABLE selectors.

**Why?**
- Don't change with styling
- Clearly mark testable elements
- Survive refactoring
- Easy to understand

**How to Add:**
<button data-testid="submit-btn">Submit</button>

**How to Select:**
cy.get('[data-testid="submit-btn"]')` },
      { type: 'code', title: "Selector Strategies", content: "Best to worst selectors:", code: `// BEST - data-testid (won't change)
cy.get('[data-testid="submit"]')

// GOOD - aria labels (accessibility)
cy.get('[aria-label="Submit form"]')

// OK - specific classes
cy.get('.submit-button')

// AVOID - generic classes
cy.get('.btn') // Too generic!

// WORST - XPath or deep nesting
cy.xpath('//div/form/button[2]') // Fragile!` }
    ],
    18: [
      { type: 'explanation', title: "Page Object Model (POM)", content: `POM is a design pattern that:
- Separates test logic from page details
- Creates reusable page classes
- Makes tests readable
- Simplifies maintenance

**Structure:**
- Page class contains selectors and methods
- Tests use page class methods
- Change selector once, all tests update` },
      { type: 'code', title: "Page Object Example", content: "Complete Page Object:", code: `// pages/LoginPage.ts
export class LoginPage {
  // Selectors
  private emailInput = '[data-testid="email"]'
  private passwordInput = '[data-testid="password"]'
  private submitButton = '[data-testid="submit"]'
  private errorMessage = '[data-testid="error"]'

  // Actions
  visit() {
    cy.visit('/login')
    return this
  }

  enterEmail(email: string) {
    cy.get(this.emailInput).type(email)
    return this
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).type(password)
    return this
  }

  submit() {
    cy.get(this.submitButton).click()
    return this
  }

  // Assertions
  verifyError(message: string) {
    cy.get(this.errorMessage).should('contain', message)
  }
}

// Using in test:
const loginPage = new LoginPage()
loginPage.visit()
  .enterEmail('test@example.com')
  .enterPassword('password123')
  .submit()` }
    ]
  };

  return {
    title: "Intermediate: Practical Implementation",
    duration: "20 minutes",
    content: contents[lessonNumber] || [
      { type: 'explanation', title: "Building on the Basics", content: `Now let's implement ${title} in your project.\n\n**In this section:**\n- Write real code\n- Follow professional patterns\n- Practice common scenarios` },
      { type: 'code', title: "Code Example", content: "Production-ready implementation:", code: `describe('${title} Example', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('demonstrates the concept', () => {
    // Your implementation here
    cy.get('[data-testid="example"]')
      .should('be.visible')
      .click()
  })
})` }
    ]
  };
}

function generateAdvancedSection(lessonNumber: number, title: string): LessonSection {
  const contents: Record<number, SectionContent[]> = {
    6: [
      { type: 'explanation', title: "Advanced TypeScript for Cypress", content: `**Generic Types:**
function getItem<T>(key: string): T { ... }

**Type Guards:**
if (typeof value === 'string') { ... }

**Utility Types:**
Partial<Type> - All properties optional
Required<Type> - All properties required
Pick<Type, Keys> - Select specific properties` }
    ],
    17: [
      { type: 'warning', title: "Enterprise AI Safety Rules", content: `**NON-NEGOTIABLE RULES:**

1. AI is AUTHORING-TIME ONLY
   - Never during test execution
   - Never making runtime decisions

2. AI NEVER handles:
   - Passwords or API keys
   - Personal data
   - Production credentials

3. ALL AI output MUST BE:
   - Reviewed by humans
   - Tested before committing
   - Documented in audit trail

4. AI CANNOT:
   - Modify CI secrets
   - Access production data
   - Make autonomous assertions` }
    ],
    25: [
      { type: 'code', title: "Complete CI Pipeline", content: "Production-grade GitLab CI:", code: `stages:
  - install
  - test
  - report

variables:
  npm_config_cache: '$CI_PROJECT_DIR/.npm'
  CYPRESS_CACHE_FOLDER: '$CI_PROJECT_DIR/cache/Cypress'

cache:
  key: \${CI_COMMIT_REF_SLUG}
  paths:
    - .npm
    - cache/Cypress

install:
  stage: install
  image: cypress/browsers:node18.12.0-chrome107
  script:
    - npm ci
  artifacts:
    paths:
      - node_modules

test:
  stage: test
  image: cypress/browsers:node18.12.0-chrome107
  parallel: 3
  script:
    - npx cypress run --record --parallel
  artifacts:
    when: always
    paths:
      - cypress/videos
      - cypress/screenshots
    reports:
      junit: results/*.xml` }
    ]
  };

  return {
    title: "Advanced: Enterprise Patterns",
    duration: "10 minutes",
    content: contents[lessonNumber] || [
      { type: 'explanation', title: "Enterprise Considerations", content: `When implementing ${title} at scale:\n\n- Multi-team coordination\n- Performance optimization\n- Compliance requirements\n- Long-term maintenance` },
      { type: 'warning', title: "Security Reminder", content: `Always remember:\n- Never commit secrets\n- Review all AI-generated code\n- Follow security policies\n- Maintain audit trails` }
    ]
  };
}

function generateExercise(lessonNumber: number, title: string): HandsOnExercise {
  const exercises: Record<number, HandsOnExercise> = {
    6: {
      title: "Exercise: Add TypeScript to Your Tests",
      objective: "Convert a JavaScript test to TypeScript with proper types.",
      problem: "Add type safety to your existing test file.",
      prerequisites: ["Cypress installed", "First test created"],
      steps: [
        { stepNumber: 1, instruction: "Open your test file", howTo: "Open cypress/e2e/first-test.cy.ts", verification: "File opens." },
        { stepNumber: 2, instruction: "Add an interface", howTo: "Define types for your test data.", code: `interface User {\n  email: string\n  password: string\n}\n\nconst testUser: User = {\n  email: 'test@example.com',\n  password: 'Password123!'\n}`, verification: "No TypeScript errors." },
        { stepNumber: 3, instruction: "Use the typed data", howTo: "Reference testUser in your test.", verification: "Test runs with typed data." }
      ],
      expectedOutput: "Test file uses TypeScript interfaces, no type errors.",
      troubleshooting: [{ issue: "Type error", cause: "Wrong type annotation.", solution: "Check spelling of type names." }]
    },
    18: {
      title: "Exercise: Create a Page Object",
      objective: "Build a complete page object for a login page.",
      problem: "Create a reusable LoginPage class.",
      prerequisites: ["TypeScript knowledge", "Test structure understanding"],
      steps: [
        { stepNumber: 1, instruction: "Create pages folder", howTo: "In cypress/, create folder named 'pages'.", verification: "Folder exists." },
        { stepNumber: 2, instruction: "Create LoginPage.ts", howTo: "New file: cypress/pages/LoginPage.ts", verification: "File created." },
        { stepNumber: 3, instruction: "Add page object code", howTo: "Copy the page object pattern from intermediate section.", code: `export class LoginPage {\n  private emailInput = '[data-testid="email"]'\n  \n  visit() {\n    cy.visit('/login')\n    return this\n  }\n  \n  enterEmail(email: string) {\n    cy.get(this.emailInput).type(email)\n    return this\n  }\n}`, verification: "No errors." },
        { stepNumber: 4, instruction: "Use in test", howTo: "Import and use LoginPage in a test file.", verification: "Test passes using page object." }
      ],
      expectedOutput: "LoginPage class works, test uses page object methods.",
      troubleshooting: [{ issue: "Import error", cause: "Wrong path.", solution: "Check relative path from test to pages folder." }]
    }
  };

  return exercises[lessonNumber] || {
    title: `Exercise: Practice ${title}`,
    objective: `Apply ${title} concepts in a hands-on exercise.`,
    problem: "Implement what you learned in this lesson.",
    prerequisites: ["Previous lessons completed", "Project set up"],
    steps: [
      { stepNumber: 1, instruction: "Open your project", howTo: "Launch VS Code with your project folder.", verification: "Project visible." },
      { stepNumber: 2, instruction: "Create a new test file", howTo: `Create cypress/e2e/lesson-${lessonNumber}.cy.ts`, verification: "File created." },
      { stepNumber: 3, instruction: "Implement the concept", howTo: "Apply patterns learned in this lesson.", verification: "Test runs." },
      { stepNumber: 4, instruction: "Verify results", howTo: "Run npx cypress open and execute test.", verification: "Test passes." }
    ],
    expectedOutput: "Working test demonstrating lesson concepts.",
    troubleshooting: [{ issue: "Test fails", cause: "Implementation error.", solution: "Review lesson examples and compare." }]
  };
}

function generateChecklist(lessonNumber: number, title: string): ExitChecklist {
  const checklists: Record<number, ChecklistItem[]> = {
    6: [
      { skill: "I understand TypeScript basics", verification: "I can explain types and interfaces." },
      { skill: "I can add type annotations", verification: "Variables have proper types." },
      { skill: "I can create interfaces", verification: "Custom interfaces work." }
    ],
    7: [
      { skill: "I understand test structure", verification: "I can explain describe/it/hooks." },
      { skill: "I can write complete tests", verification: "Tests have setup, action, assertion." },
      { skill: "I use hooks correctly", verification: "beforeEach/afterEach work properly." }
    ],
    8: [
      { skill: "I understand selector types", verification: "I can explain CSS selectors, data-testid." },
      { skill: "I use data-testid", verification: "My selectors use data-testid when possible." },
      { skill: "I avoid fragile selectors", verification: "No XPath or deep nesting." }
    ],
    18: [
      { skill: "I understand POM pattern", verification: "I can explain why POM is useful." },
      { skill: "I can create page objects", verification: "Page classes with methods work." },
      { skill: "I use method chaining", verification: "Methods return 'this' for chaining." }
    ]
  };

  return {
    items: checklists[lessonNumber] || [
      { skill: `I understand ${title}`, verification: "I can explain the core concept." },
      { skill: "I can implement the pattern", verification: "My code works correctly." },
      { skill: "I know when to use this", verification: "I can identify appropriate scenarios." },
      { skill: "I completed the exercise", verification: "Exercise code runs successfully." }
    ]
  };
}

// Main export function
export function generateCodexCourseContent(lessonId: string): CompleteLessonContent | null {
  // Return pre-defined content for lessons 1-5
  if (lessonContents[lessonId]) {
    return lessonContents[lessonId];
  }

  // Extract lesson number for generated content
  const match = lessonId.match(/codex-lesson-(\d+)/);
  if (!match) return null;

  const lessonNumber = parseInt(match[1]);
  if (lessonNumber < 1 || lessonNumber > 30) return null;

  return generateLessonContent(lessonNumber);
}

export default generateCodexCourseContent;