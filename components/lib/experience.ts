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
      "Event Engine - Building multi-agent pipelines with LangGraph",
    technologies: ["Python", "Kafka", "LangGraph"],
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
      "Platform Engineering — Took a batch processing system for event count metadata to production, adding features such as audit trails, backfills, reprocessing, and soft deletions. Also took a Python-based chargeback document automation from 0→1, leading design, MVP implementation, deployment, and PIV.",

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
    startMonth: "09",
    startYear: 2024,
    endMonth: "12",
    endYear: 2024,
    position: "Software Engineering Intern",
    company: "RBC Borealis",
    description:
      "Incubator - Used locally hosted LLMs to automate SOP document extraction into structured components (e.g., mapping content to JSON categories).",
    technologies: ["Python", "AWS SageMaker"],
    websiteUrl: "https://www.rbcborealis.com",
    logoPath: "/rbcborealislogo.jpeg",
  },
  {
    startMonth: "05",
    startYear: 2024,
    endMonth: "08",
    endYear: 2024,
    position: "Software Engineering Intern",
    company: "Royal Bank of Canada (RBC)",
    description:
      "Enterprise Data Architecture - Leveraged vector databases to build a proof of concept for a text-to-SQL application.",
    technologies: ["Python", "LangChain", "PostgreSQL"],
    websiteUrl: "https://www.rbc.com",
    logoPath: "/rbclogo.jpeg",
  },
  {
    startMonth: "09",
    startYear: 2023,
    endMonth: "11",
    endYear: 2024,
    position: "Software Developer",
    company: "Computing Students Hub' at York University",
    description:
      "Built and maintained internal web tools supporting student services, including a social platform, hackathon landing pages, and dashboards used by 400+ users.",
    technologies: ["TypeScript", "React", "Next.js"],
    websiteUrl: "https://2024.ctrlhackdel.com/",
    logoPath: "/cshublogo.jpeg",
  },
];
