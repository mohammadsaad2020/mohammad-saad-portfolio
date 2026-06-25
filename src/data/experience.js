// Professional experience timeline. Edit this file to update roles.
//
// Each bullet is { text, tags } where `tags` are the stack labels that bullet
// demonstrates. Clicking a tech pill in the UI filters the bullets down to the
// ones whose tags include it, so a recruiter can jump straight to the proof.
export const experience = [
  {
    id: 'protiviti',
    company: 'Protiviti',
    role: 'Senior Consultant, Data and AI Advisory',
    duration: 'September 2024 to Present',
    location: 'Dubai, United Arab Emirates',
    status: { variant: 'current', label: 'Current Role' },
    bullets: [
      {
        text: 'Assessed DevOps and CI/CD maturity across 30 applications at a leading GCC bank covering 7 pipeline lifecycle phases from planning through to monitoring',
        tags: ['DevOps', 'CI/CD'],
      },
      {
        text: 'Built Dynatrace observability solution for metrics, events, logs, and traces with automated trace ID propagation — cutting manual log correlation time from hours to minutes',
        tags: ['Dynatrace'],
      },
      {
        text: 'Designed SRE framework with SLA, SLO, and SLI definitions, error budget management, and monitoring blueprints across payment and banking systems',
        tags: ['SRE'],
      },
      {
        text: 'Defined 200 plus technical and business KPIs measuring deployment frequency, MTTR, test coverage, API response times, and system availability',
        tags: ['KPI Frameworks'],
      },
      {
        text: 'Designed event-driven microservices architecture to replace SFTP and XML batch processing, enabling real-time data exchange with financial institutions',
        tags: ['Microservices', 'XML Processing'],
      },
      {
        text: 'Led data architecture assessment for a 100 plus field XML schema, proposing optimised data models and Change Data Capture implementation for real-time synchronisation',
        tags: ['CDC', 'XML Processing'],
      },
      {
        text: 'Built standardised CI/CD pipelines using GitLab, Argo CD, SAST and DAST quality gates, and Nexus artifact management for hybrid VM and container environments',
        tags: ['CI/CD', 'GitLab', 'Argo CD'],
      },
      {
        text: 'Designed hybrid cloud deployment strategy maintaining local data residency compliance with full disaster recovery capability',
        tags: ['Hybrid Cloud'],
      },
      {
        text: 'Contributed RFP technical requirements covering system architecture, API specifications, security controls, and performance benchmarks for vendor evaluation',
        tags: [],
      },
    ],
    stack: [
      'Dynatrace',
      'GitLab',
      'Argo CD',
      'CI/CD',
      'SRE',
      'CDC',
      'Microservices',
      'Hybrid Cloud',
      'DevOps',
      'KPI Frameworks',
      'XML Processing',
    ],
  },
  {
    id: 'pwc',
    company: 'PwC',
    role: 'Data Engineer',
    duration: 'October 2021 to September 2024',
    location: 'Dubai, United Arab Emirates',
    status: null,
    bullets: [
      {
        text: 'Migrated multi-terabyte datasets to AWS S3 data lakes and RDS PostgreSQL using AWS Glue ETL jobs and EMR clusters with Apache Spark and PySpark',
        tags: ['AWS Glue', 'Amazon S3', 'Amazon EMR', 'Apache Spark', 'PySpark', 'PostgreSQL'],
      },
      {
        text: 'Delivered 99.9% data consistency across cloud and on-premises sources through automated quality monitoring, validation checks, and anomaly detection',
        tags: [],
      },
      {
        text: 'Automated ETL pipeline operations with custom Python scripts and AWS Step Functions, cutting manual intervention by 60% and data processing time by 40%',
        tags: ['Python', 'AWS Step Functions', 'EventBridge'],
      },
      {
        text: 'Maintained 99.5% system uptime using AWS CloudWatch with automated alerting for quality failures, processing errors, and performance degradation',
        tags: ['AWS CloudWatch'],
      },
      {
        text: 'Delivered daily operational reporting and statistical analysis using AWS Athena and custom PySpark scripts providing actionable insights for performance decisions',
        tags: ['AWS Athena', 'PySpark', 'SQL'],
      },
      {
        text: 'Built end-to-end pipeline observability with automated alerting covering data quality issues, processing failures, and performance problems',
        tags: ['AWS CloudWatch'],
      },
      {
        text: 'Used Pandas, NumPy, and AWS Wrangler to convert semi-structured inputs into structured outputs for downstream analytics',
        tags: ['Pandas', 'NumPy', 'AWS Wrangler'],
      },
      {
        text: 'Partnered with business stakeholders and product owners to translate data requirements into technical acceptance criteria and data quality standards',
        tags: [],
      },
    ],
    stack: [
      'AWS Glue',
      'Amazon S3',
      'Amazon EMR',
      'Apache Spark',
      'PySpark',
      'Python',
      'SQL',
      'AWS Athena',
      'AWS CloudWatch',
      'AWS Step Functions',
      'PostgreSQL',
      'Pandas',
      'NumPy',
      'AWS Wrangler',
      'EventBridge',
    ],
  },
];
