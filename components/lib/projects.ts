import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "MiniTS",
    description:
      "TypeScript-inspired language with an online IDE supporting basic inheritance, control flow, lists, static type-checking, scoping, variable shadowing. Uses ANTLR for AST-based semantic & syntactic analysis.",
    websiteUrl: "https://minits-ui.vercel.app/",
    technologies: ["Java", "Spring Boot","TypeScript","React", "ANTLR"],
    images: ["/minits_0.png", "/minits_1.png"],
  },
  {
    name: "Self-healing Anomaly Detection Service",
    description:"A platform featuring a mock data stream taking points at random from the AWS Cloudwatch Dataset with an Isolation Forest anomaly detection model that can auto-detect deviations in data distribution and has self-retraining capabilities.",
    websiteUrl: "https://github.com/russl8/serv-monitor",
    technologies: ["Python", "FastAPI", "Redis","scikit-learn", "TypeScript", "React"],
    images: ["/serv_monitor_0.png", "/serv_monitor_1.png"],
  },
  {
    name: "Workout Tracker",
    description:
      "Personal workout tracker with streak visualizations, fine-tuned LLM (OpenAI) feedback, and caching/rate-limiting.",
    websiteUrl: "https://github.com/russl8/untitled/",
    technologies: ["Next.js", "TypeScript", "Python","MongoDB", "Redis", "AWS S3"],
    images: [],
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
    images: ["/vid_service_0.png"],
  },
  {
    name: "BeGrate",
    description:
      "Blog site supporting authenticated public/private post creation + liking and commenting.",
    websiteUrl: "https://github.com/russl8/BeGrate",
    technologies: ["JavaScript","React", "Express", "MongoDB"],
    images: ["/begrate_0.png","/begrate_1.png","/begrate_2.png","/begrate_3.png"],
  },
  {
    name: "YorkRMC",
    description:
      "Chrome extension to scrape RateMyCourses.io for course reviews and displays them on my university's respective course page.",
    websiteUrl: "https://chromewebstore.google.com/detail/yorkrmc/idmpighcjfjokifedbmlnmlfdjedidfb",
    technologies: ["JavaScript", "Express"],
    images: ["/chrome_ext_0.png"],
  },
];
