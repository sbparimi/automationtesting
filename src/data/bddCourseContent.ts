export interface DayContent {
  day: number;
  title: string;
  description: string;
  concepts: string[];
  implementation: {
    description: string;
    examples: Array<{
      title: string;
      code: string;
      explanation: string;
    }>;
  };
  practiceExercises: Array<{
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    hints: string[];
  }>;
  dailyTasks: string[];
  resources: string[];
}

export const bddAdvancedCourse: DayContent[] = [
  {
    day: 1,
    title: "Introduction to Gherkin Syntax - Foundation",
    description: "Master the fundamentals of Gherkin syntax and understand how to write clear, concise feature files for enterprise-grade applications.",
    concepts: [
      "Understanding Gherkin language and its purpose",
      "The anatomy of a feature file",
      "Keywords: Feature, Scenario, Given, When, Then",
      "Writing declarative vs imperative scenarios",
      "Best practices for scenario naming"
    ],
    implementation: {
      description: "Learn to write your first Gherkin feature files with proper structure and conventions.",
      examples: [
        {
          title: "Basic User Login Feature",
          code: `Feature: User Authentication
  As a registered user
  I want to login to the application
  So that I can access my personalized dashboard

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username "john.doe@company.com"
    And the user enters valid password "SecurePass123!"
    And the user clicks the login button
    Then the user should be redirected to the dashboard
    And the user should see a welcome message "Welcome back, John!"`,
          explanation: "This demonstrates basic Gherkin structure with clear Given-When-Then steps that are readable by both technical and non-technical stakeholders."
        },
        {
          title: "Shopping Cart Feature",
          code: `Feature: Shopping Cart Management
  As an online shopper
  I want to manage items in my cart
  So that I can purchase products

  Scenario: Adding a product to empty cart
    Given the user is logged into the application
    And the shopping cart is empty
    When the user navigates to product "Laptop XYZ"
    And the user clicks "Add to Cart"
    Then the cart should contain 1 item
    And the cart total should be "$999.99"`,
          explanation: "Shows how to write scenarios for e-commerce workflows with clear preconditions and expected outcomes."
        },
        {
          title: "Email Validation Feature",
          code: `Feature: Email Validation
  As a system administrator
  I want to validate email formats
  So that only valid emails are stored

  Scenario: Valid email format
    Given the registration form is displayed
    When the user enters email "user@example.com"
    Then the email field should show a green checkmark
    And no validation error should be displayed`,
          explanation: "Demonstrates validation scenarios with clear success criteria."
        },
        {
          title: "File Upload Feature",
          code: `Feature: Document Upload
  As a user
  I want to upload documents
  So that I can share files with my team

  Scenario: Upload PDF document successfully
    Given the user is on the documents page
    When the user selects a PDF file "report.pdf" of size 2MB
    And clicks the upload button
    Then the file should be uploaded successfully
    And a success message "File uploaded" should appear`,
          explanation: "Shows how to describe file upload scenarios with specific file details."
        },
        {
          title: "Search Functionality",
          code: `Feature: Product Search
  As a customer
  I want to search for products
  So that I can find what I need quickly

  Scenario: Search returns relevant results
    Given the user is on the homepage
    When the user enters "wireless headphones" in the search box
    And presses Enter
    Then at least 5 products should be displayed
    And each product title should contain "wireless" or "headphones"`,
          explanation: "Demonstrates search feature scenarios with quantifiable results."
        }
      ]
    },
    practiceExercises: [
      {
        title: "Write a Password Reset Feature",
        description: "Create a complete feature file for password reset functionality including email sending and confirmation.",
        difficulty: "Easy",
        hints: [
          "Include scenarios for both successful and failed password resets",
          "Consider email validation",
          "Think about password strength requirements"
        ]
      },
      {
        title: "Profile Update Scenarios",
        description: "Write scenarios for updating user profile information including validation rules.",
        difficulty: "Easy",
        hints: [
          "Consider different fields: name, email, phone",
          "Include validation scenarios",
          "Think about what happens on save"
        ]
      },
      {
        title: "Product Filtering Feature",
        description: "Create scenarios for filtering products by category, price range, and ratings.",
        difficulty: "Medium",
        hints: [
          "Consider multiple filter combinations",
          "Think about clearing filters",
          "Include edge cases like no results"
        ]
      },
      {
        title: "Multi-step Checkout Process",
        description: "Write a complete checkout flow with shipping, payment, and confirmation steps.",
        difficulty: "Medium",
        hints: [
          "Break down into multiple scenarios",
          "Consider validation at each step",
          "Think about error handling"
        ]
      },
      {
        title: "Admin User Management",
        description: "Create scenarios for admin users to create, edit, delete, and search for users.",
        difficulty: "Hard",
        hints: [
          "Consider role-based access",
          "Include bulk operations",
          "Think about audit trails"
        ]
      }
    ],
    dailyTasks: [
      "Read and understand the Gherkin syntax reference guide",
      "Write 3 feature files for common web application scenarios",
      "Review and refactor your scenarios to make them more declarative",
      "Share your feature files with team members for feedback",
      "Set up a feature file naming convention for your project"
    ],
    resources: [
      "Cucumber Gherkin Reference: https://cucumber.io/docs/gherkin/reference/",
      "Writing Better Gherkin: https://cucumber.io/docs/bdd/better-gherkin/",
      "Gherkin Best Practices Guide"
    ]
  },
  {
    day: 2,
    title: "Scenario Outlines and Data Tables",
    description: "Learn to use data-driven testing with Scenario Outlines and Data Tables to reduce redundancy and increase test coverage.",
    concepts: [
      "Understanding Scenario Outline syntax",
      "Using Examples tables effectively",
      "Data Tables for complex data structures",
      "Parameterization best practices",
      "When to use Scenario vs Scenario Outline"
    ],
    implementation: {
      description: "Master data-driven testing techniques with practical examples.",
      examples: [
        {
          title: "Login with Multiple Credentials",
          code: `Feature: User Login Validation

  Scenario Outline: Login with different credential combinations
    Given the user is on the login page
    When the user enters username "<username>"
    And the user enters password "<password>"
    And clicks the login button
    Then the result should be "<result>"
    And the message should be "<message>"

    Examples:
      | username              | password      | result  | message                    |
      | valid@email.com       | ValidPass1!   | success | Welcome back!              |
      | invalid@email.com     | AnyPass123    | failure | Invalid credentials        |
      | valid@email.com       | wrongpass     | failure | Invalid credentials        |
      | notanemail            | ValidPass1!   | failure | Invalid email format       |
      | valid@email.com       |               | failure | Password is required       |
      |                       | ValidPass1!   | failure | Email is required          |`,
          explanation: "Scenario Outlines allow testing multiple data combinations without duplicating scenario structure."
        },
        {
          title: "Product Creation with Data Table",
          code: `Feature: Product Management

  Scenario: Create new product with complete details
    Given the user is logged in as admin
    When the user creates a product with the following details:
      | field       | value                          |
      | name        | Wireless Mouse                 |
      | category    | Electronics                    |
      | price       | 29.99                         |
      | stock       | 100                           |
      | description | Ergonomic wireless mouse       |
      | brand       | TechCorp                      |
      | sku         | WM-001                        |
    Then the product should be created successfully
    And the product should appear in the products list`,
          explanation: "Data Tables help organize complex data structures in a readable format."
        },
        {
          title: "Form Validation Scenarios",
          code: `Feature: Contact Form Validation

  Scenario Outline: Validate email field with various inputs
    Given the contact form is displayed
    When the user enters email "<email>"
    And moves to the next field
    Then the validation should be "<validation>"
    And the error message should be "<error>"

    Examples:
      | email                 | validation | error                        |
      | test@example.com      | valid      |                              |
      | user@domain.co.uk     | valid      |                              |
      | invalid.email         | invalid    | Please enter a valid email   |
      | @nodomain.com         | invalid    | Please enter a valid email   |
      | spaces @email.com     | invalid    | Email cannot contain spaces  |
      | test@                 | invalid    | Domain is required           |`,
          explanation: "Perfect for testing validation rules across multiple input variations."
        },
        {
          title: "Bulk User Registration",
          code: `Feature: Bulk User Import

  Scenario: Import multiple users from CSV
    Given the admin is on the user management page
    When the admin uploads a CSV file with users:
      | firstName | lastName | email                | role      | department |
      | John      | Doe      | john.doe@corp.com    | developer | Engineering|
      | Jane      | Smith    | jane.smith@corp.com  | manager   | Sales      |
      | Bob       | Johnson  | bob.j@corp.com       | developer | Engineering|
      | Alice     | Brown    | alice.b@corp.com     | analyst   | Marketing  |
    Then all 4 users should be created successfully
    And confirmation emails should be sent to all users`,
          explanation: "Data Tables excel at representing multiple records with the same structure."
        },
        {
          title: "Price Calculation Scenarios",
          code: `Feature: Shopping Cart Price Calculation

  Scenario Outline: Calculate total with different quantities and discounts
    Given the user has a product priced at <unit_price>
    When the user adds <quantity> items to cart
    And applies discount code "<discount_code>"
    Then the subtotal should be <subtotal>
    And the discount should be <discount>
    And the final total should be <total>

    Examples:
      | unit_price | quantity | discount_code | subtotal | discount | total |
      | 10.00      | 1        | NONE          | 10.00    | 0.00     | 10.00 |
      | 10.00      | 5        | NONE          | 50.00    | 0.00     | 50.00 |
      | 10.00      | 5        | SAVE10        | 50.00    | 5.00     | 45.00 |
      | 25.00      | 3        | SAVE20        | 75.00    | 15.00    | 60.00 |`,
          explanation: "Ideal for testing calculation logic with various input combinations."
        }
      ]
    },
    practiceExercises: [
      {
        title: "Registration Form Validation",
        description: "Create a Scenario Outline testing registration form with at least 8 different validation scenarios.",
        difficulty: "Easy",
        hints: [
          "Test email, password, username validations",
          "Include edge cases like empty fields",
          "Consider password strength variations"
        ]
      },
      {
        title: "Product Search Results",
        description: "Write Scenario Outlines for searching products with different keywords and filters.",
        difficulty: "Medium",
        hints: [
          "Test different search terms",
          "Include filter combinations",
          "Consider result counts"
        ]
      },
      {
        title: "Multi-currency Pricing",
        description: "Create scenarios using Data Tables for products with prices in different currencies.",
        difficulty: "Medium",
        hints: [
          "Include currency conversion",
          "Test multiple products",
          "Consider tax calculations"
        ]
      },
      {
        title: "Permission Matrix Testing",
        description: "Use Scenario Outlines to test user permissions across different roles and actions.",
        difficulty: "Hard",
        hints: [
          "Create a matrix of roles vs. actions",
          "Test both allowed and denied actions",
          "Include edge cases for special permissions"
        ]
      },
      {
        title: "Complex Order Processing",
        description: "Write scenarios with Data Tables for processing orders with various product combinations, shipping options, and payment methods.",
        difficulty: "Hard",
        hints: [
          "Combine multiple data tables",
          "Test calculation accuracy",
          "Include shipping rules"
        ]
      }
    ],
    dailyTasks: [
      "Convert 3 regular scenarios to Scenario Outlines",
      "Create 2 features using Data Tables for complex data",
      "Review existing test cases and identify candidates for parameterization",
      "Practice writing Examples tables with at least 10 variations",
      "Document when to use Scenario Outline vs regular Scenario"
    ],
    resources: [
      "Cucumber Data Tables Documentation",
      "Scenario Outline Best Practices",
      "Parameterized Testing Guide"
    ]
  },
  {
    day: 3,
    title: "Background and Hooks",
    description: "Understand how to use Background for common preconditions and hooks for setup/teardown operations.",
    concepts: [
      "Background keyword and its purpose",
      "When to use Background vs. Given steps",
      "Before and After hooks",
      "Hook execution order",
      "Tagged hooks for specific scenarios"
    ],
    implementation: {
      description: "Learn to eliminate repetition and manage test lifecycle efficiently.",
      examples: [
        {
          title: "Authentication Background",
          code: `Feature: Dashboard Features

  Background:
    Given the user is registered with email "test@company.com"
    And the user is logged into the application
    And the user is on the dashboard page

  Scenario: View recent activities
    When the user clicks on "Recent Activities"
    Then the activities panel should display
    And at least 1 activity should be shown

  Scenario: Update profile picture
    When the user clicks on profile icon
    And selects "Change Picture"
    And uploads a new image
    Then the profile picture should be updated

  Scenario: View notifications
    When the user clicks the notifications bell
    Then the notifications dropdown should appear
    And unread count should be displayed`,
          explanation: "Background runs before each scenario, perfect for common setup like authentication."
        },
        {
          title: "Shopping Cart Background",
          code: `Feature: Shopping Cart Operations

  Background:
    Given the user is logged in
    And the following products exist in the catalog:
      | productName    | price  | stock |
      | Laptop Pro     | 999.99 | 10    |
      | Wireless Mouse | 29.99  | 50    |
      | USB Cable      | 9.99   | 100   |
    And the shopping cart is empty

  Scenario: Add single item to cart
    When the user adds "Laptop Pro" to cart
    Then the cart should contain 1 item
    And the cart total should be "$999.99"

  Scenario: Add multiple different items
    When the user adds "Laptop Pro" to cart
    And the user adds "Wireless Mouse" to cart
    Then the cart should contain 2 items
    And the cart total should be "$1,029.98"`,
          explanation: "Background ensures consistent test data setup across all scenarios."
        },
        {
          title: "Admin Panel Background",
          code: `Feature: User Management

  Background:
    Given the admin is logged into the admin panel
    And the following users exist:
      | username  | email              | role      | status |
      | john_dev  | john@company.com   | developer | active |
      | jane_mgr  | jane@company.com   | manager   | active |
      | bob_admin | bob@company.com    | admin     | active |
      | inactive  | old@company.com    | developer | inactive |
    And the admin is on the user management page

  Scenario: Search for active users
    When the admin filters by status "active"
    Then 3 users should be displayed

  Scenario: Edit user role
    When the admin selects user "john_dev"
    And changes the role to "manager"
    And saves the changes
    Then the user "john_dev" should have role "manager"`,
          explanation: "Common admin setup and test data creation in Background."
        },
        {
          title: "API Testing Background",
          code: `Feature: API Authentication

  Background:
    Given the API server is running at "https://api.example.com"
    And the following API keys exist:
      | keyName     | keyValue                          | scope      |
      | read_key    | sk_test_read_12345               | read       |
      | write_key   | sk_test_write_67890              | write      |
      | admin_key   | sk_test_admin_abcdef             | admin      |
    And the database is in a clean state

  Scenario: Read operation with read key
    When a GET request is made to "/users" with "read_key"
    Then the response status should be 200
    And the response should contain a list of users

  Scenario: Write operation with read key
    When a POST request is made to "/users" with "read_key"
    Then the response status should be 403
    And the error should be "Insufficient permissions"`,
          explanation: "Background sets up API environment and test data for all scenarios."
        },
        {
          title: "E-commerce Flow Background",
          code: `Feature: Checkout Process

  Background:
    Given the user "buyer@email.com" is registered and logged in
    And the user has the following items in cart:
      | product       | quantity | price |
      | Laptop        | 1        | 999   |
      | Mouse         | 2        | 25    |
    And the user has saved payment method "Visa ending in 4242"
    And the user has saved shipping address:
      | field    | value              |
      | street   | 123 Main St        |
      | city     | New York           |
      | state    | NY                 |
      | zip      | 10001              |
      | country  | USA                |

  Scenario: Complete checkout with saved details
    Given the user is on the checkout page
    When the user confirms the order
    Then the order should be placed successfully

  Scenario: Change shipping address during checkout
    Given the user is on the checkout page
    When the user selects "Use different address"
    And enters a new shipping address
    And confirms the order
    Then the order should use the new address`,
          explanation: "Complex e-commerce setup with cart, payment, and address data."
        }
      ]
    },
    practiceExercises: [
      {
        title: "Blog Management Background",
        description: "Create a feature for blog post management with Background setting up authenticated admin and sample posts.",
        difficulty: "Easy",
        hints: [
          "Include admin authentication in Background",
          "Create 3-5 sample blog posts",
          "Add different post statuses (draft, published)"
        ]
      },
      {
        title: "Inventory Management",
        description: "Write scenarios for inventory operations with Background setting up products and warehouse data.",
        difficulty: "Medium",
        hints: [
          "Include multiple warehouses",
          "Set up initial stock levels",
          "Consider different product categories"
        ]
      },
      {
        title: "Multi-tenant Application",
        description: "Create scenarios with Background setting up different tenant configurations.",
        difficulty: "Medium",
        hints: [
          "Set up multiple tenants",
          "Configure tenant-specific settings",
          "Include user assignments to tenants"
        ]
      },
      {
        title: "Reporting System",
        description: "Write scenarios for a reporting system with Background creating historical data.",
        difficulty: "Hard",
        hints: [
          "Generate time-series data",
          "Include multiple data sources",
          "Set up different report configurations"
        ]
      },
      {
        title: "Workflow Approval System",
        description: "Create scenarios for a multi-step approval workflow with Background setting up users, roles, and pending requests.",
        difficulty: "Hard",
        hints: [
          "Set up approval chain",
          "Create pending requests at different stages",
          "Include role-based permissions"
        ]
      }
    ],
    dailyTasks: [
      "Identify common Given steps in your scenarios and move them to Background",
      "Write 2 features using Background effectively",
      "Document the difference between Background and hooks",
      "Review scenarios and identify setup/teardown needs",
      "Create a hooks strategy document for your framework"
    ],
    resources: [
      "Cucumber Background Documentation",
      "Hooks and Test Lifecycle Management",
      "DRY Principles in BDD"
    ]
  },
  {
    day: 4,
    title: "Tags and Test Organization",
    description: "Master the use of tags for organizing, filtering, and executing specific subsets of tests.",
    concepts: [
      "Tag syntax and conventions",
      "Running tests by tags",
      "Tag expressions and combinations",
      "Organizing tests with tags",
      "Tag inheritance in features"
    ],
    implementation: {
      description: "Learn advanced tagging strategies for enterprise test management.",
      examples: [
        {
          title: "Priority-based Tagging",
          code: `@critical @smoke
Feature: User Authentication

  @p0 @regression
  Scenario: Admin login with valid credentials
    Given the admin user exists
    When the admin logs in with valid credentials
    Then the admin dashboard should be displayed

  @p1 @regression
  Scenario: User login with MFA enabled
    Given a user with MFA enabled exists
    When the user logs in with valid credentials
    Then the MFA verification screen should appear

  @p2 @edge-case
  Scenario: Login attempt with expired password
    Given a user with expired password exists
    When the user attempts to login
    Then a password reset prompt should appear`,
          explanation: "Tags help prioritize and categorize tests by importance and test suite."
        },
        {
          title: "Environment-specific Tags",
          code: `@api @integration
Feature: Payment Processing

  @production-ready @secure
  Scenario: Process credit card payment
    Given the payment gateway is configured
    When a customer submits payment details
    Then the payment should be processed securely

  @staging-only @mock-payment
  Scenario: Test payment with mock gateway
    Given the mock payment gateway is active
    When a test payment is submitted
    Then the mock response should be returned

  @development-only @debug
  Scenario: Payment with detailed logging
    Given debug mode is enabled
    When a payment is processed
    Then detailed logs should be captured`,
          explanation: "Environment-specific tags control which tests run in different environments."
        },
        {
          title: "Feature-based Tagging",
          code: `@shopping-cart @e-commerce
Feature: Shopping Cart Management

  @add-to-cart @positive
  Scenario: Add product to empty cart
    When the user adds a product
    Then the cart should contain the product

  @remove-from-cart @positive  
  Scenario: Remove product from cart
    When the user removes a product
    Then the cart should be empty

  @cart-calculations @business-logic
  Scenario: Calculate cart total with discount
    When the user applies a discount code
    Then the total should reflect the discount`,
          explanation: "Feature and behavior-based tags for logical test organization."
        },
        {
          title: "Browser and Device Tags",
          code: `@ui @cross-browser
Feature: Responsive Design

  @chrome @firefox @edge
  Scenario: Desktop navigation menu
    Given the user is on desktop browser
    When the page loads
    Then the full navigation menu should be visible

  @mobile @ios @android
  Scenario: Mobile hamburger menu
    Given the user is on mobile device
    When the page loads
    Then the hamburger menu icon should be visible

  @tablet @ipad
  Scenario: Tablet view navigation
    Given the user is on tablet device
    Then the condensed navigation should appear`,
          explanation: "Tags for cross-browser and cross-device testing."
        },
        {
          title: "Test Type Tags",
          code: `@user-management @rbac
Feature: Role-Based Access Control

  @unit @fast
  Scenario: Verify role assignment logic
    When a user is assigned "admin" role
    Then they should have admin permissions

  @integration @medium
  Scenario: Role-based page access
    Given a user with "viewer" role logs in
    When they attempt to access admin pages
    Then they should be redirected to home

  @e2e @slow @database
  Scenario: Complete user lifecycle with roles
    Given a new user is created
    When they are assigned multiple roles
    And their permissions are verified
    Then all role operations should be tracked in audit log`,
          explanation: "Tags categorize tests by type and execution speed."
        }
      ]
    },
    practiceExercises: [
      {
        title: "Create a Tagging Strategy",
        description: "Design a comprehensive tagging strategy for a project with at least 10 different tag categories.",
        difficulty: "Easy",
        hints: [
          "Consider priority, feature area, test type",
          "Include environment tags",
          "Think about execution speed"
        ]
      },
      {
        title: "Tag-based Test Suites",
        description: "Create multiple test scenarios and organize them into logical suites using tags.",
        difficulty: "Medium",
        hints: [
          "Create smoke, regression, and full suites",
          "Use tag combinations",
          "Document suite purposes"
        ]
      },
      {
        title: "CI/CD Pipeline Tags",
        description: "Design a tagging strategy for different CI/CD pipeline stages.",
        difficulty: "Medium",
        hints: [
          "Consider pre-commit, post-commit stages",
          "Include deployment environment tags",
          "Think about parallel execution"
        ]
      },
      {
        title: "Complex Tag Expressions",
        description: "Write tag expressions for complex test execution scenarios using AND, OR, NOT logic.",
        difficulty: "Hard",
        hints: [
          "Combine multiple conditions",
          "Use exclusion tags",
          "Test the expressions"
        ]
      },
      {
        title: "Dynamic Tag Management",
        description: "Create a system for managing and validating tags across a large test suite.",
        difficulty: "Hard",
        hints: [
          "Consider tag naming conventions",
          "Include tag validation rules",
          "Create tag documentation automation"
        ]
      }
    ],
    dailyTasks: [
      "Add appropriate tags to all existing scenarios",
      "Create a tag naming convention document",
      "Set up tag-based test execution commands",
      "Group tests into smoke, regression, and full suites using tags",
      "Document your tagging strategy for the team"
    ],
    resources: [
      "Cucumber Tags Documentation",
      "Test Organization Best Practices",
      "CI/CD Integration with Tags"
    ]
  },
  // Days 5-30 would continue with topics like:
  // Day 5: Step Definitions and Pattern Matching
  // Day 6: Factory Pattern Introduction
  // Day 7-10: Atomic Keywords Development
  // Day 11-15: Business Keywords and Composition
  // Day 16-20: Advanced Factory Patterns
  // Day 21-25: Integration with CI/CD
  // Day 26-30: Advanced Topics and Best Practices
];

// Placeholder for remaining days - to be populated
export const getRemainingDays = (): DayContent[] => {
  // Days 5-30 will be added in subsequent updates
  return [];
};