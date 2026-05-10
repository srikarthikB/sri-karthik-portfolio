/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import pitwallImg from "./assets/images/pitwall-ss.png";
import idlImg from "./assets/images/idl-ss.png";

export const PROJECTS = [
  {
    id: "pitwall",
    name: "Pitwall F1 Analytics Platform",
    description: "A data-driven Formula 1 analytics platform to analyze driver performance, race pace, and strategy using real telemetry data.",
    ss: pitwallImg,
    github: "https://github.com/srikarthikB/f1-analytics",
    live: "https://pitwall-kar.vercel.app/",
    highlights: [
      "REST APIs built using FastAPI for sessions, laps, and race data",
      "Real-time telemetry analysis for driver performance insights",
      "Implemented consistency ranking, pace comparison, and stint analysis",
      "Interactive frontend for visualizing race strategies and trends",
      "Integrated external F1 data APIs for real-world datasets"
    ],
    featured: true,
  },
  {
    id: "digilib",
    name: "Interactive Digital Library",
    description: "A web-based digital library allowing users to browse and explore books interactively.",
    ss: idlImg,
    github: "https://github.com/srikarthikB/interactive-digital-library",
    live: "https://interactive-digital-library-1.onrender.com/",
    highlights: [
      "Backend logic implemented using Flask",
      "Dynamic content rendering with Jinja2",
      "Modular project structure",
      "Local data handling",
      "Deployed using Render"
    ],
  }
];

export const SKILLS = {
  languages: [
    { name: "Python", icon: "python-plain" },
    { name: "JavaScript", icon: "javascript-plain" },
    { name: "C", icon: "c-plain" },
  ],

  frontend: [
    { name: "HTML5", icon: "html5-plain" },
    { name: "CSS3", icon: "css3-plain" },
    { name: "Tailwind", icon: "tailwindcss-plain" },
  ],

  backend: [
    { name: "FastAPI", icon: "fastapi-plain" },
    { name: "Flask", icon: "flask-original" },
    { name: "SQLite", icon: "sqlite-plain" },
    { name: "MySQL", icon: "mysql-plain" },
  ],

  dataScience: [
    { name: "NumPy", icon: "numpy-plain" },
    { name: "Pandas", icon: "pandas-plain" },
  ],

  tools: [
    { name: "Git", icon: "git-plain" },
    { name: "GitHub", icon: "github-original" },
    { name: "VS Code", icon: "vscode-plain" },
  ]
};

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Vignan's Institute of Information Technology",
    period: "2024 – Present",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Narayana Junior College",
    period: "2022 – 2024",
  },
  {
    degree: "High School (10th Grade)",
    institution: "St. Ann's School",
    period: "2021 – 2022",
  },
];
