export const projects = [
  {
    id: 1,
    title: "Trip-Planner",
    description:
      "Sistem de planificare a călătoriilor dezvoltat full-stack, care integrează un backend Node.js cu un serviciu AI pentru generarea itinerariilor. Aplicația include autentificare Google OAuth, gestionarea inputului complex al utilizatorului și persistența datelor în Firebase.",
    image: "/T-P.png",
    category: "Full-Stack",
    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "Google OAuth",
      "AI Service"
    ],
    metrics: "Aplicație full-stack funcțională",
    demoUrl: "https://tripplanner-vert.vercel.app",
    githubUrl: "https://github.com/TeoG-H/Trip-Planner"
  },

  {
    id: 2,
    title: "Movies-Recommender",
    description:
    "Un sistem de recomandare de filme construit end-to-end, care include web scraping, analiză și preprocesare de date, feature engineering și dezvoltarea unui model de Machine Learning de tip content-based filtering. Modelul folosește embeddings NLP și cosine similarity pentru a calcula similaritatea dintre filme pe baza caracteristicilor textuale și a metadatelor.",
    image: "/project1.png",
    category: "Machine Learning",
    technologies: [
      "Python",
      "Scikit-learn",
      "SentenceTransformers",
      "Cosine Similarity",
      "Pandas",
      "NumPy",
      "Streamlit"
    ],
    metrics: "Model ML funcțional integrat într-o aplicație",
    demoUrl: "https://moviesrecommender-ux3tkwcuszuz3kyzzblmw.streamlit.app/",
    githubUrl: "https://github.com/TeoG-H/Movies_Recommender"
  },

  {
    id: 3,
    title: "Java Platformer 2D",
    description:
      "Joc platformer 2D dezvoltat în Java, construit pe principii de programare orientată pe obiect. Proiectul include gestionarea entităților, nivelurilor, stărilor de joc și a resurselor, logică de gameplay, UI custom, input handling, audio și persistența scorurilor utilizând o bază de date SQLite.",
    image: "/project1.png",
    category: "Game Development",
    technologies: [
      "Java",
      "OOP",
      "Game Loop",
      "SQLite",
      "Custom UI"
    ],
    metrics: "Motor de joc 2D implementat complet",
    demoUrl: "",
    githubUrl: "https://github.com/TeoG-H/Java-Game"
  },

  {
    id: 4,
    title: "Impostor – Android Game",
    description:
      "Joc 2D dezvoltat pentru Android, axat pe logică de gameplay, gestionarea stărilor de joc, input handling și interacțiunea utilizatorului. Proiectul pune accent pe structura aplicației și pe organizarea corectă a componentelor.",
    image: "/project1.png",
    category: "Game Development",
    technologies: [
      "Java",
      "Android SDK",
      "Game Logic",
      "Mobile Development"
    ],
    metrics: "Aplicație Android funcțională",
    demoUrl: "",
    githubUrl: "https://github.com/TeoG-H/impostor_game"
  },

  {
    id: 5,
    title: "Portfolio",
    description:
      "Portofoliu personal dezvoltat pentru a prezenta proiecte software, competențe tehnice și experiență practică. Aplicația este construită cu accent pe design modern, structură clară și performanță.",
    image: "/project1.png",
    category: "Full-Stack",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "UI/UX Design"
    ],
    metrics: "Portofoliu personal funcțional",
    demoUrl: "",
    githubUrl: "https://github.com/TeoG-H/portfolio"
  }
];


export const categories = [
  'All',
  'Full-Stack',
  'Machine Learning',
  'Game Development'
];
