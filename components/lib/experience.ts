import type { Experience } from "./types";

export const experience: Array<Experience> = [
  {
    startMonth: "01",
    startYear: 2027,
    endMonth: "04",
    endYear: 2027,
    position: "Software Engineer Intern",
    company: "Wealthsimple",
    description: "Incoming W27 :)",
    technologies: [],
    websiteUrl: "https://www.wealthsimple.com",
    logoPath: "/wealthsimplelogo.jpeg",
  },
  {
    startMonth: "01",
    startYear: 2026,
    endMonth: "04",
    endYear: 2026,
    position: "Software Engineer Intern",
    company: "RBC Borealis",
    description:
      "Built features for an internal agentic platform. Developed anomaly detection services across Kafka topics, including a LangGraph agent and an Isolation Forest model.",
    technologies: [
      "Python",
      "TypeScript",
      "Kafka",
      "LangGraph",
      "Redis",
      "scikit-learn",
    ],
    websiteUrl: "https://www.rbcborealis.com",
    logoPath: "/rbcborealislogo.jpeg",
  },
  {
    startMonth: "09",
    startYear: 2025,
    endMonth: "12",
    endYear: 2025,
    position: "Software Engineer Intern",
    company: "Royal Bank of Canada (RBC)",
    description:
      "Took an event-tracking proof-of-concept to production: a multithreaded batch service aggregating metadata from upstream systems, with an audit layer for idempotent reprocessing. Also built a billing attribution service.",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Spark",
      "PostgreSQL",
      "Python",
      "Hadoop",
    ],
    websiteUrl: "https://www.rbc.com",
    logoPath: "/rbclogo.jpeg",
  },
  {
    startMonth: "05",
    startYear: 2024,
    endMonth: "12",
    endYear: 2024,
    position: "Software Engineer Intern",
    company: "Royal Bank of Canada (RBC)",
    description: `Term 1: Built RAG-based text-to-SQL with vector search and a re-ranking stage.\n
      Term 2: Built document parsing algorithms for a patent-pending automation project.
      `,
    technologies: ["Python", "LangChain", "PostgreSQL", "pgvector"],
    websiteUrl: "https://www.rbc.com",
    logoPath: "/rbclogo.jpeg",
  },
  {
    startMonth: "01",
    startYear: 2024,
    endMonth: "11",
    endYear: 2024,
    position: "Software Developer",
    company: "Computing Students Hub at York University",
    description:
      "Built dashboards and landing pages for a hackathon platform.",
    technologies: ["TypeScript", "React", "Next.js", "Zod"],
    websiteUrl: "https://2024.ctrlhackdel.com/",
    logoPath: "/cshublogo.jpeg",
  },
];
