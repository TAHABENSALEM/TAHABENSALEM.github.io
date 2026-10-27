// ============================================================
//  VOS INFORMATIONS PERSONNELLES
//  Modifiez les valeurs ci-dessous. Laissez "" pour masquer un champ.
// ============================================================
window.PROFIL = {
  nom: "Taha Ben Salem",
  titre: "Ingénieur en informatique · IA & Full-Stack",
  accroche:
    "Je construis des solutions complètes, des données et des modèles jusqu'aux applications déployées.",
  apropos: [
    "Ingénieur diplômé en informatique de l'École Nationale d'Ingénieurs de Sousse (ENISo, 2026), spécialisé en intelligence artificielle.",
    "Trois stages et plusieurs projets personnels m'ont donné une expérience concrète en développement full-stack (web et APIs), en deep learning et en intégration de LLM.",
    "Je suis à la recherche d'un poste d'ingénieur à temps plein.",
  ],
  localisation: "Kélibia, Tunisie",
  disponible: "Ouvert aux postes d'ingénieur à temps plein", // texte du badge ("" pour le masquer)
  photo: "assets/img/photo.jpg",
  cv: "assets/CV_Taha_Ben_Salem.pdf",
  cvEn: "assets/CV_Taha_Ben_Salem_EN.pdf",

  contact: {
    email: "bensalemtaha20@gmail.com",
    telephone: "+216 28 558 116",
    titre: "Travaillons ensemble",
    texte: "Une offre de poste ou une question sur mes projets ? N'hésitez pas à me contacter.",
  },

  liens: {
    github: "https://github.com/TAHABENSALEM",
    linkedin: "https://www.linkedin.com/in/taha-ben-salem-eniso/",
    malt: "",
    fiverr: "",
    upwork: "",
  },

  competences: [
    { categorie: "IA / Deep Learning / LLM", items: ["PyTorch", "TensorFlow", "Réseaux prototypiques", "Ollama", "promptfoo"] },
    { categorie: "Langages", items: ["Python", "JavaScript", "Java", "C#", "PHP", "C++ (Arduino)"] },
    { categorie: "Back-end & APIs", items: ["FastAPI", "Flask", "ASP.NET Core", "Node.js (Express)", "Laravel", "REST", "JWT"] },
    { categorie: "Front-end", items: ["React", "Vue.js 3", "HTML", "CSS", "Jinja2"] },
    { categorie: "Bases de données", items: ["SQL Server", "MongoDB", "MySQL"] },
    { categorie: "IoT / Embarqué", items: ["ESP8266 (NodeMCU)", "DHT11", "PIR", "Serveur web embarqué"] },
    { categorie: "Outils & méthodes", items: ["Git", "Docker", "Postman", "Swagger", "Agile Scrum", "Spec Driven Development"] },
  ],

  // Section « Services » (pour le freelance) : laissez [] pour la masquer.
  services: [],

  experiences: [
    {
      poste: "Stage PFE — Ingénieur IA & Full-Stack",
      entreprise: "Sagemcom Software & Technologies",
      periode: "Fév. 2026 – Août 2026",
      points: [
        "Plateforme de maintenance des scripts de test des décodeurs TV sur les applications de streaming (Netflix, Prime Video, YouTube).",
        "Indexeur automatique du code source (Python, ast, regex) et interface web unifiée (FastAPI, Jinja2, JavaScript).",
        "Service d'analyse de logs avec un LLM interne (Ollama) qui identifie l'élément responsable d'un échec de test.",
        "Comparaison de 9 modèles de langage avec promptfoo pour retenir le plus fiable.",
      ],
    },
    {
      poste: "Stage Full-Stack",
      entreprise: "NEOLedge MEA",
      periode: "Juillet 2025",
      points: [
        "Application web de gestion des congés et des frais (ASP.NET Core Web API, Vue.js 3, SQL Server).",
        "Authentification JWT et interfaces différenciées Admin / Employé.",
      ],
    },
    {
      poste: "Stage Développement Web",
      entreprise: "IBH Web Consulting",
      periode: "Juillet 2024",
      points: [
        "Site e-commerce avec Laravel : opérations CRUD et interface d'administration.",
      ],
    },
  ],

  formation: [
    {
      diplome: "Cycle ingénieur en informatique",
      etablissement: "École Nationale d'Ingénieurs de Sousse (ENISo)",
      periode: "2023 – 2026",
    },
    {
      diplome: "Cycle préparatoire",
      etablissement: "Institut Préparatoire aux Études d'Ingénieur de Nabeul (IPEIN)",
      periode: "2020 – 2023",
    },
  ],

  certificats: [
    "Fundamentals of Deep Learning — NVIDIA",
    "Building Transformer-Based NLP Applications — NVIDIA",
    "Accelerating Data Engineering Pipelines — NVIDIA",
  ],

  langues: ["Arabe : langue maternelle", "Français : intermédiaire", "Anglais : intermédiaire"],

  associations: ["Club ACM", "Orange Tech Club", "Association Culturelle Eureka"],
};
