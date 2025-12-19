import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "MiniTS",
    description:
      "TypeScript-inspired language supporting classes, control flow, lists, and static type checking. Additionally, lexical scoping, variable shadowing, and AST-based semantic analysis.",
    websiteUrl: "",
    technologies: ["Java", "ANTLR"],
  },
  {
    name: "Untitled",
    description:
      "Workout tracker with streak visualizations, fine-tuned LLM (OpenAI) feedback, storage + auth, and caching/rate-limiting.",
    websiteUrl: "",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redis", "S3"],
  },

  {
    name: "Video Processing Service",
    description:
      "Cloud-native video upload/playback service leveraging Pub/Sub and Cloud Run to trigger automated 360p video transcoding.",
    websiteUrl: "",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Express",
      "Google Cloud Storage",
    ],
  },
  {
    name: "BeGrate",
    description:
      "Blog site supporting authenticated public/private post creation, as well as liking and commenting.",
    websiteUrl: "",
    technologies: ["React", "Express", "MongoDB"],
  },
  {
    name: "YorkRMC",
    description:
      "A Chrome extension that scrapes RateMyCourses.io and displays course reviews directly on university course page.",
    websiteUrl: "",
    technologies: ["JavaScript", "Express"],
  },
];
