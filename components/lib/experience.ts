import type { Experience } from "./types";

export const experience: Array<Experience> = [
  {
    startMonth: "01",
    startYear: 2026,
    endMonth: "04",
    endYear: 2026,
    position: "Software Engineering Intern",
    company: "RBC Borealis",
    description:
      "Event Engine — Led development of two features for an internal agentic platform. Spent most of the term on anomaly detection: a high-latency publishing service, a low-latency LangGraph agent, an outbox connecting the two, and Isolation Forest model training.",
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
    position: "Software Engineering Intern",
    company: "Royal Bank of Canada (RBC)",
    description:
      "Platform Engineering — Took a batch service for event metadata (100+ source systems) to production: a Postgres audit layer replacing marker-file tracking, run numbers per file type and day for idempotent reprocessing, and a nightly job to retry failures. Also owned an internal billing service from design to deploy.",

    // "Built and maintained core batch-processing systems and internal services supporting data ingestion and operational workflows.",
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
    position: "Software Engineering Intern",
    company: "Royal Bank of Canada (RBC)",
    description: `Term 1: Enterprise Data Architecture — Built a text-to-SQL proof of concept: offline table summaries embedded into pgvector, vector search over candidates, and a rerank pass to fit a limited context window.\n
      Term 2: Incubator — Built the table extraction stage of a document parsing pipeline: docx to HTML to JSON, a styling-weighted heuristic for table titles, and a TF-IDF matcher in place of a per-step model call.
      `,
    technologies: ["Python", "LangChain", "PostgreSQL", "pgvector"],
    websiteUrl: "https://www.rbc.com",
    logoPath: "/rbclogo.jpeg",
  },
  {
    startMonth: "09",
    startYear: 2023,
    endMonth: "11",
    endYear: 2024,
    position: "Software Developer",
    company: "Computing Students Hub at York University",
    description:
      "Built the frontend for a hackathon platform used by 500+ students: dashboards, landing pages, and reusable components (calendars, paginated charts, Zod-validated forms).",
    technologies: ["TypeScript", "React", "Next.js", "Zod"],
    websiteUrl: "https://2024.ctrlhackdel.com/",
    logoPath: "/cshublogo.jpeg",
  },
];
