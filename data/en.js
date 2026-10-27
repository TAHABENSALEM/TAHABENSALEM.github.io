// ============================================================
//  ENGLISH VERSION
//  Traductions anglaises du profil et des projets. Seuls les champs traduits
//  sont listés : tout le reste (liens, images, technologies…) vient des fichiers
//  français data/profil.js et data/projets.js. Un projet sans entrée ici
//  s'affiche en français.
// ============================================================
window.EN = {
  profil: {
    titre: "Software engineer · AI & Full-Stack",
    accroche: "I build complete solutions, from data and models to deployed applications.",
    apropos: [
      "Software engineering graduate from the National Engineering School of Sousse (ENISo, 2026), specializing in artificial intelligence.",
      "Three internships and several personal projects have given me hands-on experience in full-stack development (web and APIs), deep learning and LLM integration.",
      "I am looking for a full-time engineering position.",
    ],
    localisation: "Kélibia, Tunisia",
    disponible: "Open to full-time engineering roles",
    cv_en: "assets/CV_Taha_Ben_Salem_EN.pdf",

    contact: {
      titre: "Let's work together",
      texte: "A job opportunity or a question about my projects? Feel free to get in touch.",
    },

    competences: [
      { categorie: "AI / Deep Learning / LLM", items: ["PyTorch", "TensorFlow", "Prototypical networks", "Ollama", "promptfoo"] },
      { categorie: "Programming languages", items: ["Python", "JavaScript", "Java", "C#", "PHP", "C++ (Arduino)"] },
      { categorie: "Back-end & APIs", items: ["FastAPI", "Flask", "ASP.NET Core", "Node.js (Express)", "Laravel", "REST", "JWT"] },
      { categorie: "Front-end", items: ["React", "Vue.js 3", "HTML", "CSS", "Jinja2"] },
      { categorie: "Databases", items: ["SQL Server", "MongoDB", "MySQL"] },
      { categorie: "IoT / Embedded", items: ["ESP8266 (NodeMCU)", "DHT11", "PIR", "Embedded web server"] },
      { categorie: "Tools & methods", items: ["Git", "Docker", "Postman", "Swagger", "Agile Scrum", "Spec Driven Development"] },
    ],

    experiences: [
      {
        poste: "Final-year internship — AI & Full-Stack Engineer",
        entreprise: "Sagemcom Software & Technologies",
        periode: "Feb 2026 – Aug 2026",
        points: [
          "Platform for maintaining the test scripts of TV set-top boxes on streaming apps (Netflix, Prime Video, YouTube).",
          "Automatic source-code indexer (Python, ast, regex) and unified web interface (FastAPI, Jinja2, JavaScript).",
          "Log-analysis service using an in-house LLM (Ollama) that identifies the element responsible for a test failure.",
          "Comparison of 9 language models with promptfoo to select the most reliable one.",
        ],
      },
      {
        poste: "Full-Stack Internship",
        entreprise: "NEOLedge MEA",
        periode: "July 2025",
        points: [
          "Web application for leave and expense management (ASP.NET Core Web API, Vue.js 3, SQL Server).",
          "JWT authentication and separate Admin / Employee interfaces.",
        ],
      },
      {
        poste: "Web Development Internship",
        entreprise: "IBH Web Consulting",
        periode: "July 2024",
        points: ["E-commerce site with Laravel: CRUD operations and admin interface."],
      },
    ],

    formation: [
      {
        diplome: "Engineering degree in Computer Science",
        etablissement: "National Engineering School of Sousse (ENISo)",
        periode: "2023 – 2026",
      },
      {
        diplome: "Preparatory cycle",
        etablissement: "Preparatory Institute for Engineering Studies of Nabeul (IPEIN)",
        periode: "2020 – 2023",
      },
    ],

    langues: ["Arabic: native", "French: intermediate", "English: intermediate"],

    associations: ["ACM Club", "Orange Tech Club", "Eureka Cultural Association"],
  },

  projets: {
    "sagemcom-maintenance-tests": {
      titre: "TV set-top box test maintenance platform",
      resume: "Test-code indexing, assisted fixes and LLM-based log analysis for Sagemcom TV set-top boxes.",
      categorie: "AI",
      role: "Final-year internship — Sagemcom Software & Technologies",
      description: [
        "The test scripts for Sagemcom's TV set-top boxes check how streaming apps (Netflix, Amazon Prime Video, YouTube) behave. When an app changes, these tests break, and the affected elements must be found and fixed in the source code.",
        "I designed a platform that automatically indexes the test source code and makes it searchable, filterable and fixable from a single web interface, together with a log-analysis service based on an in-house LLM.",
      ],
      fonctionnalites: [
        "Automatic source-code indexer (Python, ast module, regular expressions)",
        "Unified web interface to browse, filter and fix test elements (FastAPI, Jinja2, JavaScript)",
        "6 correction handlers, one per element type, with full history and undo",
        "Graphical visual-cropping tool (Tkinter, Pillow)",
        "LLM log analysis (Ollama, Flask) that identifies the element responsible for a test failure",
        "Pre-processing pipeline and deterministic reconciliation against hallucinations",
        "Comparison of 9 language models with promptfoo to select the most reliable one",
        "LLM-assisted interfaces generated following Spec Driven Development",
      ],
    },

    "gestion-conges-frais": {
      titre: "Leave and expense management",
      resume: "Full-stack application for leave and expense requests, with approval by the direct manager.",
      categorie: "Web",
      role: "Full-Stack Internship — NEOLedge MEA",
      description: [
        "Web application built during my internship at NEOLedge MEA to replace manual management of leave and expense claims. Each employee submits requests online, their direct manager approves or rejects them, and the administrator configures the whole system.",
        "The back end is an ASP.NET Core 8 REST API organized in controllers and services, using Entity Framework Core and SQL Server. Business rules are enforced server-side: yearly balance per leave type, public holidays, overlap with an already approved leave, and approval restricted to the direct manager.",
        "The Vue.js 3 front end (Vite, Pinia, Vue Router, Bootstrap 5) provides an employee area, an approval area for managers and an administration area with an organization chart.",
      ],
      fonctionnalites: [
        "JWT authentication with Admin / Employee roles, temporary password to change at first login",
        "Leave requests with duration calculation, expense claims by type and amount",
        "Hierarchical approval: each manager handles requests from their direct reports",
        "Business checks: yearly balance per leave type, public holidays, overlaps, dates and amounts",
        "Histories with status, approver, statistics and filters (employee and manager)",
        "Administration: users and hierarchy, leave and expense types, public holidays, organization chart",
        "Database created and updated automatically by EF Core migrations",
      ],
    },

    "pizza-pete": {
      titre: "Pizza Pete — microservices platform",
      resume:
        "Pizza ordering platform: React front end, API gateway, service discovery and 7 Node.js microservices with MongoDB.",
      categorie: "Web",
      role: "Team project",
      description: [
        "Online pizza ordering platform built on a microservices architecture. Each domain (users, products, orders, payments, notifications, inventory) is an independent Node.js / Express service with its own MongoDB database.",
        "An API gateway centralizes the front end's calls: it queries a discovery server, where each service registers at startup, then forwards the request to the right service.",
        "The React front end offers a customer area (sign-up, login, profile, catalogue with search and price filter) and an administrator area to manage the catalogue, with role checks in both the interface and the API.",
      ],
      fonctionnalites: [
        "Secure sign-up and login (passwords hashed with bcrypt, JWT authentication)",
        "Pizza catalogue with search by name and maximum-price filter",
        "Admin area: add, edit and delete products",
        "Role-based access control (customer / admin) on the front end and the API",
        "Custom-built API gateway and service-discovery server",
        "REST APIs for inventory, orders, payments and notifications",
      ],
    },

    "maison-intelligente": {
      titre: "Smart home — ESP8266",
      resume:
        "Home-automation prototype: temperature, humidity and gas monitored in real time, alarms and lamps controlled from an embedded web page.",
      categorie: "IoT",
      role: "Personal project",
      description: [
        "Connected-home prototype built around an ESP8266 NodeMCU board. The board connects to Wi-Fi and hosts a web server: from a phone or computer on the same network, you can follow the measurements in real time and control the lighting.",
        "A DHT11 sensor measures temperature and humidity, and an MQ2 sensor detects gas. The board reads the sensors every two seconds and triggers the alarms itself: a buzzer above the gas threshold and an alert LED above 30 °C, even when no page is open.",
        "The web page, stored in the board's flash memory, queries a small JSON API and refreshes automatically; it is designed for phones.",
      ],
      fonctionnalites: [
        "Embedded web server on the ESP8266 (HTML / CSS / JavaScript page in flash memory)",
        "Temperature and humidity measurement (DHT11)",
        "Gas detection (MQ2) with an audible alarm above a threshold",
        "Alert LED when the temperature is high",
        "Remote control of two lamps, with their state displayed",
        "JSON /data API and automatic refresh every 2 seconds",
      ],
    },

    "programme-gym": {
      titre: "Online Coaching — gym program",
      resume:
        "Fitness coaching website: muscle-gain or weight-loss program based on the user's profile, video exercises and nutrition tips.",
      categorie: "Web",
      role: "Personal project",
      description: [
        "Static website for beginners in strength training. The user enters their gender, weight and height, and the site directs them to a muscle-gain or weight-loss program.",
        "Each program offers a full weekly schedule: 5 weight-training days with 2 muscle groups per day, one cardio session per training day and 2 rest days. Every exercise comes with a demonstration video and step-by-step instructions.",
        "A nutrition section helps estimate calorie needs with the Harris-Benedict equation and shows a table of foods with their nutritional values.",
      ],
      fonctionnalites: [
        "Automatic redirection to a program based on gender, weight and height",
        "Weekly weight-training + cardio schedule, with rest days",
        "10 muscle groups and 10 cardio sessions, with video exercises",
        "Detailed instructions, displayed on demand",
        "Calorie-needs calculation (Harris-Benedict equation)",
        "Food table: calories, carbs, protein and fat per 100 g",
      ],
    },
  },
};
