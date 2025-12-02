// TMAP Next Based Test Management Learning Structure
// Covering Basic to Director Level Skills

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced';
  isFree?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

// BASIC TEST MANAGEMENT COURSE
export const basicTestManagementCourse: Course = {
  id: 'basic-test-management',
  title: 'Test Management Fundamentals (TMAP Next)',
  description: 'Master core test management concepts based on TMAP Next methodology',
  sections: [
    {
      id: 'tm-section-1-foundations',
      title: 'Section 1: Testing Foundations (12 lessons)',
      description: 'Core testing concepts and TMAP Next principles',
      lessons: [
        { id: 'tm-basic-001', title: 'Introduction to TMAP Next', duration: '20 min', level: 'basic', isFree: true },
        { id: 'tm-basic-002', title: 'Testing in the Software Lifecycle', duration: '18 min', level: 'basic', isFree: true },
        { id: 'tm-basic-003', title: 'Test Process Model Overview', duration: '22 min', level: 'basic', isFree: true },
        { id: 'tm-basic-004', title: 'Test Levels and Test Types', duration: '19 min', level: 'basic', isFree: true },
        { id: 'tm-basic-005', title: 'Quality Attributes and Requirements', duration: '21 min', level: 'basic', isFree: true },
        { id: 'tm-basic-006', title: 'Risk-Based Testing Introduction', duration: '17 min', level: 'basic' },
        { id: 'tm-basic-007', title: 'Test Policy and Strategy', duration: '20 min', level: 'basic' },
        { id: 'tm-basic-008', title: 'Master Test Plan Basics', duration: '23 min', level: 'basic' },
        { id: 'tm-basic-009', title: 'Test Environment Management', duration: '18 min', level: 'basic' },
        { id: 'tm-basic-010', title: 'Test Data Management Basics', duration: '19 min', level: 'basic' },
        { id: 'tm-basic-011', title: 'Defect Management Process', duration: '16 min', level: 'basic' },
        { id: 'tm-basic-012', title: 'Test Closure Activities', duration: '15 min', level: 'basic' },
      ],
    },
    {
      id: 'tm-section-2-test-design',
      title: 'Section 2: Test Design Techniques (14 lessons)',
      description: 'Specification-based and experience-based techniques',
      lessons: [
        { id: 'tm-basic-013', title: 'Equivalence Partitioning', duration: '18 min', level: 'basic' },
        { id: 'tm-basic-014', title: 'Boundary Value Analysis', duration: '16 min', level: 'basic' },
        { id: 'tm-basic-015', title: 'Decision Tables', duration: '22 min', level: 'basic' },
        { id: 'tm-basic-016', title: 'State Transition Testing', duration: '20 min', level: 'basic' },
        { id: 'tm-basic-017', title: 'Use Case Testing', duration: '19 min', level: 'basic' },
        { id: 'tm-basic-018', title: 'Exploratory Testing', duration: '21 min', level: 'basic' },
        { id: 'tm-basic-019', title: 'Checklist-Based Testing', duration: '15 min', level: 'basic' },
        { id: 'tm-basic-020', title: 'Error Guessing', duration: '14 min', level: 'basic' },
        { id: 'tm-basic-021', title: 'Pairwise Testing', duration: '23 min', level: 'basic' },
        { id: 'tm-basic-022', title: 'User Story Testing', duration: '18 min', level: 'basic' },
        { id: 'tm-basic-023', title: 'Acceptance Criteria Design', duration: '20 min', level: 'basic' },
        { id: 'tm-basic-024', title: 'Test Case Prioritization', duration: '17 min', level: 'basic' },
        { id: 'tm-basic-025', title: 'Traceability Matrix', duration: '19 min', level: 'basic' },
        { id: 'tm-basic-026', title: 'Test Design Documentation', duration: '16 min', level: 'basic' },
      ],
    },
    {
      id: 'tm-section-3-execution',
      title: 'Section 3: Test Execution and Reporting (12 lessons)',
      description: 'Executing tests and communicating results',
      lessons: [
        { id: 'tm-basic-027', title: 'Test Execution Planning', duration: '18 min', level: 'basic' },
        { id: 'tm-basic-028', title: 'Test Run Management', duration: '16 min', level: 'basic' },
        { id: 'tm-basic-029', title: 'Defect Lifecycle Management', duration: '20 min', level: 'basic' },
        { id: 'tm-basic-030', title: 'Defect Classification', duration: '15 min', level: 'basic' },
        { id: 'tm-basic-031', title: 'Root Cause Analysis', duration: '22 min', level: 'basic' },
        { id: 'tm-basic-032', title: 'Test Progress Monitoring', duration: '17 min', level: 'basic' },
        { id: 'tm-basic-033', title: 'Test Summary Reports', duration: '19 min', level: 'basic' },
        { id: 'tm-basic-034', title: 'Exit Criteria Evaluation', duration: '16 min', level: 'basic' },
        { id: 'tm-basic-035', title: 'Test Metrics Collection', duration: '21 min', level: 'basic' },
        { id: 'tm-basic-036', title: 'Quality Gates', duration: '18 min', level: 'basic' },
        { id: 'tm-basic-037', title: 'Regression Testing Strategy', duration: '20 min', level: 'basic' },
        { id: 'tm-basic-038', title: 'Smoke and Sanity Testing', duration: '14 min', level: 'basic' },
      ],
    },
  ],
};

// INTERMEDIATE TEST MANAGEMENT COURSE
export const intermediateTestManagementCourse: Course = {
  id: 'intermediate-test-management',
  title: 'Test Management Professional',
  description: 'Advanced test planning, estimation, and team leadership',
  sections: [
    {
      id: 'tm-section-4-planning',
      title: 'Section 4: Advanced Test Planning (14 lessons)',
      description: 'Strategic planning and estimation techniques',
      lessons: [
        { id: 'tm-int-001', title: 'Product Risk Analysis (PRA)', duration: '25 min', level: 'intermediate' },
        { id: 'tm-int-002', title: 'Risk-Based Test Strategy', duration: '28 min', level: 'intermediate' },
        { id: 'tm-int-003', title: 'Test Estimation Techniques', duration: '24 min', level: 'intermediate' },
        { id: 'tm-int-004', title: 'Work Breakdown Structure', duration: '22 min', level: 'intermediate' },
        { id: 'tm-int-005', title: 'Resource Planning', duration: '20 min', level: 'intermediate' },
        { id: 'tm-int-006', title: 'Test Schedule Development', duration: '23 min', level: 'intermediate' },
        { id: 'tm-int-007', title: 'Dependency Management', duration: '19 min', level: 'intermediate' },
        { id: 'tm-int-008', title: 'Contingency Planning', duration: '21 min', level: 'intermediate' },
        { id: 'tm-int-009', title: 'Test Approach Selection', duration: '26 min', level: 'intermediate' },
        { id: 'tm-int-010', title: 'Coverage Analysis', duration: '24 min', level: 'intermediate' },
        { id: 'tm-int-011', title: 'Entry and Exit Criteria', duration: '18 min', level: 'intermediate' },
        { id: 'tm-int-012', title: 'Test Scope Management', duration: '22 min', level: 'intermediate' },
        { id: 'tm-int-013', title: 'Stakeholder Communication', duration: '20 min', level: 'intermediate' },
        { id: 'tm-int-014', title: 'Change Impact Analysis', duration: '25 min', level: 'intermediate' },
      ],
    },
    {
      id: 'tm-section-5-agile',
      title: 'Section 5: Agile Test Management (14 lessons)',
      description: 'Testing in Scrum, Kanban, and SAFe environments',
      lessons: [
        { id: 'tm-int-015', title: 'Testing in Scrum', duration: '22 min', level: 'intermediate' },
        { id: 'tm-int-016', title: 'Sprint Planning for Testers', duration: '20 min', level: 'intermediate' },
        { id: 'tm-int-017', title: 'Definition of Done', duration: '18 min', level: 'intermediate' },
        { id: 'tm-int-018', title: 'Behavior-Driven Development', duration: '26 min', level: 'intermediate' },
        { id: 'tm-int-019', title: 'Test-Driven Development', duration: '24 min', level: 'intermediate' },
        { id: 'tm-int-020', title: 'Acceptance Test-Driven Dev', duration: '25 min', level: 'intermediate' },
        { id: 'tm-int-021', title: 'Continuous Testing Mindset', duration: '21 min', level: 'intermediate' },
        { id: 'tm-int-022', title: 'Kanban for Testing', duration: '19 min', level: 'intermediate' },
        { id: 'tm-int-023', title: 'SAFe Testing Practices', duration: '28 min', level: 'intermediate' },
        { id: 'tm-int-024', title: 'Agile Test Quadrants', duration: '23 min', level: 'intermediate' },
        { id: 'tm-int-025', title: 'User Story Testing', duration: '20 min', level: 'intermediate' },
        { id: 'tm-int-026', title: 'Retrospectives for Testing', duration: '17 min', level: 'intermediate' },
        { id: 'tm-int-027', title: 'Three Amigos Sessions', duration: '16 min', level: 'intermediate' },
        { id: 'tm-int-028', title: 'Agile Metrics for Testing', duration: '22 min', level: 'intermediate' },
      ],
    },
    {
      id: 'tm-section-6-tools',
      title: 'Section 6: Test Management Tools (13 lessons)',
      description: 'Mastering industry-standard test management platforms',
      lessons: [
        { id: 'tm-int-029', title: 'Jira for Test Management', duration: '24 min', level: 'intermediate' },
        { id: 'tm-int-030', title: 'Xray Test Management', duration: '26 min', level: 'intermediate' },
        { id: 'tm-int-031', title: 'TestRail Mastery', duration: '28 min', level: 'intermediate' },
        { id: 'tm-int-032', title: 'qTest Integration', duration: '22 min', level: 'intermediate' },
        { id: 'tm-int-033', title: 'Azure Test Plans', duration: '25 min', level: 'intermediate' },
        { id: 'tm-int-034', title: 'Zephyr Scale', duration: '23 min', level: 'intermediate' },
        { id: 'tm-int-035', title: 'ALM Quality Center', duration: '27 min', level: 'intermediate' },
        { id: 'tm-int-036', title: 'PractiTest', duration: '20 min', level: 'intermediate' },
        { id: 'tm-int-037', title: 'Tool Selection Criteria', duration: '21 min', level: 'intermediate' },
        { id: 'tm-int-038', title: 'Tool Migration Strategies', duration: '24 min', level: 'intermediate' },
        { id: 'tm-int-039', title: 'Custom Workflows Setup', duration: '22 min', level: 'intermediate' },
        { id: 'tm-int-040', title: 'Reporting Dashboards', duration: '19 min', level: 'intermediate' },
        { id: 'tm-int-041', title: 'Integration with CI/CD', duration: '26 min', level: 'intermediate' },
      ],
    },
  ],
};

// ADVANCED TEST MANAGEMENT COURSE (Engineering Manager & Director Level)
export const advancedTestManagementCourse: Course = {
  id: 'advanced-test-management',
  title: 'Test Leadership & Governance',
  description: 'Engineering Manager and Director level skills for QA leadership',
  sections: [
    {
      id: 'tm-section-7-strategy',
      title: 'Section 7: Test Strategy & Governance (14 lessons)',
      description: 'Enterprise test strategy and organizational governance',
      lessons: [
        { id: 'tm-adv-001', title: 'Enterprise Test Strategy Design', duration: '30 min', level: 'advanced' },
        { id: 'tm-adv-002', title: 'Test Center of Excellence (TCoE)', duration: '35 min', level: 'advanced' },
        { id: 'tm-adv-003', title: 'QA Governance Framework', duration: '32 min', level: 'advanced' },
        { id: 'tm-adv-004', title: 'Test Maturity Assessment', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-005', title: 'TMMi Model Implementation', duration: '34 min', level: 'advanced' },
        { id: 'tm-adv-006', title: 'Quality KPIs for Executives', duration: '26 min', level: 'advanced' },
        { id: 'tm-adv-007', title: 'Test Portfolio Management', duration: '29 min', level: 'advanced' },
        { id: 'tm-adv-008', title: 'Multi-Project Coordination', duration: '27 min', level: 'advanced' },
        { id: 'tm-adv-009', title: 'Vendor and Offshore Management', duration: '31 min', level: 'advanced' },
        { id: 'tm-adv-010', title: 'Compliance and Regulatory Testing', duration: '33 min', level: 'advanced' },
        { id: 'tm-adv-011', title: 'Audit and Assessment Preparation', duration: '25 min', level: 'advanced' },
        { id: 'tm-adv-012', title: 'Process Improvement Programs', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-013', title: 'Industry Standards (ISO 29119)', duration: '30 min', level: 'advanced' },
        { id: 'tm-adv-014', title: 'Building Test Communities', duration: '24 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-8-leadership',
      title: 'Section 8: People Leadership (14 lessons)',
      description: 'Building and leading high-performing QA teams',
      lessons: [
        { id: 'tm-adv-015', title: 'QA Team Structure Design', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-016', title: 'Hiring and Interviewing', duration: '32 min', level: 'advanced' },
        { id: 'tm-adv-017', title: 'Career Path Development', duration: '26 min', level: 'advanced' },
        { id: 'tm-adv-018', title: 'Performance Management', duration: '30 min', level: 'advanced' },
        { id: 'tm-adv-019', title: 'Skill Gap Analysis', duration: '24 min', level: 'advanced' },
        { id: 'tm-adv-020', title: 'Training Program Design', duration: '29 min', level: 'advanced' },
        { id: 'tm-adv-021', title: 'Mentoring and Coaching', duration: '25 min', level: 'advanced' },
        { id: 'tm-adv-022', title: 'Remote Team Management', duration: '27 min', level: 'advanced' },
        { id: 'tm-adv-023', title: 'Cross-functional Collaboration', duration: '23 min', level: 'advanced' },
        { id: 'tm-adv-024', title: 'Conflict Resolution', duration: '22 min', level: 'advanced' },
        { id: 'tm-adv-025', title: 'Change Management', duration: '31 min', level: 'advanced' },
        { id: 'tm-adv-026', title: 'Building Testing Culture', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-027', title: 'Succession Planning', duration: '24 min', level: 'advanced' },
        { id: 'tm-adv-028', title: 'Stakeholder Management', duration: '26 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-9-budget',
      title: 'Section 9: Budget & Resource Management (13 lessons)',
      description: 'Financial planning and resource optimization',
      lessons: [
        { id: 'tm-adv-029', title: 'QA Budget Planning', duration: '30 min', level: 'advanced' },
        { id: 'tm-adv-030', title: 'Cost-Benefit Analysis', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-031', title: 'ROI of Test Automation', duration: '32 min', level: 'advanced' },
        { id: 'tm-adv-032', title: 'Tool Licensing Optimization', duration: '24 min', level: 'advanced' },
        { id: 'tm-adv-033', title: 'Capacity Planning', duration: '26 min', level: 'advanced' },
        { id: 'tm-adv-034', title: 'Resource Allocation Models', duration: '29 min', level: 'advanced' },
        { id: 'tm-adv-035', title: 'Outsourcing Decisions', duration: '27 min', level: 'advanced' },
        { id: 'tm-adv-036', title: 'Contract Negotiations', duration: '25 min', level: 'advanced' },
        { id: 'tm-adv-037', title: 'Quality Cost Metrics', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-038', title: 'Cost of Quality (CoQ)', duration: '31 min', level: 'advanced' },
        { id: 'tm-adv-039', title: 'Defect Prevention Economics', duration: '26 min', level: 'advanced' },
        { id: 'tm-adv-040', title: 'Financial Reporting', duration: '23 min', level: 'advanced' },
        { id: 'tm-adv-041', title: 'Executive Presentations', duration: '30 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-10-transformation',
      title: 'Section 10: Digital Transformation (13 lessons)',
      description: 'Leading QA transformation initiatives',
      lessons: [
        { id: 'tm-adv-042', title: 'DevOps Transformation for QA', duration: '35 min', level: 'advanced' },
        { id: 'tm-adv-043', title: 'Shift-Left Strategy', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-044', title: 'Shift-Right and Production Testing', duration: '30 min', level: 'advanced' },
        { id: 'tm-adv-045', title: 'Continuous Testing Pipeline', duration: '33 min', level: 'advanced' },
        { id: 'tm-adv-046', title: 'Cloud Testing Strategy', duration: '29 min', level: 'advanced' },
        { id: 'tm-adv-047', title: 'Microservices Testing', duration: '32 min', level: 'advanced' },
        { id: 'tm-adv-048', title: 'API-First Testing', duration: '27 min', level: 'advanced' },
        { id: 'tm-adv-049', title: 'AI/ML in Test Automation', duration: '34 min', level: 'advanced' },
        { id: 'tm-adv-050', title: 'Test Data as a Service', duration: '26 min', level: 'advanced' },
        { id: 'tm-adv-051', title: 'Environment as a Service', duration: '28 min', level: 'advanced' },
        { id: 'tm-adv-052', title: 'Quality Engineering Culture', duration: '31 min', level: 'advanced' },
        { id: 'tm-adv-053', title: 'Automation Roadmap Design', duration: '33 min', level: 'advanced' },
        { id: 'tm-adv-054', title: 'Innovation and Emerging Tech', duration: '30 min', level: 'advanced' },
      ],
    },
  ],
};

// Export all courses
export const allTestManagementCourses = [
  basicTestManagementCourse,
  intermediateTestManagementCourse,
  advancedTestManagementCourse,
];
