// Framework Architecture Diagrams using Mermaid-style visual components

export const POMDiagram = () => (
  <div className="space-y-4">
    <div className="text-center">
      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4">
        Test Classes
      </div>
    </div>
    <div className="flex justify-center items-center space-x-4">
      <div className="bg-accent text-accent-foreground px-3 py-2 rounded border text-sm">
        LoginPage.ts
      </div>
      <div className="text-muted-foreground">→</div>
      <div className="bg-accent text-accent-foreground px-3 py-2 rounded border text-sm">
        DashboardPage.ts
      </div>
      <div className="text-muted-foreground">→</div>
      <div className="bg-accent text-accent-foreground px-3 py-2 rounded border text-sm">
        ProfilePage.ts
      </div>
    </div>
    <div className="text-center">
      <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
        Base Page Class
      </div>
    </div>
  </div>
);

export const KeywordDrivenDiagram = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-success text-success-foreground px-3 py-2 rounded text-sm">
        Keywords.xlsx
      </div>
      <div className="bg-primary text-primary-foreground px-3 py-2 rounded text-sm">
        Keyword Engine
      </div>
      <div className="bg-accent text-accent-foreground px-3 py-2 rounded text-sm">
        Test Execution
      </div>
    </div>
    <div className="flex justify-center space-x-2 text-muted-foreground">
      <span>→</span>
      <span>Process</span>
      <span>→</span>
    </div>
    <div className="text-center text-sm text-muted-foreground">
      Non-technical users can create tests using keywords
    </div>
  </div>
);

export const DataDrivenDiagram = () => (
  <div className="space-y-4">
    <div className="text-center">
      <div className="inline-block bg-warning text-warning-foreground px-4 py-2 rounded-lg mb-4">
        Test Data Sources
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center">
      <div className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">JSON</div>
      <div className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">CSV</div>
      <div className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Database</div>
    </div>
    <div className="text-center">
      <div className="text-muted-foreground">↓</div>
      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg">
        Single Test → Multiple Scenarios
      </div>
    </div>
  </div>
);

export const HybridDiagram = () => (
  <div className="space-y-4">
    <div className="text-center">
      <div className="inline-block bg-gradient-tech text-white px-4 py-2 rounded-lg mb-4">
        Hybrid Framework
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm text-center">
          Page Objects
        </div>
        <div className="bg-success text-success-foreground px-3 py-1 rounded text-sm text-center">
          Keywords
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-warning text-warning-foreground px-3 py-1 rounded text-sm text-center">
          Data Driven
        </div>
        <div className="bg-accent text-accent-foreground px-3 py-1 rounded text-sm text-center">
          Utilities
        </div>
      </div>
    </div>
    <div className="text-center text-sm text-muted-foreground">
      Best of all worlds combined
    </div>
  </div>
);

export const BDDDiagram = () => (
  <div className="space-y-4">
    <div className="text-center">
      <div className="inline-block bg-success text-success-foreground px-4 py-2 rounded-lg mb-4">
        Behavior Driven Development
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between bg-muted p-2 rounded text-sm">
        <span className="font-mono text-primary">Feature:</span>
        <span className="text-muted-foreground">User Login</span>
      </div>
      <div className="flex items-center justify-between bg-muted p-2 rounded text-sm">
        <span className="font-mono text-success">Given:</span>
        <span className="text-muted-foreground">User is on login page</span>
      </div>
      <div className="flex items-center justify-between bg-muted p-2 rounded text-sm">
        <span className="font-mono text-warning">When:</span>
        <span className="text-muted-foreground">User enters credentials</span>
      </div>
      <div className="flex items-center justify-between bg-muted p-2 rounded text-sm">
        <span className="font-mono text-primary">Then:</span>
        <span className="text-muted-foreground">User is logged in</span>
      </div>
    </div>
  </div>
);

export const APIDiagram = () => (
  <div className="space-y-4">
    <div className="text-center">
      <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-4">
        API + UI Integration
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <div className="bg-success text-success-foreground px-3 py-2 rounded mb-2">
          API Tests
        </div>
        <div className="text-xs text-muted-foreground">Fast, Reliable</div>
      </div>
      <div className="text-center">
        <div className="bg-primary text-primary-foreground px-3 py-2 rounded mb-2">
          UI Tests
        </div>
        <div className="text-xs text-muted-foreground">User Journey</div>
      </div>
    </div>
    <div className="text-center">
      <div className="text-muted-foreground">↓</div>
      <div className="bg-gradient-tech text-white px-4 py-2 rounded-lg">
        Complete Test Coverage
      </div>
    </div>
  </div>
);