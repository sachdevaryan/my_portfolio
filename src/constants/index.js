export const myProjects = [
  {
    id: 1,
    title: "PHC Booking System",
    description:
      "A full-stack appointment booking system with role-based authentication for students, faculty, family members, and PHC staff — built under Prof. Dr. Romi Banerjee at IIT Jodhpur.",
    subDescription: [
      "Developed role-based authentication supporting students, faculty, family members, and PHC staff with secure login and permissions.",
      "Implemented a slot-based scheduling system with transaction-safe booking logic to prevent overbooking and handle concurrent requests.",
      "Built an admin dashboard for doctor-wise booking management, visit completion tracking, and monthly statistics aggregation.",
      "Used React, Django, Django REST Framework, and PostgreSQL for scalable backend services and data consistency.",
      "Implemented responsive UI and analytics visualization using Tailwind CSS and Chart.js.",
    ],
    href: "",
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
    title: "RAG Document Assistant",
    description:
      "A Retrieval-Augmented Generation (RAG) system that answers questions over uploaded PDF documents with citation-grounded responses.",
    subDescription: [
      "Built a RAG pipeline using FAISS vector similarity and BM25 keyword search with Sentence Transformers embeddings for hybrid retrieval.",
      "Developed a FastAPI backend with REST APIs for document ingestion, chunking, embedding generation, indexing, and LLM-powered semantic search.",
      "Created a React + TailwindCSS frontend featuring a chat interface and PDF viewer with citation-based navigation.",
      "Implemented citation grounding so every response references the exact passage from the source document.",
    ],
    href: "https://github.com/sachdevaryan/rag-system",
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
