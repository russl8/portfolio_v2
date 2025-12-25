import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "MiniTS",
    description:
      "TypeScript-inspired language with an online IDE supporting basic inheritance, control flow, lists, static type-checking, scoping, variable shadowing. Uses ANTLR for AST-based semantic & syntactic analysis.",
    websiteUrl: "https://minits-ui.vercel.app/",
    technologies: ["Java", "Spring Boot","TypeScript","React", "ANTLR"],
  },
  {
    name: "Workout Tracker",
    description:
      "Personal workout tracker with streak visualizations, fine-tuned LLM (OpenAI) feedback, and caching/rate-limiting.",
    websiteUrl: "https://github.com/russl8/untitled/",
    technologies: ["Next.js", "TypeScript", "Python","MongoDB", "Redis", "S3"],
  },

  {
    name: "Video Processing Service",
    description:
      "Cloud-native video upload/playback service using Pub/Sub and Cloud Run to trigger an automated video transcoding (to 360p) task.",
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
      "Blog site supporting authenticated public/private post creation + liking and commenting.",
    websiteUrl: "https://github.com/russl8/BeGrate",
    technologies: ["JavaScript","React", "Express", "MongoDB"],
  },
  {
    name: "YorkRMC",
    description:
      "Chrome extension to scrape RateMyCourses.io for course reviews and displays them on my university's respective course page.",
    websiteUrl: "https://chromewebstore.google.com/detail/yorkrmc/idmpighcjfjokifedbmlnmlfdjedidfb",
    technologies: ["JavaScript", "Express"],
  },
];
