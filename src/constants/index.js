export const myProjects = [
  {
    id: 1,
    title: "PHC Booking System",
    description:
      "A full-stack appointment booking system with role-based authentication for students, faculty, family members, and PHC staff — built under Prof. Dr. Romi Banerjee at IIT Jodhpur.",
    subDescription: [
      "Built a healthcare booking platform supporting 3 user roles and slot-management workflows.",
      "Prevented double-booking with atomic transactions and row-level locking.",
      "Optimized query performance by 50%+ and secured API endpoints with JWT authentication.",
    ],
    href: "https://github.com/sachdevaryan/phc_booking_system",
    logo: "",
    image: "/assets/projects/phc-booking.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Django", path: "/assets/logos/django.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Knowledge Base",
    description:
      "A hybrid RAG system with multi-document corpora ingestion and sub-2s streaming latency.",
    subDescription: [
      "Constructed hybrid RAG with FAISS, BM25, and Reciprocal Rank Fusion (k=60) to retrieve top 5 chunks from multi-document corpora.",
      "Exposed 8 FastAPI REST/SSE endpoints for PDF ingestion and Groq token streaming at sub-2s latency.",
      "Persisted FAISS indexes with 384-dim ONNX embeddings and deployed the React frontend on Vercel with FastAPI backend on Hugging Face.",
    ],
    href: "https://knowledgebase-phi-rosy.vercel.app/",
    logo: "",
    image: "/assets/projects/rag-assistant.jpg",
    tags: [
      { id: 1, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "TaskForge",
    description:
      "An async image-processing platform with containerized services, healthcheck-gated startup, and priority job queues.",
    subDescription: [
      "Developed an async image-processing platform with FastAPI, Celery, Redis, and PostgreSQL.",
      "Containerized services behind Nginx and engineered priority queues for sub-second job completion.",
      "Implemented exponential-backoff retries, dead-letter recovery, and idempotency guards.",
    ],
    href: "https://github.com/sachdevaryan/TaskForge",
    logo: "",
    image: "/assets/projects/taskforge.png",
    tags: [
      { id: 1, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 2, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 4, name: "React", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 4,
    title: "Movie Recommendation Web App",
    description:
      "An end-to-end ML-based full-stack movie recommendation web application with content-based filtering.",
    subDescription: [
      "Performed data cleaning, feature extraction, and Bag-of-Words vectorization, computing cosine similarity using NumPy, Pandas, and Scikit-Learn.",
      "Developed a Django + Django REST Framework backend and React frontend, exposing REST APIs for movie search and recommendations with CORS-enabled API integration.",
      "Deployed the application using Render (backend) and Vercel (frontend) with Git/GitHub version control.",
    ],
    href: "https://movie-recommender-jade-nine.vercel.app/",
    logo: "",
    image: "/assets/projects/movie-rec.jpg",
    tags: [
      { id: 1, name: "Django", path: "/assets/logos/django.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "Scikit-learn", path: "/assets/logos/python.svg" },
    ],
  },
  {
    id: 5,
    title: "LeetSense",
    description:
      "A Manifest V3 Chrome extension that brings real-time problem-solving support directly into the LeetCode interface, analyzing submitted code in-place.",
    subDescription: [
      "Injected content scripts into LeetCode's DOM to capture code submissions in real-time.",
      "Integrated Groq LLM API for sub-2-second latency code complexity analysis.",
      "Managed persistent extension state and background worker tasks with Chrome Storage APIs.",
    ],
    href: "https://github.com/sachdevaryan/lc_enhancer",
    logo: "",
    image: [
      "/assets/projects/leetsense.png",
      "/assets/projects/leetsense2.png"
    ],
    tags: [
      { id: 1, name: "Chrome Extension", path: "/assets/logos/chrome.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 4, name: "CSS3", path: "/assets/logos/css3.svg" },
    ],
  },
  {
    id: 6,
    title: "URL Shortener",
    description:
      "A simple URL shortener built to showcase production infrastructure and robust CI/CD automation rather than app complexity.",
    subDescription: [
      "Exposed async FastAPI endpoints paired with PostgreSQL via SQLAlchemy ORM.",
      "Containerized services behind Nginx and optimized with multi-stage Docker builds.",
      "Engineered automated GitHub Actions CI/CD pipelines testing against live DB containers and pushing to GHCR.",
    ],
    href: "https://github.com/sachdevaryan/url-shortener",
    logo: "",
    image: "/assets/projects/urlshortener.png",
    tags: [
      { id: 1, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 2, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 3, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 4, name: "Python", path: "/assets/logos/python.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/sachdevaryan",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-sachdeva-8ba334321/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_aryan__0701/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const education = [
  {
    title: "B.Tech in Chemical Engineering",
    job: "Indian Institute of Technology, Jodhpur",
    date: "2024 – 2028",
    contents: [
      "CGPA: 8.03 / 10",
      "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Probability & Statistics.",
      "Actively working on full-stack and ML projects alongside academics.",
    ],
  },
  {
    title: "Senior Secondary (Class XII)",
    job: "Montfort Sr. Sec. School, Roorkee",
    date: "2022 – 2024",
    contents: [
      "Aggregate: 95.6%",
      "Subjects: Physics, Chemistry, Mathematics, Computer Science, English.",
    ],
  },
];

export const socialProfiles = [
  {
    name: "LeetCode",
    username: "Aryan_Sachdeva01",
    href: "https://leetcode.com/u/Aryan_Sachdeva01/",
    color: "#FFA116",
    icon: "leetcode",
  },
  {
    name: "Codeforces",
    username: "aryan01001s",
    href: "https://codeforces.com/profile/aryan01001s",
    color: "#1F8ACB",
    icon: "codeforces",
  },
  {
    name: "GitHub",
    username: "sachdevaryan",
    href: "https://github.com/sachdevaryan",
    color: "#ffffff",
    icon: "github",
  },
  {
    name: "LinkedIn",
    username: "aryan-sachdeva-8ba334321",
    href: "https://www.linkedin.com/in/aryan-sachdeva-8ba334321/",
    color: "#0A66C2",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    username: "_aryan__0701",
    href: "https://www.instagram.com/_aryan__0701/",
    color: "#E1306C",
    icon: "instagram",
  },
];
