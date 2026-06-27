// Technical projects shown in the Projects section.
//
// To add a project: append a new object to this array following the same
// structure, save, and rebuild. The card renders automatically in the correct
// grid position with full styling and animation — no component, style, or
// navigation changes needed.
//
// Fields:
//   icon        — string matching a Lucide icon component name (resolved via a
//                 static lookup in Projects.jsx; add the icon there if new)
//   category    — text shown in the category pill
//   title       — card heading
//   description — card body text
//   tech        — array of strings rendered as tech pills
const projects = [
  {
    icon: 'Shield',
    category: 'Blockchain and Distributed Systems',
    title: 'Secure Data Storage Platform using Blockchain and IPFS',
    description:
      'Built a decentralised application enabling third-party developers to store user data with cryptographic security guarantees. The system uses Ethereum smart contracts combined with the InterPlanetary File System to implement a role-based access control layer that ensures data integrity, availability, and confidentiality without reliance on centralised storage providers. The architecture eliminates single points of failure while giving data owners granular control over who can read or write their records.',
    tech: [
      'Blockchain',
      'Ethereum',
      'IPFS',
      'Smart Contracts',
      'Role-based Access Control',
      'Decentralised Storage',
      'Cryptography',
      'Web3',
    ],
  },
  {
    icon: 'AlertTriangle',
    category: 'Machine Learning and Cybersecurity',
    title: 'Malicious Webpage Detection using Supervised Machine Learning',
    description:
      'Designed and built a machine learning pipeline for real-time malicious webpage classification. The system applies lexical chain analysis combined with Term Frequency-Inverse Document Frequency feature extraction to capture semantic patterns in URL structures and page content that distinguish malicious pages from legitimate ones. The supervised classification model was trained and validated against labelled datasets of known phishing and malware distribution pages, producing a detection system capable of flagging threats before they reach end users.',
    tech: [
      'Machine Learning',
      'Supervised Classification',
      'TF-IDF',
      'Lexical Chaining',
      'Feature Engineering',
      'NLP',
      'Cybersecurity',
      'Python',
    ],
  },
  {
    icon: 'Database',
    category: 'Big Data and Distributed Computing',
    title: 'Large-scale Census Validation Engine on Hadoop',
    description:
      'Engineered a distributed data processing application on Apache Hadoop to validate national identity enrolment data against census records at scale. The system ingests Aadhaar enrolment datasets across states and districts, processes them using MapReduce across a distributed cluster, and cross-references the outputs against census population data to surface statistical discrepancies, identifying potential duplicate records, unenrolled populations, and data integrity gaps at a granular geographic level. The project demonstrated the application of distributed computing principles to a real public sector data problem at significant volume.',
    tech: [
      'Apache Hadoop',
      'MapReduce',
      'Distributed Computing',
      'Big Data',
      'Data Validation',
      'Data Engineering',
      'HDFS',
      'Statistical Analysis',
    ],
  },
];

export default projects;
