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
      "Built a couple of features for an internal agentic platform other engineers use day-to-day. Most of the term went into anomaly detection over a lot of Kafka traffic — some streaming services, a LangGraph agent, and swapping hand-rolled stats for an Isolation Forest.",
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
      "Took a proof-of-concept for tracking event movement across the bank and got it production-ready — a multithreaded batch service pulling metadata from a bunch of upstream systems, plus an audit layer so files could be safely reprocessed. Also built a small Python service that helps attribute billing.",
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
    description: `Term 1: Played around with text-to-SQL — vector search to find candidate tables, then a rerank pass.\n
      Term 2: Worked on document parsing for an automation project (now patent-pending) — mostly heuristics and some text vectorization to link references across documents.
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
      "Built dashboards and landing pages for a hackathon platform used by a few hundred students.",
    technologies: ["TypeScript", "React", "Next.js", "Zod"],
    websiteUrl: "https://2024.ctrlhackdel.com/",
    logoPath: "/cshublogo.jpeg",
  },
];
