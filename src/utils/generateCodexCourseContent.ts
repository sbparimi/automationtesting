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
// COMPLETE LESSON CONTENT FOR ALL 30 LESSONS
// ============================================================================

const lessonContents: Record<string, CompleteLessonContent> = {
  // LESSON 1 - Computer Basics
  "codex-lesson-1": {
    lessonId: "codex-lesson-1",
    lessonNumber: 1,
    title: "Understanding Your Computer for Test Automation",
    overview: "Before writing any test automation code, you need to understand how your computer organizes and manages files. This lesson teaches you the foundational skills of navigating your operating system, understanding file paths, and creating organized project structures that will serve you throughout your automation career.",
    beginnerSection: {
      title: "Beginner: Computer Basics for Complete Beginners",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is an Operating System?",
          content: `Your operating system (OS) is the software that makes your computer work. It controls the screen, keyboard, mouse, and organizes all your files.

**The Three Main Operating Systems:**

1. **Windows** - Made by Microsoft. Most common in corporate environments. You'll see a Start button in the bottom-left corner.
2. **macOS** - Made by Apple. Used on MacBooks and iMacs. You'll see an Apple logo in the top-left corner.
3. **Linux** - Free and open-source. Popular with developers. Various distributions like Ubuntu, Fedora.

**How to Check Your Operating System:**

**On Windows:**
- Click the Start button (Windows logo in bottom-left corner)
- Type "About your PC" in the search box
- Press Enter
- Look for "Windows 10" or "Windows 11" under "Windows specifications"

**On Mac:**
- Click the Apple logo in the top-left corner of your screen
- Click "About This Mac" from the dropdown menu
- You'll see the macOS version (e.g., macOS Sonoma 14.0)

**On Linux:**
- Open a terminal (usually Ctrl+Alt+T)
- Type: cat /etc/os-release
- Press Enter to see your distribution`
        },
        {
          type: 'steps',
          title: "How to Open File Explorer/Finder",
          content: "File Explorer (Windows) or Finder (Mac) is the application you use to browse, create, and organize files on your computer. This is essential for navigating to your project folders.",
          steps: [
            { step: 1, action: "Locate the File Explorer/Finder icon", details: "**On Windows:** Look at the taskbar (the bar at the bottom of your screen) for a yellow folder icon. It might be pinned there by default. **On Mac:** Look at the Dock (the bar at the bottom of your screen) for a blue and white smiley face icon - this is Finder.", verification: "You can see the icon on your taskbar or dock." },
            { step: 2, action: "Click the icon to open", details: "Single-click with your left mouse button on the icon. Wait 1-2 seconds for the window to open.", verification: "A window opens showing folders like 'Documents', 'Downloads', 'Desktop'." },
            { step: 3, action: "Understand the layout", details: "**Left side panel:** Contains shortcuts to common locations like Desktop, Documents, Downloads. **Main area:** Shows the contents of the currently selected folder. **Address bar (top):** Shows your current location/path.", verification: "You can identify all three areas in the window." },
            { step: 4, action: "Navigate to Documents folder", details: "Click 'Documents' in the left panel. The main area will now show files and folders inside your Documents folder.", verification: "You see the contents of your Documents folder." }
          ]
        },
        {
          type: 'explanation',
          title: "Understanding File Paths",
          content: `A file path is like a street address for files on your computer. It tells the computer exactly where to find a file.

**Windows paths use backslashes (\\):**
C:\\Users\\YourName\\Documents\\my-project\\test.ts

**Mac/Linux paths use forward slashes (/):**
/Users/YourName/Documents/my-project/test.ts

**Breaking Down a Path:**
- C:\\ or / = The root (starting point)
- Users = A folder
- YourName = Your user folder
- Documents = The Documents folder
- my-project = Your project folder
- test.ts = The actual file

**How to Find a File's Path:**

**On Windows:**
1. Navigate to the file in File Explorer
2. Click in the address bar at the top
3. The full path appears highlighted - copy it with Ctrl+C

**On Mac:**
1. Navigate to the file in Finder
2. Right-click (or Control-click) the file
3. Hold the Option key on your keyboard
4. Click "Copy as Pathname"

**Why Paths Matter:**
When you run Cypress commands, your computer needs to know WHERE your project is. Without understanding paths, you'll get "file not found" errors.`
        },
        {
          type: 'checkpoint',
          title: "Beginner Checkpoint",
          content: `Before continuing, verify you can do the following:
- [ ] I know which operating system I'm using
- [ ] I can open File Explorer (Windows) or Finder (Mac)
- [ ] I understand what the left panel, main area, and address bar are
- [ ] I can find the path to a file on my computer`
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
          content: `Professional developers organize all their projects in a single location. This makes it easy to find projects and reduces confusion.

**Recommended Workspace Location:**
- **Windows:** C:\\Users\\YourName\\automation-projects
- **Mac:** /Users/YourName/automation-projects

**Why This Location?**
1. **Easy to find** - It's directly in your user folder
2. **Not buried** - Only one level deep from your home folder
3. **Terminal-friendly** - No spaces in the path (spaces cause problems in commands)
4. **Professional standard** - This is how most developers organize work

**Bad Locations to Avoid:**
- Desktop (gets cluttered, hard to manage)
- Downloads (files get mixed up)
- Paths with spaces like "My Projects" (causes command errors)
- System folders like C:\\Windows (dangerous, no permissions)`
        },
        {
          type: 'steps',
          title: "Create Your Workspace Folder",
          content: "Follow these exact steps to create your automation workspace:",
          steps: [
            { step: 1, action: "Open File Explorer/Finder", details: "Click the File Explorer icon in taskbar (Windows) or Finder icon in Dock (Mac).", verification: "The file browser window opens." },
            { step: 2, action: "Navigate to your user folder", details: "**Windows:** In the left panel, click 'This PC', then double-click your C: drive, then 'Users' folder, then your username folder. **Mac:** In the menu bar at top, click 'Go', then click 'Home' (or press Cmd+Shift+H).", verification: "You see folders like Documents, Downloads, Desktop in the main area." },
            { step: 3, action: "Create the automation-projects folder", details: "**Windows:** Right-click in an empty area of the main panel → hover over 'New' → click 'Folder'. **Mac:** Right-click (or Control-click) in an empty area → click 'New Folder'. Type exactly: **automation-projects** (all lowercase, hyphen in middle). Press Enter.", verification: "A new folder named 'automation-projects' appears." },
            { step: 4, action: "Open the new folder", details: "Double-click the 'automation-projects' folder to go inside it. It should be empty.", verification: "You're inside the empty automation-projects folder." },
            { step: 5, action: "Create your first project folder", details: "Create another new folder (right-click → New → Folder) and name it exactly: **my-first-cypress-project**. Press Enter.", verification: "The folder 'my-first-cypress-project' exists inside automation-projects." },
            { step: 6, action: "Record the full path", details: "Click in the address bar to see and copy the full path to your project folder. Save this somewhere - you'll need it later.", verification: "You have the full path saved (e.g., C:\\Users\\John\\automation-projects\\my-first-cypress-project)." }
          ]
        },
        {
          type: 'explanation',
          title: "Folder Naming Best Practices",
          content: `Follow these rules for all project folders:

**DO:**
- Use lowercase letters: my-project (not My-Project)
- Use hyphens for spaces: my-cypress-tests (not my cypress tests)
- Be descriptive: login-tests, checkout-flow-tests
- Keep names short but meaningful

**DON'T:**
- Use spaces: my project (causes terminal errors)
- Use special characters: my@project! (causes errors)
- Use uppercase: MyProject (can cause cross-platform issues)
- Use very long names: my-super-long-project-name-that-never-ends`
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
          content: `In enterprise environments, you'll work on multiple projects simultaneously. Here's the professional structure:

**Recommended Structure:**
automation-projects/
├── company-web-app/          # Main web application tests
├── company-mobile-web/       # Mobile web responsive tests
├── company-api-tests/        # API testing project
├── shared-libraries/         # Reusable test utilities
├── documentation/            # Test plans, reports
└── sandbox/                  # Experiments and learning

**Why Multiple Projects?**
- Different applications may need different Cypress versions
- Keeps test suites focused and manageable
- Allows different teams to own different test projects
- Easier CI/CD pipeline configuration`
        },
        {
          type: 'warning',
          title: "Critical Security: Never Store Secrets in Files",
          content: `**NEVER** put passwords, API keys, or sensitive data in your project files!

**Why This Is Dangerous:**
- Files get committed to Git repositories
- Git history keeps EVERYTHING forever
- Leaked credentials can be exploited
- Your company could face security breaches

**What To Do Instead:**
- Use environment variables (covered in Lesson 24)
- Use secret management tools
- Use Cypress environment configuration
- Keep credentials in secure vaults

**Examples of Secrets to NEVER Commit:**
- Passwords
- API keys
- Database connection strings
- Authentication tokens
- Private SSH keys`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Set Up Your Automation Workspace",
      objective: "Create a professional workspace structure that you'll use throughout this course.",
      problem: "You need an organized workspace for all your Cypress projects. Without proper organization, projects become difficult to manage as your automation efforts grow.",
      prerequisites: ["Computer with admin access", "Knowledge of your operating system"],
      steps: [
        { stepNumber: 1, instruction: "Open File Explorer/Finder", howTo: "Click the folder icon in your taskbar (Windows) or Dock (Mac). This opens your file browser.", verification: "A file browser window is open on your screen." },
        { stepNumber: 2, instruction: "Navigate to your user folder", howTo: "**Windows:** Click 'This PC' in the left panel, then C: drive → Users → your username. **Mac:** Press Cmd+Shift+H or Go → Home from the menu.", verification: "You see Documents, Downloads, Desktop folders in the main area." },
        { stepNumber: 3, instruction: "Create the automation-projects folder", howTo: "Right-click in empty space → New → Folder. Type: **automation-projects** (exactly as shown). Press Enter.", code: "# Expected folder structure after this step:\n# /Users/YourName/automation-projects/  (Mac)\n# C:\\Users\\YourName\\automation-projects\\  (Windows)", verification: "A new folder named 'automation-projects' appears." },
        { stepNumber: 4, instruction: "Open the automation-projects folder", howTo: "Double-click the 'automation-projects' folder to go inside it.", verification: "You're inside an empty folder." },
        { stepNumber: 5, instruction: "Create my-first-cypress-project folder", howTo: "Right-click → New → Folder. Type: **my-first-cypress-project**. Press Enter.", verification: "The my-first-cypress-project folder exists inside automation-projects." },
        { stepNumber: 6, instruction: "Record the full path", howTo: "Click in the address bar (top of window) to highlight the path. Copy it (Ctrl+C on Windows, Cmd+C on Mac). Paste it in a note or text file for later use.", code: "# Your path should look like one of these:\nC:\\Users\\YourName\\automation-projects\\my-first-cypress-project\n/Users/YourName/automation-projects/my-first-cypress-project", verification: "You have saved the complete path to your project folder." }
      ],
      expectedOutput: "You have a folder structure: automation-projects/my-first-cypress-project with the full path saved somewhere accessible.",
      troubleshooting: [
        { issue: "Cannot create folder - 'Access Denied'", cause: "You don't have permission to create folders in this location.", solution: "Try creating the folder in your Documents folder instead, or right-click File Explorer and 'Run as Administrator'." },
        { issue: "Folder name has spaces", cause: "You typed 'my first cypress project' with spaces.", solution: "Right-click the folder → Rename → delete spaces and add hyphens: my-first-cypress-project" },
        { issue: "Cannot find user folder", cause: "Navigation confusion.", solution: "On Windows, type %USERPROFILE% in the address bar and press Enter. On Mac, press Cmd+Shift+H." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "I know my operating system", verification: "I can state whether I'm using Windows, Mac, or Linux and the version." },
        { skill: "I can open File Explorer/Finder", verification: "I can click the icon and browse files on my computer." },
        { skill: "I understand file paths", verification: "I can find the path to any file and explain what each part means." },
        { skill: "I created my automation workspace", verification: "The folder automation-projects/my-first-cypress-project exists." },
        { skill: "I saved my project path", verification: "I have the full path written down for future use." }
      ]
    }
  },

  // LESSON 2 - VS Code
  "codex-lesson-2": {
    lessonId: "codex-lesson-2",
    lessonNumber: 2,
    title: "Installing and Mastering Visual Studio Code",
    overview: "Visual Studio Code (VS Code) is the industry-standard code editor where you will write all your Cypress tests. This lesson provides complete installation instructions and teaches you the essential features you need for productive test automation development.",
    beginnerSection: {
      title: "Beginner: Downloading and Installing VS Code",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is Visual Studio Code?",
          content: `Visual Studio Code (VS Code) is a free code editor made by Microsoft. It's where you will:

- **Write test code** - Type your Cypress tests
- **Run terminal commands** - Execute npm and Cypress commands
- **Install helpful extensions** - Add features like code completion
- **Debug problems** - Find and fix errors in your code
- **View project files** - Browse all files in your project

**Important:** VS Code is different from "Visual Studio"!
- **Visual Studio Code** (VS Code) - Free, lightweight, what we use
- **Visual Studio** - Heavy, expensive, for enterprise .NET development

Make sure you download "Visual Studio Code" (code.visualstudio.com), NOT "Visual Studio".

**Why VS Code for Cypress?**
1. **Free and cross-platform** - Works on Windows, Mac, Linux
2. **Excellent JavaScript/TypeScript support** - Cypress uses these languages
3. **Built-in terminal** - Run commands without switching windows
4. **Extensions ecosystem** - Add Cypress-specific features
5. **Industry standard** - Most Cypress tutorials use VS Code`
        },
        {
          type: 'steps',
          title: "Download and Install VS Code",
          content: "Follow these exact steps to download and install VS Code on your computer:",
          steps: [
            { step: 1, action: "Open your web browser", details: "Click on Chrome, Firefox, Edge, Safari, or whatever browser you use. Wait for it to fully load.", verification: "Your web browser is open with a blank page or homepage." },
            { step: 2, action: "Navigate to the VS Code website", details: "Click in the address bar at the top of your browser. Type exactly: **code.visualstudio.com** and press Enter. Wait for the page to load completely.", verification: "You see the VS Code website with a large blue 'Download' button." },
            { step: 3, action: "Click the Download button", details: "Look for the large blue button that says 'Download for Windows' or 'Download for Mac'. The website automatically detects your operating system. Click the button once.", verification: "A file starts downloading. You'll see a download indicator in your browser (usually bottom-left or top-right)." },
            { step: 4, action: "Wait for download to complete", details: "The file is about 90MB. Wait for the download to finish completely. **Windows:** File is named like 'VSCodeUserSetup-x64-1.xx.x.exe'. **Mac:** File is named like 'VSCode-darwin-universal.zip'.", verification: "Download completes without errors. File is in your Downloads folder." },
            { step: 5, action: "Run the installer (Windows)", details: "Open your Downloads folder. Double-click the .exe file. If a security warning appears, click 'Run' or 'Yes'. **IMPORTANT:** When you reach the 'Select Additional Tasks' screen, CHECK ALL BOXES - especially 'Add to PATH' and 'Register Code as an editor'.", verification: "Installation wizard opens and progresses through steps." },
            { step: 5, action: "Install on Mac", details: "Open your Downloads folder. Double-click the .zip file to extract it. Drag the 'Visual Studio Code' application to your Applications folder. The first time you open it, you may need to right-click → Open → Open (to bypass security).", verification: "VS Code icon appears in Applications folder." },
            { step: 6, action: "Launch VS Code", details: "**Windows:** Double-click the VS Code shortcut on your Desktop, or search 'Visual Studio Code' in Start menu. **Mac:** Open Applications folder and double-click 'Visual Studio Code', or search in Spotlight (Cmd+Space, type 'code').", verification: "VS Code opens with a Welcome tab displayed." }
          ]
        },
        {
          type: 'explanation',
          title: "VS Code Interface Overview",
          content: `When VS Code opens, you'll see several areas. Understanding these is crucial:

**Activity Bar (far left - vertical icons):**
- 📁 **Explorer** - Browse files in your project
- 🔍 **Search** - Find text across all files
- 🔀 **Source Control** - Git version control
- 🐛 **Run and Debug** - Debug your code
- 🧩 **Extensions** - Install add-ons

**Side Bar (next to Activity Bar):**
Shows content based on which icon is selected. Most often, you'll use the Explorer view to see your project files.

**Editor Area (center, largest area):**
This is where you write code. You can have multiple files open in tabs.

**Panel (bottom, collapsible):**
- **Terminal** - Run commands (very important!)
- **Problems** - Shows errors in your code
- **Output** - Shows output from tools
- **Debug Console** - Debug information

**Status Bar (very bottom):**
Shows information like current line number, file type, Git branch.`
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Essential VS Code Features",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Essential Keyboard Shortcuts",
          content: `Memorize these shortcuts to work 10x faster. Practice each one right now:

**File Operations:**
- **Ctrl+S** (Windows) / **Cmd+S** (Mac) - **Save file** (use constantly!)
- **Ctrl+N** / **Cmd+N** - Create new file
- **Ctrl+W** / **Cmd+W** - Close current file
- **Ctrl+O** / **Cmd+O** - Open file

**Editing:**
- **Ctrl+C** / **Cmd+C** - Copy selected text
- **Ctrl+V** / **Cmd+V** - Paste
- **Ctrl+X** / **Cmd+X** - Cut selected text
- **Ctrl+Z** / **Cmd+Z** - Undo last action
- **Ctrl+Shift+Z** / **Cmd+Shift+Z** - Redo
- **Ctrl+/** / **Cmd+/** - Toggle comment on current line
- **Ctrl+D** / **Cmd+D** - Select next occurrence of selected word

**Navigation:**
- **Ctrl+P** / **Cmd+P** - **Quick Open** - quickly open any file by typing name
- **Ctrl+Shift+P** / **Cmd+Shift+P** - **Command Palette** - access all commands
- **Ctrl+\`** / **Cmd+\`** - **Toggle Terminal** - show/hide terminal
- **Ctrl+B** / **Cmd+B** - Toggle sidebar visibility
- **Ctrl+G** / **Cmd+G** - Go to specific line number

**Most Important for Daily Work:**
1. Ctrl+S / Cmd+S - Save (use after every change!)
2. Ctrl+\` / Cmd+\` - Terminal (run Cypress commands)
3. Ctrl+P / Cmd+P - Quick Open (find files fast)`
        },
        {
          type: 'steps',
          title: "Opening a Project Folder in VS Code",
          content: "VS Code works best when you open an entire folder (your project). Here's how:",
          steps: [
            { step: 1, action: "Open VS Code", details: "Launch VS Code from your desktop, taskbar, or applications folder.", verification: "VS Code window is open." },
            { step: 2, action: "Open your project folder", details: "Click **File** in the menu bar, then click **Open Folder...** (Windows) or **Open...** (Mac). Alternatively, use keyboard: **Ctrl+K, Ctrl+O** (Windows) or **Cmd+O** (Mac).", verification: "A file browser dialog opens." },
            { step: 3, action: "Navigate to your project", details: "In the file browser, navigate to: automation-projects → my-first-cypress-project. Click on the folder (don't double-click into it), then click **Select Folder** (Windows) or **Open** (Mac).", verification: "VS Code shows your project folder in the Explorer sidebar." },
            { step: 4, action: "Trust the folder (if prompted)", details: "VS Code may ask 'Do you trust the authors of the files in this folder?' Click **Yes, I trust the authors**. This is a security feature.", verification: "The folder opens without restrictions." },
            { step: 5, action: "Verify the project is open", details: "Look at the Explorer panel on the left. You should see your project folder name at the top. The folder will appear empty for now (which is correct).", verification: "Project name appears in Explorer. Title bar shows the folder path." }
          ]
        },
        {
          type: 'steps',
          title: "Using the Integrated Terminal",
          content: "The terminal is where you'll run all Cypress commands. Here's how to use it:",
          steps: [
            { step: 1, action: "Open the terminal", details: "Press **Ctrl+\`** (that's the backtick key, usually above Tab). Alternatively: View menu → Terminal.", verification: "Terminal panel appears at the bottom of VS Code." },
            { step: 2, action: "Verify your location", details: "The terminal prompt shows your current folder. It should display your project folder name.", verification: "Terminal shows the path to my-first-cypress-project." },
            { step: 3, action: "Try a test command", details: "Type: **echo Hello Cypress** and press Enter. This prints 'Hello Cypress' to confirm the terminal works.", verification: "You see 'Hello Cypress' printed below your command." },
            { step: 4, action: "Clear the terminal", details: "Type: **clear** (Mac/Linux) or **cls** (Windows) and press Enter. This clears all text from the terminal.", verification: "Terminal is now empty except for the prompt." }
          ]
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Essential Extensions for Cypress",
      duration: "10 minutes",
      content: [
        {
          type: 'steps',
          title: "Install Essential Extensions",
          content: "Extensions add superpowers to VS Code. Install these for Cypress development:",
          steps: [
            { step: 1, action: "Open Extensions panel", details: "Click the Extensions icon in the Activity Bar (looks like 4 squares, one detached). Or press **Ctrl+Shift+X** / **Cmd+Shift+X**.", verification: "Extensions panel opens showing search bar." },
            { step: 2, action: "Install ESLint", details: "Type **ESLint** in the search bar. Look for 'ESLint' by Microsoft (has millions of downloads). Click the blue **Install** button.", verification: "ESLint shows 'Uninstall' button after installation." },
            { step: 3, action: "Install Prettier", details: "Search **Prettier**. Install 'Prettier - Code formatter' by Prettier. This auto-formats your code.", verification: "Prettier is installed." },
            { step: 4, action: "Install Cypress Snippets", details: "Search **Cypress Snippets**. Install 'Cypress Snippets' by Clint Andrew Hall. Provides autocomplete for Cypress commands.", verification: "Cypress Snippets is installed." },
            { step: 5, action: "Install TypeScript support", details: "Search **TypeScript**. VS Code has built-in TypeScript support, but ensure it's enabled. You may see 'TypeScript and JavaScript Language Features'.", verification: "TypeScript support is active." }
          ]
        },
        {
          type: 'tip',
          title: "VS Code Settings for Cypress",
          content: `Configure these settings for better Cypress development:

**Access Settings:** File → Preferences → Settings (or Ctrl+,)

**Recommended Settings:**
1. **Auto Save:** Set to 'afterDelay' - saves files automatically
2. **Format On Save:** Enable this - Prettier formats code when you save
3. **Tab Size:** Set to 2 - standard for JavaScript/TypeScript
4. **Word Wrap:** Set to 'on' - long lines wrap instead of scrolling

**How to Change:**
1. Open Settings (Ctrl+,)
2. Search for the setting name
3. Change the value`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Complete VS Code Setup",
      objective: "Install VS Code, configure it for Cypress development, and verify everything works.",
      problem: "You need a fully configured code editor before you can write Cypress tests. Without VS Code properly set up, you'll struggle with the rest of the course.",
      prerequisites: ["Internet connection", "Administrator access to install software"],
      steps: [
        { stepNumber: 1, instruction: "Download VS Code", howTo: "Open your browser, go to **code.visualstudio.com**, click the Download button for your operating system.", verification: "File is downloading (check browser download indicator)." },
        { stepNumber: 2, instruction: "Install VS Code", howTo: "Open Downloads folder, double-click the installer. **Windows:** Check ALL boxes on 'Additional Tasks' screen. **Mac:** Drag to Applications folder.", verification: "Installation completes without errors." },
        { stepNumber: 3, instruction: "Launch VS Code", howTo: "Open VS Code from Desktop shortcut (Windows) or Applications folder (Mac).", verification: "VS Code opens showing Welcome tab." },
        { stepNumber: 4, instruction: "Open your project folder", howTo: "File → Open Folder → Navigate to my-first-cypress-project → Select Folder/Open.", code: "# Your folder is at:\n# Windows: C:\\Users\\YourName\\automation-projects\\my-first-cypress-project\n# Mac: /Users/YourName/automation-projects/my-first-cypress-project", verification: "Project folder appears in Explorer sidebar (will be empty)." },
        { stepNumber: 5, instruction: "Open the integrated terminal", howTo: "Press **Ctrl+\`** (backtick key above Tab, left of 1 key).", verification: "Terminal panel appears at bottom, showing your project path." },
        { stepNumber: 6, instruction: "Test the terminal", howTo: "Type: **echo 'VS Code is ready!'** and press Enter.", code: "echo 'VS Code is ready!'\n# Should output: VS Code is ready!", verification: "Message appears in terminal." },
        { stepNumber: 7, instruction: "Install ESLint extension", howTo: "Press Ctrl+Shift+X, search 'ESLint', click Install on the Microsoft one.", verification: "ESLint shows 'Uninstall' button (meaning it's installed)." },
        { stepNumber: 8, instruction: "Install Prettier extension", howTo: "Search 'Prettier', install 'Prettier - Code formatter'.", verification: "Prettier is installed." }
      ],
      expectedOutput: "VS Code is installed with your project open, terminal accessible, and ESLint + Prettier extensions installed.",
      troubleshooting: [
        { issue: "VS Code won't open after installation", cause: "Installation was incomplete or corrupted.", solution: "Uninstall VS Code from Control Panel (Windows) or Applications (Mac), restart computer, reinstall." },
        { issue: "Cannot find the backtick key for terminal", cause: "Different keyboard layout.", solution: "Use the menu instead: View → Terminal. Or look for the key to the left of the 1 key." },
        { issue: "Terminal opens in wrong folder", cause: "Project folder wasn't opened correctly.", solution: "Close VS Code. Reopen it. File → Open Folder → navigate to correct folder." },
        { issue: "Extensions fail to install", cause: "Network issues or firewall blocking.", solution: "Check internet connection. Try again. If on corporate network, contact IT." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "VS Code is installed", verification: "I can launch VS Code from my desktop/applications." },
        { skill: "I can open project folders", verification: "File → Open Folder works and shows files in Explorer." },
        { skill: "I can use the terminal", verification: "Ctrl+` opens terminal, I can type commands." },
        { skill: "Essential shortcuts memorized", verification: "I know Ctrl+S (save), Ctrl+` (terminal), Ctrl+P (quick open)." },
        { skill: "Extensions installed", verification: "ESLint and Prettier show in Extensions with 'Uninstall' button." }
      ]
    }
  },

  // LESSON 3 - Terminal Basics
  "codex-lesson-3": {
    lessonId: "codex-lesson-3",
    lessonNumber: 3,
    title: "Terminal Basics for Test Automation",
    overview: "The terminal (command line) is essential for running Cypress tests, installing packages, and managing projects. This lesson teaches you the commands you'll use daily as a test automation engineer.",
    beginnerSection: {
      title: "Beginner: Understanding the Terminal",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is the Terminal?",
          content: `The terminal is a text-based way to control your computer. Instead of clicking icons and menus, you type commands.

**Why Developers Use the Terminal:**
1. **Faster than clicking** - Type one command vs. click through 5 menus
2. **Automation** - Write scripts to run multiple commands
3. **Required for tools** - npm, Cypress, Git all use terminal commands
4. **Consistency** - Same commands work across projects
5. **Professional requirement** - Every job expects terminal skills

**Terminal Names by Operating System:**
- **Windows:** Command Prompt (cmd), PowerShell, or Windows Terminal
- **Mac:** Terminal (or iTerm2)
- **Linux:** Terminal, Console, Shell

**The VS Code Integrated Terminal:**
VS Code has a built-in terminal! This is convenient because:
- You don't need to switch between applications
- Terminal starts in your project folder automatically
- Output appears right in your editor
- Press **Ctrl+\`** to open/close it`
        },
        {
          type: 'steps',
          title: "Opening and Using the Terminal in VS Code",
          content: "Let's practice using the terminal:",
          steps: [
            { step: 1, action: "Open VS Code with your project", details: "Launch VS Code. File → Open Folder → select my-first-cypress-project. Wait for it to load.", verification: "Project name appears in the Explorer sidebar." },
            { step: 2, action: "Open the integrated terminal", details: "Press **Ctrl+\`** (backtick key, usually above Tab). If that doesn't work, click View → Terminal from the menu.", verification: "Terminal panel appears at the bottom of VS Code." },
            { step: 3, action: "Understand the prompt", details: "The terminal shows a prompt like: **C:\\Users\\John\\automation-projects\\my-first-cypress-project>** (Windows) or **~/automation-projects/my-first-cypress-project$** (Mac). This shows your current location.", verification: "Prompt shows your project folder path." },
            { step: 4, action: "Type your first command", details: "Type: **echo Hello World** and press **Enter**. The 'echo' command prints text to the screen.", verification: "Terminal displays 'Hello World' below your command." },
            { step: 5, action: "Try another command", details: "Type: **date** (Mac/Linux) or **date /t** (Windows) and press Enter. This shows the current date.", verification: "Current date appears in the terminal." }
          ]
        },
        {
          type: 'explanation',
          title: "Essential Navigation Commands",
          content: `These commands let you move around your file system:

**Print Current Directory (Where am I?):**
- **Windows:** cd (just type cd with nothing after)
- **Mac/Linux:** pwd (print working directory)

**List Files in Current Folder:**
- **Windows:** dir
- **Mac/Linux:** ls

**Change Directory (go into a folder):**
cd foldername

Example: cd cypress (enters the cypress folder)

**Go Up One Folder (parent directory):**
cd ..

Example: If you're in /project/cypress, cd .. takes you to /project

**Go to Home Folder:**
- **Windows:** cd %USERPROFILE%
- **Mac/Linux:** cd ~

**Clear the Terminal Screen:**
- **Windows:** cls
- **Mac/Linux:** clear

**Command History:**
- Press **Up Arrow** to see previous commands
- Press **Down Arrow** to go forward in history
- This saves you from retyping commands!`
        },
        {
          type: 'code',
          title: "Practice These Commands",
          content: "Open your terminal and try each command. Type them exactly as shown:",
          code: `# Print current directory (where are you?)
pwd              # Mac/Linux - prints full path
cd               # Windows - also prints current path

# List files in current folder
ls               # Mac/Linux - lists files and folders
dir              # Windows - lists files and folders

# Go into a folder (if it exists)
cd cypress       # Enters the 'cypress' folder

# Go back up one level
cd ..            # Goes to parent folder

# Go back to project root
cd ~/automation-projects/my-first-cypress-project    # Mac
cd %USERPROFILE%\\automation-projects\\my-first-cypress-project  # Windows

# Clear the screen
clear            # Mac/Linux
cls              # Windows`
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Working with Files and Folders",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Creating and Managing Files via Terminal",
          content: `You'll often need to create folders and files from the terminal:

**Create a New Folder:**
mkdir foldername

Example: mkdir cypress creates a folder named 'cypress'

**Create Multiple Folders at Once:**
mkdir folder1 folder2 folder3

**Create Nested Folders:**
mkdir -p parent/child/grandchild  (Mac/Linux)
mkdir parent\\child\\grandchild  (Windows - creates one level at a time)

**Create a New Empty File:**
- **Windows:** type nul > filename.txt
- **Mac/Linux:** touch filename.txt

**Delete a File:**
- **Windows:** del filename.txt
- **Mac/Linux:** rm filename.txt

**Delete a Folder:**
- **Windows:** rmdir foldername (must be empty)
- **Mac/Linux:** rm -r foldername (removes folder and contents)

**Copy a File:**
- **Windows:** copy source.txt destination.txt
- **Mac/Linux:** cp source.txt destination.txt

**Move/Rename a File:**
- **Windows:** move oldname.txt newname.txt
- **Mac/Linux:** mv oldname.txt newname.txt`
        },
        {
          type: 'steps',
          title: "Create Cypress Project Structure via Terminal",
          content: "Let's create the folder structure Cypress needs using only terminal commands:",
          steps: [
            { step: 1, action: "Ensure you're in your project folder", details: "Open terminal in VS Code. Type **pwd** (Mac) or **cd** (Windows). You should see the path to my-first-cypress-project.", verification: "Path shows my-first-cypress-project." },
            { step: 2, action: "Create the cypress folder", details: "Type: **mkdir cypress** and press Enter. This creates the main cypress folder.", verification: "No error message appears (silence = success)." },
            { step: 3, action: "Create the e2e subfolder", details: "Type: **mkdir cypress/e2e** and press Enter. This creates the e2e folder inside cypress.", verification: "No error message." },
            { step: 4, action: "Create fixtures and support folders", details: "Type: **mkdir cypress/fixtures cypress/support** and press Enter. This creates both folders at once.", verification: "Both folders created." },
            { step: 5, action: "Verify the structure", details: "Type: **ls cypress** (Mac) or **dir cypress** (Windows) to see what's inside the cypress folder.", code: "ls cypress\n# Should show:\n# e2e  fixtures  support", verification: "You see e2e, fixtures, support listed." },
            { step: 6, action: "Create a test file", details: "Type: **touch cypress/e2e/example.cy.ts** (Mac) or **type nul > cypress\\e2e\\example.cy.ts** (Windows).", verification: "File is created (check in VS Code Explorer sidebar)." }
          ]
        },
        {
          type: 'tip',
          title: "Tab Completion - Your Best Friend",
          content: `**Tab completion is a massive time saver!**

Instead of typing full folder/file names, type the first few letters and press **Tab**. The terminal will complete the name for you.

**Example:**
1. Type: cd cyp
2. Press Tab
3. Terminal completes to: cd cypress/

**Why This Matters:**
- Prevents typos
- Faster navigation
- Works with commands too, not just files
- If multiple matches exist, press Tab twice to see options

**Practice Right Now:**
1. Type: cd cy
2. Press Tab - it should complete to cypress
3. Press Tab again - it might show subfolders`
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Command Chaining and Efficiency",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Running Multiple Commands",
          content: `Chain commands together for efficiency:

**Run Commands in Sequence (second runs only if first succeeds):**
command1 && command2

Example: mkdir new-folder && cd new-folder
Creates folder AND enters it in one line.

**Run Commands Regardless of Previous Result:**
command1 ; command2  (Mac/Linux)
command1 & command2  (Windows)

**Command History Tips:**
- Press **Up Arrow** to recall previous commands
- Press **Down Arrow** to go forward
- Type **history** (Mac/Linux) to see all recent commands
- Use **Ctrl+R** (Mac/Linux) to search command history

**Stopping a Running Command:**
Press **Ctrl+C** to stop any running process. This is your emergency brake!

Example: If a command is stuck or taking too long, Ctrl+C cancels it.`
        },
        {
          type: 'warning',
          title: "Dangerous Commands to NEVER Run",
          content: `Some commands can destroy your system. NEVER run these:

**Linux/Mac - EXTREMELY DANGEROUS:**
- rm -rf /  - Deletes EVERYTHING on your computer
- rm -rf *  - Deletes everything in current folder (be careful!)
- sudo rm -rf  - Same but with admin powers

**Windows - EXTREMELY DANGEROUS:**
- del /F /S /Q C:\\*  - Deletes everything on C: drive
- format C:  - Formats entire drive

**Safety Rules:**
1. Always verify you're in the correct folder (pwd/cd)
2. Double-check delete commands before pressing Enter
3. Never run commands you don't understand
4. Be extra careful with commands containing rm -rf or del /F
5. Always have backups of important files`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Master Terminal Navigation",
      objective: "Practice essential terminal commands by creating a complete project folder structure.",
      problem: "Create the folder structure Cypress needs using only terminal commands. This exercises your terminal skills and prepares your project.",
      prerequisites: ["VS Code installed", "Project folder exists (my-first-cypress-project)"],
      steps: [
        { stepNumber: 1, instruction: "Open terminal in VS Code", howTo: "Open VS Code with your project folder, press **Ctrl+\`**.", verification: "Terminal panel appears at bottom of VS Code." },
        { stepNumber: 2, instruction: "Verify your location", howTo: "Type **pwd** (Mac) or **cd** (Windows) and press Enter.", code: "pwd\n# Should show:\n# /Users/YourName/automation-projects/my-first-cypress-project", verification: "Path shows your project folder." },
        { stepNumber: 3, instruction: "Create cypress folder", howTo: "Type: **mkdir cypress** and press Enter.", verification: "No error message (silence means success)." },
        { stepNumber: 4, instruction: "Create all subfolders", howTo: "Type: **mkdir cypress/e2e cypress/fixtures cypress/support cypress/downloads** and press Enter.", verification: "All folders created." },
        { stepNumber: 5, instruction: "Create a test file", howTo: "**Mac/Linux:** touch cypress/e2e/example.cy.ts\n**Windows:** type nul > cypress\\e2e\\example.cy.ts", code: "# Mac/Linux:\ntouch cypress/e2e/example.cy.ts\n\n# Windows:\ntype nul > cypress\\e2e\\example.cy.ts", verification: "File created (visible in VS Code Explorer)." },
        { stepNumber: 6, instruction: "Verify the complete structure", howTo: "**Mac/Linux:** ls -R cypress\n**Windows:** dir /S cypress", code: "# Mac output should show:\ncypress:\ne2e  downloads  fixtures  support\n\ncypress/e2e:\nexample.cy.ts", verification: "All folders and the example file are visible." },
        { stepNumber: 7, instruction: "Practice navigation", howTo: "Type: **cd cypress** (enters cypress folder), then **cd e2e** (enters e2e), then **cd ../..** (goes back to project root).", verification: "You end up back at my-first-cypress-project." }
      ],
      expectedOutput: "Project has complete folder structure: cypress/e2e/, cypress/fixtures/, cypress/support/, cypress/downloads/, with example.cy.ts file.",
      troubleshooting: [
        { issue: "'mkdir' is not recognized", cause: "Wrong terminal type or PATH issue.", solution: "Make sure you're using PowerShell on Windows (not regular CMD). In VS Code terminal, click the dropdown arrow and select 'PowerShell'." },
        { issue: "Permission denied", cause: "No write permission in this folder.", solution: "Try running VS Code as Administrator (right-click → Run as administrator)." },
        { issue: "Folder already exists error", cause: "You ran the command twice.", solution: "This is fine - the folder exists, which is what you wanted." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "I can open the terminal in VS Code", verification: "Ctrl+` opens the terminal panel." },
        { skill: "I can check my current location", verification: "pwd (Mac) or cd (Windows) shows my path." },
        { skill: "I can navigate folders", verification: "cd foldername enters folder, cd .. goes up." },
        { skill: "I can create folders", verification: "mkdir foldername creates new folders." },
        { skill: "I can list folder contents", verification: "ls (Mac) or dir (Windows) shows files." },
        { skill: "I use Tab completion", verification: "I press Tab to autocomplete folder names." },
        { skill: "I know how to stop commands", verification: "Ctrl+C stops running processes." }
      ]
    }
  },

  // LESSON 4 - Node.js and npm
  "codex-lesson-4": {
    lessonId: "codex-lesson-4",
    lessonNumber: 4,
    title: "Node.js and npm - The Foundation of Modern Testing",
    overview: "Node.js and npm are required to run Cypress. This lesson explains what they are, how to install them correctly, and how they work together to power your test automation framework.",
    beginnerSection: {
      title: "Beginner: Understanding Node.js and npm",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is Node.js?",
          content: `**Node.js** is a program that runs JavaScript code on your computer.

**Background:**
JavaScript was created to run in web browsers. For years, it could ONLY run in browsers. In 2009, Node.js was created to let JavaScript run anywhere - on servers, your laptop, anywhere.

**Why Do You Need Node.js for Cypress?**
- Cypress is written in JavaScript
- Node.js provides the runtime to execute Cypress
- Without Node.js, Cypress simply cannot run
- All modern JavaScript testing tools require Node.js

**What is npm?**
**npm** stands for Node Package Manager. It comes bundled with Node.js automatically.

**What npm Does:**
1. **Downloads packages** - Like Cypress, TypeScript, etc.
2. **Manages dependencies** - Tracks what your project needs
3. **Runs scripts** - Executes commands defined in your project
4. **Shares code** - Access 2+ million open-source packages

**Analogy:**
Think of npm as an "App Store" for JavaScript development tools. Instead of going to websites to download software, you type one command and npm downloads and installs it.`
        },
        {
          type: 'steps',
          title: "How to Install Node.js (and npm)",
          content: "Follow these exact steps to install Node.js. npm is included automatically:",
          steps: [
            { step: 1, action: "Open your web browser", details: "Open Chrome, Firefox, Edge, or Safari.", verification: "Browser is open." },
            { step: 2, action: "Go to nodejs.org", details: "Type **nodejs.org** in the address bar and press Enter. Wait for the page to load.", verification: "You see the Node.js website with two download buttons." },
            { step: 3, action: "Click the LTS version button", details: "You'll see two buttons: **LTS** (recommended) and **Current**. Click the **LTS** button. LTS means Long Term Support - it's the stable, reliable version.", verification: "Installer file starts downloading." },
            { step: 4, action: "Run the installer", details: "Open your Downloads folder. Double-click the file:\n- **Windows:** node-v20.x.x-x64.msi (or similar)\n- **Mac:** node-v20.x.x.pkg", verification: "Installation wizard opens." },
            { step: 5, action: "Follow the installation prompts", details: "**Windows:** Click Next through each screen. Accept the license agreement. Keep all default settings. Click Install when ready. You may see a User Account Control prompt - click Yes.\n**Mac:** Click Continue through each screen. Enter your password when prompted. Click Install.", verification: "Installation progress bar completes." },
            { step: 6, action: "Complete and restart VS Code", details: "Click Finish when installation completes. **IMPORTANT:** Close VS Code completely (File → Exit or Cmd+Q), then reopen it. This ensures VS Code recognizes the new Node.js installation.", verification: "VS Code reopens." }
          ]
        },
        {
          type: 'steps',
          title: "Verify Node.js and npm Installation",
          content: "Confirm everything installed correctly with these commands:",
          steps: [
            { step: 1, action: "Open VS Code with your project", details: "Launch VS Code and open your my-first-cypress-project folder.", verification: "Project is open in VS Code." },
            { step: 2, action: "Open the terminal", details: "Press **Ctrl+\`** to open the integrated terminal.", verification: "Terminal panel appears." },
            { step: 3, action: "Check Node.js version", details: "Type: **node --version** and press Enter. You should see a version number starting with 'v', like v20.10.0 or v18.19.0.", code: "node --version\n# Expected output: v20.10.0 (or similar)", verification: "Version number appears (v18 or higher is good)." },
            { step: 4, action: "Check npm version", details: "Type: **npm --version** and press Enter. You should see a version number like 10.2.0.", code: "npm --version\n# Expected output: 10.2.0 (or similar)", verification: "Version number appears." }
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
          content: `**package.json** is a configuration file that describes your project. Every Node.js project needs one.

**What's Inside package.json:**
- **name** - Your project's name
- **version** - Your project's version
- **description** - What your project does
- **scripts** - Commands you can run
- **dependencies** - Packages needed to run your project
- **devDependencies** - Packages needed for development (like Cypress)

**Why It Matters:**
- Lists all packages your project needs
- Anyone can run npm install to get all dependencies
- Ensures consistent environments across computers
- Required for CI/CD pipelines`
        },
        {
          type: 'steps',
          title: "Create package.json for Your Project",
          content: "Initialize your project with npm to create package.json:",
          steps: [
            { step: 1, action: "Open terminal in your project", details: "Make sure you're in my-first-cypress-project. Check with pwd (Mac) or cd (Windows).", verification: "Terminal shows your project path." },
            { step: 2, action: "Run npm init", details: "Type: **npm init -y** and press Enter. The -y flag accepts all default values automatically.", code: "npm init -y\n\n# Output:\nWrote to /path/to/my-first-cypress-project/package.json", verification: "Message says package.json was created." },
            { step: 3, action: "View the created file", details: "In VS Code's Explorer sidebar, click on package.json to open it. You'll see a JSON file with project info.", verification: "package.json opens in the editor." },
            { step: 4, action: "Understand the contents", details: "Look at each field:\n- \"name\": your folder name\n- \"version\": \"1.0.0\"\n- \"scripts\": commands you can run\n- And more", verification: "You can identify what each field means." }
          ]
        },
        {
          type: 'explanation',
          title: "Understanding package.json Fields",
          content: `Here's what each field in package.json means:

{
  "name": "my-first-cypress-project",  // Project name (no spaces!)
  "version": "1.0.0",                   // Your version number
  "description": "",                    // Describe what project does
  "main": "index.js",                   // Entry point (not used for testing)
  "scripts": {                          // Custom commands
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],                       // Search keywords
  "author": "",                         // Your name
  "license": "ISC",                     // License type
  "dependencies": {},                   // Production packages
  "devDependencies": {}                 // Development packages (Cypress goes here)
}

**dependencies vs devDependencies:**
- **dependencies:** Needed to RUN your project (for web apps)
- **devDependencies:** Needed for DEVELOPMENT only (like testing tools)
- Cypress goes in devDependencies because it's a development tool`
        },
        {
          type: 'explanation',
          title: "Installing Packages with npm",
          content: `Use these commands to install packages:

**Install a package and save to dependencies:**
npm install packagename

**Install a package as a dev dependency (for testing tools):**
npm install --save-dev packagename
or shorthand: npm install -D packagename

**What Happens When You Install:**
1. npm downloads the package from the npm registry
2. Package files go into node_modules folder
3. Package is added to package.json
4. Exact version is recorded in package-lock.json

**Example - Installing Cypress:**
npm install --save-dev cypress

This downloads Cypress and adds it to devDependencies.`
        }
      ]
    },
    advancedSection: {
      title: "Advanced: node_modules and npm Scripts",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Understanding node_modules",
          content: `**node_modules** is the folder where npm puts all installed packages.

**Important Facts:**
- Can get VERY large (100MB to 1GB+)
- Contains thousands of files
- Should NEVER be edited manually
- Should NEVER be committed to Git

**Why node_modules is Excluded from Git:**
- It's huge and would bloat your repository
- It can be recreated from package.json
- Different computers may need different versions
- Just run npm install to recreate it

**If You Delete node_modules:**
No problem! Run npm install and it recreates everything from package.json.

**package-lock.json:**
- Records EXACT versions of all packages
- Ensures consistent installs across all computers
- SHOULD be committed to Git
- Don't edit it manually`
        },
        {
          type: 'tip',
          title: "Useful npm Commands Reference",
          content: `Commands you'll use frequently:

**npm install** (or npm i)
Install all packages listed in package.json
Use this when you clone a project or delete node_modules

**npm install packagename**
Install a specific package and add to dependencies

**npm install -D packagename**
Install as devDependency (for development tools)

**npm uninstall packagename**
Remove a package from your project

**npm update**
Update all packages to latest compatible versions

**npm run scriptname**
Run a script defined in package.json scripts

**npm list**
Show all installed packages

**npm outdated**
Show packages that have newer versions available

**npm cache clean --force**
Clear npm cache (fixes weird installation issues)`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Set Up Node.js and Initialize Your Project",
      objective: "Install Node.js, verify the installation, and create package.json for your project.",
      problem: "Your project needs Node.js and a package.json file before you can install Cypress. This is the foundation of any modern JavaScript project.",
      prerequisites: ["VS Code installed", "Project folder created (my-first-cypress-project)", "Internet connection"],
      steps: [
        { stepNumber: 1, instruction: "Download Node.js", howTo: "Open browser, go to **nodejs.org**, click the **LTS** download button.", verification: "Installer file is downloading." },
        { stepNumber: 2, instruction: "Install Node.js", howTo: "Open Downloads folder, double-click the installer file. Click Next/Continue through all prompts. Accept defaults.", verification: "Installation completes with success message." },
        { stepNumber: 3, instruction: "Restart VS Code", howTo: "Completely close VS Code (File → Exit or Cmd+Q on Mac). Wait 5 seconds. Reopen VS Code.", verification: "VS Code restarts fresh." },
        { stepNumber: 4, instruction: "Open your project", howTo: "File → Open Folder → navigate to my-first-cypress-project → Select Folder.", verification: "Project appears in Explorer sidebar." },
        { stepNumber: 5, instruction: "Open terminal", howTo: "Press **Ctrl+\`** to open the integrated terminal.", verification: "Terminal panel appears at bottom." },
        { stepNumber: 6, instruction: "Verify Node.js installation", howTo: "Type: **node --version** and press Enter.", code: "node --version\n# Expected: v20.10.0 or similar (v18+ is good)", verification: "Version number starting with 'v' appears." },
        { stepNumber: 7, instruction: "Verify npm installation", howTo: "Type: **npm --version** and press Enter.", code: "npm --version\n# Expected: 10.2.0 or similar", verification: "Version number appears." },
        { stepNumber: 8, instruction: "Initialize your project", howTo: "Type: **npm init -y** and press Enter.", code: "npm init -y\n# Output: Wrote to .../package.json", verification: "Success message appears." },
        { stepNumber: 9, instruction: "Verify package.json", howTo: "Click on package.json in VS Code Explorer sidebar to open it.", verification: "JSON file opens showing name, version, scripts, etc." }
      ],
      expectedOutput: "Node.js v18+ is installed, npm is working, and package.json exists in your project root.",
      troubleshooting: [
        { issue: "'node' is not recognized as a command", cause: "Node.js not in system PATH, or VS Code wasn't restarted.", solution: "1. Make sure you restarted VS Code after installing Node.js. 2. If still not working, restart your computer. 3. Reinstall Node.js and check 'Add to PATH' option." },
        { issue: "npm init creates error", cause: "Not in the correct folder.", solution: "Run pwd or cd to check location. Make sure you're in my-first-cypress-project folder." },
        { issue: "Permission denied errors", cause: "Insufficient permissions.", solution: "On Mac, avoid using sudo with npm. On Windows, run VS Code as Administrator." },
        { issue: "npm hangs during install", cause: "Network issues or firewall.", solution: "Check internet connection. Wait a few minutes - large packages take time. Try again." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "Node.js is installed", verification: "node --version shows v18.x.x or higher." },
        { skill: "npm is installed", verification: "npm --version shows a version number." },
        { skill: "I understand what Node.js does", verification: "I can explain that Node.js runs JavaScript outside browsers." },
        { skill: "I understand what npm does", verification: "I can explain that npm installs and manages packages." },
        { skill: "package.json exists", verification: "My project root contains package.json file." },
        { skill: "I understand package.json", verification: "I can explain dependencies vs devDependencies." }
      ]
    }
  },

  // LESSON 5 - First Cypress Installation
  "codex-lesson-5": {
    lessonId: "codex-lesson-5",
    lessonNumber: 5,
    title: "Your First Cypress Installation and Test Run",
    overview: "This is the moment everything becomes real. You will install Cypress, launch the Test Runner for the first time, and execute automated tests that control a real browser. By the end of this lesson, you'll have run your first automated test.",
    beginnerSection: {
      title: "Beginner: Installing Cypress",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "What is Cypress?",
          content: `**Cypress** is a modern test automation framework for web applications.

**What Cypress Does:**
- Controls web browsers automatically (clicks, types, navigates)
- Runs tests you write in JavaScript/TypeScript
- Shows you exactly what's happening in real-time
- Takes screenshots and videos of test runs
- Provides detailed error messages when tests fail

**How Cypress Works (High Level):**
1. You write test code describing what to do (visit page, click button, etc.)
2. Cypress opens a real browser (Chrome, Firefox, Edge)
3. Cypress executes your commands in the browser
4. Cypress checks if the results match your expectations
5. Cypress reports pass/fail results

**Why Cypress is Popular:**
- Easy to install (one command)
- Tests run fast
- Excellent debugging with time-travel
- Automatically waits for elements (reduces flaky tests)
- Great documentation and community`
        },
        {
          type: 'steps',
          title: "How to Install Cypress",
          content: "Follow these steps to install Cypress in your project:",
          steps: [
            { step: 1, action: "Open VS Code with your project", details: "Launch VS Code, File → Open Folder → select my-first-cypress-project.", verification: "Project shows in Explorer sidebar with package.json visible." },
            { step: 2, action: "Open the terminal", details: "Press **Ctrl+\`** to open the integrated terminal.", verification: "Terminal panel appears at bottom." },
            { step: 3, action: "Install Cypress", details: "Type the following command and press Enter:\n**npm install cypress --save-dev**\n\nThis tells npm to:\n- Download Cypress from npm registry\n- Put files in node_modules\n- Add Cypress to devDependencies in package.json", code: "npm install cypress --save-dev\n\n# This may take 1-2 minutes depending on internet speed\n# You'll see a progress bar and lots of text", verification: "Command completes with 'added X packages' message." },
            { step: 4, action: "Verify installation", details: "Open package.json in VS Code. Look for 'devDependencies'. You should see cypress with a version number.", code: "// In package.json you should see:\n\"devDependencies\": {\n  \"cypress\": \"^13.x.x\"\n}", verification: "Cypress appears in devDependencies." }
          ]
        },
        {
          type: 'steps',
          title: "Opening Cypress for the First Time",
          content: "Launch the Cypress Test Runner to see the magic happen:",
          steps: [
            { step: 1, action: "Run the Cypress open command", details: "In the terminal, type: **npx cypress open** and press Enter.\n\nnpx is a tool that runs packages. It finds Cypress in node_modules and runs it.", code: "npx cypress open\n\n# First run takes longer as Cypress verifies itself\n# A window will open after 10-30 seconds", verification: "A new window opens (the Cypress Launchpad)." },
            { step: 2, action: "Select E2E Testing", details: "You'll see a welcome screen with two options: E2E Testing and Component Testing. Click **E2E Testing**. E2E (End-to-End) tests your application as a user would.", verification: "Configuration screen appears." },
            { step: 3, action: "Continue with configuration", details: "Cypress shows files it will create. Click **Continue**. Cypress will create:\n- cypress.config.ts\n- cypress/support/e2e.ts\n- cypress/support/commands.ts\n- cypress/fixtures/example.json", verification: "Browser selection screen appears." },
            { step: 4, action: "Select a browser and start", details: "You'll see a list of browsers installed on your computer (Chrome, Firefox, Edge, Electron). Click **Chrome** (or your preferred browser), then click **Start E2E Testing in Chrome**.", verification: "A Chrome window opens with the Cypress test runner interface." }
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
          content: `After running Cypress for the first time, check your project. Cypress created these files and folders:

**Project Structure:**
my-first-cypress-project/
├── cypress/
│   ├── e2e/              # Your test files go here (.cy.ts files)
│   ├── fixtures/         # Test data files (JSON)
│   ├── support/          # Helper files that run before tests
│   │   ├── commands.ts   # Custom Cypress commands
│   │   └── e2e.ts        # Configuration for all e2e tests
│   └── downloads/        # Files downloaded during tests
├── cypress.config.ts     # Main Cypress configuration
├── node_modules/         # All installed packages
├── package.json          # Project configuration
└── package-lock.json     # Exact package versions

**What Each Folder Is For:**
- **cypress/e2e/** - Write your test files here
- **cypress/fixtures/** - Store test data (user info, form data)
- **cypress/support/** - Reusable helper functions
- **cypress.config.ts** - Configure Cypress behavior`
        },
        {
          type: 'steps',
          title: "Create Your First Test File",
          content: "Let's write your first Cypress test:",
          steps: [
            { step: 1, action: "Create a new test file", details: "In VS Code Explorer, right-click on the **cypress/e2e** folder. Click **New File**. Name it exactly: **first-test.cy.ts** and press Enter.", verification: "New file first-test.cy.ts appears and opens in editor." },
            { step: 2, action: "Write your first test", details: "Copy and paste this code into the file:", code: `describe('My First Test', () => {
  it('successfully visits example.com', () => {
    // Visit the website
    cy.visit('https://example.com')
    
    // Verify the page contains expected text
    cy.contains('Example Domain')
  })
})`, verification: "Code appears in the editor without errors." },
            { step: 3, action: "Save the file", details: "Press **Ctrl+S** (Windows) or **Cmd+S** (Mac) to save.", verification: "No dot appears next to filename (indicates saved)." },
            { step: 4, action: "Understand the code", details: "**describe()** - Groups related tests together, like a folder\n**it()** - A single test case with a description\n**cy.visit()** - Navigates to a URL\n**cy.contains()** - Checks if text exists on page", verification: "You understand what each part does." }
          ]
        },
        {
          type: 'steps',
          title: "Run Your First Test",
          content: "Execute the test and watch Cypress in action:",
          steps: [
            { step: 1, action: "Return to Cypress Test Runner", details: "Click on the Cypress browser window (the Chrome window that opened earlier). If you closed it, run **npx cypress open** again in terminal and repeat the setup.", verification: "Cypress Test Runner is visible in browser." },
            { step: 2, action: "Find your test file", details: "In the Cypress interface, you'll see a list of spec files. Look for **first-test.cy.ts**.", verification: "Your test file is listed." },
            { step: 3, action: "Click to run the test", details: "Click on **first-test.cy.ts**. Cypress will:\n1. Open example.com\n2. Look for 'Example Domain' text\n3. Report pass or fail", verification: "Test runs and shows green checkmark (PASS)." },
            { step: 4, action: "Examine the results", details: "On the left panel, you see the test steps. Click on each step to see what happened. On the right, you see the actual browser state at each step.", verification: "You can see the step-by-step execution." }
          ]
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Cypress Configuration and CLI",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Understanding cypress.config.ts",
          content: `The cypress.config.ts file controls how Cypress behaves. Here's what you can configure:`,
          code: `import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Base URL - prepended to cy.visit() calls
    baseUrl: 'http://localhost:3000',
    
    // Browser viewport size
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Recording options
    video: true,                    // Record videos of test runs
    screenshotOnRunFailure: true,   // Screenshot when test fails
    
    // Timeout settings (in milliseconds)
    defaultCommandTimeout: 4000,    // How long commands wait
    pageLoadTimeout: 60000,         // How long to wait for page load
    
    // Node events for plugins
    setupNodeEvents(on, config) {
      // Add custom plugins here
    },
  },
});`
        },
        {
          type: 'tip',
          title: "Running Tests from Terminal (Headless)",
          content: `You've been using **npx cypress open** which opens the visual Test Runner. There's another way:

**Headless Mode (no UI):**
npx cypress run

This runs tests without opening a browser window. Used for:
- CI/CD pipelines
- Running many tests quickly
- When you don't need to watch the browser

**Common CLI Options:**
# Run specific test file
npx cypress run --spec "cypress/e2e/first-test.cy.ts"

# Run in specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox

# Run headed (see the browser even in run mode)
npx cypress run --headed

# Run with video recording
npx cypress run --video

**Add npm Script (Recommended):**
Add this to package.json scripts:
"scripts": {
  "cy:open": "cypress open",
  "cy:run": "cypress run"
}

Then you can run:
npm run cy:open
npm run cy:run`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Install Cypress and Run Your First Automated Test",
      objective: "Complete Cypress setup and experience the thrill of your first passing automated test.",
      problem: "Install Cypress, create a test file, and verify everything works by running a real test against a live website.",
      prerequisites: ["Node.js installed (v18+)", "package.json exists in project", "VS Code open with project"],
      steps: [
        { stepNumber: 1, instruction: "Install Cypress", howTo: "Open terminal (Ctrl+\`), type: **npm install cypress --save-dev** and press Enter. Wait for installation (1-2 minutes).", code: "npm install cypress --save-dev\n# Wait for 'added X packages' message", verification: "Message shows 'added X packages' with no errors." },
        { stepNumber: 2, instruction: "Verify installation in package.json", howTo: "Click package.json in Explorer. Look for devDependencies section.", verification: "\"cypress\": \"^13.x.x\" appears in devDependencies." },
        { stepNumber: 3, instruction: "Open Cypress", howTo: "In terminal, type: **npx cypress open** and press Enter.", verification: "Cypress Launchpad window opens after 10-30 seconds." },
        { stepNumber: 4, instruction: "Select E2E Testing", howTo: "Click the **E2E Testing** button in Cypress Launchpad.", verification: "Configuration files screen appears." },
        { stepNumber: 5, instruction: "Continue with config", howTo: "Click **Continue** to let Cypress create configuration files.", verification: "Browser selection screen appears." },
        { stepNumber: 6, instruction: "Start testing in Chrome", howTo: "Click **Chrome**, then click **Start E2E Testing in Chrome**.", verification: "Chrome opens with Cypress interface showing 'Create your first spec'." },
        { stepNumber: 7, instruction: "Create test file in VS Code", howTo: "Back in VS Code, right-click **cypress/e2e** folder → New File → name: **first-test.cy.ts**", verification: "Empty file opens in editor." },
        { stepNumber: 8, instruction: "Write the test", howTo: "Paste this code and save (Ctrl+S):", code: `describe('My First Test', () => {
  it('successfully visits example.com', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })
})`, verification: "Code is in file, file is saved." },
        { stepNumber: 9, instruction: "Run the test", howTo: "In Cypress browser window, click **first-test.cy.ts** in the specs list.", verification: "Test runs and shows GREEN checkmark - PASSED!" },
        { stepNumber: 10, instruction: "Celebrate and explore", howTo: "Click on different steps in the left panel to see what happened. Click the URL step to see the page load. You just ran your first automated test!", verification: "You can see each test step's result in the left panel." }
      ],
      expectedOutput: "Cypress installed, first-test.cy.ts created, test passes with green checkmark showing 'Example Domain' text was found.",
      troubleshooting: [
        { issue: "Cypress installation hangs", cause: "Slow network or large download.", solution: "Wait longer (can take 2-3 minutes). Check internet connection. Try again." },
        { issue: "Cypress window doesn't open", cause: "Firewall or process issue.", solution: "Check if another Cypress instance is running. Close all Cypress processes. Try again." },
        { issue: "No browsers listed", cause: "Cypress can't find browsers.", solution: "Make sure Chrome is installed. Restart Cypress." },
        { issue: "Test file not showing in Cypress", cause: "Wrong file location or extension.", solution: "File must be in cypress/e2e folder. File must end with .cy.ts or .cy.js." },
        { issue: "Test fails with 'could not connect'", cause: "Network blocking or DNS issue.", solution: "Try a different URL like https://www.google.com. Check internet connection." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "Cypress is installed", verification: "package.json shows cypress in devDependencies." },
        { skill: "I can open Cypress", verification: "npx cypress open launches the Cypress Launchpad." },
        { skill: "I understand E2E testing", verification: "I can explain that E2E tests the whole application like a user." },
        { skill: "I created a test file", verification: "first-test.cy.ts exists in cypress/e2e folder." },
        { skill: "I understand test structure", verification: "I can explain describe(), it(), cy.visit(), cy.contains()." },
        { skill: "I ran my first test", verification: "Test passed with green checkmark." },
        { skill: "I can explore test results", verification: "I can click test steps to see what happened." }
      ]
    }
  }
};

// ============================================================================
// LESSON 6-30 CONTENT GENERATORS (DETAILED)
// ============================================================================

function generateLesson6(): CompleteLessonContent {
  return {
    lessonId: "codex-lesson-6",
    lessonNumber: 6,
    title: "Understanding TypeScript Basics for Cypress",
    overview: "TypeScript adds type safety to JavaScript, catching errors before your tests even run. This lesson teaches TypeScript fundamentals specifically for Cypress testing.",
    beginnerSection: {
      title: "Beginner: What is TypeScript?",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "Why TypeScript for Cypress?",
          content: `**TypeScript** is JavaScript with types. Types tell the computer what kind of data you're working with.

**Why Use TypeScript?**
1. **Catches errors early** - Find bugs before running tests
2. **Better autocomplete** - VS Code suggests correct options
3. **Self-documenting code** - Types explain what data is expected
4. **Industry standard** - Most enterprise teams require TypeScript

**Basic Types You'll Use:**
- **string** - Text like "hello" or "user@email.com"
- **number** - Numbers like 42, 3.14, -10
- **boolean** - true or false
- **array** - List of items like [1, 2, 3] or ["a", "b", "c"]
- **object** - Structured data with properties

**JavaScript vs TypeScript:**
// JavaScript (no types - error found at runtime)
function greet(name) {
  return "Hello " + name.toUpperCase()
}
greet(123) // Runtime error! 123 doesn't have toUpperCase

// TypeScript (types - error found immediately)  
function greet(name: string) {
  return "Hello " + name.toUpperCase()
}
greet(123) // Error shown instantly! Argument must be string`
        },
        {
          type: 'steps',
          title: "TypeScript in Cypress",
          content: "Cypress already supports TypeScript! Here's how it works:",
          steps: [
            { step: 1, action: "Check your test file extension", details: "Your files should end in **.cy.ts** (TypeScript) not .cy.js (JavaScript). We already did this!", verification: "first-test.cy.ts uses .ts extension." },
            { step: 2, action: "Verify TypeScript configuration", details: "Cypress creates a tsconfig.json file automatically. Look in your project root for this file.", verification: "tsconfig.json exists in project." },
            { step: 3, action: "See TypeScript helping you", details: "In VS Code, type **cy.** in a test file. VS Code shows all available Cypress commands with descriptions. This is TypeScript's autocomplete!", verification: "Dropdown menu shows cy.visit, cy.get, cy.contains, etc." }
          ]
        },
        {
          type: 'code',
          title: "Basic Type Annotations",
          content: "Here's how to add types in TypeScript:",
          code: `// Variable with type annotation
const username: string = "testuser"
const age: number = 25
const isActive: boolean = true

// Array types
const scores: number[] = [95, 87, 92]
const names: string[] = ["Alice", "Bob", "Charlie"]

// Function with typed parameters and return
function formatEmail(name: string, domain: string): string {
  return name + "@" + domain
}

// Using in Cypress test
describe('TypeScript Example', () => {
  const testEmail: string = formatEmail("testuser", "example.com")
  
  it('uses typed data', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type(testEmail)
  })
})`
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Interfaces and Custom Types",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Creating Custom Types with Interfaces",
          content: `**Interfaces** define the shape of objects. They're perfect for test data.

**Why Use Interfaces?**
- Define what properties an object must have
- Catch errors when data is missing or wrong type
- Autocomplete works with your custom data structures

**Interface Example:**
interface User {
  email: string
  password: string
  name?: string  // ? means optional
}

const testUser: User = {
  email: "test@example.com",
  password: "SecurePass123!"
  // name is optional, so we don't need it
}`
        },
        {
          type: 'code',
          title: "Interfaces for Test Data",
          content: "Here's a complete example using interfaces:",
          code: `// Define the shape of a user
interface User {
  email: string
  password: string
  firstName?: string
  lastName?: string
}

// Define login response
interface LoginResponse {
  success: boolean
  token: string
  user: User
}

// Create test data matching the interface
const validUser: User = {
  email: "valid@example.com",
  password: "ValidPass123!"
}

const invalidUser: User = {
  email: "invalid",  // Bad format
  password: "123"    // Too short
}

// Use in tests
describe('Login Tests', () => {
  it('logs in with valid credentials', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type(validUser.email)
    cy.get('[data-testid="password"]').type(validUser.password)
    cy.get('[data-testid="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  it('shows error for invalid credentials', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type(invalidUser.email)
    cy.get('[data-testid="password"]').type(invalidUser.password)
    cy.get('[data-testid="submit"]').click()
    cy.get('[data-testid="error"]').should('be.visible')
  })
})`
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Type Safety in Cypress",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Advanced TypeScript Patterns",
          content: `**Utility Types for Testing:**

// Partial makes all properties optional
type PartialUser = Partial<User>
const minimalUser: PartialUser = { email: "test@test.com" }

// Pick selects specific properties
type Credentials = Pick<User, "email" | "password">

// Extend interfaces for variations
interface AdminUser extends User {
  role: "admin"
  permissions: string[]
}

**Type Assertions (use sparingly):**
const element = cy.get('.button') as Cypress.Chainable<JQuery<HTMLButtonElement>>

**Generics in Cypress:**
cy.request<LoginResponse>('/api/login', { email, password })
  .then((response) => {
    // response.body is typed as LoginResponse
    expect(response.body.token).to.exist
  })`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Add TypeScript to Your Tests",
      objective: "Create typed test data using interfaces and use it in a Cypress test.",
      problem: "Untyped test data leads to bugs and poor autocomplete. Add TypeScript interfaces to improve your tests.",
      prerequisites: ["Cypress installed", "first-test.cy.ts exists"],
      steps: [
        { stepNumber: 1, instruction: "Create a types file", howTo: "In cypress folder, create new file: **cypress/support/types.ts**", verification: "File is created." },
        { stepNumber: 2, instruction: "Add User interface", howTo: "Add this code to types.ts:", code: `export interface User {
  email: string
  password: string
  name?: string
}

export interface Product {
  id: number
  name: string
  price: number
}`, verification: "Code is in file, no errors." },
        { stepNumber: 3, instruction: "Create test with typed data", howTo: "Create new file: **cypress/e2e/typed-test.cy.ts**", code: `import { User } from '../support/types'

const testUser: User = {
  email: 'test@example.com',
  password: 'TestPass123!'
}

describe('Typed Test Example', () => {
  it('demonstrates TypeScript types', () => {
    cy.visit('https://example.com')
    cy.log(\`Testing with user: \${testUser.email}\`)
    cy.contains('Example Domain')
  })
})`, verification: "File is created with typed data." },
        { stepNumber: 4, instruction: "Run the test", howTo: "In Cypress, click on typed-test.cy.ts.", verification: "Test passes, log shows 'Testing with user: test@example.com'." }
      ],
      expectedOutput: "Types file created, test uses typed data, test passes.",
      troubleshooting: [
        { issue: "Import error on types file", cause: "Wrong path.", solution: "Check the import path matches your folder structure. Use relative paths." },
        { issue: "TypeScript errors in VS Code", cause: "Type mismatch.", solution: "Make sure your data matches the interface exactly." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "I understand TypeScript basics", verification: "I can explain what types are and why they help." },
        { skill: "I can add type annotations", verification: "I can write const name: string = 'value'." },
        { skill: "I can create interfaces", verification: "I can define interface for test data." },
        { skill: "I can use typed data in tests", verification: "My test uses imported typed data." }
      ]
    }
  };
}

function generateLesson7(): CompleteLessonContent {
  return {
    lessonId: "codex-lesson-7",
    lessonNumber: 7,
    title: "Writing Your First Real Cypress Test",
    overview: "Learn the complete anatomy of a Cypress test - describe blocks, it blocks, hooks, and how to organize tests professionally.",
    beginnerSection: {
      title: "Beginner: Test Structure Fundamentals",
      duration: "25 minutes",
      content: [
        {
          type: 'explanation',
          title: "Anatomy of a Cypress Test",
          content: `Every Cypress test follows this structure:

**describe()** - Groups related tests together (like a folder)
**it()** - A single test case
**beforeEach()** - Runs before each test in the describe block
**afterEach()** - Runs after each test
**before()** - Runs once before all tests in describe
**after()** - Runs once after all tests

**Basic Structure:**
describe('Feature Name', () => {
  beforeEach(() => {
    // Setup that runs before each test
  })

  it('should do something specific', () => {
    // Test code
  })

  it('should do something else', () => {
    // Another test
  })
})`
        },
        {
          type: 'code',
          title: "Complete Test Example",
          content: "Here's a real-world login test structure:",
          code: `describe('Login Page', () => {
  // Runs before EACH test
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should display the login form', () => {
    // Verify form elements exist
    cy.get('[data-testid="email-input"]').should('be.visible')
    cy.get('[data-testid="password-input"]').should('be.visible')
    cy.get('[data-testid="submit-button"]').should('be.visible')
  })

  it('should show error for invalid email', () => {
    // Type invalid email
    cy.get('[data-testid="email-input"]').type('not-an-email')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="submit-button"]').click()
    
    // Verify error appears
    cy.get('[data-testid="error-message"]')
      .should('be.visible')
      .and('contain', 'Invalid email')
  })

  it('should login successfully with valid credentials', () => {
    cy.get('[data-testid="email-input"]').type('user@example.com')
    cy.get('[data-testid="password-input"]').type('validPassword123')
    cy.get('[data-testid="submit-button"]').click()
    
    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard')
    cy.get('[data-testid="welcome-message"]').should('contain', 'Welcome')
  })
})`
        },
        {
          type: 'steps',
          title: "Create a Complete Test File",
          content: "Let's build a well-structured test:",
          steps: [
            { step: 1, action: "Create new test file", details: "In cypress/e2e, create: **login.cy.ts**", verification: "File is created." },
            { step: 2, action: "Add describe block", details: "Type: describe('Login Page', () => { })", verification: "Describe block written." },
            { step: 3, action: "Add beforeEach hook", details: "Inside describe, add: beforeEach(() => { cy.visit('https://example.com') })", verification: "Hook added." },
            { step: 4, action: "Add test cases", details: "Add multiple it() blocks with different test scenarios.", verification: "Multiple tests written." },
            { step: 5, action: "Run and verify", details: "Run in Cypress to ensure all tests pass.", verification: "All tests show green checkmarks." }
          ]
        }
      ]
    },
    intermediateSection: {
      title: "Intermediate: Hooks and Organization",
      duration: "20 minutes",
      content: [
        {
          type: 'explanation',
          title: "Understanding Hooks",
          content: `Hooks run at specific times during test execution:

**before()** - Runs ONCE before all tests in describe
  - Use for: Database seeding, one-time setup

**beforeEach()** - Runs before EACH test
  - Use for: Navigate to page, login user, reset state

**afterEach()** - Runs after EACH test  
  - Use for: Logout, clear data, take screenshots

**after()** - Runs ONCE after all tests
  - Use for: Cleanup, final reports

**Execution Order:**
before() → beforeEach() → it() → afterEach() → beforeEach() → it() → afterEach() → after()`
        },
        {
          type: 'code',
          title: "Hooks in Action",
          content: "Complete example with all hooks:",
          code: `describe('Shopping Cart', () => {
  before(() => {
    // Runs ONCE - seed test data
    cy.log('Seeding test database...')
    // cy.task('seedDatabase')
  })

  beforeEach(() => {
    // Runs before EACH test - login and visit page
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('test@example.com')
    cy.get('[data-testid="password"]').type('password123')
    cy.get('[data-testid="submit"]').click()
    cy.visit('/cart')
  })

  afterEach(() => {
    // Runs after EACH test - clear cart
    cy.log('Clearing cart after test...')
    // cy.get('[data-testid="clear-cart"]').click()
  })

  after(() => {
    // Runs ONCE after all tests - cleanup
    cy.log('All tests completed, cleaning up...')
    // cy.task('cleanupDatabase')
  })

  it('should display empty cart message', () => {
    cy.get('[data-testid="cart-empty"]').should('be.visible')
  })

  it('should add item to cart', () => {
    cy.visit('/products')
    cy.get('[data-testid="add-to-cart"]').first().click()
    cy.visit('/cart')
    cy.get('[data-testid="cart-item"]').should('have.length', 1)
  })
})`
        }
      ]
    },
    advancedSection: {
      title: "Advanced: Test Organization Strategies",
      duration: "10 minutes",
      content: [
        {
          type: 'explanation',
          title: "Organizing Large Test Suites",
          content: `**File Organization:**
cypress/e2e/
├── auth/
│   ├── login.cy.ts
│   ├── logout.cy.ts
│   └── register.cy.ts
├── shopping/
│   ├── cart.cy.ts
│   ├── checkout.cy.ts
│   └── products.cy.ts
└── user/
    ├── profile.cy.ts
    └── settings.cy.ts

**Nested Describes:**
describe('Authentication', () => {
  describe('Login', () => {
    it('should login with valid credentials', () => {})
    it('should show error for invalid credentials', () => {})
  })
  
  describe('Logout', () => {
    it('should logout successfully', () => {})
  })
})

**Skip and Only:**
it.skip('this test is skipped', () => {})
it.only('only this test runs', () => {})`
        }
      ]
    },
    handsOnExercise: {
      title: "Exercise: Build a Complete Test Suite",
      objective: "Create a well-structured test file with hooks and multiple test cases.",
      problem: "Create a test suite for a sample page using proper structure and hooks.",
      prerequisites: ["Cypress installed", "Understanding of describe/it/hooks"],
      steps: [
        { stepNumber: 1, instruction: "Create test file", howTo: "Create **cypress/e2e/example-page.cy.ts**", verification: "File exists." },
        { stepNumber: 2, instruction: "Add structure with hooks", howTo: "Add describe, before, beforeEach, afterEach, and multiple it blocks.", code: `describe('Example.com Tests', () => {
  before(() => {
    cy.log('Test suite starting...')
  })

  beforeEach(() => {
    cy.visit('https://example.com')
  })

  afterEach(() => {
    cy.log('Test completed')
  })

  it('should have correct title', () => {
    cy.title().should('contain', 'Example')
  })

  it('should display main heading', () => {
    cy.get('h1').should('contain', 'Example Domain')
  })

  it('should have a link to more information', () => {
    cy.get('a').should('contain', 'More information')
  })
})`, verification: "Code added without errors." },
        { stepNumber: 3, instruction: "Run all tests", howTo: "Run the test file in Cypress.", verification: "All 3 tests pass with green checkmarks." }
      ],
      expectedOutput: "Test file with 3 tests, all using hooks properly, all passing.",
      troubleshooting: [
        { issue: "beforeEach runs but test fails", cause: "Page didn't load in time.", solution: "Add cy.wait() or check URL is correct." }
      ]
    },
    exitChecklist: {
      items: [
        { skill: "I understand test structure", verification: "I can explain describe, it, and hooks." },
        { skill: "I can write tests with hooks", verification: "I can use beforeEach, afterEach, etc." },
        { skill: "I can organize tests", verification: "I can group related tests in describes." },
        { skill: "I created a complete test suite", verification: "My test file has multiple passing tests." }
      ]
    }
  };
}

// Continue generating lessons 8-30...
function generateLessonContent(lessonNumber: number): CompleteLessonContent {
  // Return specific generated lessons
  if (lessonNumber === 6) return generateLesson6();
  if (lessonNumber === 7) return generateLesson7();
  
  // For lessons 8-30, generate comprehensive content
  const lessonTitles: Record<number, string> = {
    8: "Mastering Element Selectors in Cypress",
    9: "Cypress Commands Deep Dive",
    10: "Assertions - Verifying Your Application Works",
    11: "Debugging Failing Cypress Tests",
    12: "From Manual Tester to Automation Engineer Mindset",
    13: "Introduction to OpenAI Codex and GitHub Copilot",
    14: "Installing and Configuring GitHub Copilot",
    15: "Your First AI-Generated Cypress Test",
    16: "Prompt Engineering Fundamentals for Testers",
    17: "Safe Enterprise Usage of AI Code Generation",
    18: "Page Object Model (POM) with AI Generation",
    19: "The Screenplay Pattern for Complex Workflows",
    20: "Hybrid Screenplay + POM Architecture",
    21: "Test Data Management Strategies",
    22: "Custom Commands and Reusable Utilities",
    23: "Eliminating Flaky Tests Forever",
    24: "Multi-Environment Configuration",
    25: "GitLab CI/CD Pipeline Configuration",
    26: "Nightly Regression Testing Strategy",
    27: "Parallel Test Execution and Sharding",
    28: "Compliance, Audit Trails, and Governance",
    29: "Operating AI Codex Safely at Enterprise Scale",
    30: "Capstone: Building an Enterprise Cypress Framework"
  };

  const lessonDescriptions: Record<number, string> = {
    8: "Selectors find elements on the page. Master CSS selectors, data-testid attributes, and best practices for reliable, maintainable tests.",
    9: "Deep dive into Cypress commands - visit, get, click, type, should, and chaining. Understand how commands work together.",
    10: "Assertions verify your application works correctly. Learn should(), expect(), and comprehensive verification strategies.",
    11: "When tests fail, you need to debug quickly. Learn time-travel debugging, cy.pause(), screenshots, and systematic troubleshooting.",
    12: "Transform your thinking from manual testing to automation. Learn what to automate, ROI calculations, and strategic planning.",
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
    23: "Eliminate flaky tests forever. Learn root causes, waiting strategies, retry logic, and stability patterns.",
    24: "Configure Cypress for multiple environments - dev, staging, production. Environment switching and secrets.",
    25: "Build production GitLab CI/CD pipelines that run Cypress tests automatically on every commit.",
    26: "Set up scheduled nightly regression against ACC/PreProd with notifications and reporting.",
    27: "Reduce test time using parallel execution and sharding across multiple machines.",
    28: "Implement compliance - audit trails, evidence collection, change management, regulatory requirements.",
    29: "Scale AI usage safely - governance frameworks, training programs, risk mitigation at enterprise level.",
    30: "Apply everything to build a complete enterprise Cypress framework from scratch."
  };

  const lessonContent = generateDetailedLessonContent(lessonNumber, lessonTitles[lessonNumber], lessonDescriptions[lessonNumber]);
  return lessonContent;
}

function generateDetailedLessonContent(lessonNumber: number, title: string, overview: string): CompleteLessonContent {
  return {
    lessonId: `codex-lesson-${lessonNumber}`,
    lessonNumber,
    title,
    overview,
    beginnerSection: generateBeginnerContent(lessonNumber, title),
    intermediateSection: generateIntermediateContent(lessonNumber, title),
    advancedSection: generateAdvancedContent(lessonNumber, title),
    handsOnExercise: generateExerciseContent(lessonNumber, title),
    exitChecklist: generateChecklistContent(lessonNumber, title)
  };
}

function generateBeginnerContent(lessonNumber: number, title: string): LessonSection {
  const beginnerContents: Record<number, SectionContent[]> = {
    8: [
      { type: 'explanation', title: "What Are Selectors?", content: `**Selectors** find HTML elements on a webpage so Cypress can interact with them.

Without selectors, Cypress doesn't know which button to click or which input to type into.

**Types of Selectors:**
1. **CSS Selectors** - Most common, use CSS syntax
2. **data-testid** - Custom attributes, most reliable
3. **cy.contains()** - Find elements by text content

**CSS Selector Basics:**
- **#id** - Select by ID: #login-button
- **.class** - Select by class: .btn-primary
- **tag** - Select by HTML tag: button, input
- **[attribute]** - Select by attribute: [type="submit"]
- **[data-testid="value"]** - Custom test attributes` },
      { type: 'code', title: "Selector Examples", content: "Different ways to find elements:", code: `// By ID (unique identifier)
cy.get('#submit-button')

// By class name
cy.get('.btn-primary')

// By data-testid (RECOMMENDED - most stable)
cy.get('[data-testid="login-form"]')

// By HTML tag
cy.get('button')

// By attribute value
cy.get('[type="email"]')
cy.get('[placeholder="Enter email"]')

// By text content
cy.contains('Submit')
cy.contains('button', 'Submit')  // button containing "Submit"

// Chained/nested selectors
cy.get('.form-container').find('input').first()
cy.get('[data-testid="form"]').within(() => {
  cy.get('[data-testid="email"]')
})` },
      { type: 'steps', title: "Finding Selectors in Browser", content: "How to find selectors for elements:", steps: [
        { step: 1, action: "Open browser DevTools", details: "Press **F12** or right-click → Inspect on any webpage.", verification: "DevTools panel opens." },
        { step: 2, action: "Use element selector tool", details: "Click the arrow icon in DevTools (top-left). Then click any element on the page.", verification: "Element is highlighted in HTML." },
        { step: 3, action: "Find the element's attributes", details: "Look at the highlighted HTML. Note the id, class, data-testid, or other attributes.", verification: "You can see the element's attributes." },
        { step: 4, action: "Build your selector", details: "Use the attributes to build a cy.get() selector. Prefer data-testid if available.", verification: "You have a selector to use in Cypress." }
      ]}
    ],
    9: [
      { type: 'explanation', title: "Cypress Commands Overview", content: `Cypress provides commands to interact with your application. Here are the most important ones:

**Navigation Commands:**
- **cy.visit(url)** - Navigate to a URL
- **cy.reload()** - Reload the page
- **cy.go('back')** - Browser back button
- **cy.go('forward')** - Browser forward button

**Query Commands (find elements):**
- **cy.get(selector)** - Find element by CSS selector
- **cy.contains(text)** - Find element by text
- **cy.find(selector)** - Find within parent element

**Action Commands (interact with elements):**
- **.click()** - Click an element
- **.type(text)** - Type into input
- **.clear()** - Clear input field
- **.check()** - Check a checkbox
- **.select(value)** - Select dropdown option
- **.scrollTo()** - Scroll element into view

**Assertion Commands (verify state):**
- **.should('be.visible')** - Element is visible
- **.should('have.text', 'X')** - Element has text
- **.should('have.value', 'X')** - Input has value` },
      { type: 'code', title: "Command Examples", content: "Common Cypress command patterns:", code: `// Visit a page
cy.visit('https://example.com')
cy.visit('/login')  // Uses baseUrl from config

// Find and interact with elements
cy.get('[data-testid="email"]').type('user@example.com')
cy.get('[data-testid="password"]').type('password123')
cy.get('[data-testid="submit"]').click()

// Clear and retype
cy.get('[data-testid="search"]').clear().type('new search')

// Checkboxes and radio buttons
cy.get('[data-testid="remember-me"]').check()
cy.get('[data-testid="terms"]').uncheck()

// Select dropdowns
cy.get('[data-testid="country"]').select('USA')
cy.get('[data-testid="country"]').select('United States')

// Multiple clicks
cy.get('[data-testid="increment"]').click().click().click()
cy.get('[data-testid="increment"]').click({ multiple: true })

// Force interactions (use sparingly)
cy.get('[data-testid="hidden-button"]').click({ force: true })` }
    ],
    10: [
      { type: 'explanation', title: "What Are Assertions?", content: `**Assertions** verify that your application is in the expected state. Without assertions, tests just perform actions without checking if they worked.

**Why Assertions Matter:**
- Confirm actions had the expected result
- Catch bugs when behavior changes
- Document expected application behavior

**Two Types of Assertions in Cypress:**

1. **Implicit Assertions (.should)**
cy.get('[data-testid="title"]').should('be.visible')
cy.get('[data-testid="count"]').should('have.text', '5')

2. **Explicit Assertions (expect)**
cy.get('[data-testid="count"]').then(($el) => {
  expect($el.text()).to.equal('5')
})` },
      { type: 'code', title: "Common Assertions", content: "Assertions you'll use constantly:", code: `// Visibility
cy.get('.element').should('be.visible')
cy.get('.element').should('not.be.visible')
cy.get('.element').should('exist')
cy.get('.element').should('not.exist')

// Text content
cy.get('.message').should('have.text', 'Success!')
cy.get('.message').should('contain', 'Success')
cy.get('.message').should('not.contain', 'Error')

// Input values
cy.get('input').should('have.value', 'test@example.com')
cy.get('input').should('be.empty')

// CSS classes and attributes
cy.get('.button').should('have.class', 'active')
cy.get('.button').should('not.have.class', 'disabled')
cy.get('input').should('have.attr', 'placeholder', 'Email')
cy.get('button').should('be.disabled')
cy.get('button').should('be.enabled')

// URL and page state
cy.url().should('include', '/dashboard')
cy.url().should('eq', 'https://example.com/page')
cy.title().should('contain', 'Dashboard')

// Length and count
cy.get('.list-item').should('have.length', 5)
cy.get('.list-item').should('have.length.greaterThan', 3)

// Chaining assertions
cy.get('[data-testid="message"]')
  .should('be.visible')
  .and('have.text', 'Welcome!')
  .and('have.css', 'color', 'rgb(0, 128, 0)')` }
    ],
    11: [
      { type: 'explanation', title: "Debugging Tools in Cypress", content: `When tests fail, Cypress provides powerful debugging tools:

**1. Time-Travel Debugging**
Click on any command in the Cypress Command Log (left panel) to see the application state at that moment. The browser snapshot shows exactly what the page looked like.

**2. cy.pause()**
Pauses test execution so you can interact with the page manually.
cy.get('[data-testid="button"]').click()
cy.pause()  // Test pauses here
cy.get('[data-testid="result"]').should('be.visible')

**3. cy.debug()**
Opens browser DevTools and pauses, letting you inspect the element:
cy.get('[data-testid="complex-element"]').debug()

**4. cy.log()**
Prints messages to the Command Log:
cy.log('About to click the button')
cy.log('User data:', JSON.stringify(userData))` },
      { type: 'steps', title: "Systematic Debugging Process", content: "Follow these steps when a test fails:", steps: [
        { step: 1, action: "Read the error message", details: "Cypress error messages are detailed. Read the actual message and the selector/command that failed.", verification: "You understand what Cypress expected vs what happened." },
        { step: 2, action: "Use time-travel", details: "Click commands in the left panel to see page state at each step. Find where things went wrong.", verification: "You can identify the step where behavior differs from expected." },
        { step: 3, action: "Check the selector", details: "Open DevTools (F12), use the selector tool to verify your selector matches the intended element.", verification: "Selector finds the correct element." },
        { step: 4, action: "Add cy.pause() before failure", details: "Insert cy.pause() before the failing command to inspect the live page.", verification: "You can manually interact with the page at the failure point." },
        { step: 5, action: "Check for timing issues", details: "If element isn't found, the page might not have loaded. Add assertions to wait for page to be ready.", verification: "Test waits for proper page state before acting." }
      ]}
    ],
    13: [
      { type: 'explanation', title: "What is OpenAI Codex?", content: `**OpenAI Codex** is an AI system trained to understand and generate code. It powers tools like GitHub Copilot.

**What Codex Can Do:**
- Read your comments and understand intent
- Generate code based on descriptions
- Complete partial code you've written
- Suggest entire functions and test cases

**What Codex IS NOT:**
- NOT a replacement for testers
- NOT infallible (it makes mistakes!)
- NOT for runtime execution
- NOT for handling credentials or secrets

**GitHub Copilot:**
GitHub Copilot is a VS Code extension powered by Codex. It suggests code as you type, turning comments into working code.

**Critical Rule for This Course:**
Codex/Copilot is used at **AUTHORING TIME ONLY**
- You use it while writing tests
- The generated code is reviewed by you
- AI never runs during test execution
- AI never makes autonomous decisions about your tests` },
      { type: 'warning', title: "Enterprise Safety Rules", content: `**ABSOLUTE RULES for AI in Enterprise Testing:**

1. **Authoring-time ONLY** - AI assists while you write code, never during test execution

2. **Never let AI handle credentials** - NEVER put passwords or API keys in prompts

3. **Always review AI-generated code** - Every line must be understood and approved by a human

4. **AI doesn't make test decisions** - AI suggests, humans decide what to test and assert

5. **Keep sensitive data out of prompts** - Don't describe production URLs, user data, or business logic

6. **AI cannot modify CI secrets** - All CI/CD configuration is human-controlled

**Why These Rules?**
- Security: AI services send data to external servers
- Reliability: AI can generate incorrect code
- Compliance: Audit trails require human accountability
- Quality: AI doesn't understand your specific requirements` }
    ],
    14: [
      { type: 'steps', title: "Installing GitHub Copilot", content: "Complete installation guide:", steps: [
        { step: 1, action: "Create GitHub account", details: "Go to github.com, click Sign Up. Create account with your email.", verification: "You can log in to GitHub." },
        { step: 2, action: "Subscribe to GitHub Copilot", details: "Go to github.com/features/copilot. Click 'Start my free trial' (30 days free) or subscribe. Choose Individual plan for personal use.", verification: "Copilot subscription is active in your GitHub settings." },
        { step: 3, action: "Open VS Code", details: "Launch Visual Studio Code.", verification: "VS Code is open." },
        { step: 4, action: "Open Extensions panel", details: "Press **Ctrl+Shift+X** or click Extensions icon in sidebar.", verification: "Extensions panel opens." },
        { step: 5, action: "Search for GitHub Copilot", details: "Type **GitHub Copilot** in search box. Look for the official extension by GitHub.", verification: "You see GitHub Copilot extension." },
        { step: 6, action: "Install the extension", details: "Click the blue **Install** button.", verification: "Extension installs (button changes to Uninstall)." },
        { step: 7, action: "Sign in to GitHub", details: "A popup appears asking to sign in. Click **Sign in to GitHub**. Browser opens - log in and authorize VS Code.", verification: "VS Code shows 'GitHub Copilot' in status bar." },
        { step: 8, action: "Verify Copilot is active", details: "Open a .ts file. Type a comment like: // function to add two numbers. Wait 1-2 seconds for suggestion.", verification: "Gray suggestion text appears." }
      ]}
    ],
    15: [
      { type: 'explanation', title: "Generating Tests with Copilot", content: `**How to Trigger Copilot Suggestions:**
1. Write a comment describing what you want
2. Press Enter and wait 1-2 seconds
3. Suggestion appears in gray text
4. Press **Tab** to accept, **Esc** to reject

**Good Prompts for Test Generation:**
// Test that login form shows validation error for empty email
// Test that clicking submit button navigates to dashboard
// Test that product list displays 10 items

**Better Prompts (more specific):**
// Cypress test: visit /login, type invalid email "notanemail", 
// click submit, verify error message "Invalid email format" appears

**Best Prompts (full context):**
// Cypress E2E test for login page
// Page has email input with data-testid="email"
// Password input with data-testid="password"  
// Submit button with data-testid="submit"
// Test: enter valid credentials and verify redirect to /dashboard` },
      { type: 'code', title: "AI-Generated Test Example", content: "What you write vs what Copilot generates:", code: `// What you type:
// Cypress test: visit example.com and verify the page title contains "Example"

// Copilot suggestion (appears in gray):
describe('Example.com', () => {
  it('should have correct page title', () => {
    cy.visit('https://example.com')
    cy.title().should('contain', 'Example')
  })
})

// You press Tab to accept, then modify if needed

// Another example - you type:
// Test login with email "user@test.com" and password "pass123"
// Verify successful login redirects to /dashboard

// Copilot generates:
describe('Login', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('user@test.com')
    cy.get('[data-testid="password"]').type('pass123')
    cy.get('[data-testid="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})` }
    ],
    16: [
      { type: 'explanation', title: "Prompt Engineering Principles", content: `**Prompt Engineering** is the skill of writing instructions that produce useful AI output.

**Key Principles:**

1. **Be Specific** - Vague prompts give vague results
   Bad: "test login"
   Good: "Cypress test: visit /login, enter email 'user@test.com', password 'Pass123', click submit, verify URL is /dashboard"

2. **Provide Context** - Tell AI what it's working with
   Include: Framework (Cypress), selectors used, expected behavior

3. **Give Examples** - Show the pattern you want
   "Generate tests following this pattern: describe → beforeEach → multiple it blocks"

4. **Iterate** - Accept suggestion, modify, regenerate if needed

5. **Stay in Control** - AI suggests, you decide. Reject bad suggestions.` },
      { type: 'code', title: "Prompt Templates for Testing", content: "Copy and modify these templates:", code: `// LOGIN TEST TEMPLATE:
// Cypress E2E test for login functionality
// Email input: [data-testid="email-input"]
// Password input: [data-testid="password-input"]
// Submit button: [data-testid="login-button"]
// Test scenarios:
// 1. Valid login - email: user@test.com, password: ValidPass123
// 2. Invalid email format
// 3. Wrong password shows error

// FORM VALIDATION TEMPLATE:
// Cypress test for form validation
// Form has fields: name (required), email (required, valid format), phone (optional)
// Submit button is disabled until required fields are valid
// Test all validation scenarios

// API TESTING TEMPLATE:
// Cypress API test for POST /api/users
// Request body: { email: string, name: string }
// Expected: 201 status, response contains user id
// Also test: 400 for invalid email, 409 for duplicate email` }
    ],
    18: [
      { type: 'explanation', title: "What is Page Object Model (POM)?", content: `**Page Object Model** is a design pattern that separates test logic from page details.

**The Problem Without POM:**
// Same selectors repeated everywhere
cy.get('[data-testid="email"]').type('user@test.com')
cy.get('[data-testid="email"]').clear()
cy.get('[data-testid="email"]').type('other@test.com')
// If selector changes, update ALL tests!

**The Solution With POM:**
Create a class that contains all selectors and methods for a page.
// Only one place to update if selector changes

**Benefits:**
1. **Maintainability** - Change selector once, all tests update
2. **Readability** - Tests read like user actions
3. **Reusability** - Same page object across many tests
4. **Organization** - Clear separation of concerns` },
      { type: 'code', title: "Page Object Example", content: "Complete Page Object implementation:", code: `// cypress/pages/LoginPage.ts
export class LoginPage {
  // Selectors (private - only used internally)
  private emailInput = '[data-testid="email"]'
  private passwordInput = '[data-testid="password"]'
  private submitButton = '[data-testid="submit"]'
  private errorMessage = '[data-testid="error"]'

  // Actions
  visit() {
    cy.visit('/login')
    return this  // Return this for chaining
  }

  enterEmail(email: string) {
    cy.get(this.emailInput).clear().type(email)
    return this
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).clear().type(password)
    return this
  }

  submit() {
    cy.get(this.submitButton).click()
    return this
  }

  // Compound action
  loginAs(email: string, password: string) {
    this.enterEmail(email)
    this.enterPassword(password)
    this.submit()
    return this
  }

  // Assertions
  verifyErrorMessage(message: string) {
    cy.get(this.errorMessage).should('contain', message)
    return this
  }

  verifyRedirectToDashboard() {
    cy.url().should('include', '/dashboard')
    return this
  }
}

// Using the Page Object in tests:
// cypress/e2e/login.cy.ts
import { LoginPage } from '../pages/LoginPage'

describe('Login', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('should login successfully', () => {
    loginPage
      .loginAs('user@test.com', 'password123')
      .verifyRedirectToDashboard()
  })

  it('should show error for invalid credentials', () => {
    loginPage
      .loginAs('wrong@test.com', 'wrongpass')
      .verifyErrorMessage('Invalid credentials')
  })
})` }
    ],
    22: [
      { type: 'explanation', title: "What Are Custom Commands?", content: `**Custom Commands** are reusable Cypress commands that you create to eliminate repetition.

**Why Custom Commands?**
- Avoid repeating the same code in every test
- Create readable, domain-specific commands
- Encapsulate complex logic
- Easy to maintain (change once, works everywhere)

**Examples of Custom Commands:**
- cy.login(email, password) - Log in a user
- cy.createProduct(data) - Create a product via API
- cy.clearCart() - Empty shopping cart
- cy.getByTestId(id) - Shorthand for data-testid selector` },
      { type: 'code', title: "Creating Custom Commands", content: "Add commands to cypress/support/commands.ts:", code: `// cypress/support/commands.ts

// Simple command - shorthand for data-testid
Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(\`[data-testid="\${testId}"]\`)
})

// Login command with UI interaction
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')
  cy.getByTestId('email').type(email)
  cy.getByTestId('password').type(password)
  cy.getByTestId('submit').click()
  cy.url().should('include', '/dashboard')
})

// API login (faster, bypasses UI)
Cypress.Commands.add('loginViaApi', (email: string, password: string) => {
  cy.request('POST', '/api/auth/login', { email, password })
    .then((response) => {
      window.localStorage.setItem('authToken', response.body.token)
    })
})

// Command with options
Cypress.Commands.add('fillForm', (formData: Record<string, string>) => {
  Object.entries(formData).forEach(([field, value]) => {
    cy.getByTestId(field).clear().type(value)
  })
})

// TypeScript declarations (cypress/support/index.d.ts)
declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    login(email: string, password: string): Chainable<void>
    loginViaApi(email: string, password: string): Chainable<void>
    fillForm(formData: Record<string, string>): Chainable<void>
  }
}

// Using custom commands in tests:
describe('Dashboard', () => {
  beforeEach(() => {
    cy.loginViaApi('user@test.com', 'password123')
    cy.visit('/dashboard')
  })

  it('shows welcome message', () => {
    cy.getByTestId('welcome').should('be.visible')
  })
})` }
    ],
    12: [
      { type: 'explanation', title: "The Automation Mindset", content: `**From Manual to Automation Thinking:**

As a manual tester, you execute tests step by step. As an automation engineer, you think about:

1. **What to Automate:**
   - Repetitive tests (run on every build)
   - Regression tests (check existing functionality)
   - Data-driven tests (many variations of same test)
   - Smoke tests (critical path functionality)

2. **What NOT to Automate:**
   - Exploratory testing
   - Tests that change frequently
   - One-time tests
   - Tests requiring human judgment (UX, aesthetics)

**The Test Automation Pyramid:**
            /\\
           /UI\\        <- Fewest tests (slow, expensive)
          /------\\
         / API    \\    <- More tests (fast, reliable)
        /----------\\
       /   UNIT     \\  <- Most tests (fastest, cheapest)
      ----------------

**ROI Calculation:**
Manual Test Cost = (Time per execution × Number of executions × Hourly rate)
Automation Cost = (Development time × Hourly rate) + Maintenance
ROI is positive when: Manual Cost > Automation Cost` },
      { type: 'steps', title: "Evaluating What to Automate", content: "Use this checklist for every test:", steps: [
        { step: 1, action: "Is it run frequently?", details: "Tests run on every build or release are prime automation candidates.", verification: "Yes = good candidate." },
        { step: 2, action: "Is it stable?", details: "Features that change constantly make poor automation targets.", verification: "Stable feature = good candidate." },
        { step: 3, action: "Is it repetitive?", details: "Same steps with different data? Perfect for data-driven automation.", verification: "Repetitive = great candidate." },
        { step: 4, action: "Is it critical?", details: "Login, checkout, core business flows should be automated first.", verification: "Critical path = priority automation." },
        { step: 5, action: "Can results be verified programmatically?", details: "If you need human judgment, keep it manual.", verification: "Clear pass/fail criteria = automatable." }
      ]}
    ],
    17: [
      { type: 'explanation', title: "Enterprise AI Safety Rules", content: `**CRITICAL SAFETY BOUNDARIES FOR AI CODE GENERATION:**

**Rule 1: Authoring-Time Only**
AI assists while you WRITE code, never during test EXECUTION.
- ✅ Use Copilot to write test code
- ❌ Never let AI make runtime decisions

**Rule 2: Never Handle Credentials**
NEVER put passwords, API keys, or secrets in AI prompts.
- ✅ cy.get('[data-testid="password"]').type(Cypress.env('PASSWORD'))
- ❌ // Login with password "MySecret123"

**Rule 3: Always Review AI Output**
Every line of AI-generated code must be understood and approved.
- Read the code before accepting
- Understand what it does
- Verify it matches your requirements

**Rule 4: AI Doesn't Make Decisions**
AI suggests code, humans decide what to test.
- You decide test coverage
- You decide assertions
- You decide test strategy

**Rule 5: Audit Trail Required**
All AI usage must be documentable for compliance.
- Code reviews for AI-generated code
- Comments noting AI assistance
- Team awareness of AI usage` },
      { type: 'warning', title: "What Can Go Wrong", content: `**Real Enterprise Risks:**

1. **Credential Leakage** - AI sends prompts to external servers. Secrets in prompts = leaked credentials.

2. **Incorrect Code** - AI can generate code that looks right but has bugs. Critical in enterprise systems.

3. **Compliance Violations** - Regulated industries require human accountability. AI-generated code without review fails audits.

4. **Security Vulnerabilities** - AI might generate code with security flaws. Always security review AI output.

5. **Intellectual Property** - AI trained on open source. Generated code might have licensing implications.

**Mitigation:**
- Clear policies on AI usage
- Mandatory code review
- Training for all team members
- Never share sensitive context with AI` }
    ],
    19: [
      { type: 'explanation', title: "The Screenplay Pattern", content: `**Screenplay Pattern** is an advanced alternative to Page Object Model for complex workflows.

**Core Concepts:**
- **Actors** - Users who interact with the system
- **Tasks** - High-level actions actors perform
- **Interactions** - Low-level UI interactions
- **Questions** - Queries about system state

**When to Use Screenplay vs POM:**
Use **POM** when:
- Simple page-based navigation
- Straightforward CRUD operations
- Small to medium test suites

Use **Screenplay** when:
- Complex multi-step workflows
- Multiple user roles
- Behavior-driven development (BDD)
- Large enterprise applications

**Screenplay Structure:**
Actor performs Task, which is composed of Interactions
Actor asks Question to verify result

Example:
alice.attemptsTo(
  Login.withCredentials('user', 'pass'),
  Navigate.to('/dashboard'),
  Verify.that(DashboardPage.title).equals('Welcome')
)` },
      { type: 'code', title: "Screenplay Implementation", content: "Basic Screenplay pattern in Cypress:", code: `// Define an Actor
class Actor {
  name: string
  constructor(name: string) {
    this.name = name
  }
  attemptsTo(...tasks: Task[]) {
    tasks.forEach(task => task.performAs(this))
  }
}

// Define a Task
interface Task {
  performAs(actor: Actor): void
}

// Login Task
const Login = {
  withCredentials: (email: string, password: string): Task => ({
    performAs: (actor) => {
      cy.log(\`\${actor.name} logs in\`)
      cy.visit('/login')
      cy.get('[data-testid="email"]').type(email)
      cy.get('[data-testid="password"]').type(password)
      cy.get('[data-testid="submit"]').click()
    }
  })
}

// Usage in test
describe('Screenplay Example', () => {
  it('user can login', () => {
    const alice = new Actor('Alice')
    alice.attemptsTo(
      Login.withCredentials('alice@test.com', 'pass123')
    )
    cy.url().should('include', '/dashboard')
  })
})` }
    ],
    20: [
      { type: 'explanation', title: "Hybrid Architecture", content: `**Hybrid Screenplay + POM** combines the best of both patterns.

**Architecture Layers:**
1. **Page Objects** - Encapsulate selectors and low-level interactions
2. **Tasks** - Compose page object methods into business actions
3. **Actors** - Execute tasks as specific user personas

**Why Hybrid?**
- Page Objects keep selectors maintainable
- Tasks keep tests readable and business-focused
- Actors enable multi-user scenarios

**Layer Responsibilities:**
- **Page Objects:** WHERE to interact (selectors, elements)
- **Tasks:** WHAT to do (business actions)
- **Actors:** WHO is doing it (user context)` },
      { type: 'code', title: "Hybrid Implementation", content: "Combining POM with Screenplay:", code: `// Layer 1: Page Object (low-level)
class LoginPage {
  private selectors = {
    email: '[data-testid="email"]',
    password: '[data-testid="password"]',
    submit: '[data-testid="submit"]'
  }
  visit() { cy.visit('/login') }
  typeEmail(email: string) { cy.get(this.selectors.email).type(email) }
  typePassword(pass: string) { cy.get(this.selectors.password).type(pass) }
  clickSubmit() { cy.get(this.selectors.submit).click() }
}

// Layer 2: Task (business action)
const LoginTask = {
  as: (email: string, password: string) => ({
    perform: () => {
      const page = new LoginPage()
      page.visit()
      page.typeEmail(email)
      page.typePassword(password)
      page.clickSubmit()
    }
  })
}

// Layer 3: Actor
class User {
  constructor(public name: string) {}
  performs(task: { perform: () => void }) {
    cy.log(\`\${this.name} performs action\`)
    task.perform()
  }
}

// Test using hybrid pattern
describe('Hybrid Pattern Test', () => {
  it('admin can login', () => {
    const admin = new User('Admin')
    admin.performs(LoginTask.as('admin@test.com', 'adminpass'))
    cy.url().should('include', '/admin')
  })
})` }
    ],
    21: [
      { type: 'explanation', title: "Test Data Management", content: `**Managing Test Data** is crucial for reliable, maintainable tests.

**Data Strategies:**

1. **Fixtures (Static Data)**
   - JSON files with predefined data
   - Good for: stable reference data
   - Location: cypress/fixtures/

2. **Factories (Dynamic Data)**
   - Functions that generate data
   - Good for: unique data per test run
   - Avoid conflicts between parallel tests

3. **API Seeding**
   - Create data via API before tests
   - Good for: complex data relationships
   - Fast and reliable

4. **Database Seeding**
   - Direct database manipulation
   - Good for: known state testing
   - Requires cy.task() setup` },
      { type: 'code', title: "Data Management Examples", content: "Different approaches to test data:", code: `// 1. FIXTURES - cypress/fixtures/users.json
{
  "validUser": {
    "email": "valid@test.com",
    "password": "ValidPass123"
  },
  "invalidUser": {
    "email": "invalid",
    "password": "short"
  }
}

// Using fixtures in tests
describe('Login', () => {
  beforeEach(function() {
    cy.fixture('users').as('users')
  })

  it('logs in with valid user', function() {
    cy.visit('/login')
    cy.get('[data-testid="email"]').type(this.users.validUser.email)
    cy.get('[data-testid="password"]').type(this.users.validUser.password)
    cy.get('[data-testid="submit"]').click()
  })
})

// 2. FACTORY - Generate unique data
function createUser(overrides = {}) {
  const timestamp = Date.now()
  return {
    email: \`user\${timestamp}@test.com\`,
    password: 'TestPass123!',
    name: \`Test User \${timestamp}\`,
    ...overrides
  }
}

// Usage
const user = createUser({ name: 'Custom Name' })

// 3. API SEEDING
beforeEach(() => {
  const user = createUser()
  cy.request('POST', '/api/users', user).as('createdUser')
})

it('uses API-created user', function() {
  cy.get('@createdUser').then((response) => {
    cy.visit(\`/users/\${response.body.id}\`)
  })
})` }
    ],
    23: [
      { type: 'explanation', title: "Eliminating Flaky Tests", content: `**Flaky Tests** pass sometimes and fail sometimes with no code changes. They destroy trust in automation.

**Common Causes:**
1. **Timing Issues** - Element not ready, animations in progress
2. **Network Delays** - API responses slower than expected
3. **Test Isolation** - Tests depend on other tests' state
4. **Shared Data** - Multiple tests modify same data
5. **External Dependencies** - Third-party services unavailable

**Solutions:**

**For Timing Issues:**
// BAD: Arbitrary wait
cy.wait(3000)

// GOOD: Wait for specific condition
cy.get('[data-testid="loading"]').should('not.exist')
cy.get('[data-testid="content"]').should('be.visible')

**For Network Delays:**
// GOOD: Wait for API response
cy.intercept('GET', '/api/data').as('getData')
cy.visit('/page')
cy.wait('@getData')

**For Test Isolation:**
// GOOD: Clean state in beforeEach
beforeEach(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
  cy.visit('/')
})` },
      { type: 'steps', title: "Debugging Flaky Tests", content: "Systematic approach to fix flaky tests:", steps: [
        { step: 1, action: "Reproduce the flake", details: "Run the test 10 times: npx cypress run --spec 'path/to/test' --headed. Note failure rate.", verification: "You can reproduce the failure." },
        { step: 2, action: "Check for timing issues", details: "Add cy.pause() before the failing line. Watch what happens on the page.", verification: "You identify if page isn't ready." },
        { step: 3, action: "Add proper waits", details: "Replace arbitrary waits with condition-based waits using .should().", verification: "Test waits for actual readiness." },
        { step: 4, action: "Check test isolation", details: "Run the failing test alone vs in the full suite. Different results = isolation issue.", verification: "Test passes when run alone." },
        { step: 5, action: "Add network intercepts", details: "Use cy.intercept() and cy.wait() for all API calls the test depends on.", verification: "Test waits for all necessary data." }
      ]}
    ],
    24: [
      { type: 'explanation', title: "Multi-Environment Configuration", content: `**Enterprise applications run in multiple environments:**
- Local (your machine)
- Development (dev server)
- QA (testing environment)
- Staging (pre-production)
- Production (live system)

**Configuration Strategy:**
1. Use cypress.config.ts for default settings
2. Use cypress.env.json for local overrides (don't commit!)
3. Use environment variables for CI/CD
4. Use --config or --env flags for runtime overrides

**Environment-Specific Settings:**
- Base URL
- API endpoints
- Credentials (via env vars, never hardcoded!)
- Timeouts
- Test data sources` },
      { type: 'code', title: "Environment Configuration", content: "Setting up multiple environments:", code: `// cypress.config.ts
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    env: {
      apiUrl: process.env.CYPRESS_API_URL || 'http://localhost:3000/api',
      environment: process.env.CYPRESS_ENV || 'local'
    }
  }
})

// cypress.env.json (local overrides - DON'T COMMIT)
{
  "apiUrl": "http://localhost:3000/api",
  "username": "local-test-user",
  "password": "local-test-pass"
}

// In your tests, access environment values:
describe('Multi-env test', () => {
  it('uses correct environment', () => {
    const apiUrl = Cypress.env('apiUrl')
    cy.log(\`Testing against: \${apiUrl}\`)
    
    cy.request(\`\${apiUrl}/health\`).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

// Running against different environments:
// Local: npx cypress run
// Dev: CYPRESS_BASE_URL=https://dev.example.com npx cypress run
// Staging: CYPRESS_BASE_URL=https://staging.example.com npx cypress run` }
    ],
    25: [
      { type: 'explanation', title: "What is CI/CD?", content: `**CI/CD** = Continuous Integration / Continuous Deployment

**How It Works for Testing:**
1. Developer pushes code to GitLab/GitHub
2. CI/CD system detects the change
3. System automatically runs your Cypress tests
4. Results are reported (pass/fail)
5. Bad code is blocked from merging

**Benefits:**
- Tests run on every code change
- Bugs caught before they reach production
- Consistent test environment
- Automatic reporting and notifications
- No manual test execution needed

**GitLab CI/CD:**
GitLab has built-in CI/CD. You configure it with a **.gitlab-ci.yml** file in your project root.` },
      { type: 'code', title: "Basic GitLab CI Configuration", content: "Create .gitlab-ci.yml in your project root:", code: `# .gitlab-ci.yml - Basic Cypress Pipeline

stages:
  - test

cypress_tests:
  stage: test
  image: cypress/browsers:node18.12.0-chrome107-ff107
  script:
    # Install dependencies
    - npm ci
    # Run Cypress tests
    - npx cypress run --browser chrome
  artifacts:
    when: always
    paths:
      - cypress/videos
      - cypress/screenshots
    expire_in: 1 week

# What this does:
# 1. Uses a Docker image with Node.js and browsers
# 2. Installs project dependencies (npm ci)
# 3. Runs Cypress in headless mode
# 4. Saves videos and screenshots as artifacts
# 5. Keeps artifacts for 1 week` }
    ],
    26: [
      { type: 'explanation', title: "Nightly Regression Testing", content: `**Nightly Regression** runs your full test suite every night to catch issues early.

**Why Nightly Runs?**
- Full suite too slow for every commit
- Catches integration issues
- Tests against deployed environments
- Detects environment-specific problems
- Creates regular quality checkpoints

**What to Include:**
- Full regression test suite
- Tests against ACC (Acceptance) environment
- Tests against PreProd environment
- Performance baseline tests
- Report generation and distribution` },
      { type: 'code', title: "Scheduled Pipeline", content: "GitLab scheduled pipeline configuration:", code: `# .gitlab-ci.yml with scheduled runs

stages:
  - test
  - report

# Regular tests on every push
quick_tests:
  stage: test
  script:
    - npm ci
    - npx cypress run --spec "cypress/e2e/smoke/**"
  only:
    - merge_requests
    - main

# Nightly full regression
nightly_regression:
  stage: test
  script:
    - npm ci
    - npx cypress run --browser chrome --record
  only:
    - schedules
  variables:
    CYPRESS_BASE_URL: "https://acc.example.com"
  artifacts:
    when: always
    paths:
      - cypress/videos
      - cypress/screenshots
      - mochawesome-report

# After test - send notifications
notify_results:
  stage: report
  script:
    - |
      if [ -f "cypress/results/results.json" ]; then
        curl -X POST $SLACK_WEBHOOK -d '{
          "text": "Nightly tests completed. Check pipeline for results."
        }'
      fi
  only:
    - schedules

# Set up schedule in GitLab:
# 1. Go to CI/CD → Schedules
# 2. Create new schedule
# 3. Set cron: 0 2 * * * (2 AM daily)
# 4. Select target branch: main` }
    ],
    27: [
      { type: 'explanation', title: "Parallel Execution", content: `**Parallel Execution** runs tests simultaneously across multiple machines, dramatically reducing total time.

**Without Parallelization:**
100 tests × 1 minute each = 100 minutes total

**With 10 Parallel Machines:**
100 tests ÷ 10 machines = 10 minutes total

**Strategies:**
1. **Cypress Dashboard** - Automatic load balancing (paid)
2. **GitLab Parallel Jobs** - Built-in parallelization
3. **Manual Sharding** - Split tests into groups yourself

**Test Sharding:**
Divide tests into groups (shards) and run each on separate machine.

Example: 100 tests split into 4 shards of 25 tests each.` },
      { type: 'code', title: "GitLab Parallel Configuration", content: "Parallel test execution in GitLab:", code: `# .gitlab-ci.yml with parallelization

cypress_parallel:
  stage: test
  image: cypress/browsers:node18.12.0-chrome107-ff107
  parallel: 4  # Run 4 parallel jobs
  script:
    - npm ci
    # Use GitLab's CI_NODE_INDEX to shard tests
    - |
      TOTAL_RUNNERS=4
      CURRENT_RUNNER=$((CI_NODE_INDEX))
      npx cypress run --record --parallel --group "parallel-$CI_NODE_INDEX"
  artifacts:
    when: always
    paths:
      - cypress/videos
      - cypress/screenshots

# Alternative: Manual sharding by folder
cypress_auth_tests:
  stage: test
  script:
    - npm ci
    - npx cypress run --spec "cypress/e2e/auth/**"

cypress_shopping_tests:
  stage: test
  script:
    - npm ci
    - npx cypress run --spec "cypress/e2e/shopping/**"

cypress_user_tests:
  stage: test
  script:
    - npm ci
    - npx cypress run --spec "cypress/e2e/user/**"

# All three jobs run in parallel!` }
    ],
    28: [
      { type: 'explanation', title: "Compliance & Audit Trails", content: `**Regulated Industries** (finance, healthcare, government) have legal requirements for testing.

**Key Compliance Concepts:**

1. **Audit Trail** - Record of who did what, when
2. **Evidence Collection** - Proof that tests were run
3. **Change Management** - Controlled process for changes
4. **Traceability** - Link tests to requirements

**What Auditors Want to See:**
- Test execution records with timestamps
- Screenshots/videos of test runs
- Who approved test results
- Link between requirements and tests
- Version control history

**Implementation:**
- Store all test artifacts
- Use test management tools (TestRail, Xray)
- Integrate with ticketing systems (Jira)
- Generate compliance reports` },
      { type: 'code', title: "Compliance Implementation", content: "Capturing audit information:", code: `// Add metadata to test reports
describe('Compliance Test Suite', () => {
  before(() => {
    // Log test environment info
    cy.log(\`Environment: \${Cypress.env('environment')}\`)
    cy.log(\`Test Run ID: \${Cypress.env('CI_JOB_ID') || 'local'}\`)
    cy.log(\`Runner: \${Cypress.env('CI_RUNNER_DESCRIPTION') || 'manual'}\`)
  })

  it('REQ-001: User can login', () => {
    // Requirement traceability in test name
    cy.visit('/login')
    cy.get('[data-testid="email"]').type('user@test.com')
    cy.get('[data-testid="password"]').type('password')
    cy.get('[data-testid="submit"]').click()
    cy.url().should('include', '/dashboard')
    
    // Take evidence screenshot
    cy.screenshot('REQ-001-login-success')
  })
})

// Mochawesome reporter for compliance reports
// cypress.config.ts
export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
})

// Generate timestamped reports with full evidence` }
    ],
    29: [
      { type: 'explanation', title: "Enterprise AI Governance", content: `**Scaling AI Usage** across teams requires governance frameworks.

**Governance Framework:**

1. **Policy Definition**
   - What AI tools are approved
   - What can/cannot be shared with AI
   - Review requirements for AI code

2. **Training Programs**
   - All team members trained on AI safety
   - Regular refresher training
   - Updates when policies change

3. **Review Workflows**
   - Code review checklist for AI code
   - Security review for sensitive areas
   - Compliance sign-off

4. **Measurement**
   - Track AI usage and impact
   - Monitor for policy violations
   - Measure productivity gains` },
      { type: 'steps', title: "Implementing AI Governance", content: "Steps to establish AI governance:", steps: [
        { step: 1, action: "Define approved AI tools", details: "List specific tools allowed: GitHub Copilot, ChatGPT, etc. Define version and configuration requirements.", verification: "Team knows which tools they can use." },
        { step: 2, action: "Create usage policy", details: "Document what can/cannot be shared with AI, review requirements, and consequences for violations.", verification: "Written policy exists and is distributed." },
        { step: 3, action: "Establish review process", details: "Add AI-specific items to code review checklist. Require human understanding of all AI code.", verification: "Code review template includes AI checks." },
        { step: 4, action: "Train the team", details: "Conduct training sessions on AI safety and policy. Test understanding.", verification: "All team members complete training." },
        { step: 5, action: "Monitor and measure", details: "Track AI usage, policy compliance, and productivity impact. Report monthly.", verification: "Metrics dashboard exists." }
      ]}
    ],
    30: [
      { type: 'explanation', title: "Capstone Project Overview", content: `**Your Capstone Project** brings together everything you've learned to build a complete enterprise Cypress framework.

**Project Requirements:**

1. **Project Structure**
   - Proper folder organization
   - TypeScript configuration
   - ESLint and Prettier setup

2. **Framework Components**
   - Page Object Model implementation
   - Custom commands library
   - Fixture and factory data management

3. **Test Coverage**
   - Authentication tests
   - Core user flow tests
   - API integration tests
   - Error handling tests

4. **CI/CD Integration**
   - GitLab/GitHub Actions pipeline
   - Parallel execution
   - Artifact collection
   - Notifications

5. **Documentation**
   - README with setup instructions
   - Test strategy document
   - Contribution guidelines` },
      { type: 'code', title: "Capstone Structure", content: "Recommended project structure:", code: `my-cypress-framework/
├── .github/
│   └── workflows/
│       └── cypress.yml       # GitHub Actions
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login.cy.ts
│   │   │   └── logout.cy.ts
│   │   ├── shopping/
│   │   │   ├── cart.cy.ts
│   │   │   └── checkout.cy.ts
│   │   └── smoke/
│   │       └── health.cy.ts
│   ├── fixtures/
│   │   ├── users.json
│   │   └── products.json
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   └── DashboardPage.ts
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── index.d.ts
│   └── factories/
│       ├── userFactory.ts
│       └── productFactory.ts
├── cypress.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── TESTING_STRATEGY.md

// This structure demonstrates:
// - Organized test files by feature
// - Reusable page objects
// - Type-safe custom commands
// - Data management with fixtures and factories
// - CI/CD ready configuration` }
    ]
  };

  return {
    title: `Beginner: ${title} Fundamentals`,
    duration: "25 minutes",
    content: beginnerContents[lessonNumber] || [
      { type: 'explanation', title: `Introduction to ${title}`, content: `This lesson covers the foundational concepts of ${title}.\n\n**What You Will Learn:**\n- Core concepts and terminology\n- Step-by-step implementation\n- Best practices and common patterns\n- Hands-on exercises` },
      { type: 'steps', title: "Getting Started", content: "Follow these steps to begin:", steps: [
        { step: 1, action: "Open your Cypress project", details: "Launch VS Code and open your my-first-cypress-project folder.", verification: "Project is open in VS Code." },
        { step: 2, action: "Open the terminal", details: "Press Ctrl+` to open the integrated terminal.", verification: "Terminal panel is visible." },
        { step: 3, action: "Ensure Cypress is ready", details: "Verify Cypress is installed with: npx cypress --version", verification: "Version number appears." }
      ]}
    ]
  };
}

function generateIntermediateContent(lessonNumber: number, title: string): LessonSection {
  const intermediateContents: Record<number, SectionContent[]> = {
    12: [
      { type: 'explanation', title: "Test Automation Strategy Framework", content: `**Building Your Automation Strategy:**

**The 4-Quadrant Model:**

| Quadrant | Characteristics | Automation Level |
|----------|----------------|------------------|
| Q1: High Value + Low Effort | Critical paths, stable UI | 100% automated |
| Q2: High Value + High Effort | Complex workflows | Selective automation |
| Q3: Low Value + Low Effort | Simple validations | Opportunistic |
| Q4: Low Value + High Effort | Rarely used features | Don't automate |

**Prioritization Matrix:**
1. **Start with smoke tests** - Core business flows
2. **Add regression tests** - Protect existing functionality  
3. **Build data-driven tests** - Maximize coverage from single tests
4. **Create edge case tests** - Harden critical paths

**Metrics to Track:**
- Test execution time
- Flakiness rate
- Code coverage
- Defect escape rate
- Maintenance cost per test` },
      { type: 'code', title: "ROI Calculator Implementation", content: "Calculate automation ROI programmatically:", code: `// Test Automation ROI Calculator
interface TestMetrics {
  testName: string;
  manualExecutionMinutes: number;
  executionsPerMonth: number;
  automationHours: number;
  maintenanceHoursPerMonth: number;
}

function calculateROI(test: TestMetrics, hourlyRate: number = 50): {
  monthlyManualCost: number;
  automationCost: number;
  monthlyMaintenanceCost: number;
  breakEvenMonths: number;
  yearlyROI: number;
} {
  const monthlyManualCost = (test.manualExecutionMinutes / 60) * 
    test.executionsPerMonth * hourlyRate;
  
  const automationCost = test.automationHours * hourlyRate;
  const monthlyMaintenanceCost = test.maintenanceHoursPerMonth * hourlyRate;
  
  const monthlySavings = monthlyManualCost - monthlyMaintenanceCost;
  const breakEvenMonths = automationCost / monthlySavings;
  
  const yearlyROI = ((monthlySavings * 12) - automationCost) / automationCost * 100;
  
  return {
    monthlyManualCost,
    automationCost,
    monthlyMaintenanceCost,
    breakEvenMonths: Math.ceil(breakEvenMonths),
    yearlyROI: Math.round(yearlyROI)
  };
}

// Example usage
const loginTest: TestMetrics = {
  testName: 'Login Flow',
  manualExecutionMinutes: 5,
  executionsPerMonth: 200,  // 10 times per day
  automationHours: 4,
  maintenanceHoursPerMonth: 0.5
};

const roi = calculateROI(loginTest);
console.log(\`Break-even: \${roi.breakEvenMonths} months\`);
console.log(\`Yearly ROI: \${roi.yearlyROI}%\`);
// Output: Break-even: 1 months, Yearly ROI: 1150%` },
      { type: 'steps', title: "Building a Test Inventory", content: "Document and prioritize your tests:", steps: [
        { step: 1, action: "List all manual tests", details: "Export from test management tool or create spreadsheet with all test cases.", verification: "Complete list of current manual tests." },
        { step: 2, action: "Categorize by business value", details: "Mark each as Critical (revenue impact), High (user experience), Medium (functionality), Low (edge cases).", verification: "Every test has a value category." },
        { step: 3, action: "Estimate automation effort", details: "Rate each: Quick (< 2 hours), Medium (2-8 hours), Complex (> 8 hours).", verification: "Effort estimate for all tests." },
        { step: 4, action: "Plot on 4-quadrant matrix", details: "Place tests on Value vs Effort matrix. Start automating Q1 (High Value, Low Effort).", verification: "Prioritized automation backlog exists." },
        { step: 5, action: "Calculate ROI for top candidates", details: "Use ROI formula for top 10 candidates. Present to stakeholders.", verification: "Business case for automation investment." }
      ]}
    ],
    17: [
      { type: 'explanation', title: "AI Code Review Checklist", content: `**Mandatory Review Steps for AI-Generated Code:**

**1. Security Review:**
□ No hardcoded credentials
□ No sensitive URLs exposed
□ No PII in test data
□ No internal API endpoints revealed
□ Environment variables used for secrets

**2. Correctness Review:**
□ Code does what you intended
□ Assertions verify actual requirements
□ Edge cases handled
□ Error handling is appropriate
□ No unnecessary complexity

**3. Maintainability Review:**
□ Clear naming conventions
□ Proper code organization
□ Follows team patterns
□ Adequately commented
□ Easy to modify later

**4. Performance Review:**
□ No unnecessary waits
□ Efficient selector strategies
□ No redundant API calls
□ Reasonable test scope

**Red Flags in AI Code:**
- Hardcoded values that should be variables
- Overly complex solutions
- Missing error handling
- Inconsistent with project patterns` },
      { type: 'code', title: "Safe AI Prompting Patterns", content: "Examples of safe vs unsafe prompts:", code: `// ❌ UNSAFE PROMPT - Contains sensitive info
// "Write a Cypress test to login to https://internal.company.com
// with username admin@company.com and password SuperSecret123"

// ✅ SAFE PROMPT - No sensitive details
// "Write a Cypress test to login using credentials from environment variables"

describe('Login - AI-Generated (Reviewed)', () => {
  // AI generated this structure, human added env variables
  it('should login with valid credentials', () => {
    cy.visit(Cypress.env('LOGIN_URL'))  // Not hardcoded
    
    cy.get('[data-testid="email"]')
      .type(Cypress.env('TEST_USER_EMAIL'))  // From env
    
    cy.get('[data-testid="password"]')
      .type(Cypress.env('TEST_USER_PASSWORD'), { log: false })  // Hidden from logs
    
    cy.get('[data-testid="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})

// ❌ UNSAFE - AI prompt included business logic
// "Test that users with subscription plan 'Enterprise' 
// can access /admin/financials showing revenue $4.2M"

// ✅ SAFE - Generic patterns
// "Test that users with admin role can access admin pages"

// cypress.env.json (git-ignored)
{
  "LOGIN_URL": "/login",
  "TEST_USER_EMAIL": "test@example.com",
  "TEST_USER_PASSWORD": "TestPassword123"
}

// cypress.config.ts
export default defineConfig({
  env: {
    LOGIN_URL: process.env.LOGIN_URL,
    TEST_USER_EMAIL: process.env.TEST_USER_EMAIL,
    TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD
  }
})` },
      { type: 'steps', title: "AI Code Review Workflow", content: "Process for reviewing AI-generated code:", steps: [
        { step: 1, action: "Generate code with clean prompt", details: "Write prompt without sensitive data. Be specific about what you want.", verification: "Prompt contains no secrets or internal details." },
        { step: 2, action: "Read every line before accepting", details: "Don't just Tab-accept. Read the code Copilot suggests line by line.", verification: "You can explain what every line does." },
        { step: 3, action: "Check for hardcoded values", details: "Search for strings that should be variables. Replace with env vars.", verification: "No sensitive values in code." },
        { step: 4, action: "Verify assertions match requirements", details: "Compare generated assertions to actual test requirements.", verification: "Test verifies what you actually need." },
        { step: 5, action: "Run and validate", details: "Execute the test. Verify it passes for right reasons, fails for wrong data.", verification: "Test works correctly and fails appropriately." },
        { step: 6, action: "Add review comment", details: "Add comment noting AI assistance for audit trail.", verification: "Code documents AI involvement." }
      ]}
    ],
    19: [
      { type: 'explanation', title: "Screenplay Pattern Deep Dive", content: `**Advanced Screenplay Concepts:**

**Task Composition:**
Tasks can be composed of smaller tasks, creating reusable workflows.

**Question Pattern:**
Questions verify system state without performing actions.

**Ability Pattern:**
Actors have abilities that determine what they can do.

**Benefits of Screenplay:**
1. **High abstraction** - Tests read like requirements
2. **Excellent reuse** - Tasks work across many tests
3. **Clear separation** - WHO does WHAT on WHICH element
4. **BDD alignment** - Natural fit for Given/When/Then

**When Screenplay Shines:**
- E-commerce checkout (multi-step)
- User onboarding flows
- Multi-role scenarios (admin, user, guest)
- Complex state machines` },
      { type: 'code', title: "Advanced Screenplay Implementation", content: "Full-featured Screenplay in Cypress:", code: `// ============ CORE INTERFACES ============
interface Task {
  performAs(actor: Actor): void;
  describedAs?: string;
}

interface Question<T> {
  answeredBy(actor: Actor): T;
}

interface Ability {
  can(action: string): boolean;
}

// ============ ACTOR CLASS ============
class Actor {
  private abilities: Map<string, Ability> = new Map();
  
  constructor(public readonly name: string) {}
  
  static named(name: string): Actor {
    return new Actor(name);
  }
  
  whoCan(...abilities: [string, Ability][]): Actor {
    abilities.forEach(([name, ability]) => {
      this.abilities.set(name, ability);
    });
    return this;
  }
  
  attemptsTo(...tasks: Task[]): void {
    tasks.forEach(task => {
      cy.log(\`\${this.name} \${task.describedAs || 'performs task'}\`);
      task.performAs(this);
    });
  }
  
  asks<T>(question: Question<T>): Cypress.Chainable<T> {
    return cy.wrap(question.answeredBy(this));
  }
}

// ============ TASK IMPLEMENTATIONS ============
const Navigate = {
  to: (url: string): Task => ({
    describedAs: \`navigates to \${url}\`,
    performAs: () => cy.visit(url)
  })
};

const Enter = {
  theValue: (value: string) => ({
    into: (selector: string): Task => ({
      describedAs: \`enters "\${value}" into \${selector}\`,
      performAs: () => cy.get(selector).clear().type(value)
    })
  })
};

const Click = {
  on: (selector: string): Task => ({
    describedAs: \`clicks on \${selector}\`,
    performAs: () => cy.get(selector).click()
  })
};

// ============ COMPOUND TASKS ============
const Login = {
  withCredentials: (email: string, password: string): Task => ({
    describedAs: \`logs in as \${email}\`,
    performAs: (actor) => {
      actor.attemptsTo(
        Navigate.to('/login'),
        Enter.theValue(email).into('[data-testid="email"]'),
        Enter.theValue(password).into('[data-testid="password"]'),
        Click.on('[data-testid="submit"]')
      );
    }
  })
};

// ============ QUESTIONS ============
const CurrentUrl: Question<string> = {
  answeredBy: () => {
    let url = '';
    cy.url().then(u => url = u);
    return url;
  }
};

const TextOf = {
  element: (selector: string): Question<string> => ({
    answeredBy: () => {
      let text = '';
      cy.get(selector).invoke('text').then(t => text = t);
      return text;
    }
  })
};

// ============ TEST USAGE ============
describe('Screenplay Pattern Tests', () => {
  const alice = Actor.named('Alice');
  const bob = Actor.named('Bob');
  
  it('Alice can login as regular user', () => {
    alice.attemptsTo(
      Login.withCredentials('alice@test.com', 'password123')
    );
    cy.url().should('include', '/dashboard');
  });
  
  it('Bob can login as admin', () => {
    bob.attemptsTo(
      Login.withCredentials('bob@admin.com', 'adminpass')
    );
    cy.url().should('include', '/admin');
  });
});` }
    ],
    20: [
      { type: 'explanation', title: "Hybrid Architecture Design", content: `**Layered Hybrid Architecture:**

\`\`\`
┌─────────────────────────────────────────┐
│           TEST SPECS (tests)            │
│  describe/it blocks, test scenarios     │
├─────────────────────────────────────────┤
│           ACTORS (who)                  │
│  User personas, role-based contexts     │
├─────────────────────────────────────────┤
│           TASKS (what)                  │
│  Business actions, user journeys        │
├─────────────────────────────────────────┤
│        PAGE OBJECTS (where)             │
│  Selectors, element interactions        │
├─────────────────────────────────────────┤
│     CUSTOM COMMANDS (utilities)         │
│  Shared helpers, API shortcuts          │
└─────────────────────────────────────────┘
\`\`\`

**Folder Structure:**
cypress/
├── e2e/                 # Test specs
├── actors/              # Actor definitions
├── tasks/               # Task implementations
├── pages/               # Page objects
├── support/
│   ├── commands.ts      # Custom commands
│   └── e2e.ts
└── fixtures/            # Test data

**Design Principles:**
1. Each layer only knows the layer below it
2. Tests should read like business requirements
3. Changes propagate upward (change selector → page object only)
4. New tests reuse existing tasks` },
      { type: 'code', title: "Complete Hybrid Framework", content: "Production hybrid architecture:", code: `// ========== cypress/pages/BasePage.ts ==========
export abstract class BasePage {
  abstract readonly url: string;
  
  visit(): this {
    cy.visit(this.url);
    return this;
  }
  
  protected get(selector: string) {
    return cy.get(selector);
  }
}

// ========== cypress/pages/LoginPage.ts ==========
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly url = '/login';
  
  private selectors = {
    email: '[data-testid="email"]',
    password: '[data-testid="password"]',
    submit: '[data-testid="submit"]',
    error: '[data-testid="error-message"]'
  };
  
  typeEmail(email: string): this {
    this.get(this.selectors.email).clear().type(email);
    return this;
  }
  
  typePassword(password: string): this {
    this.get(this.selectors.password).clear().type(password);
    return this;
  }
  
  clickSubmit(): this {
    this.get(this.selectors.submit).click();
    return this;
  }
  
  getErrorMessage() {
    return this.get(this.selectors.error);
  }
}

// ========== cypress/tasks/loginTasks.ts ==========
import { LoginPage } from '../pages/LoginPage';

export const LoginTask = {
  asUser: (email: string, password: string) => {
    const page = new LoginPage();
    page.visit()
        .typeEmail(email)
        .typePassword(password)
        .clickSubmit();
  },
  
  withInvalidCredentials: () => {
    LoginTask.asUser('invalid@test.com', 'wrongpassword');
  },
  
  asAdmin: () => {
    LoginTask.asUser(
      Cypress.env('ADMIN_EMAIL'),
      Cypress.env('ADMIN_PASSWORD')
    );
  }
};

// ========== cypress/actors/actors.ts ==========
import { LoginTask } from '../tasks/loginTasks';

export class Actor {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role: 'user' | 'admin'
  ) {}
  
  login() {
    cy.log(\`\${this.name} logs in\`);
    LoginTask.asUser(this.email, this.password);
    return this;
  }
}

export const Actors = {
  regularUser: new Actor('Alice', 'alice@test.com', 'pass123', 'user'),
  adminUser: new Actor('Bob', 'bob@admin.com', 'admin123', 'admin'),
  newUser: new Actor('Charlie', 'charlie@test.com', 'newpass', 'user')
};

// ========== cypress/e2e/login.cy.ts ==========
import { Actors } from '../actors/actors';
import { LoginPage } from '../pages/LoginPage';

describe('Login Functionality', () => {
  it('regular user can access dashboard', () => {
    Actors.regularUser.login();
    cy.url().should('include', '/dashboard');
  });
  
  it('admin user can access admin panel', () => {
    Actors.adminUser.login();
    cy.url().should('include', '/admin');
  });
  
  it('shows error for invalid credentials', () => {
    const loginPage = new LoginPage();
    loginPage.visit()
             .typeEmail('wrong@email.com')
             .typePassword('wrongpass')
             .clickSubmit();
    
    loginPage.getErrorMessage()
             .should('be.visible')
             .and('contain', 'Invalid credentials');
  });
});` }
    ],
    21: [
      { type: 'explanation', title: "Advanced Data Management Patterns", content: `**Factory Pattern for Dynamic Data:**

Factories generate unique data on demand, preventing test interference.

**Benefits:**
- No data collisions in parallel tests
- Fresh data for each test run
- Consistent data structure
- Easy to create variations

**Data Isolation Strategies:**
1. **Prefix/Suffix** - Add timestamp or UUID to data
2. **Cleanup hooks** - Delete test data after each test
3. **Transactions** - Rollback database after test
4. **Namespacing** - Isolate data per test file

**API-First Data Setup:**
- Faster than UI setup
- More reliable
- Can create complex relationships
- Enables parallel test execution` },
      { type: 'code', title: "Factory Pattern Implementation", content: "Complete data factory setup:", code: `// ========== cypress/factories/userFactory.ts ==========
import { faker } from '@faker-js/faker';

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
}

interface UserOverrides extends Partial<User> {}

export const UserFactory = {
  build: (overrides: UserOverrides = {}): User => ({
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    role: 'user',
    ...overrides
  }),
  
  buildAdmin: (overrides: UserOverrides = {}): User => 
    UserFactory.build({ role: 'admin', ...overrides }),
  
  buildMany: (count: number, overrides: UserOverrides = {}): User[] =>
    Array.from({ length: count }, () => UserFactory.build(overrides)),
  
  // Create via API and return with ID
  create: (overrides: UserOverrides = {}): Cypress.Chainable<User & { id: string }> => {
    const user = UserFactory.build(overrides);
    return cy.request('POST', '/api/users', user)
      .then(response => ({ ...user, id: response.body.id }));
  }
};

// ========== cypress/factories/productFactory.ts ==========
interface Product {
  name: string;
  price: number;
  sku: string;
  category: string;
}

export const ProductFactory = {
  build: (overrides: Partial<Product> = {}): Product => ({
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
    sku: faker.string.alphanumeric(10).toUpperCase(),
    category: faker.commerce.department(),
    ...overrides
  }),
  
  create: (overrides: Partial<Product> = {}): Cypress.Chainable<Product & { id: string }> => {
    const product = ProductFactory.build(overrides);
    return cy.request({
      method: 'POST',
      url: '/api/products',
      body: product,
      headers: { Authorization: \`Bearer \${Cypress.env('API_TOKEN')}\` }
    }).then(response => ({ ...product, id: response.body.id }));
  }
};

// ========== Usage in Tests ==========
describe('Product Management', () => {
  let testUser: User & { id: string };
  let testProduct: Product & { id: string };
  
  beforeEach(() => {
    // Create fresh data for each test
    UserFactory.create({ role: 'admin' }).then(user => {
      testUser = user;
    });
    
    ProductFactory.create().then(product => {
      testProduct = product;
    });
  });
  
  afterEach(() => {
    // Cleanup test data
    if (testProduct?.id) {
      cy.request('DELETE', \`/api/products/\${testProduct.id}\`);
    }
    if (testUser?.id) {
      cy.request('DELETE', \`/api/users/\${testUser.id}\`);
    }
  });
  
  it('admin can update product price', () => {
    cy.login(testUser.email, testUser.password);
    cy.visit(\`/products/\${testProduct.id}/edit\`);
    
    const newPrice = 99.99;
    cy.get('[data-testid="price"]').clear().type(newPrice.toString());
    cy.get('[data-testid="save"]').click();
    
    cy.get('[data-testid="price-display"]')
      .should('contain', '$99.99');
  });
});` }
    ],
    23: [
      { type: 'explanation', title: "Root Causes of Flaky Tests", content: `**Why Tests Become Flaky:**

**1. Timing Issues (Most Common)**
- Element not loaded yet
- Animation in progress
- API response pending
- Page transition incomplete

**2. Test Data Dependencies**
- Shared state between tests
- External data changes
- Database not reset
- Cached data interference

**3. Environment Factors**
- Network latency variations
- Server response times
- Resource contention
- Browser rendering differences

**4. Test Design Problems**
- Brittle selectors
- Order-dependent tests
- Missing assertions
- Async operations mishandled

**Flakiness Metrics:**
- **Flake Rate** = (Inconsistent Runs / Total Runs) × 100
- Target: < 1% flake rate
- Action Threshold: > 5% needs immediate fix` },
      { type: 'code', title: "Anti-Flaky Patterns", content: "Techniques to eliminate flakiness:", code: `// ❌ FLAKY: Fixed wait time
cy.wait(5000);  // Arbitrary wait, might be too short or too long
cy.get('[data-testid="result"]').should('be.visible');

// ✅ STABLE: Wait for specific condition
cy.get('[data-testid="result"]', { timeout: 10000 })
  .should('be.visible');

// ❌ FLAKY: Checking element that might not exist
cy.get('.loading-spinner').should('not.exist');

// ✅ STABLE: Wait for loading to complete
cy.get('[data-testid="content"]').should('be.visible');
// Or use intercept to wait for API
cy.intercept('GET', '/api/data').as('getData');
cy.visit('/page');
cy.wait('@getData');
cy.get('[data-testid="content"]').should('be.visible');

// ❌ FLAKY: Animation not complete
cy.get('[data-testid="modal"]').click();  // Modal still animating

// ✅ STABLE: Wait for animation
cy.get('[data-testid="modal"]')
  .should('be.visible')
  .and('not.have.class', 'animating')
  .click();

// ❌ FLAKY: Race condition with multiple elements
cy.get('.list-item').first().click();  // List might not be fully loaded

// ✅ STABLE: Verify list is complete
cy.get('.list-item').should('have.length.greaterThan', 0);
cy.get('.list-item').first().click();

// ============ RETRY CONFIGURATION ============
// cypress.config.ts
export default defineConfig({
  retries: {
    runMode: 2,      // CI retries
    openMode: 0      // Local retries (keep at 0 for debugging)
  },
  defaultCommandTimeout: 10000,  // Increase for slow apps
  pageLoadTimeout: 30000
});

// ============ CUSTOM RETRY COMMAND ============
Cypress.Commands.add('getWithRetry', (
  selector: string, 
  options: { maxRetries?: number; delay?: number } = {}
) => {
  const { maxRetries = 3, delay = 1000 } = options;
  let attempts = 0;
  
  const attempt = (): Cypress.Chainable => {
    attempts++;
    return cy.get('body').then($body => {
      if ($body.find(selector).length > 0) {
        return cy.get(selector);
      }
      if (attempts < maxRetries) {
        cy.wait(delay);
        return attempt();
      }
      throw new Error(\`Element \${selector} not found after \${maxRetries} attempts\`);
    });
  };
  
  return attempt();
});

// ============ NETWORK STABILITY ============
// Wait for all pending requests to complete
Cypress.Commands.add('waitForNetworkIdle', (timeout = 5000) => {
  cy.window().then(win => {
    return new Cypress.Promise(resolve => {
      let lastActivity = Date.now();
      
      const checkIdle = () => {
        if (Date.now() - lastActivity > timeout) {
          resolve();
        } else {
          setTimeout(checkIdle, 100);
        }
      };
      
      checkIdle();
    });
  });
});` },
      { type: 'steps', title: "Flaky Test Diagnosis", content: "Steps to identify and fix flaky tests:", steps: [
        { step: 1, action: "Identify the flaky test", details: "Track which tests fail intermittently. Use CI reports to find patterns.", verification: "You have a list of flaky tests with failure rates." },
        { step: 2, action: "Reproduce locally", details: "Run the test 10+ times: npx cypress run --spec path/to/test.cy.ts --repeat 10", verification: "You can reproduce the failure locally." },
        { step: 3, action: "Add debugging", details: "Add cy.pause() and cy.screenshot() at key points. Check what state differs between passes and failures.", verification: "You see what's different when test fails." },
        { step: 4, action: "Check for timing issues", details: "Look for cy.wait() with fixed times, missing should() assertions, elements that might still be loading.", verification: "Timing issues identified." },
        { step: 5, action: "Add proper waits", details: "Replace fixed waits with assertion-based waits. Use cy.intercept() to wait for APIs.", verification: "Test uses proper waiting strategies." },
        { step: 6, action: "Verify fix", details: "Run test 20+ times to confirm stability. Monitor in CI for a week.", verification: "Test passes consistently." }
      ]}
    ],
    24: [
      { type: 'explanation', title: "Multi-Environment Architecture", content: `**Environment Configuration Strategy:**

**Common Environments:**
- **Local (localhost)** - Developer machines
- **Dev** - Latest code, unstable
- **QA/Test** - Stable for testing
- **Staging/ACC** - Production mirror
- **Production** - Live system (read-only tests)

**Configuration Hierarchy:**
1. cypress.config.ts (defaults)
2. cypress.env.json (local overrides, git-ignored)
3. Environment variables (CI/CD)
4. Command line (highest priority)

**What Varies Per Environment:**
- Base URL
- API endpoints
- Test credentials
- Feature flags
- Timeouts
- Test data` },
      { type: 'code', title: "Multi-Environment Setup", content: "Complete environment configuration:", code: `// ========== cypress.config.ts ==========
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Default to local
    baseUrl: 'http://localhost:3000',
    
    // Environment-specific settings via env
    env: {
      // Common settings
      apiVersion: 'v1',
      
      // Default credentials (overridden per env)
      testUserEmail: 'test@example.com',
      testUserPassword: 'defaultPassword'
    },
    
    setupNodeEvents(on, config) {
      // Load environment-specific config
      const environment = config.env.environment || 'local';
      const envConfig = require(\`./cypress/config/\${environment}.json\`);
      
      // Merge configs
      config.baseUrl = envConfig.baseUrl || config.baseUrl;
      config.env = { ...config.env, ...envConfig.env };
      
      return config;
    }
  }
});

// ========== cypress/config/local.json ==========
{
  "baseUrl": "http://localhost:3000",
  "env": {
    "apiUrl": "http://localhost:3001/api",
    "testUserEmail": "local@test.com",
    "testUserPassword": "localpass"
  }
}

// ========== cypress/config/staging.json ==========
{
  "baseUrl": "https://staging.example.com",
  "env": {
    "apiUrl": "https://staging-api.example.com/api",
    "testUserEmail": "staging@test.com",
    "testUserPassword": "stagingpass"
  }
}

// ========== cypress/config/production.json ==========
{
  "baseUrl": "https://www.example.com",
  "env": {
    "apiUrl": "https://api.example.com/api",
    "testUserEmail": "readonly@test.com",
    "testUserPassword": "prodreadonly",
    "isProduction": true
  }
}

// ========== Running tests ==========
// Local (default)
// npx cypress run

// Staging
// npx cypress run --env environment=staging

// Production (smoke tests only)
// npx cypress run --env environment=production --spec "cypress/e2e/smoke/**"

// ========== Environment-aware tests ==========
describe('Feature Tests', () => {
  before(() => {
    // Skip destructive tests in production
    if (Cypress.env('isProduction')) {
      cy.log('Running in production - read-only tests only');
    }
  });
  
  it('can view products', () => {
    // Safe for all environments
    cy.visit('/products');
    cy.get('[data-testid="product-list"]').should('be.visible');
  });
  
  it('can create product', function() {
    // Skip in production
    if (Cypress.env('isProduction')) {
      this.skip();
    }
    
    cy.login(
      Cypress.env('testUserEmail'),
      Cypress.env('testUserPassword')
    );
    cy.visit('/products/new');
    // ... create product
  });
});

// ========== CI/CD Environment Variables ==========
// GitHub Actions / GitLab CI set these:
// CYPRESS_baseUrl=https://staging.example.com
// CYPRESS_testUserEmail=ci@test.com
// CYPRESS_testUserPassword=\$\{{ secrets.TEST_PASSWORD }}` }
    ],
    26: [
      { type: 'explanation', title: "Nightly Regression Strategy", content: `**Why Nightly Regression?**

**Full regression is too slow for every commit:**
- Might take hours to run
- Blocks developer workflow
- Not all tests need to run every time

**Nightly Strategy:**
- Run full suite once per day (usually 2 AM)
- Against stable environment (ACC/PreProd)
- Comprehensive coverage
- Results reviewed in morning

**What to Include in Nightly:**
- All regression tests
- Cross-browser testing
- Performance measurements
- Accessibility scans
- Visual regression
- Long-running scenarios

**Notification Strategy:**
- Slack/Teams alert on failure
- Email summary to team
- Dashboard for historical trends
- Automatic ticket creation for failures` },
      { type: 'code', title: "Nightly Pipeline Configuration", content: "Complete GitLab nightly setup:", code: `# .gitlab-ci.yml - Nightly Regression Pipeline

stages:
  - prepare
  - test
  - report
  - notify

variables:
  CYPRESS_BASE_URL: "https://acc.example.com"
  TEST_ENVIRONMENT: "acceptance"

# Only run on schedule (nightly) or manual trigger
workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == "schedule"
    - if: $CI_PIPELINE_SOURCE == "web"  # Manual trigger

# ========== PREPARE STAGE ==========
setup:
  stage: prepare
  script:
    - npm ci
    - npx cypress verify
  artifacts:
    paths:
      - node_modules/
    expire_in: 1 day

# ========== TEST STAGE ==========
regression_chrome:
  stage: test
  needs: [setup]
  parallel: 4
  script:
    - npx cypress run --browser chrome --record --parallel 
      --group "nightly-chrome" 
      --ci-build-id "$CI_PIPELINE_ID"
  artifacts:
    when: always
    paths:
      - cypress/videos/
      - cypress/screenshots/
      - cypress/results/
    reports:
      junit: cypress/results/junit-*.xml
    expire_in: 7 days

regression_firefox:
  stage: test
  needs: [setup]
  script:
    - npx cypress run --browser firefox --record 
      --group "nightly-firefox"
      --ci-build-id "$CI_PIPELINE_ID"
  artifacts:
    when: always
    paths:
      - cypress/videos/
      - cypress/screenshots/
    expire_in: 7 days

regression_edge:
  stage: test
  needs: [setup]
  script:
    - npx cypress run --browser edge --record 
      --group "nightly-edge"
      --ci-build-id "$CI_PIPELINE_ID"
  artifacts:
    when: always
    paths:
      - cypress/videos/
      - cypress/screenshots/
    expire_in: 7 days

# ========== REPORT STAGE ==========
generate_report:
  stage: report
  needs: [regression_chrome, regression_firefox, regression_edge]
  script:
    - npm run merge-reports
    - npm run generate-html-report
  artifacts:
    paths:
      - mochawesome-report/
    expire_in: 30 days
  when: always

# ========== NOTIFY STAGE ==========
slack_notification:
  stage: notify
  needs: [generate_report]
  script:
    - |
      if [ "$CI_JOB_STATUS" == "failed" ]; then
        STATUS_EMOJI=":x:"
        STATUS_TEXT="FAILED"
        COLOR="danger"
      else
        STATUS_EMOJI=":white_check_mark:"
        STATUS_TEXT="PASSED"
        COLOR="good"
      fi
      
      curl -X POST $SLACK_WEBHOOK_URL \\
        -H "Content-Type: application/json" \\
        -d '{
          "attachments": [{
            "color": "'$COLOR'",
            "title": "'$STATUS_EMOJI' Nightly Regression '$STATUS_TEXT'",
            "fields": [
              {"title": "Environment", "value": "'$TEST_ENVIRONMENT'", "short": true},
              {"title": "Pipeline", "value": "<'$CI_PIPELINE_URL'|View Pipeline>", "short": true}
            ],
            "footer": "GitLab CI",
            "ts": '$(date +%s)'
          }]
        }'
  when: always` }
    ],
    27: [
      { type: 'explanation', title: "Parallel Execution Strategies", content: `**Parallelization Methods:**

**1. CI-Level Parallelization:**
- Multiple jobs run simultaneously
- Each job runs subset of tests
- Built into CI/CD platforms

**2. Cypress Dashboard Parallelization:**
- Automatic load balancing
- Spec-level distribution
- Requires Cypress Dashboard subscription

**3. Manual Sharding:**
- Split tests into groups
- Assign groups to runners
- More control, more setup

**Sharding Strategies:**

**By Folder:**
- cypress/e2e/auth/ → Runner 1
- cypress/e2e/products/ → Runner 2
- cypress/e2e/checkout/ → Runner 3

**By Tag:**
- @smoke tests → Runner 1
- @regression tests → Runner 2-4

**By Duration:**
- Balance test time across runners
- Fastest total execution

**Optimal Parallel Count:**
- Start with 4-8 runners
- Measure total time vs cost
- Find sweet spot for your suite` },
      { type: 'code', title: "Sharding Implementation", content: "Multiple parallelization approaches:", code: `// ========== MANUAL SHARDING BY INDEX ==========
// package.json scripts
{
  "scripts": {
    "cy:shard:1": "cypress run --env shard=1,totalShards=4",
    "cy:shard:2": "cypress run --env shard=2,totalShards=4",
    "cy:shard:3": "cypress run --env shard=3,totalShards=4",
    "cy:shard:4": "cypress run --env shard=4,totalShards=4"
  }
}

// cypress/plugins/index.ts - Shard spec files
module.exports = (on, config) => {
  const shard = config.env.shard;
  const totalShards = config.env.totalShards;
  
  if (shard && totalShards) {
    const allSpecs = config.specPattern;
    const glob = require('glob');
    const specs = glob.sync(allSpecs);
    
    // Distribute specs across shards
    const shardSpecs = specs.filter((_, index) => 
      index % totalShards === (shard - 1)
    );
    
    config.specPattern = shardSpecs;
  }
  
  return config;
};

// ========== GITHUB ACTIONS MATRIX ==========
# .github/workflows/cypress.yml
name: Parallel Cypress Tests

on: [push, pull_request]

jobs:
  cypress:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        # Run 4 parallel jobs
        containers: [1, 2, 3, 4]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Cypress Run
        uses: cypress-io/github-action@v5
        with:
          record: true
          parallel: true
          group: 'PR Tests'
          ci-build-id: '\${{ github.run_id }}'
        env:
          CYPRESS_RECORD_KEY: \${{ secrets.CYPRESS_RECORD_KEY }}

// ========== GITLAB CI PARALLEL ==========
# .gitlab-ci.yml
cypress_tests:
  stage: test
  parallel: 4  # GitLab creates 4 jobs automatically
  script:
    - npm ci
    # CI_NODE_INDEX is 1-4, CI_NODE_TOTAL is 4
    - |
      SPECS=$(find cypress/e2e -name "*.cy.ts" | sort | 
        awk "NR % $CI_NODE_TOTAL == ($CI_NODE_INDEX - 1)")
      npx cypress run --spec "$SPECS"

// ========== BALANCED SHARDING BY DURATION ==========
// cypress/support/sharding.ts
interface SpecDuration {
  spec: string;
  duration: number;
}

// Historical durations (update from CI reports)
const specDurations: SpecDuration[] = [
  { spec: 'cypress/e2e/auth/login.cy.ts', duration: 45000 },
  { spec: 'cypress/e2e/auth/logout.cy.ts', duration: 15000 },
  { spec: 'cypress/e2e/checkout/cart.cy.ts', duration: 120000 },
  { spec: 'cypress/e2e/checkout/payment.cy.ts', duration: 180000 },
  // ... more specs
];

function balanceShards(totalShards: number): string[][] {
  // Sort by duration descending
  const sorted = [...specDurations].sort((a, b) => b.duration - a.duration);
  
  // Greedy assignment to balance total time
  const shards: { specs: string[]; totalTime: number }[] = 
    Array.from({ length: totalShards }, () => ({ specs: [], totalTime: 0 }));
  
  sorted.forEach(spec => {
    // Add to shard with least total time
    const minShard = shards.reduce((min, shard) => 
      shard.totalTime < min.totalTime ? shard : min
    );
    minShard.specs.push(spec.spec);
    minShard.totalTime += spec.duration;
  });
  
  return shards.map(s => s.specs);
}

// Output balanced shards
console.log(balanceShards(4));` }
    ],
    28: [
      { type: 'explanation', title: "Compliance Testing Requirements", content: `**Regulatory Compliance in Testing:**

**Industries with Testing Requirements:**
- **Finance** (SOX, PCI-DSS) - Audit trails, change management
- **Healthcare** (HIPAA, FDA) - Data protection, validation
- **Government** (FedRAMP) - Security controls, documentation
- **Automotive** (ISO 26262) - Safety-critical testing

**Key Compliance Elements:**

**1. Traceability Matrix:**
Requirement → Test Case → Execution → Result
Every requirement must map to tests.

**2. Evidence Collection:**
- Screenshots of test execution
- Video recordings
- Timestamped logs
- Environment snapshots

**3. Change Control:**
- Version-controlled test code
- Reviewed and approved changes
- Audit history of modifications

**4. Documentation:**
- Test plans and strategies
- Risk assessments
- Execution reports
- Defect tracking` },
      { type: 'code', title: "Compliance Framework Implementation", content: "Building compliance into your tests:", code: `// ========== REQUIREMENT TRACEABILITY ==========
// cypress/e2e/compliance/payment.cy.ts

/**
 * Test Suite: Payment Processing
 * Requirements: REQ-PAY-001 through REQ-PAY-010
 * Risk Level: High (Financial data)
 * Last Review: 2024-01-15
 * Reviewer: John Smith
 */
describe('Payment Processing [REQ-PAY]', () => {
  /**
   * REQ-PAY-001: Credit card payments must be processed through PCI-compliant gateway
   * Test Evidence: Screenshot of successful payment + API response
   */
  it('REQ-PAY-001: processes credit card via PCI gateway', () => {
    // Test setup
    cy.intercept('POST', '/api/payments').as('payment');
    
    // Test execution
    cy.visit('/checkout');
    cy.get('[data-testid="card-number"]').type('4111111111111111');
    cy.get('[data-testid="expiry"]').type('12/25');
    cy.get('[data-testid="cvv"]').type('123');
    cy.get('[data-testid="pay-button"]').click();
    
    // Verification
    cy.wait('@payment').then(interception => {
      // Log evidence
      cy.log(\`Payment API Response: \${interception.response.statusCode}\`);
      expect(interception.response.body.gateway).to.equal('pci-compliant-gateway');
    });
    
    // Capture evidence
    cy.screenshot('REQ-PAY-001-payment-success');
    cy.get('[data-testid="confirmation"]')
      .should('contain', 'Payment Successful')
      .screenshot('REQ-PAY-001-confirmation');
  });
  
  /**
   * REQ-PAY-002: Failed payments must not store card details
   * Test Evidence: Verify no card data in error response
   */
  it('REQ-PAY-002: failed payment does not expose card data', () => {
    cy.intercept('POST', '/api/payments', {
      statusCode: 400,
      body: { error: 'Payment declined' }
    }).as('failedPayment');
    
    cy.visit('/checkout');
    cy.get('[data-testid="card-number"]').type('4000000000000002'); // Decline card
    cy.get('[data-testid="expiry"]').type('12/25');
    cy.get('[data-testid="cvv"]').type('123');
    cy.get('[data-testid="pay-button"]').click();
    
    cy.wait('@failedPayment').then(interception => {
      // Verify no card data in response
      const responseBody = JSON.stringify(interception.response.body);
      expect(responseBody).not.to.contain('4000000000000002');
      expect(responseBody).not.to.contain('123');
      
      cy.log('COMPLIANCE CHECK: No card data in error response');
    });
    
    cy.screenshot('REQ-PAY-002-failed-payment-no-data-leak');
  });
});

// ========== AUDIT TRAIL REPORTER ==========
// cypress/support/auditReporter.ts
interface AuditEntry {
  timestamp: string;
  testId: string;
  requirementId: string;
  result: 'pass' | 'fail' | 'skip';
  evidence: string[];
  executor: string;
  environment: string;
}

Cypress.Commands.add('logAudit', (requirementId: string, details: string) => {
  const entry: AuditEntry = {
    timestamp: new Date().toISOString(),
    testId: Cypress.currentTest.titlePath.join(' > '),
    requirementId,
    result: 'pass', // Updated by reporter
    evidence: [],
    executor: Cypress.env('CI_USER') || 'local',
    environment: Cypress.env('TEST_ENVIRONMENT') || 'local'
  };
  
  cy.task('writeAuditLog', entry);
});

// ========== COMPLIANCE REPORT GENERATOR ==========
// cypress/plugins/complianceReport.ts
const generateComplianceReport = (results: AuditEntry[]) => {
  return {
    reportDate: new Date().toISOString(),
    totalRequirements: new Set(results.map(r => r.requirementId)).size,
    totalTests: results.length,
    passed: results.filter(r => r.result === 'pass').length,
    failed: results.filter(r => r.result === 'fail').length,
    coverage: results.reduce((acc, r) => {
      acc[r.requirementId] = acc[r.requirementId] || [];
      acc[r.requirementId].push(r);
      return acc;
    }, {} as Record<string, AuditEntry[]>)
  };
};` }
    ],
    29: [
      { type: 'explanation', title: "Enterprise AI Governance Framework", content: `**Scaling AI Safely Across Teams:**

**Governance Pillars:**

**1. Policy & Standards**
- Approved AI tools list
- Usage guidelines
- Data classification rules
- Review requirements

**2. Training & Certification**
- Mandatory AI safety training
- Tool-specific training
- Regular refreshers
- Competency verification

**3. Monitoring & Audit**
- Usage tracking
- Compliance verification
- Incident reporting
- Regular audits

**4. Risk Management**
- Risk assessment framework
- Mitigation strategies
- Incident response plan
- Continuous improvement

**AI Code Review Checklist:**
□ No credentials or secrets
□ No internal URLs exposed
□ No PII or sensitive data
□ Code reviewed by human
□ Matches requirements
□ Follows team patterns
□ Properly tested` },
      { type: 'code', title: "AI Governance Implementation", content: "Tools and processes for AI governance:", code: `// ========== AI USAGE POLICY CHECKER ==========
// scripts/ai-policy-check.ts

interface PolicyViolation {
  file: string;
  line: number;
  type: 'credential' | 'pii' | 'internal_url' | 'sensitive_data';
  match: string;
}

const sensitivePatterns = [
  { pattern: /password\s*[:=]\s*['"][^'"]+['"]/gi, type: 'credential' },
  { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, type: 'credential' },
  { pattern: /internal\\.company\\.com/gi, type: 'internal_url' },
  { pattern: /\\b[A-Za-z0-9._%+-]+@company\\.com\\b/gi, type: 'pii' },
  { pattern: /ssn|social.security/gi, type: 'sensitive_data' }
];

function checkFile(content: string, filename: string): PolicyViolation[] {
  const violations: PolicyViolation[] = [];
  const lines = content.split('\\n');
  
  lines.forEach((line, index) => {
    sensitivePatterns.forEach(({ pattern, type }) => {
      const matches = line.match(pattern);
      if (matches) {
        violations.push({
          file: filename,
          line: index + 1,
          type: type as PolicyViolation['type'],
          match: matches[0]
        });
      }
    });
  });
  
  return violations;
}

// ========== AI CODE ANNOTATION ==========
// Add to all AI-generated code files

/**
 * @ai-generated
 * @ai-tool GitHub Copilot
 * @generated-date 2024-01-15
 * @reviewed-by john.smith@company.com
 * @review-date 2024-01-16
 * @policy-check PASSED
 */
describe('User Registration', () => {
  // AI-assisted implementation, human reviewed
  it('should register new user', () => {
    cy.visit('/register');
    // ... test code
  });
});

// ========== PRE-COMMIT HOOK ==========
// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running AI policy check..."
npx ts-node scripts/ai-policy-check.ts

if [ $? -ne 0 ]; then
  echo "AI Policy Violation Detected!"
  echo "Please review and remove sensitive information."
  exit 1
fi

echo "AI policy check passed."

// ========== AI USAGE TRACKING ==========
// Track AI tool usage for compliance reporting

interface AIUsageMetric {
  date: string;
  developer: string;
  tool: string;
  action: 'generate' | 'accept' | 'reject' | 'modify';
  linesGenerated: number;
  linesModified: number;
  reviewStatus: 'pending' | 'approved' | 'rejected';
}

// VS Code extension could track this automatically
// Report aggregates for compliance audits

const monthlyReport = {
  totalAIGenerated: 1500,
  totalAccepted: 1200,
  totalModified: 250,
  totalRejected: 50,
  averageModificationRate: '20%',
  topUsers: [
    { name: 'Alice', generated: 400, accepted: 350 },
    { name: 'Bob', generated: 350, accepted: 300 }
  ],
  policyViolations: 2,
  violationsResolved: 2
};

// ========== TEAM TRAINING CHECKLIST ==========
const aiTrainingChecklist = {
  modules: [
    { name: 'AI Safety Fundamentals', required: true, duration: '30 min' },
    { name: 'Prompt Engineering for Testing', required: true, duration: '45 min' },
    { name: 'Code Review for AI Output', required: true, duration: '30 min' },
    { name: 'Credential Protection', required: true, duration: '20 min' },
    { name: 'Compliance Requirements', required: true, duration: '30 min' },
    { name: 'Advanced Prompting', required: false, duration: '60 min' }
  ],
  certification: {
    passingScore: 80,
    validityPeriod: '12 months',
    renewalRequired: true
  }
};` }
    ],
    30: [
      { type: 'explanation', title: "Capstone Project Requirements", content: `**Your Enterprise Framework Deliverables:**

**1. Project Structure (10%)**
□ Proper folder organization
□ TypeScript configuration
□ ESLint and Prettier
□ README with setup instructions

**2. Page Objects (20%)**
□ Base page class
□ At least 5 page objects
□ Proper encapsulation
□ Fluent interface methods

**3. Custom Commands (15%)**
□ Login command (UI and API)
□ Data-testid helper
□ At least 3 domain commands
□ TypeScript declarations

**4. Test Suites (25%)**
□ Authentication tests (login/logout)
□ Core user journey tests
□ API integration tests
□ Data-driven tests

**5. CI/CD Pipeline (20%)**
□ GitHub Actions or GitLab CI
□ Parallel execution
□ Artifact collection
□ Notifications

**6. Documentation (10%)**
□ Test strategy document
□ Contribution guidelines
□ Environment setup guide` },
      { type: 'code', title: "Capstone Starter Template", content: "Complete project structure to build from:", code: `// ========== PROJECT STRUCTURE ==========
/*
my-enterprise-cypress/
├── .github/
│   └── workflows/
│       ├── ci.yml              # PR checks
│       └── nightly.yml         # Full regression
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   │   ├── login.cy.ts
│   │   │   └── logout.cy.ts
│   │   ├── products/
│   │   │   ├── list.cy.ts
│   │   │   └── crud.cy.ts
│   │   └── checkout/
│   │       ├── cart.cy.ts
│   │       └── payment.cy.ts
│   ├── fixtures/
│   │   ├── users.json
│   │   └── products.json
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── DashboardPage.ts
│   │   └── ProductsPage.ts
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── index.d.ts
│   └── factories/
│       └── userFactory.ts
├── cypress.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── docs/
    ├── TEST_STRATEGY.md
    └── CONTRIBUTING.md
*/

// ========== cypress/pages/BasePage.ts ==========
export abstract class BasePage {
  abstract readonly url: string;
  abstract readonly pageIdentifier: string;
  
  visit(): this {
    cy.visit(this.url);
    this.verifyPage();
    return this;
  }
  
  verifyPage(): this {
    cy.get(this.pageIdentifier).should('be.visible');
    return this;
  }
  
  protected getByTestId(testId: string) {
    return cy.get(\`[data-testid="\${testId}"]\`);
  }
}

// ========== cypress/support/commands.ts ==========
import './index.d.ts';

Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(\`[data-testid="\${testId}"]\`);
});

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.getByTestId('email').type(email);
    cy.getByTestId('password').type(password);
    cy.getByTestId('submit').click();
    cy.url().should('include', '/dashboard');
  });
});

Cypress.Commands.add('loginViaApi', (email: string, password: string) => {
  cy.request('POST', '/api/auth/login', { email, password })
    .then(response => {
      window.localStorage.setItem('token', response.body.token);
    });
});

// ========== cypress/support/index.d.ts ==========
declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    login(email: string, password: string): Chainable<void>;
    loginViaApi(email: string, password: string): Chainable<void>;
  }
}

// ========== .github/workflows/ci.yml ==========
name: CI Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  cypress:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        containers: [1, 2, 3]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
          record: true
          parallel: true
          group: 'CI Tests'
        env:
          CYPRESS_RECORD_KEY: \${{ secrets.CYPRESS_RECORD_KEY }}
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
      
      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: cypress-artifacts
          path: |
            cypress/videos
            cypress/screenshots` }
    ]
  };
  
  return {
    title: `Intermediate: ${title} in Practice`,
    duration: "20 minutes",
    content: intermediateContents[lessonNumber] || [
      { type: 'explanation', title: "Building on the Fundamentals", content: `Now let's apply ${title} concepts in real-world scenarios.\n\n**In This Section:**\n- Write production-quality code\n- Handle edge cases\n- Follow industry best practices\n- Build maintainable solutions` },
      { type: 'code', title: "Implementation Example", content: "Production-ready implementation:", code: `describe('${title} - Practical Example', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('demonstrates the concept', () => {
    // Your implementation following best practices
    cy.get('[data-testid="example"]')
      .should('be.visible')
      .click()
    
    cy.url().should('include', '/result')
  })
})` }
    ]
  };
}

function generateAdvancedContent(lessonNumber: number, title: string): LessonSection {
  const advancedContents: Record<number, SectionContent[]> = {
    12: [
      { type: 'explanation', title: "Enterprise Automation Governance", content: `**Scaling Automation Across Teams:**

**Center of Excellence (CoE) Model:**
- Central team defines standards and patterns
- Provides shared libraries and frameworks
- Conducts training and mentoring
- Reviews and approves automation projects

**Federated Model:**
- Each team owns their automation
- Central team provides guidelines
- Shared tools but independent execution
- Regular sync meetings for alignment

**Metrics Dashboard:**
- Test execution trends
- Coverage by feature/team
- Flakiness tracking
- ROI by automation project
- Technical debt indicators

**Continuous Improvement:**
- Monthly automation retrospectives
- Quarterly strategy reviews
- Annual maturity assessments` },
      { type: 'warning', title: "Automation Anti-Patterns", content: `**Avoid These Common Mistakes:**

1. **Automating Everything**
   - Not all tests should be automated
   - Manual exploratory testing remains valuable

2. **Ignoring Maintenance**
   - Factor 20-30% time for maintenance
   - Flaky tests erode trust

3. **Testing Through UI Only**
   - Use API tests where possible
   - UI tests for critical paths only

4. **No Test Strategy**
   - Automation without strategy wastes effort
   - Align with business priorities

5. **Lack of Ownership**
   - Every test needs an owner
   - Review and update regularly` }
    ],
    17: [
      { type: 'explanation', title: "AI Risk Assessment Matrix", content: `**Enterprise AI Risk Categories:**

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Credential Leak | Medium | Critical | Never include in prompts |
| Incorrect Code | High | Medium | Mandatory code review |
| IP Exposure | Low | High | Sanitize business logic |
| Compliance Gap | Medium | High | Audit trail + training |
| Over-reliance | High | Medium | Human review gates |

**Risk-Based Controls:**

**High Risk (Financial, Healthcare, Government)**
- All AI code requires senior review
- No AI for security-critical functions
- Quarterly compliance audits

**Medium Risk (General Enterprise)**
- Peer code review required
- Team leads spot-check weekly
- Annual training refresh

**Low Risk (Internal Tools, Prototypes)**
- Standard code review
- Self-assessment checklists` },
      { type: 'code', title: "AI Audit Configuration", content: "Implementing audit trails for AI usage:", code: `// ========== AI AUDIT LOGGER ==========
// Integrate with your test framework

interface AIAuditEvent {
  timestamp: string;
  developer: string;
  action: 'prompt' | 'accept' | 'modify' | 'reject';
  tool: 'copilot' | 'chatgpt' | 'other';
  codeContext: string;
  reviewStatus?: 'pending' | 'approved' | 'rejected';
  reviewer?: string;
}

class AIAuditLogger {
  private events: AIAuditEvent[] = [];
  
  logEvent(event: Omit<AIAuditEvent, 'timestamp'>) {
    this.events.push({
      ...event,
      timestamp: new Date().toISOString()
    });
  }
  
  generateReport(): string {
    const summary = {
      totalEvents: this.events.length,
      acceptanceRate: this.calculateAcceptanceRate(),
      modificationRate: this.calculateModificationRate(),
      pendingReviews: this.events.filter(e => e.reviewStatus === 'pending').length,
      byDeveloper: this.groupByDeveloper()
    };
    
    return JSON.stringify(summary, null, 2);
  }
  
  private calculateAcceptanceRate(): number {
    const accepted = this.events.filter(e => e.action === 'accept').length;
    const total = this.events.filter(e => 
      ['accept', 'reject'].includes(e.action)
    ).length;
    return total > 0 ? (accepted / total) * 100 : 0;
  }
  
  private calculateModificationRate(): number {
    const modified = this.events.filter(e => e.action === 'modify').length;
    const accepted = this.events.filter(e => 
      ['accept', 'modify'].includes(e.action)
    ).length;
    return accepted > 0 ? (modified / accepted) * 100 : 0;
  }
  
  private groupByDeveloper(): Record<string, number> {
    return this.events.reduce((acc, event) => {
      acc[event.developer] = (acc[event.developer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }
}

// Usage in CI pipeline
const auditLogger = new AIAuditLogger();

// Log when code is reviewed
auditLogger.logEvent({
  developer: process.env.GIT_AUTHOR_NAME || 'unknown',
  action: 'accept',
  tool: 'copilot',
  codeContext: 'cypress/e2e/login.cy.ts',
  reviewStatus: 'approved',
  reviewer: 'senior.dev@company.com'
});` }
    ],
    19: [
      { type: 'explanation', title: "Screenplay vs POM Decision Guide", content: `**When to Choose Each Pattern:**

**Choose Page Object Model When:**
- Team is new to automation
- Application has simple page-based flows
- Quick implementation needed
- Most tests follow CRUD patterns
- Maintenance budget is limited

**Choose Screenplay Pattern When:**
- Complex multi-step workflows
- Multiple user personas/roles
- BDD/Gherkin integration needed
- Large team with varied skill levels
- Tests should read like requirements
- Long-term maintainability is priority

**Hybrid Approach Benefits:**
- POMs handle selectors (most change)
- Tasks handle business logic (stable)
- Actors enable multi-user scenarios
- Best of both worlds

**Migration Path:**
POM → Hybrid → Full Screenplay
Add layers incrementally as complexity grows.` },
      { type: 'code', title: "Advanced Actor Abilities", content: "Screenplay with abilities pattern:", code: `// ========== ABILITIES PATTERN ==========
// Actors have abilities that determine what they can do

interface Ability {
  name: string;
}

class BrowseTheWeb implements Ability {
  name = 'BrowseTheWeb';
  
  navigateTo(url: string) {
    cy.visit(url);
  }
  
  find(selector: string) {
    return cy.get(selector);
  }
}

class CallAPIs implements Ability {
  name = 'CallAPIs';
  private token?: string;
  
  setToken(token: string) {
    this.token = token;
  }
  
  get(endpoint: string) {
    return cy.request({
      method: 'GET',
      url: endpoint,
      headers: this.token ? { Authorization: \`Bearer \${this.token}\` } : {}
    });
  }
  
  post(endpoint: string, body: object) {
    return cy.request({
      method: 'POST',
      url: endpoint,
      body,
      headers: this.token ? { Authorization: \`Bearer \${this.token}\` } : {}
    });
  }
}

// Actor with abilities
class Actor {
  private abilities: Map<string, Ability> = new Map();
  
  constructor(public name: string) {}
  
  static named(name: string) {
    return new Actor(name);
  }
  
  whoCan<T extends Ability>(ability: T): this {
    this.abilities.set(ability.name, ability);
    return this;
  }
  
  abilityTo<T extends Ability>(abilityType: new () => T): T {
    const ability = Array.from(this.abilities.values())
      .find(a => a instanceof abilityType);
    if (!ability) {
      throw new Error(\`Actor does not have ability: \${abilityType.name}\`);
    }
    return ability as T;
  }
}

// Usage
describe('Actor with Abilities', () => {
  const alice = Actor.named('Alice')
    .whoCan(new BrowseTheWeb())
    .whoCan(new CallAPIs());
  
  it('Alice can browse and call APIs', () => {
    // Use web ability
    alice.abilityTo(BrowseTheWeb).navigateTo('/home');
    alice.abilityTo(BrowseTheWeb).find('[data-testid="title"]')
      .should('contain', 'Welcome');
    
    // Use API ability
    alice.abilityTo(CallAPIs).get('/api/user').then(response => {
      expect(response.status).to.equal(200);
    });
  });
});` }
    ],
    20: [
      { type: 'explanation', title: "Enterprise Hybrid Architecture", content: `**Production Hybrid Framework:**

**Layer Responsibilities:**

**1. Commands Layer (Foundation)**
- Generic utilities: getByTestId, waitForApi
- No business logic
- Used by all layers above

**2. Pages Layer (Selectors)**  
- Element selectors
- Low-level interactions
- One page object per page/component
- No assertions

**3. Tasks Layer (Actions)**
- Business actions: "Login", "Add to cart"
- Composes page methods
- May include assertions
- Reusable across tests

**4. Actors Layer (Context)**
- User personas
- Role-based permissions
- Test data associations

**5. Specs Layer (Tests)**
- describe/it blocks
- High-level scenarios
- Minimal code, maximum readability

**Benefits:**
- Changes isolated to appropriate layer
- Easy onboarding for new team members
- Scales to large test suites
- Supports multiple applications` },
      { type: 'code', title: "Complete Enterprise Example", content: "Full hybrid framework in action:", code: `// ========== E2E Test Using Full Stack ==========
// cypress/e2e/checkout/complete-purchase.cy.ts

import { Actors } from '../../actors';
import { AddToCartTask, CheckoutTask, VerifyOrderTask } from '../../tasks';

describe('Complete Purchase Flow', () => {
  describe('as a registered user', () => {
    const customer = Actors.registeredCustomer;
    
    beforeEach(() => {
      customer.login();
    });
    
    it('can complete purchase with credit card', () => {
      customer.performs(
        AddToCartTask.forProduct('SKU-12345', { quantity: 2 })
      );
      
      customer.performs(
        CheckoutTask.withPayment({
          method: 'credit_card',
          card: '4111111111111111',
          expiry: '12/25',
          cvv: '123'
        })
      );
      
      customer.performs(
        VerifyOrderTask.isConfirmed({
          productSku: 'SKU-12345',
          quantity: 2
        })
      );
    });
  });
  
  describe('as a guest user', () => {
    const guest = Actors.guestUser;
    
    it('can complete purchase with PayPal', () => {
      guest.performs(
        AddToCartTask.forProduct('SKU-67890', { quantity: 1 })
      );
      
      guest.performs(
        CheckoutTask.asGuest({
          email: guest.email,
          payment: { method: 'paypal' }
        })
      );
      
      guest.performs(
        VerifyOrderTask.isConfirmed({
          productSku: 'SKU-67890',
          quantity: 1
        })
      );
    });
  });
});

// Test reads like a business requirement:
// "A registered customer can complete a purchase with credit card"
// "A guest user can complete a purchase with PayPal"

// All complexity is hidden in Tasks and Pages` }
    ],
    21: [
      { type: 'explanation', title: "Enterprise Data Strategies", content: `**Data Management at Scale:**

**1. Test Data Service**
- Centralized data generation
- API for creating/cleaning data
- Supports parallel execution
- Tracks data lifecycle

**2. Data Pools**
- Pre-created test accounts
- Allocated per test run
- Released after completion
- Prevents collisions

**3. Synthetic Data Generation**
- Realistic but fake data
- GDPR/privacy compliant
- Consistent format
- Unlimited supply

**4. Data Versioning**
- Fixtures in version control
- Changes tracked with tests
- Rollback capability
- Environment-specific data

**Clean Data Principles:**
- Each test creates its own data
- Tests don't depend on shared state
- Data cleaned after each test
- Isolation enables parallelization` },
      { type: 'code', title: "Enterprise Data Service", content: "Centralized test data management:", code: `// ========== TEST DATA SERVICE ==========
// A service that manages test data lifecycle

interface TestData {
  id: string;
  type: string;
  data: Record<string, unknown>;
  createdAt: string;
  testId?: string;
}

class TestDataService {
  private apiUrl = Cypress.env('DATA_SERVICE_URL') || '/api/test-data';
  private createdData: TestData[] = [];
  
  // Create data via API
  create<T extends Record<string, unknown>>(
    type: string, 
    data: T
  ): Cypress.Chainable<T & { id: string }> {
    return cy.request('POST', \`\${this.apiUrl}/\${type}\`, data)
      .then(response => {
        const created = response.body;
        this.createdData.push({
          id: created.id,
          type,
          data: created,
          createdAt: new Date().toISOString(),
          testId: Cypress.currentTest?.title
        });
        return created;
      });
  }
  
  // Cleanup all data created in this test
  cleanup(): Cypress.Chainable<void> {
    const deletePromises = this.createdData.map(item =>
      cy.request({
        method: 'DELETE',
        url: \`\${this.apiUrl}/\${item.type}/\${item.id}\`,
        failOnStatusCode: false
      })
    );
    
    this.createdData = [];
    return cy.wrap(Promise.all(deletePromises)).then(() => {});
  }
  
  // Get from data pool (pre-created accounts)
  fromPool(poolName: string): Cypress.Chainable<TestData> {
    return cy.request('POST', \`\${this.apiUrl}/pool/\${poolName}/acquire\`)
      .then(response => response.body);
  }
  
  // Release back to pool
  releaseToPool(poolName: string, id: string): Cypress.Chainable<void> {
    return cy.request('POST', \`\${this.apiUrl}/pool/\${poolName}/release/\${id}\`)
      .then(() => {});
  }
}

// Singleton instance
export const testData = new TestDataService();

// ========== USAGE IN TESTS ==========
describe('User Profile', () => {
  let testUser: { id: string; email: string };
  
  beforeEach(() => {
    // Create fresh user for this test
    testData.create('users', {
      email: \`test-\${Date.now()}@example.com\`,
      name: 'Test User'
    }).then(user => {
      testUser = user;
    });
  });
  
  afterEach(() => {
    // Clean up all created data
    testData.cleanup();
  });
  
  it('can update profile name', () => {
    cy.loginViaApi(testUser.email, 'defaultPassword');
    cy.visit('/profile');
    cy.getByTestId('name-input').clear().type('New Name');
    cy.getByTestId('save').click();
    cy.getByTestId('name-display').should('contain', 'New Name');
  });
});

// ========== DATA POOL PATTERN ==========
describe('Checkout (using data pool)', () => {
  let premiumAccount: TestData;
  
  before(() => {
    // Acquire account from pool (faster than creating)
    testData.fromPool('premium-accounts').then(account => {
      premiumAccount = account;
    });
  });
  
  after(() => {
    // Release back to pool for reuse
    if (premiumAccount) {
      testData.releaseToPool('premium-accounts', premiumAccount.id);
    }
  });
  
  it('premium user gets free shipping', () => {
    cy.loginViaApi(premiumAccount.data.email, premiumAccount.data.password);
    // ... test code
  });
});` }
    ],
    23: [
      { type: 'explanation', title: "Flaky Test Detection System", content: `**Building a Flakiness Detection Pipeline:**

**Detection Methods:**
1. **Re-run Analysis** - Run each test multiple times
2. **Historical Tracking** - Compare results over time
3. **Environment Comparison** - Run across different envs
4. **Time-based Analysis** - Check if specific times fail more

**Quarantine Strategy:**
- Identify flaky tests (> 5% failure rate)
- Move to quarantine suite
- Don't block deployments
- Track in separate dashboard
- Prioritize fixes

**Root Cause Categories:**
| Category | % of Flakes | Common Fix |
|----------|-------------|------------|
| Timing | 45% | Proper waits |
| Data | 25% | Isolation |
| Environment | 15% | Stabilize |
| Test Bug | 10% | Fix test |
| App Bug | 5% | Fix app |

**Prevention Practices:**
- Never use fixed waits
- Always verify preconditions
- Use unique test data
- Reset state before tests
- Review all intermittent failures` },
      { type: 'code', title: "Flakiness Detection Implementation", content: "Tools to detect and manage flaky tests:", code: `// ========== FLAKY TEST REPORTER ==========
// Track test results over time

interface TestResult {
  testId: string;
  testName: string;
  passed: boolean;
  duration: number;
  timestamp: string;
  runId: string;
  error?: string;
}

interface FlakinessReport {
  testId: string;
  testName: string;
  totalRuns: number;
  passes: number;
  failures: number;
  flakeRate: number;
  isFlaky: boolean;
  lastFailure?: string;
  failurePatterns: string[];
}

class FlakinessTracker {
  private results: TestResult[] = [];
  private flakeThreshold = 0.05; // 5%
  
  record(result: TestResult) {
    this.results.push(result);
  }
  
  analyze(): FlakinessReport[] {
    const grouped = this.groupByTest();
    
    return Object.entries(grouped).map(([testId, results]) => {
      const failures = results.filter(r => !r.passed);
      const flakeRate = failures.length / results.length;
      
      return {
        testId,
        testName: results[0].testName,
        totalRuns: results.length,
        passes: results.filter(r => r.passed).length,
        failures: failures.length,
        flakeRate,
        isFlaky: flakeRate > this.flakeThreshold && flakeRate < 1,
        lastFailure: failures.length > 0 ? 
          failures[failures.length - 1].error : undefined,
        failurePatterns: this.extractPatterns(failures)
      };
    }).filter(r => r.isFlaky);
  }
  
  private groupByTest(): Record<string, TestResult[]> {
    return this.results.reduce((acc, result) => {
      acc[result.testId] = acc[result.testId] || [];
      acc[result.testId].push(result);
      return acc;
    }, {} as Record<string, TestResult[]>);
  }
  
  private extractPatterns(failures: TestResult[]): string[] {
    const errors = failures.map(f => f.error || '').filter(Boolean);
    const patterns = new Set<string>();
    
    errors.forEach(error => {
      if (error.includes('timeout')) patterns.add('TIMEOUT');
      if (error.includes('not found')) patterns.add('ELEMENT_NOT_FOUND');
      if (error.includes('assertion')) patterns.add('ASSERTION_FAILED');
      if (error.includes('network')) patterns.add('NETWORK_ERROR');
    });
    
    return Array.from(patterns);
  }
}

// ========== QUARANTINE SYSTEM ==========
// cypress.config.ts

const quarantinedTests = [
  'cypress/e2e/checkout/payment.cy.ts',
  'cypress/e2e/auth/oauth.cy.ts'
];

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Exclude quarantined tests from main run
      if (config.env.excludeQuarantine) {
        const glob = require('glob');
        const allSpecs = glob.sync(config.specPattern);
        config.specPattern = allSpecs.filter(
          spec => !quarantinedTests.some(q => spec.includes(q))
        );
      }
      
      // Run only quarantined tests
      if (config.env.quarantineOnly) {
        config.specPattern = quarantinedTests;
      }
      
      return config;
    }
  }
});

// Run commands:
// Regular tests (excluding quarantine):
// npx cypress run --env excludeQuarantine=true

// Quarantine tests (non-blocking):
// npx cypress run --env quarantineOnly=true || true

// ========== STABILITY COMMAND ==========
Cypress.Commands.add('stableGet', (
  selector: string,
  options: { timeout?: number; stable?: number } = {}
) => {
  const { timeout = 10000, stable = 500 } = options;
  
  // Wait for element to be stable (not changing) for 'stable' ms
  cy.get(selector, { timeout }).should($el => {
    // Element exists
    expect($el).to.exist;
  }).then($el => {
    // Wait for stability
    const initialHtml = $el.html();
    cy.wait(stable);
    cy.get(selector).should($newEl => {
      expect($newEl.html()).to.equal(initialHtml);
    });
  });
  
  return cy.get(selector);
});` }
    ],
    24: [
      { type: 'explanation', title: "Secrets Management", content: `**Enterprise Secrets Handling:**

**Never Store Secrets In:**
- Source code
- Git history
- cypress.env.json (if committed)
- Test files
- Log output

**Secure Secret Sources:**
- CI/CD secret variables
- Vault systems (HashiCorp, AWS Secrets Manager)
- Environment variables
- Encrypted config files

**Secrets Hierarchy:**
1. CI/CD variables (highest priority)
2. Environment variables
3. cypress.env.json (local only, git-ignored)
4. cypress.config.ts (defaults only)

**Access Pattern:**
Test code → Cypress.env() → CI/CD variable → Vault

**Audit Requirements:**
- Track who accessed secrets
- Rotate credentials regularly
- Use service accounts
- Minimum necessary permissions` },
      { type: 'code', title: "Secure Configuration", content: "Enterprise secrets management:", code: `// ========== SECURE CONFIG SETUP ==========
// cypress.config.ts

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Load secrets from environment variables (set by CI/CD)
      config.env.testUserEmail = process.env.TEST_USER_EMAIL;
      config.env.testUserPassword = process.env.TEST_USER_PASSWORD;
      config.env.apiKey = process.env.API_KEY;
      
      // Validate required secrets exist
      const required = ['testUserEmail', 'testUserPassword'];
      const missing = required.filter(key => !config.env[key]);
      
      if (missing.length > 0 && !process.env.CI) {
        console.warn(\`Missing env vars: \${missing.join(', ')}\`);
        console.warn('Using cypress.env.json for local development');
      }
      
      return config;
    }
  }
});

// ========== LOCAL DEVELOPMENT ==========
// cypress.env.json (git-ignored!)
{
  "testUserEmail": "local@test.com",
  "testUserPassword": "localDevPassword",
  "apiKey": "local-dev-key"
}

// .gitignore
cypress.env.json

// ========== CI/CD CONFIGURATION ==========
# GitHub Actions
env:
  TEST_USER_EMAIL: \${{ secrets.TEST_USER_EMAIL }}
  TEST_USER_PASSWORD: \${{ secrets.TEST_USER_PASSWORD }}
  API_KEY: \${{ secrets.API_KEY }}

# GitLab CI - set in CI/CD Settings > Variables
# Mark as "Protected" and "Masked"

// ========== SECURE USAGE IN TESTS ==========
describe('Secure Test Example', () => {
  it('logs in securely', () => {
    const email = Cypress.env('testUserEmail');
    const password = Cypress.env('testUserPassword');
    
    // Verify secrets exist
    expect(email, 'testUserEmail should be set').to.exist;
    expect(password, 'testUserPassword should be set').to.exist;
    
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(email);
    
    // Hide password from logs
    cy.get('[data-testid="password"]').type(password, { log: false });
    
    cy.get('[data-testid="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

// ========== VAULT INTEGRATION ==========
// For enterprise: fetch secrets from vault at runtime

interface VaultSecret {
  key: string;
  value: string;
  version: number;
}

async function fetchFromVault(secretPath: string): Promise<VaultSecret> {
  const vaultUrl = process.env.VAULT_URL;
  const vaultToken = process.env.VAULT_TOKEN;
  
  const response = await fetch(\`\${vaultUrl}/v1/\${secretPath}\`, {
    headers: { 'X-Vault-Token': vaultToken }
  });
  
  return response.json();
}

// In setupNodeEvents:
on('task', {
  async getSecret(path: string) {
    const secret = await fetchFromVault(path);
    return secret.value;
  }
});

// In test:
cy.task('getSecret', 'secret/data/test-credentials').then(creds => {
  // Use credentials
});` }
    ],
    26: [
      { type: 'explanation', title: "Nightly Test Strategy", content: `**What Belongs in Nightly Runs:**

**Include:**
- Full regression suite
- Cross-browser matrix
- Performance measurements
- Visual regression
- Accessibility audits
- Security scans
- Data integrity checks
- Long-running scenarios

**Exclude:**
- Smoke tests (run on every commit)
- Tests still in development
- Known flaky tests (quarantine)

**Scheduling Considerations:**
- Run during off-peak hours
- Allow enough time to complete
- Leave buffer for retries
- Consider time zones for global teams

**Environment Requirements:**
- Stable test environment
- Refreshed test data
- No other deployments during run
- Monitoring enabled` },
      { type: 'code', title: "Complete Nightly Pipeline", content: "Full-featured nightly regression:", code: `# .github/workflows/nightly.yml

name: Nightly Regression Suite

on:
  schedule:
    # Run at 2 AM UTC every day
    - cron: '0 2 * * *'
  workflow_dispatch:
    # Allow manual trigger
    inputs:
      environment:
        description: 'Target environment'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - acceptance

env:
  TEST_ENVIRONMENT: \${{ github.event.inputs.environment || 'staging' }}

jobs:
  # ========== SETUP ==========
  setup:
    runs-on: ubuntu-latest
    outputs:
      base-url: \${{ steps.config.outputs.base-url }}
    steps:
      - uses: actions/checkout@v3
      
      - id: config
        run: |
          if [ "\${{ env.TEST_ENVIRONMENT }}" == "staging" ]; then
            echo "base-url=https://staging.example.com" >> $GITHUB_OUTPUT
          else
            echo "base-url=https://acc.example.com" >> $GITHUB_OUTPUT
          fi

  # ========== CROSS-BROWSER TESTS ==========
  browser-matrix:
    needs: setup
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        browser: [chrome, firefox, edge]
        containers: [1, 2, 3, 4]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Cypress \${{ matrix.browser }}
        uses: cypress-io/github-action@v5
        with:
          browser: \${{ matrix.browser }}
          record: true
          parallel: true
          group: 'nightly-\${{ matrix.browser }}'
          ci-build-id: \${{ github.run_id }}
        env:
          CYPRESS_baseUrl: \${{ needs.setup.outputs.base-url }}
          CYPRESS_RECORD_KEY: \${{ secrets.CYPRESS_RECORD_KEY }}
          
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: \${{ matrix.browser }}-artifacts
          path: |
            cypress/videos
            cypress/screenshots

  # ========== VISUAL REGRESSION ==========
  visual-tests:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Visual Regression
        uses: cypress-io/github-action@v5
        with:
          spec: cypress/e2e/visual/**
          browser: chrome
        env:
          CYPRESS_baseUrl: \${{ needs.setup.outputs.base-url }}
          PERCY_TOKEN: \${{ secrets.PERCY_TOKEN }}

  # ========== ACCESSIBILITY ==========
  accessibility:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Accessibility Scan
        uses: cypress-io/github-action@v5
        with:
          spec: cypress/e2e/accessibility/**
        env:
          CYPRESS_baseUrl: \${{ needs.setup.outputs.base-url }}

  # ========== NOTIFICATION ==========
  notify:
    needs: [browser-matrix, visual-tests, accessibility]
    if: always()
    runs-on: ubuntu-latest
    steps:
      - name: Slack Notification
        uses: 8398a7/action-slack@v3
        with:
          status: \${{ job.status }}
          fields: repo,workflow,job,took
          text: |
            Nightly Regression Results
            Environment: \${{ env.TEST_ENVIRONMENT }}
            Status: \${{ needs.browser-matrix.result }}
        env:
          SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
          
      - name: Create Issue on Failure
        if: failure()
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Nightly Regression Failed - ' + new Date().toISOString().split('T')[0],
              body: 'Nightly regression suite failed. Check workflow run: ' + context.serverUrl + '/' + context.repo.owner + '/' + context.repo.repo + '/actions/runs/' + context.runId,
              labels: ['bug', 'nightly-failure', 'priority:high']
            })` }
    ],
    27: [
      { type: 'explanation', title: "Advanced Parallelization", content: `**Optimization Techniques:**

**1. Load Balancing:**
- Track historical test durations
- Distribute evenly by time, not count
- Rebalance after test changes

**2. Fail-Fast Mode:**
- Stop all runners on first failure
- Saves CI minutes
- Use for PR checks

**3. Selective Runs:**
- Only run affected tests
- Based on changed files
- Requires test→code mapping

**4. Speculative Execution:**
- Run likely-to-fail tests first
- Based on historical data
- Faster feedback for failures

**Cost Optimization:**
- More runners = faster but costly
- Find optimal runner count
- Measure total time × cost
- Consider spot instances` },
      { type: 'code', title: "Advanced Parallel Strategies", content: "Sophisticated parallelization:", code: `// ========== SMART TEST DISTRIBUTION ==========
// Distribute tests based on historical duration

interface TestDuration {
  specPath: string;
  avgDuration: number;
  lastRun: string;
}

// Load historical data (from previous runs)
async function loadTestDurations(): Promise<TestDuration[]> {
  // In practice, load from database or artifact
  return [
    { specPath: 'cypress/e2e/checkout/payment.cy.ts', avgDuration: 180000, lastRun: '2024-01-15' },
    { specPath: 'cypress/e2e/auth/login.cy.ts', avgDuration: 45000, lastRun: '2024-01-15' },
    { specPath: 'cypress/e2e/products/list.cy.ts', avgDuration: 60000, lastRun: '2024-01-15' },
    // ... more tests
  ];
}

function distributeByDuration(
  tests: TestDuration[],
  numShards: number
): string[][] {
  // Sort by duration descending
  const sorted = [...tests].sort((a, b) => b.avgDuration - a.avgDuration);
  
  // Create shards with running totals
  const shards: { specs: string[]; totalTime: number }[] = 
    Array.from({ length: numShards }, () => ({ specs: [], totalTime: 0 }));
  
  // Assign each test to the shard with lowest total time
  sorted.forEach(test => {
    const minShard = shards.reduce((min, shard) =>
      shard.totalTime < min.totalTime ? shard : min
    );
    minShard.specs.push(test.specPath);
    minShard.totalTime += test.avgDuration;
  });
  
  return shards.map(s => s.specs);
}

// ========== AFFECTED TESTS ONLY ==========
// Run only tests related to changed files

async function findAffectedTests(changedFiles: string[]): Promise<string[]> {
  const testToFileMap: Record<string, string[]> = {
    'cypress/e2e/auth/login.cy.ts': [
      'src/components/Login.tsx',
      'src/services/auth.ts',
      'src/hooks/useAuth.ts'
    ],
    'cypress/e2e/products/list.cy.ts': [
      'src/components/ProductList.tsx',
      'src/services/products.ts'
    ],
    // ... mapping
  };
  
  const affectedTests = new Set<string>();
  
  Object.entries(testToFileMap).forEach(([test, dependencies]) => {
    if (dependencies.some(dep => changedFiles.includes(dep))) {
      affectedTests.add(test);
    }
  });
  
  // Always run smoke tests
  affectedTests.add('cypress/e2e/smoke/**');
  
  return Array.from(affectedTests);
}

// ========== FAIL-FAST IMPLEMENTATION ==========
# GitHub Actions with fail-fast
jobs:
  cypress:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: true  # Stop all jobs if one fails
      matrix:
        containers: [1, 2, 3, 4]
    steps:
      - uses: cypress-io/github-action@v5
        with:
          record: true
          parallel: true

// ========== SPECULATIVE EXECUTION ==========
// Run historically-failing tests first

interface TestHistory {
  specPath: string;
  recentFailureRate: number;
  lastFailure?: string;
}

function prioritizeByFailureRate(tests: TestHistory[]): string[] {
  return [...tests]
    .sort((a, b) => b.recentFailureRate - a.recentFailureRate)
    .map(t => t.specPath);
}

// First shard runs tests most likely to fail
// Other shards run remaining tests
// Result: faster feedback on failures` }
    ],
    28: [
      { type: 'explanation', title: "Audit Trail Implementation", content: `**Complete Audit Trail Components:**

**1. Test Execution Records:**
- Test ID and name
- Execution timestamp
- Environment details
- Executor identity
- Duration and result
- Evidence (screenshots, videos)

**2. Change History:**
- Git commit for test code
- Git commit for app code
- Deployment version
- Configuration changes

**3. Review Records:**
- Reviewer identity
- Review timestamp
- Approval status
- Comments

**4. Evidence Storage:**
- Screenshots with timestamps
- Video recordings
- Log files
- Network traces
- Database snapshots

**Retention Requirements:**
- Regulated industries: 7+ years
- Standard: 1-3 years
- Archive older records
- Secure deletion policy` },
      { type: 'code', title: "Complete Audit System", content: "Enterprise audit trail:", code: `// ========== AUDIT INTERFACES ==========
interface AuditRecord {
  id: string;
  timestamp: string;
  type: 'execution' | 'review' | 'change' | 'access';
  actor: AuditActor;
  action: string;
  target: AuditTarget;
  result: 'success' | 'failure' | 'pending';
  evidence: AuditEvidence[];
  metadata: Record<string, unknown>;
}

interface AuditActor {
  id: string;
  name: string;
  email: string;
  role: string;
  ipAddress?: string;
}

interface AuditTarget {
  type: 'test' | 'suite' | 'environment' | 'config';
  id: string;
  name: string;
  version?: string;
}

interface AuditEvidence {
  type: 'screenshot' | 'video' | 'log' | 'artifact';
  path: string;
  hash: string;
  timestamp: string;
}

// ========== AUDIT LOGGER ==========
class AuditLogger {
  private storageUrl = Cypress.env('AUDIT_STORAGE_URL');
  
  async logExecution(test: Mocha.Test, result: 'passed' | 'failed') {
    const record: AuditRecord = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      type: 'execution',
      actor: this.getActor(),
      action: 'test_execution',
      target: {
        type: 'test',
        id: test.title,
        name: test.fullTitle(),
        version: Cypress.env('APP_VERSION')
      },
      result: result === 'passed' ? 'success' : 'failure',
      evidence: [],
      metadata: {
        duration: test.duration,
        browser: Cypress.browser.name,
        environment: Cypress.env('TEST_ENVIRONMENT'),
        baseUrl: Cypress.config('baseUrl'),
        retries: test.retries(),
        gitCommit: Cypress.env('GIT_COMMIT')
      }
    };
    
    // Capture evidence
    if (result === 'failed') {
      const screenshotPath = \`audit/\${record.id}/failure.png\`;
      cy.screenshot(screenshotPath);
      record.evidence.push({
        type: 'screenshot',
        path: screenshotPath,
        hash: '', // Calculate after capture
        timestamp: new Date().toISOString()
      });
    }
    
    await this.store(record);
  }
  
  private getActor(): AuditActor {
    return {
      id: Cypress.env('CI_USER_ID') || 'local',
      name: Cypress.env('CI_USER_NAME') || 'Local Developer',
      email: Cypress.env('CI_USER_EMAIL') || 'local@dev.com',
      role: Cypress.env('CI_USER_ROLE') || 'developer'
    };
  }
  
  private generateId(): string {
    return \`audit-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }
  
  private async store(record: AuditRecord): Promise<void> {
    // Store to audit service
    await fetch(this.storageUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record)
    });
  }
}

// ========== COMPLIANCE REPORTER ==========
// Generate compliance reports from audit data

interface ComplianceReport {
  reportId: string;
  generatedAt: string;
  period: { start: string; end: string };
  summary: {
    totalTests: number;
    passed: number;
    failed: number;
    coverage: number;
  };
  requirementsCoverage: RequirementCoverage[];
  evidenceInventory: EvidenceRecord[];
}

interface RequirementCoverage {
  requirementId: string;
  description: string;
  testsCovering: string[];
  lastPassed: string;
  status: 'covered' | 'partial' | 'uncovered';
}

function generateComplianceReport(
  auditRecords: AuditRecord[],
  requirements: string[]
): ComplianceReport {
  // Implementation generates compliance report
  // from audit records and requirements list
  return {
    reportId: \`CR-\${Date.now()}\`,
    generatedAt: new Date().toISOString(),
    period: {
      start: auditRecords[0]?.timestamp || '',
      end: auditRecords[auditRecords.length - 1]?.timestamp || ''
    },
    summary: {
      totalTests: auditRecords.length,
      passed: auditRecords.filter(r => r.result === 'success').length,
      failed: auditRecords.filter(r => r.result === 'failure').length,
      coverage: calculateCoverage(auditRecords, requirements)
    },
    requirementsCoverage: mapRequirementsCoverage(auditRecords, requirements),
    evidenceInventory: collectEvidence(auditRecords)
  };
}` }
    ],
    29: [
      { type: 'explanation', title: "AI Center of Excellence", content: `**Building an AI Testing CoE:**

**Mission:**
Enable safe, effective use of AI for test automation across the organization.

**Responsibilities:**
1. **Policy Development**
   - Define AI usage guidelines
   - Set review requirements
   - Establish compliance standards

2. **Training & Support**
   - Develop training curriculum
   - Conduct workshops
   - Provide mentoring
   - Maintain documentation

3. **Tool Management**
   - Evaluate AI tools
   - Manage licenses
   - Configure security
   - Monitor usage

4. **Quality Assurance**
   - Review AI-generated code
   - Track quality metrics
   - Identify patterns
   - Share best practices

**Maturity Levels:**
Level 1: Ad-hoc AI usage
Level 2: Basic policies in place
Level 3: Formal training program
Level 4: Metrics-driven improvement
Level 5: Continuous optimization` },
      { type: 'code', title: "AI CoE Implementation", content: "Tools for AI governance:", code: `// ========== AI POLICY ENFORCEMENT ==========
// Pre-commit hook to check AI-generated code

#!/bin/bash
# .husky/pre-commit

echo "🤖 Checking AI-generated code compliance..."

# Find files with AI annotations
AI_FILES=$(git diff --cached --name-only | xargs grep -l "@ai-generated" 2>/dev/null)

if [ -n "$AI_FILES" ]; then
  echo "Found AI-generated code in:"
  echo "$AI_FILES"
  
  # Check for required review annotation
  for file in $AI_FILES; do
    if ! grep -q "@reviewed-by" "$file"; then
      echo "❌ ERROR: $file has @ai-generated but no @reviewed-by"
      echo "Add reviewer annotation: @reviewed-by your.email@company.com"
      exit 1
    fi
    
    # Check for sensitive patterns
    if grep -qE "(password|secret|api.?key)\s*[:=]\s*['\"]" "$file"; then
      echo "❌ ERROR: Potential secret in AI-generated code: $file"
      exit 1
    fi
  done
  
  echo "✅ AI compliance check passed"
fi

// ========== TRAINING TRACKER ==========
interface TrainingRecord {
  employeeId: string;
  employeeName: string;
  modules: ModuleCompletion[];
  certified: boolean;
  certificationDate?: string;
  expirationDate?: string;
}

interface ModuleCompletion {
  moduleId: string;
  moduleName: string;
  completedAt: string;
  score: number;
  passed: boolean;
}

class AITrainingTracker {
  private records: Map<string, TrainingRecord> = new Map();
  
  requiredModules = [
    { id: 'ai-safety', name: 'AI Safety Fundamentals', passingScore: 80 },
    { id: 'prompt-eng', name: 'Prompt Engineering', passingScore: 75 },
    { id: 'code-review', name: 'AI Code Review', passingScore: 80 },
    { id: 'compliance', name: 'Compliance Requirements', passingScore: 90 }
  ];
  
  recordCompletion(
    employeeId: string,
    moduleId: string,
    score: number
  ): void {
    const record = this.records.get(employeeId) || this.createRecord(employeeId);
    const module = this.requiredModules.find(m => m.id === moduleId);
    
    if (!module) return;
    
    record.modules.push({
      moduleId,
      moduleName: module.name,
      completedAt: new Date().toISOString(),
      score,
      passed: score >= module.passingScore
    });
    
    // Check if all modules passed
    const allPassed = this.requiredModules.every(req =>
      record.modules.some(m => m.moduleId === req.id && m.passed)
    );
    
    if (allPassed && !record.certified) {
      record.certified = true;
      record.certificationDate = new Date().toISOString();
      // Certification valid for 12 months
      const expiry = new Date();
      expiry.setFullYear(expiry.getFullYear() + 1);
      record.expirationDate = expiry.toISOString();
    }
    
    this.records.set(employeeId, record);
  }
  
  isCertified(employeeId: string): boolean {
    const record = this.records.get(employeeId);
    if (!record || !record.certified) return false;
    
    // Check expiration
    if (record.expirationDate) {
      return new Date(record.expirationDate) > new Date();
    }
    
    return true;
  }
  
  private createRecord(employeeId: string): TrainingRecord {
    return {
      employeeId,
      employeeName: '',
      modules: [],
      certified: false
    };
  }
}

// ========== AI METRICS DASHBOARD ==========
interface AIMetrics {
  period: string;
  totalCodeGenerated: number;
  acceptanceRate: number;
  modificationRate: number;
  policyViolations: number;
  certifiedUsers: number;
  totalUsers: number;
  topTools: { name: string; usage: number }[];
  qualityScore: number;
}

function calculateAIMetrics(
  auditData: any[],
  trainingData: TrainingRecord[]
): AIMetrics {
  return {
    period: 'monthly',
    totalCodeGenerated: auditData.length,
    acceptanceRate: 0.78,
    modificationRate: 0.22,
    policyViolations: 3,
    certifiedUsers: trainingData.filter(t => t.certified).length,
    totalUsers: trainingData.length,
    topTools: [
      { name: 'GitHub Copilot', usage: 85 },
      { name: 'ChatGPT', usage: 10 },
      { name: 'Other', usage: 5 }
    ],
    qualityScore: 8.5
  };
}` }
    ],
    30: [
      { type: 'explanation', title: "Capstone Evaluation Criteria", content: `**Your Framework Will Be Evaluated On:**

**1. Architecture (25 points)**
- Clean folder structure (5)
- Proper TypeScript usage (5)
- Separation of concerns (5)
- Scalability potential (5)
- Documentation (5)

**2. Page Objects (20 points)**
- Base page implementation (4)
- Encapsulation quality (4)
- Fluent methods (4)
- Maintainability (4)
- Completeness (4)

**3. Test Quality (20 points)**
- Coverage breadth (5)
- Assertion quality (5)
- Data isolation (5)
- Reliability (5)

**4. CI/CD (20 points)**
- Pipeline configuration (5)
- Parallelization (5)
- Artifact handling (5)
- Notifications (5)

**5. Best Practices (15 points)**
- Custom commands (3)
- Error handling (3)
- Environment config (3)
- Security practices (3)
- Code style (3)

**Total: 100 points**
- 90+: Excellent (Enterprise-ready)
- 80-89: Good (Production-quality)
- 70-79: Satisfactory (Needs polish)
- <70: Needs improvement` },
      { type: 'code', title: "Capstone Rubric Implementation", content: "Self-evaluation checklist:", code: `// ========== CAPSTONE SELF-EVALUATION ==========
// Run this to evaluate your framework

interface EvaluationCategory {
  name: string;
  maxPoints: number;
  criteria: Criterion[];
}

interface Criterion {
  description: string;
  points: number;
  check: () => boolean;
}

const evaluationRubric: EvaluationCategory[] = [
  {
    name: 'Architecture',
    maxPoints: 25,
    criteria: [
      {
        description: 'cypress/pages folder exists with BasePage.ts',
        points: 5,
        check: () => {
          // Check for folder structure
          const fs = require('fs');
          return fs.existsSync('cypress/pages/BasePage.ts');
        }
      },
      {
        description: 'TypeScript configured with strict mode',
        points: 5,
        check: () => {
          const tsconfig = require('./tsconfig.json');
          return tsconfig.compilerOptions?.strict === true;
        }
      },
      {
        description: 'README.md exists with setup instructions',
        points: 5,
        check: () => {
          const fs = require('fs');
          const readme = fs.readFileSync('README.md', 'utf8');
          return readme.includes('## Setup') || readme.includes('## Installation');
        }
      }
    ]
  },
  {
    name: 'Page Objects',
    maxPoints: 20,
    criteria: [
      {
        description: 'At least 3 page objects implemented',
        points: 5,
        check: () => {
          const fs = require('fs');
          const glob = require('glob');
          const pages = glob.sync('cypress/pages/*.ts');
          return pages.length >= 4; // Including BasePage
        }
      },
      {
        description: 'Page objects use private selectors',
        points: 5,
        check: () => {
          // Check for private selector pattern
          const fs = require('fs');
          const loginPage = fs.readFileSync('cypress/pages/LoginPage.ts', 'utf8');
          return loginPage.includes('private') && loginPage.includes('selector');
        }
      }
    ]
  },
  {
    name: 'Custom Commands',
    maxPoints: 15,
    criteria: [
      {
        description: 'login command exists',
        points: 5,
        check: () => {
          const fs = require('fs');
          const commands = fs.readFileSync('cypress/support/commands.ts', 'utf8');
          return commands.includes("Commands.add('login'");
        }
      },
      {
        description: 'TypeScript declarations for commands',
        points: 5,
        check: () => {
          const fs = require('fs');
          return fs.existsSync('cypress/support/index.d.ts');
        }
      }
    ]
  },
  {
    name: 'CI/CD',
    maxPoints: 20,
    criteria: [
      {
        description: 'CI workflow file exists',
        points: 5,
        check: () => {
          const fs = require('fs');
          return fs.existsSync('.github/workflows/cypress.yml') ||
                 fs.existsSync('.gitlab-ci.yml');
        }
      },
      {
        description: 'Parallel execution configured',
        points: 5,
        check: () => {
          const fs = require('fs');
          let config = '';
          if (fs.existsSync('.github/workflows/cypress.yml')) {
            config = fs.readFileSync('.github/workflows/cypress.yml', 'utf8');
          }
          return config.includes('parallel') || config.includes('matrix');
        }
      }
    ]
  }
];

// Run evaluation
function evaluate(): void {
  let totalScore = 0;
  let maxScore = 0;
  
  evaluationRubric.forEach(category => {
    console.log(\`\\n📋 \${category.name} (max \${category.maxPoints})\`);
    
    category.criteria.forEach(criterion => {
      const passed = criterion.check();
      const points = passed ? criterion.points : 0;
      totalScore += points;
      maxScore += criterion.points;
      
      const status = passed ? '✅' : '❌';
      console.log(\`  \${status} \${criterion.description} (\${points}/\${criterion.points})\`);
    });
  });
  
  console.log(\`\\n========================================\`);
  console.log(\`Total Score: \${totalScore}/\${maxScore}\`);
  
  if (totalScore >= 90) {
    console.log(\`🏆 EXCELLENT - Enterprise Ready!\`);
  } else if (totalScore >= 80) {
    console.log(\`👍 GOOD - Production Quality\`);
  } else if (totalScore >= 70) {
    console.log(\`📝 SATISFACTORY - Needs Polish\`);
  } else {
    console.log(\`⚠️ NEEDS IMPROVEMENT\`);
  }
}

// Run: npx ts-node scripts/evaluate.ts` }
    ]
  };
  
  return {
    title: `Advanced: Enterprise ${title}`,
    duration: "15 minutes",
    content: advancedContents[lessonNumber] || [
      { type: 'explanation', title: "Enterprise Considerations", content: `When implementing ${title} at enterprise scale:\n\n**Key Considerations:**\n- Multi-team coordination\n- Performance optimization\n- Compliance requirements\n- Long-term maintainability\n- Security implications` },
      { type: 'warning', title: "Important Reminders", content: `**Security:**\n- Never commit secrets to code\n- Review all AI-generated code\n- Follow your organization's security policies\n\n**Maintainability:**\n- Document your decisions\n- Follow consistent patterns\n- Plan for scale from the start` }
    ]
  };
}

function generateExerciseContent(lessonNumber: number, title: string): HandsOnExercise {
  return {
    title: `Exercise: Apply ${title}`,
    objective: `Practice ${title} concepts with hands-on exercises.`,
    problem: `Implement the patterns learned in this lesson in your own Cypress project.`,
    prerequisites: ["Cypress installed", "Previous lessons completed"],
    steps: [
      { stepNumber: 1, instruction: "Open your project", howTo: "Launch VS Code with your Cypress project.", verification: "Project is open." },
      { stepNumber: 2, instruction: "Create a new test file", howTo: `Create cypress/e2e/lesson-${lessonNumber}-practice.cy.ts`, verification: "File is created." },
      { stepNumber: 3, instruction: "Implement the pattern", howTo: "Apply the concepts from this lesson.", code: `describe('Lesson ${lessonNumber} Practice', () => {\n  it('applies learned concepts', () => {\n    cy.visit('https://example.com')\n    // Add your implementation here\n  })\n})`, verification: "Code is written without errors." },
      { stepNumber: 4, instruction: "Run and verify", howTo: "Run the test in Cypress.", verification: "Test passes with green checkmark." }
    ],
    expectedOutput: `Working test file demonstrating ${title} concepts.`,
    troubleshooting: [
      { issue: "Test fails", cause: "Implementation error.", solution: "Review lesson examples and compare your code." },
      { issue: "Selector not found", cause: "Wrong selector syntax.", solution: "Use browser DevTools to verify selector." }
    ]
  };
}

function generateChecklistContent(lessonNumber: number, title: string): ExitChecklist {
  return {
    items: [
      { skill: `I understand ${title}`, verification: "I can explain the core concept to someone else." },
      { skill: "I can implement the pattern", verification: "My code works without errors." },
      { skill: "I know when to use this", verification: "I can identify appropriate scenarios." },
      { skill: "I completed the exercise", verification: "Exercise test passes successfully." },
      { skill: "I'm ready for the next lesson", verification: "I feel confident with this material." }
    ]
  };
}

// Main export function
export function generateCodexCourseContent(lessonId: string): CompleteLessonContent | null {
  // Return pre-defined detailed content for lessons 1-5
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
