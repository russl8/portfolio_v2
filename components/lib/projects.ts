import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "AI Workout Tracker",
    description:
      "A full-stack workout tracking platform with AI-driven feedback, interactive progress visualizations, and analytics comparing weekly performance against long-term trends. Designed to encourage consistency and optimize training decisions.",
    websiteUrl: "",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redis", "S3"],
  },
  {
    name: "MiniTS Compiler",
    description:
      "A compiler for a TypeScript-inspired language supporting classes, control flow, lists, and static type checking. Implements lexical scoping, variable shadowing, and AST-based semantic analysis.",
    websiteUrl: "",
    technologies: ["Java", "ANTLR"],
  },
  {
    name: "Video Processing Service",
    description:
      "A cloud-native video platform enabling authenticated users to upload and view videos. Automatically transcodes uploads to 360p using a serverless pipeline built on Google Cloud services.",
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
      "A responsive text-blogging platform where users record daily moments of gratitude. Supports public and private posts, likes, comments, and full CRUD functionality with authenticated access control.",
    websiteUrl: "",
    technologies: ["React", "Express", "MongoDB"],
  },
  {
    name: "YorkRMC",
    description:
      "A Chrome extension that scrapes RateMyCourses.io and displays course reviews directly on university course pages for faster, in-context access to student feedback.",
    websiteUrl: "",
    technologies: ["JavaScript"],
  },
];
