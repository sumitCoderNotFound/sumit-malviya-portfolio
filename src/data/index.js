// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: "Sumit Malviya",
  title: "Full Stack Engineer",
  tagline: "Microservices · AI Systems · Backend Architecture",
  summary:
    "Full-Stack Software Engineer with 4+ years of professional experience across microservices, AI systems, and production-scale platforms. Currently pursuing MSc Advanced Computer Science at Northumbria University, Newcastle.",
  email: "malviyasumit7987@gmail.com",
  phone: "+44 7386 909984",
  location: "Newcastle, UK",
  cvUrl:
    "https://drive.google.com/file/d/18c9Lt9JCsZ_eV3sayfB3gA9A-1-bVxrv/view",
  github: "https://github.com/sumitCoderNotFound",
  linkedin: "https://www.linkedin.com/in/sumit-malviya-0b77a51a5/",
  hireable: true,
};

// ─── TYPING STRINGS ───────────────────────────────────────────────────────────
export const typingStrings = [
  "Designing Scalable Systems",
  "Building Intelligent Applications",
  "Architecting Microservices",
  "Engineering Backend Solutions",
  "Solving Complex Problems",
];

// ─── HERO STATS ───────────────────────────────────────────────────────────────
export const heroStats = [
  { num: "4+",  label: "Years Experience" },
  { num: "MSc", label: "Adv. Comp Sci" },
  { num: "7+",  label: "Major Projects" },
  { num: "3",   label: "UK Hackathons" },
];

// ─── ABOUT TAGS ───────────────────────────────────────────────────────────────
export const aboutTags = [
  "Microservices",
  "System Architecture",
  "AI Integration",
  "Calendar Systems",
  "Full-Stack Development",
  "Deep Learning",
  "Digital Twin",
  "Hospitality Tech",
  "Product Thinking",
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    school: "Northumbria University, Newcastle",
    degree: "MSc Advanced Computer Science",
    duration: "Jan 2025 – Jun 2026",
    modules: [
      "KL7011 Advanced Databases — Oracle SQL, Star Schema; B-tree index optimisation on 1M+ row fact table; EXPLAIN PLAN analysis; data mining",
      "KF7028 Research Methods — Mixed methods, GDPR & ethics; IoT cybersecurity literature review",
      "KF7014 Advanced Programming — Microservices (Spring Boot, MongoDB); Water Quality Monitoring System",
      "KF7031 Wireless Network & Security — IEEE 802.11n WLAN design; OMNeT++ simulation",
      "KF7032 Big Data & Cloud Computing — Azure, Apache Spark, Python (Jupyter)",
      "KV7006 Machine Learning — CNN + BiLSTM ECG classification; YOLO object detection",
    ],
  },
  {
    school: "Government Narmada College, India",
    degree: "BSc Industrial Chemistry",
    duration: "Aug 2018 – Aug 2021",
    modules: [],
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    color: "blue",
    items: ["React.js", "Angular", "TypeScript", "Redux", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    color: "blue",
    items: ["Node.js", "Python (Django)", "Spring Boot", "FastAPI", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    color: "emerald",
    items: ["Oracle SQL", "MongoDB", "PostgreSQL", "MySQL", "Star Schema", "Data Warehousing", "Query Optimisation"],
  },
  {
    category: "Cloud & DevOps",
    color: "emerald",
    items: ["Azure", "AWS (S3, EC2)", "Apache Spark", "Docker", "CI/CD", "Git"],
  },
  {
    category: "AI / ML",
    color: "blue",
    items: ["YOLOv8", "CNN", "BiLSTM", "PyTorch", "Deep Learning", "Jupyter", "OMNeT++"],
  },
  {
    category: "Security & Architecture",
    color: "emerald",
    items: ["WPA3 / 802.1X", "RADIUS", "JWT Auth", "Microservices", "API Gateway", "RBAC", "GDPR"],
  },
];

export const radarData = [
  { label: "React / Frontend", value: 92 },
  { label: "Node / Django",    value: 85 },
  { label: "Microservices",    value: 80 },
  { label: "AI / ML",         value: 72 },
  { label: "System Design",   value: 78 },
  { label: "Cloud / DevOps",  value: 70 },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projectCategories = [
  {
    id: "university",
    label: "University Projects",
    sublabel: "MSc Advanced Computer Science · Northumbria University",
    icon: "🎓",
    accentColor: "blue",
    projects: [
      {
        icon: "🚦",
        title: "Real-Time Traffic State Estimation",
        subtitle: "MSc Dissertation · Digital Twin",
        desc: "YOLOv8-powered vehicle detection from low-quality CCTV footage integrated into Newcastle's Urban Digital Twin. Real-time state estimation with PostgreSQL.",
        tech: ["YOLOv8", "FastAPI", "PostgreSQL", "React", "Urban Observatory API", "Deep Learning"],
        arch: [
          ["CCTV Feed", "→", "YOLOv8 Model"],
          ["FastAPI Backend", "→", "PostgreSQL"],
          ["React Dashboard", "←", "REST API"],
        ],
        impact: "Digital Twin Integration",
        color: "blue",
      },
      {
        icon: "💧",
        title: "Water Quality Monitoring System",
        subtitle: "Microservices Architecture",
        desc: "Distributed microservice system for real-time river monitoring with separated Auth, Ingestion, and Analytics services communicating via REST with JWT security.",
        tech: ["Spring Boot", "MongoDB", "JWT Auth", "React", "CSV Scheduler", "REST APIs"],
        arch: [
          ["CSV Scheduler", "→", "Ingestion Service"],
          ["Auth Service",  "→", "API Gateway"],
          ["Analytics API", "→", "React Dashboard"],
        ],
        impact: "Microservices · Auth Separation",
        color: "emerald",
      },
      {
        icon: "🫀",
        title: "ECG Heartbeat Classification",
        subtitle: "Deep Learning · AI/ML",
        desc: "CNN + BiLSTM hybrid deep learning model for ECG signal classification. Signal normalisation pipeline targeting 95%+ accuracy across 5 cardiac classes.",
        tech: ["PyTorch", "CNN", "BiLSTM", "Jupyter", "Signal Processing", "Python"],
        arch: [
          ["ECG Signal",      "→", "Normalisation"],
          ["CNN Layers",      "→", "BiLSTM"],
          ["Softmax Output",  "→", "Classification"],
        ],
        impact: "95%+ Accuracy Target",
        color: "blue",
      },
    ],
  },
  {
    id: "professional",
    label: "Professional Projects",
    sublabel: "Built at scale during 4+ years of industry experience",
    icon: "💼",
    accentColor: "emerald",
    projects: [
      {
        icon: "📚",
        title: "Trainery One",
        subtitle: "Astron Micro Technology (Remote) · 2023–2025",
        desc: "Built Track Learning and Track Coaching full modules end-to-end. Integrated a complete calendar scheduling system across the entire platform.",
        tech: ["React.js", "Python", "Django", "REST APIs", "Calendar Integration", "Role-based Auth"],
        arch: [
          ["React Frontend",   "→", "Django REST API"],
          ["Calendar Module",  "→", "Scheduling Engine"],
          ["Auth Service",     "→", "Track Modules"],
        ],
        impact: "Full Module Ownership · React + Django",
        color: "blue",
        link: "https://trainery.one/",
      },
      {
        icon: "👥",
        title: "LYWO — Recruitment Platform",
        subtitle: "Smartgig Technologies · 2022–2023",
        desc: "Multi-role admin panel for admins, recruiters, and candidates. Real-time job listings, candidate profiles, application tracking, and advanced search.",
        tech: ["Angular", "Node.js", "MongoDB", "REST APIs", "Role-based Access", "Real-time Search"],
        arch: [
          ["Candidate / Recruiter", "→", "API Gateway"],
          ["Node.js Backend",       "→", "MongoDB"],
          ["Admin Panel",           "←", "REST APIs"],
        ],
        impact: "Multi-role System · Live Platform",
        color: "emerald",
        link: "https://lywo.in/",
      },
      {
        icon: "🎓",
        title: "Infinity Learn",
        subtitle: "Smartgig Technologies · 2021–2022",
        desc: "Quiz module with question banks, scoring logic, and progress tracking. Activity module where users earn badges and certifications upon course completion.",
        tech: ["Angular", "Node.js", "MongoDB", "REST APIs", "Quiz Engine", "Badge System"],
        arch: [
          ["Course Content", "→", "Angular Frontend"],
          ["Quiz Engine",    "→", "Node.js API"],
          ["Badge Service",  "→", "MongoDB"],
        ],
        impact: "EdTech · 1M+ Users",
        color: "blue",
        link: "https://infinitylearn.com/",
      },
    ],
  },
  {
    id: "personal",
    label: "Personal Projects",
    sublabel: "Side projects built out of curiosity and product thinking",
    icon: "✦",
    accentColor: "violet",
    projects: [
      {
        icon: "🤖",
        title: "ConvoHub AI",
        subtitle: "Personal · In Active Development",
        desc: "AI voice and chat assistant platform — actively in development. Built full PRD, system architecture, LLM-integrated backend, monetisation model, and client SDK for a B2B SaaS product.",
        tech: ["Product Design", "AI Architecture", "PRD", "Market Research", "LLM Integration", "B2B SaaS"],
        arch: [
          ["Voice Input",    "→", "LLM Engine"],
          ["Chat Interface", "→", "Context Store"],
          ["Response API",   "→", "Client SDK"],
        ],
        impact: "B2B SaaS · AI Platform",
        color: "violet",
      },
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    date: "Jan 2025 – Present",
    role: "Freelance Backend Developer",
    company: "Hotelogix",
    desc: "Backend integration work for a cloud hotel management system — key card API integrations and client onboarding calls.",
    bullets: [
      "Backend APIs for hotel key card system integrations",
      "Client-facing technical calls with hotels for onboarding",
      "Debugging and maintaining live production integrations",
      "Deep PMS domain knowledge: rooms, guest lifecycle, bookings",
    ],
    tag: "Freelance",
    tagColor: "emerald",
  },
  {
    date: "Jan 2025 – Present",
    role: "MSc Researcher",
    company: "Northumbria University, Newcastle",
    desc: "Dissertation: Urban Digital Twin for Traffic State Estimation using YOLOv8 and FastAPI.",
    bullets: [
      "KL7011 Advanced Databases — Oracle SQL, Star Schema warehousing; index optimisation with EXPLAIN PLAN on 1M+ row fact table",
      "KF7014 Advanced Programming — built Water Quality Microservices system (Spring Boot + MongoDB)",
      "KF7031 Wireless Network & Security — WLAN design & OMNeT++ simulation for 200-user environments",
      "KF7032 Big Data & Cloud Computing — Azure, Apache Spark, large-scale Python data pipelines",
      "KV7006 Machine Learning — CNN + BiLSTM deep learning; ECG classification & YOLO detection",
      "KF7028 Research Methods — academic research design, GDPR ethics, IoT cybersecurity literature review",
    ],
    tag: "Current",
    tagColor: "blue",
  },
  {
    date: "Aug 2023 – Dec 2025",
    role: "Sr. Software Developer",
    company: "Astron Micro Technology (Remote)",
    desc: "Led full-stack development of Trainery One. Built Track Learning & Track Coaching modules with full calendar integration.",
    bullets: [
      "Track Learning & Track Coaching modules from scratch",
      "Full calendar scheduling system across the platform",
      "React.js + Python (Django) — REST API design",
      "RESTful APIs improving data retrieval efficiency by 30%",
    ],
    link: { label: "Trainery One ↗", href: "https://trainery.one/" },
    tag: null,
  },
  {
    date: "Dec 2021 – Jul 2023",
    role: "Software Developer",
    company: "Smartgig Technologies",
    desc: "Worked across Infinity Learn (EdTech) and LYWO (Recruitment). Angular + Node.js stack. Recognised as Best Performer & Team Lead.",
    bullets: [
      "Infinity Learn: Quiz module, course badges, activity tracking",
      "LYWO: Multi-role admin, job listings, candidate tracking",
      "MongoDB schema design & query optimisation",
      "Agile sprints, code reviews, junior mentorship",
    ],
    links: [
      { label: "LYWO ↗",           href: "https://lywo.in/" },
      { label: "Infinity Learn ↗",  href: "https://infinitylearn.com/" },
    ],
    tag: "Best Performer Award",
    tagColor: "gold",
  },
  {
    date: "2020 – Nov 2021",
    role: "Junior Frontend Developer",
    company: "eTraxx World",
    desc: "Started professional career building UI for the Carrefour e-commerce website. Focus on pixel-perfect frontend and cross-browser compatibility.",
    bullets: [
      "UI components for Carrefour website",
      "Cross-browser, responsive layouts",
      "Collaborated with design team on implementation",
      "Foundation in production-grade frontend engineering",
    ],
    link: { label: "Carrefour ↗", href: "https://www.carrefour.com/" },
    tag: "Career Start",
    tagColor: "slate",
  },
];

// ─── HACKATHONS ───────────────────────────────────────────────────────────────
export const hackathons = [
  {
    place: "2nd",
    name: "Stream's Open Data Day (ODD) 2025",
    org: "Stream · Newcastle",
    date: "March 7–9, 2025",
    desc: "Secured 2nd place in Stream's Open Data Day hackathon. Recognised for creativity, teamwork, and dedication in tackling open data challenges.",
    certImg: "/certificates/hackathon.png",
    color: "blue",
    tag: "Winner",
  },
  {
    place: "—",
    name: "CS50 × Meta Hackathon",
    org: "London, UK",
    date: "2024–2025",
    desc: "Participated in the CS50 and Meta sponsored hackathon in London, collaborating with developers from across the UK on real-world challenges.",
    certImg: null,
    color: "emerald",
    tag: "Participated",
  },
  {
    place: "—",
    name: "International Biohackathon",
    org: "Newcastle, UK",
    date: "2024–2025",
    desc: "Applied software and data engineering skills to biological and health-tech challenges in an international setting.",
    certImg: null,
    color: "slate",
    tag: "Participated",
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const achievements = [
  {
    title: "2nd Place — Stream Open Data Day 2025",
    issuer: "Stream · Newcastle",
    date: "March 2025",
    certImg: "/certificates/hackathon.png",
    color: "blue",
  },
  {
    title: "Best Performer & Team Lead",
    issuer: "SmartGig Technologies — CEO Mahesh Nayani",
    date: "Q2 2023",
    certImg: "/certificates/smartgig.png",
    color: "emerald",
  },
];

// ─── SYSTEM DESIGNS ───────────────────────────────────────────────────────────
export const systemDesigns = [
  {
    title: "Auth-Service Separation",
    icon: "🔐",
    desc: "Separated JWT authentication into its own microservice with token refresh, RBAC, and stateless API gateway pattern.",
    flow: [
      { label: "Client",           cls: "blue" },
      { label: "→",                cls: "arrow" },
      { label: "API Gateway",      cls: "slate" },
      { label: "→",                cls: "arrow" },
      { label: "Auth Service",     cls: "emerald" },
      { label: "→",                cls: "arrow" },
      { label: "Protected Route",  cls: "blue" },
    ],
  },
  {
    title: "CSV Scheduler Ingestion",
    icon: "⏱️",
    desc: "Scheduled batch ingestion pipeline — reads CSV, validates schema, transforms, writes to MongoDB with error recovery and audit logging.",
    flow: [
      { label: "CSV File",   cls: "slate" },
      { label: "→",         cls: "arrow" },
      { label: "Scheduler", cls: "blue" },
      { label: "→",         cls: "arrow" },
      { label: "Validator", cls: "emerald" },
      { label: "→",         cls: "arrow" },
      { label: "MongoDB",   cls: "blue" },
    ],
  },
  {
    title: "Calendar System Architecture",
    icon: "📅",
    desc: "Full calendar integration for Trainery One across Track Learning and Coaching. Conflict resolution, timezone handling, recurring event management.",
    flow: [
      { label: "User Request",      cls: "slate" },
      { label: "→",                cls: "arrow" },
      { label: "Django API",        cls: "blue" },
      { label: "→",                cls: "arrow" },
      { label: "Calendar Engine",   cls: "emerald" },
      { label: "→",                cls: "arrow" },
      { label: "React View",        cls: "blue" },
    ],
  },
  {
    title: "Microservice Communication",
    icon: "🔗",
    desc: "Event-driven microservice topology with REST and async fallbacks. Each service owns its data store for independent scaling and deployment.",
    flow: [
      { label: "Service A",    cls: "blue" },
      { label: "REST →",       cls: "arrow" },
      { label: "API Gateway",  cls: "slate" },
      { label: "→ Event",      cls: "arrow" },
      { label: "Service B",    cls: "emerald" },
      { label: "→",            cls: "arrow" },
      { label: "Own DB",       cls: "blue" },
    ],
  },
];

// ─── AI CHAT CONTEXT ──────────────────────────────────────────────────────────
export const aiContext = `You are an AI assistant embedded in Sumit Malviya's portfolio website. Answer questions about Sumit professionally and concisely — max 3 sentences.

Sumit Malviya is a Full Stack Software Engineer with 4+ years of professional experience.
Currently pursuing MSc Advanced Computer Science at Northumbria University, Newcastle UK (Jan 2025 - June 2026).
Freelancing for Hotelogix — building backend APIs for hotel key card integrations, client-facing technical calls.
Career: eTraxx World (2020–2021, Junior Frontend, Carrefour UI) → Smartgig Technologies (2021–2023, Infinity Learn + LYWO, Angular/Node) → Astron Micro Technology (2023–2025 remote, Trainery One, React+Django).
Won 2nd place at Stream's Open Data Day (ODD) 2025 Newcastle, participated in CS50×Meta Hackathon London and International Biohackathon Newcastle.
Won Best Performer & Team Lead Award at SmartGig Technologies (Q2 2023, CEO Mahesh Nayani).
Confirmed MSc Modules: KL7011 Advanced Databases (Oracle SQL, Star Schema, B-tree index optimisation with EXPLAIN PLAN on 1M+ row fact table, data mining), KF7028 Research Methods (mixed methods, GDPR, IoT cybersecurity literature review), KF7014 Advanced Programming (microservices Spring Boot+MongoDB — Water Quality Monitoring System), KF7031 Wireless Network & Security (WLAN design, OMNeT++ simulation), KF7032 Big Data & Cloud Computing (Azure, Spark, Python), KV7006 Machine Learning (CNN+BiLSTM ECG classification, YOLO detection).
Skills: React, Angular, Node.js, Python (Django), Spring Boot, FastAPI, MongoDB, PostgreSQL, Azure, AWS, Docker, TypeScript.
Projects: Traffic Digital Twin (YOLOv8+FastAPI dissertation), Water Quality Microservices (KF7014 — Spring Boot+MongoDB+JWT), ECG Classification (KV7006 — CNN+BiLSTM), Trainery One (React+Django, trainery.one), LYWO recruitment platform (lywo.in), ConvoHub AI (personal startup — actively in development, LLM backend + client SDK).
Email: malviyasumit7987@gmail.com | GitHub: github.com/sumitCoderNotFound | LinkedIn: linkedin.com/in/sumit-malviya-0b77a51a5/
He is open to UK full-stack, backend, and graduate software engineering roles at product-based companies.`;