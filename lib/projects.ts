export const projects = [
  {
    id: 1,
    title: 'Design Document to 3D',
    description: 'A web-based application that converts 2D engineering drawings and design documents into interactive 3D models using artificial intelligence.',
    category: 'Digital Solution Development',
    problemStatement: [
      'Manual 3D modeling from 2D drawings is a major bottleneck, consuming thousands of man-hours and delaying project timelines.',
      'Human error and misinterpretation of complex 2D schematics lead to costly rework and inaccurate 3D representations.',
      'High licensing costs for professional CAD software create a barrier for many smaller firms, students, and individual designers.'
    ],
    solution: 'Our application employs a sophisticated AI engine that intelligently interprets 2D drawings. For conceptual designs, it provides instant 3D models. For technical blueprints, it uses a two-step process: first, it analyzes multiple views to build a deep contextual understanding, then it generates a precise, engineering-grade 3D model, ensuring accuracy and saving significant time.',
    benefits: [
      'Reduce design and modeling time by up to 80%.',
      'Improve model accuracy and reduce rework by minimizing human error.',
      'Democratize 3D modeling with an accessible, web-based platform.',
      'Enable rapid prototyping and design validation.'
    ],
    features: ['Generative Design', 'Dual-Workflow Architecture', 'Interactive 3D Rendering'],
    imageUrl: '/assets/kumpan-electric-SYo5eazBrls-unsplash.jpg', // Abstract 3D/geometric shapes
  },
  {
    id: 2,
    title: 'Automated CAD to PDF Conversion',
    description: 'A multi-stage AI pipeline to automate the conversion of CAD drawings (DWG, DXF) into high-quality, repaired PDF documents.',
    category: 'Digital Solution Development',
    problemStatement: [
      'CAD files often suffer from corruption or geometric inaccuracies.',
      'Standard conversions can lead to a loss of critical information like layers and annotations.',
      'Manually converting and verifying large batches of drawings is not scalable.'
    ],
    solution: 'Our solution is a robust, multi-stage pipeline. It begins by repairing corrupted DXF files to ensure a clean foundation. An AI agent then analyzes the segmented geometry and text to understand the drawing\'s content intelligently. Finally, it reconstructs a high-fidelity PDF that preserves the visual and logical integrity of the original CAD file, making it perfect for archiving and sharing.',
    benefits: [
      'Ensure 100% conversion success rate with automated file repair.',
      'Preserve all critical drawing data, including layers and metadata.',
      'Scale conversion processes for thousands of files effortlessly.',
      'Improve document quality and reliability for stakeholders.'
    ],
    features: ['DXF Repair', 'AI-Agent Analysis', 'High-Fidelity Reconstruction'],
    imageUrl: '/assets/compagnons-AQTA5E6mCNU-unsplash.jpg', // Technical drawing/blueprint
  },
  {
    id: 3,
    title: 'CodeLens AI',
    description: 'A full-stack code quality and security analysis platform that combines SonarQube with Gemini AI-driven insights.',
    category: 'Digital Quality Assurance',
    problemStatement: [
      'Developers are overwhelmed by a high volume of "noise" from static analysis tools, making it hard to find critical bugs.',
      'Raw issue reports from tools like SonarQube lack the context and actionable guidance needed for efficient remediation.',
      'Managing code quality across multiple projects and teams with fragmented tools is complex and inefficient.'
    ],
    solution: 'CodeLens AI acts as an intelligent layer on top of SonarQube. It uses Gemini AI to analyze, filter, and prioritize findings, distinguishing critical vulnerabilities from minor code smells. It provides developers with clear, actionable recommendations and code examples directly within their workflow, transforming code quality management from a reactive chore to a proactive, intelligent process.',
    benefits: [
      'Reduce "analysis noise" by over 70%, focusing teams on critical issues.',
      'Accelerate remediation with AI-generated, context-aware suggestions.',
      'Gain a unified, real-time view of code health across the organization.',
      'Improve overall application security and reduce technical debt.'
    ],
    features: ['AI-Powered Prioritization', 'Actionable Recommendations', 'Unified Dashboard'],
    imageUrl: '/assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg', // Code on a screen
  },
  {
    id: 4,
    title: 'Agentic CAD to Creo',
    description: 'An automated, AI-driven QA and Healing Pipeline to convert foreign CAD formats into PTC Creo, ensuring model integrity.',
    category: 'Digital Solution Development',
    problemStatement: [
      'Converting multi-format CAD files into Creo often introduces topological errors and feature failures.',
      'Manual inspection and repair of converted models is a major bottleneck, leading to high costs and inconsistent quality.',
      'There is no deterministic way to measure the success of a CAD conversion.'
    ],
    solution: 'This system implements a fully automated OODA Loop (Observe-Orient-Decide-Act). It performs pre- and post-conversion scans, orients itself by categorizing issues, uses a Gemini-powered engine to decide on the best healing strategy, and acts by programmatically executing Creo macros. This closed-loop system ensures every conversion is validated, healed, and scored for quality without human intervention.',
    benefits: [
      'Automate over 95% of manual CAD healing tasks.',
      'Establish a consistent, measurable quality standard for all conversions.',
      'Reduce costs associated with manual labor and specialized software.',
      'Accelerate product development cycles by eliminating conversion bottlenecks.'
    ],
    features: ['Automated OODA Loop', 'AI-Powered Healing', 'Real ModelCHECK Diagnostics'],
    imageUrl: '/assets/thisisengineering-hoivM01c-vg-unsplash.jpg', // Engineering/manufacturing
  },
  {
    id: 5,
    title: 'Enterprise Document Intelligence',
    description: 'A centralized Document Management System with an integrated AI Assistant to enhance knowledge sharing and compliance.',
    category: 'Digital Business Automation',
    problemStatement: [
      'Critical Standard Operating Procedures (SOPs) and safety manuals are scattered across disparate systems, creating information silos.',
      'New employees face a steep learning curve, struggling to find and understand complex procedures, which poses safety risks.',
      'Tracking compliance and ensuring the entire workforce is updated with the latest procedures is a constant, manual struggle.'
    ],
    solution: 'We developed a centralized "single source of truth" for all of an organization\'s operational documents. The integrated AI Assistant allows any employee to ask questions in natural language (e.g., "What are the safety steps for operating machine X?") and receive instant, accurate answers from the official documentation. The system also automates training management and SOP renewal notifications.',
    benefits: [
      'Provide instant access to critical information, reducing search time from hours to seconds.',
      'Improve workplace safety and operational compliance.',
      'Accelerate onboarding and training for new employees.',
      'Create a fully auditable trail for all document interactions.'
    ],
    features: ['AI-Powered Q&A', 'Centralized Repository', 'Training & Certification Management'],
    imageUrl: '/assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg', // People collaborating/documents
  },
  {
    id: 6,
    title: 'Vendor Performance Analytics',
    description: 'A comprehensive dashboard to monitor, manage, and analyze the performance of contract workers and vendors.',
    category: 'Digital Business Automation',
    problemStatement: [
      'Evaluating vendor performance is subjective and inconsistent due to a lack of centralized, standardized data.',
      'Poor visibility into real-time worker attendance and safety compliance creates operational and financial risks.',
      'Delayed, gut-feel decisions about contract renewals and vendor selection lead to inefficiencies and higher costs.'
    ],
    solution: 'The dashboard provides a data-driven, holistic view of vendor performance. It is built on a "three-pillar" evaluation framework—Contract, Performance, and Financials—that tracks everything from KPIs to safety incidents in real-time. Hierarchical reporting allows for analysis at every level, from individual contracts to the entire organization, enabling proactive and strategic decision-making.',
    benefits: [
      'Enable objective, data-driven vendor evaluation.',
      'Gain real-time visibility into workforce performance and safety.',
      'Reduce operational risks and improve financial control.',
      'Strengthen negotiation power with vendors through concrete data.'
    ],
    features: ['Three-Pillar Evaluation', 'Real-time Analytics', 'Hierarchical Reporting'],
    imageUrl: '/assets/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg', // Dashboard/Analytics
  },
  {
    id: 7,
    title: 'AI SDLC',
    description: 'An AI-powered software delivery platform that orchestrates the full SDLC, from project intake and Jira planning to coding, testing, security checks, and release review.',
    category: 'AI Project Automation',
    problemStatement: [
      'Software teams spend too much time coordinating project setup, issue creation, and handoffs across planning, coding, QA, and security.',
      'Delivery workflows are often fragmented across multiple tools, making it difficult to keep sprint status, implementation progress, and approvals in sync.',
      'Manual coordination slows down releases and makes it harder to enforce consistent quality gates across projects.'
    ],
    solution: 'AI SDLC brings the entire delivery lifecycle into one workflow. It creates and manages projects, links Jira planning, tracks future sprints, coordinates coding and testing agents, validates security checkpoints, and surfaces the current project state in a single dashboard. The result is a repeatable, transparent, and AI-assisted delivery process that helps teams move from idea to release faster.',
    benefits: [
      'Standardize project delivery across planning, coding, testing, and security review.',
      'Reduce manual handoffs by connecting Jira, GitHub, and agent workflows in one system.',
      'Improve traceability with live project status and sprint-level visibility.',
      'Accelerate delivery while preserving quality gates and review checkpoints.'
    ],
    features: ['Project Intake', 'Jira Planning', 'Coding Orchestration', 'Testing Gates', 'Security Review', 'GitHub Sync'],
    imageUrl: '/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg',
  },
];

export type Project = typeof projects[0];
