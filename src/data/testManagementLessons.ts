// Test Management & Leadership Learning Structure
// For Test Managers, Sr. Engineering Managers, and Heads of QA

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

// FOR BEGINNERS: Test Manager Leadership (Intermediate Level for Current Test Managers)
// Target: Test Managers wanting to skill up on Agile and Cross-Functional Test Management
export const basicTestManagementCourse: Course = {
  id: 'basic-test-management',
  title: 'Test Manager Leadership in Agile',
  description: 'For current Test Managers: Lead teams effectively with engineering, master Agile test management, and excel in cross-functional collaboration',
  sections: [
    {
      id: 'tm-section-1-agile-leadership',
      title: 'Section 1: Agile Test Leadership Fundamentals (12 lessons)',
      description: 'Transform from traditional test management to Agile leadership',
      lessons: [
        { id: 'tm-basic-001', title: 'Transitioning from Waterfall to Agile Test Leadership', duration: '45 min', level: 'basic', isFree: true },
        { id: 'tm-basic-002', title: 'The Test Manager Role in Scrum Teams', duration: '40 min', level: 'basic', isFree: true },
        { id: 'tm-basic-003', title: 'Building Trust with Development Teams', duration: '42 min', level: 'basic', isFree: true },
        { id: 'tm-basic-004', title: 'Influencing Without Authority in Agile', duration: '38 min', level: 'basic', isFree: true },
        { id: 'tm-basic-005', title: 'Sprint Planning: Test Manager Contributions', duration: '45 min', level: 'basic', isFree: true },
        { id: 'tm-basic-006', title: 'Managing Testing in Two-Week Sprints', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-007', title: 'Quality Advocacy in Daily Standups', duration: '35 min', level: 'basic' },
        { id: 'tm-basic-008', title: 'Backlog Refinement: Testing Perspective', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-009', title: 'Definition of Done: Quality Criteria', duration: '38 min', level: 'basic' },
        { id: 'tm-basic-010', title: 'Sprint Retrospectives for Test Improvement', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-011', title: 'Managing Technical Debt in Testing', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-012', title: 'Continuous Improvement Culture', duration: '42 min', level: 'basic' },
      ],
    },
    {
      id: 'tm-section-2-cross-functional',
      title: 'Section 2: Cross-Functional Collaboration (14 lessons)',
      description: 'Work effectively with developers, DevOps, product owners, and stakeholders',
      lessons: [
        { id: 'tm-basic-013', title: 'Partnering with Development Leads', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-014', title: 'Test Manager and Product Owner Synergy', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-015', title: 'Collaborating with DevOps Engineers', duration: '48 min', level: 'basic' },
        { id: 'tm-basic-016', title: 'Working with UX/Design Teams', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-017', title: 'Business Analyst Collaboration', duration: '38 min', level: 'basic' },
        { id: 'tm-basic-018', title: 'Release Manager Coordination', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-019', title: 'Support Team Knowledge Transfer', duration: '35 min', level: 'basic' },
        { id: 'tm-basic-020', title: 'Managing Stakeholder Expectations', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-021', title: 'Facilitating Three Amigos Sessions', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-022', title: 'Cross-Team Dependency Management', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-023', title: 'Building Quality Communities of Practice', duration: '38 min', level: 'basic' },
        { id: 'tm-basic-024', title: 'Effective Communication Across Teams', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-025', title: 'Conflict Resolution Between Teams', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-026', title: 'Creating Shared Quality Ownership', duration: '42 min', level: 'basic' },
      ],
    },
    {
      id: 'tm-section-3-team-building',
      title: 'Section 3: Building High-Performing QA Teams (14 lessons)',
      description: 'Hire, develop, and retain top QA talent',
      lessons: [
        { id: 'tm-basic-027', title: 'Hiring QA Engineers: Interview Strategies', duration: '50 min', level: 'basic' },
        { id: 'tm-basic-028', title: 'Onboarding New QA Team Members', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-029', title: 'Setting Clear Performance Expectations', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-030', title: 'One-on-One Meeting Best Practices', duration: '38 min', level: 'basic' },
        { id: 'tm-basic-031', title: 'Providing Constructive Feedback', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-032', title: 'Career Development Conversations', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-033', title: 'Skill Gap Analysis and Training Plans', duration: '48 min', level: 'basic' },
        { id: 'tm-basic-034', title: 'Mentoring Junior QA Engineers', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-035', title: 'Managing Remote QA Teams', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-036', title: 'Team Motivation and Engagement', duration: '40 min', level: 'basic' },
        { id: 'tm-basic-037', title: 'Delegation and Empowerment', duration: '38 min', level: 'basic' },
        { id: 'tm-basic-038', title: 'Performance Reviews and Appraisals', duration: '50 min', level: 'basic' },
        { id: 'tm-basic-039', title: 'Handling Underperformance', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-040', title: 'Retaining Top QA Talent', duration: '42 min', level: 'basic' },
      ],
    },
    {
      id: 'tm-section-4-test-strategy',
      title: 'Section 4: Modern Test Strategy Design (12 lessons)',
      description: 'Create and execute effective test strategies in Agile environments',
      lessons: [
        { id: 'tm-basic-041', title: 'Risk-Based Test Strategy in Agile', duration: '48 min', level: 'basic' },
        { id: 'tm-basic-042', title: 'Test Pyramid Implementation', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-043', title: 'Shift-Left Testing Approach', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-044', title: 'Continuous Testing in CI/CD', duration: '50 min', level: 'basic' },
        { id: 'tm-basic-045', title: 'Test Environment Strategy', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-046', title: 'Test Data Management Strategy', duration: '48 min', level: 'basic' },
        { id: 'tm-basic-047', title: 'Automation Strategy and Roadmap', duration: '52 min', level: 'basic' },
        { id: 'tm-basic-048', title: 'Performance Testing Integration', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-049', title: 'Security Testing in Sprints', duration: '48 min', level: 'basic' },
        { id: 'tm-basic-050', title: 'Mobile Testing Strategy', duration: '42 min', level: 'basic' },
        { id: 'tm-basic-051', title: 'API Testing Strategy', duration: '45 min', level: 'basic' },
        { id: 'tm-basic-052', title: 'Regression Strategy Optimization', duration: '48 min', level: 'basic' },
      ],
    },
  ],
};

// FOR PROFESSIONALS: Sr. Engineering Manager Leadership
// Target: Sr. Test Managers upskilling to Engineering Leadership
export const intermediateTestManagementCourse: Course = {
  id: 'intermediate-test-management',
  title: 'Sr. Engineering Manager Leadership',
  description: 'For Sr. Test Managers: Master day-to-day engineering leadership, manage multiple teams, drive technical excellence, and lead organizational change',
  sections: [
    {
      id: 'tm-section-5-eng-leadership',
      title: 'Section 5: Engineering Leadership Fundamentals (14 lessons)',
      description: 'Transition from test management to engineering leadership',
      lessons: [
        { id: 'tm-int-001', title: 'Sr. Engineering Manager Role Overview', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-002', title: 'Managing Multiple QA Teams', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-003', title: 'Technical Decision Making at Scale', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-004', title: 'Architecture Reviews and Quality Gates', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-005', title: 'Engineering Excellence Standards', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-006', title: 'Leading Technical Initiatives', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-007', title: 'Managing Technical Debt at Scale', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-008', title: 'Engineering Roadmap Planning', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-009', title: 'Code Review and Quality Processes', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-010', title: 'Incident Management and On-Call', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-011', title: 'Production Support Leadership', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-012', title: 'Release Management Excellence', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-013', title: 'Engineering Metrics and KPIs', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-014', title: 'Technical Debt Reduction Strategies', duration: '52 min', level: 'intermediate' },
      ],
    },
    {
      id: 'tm-section-6-people-scale',
      title: 'Section 6: People Leadership at Scale (14 lessons)',
      description: 'Lead managers, senior engineers, and cross-functional teams',
      lessons: [
        { id: 'tm-int-015', title: 'Managing Other Managers', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-016', title: 'Skip-Level Meetings Best Practices', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-017', title: 'Building Leadership Pipelines', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-018', title: 'Succession Planning for Key Roles', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-019', title: 'Managing Senior and Staff Engineers', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-020', title: 'Organizational Design for QA', duration: '58 min', level: 'intermediate' },
        { id: 'tm-int-021', title: 'Team Topology and Structure', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-022', title: 'Hiring at Scale: Building Pipelines', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-023', title: 'Compensation and Promotion Decisions', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-024', title: 'Performance Calibration Sessions', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-025', title: 'Managing High Performers', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-026', title: 'Performance Improvement Plans', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-027', title: 'Exit Conversations and Offboarding', duration: '42 min', level: 'intermediate' },
        { id: 'tm-int-028', title: 'Building Diverse and Inclusive Teams', duration: '55 min', level: 'intermediate' },
      ],
    },
    {
      id: 'tm-section-7-program-mgmt',
      title: 'Section 7: Program and Project Management (13 lessons)',
      description: 'Manage complex programs across multiple teams and stakeholders',
      lessons: [
        { id: 'tm-int-029', title: 'Program Management for QA Leaders', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-030', title: 'Multi-Team Coordination Strategies', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-031', title: 'Dependency Management at Scale', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-032', title: 'Resource Allocation Across Teams', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-033', title: 'Timeline and Deadline Management', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-034', title: 'Risk Management and Mitigation', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-035', title: 'Stakeholder Reporting and Updates', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-036', title: 'Executive Status Updates', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-037', title: 'Managing Scope Creep', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-038', title: 'Cross-Team Retrospectives', duration: '42 min', level: 'intermediate' },
        { id: 'tm-int-039', title: 'Program Metrics and Dashboards', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-040', title: 'Vendor and Contractor Management', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-041', title: 'Budget Planning and Tracking', duration: '58 min', level: 'intermediate' },
      ],
    },
    {
      id: 'tm-section-8-transformation',
      title: 'Section 8: Driving Technical Transformation (13 lessons)',
      description: 'Lead organizational change and technical modernization',
      lessons: [
        { id: 'tm-int-042', title: 'Leading DevOps Transformation', duration: '58 min', level: 'intermediate' },
        { id: 'tm-int-043', title: 'Cloud Migration Test Strategy', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-044', title: 'Microservices Testing Architecture', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-045', title: 'Platform Engineering for QA', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-046', title: 'Test Infrastructure as Code', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-047', title: 'Containerization and Testing', duration: '48 min', level: 'intermediate' },
        { id: 'tm-int-048', title: 'Kubernetes Testing Strategies', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-049', title: 'AI-Assisted Test Automation', duration: '58 min', level: 'intermediate' },
        { id: 'tm-int-050', title: 'Observability and Monitoring', duration: '50 min', level: 'intermediate' },
        { id: 'tm-int-051', title: 'Chaos Engineering Implementation', duration: '55 min', level: 'intermediate' },
        { id: 'tm-int-052', title: 'Feature Flag Testing Strategies', duration: '45 min', level: 'intermediate' },
        { id: 'tm-int-053', title: 'Production Testing Best Practices', duration: '52 min', level: 'intermediate' },
        { id: 'tm-int-054', title: 'Technical Innovation Leadership', duration: '55 min', level: 'intermediate' },
      ],
    },
  ],
};

// FOR PRACTITIONERS: Head of QA / VP of Quality Leadership
// Target: Leading Test Managers and Sr. Engineering Managers, C-Suite Communications
export const advancedTestManagementCourse: Course = {
  id: 'advanced-test-management',
  title: 'Head of QA & VP Quality Leadership',
  description: 'For Heads of QA: Lead test managers and engineering managers, executive communications, budget management, organizational strategy, and C-suite presentations',
  sections: [
    {
      id: 'tm-section-9-executive-leadership',
      title: 'Section 9: Executive QA Leadership (14 lessons)',
      description: 'Lead QA at the organizational level, report to C-suite',
      lessons: [
        { id: 'tm-adv-001', title: 'Head of QA Role and Responsibilities', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-002', title: 'Building the QA Vision and Mission', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-003', title: 'QA Strategic Planning: 1-3-5 Year', duration: '65 min', level: 'advanced' },
        { id: 'tm-adv-004', title: 'Organizational QA Maturity Assessment', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-005', title: 'Getting a Seat at the Executive Table', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-006', title: 'Building Executive Credibility', duration: '52 min', level: 'advanced' },
        { id: 'tm-adv-007', title: 'CTO/CEO Communication Strategies', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-008', title: 'Board-Level Quality Reporting', duration: '65 min', level: 'advanced' },
        { id: 'tm-adv-009', title: 'Quarterly Business Reviews (QBR)', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-010', title: 'Annual Quality Strategy Presentations', duration: '62 min', level: 'advanced' },
        { id: 'tm-adv-011', title: 'Crisis Communication and Management', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-012', title: 'Industry Conference Speaking', duration: '50 min', level: 'advanced' },
        { id: 'tm-adv-013', title: 'Thought Leadership and Brand Building', duration: '52 min', level: 'advanced' },
        { id: 'tm-adv-014', title: 'External Partnership Development', duration: '55 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-10-budget-resources',
      title: 'Section 10: Budget and Resource Management (14 lessons)',
      description: 'Manage multi-million dollar QA budgets, headcount, and resources',
      lessons: [
        { id: 'tm-adv-015', title: 'Annual QA Budget Planning', duration: '65 min', level: 'advanced' },
        { id: 'tm-adv-016', title: 'CapEx vs OpEx Budget Strategy', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-017', title: 'Headcount Planning and Forecasting', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-018', title: 'Tool and Platform Investment Decisions', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-019', title: 'Vendor Selection and Negotiations', duration: '65 min', level: 'advanced' },
        { id: 'tm-adv-020', title: 'Outsourcing vs In-House Decisions', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-021', title: 'Cost Center Optimization', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-022', title: 'ROI Presentation to Executives', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-023', title: 'Cost of Quality Metrics and Analysis', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-024', title: 'Budget Defense and Justification', duration: '62 min', level: 'advanced' },
        { id: 'tm-adv-025', title: 'Resource Allocation Across Divisions', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-026', title: 'Offshore and Nearshore Strategy', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-027', title: 'Contract Negotiations and SLAs', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-028', title: 'Financial Reporting and Forecasting', duration: '58 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-11-org-metrics',
      title: 'Section 11: Organizational Metrics and KPIs (14 lessons)',
      description: 'Define, track, and present quality metrics across the organization',
      lessons: [
        { id: 'tm-adv-029', title: 'Building the QA Metrics Framework', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-030', title: 'Executive Dashboard Design', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-031', title: 'Automation Coverage and ROI Metrics', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-032', title: 'Defect Metrics: Escape Rate, MTTR', duration: '52 min', level: 'advanced' },
        { id: 'tm-adv-033', title: 'Release Quality Scorecards', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-034', title: 'Team Productivity Metrics', duration: '50 min', level: 'advanced' },
        { id: 'tm-adv-035', title: 'Customer Impact Metrics', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-036', title: 'Technical Health Indicators', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-037', title: 'Sprint and Release Velocity Tracking', duration: '52 min', level: 'advanced' },
        { id: 'tm-adv-038', title: 'Trend Analysis and Forecasting', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-039', title: 'Benchmark Comparisons Industry', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-040', title: 'OKR Setting for QA Organizations', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-041', title: 'Presenting Data to Non-Technical Execs', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-042', title: 'Storytelling with Quality Data', duration: '52 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-12-people-org',
      title: 'Section 12: Organizational People Leadership (14 lessons)',
      description: 'Lead leaders, performance management, and organizational culture',
      lessons: [
        { id: 'tm-adv-043', title: 'Leading Test Managers Effectively', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-044', title: 'Coaching Sr. Engineering Managers', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-045', title: 'Building Leadership Culture', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-046', title: 'Annual Performance Review Process', duration: '65 min', level: 'advanced' },
        { id: 'tm-adv-047', title: 'Calibration and Ranking Sessions', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-048', title: 'Promotion and Compensation Strategy', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-049', title: 'Conflict Resolution at Leadership Level', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-050', title: 'Negotiation Skills for QA Leaders', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-051', title: 'Building Psychological Safety', duration: '52 min', level: 'advanced' },
        { id: 'tm-adv-052', title: 'Change Management at Scale', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-053', title: 'Reorganization and Restructuring', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-054', title: 'Layoffs and Difficult Conversations', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-055', title: 'Succession Planning Org-Wide', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-056', title: 'Mentoring Future QA Leaders', duration: '52 min', level: 'advanced' },
      ],
    },
    {
      id: 'tm-section-13-strategy-innovation',
      title: 'Section 13: Strategic Innovation in Cloud and AI Era (14 lessons)',
      description: 'Lead QA transformation in cloud-native and AI-driven environments',
      lessons: [
        { id: 'tm-adv-057', title: 'QA Strategy in Cloud-Native Era', duration: '65 min', level: 'advanced' },
        { id: 'tm-adv-058', title: 'AI/ML Impact on Testing Organizations', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-059', title: 'GenAI Tools for QA Productivity', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-060', title: 'Building AI-Augmented QA Teams', duration: '62 min', level: 'advanced' },
        { id: 'tm-adv-061', title: 'Platform Engineering for Quality', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-062', title: 'Shift-Right and Production Testing', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-063', title: 'Chaos Engineering at Scale', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-064', title: 'Observability-Driven Development', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-065', title: 'Zero-Downtime Deployment Testing', duration: '55 min', level: 'advanced' },
        { id: 'tm-adv-066', title: 'Multi-Cloud Testing Strategy', duration: '58 min', level: 'advanced' },
        { id: 'tm-adv-067', title: 'Security and Compliance Leadership', duration: '62 min', level: 'advanced' },
        { id: 'tm-adv-068', title: 'Sustainability in QA Operations', duration: '50 min', level: 'advanced' },
        { id: 'tm-adv-069', title: 'Future of QA: 5-Year Vision', duration: '60 min', level: 'advanced' },
        { id: 'tm-adv-070', title: 'Building Your QA Leadership Legacy', duration: '55 min', level: 'advanced' },
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
