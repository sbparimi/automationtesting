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
  return {
    title: `Intermediate: ${title} in Practice`,
    duration: "20 minutes",
    content: [
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
  return {
    title: `Advanced: Enterprise ${title}`,
    duration: "10 minutes",
    content: [
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
