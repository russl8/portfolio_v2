import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "MiniTS",
    description:
      "TypeScript-inspired language with an online IDE supporting classes, control flow, lists, and static type checking. Additionally, lexical scoping, variable shadowing, and AST-based semantic analysis.",
    websiteUrl: "https://minits-ui.vercel.app/",
    technologies: ["Java", "Spring Boot","TypeScript","React", "ANTLR"],
  },
  {
    name: "Workout Tracker",
    description:
      "Featuring streak graph visualizations, fine-tuned LLM (OpenAI) feedback, storage + auth, and caching/rate-limiting.",
    websiteUrl: "https://github.com/russl8/untitled/",
    technologies: ["Next.js", "TypeScript", "Python","MongoDB", "Redis", "S3"],
  },

  {
    name: "Video Processing Service",
    description:
      "Cloud-native video upload/playback service leveraging Pub/Sub and Cloud Run to trigger automated 360p video transcoding.",
    websiteUrl: "https://github.com/russl8/vid-player",
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
    websiteUrl: "https://github.com/russl8/BeGrate",
    technologies: ["JavaScript","React", "Express", "MongoDB"],
  },
  {
    name: "YorkRMC",
    description:
      "A Chrome extension that scrapes RateMyCourses.io and displays course reviews directly on my university's course page.",
    websiteUrl: "https://chromewebstore.google.com/detail/yorkrmc/idmpighcjfjokifedbmlnmlfdjedidfb",
    technologies: ["JavaScript", "Express"],
  },
];
