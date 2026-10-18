import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "MiniTS",
    description:
      "A small statically-typed language. Features inheritance, functions, scoping, shadowing.",
    websiteUrl: "https://minits-ui.vercel.app/",
    technologies: ["Java", "Spring Boot","TypeScript","React", "ANTLR"],
    images: ["/minits_0.png", "/minits_1.png"],
  },
  {
    name: "Self-Retraining Anomaly Detection Service",
    description:"Watches a live metric stream through Redis and flags anomalies with an Isolation Forest, retraining itself when the data starts drifting.",
    websiteUrl: "https://github.com/russl8/serv-monitor",
    technologies: ["Python", "FastAPI", "Redis","scikit-learn", "TypeScript", "React"],
    images: ["/serv_monitor_0.png", "/serv_monitor_1.png"],
  },
  {
    name: "Video Processing Service",
    description:
      "Video service connected via pub/sub.",
    websiteUrl: "https://github.com/russl8/vid-player",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Express",
      "Google Cloud Storage",
      "Firebase",
    ],
    images: ["/vid_service_0.png"],
  },
  {
    name: "Traffic Sign Identifier",
    description:"A CNN that recognizes 43 kinds of road signs, trained on the GTSRB dataset.",
    websiteUrl: "https://github.com/russl8/traffic-sign-identifier",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    images: ["/traffic_0.png"],
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
