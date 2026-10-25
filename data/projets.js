// ============================================================
//  VOS PROJETS
//  Ajoutez un bloc { ... } par projet (copiez le modèle en bas du fichier).
//  L'ordre de la liste est l'ordre d'affichage sur la page d'accueil.
// ============================================================
window.PROJETS = [
  {
    id: "sagemcom-maintenance-tests", // identifiant unique, sans espaces ni accents (sert dans l'URL)
    publie: true, // false = projet masqué sur le site (en attente de vérification)
    titre: "Plateforme de maintenance des tests décodeurs",
    resume:
      "Indexation du code de test, correction assistée et analyse de logs par LLM pour les décodeurs TV de Sagemcom.",
    categorie: "IA", // ex : Web, Mobile, IA, Data… (sert aux filtres)
    annee: "2026",
    role: "Stage PFE — Sagemcom Software & Technologies",
    image: "", // ex : "assets/projets/sagemcom-maintenance-tests/cover.png"
    technologies: ["Python", "FastAPI", "Flask", "Ollama", "promptfoo", "Jinja2", "JavaScript", "Tkinter"],
    description: [
      "Les scripts de test des décodeurs TV de Sagemcom vérifient le comportement des applications de streaming (Netflix, Amazon Prime Video, YouTube). Quand une application change, ces tests cassent et il faut retrouver puis corriger les éléments concernés dans le code source.",
      "J'ai conçu une plateforme qui indexe automatiquement le code source des tests et le rend consultable, filtrable et corrigeable depuis une interface web unique, avec un service d'analyse de logs basé sur un LLM hébergé en interne.",
    ],
    fonctionnalites: [
      "Indexeur automatique du code source (Python, module ast, expressions régulières)",
      "Interface web unifiée pour consulter, filtrer et corriger les éléments de test (FastAPI, Jinja2, JavaScript)",
      "6 handlers de correction, un par type d'élément, avec historique complet et annulation",
      "Outil graphique de recadrage visuel (Tkinter, Pillow)",
      "Analyse de logs par LLM (Ollama, Flask) qui identifie l'élément responsable d'un échec de test",
      "Pipeline de prétraitement et réconciliation déterministe contre les hallucinations",
      "Comparaison de 9 modèles de langage avec promptfoo pour retenir le plus fiable",
      "Interfaces générées avec l'aide d'un LLM selon le Spec Driven Development",
    ],
    github: "", // lien du dépôt GitHub (laisser "" si privé / inexistant)
    demo: "", // lien vers une démo en ligne, une vidéo, le Play Store…
    galerie: [], // ex : ["assets/projets/sagemcom-maintenance-tests/1.png"]
  },
  {
    id: "few-shot-thermique",
    publie: false, // passer à true quand le projet est vérifié
    titre: "Classification few-shot d'images thermiques",
    resume: "Classification d'images thermiques à partir de peu d'exemples, avec des réseaux prototypiques.",
    categorie: "IA",
    annee: "",
    role: "Projet personnel",
    image: "",
    technologies: ["Python", "PyTorch", "Réseaux prototypiques"],
    description: [
      "Classification d'images thermiques en apprentissage few-shot : le modèle doit reconnaître des classes à partir de très peu d'exemples étiquetés.",
      "L'approche repose sur des réseaux prototypiques, implémentés avec PyTorch.",
    ],
    fonctionnalites: [],
    github: "",
    demo: "",
    galerie: [],
  },
  {
    id: "gestion-conges-frais",
    publie: true, // passer à true quand le projet est vérifié
    titre: "Gestion des congés et des notes de frais",
    resume:
      "Application full-stack de demandes de congé et de notes de frais, avec validation hiérarchique par le manager direct.",
    categorie: "Web",
    annee: "2025",
    role: "Stage Full-Stack — NEOLedge MEA",
    image: "assets/projets/gestion-conges-frais/manager-approbations.jpg",
    technologies: ["ASP.NET Core 8", "Entity Framework Core", "SQL Server", "Vue.js 3", "Pinia", "Bootstrap 5", "JWT"],
    description: [
      "Application web développée pendant mon stage chez NEOLedge MEA pour remplacer la gestion manuelle des congés et des notes de frais. Chaque employé soumet ses demandes en ligne, son manager direct les valide ou les refuse, et l'administrateur configure l'ensemble.",
      "Le back-end est une API REST ASP.NET Core 8 organisée en contrôleurs et services, avec Entity Framework Core et SQL Server. Les règles métier sont vérifiées côté serveur : solde annuel par type de congé, jours fériés, chevauchement avec un congé déjà approuvé, et validation réservée au manager direct.",
      "Le front-end Vue.js 3 (Vite, Pinia, Vue Router, Bootstrap 5) propose un espace employé, un espace de validation pour les managers et un espace d'administration avec organigramme.",
    ],
    fonctionnalites: [
      "Authentification JWT avec rôles Admin / Employé, mot de passe temporaire à changer à la première connexion",
      "Demandes de congé avec calcul de la durée, notes de frais par type et montant",
      "Validation hiérarchique : chaque manager traite les demandes de ses subordonnés directs",
      "Contrôles métier : solde annuel par type de congé, jours fériés, chevauchements, dates et montants",
      "Historiques avec statut, validateur, statistiques et filtres (employé et manager)",
      "Administration : utilisateurs et hiérarchie, types de congés et de frais, jours fériés, organigramme",
      "Base de données créée et mise à jour automatiquement par les migrations EF Core",
    ],
    github: "https://github.com/TAHABENSALEM/Stage_2_-me",
    demo: "",
    video: "assets/projets/gestion-conges-frais/demo.mp4", // vidéo affichée en haut de la page du projet
    galerie: [
      "assets/projets/gestion-conges-frais/demande-conge.jpg",
      "assets/projets/gestion-conges-frais/manager-approbations.jpg",
      "assets/projets/gestion-conges-frais/employe-historique.jpg",
      "assets/projets/gestion-conges-frais/manager-decisions.jpg",
      "assets/projets/gestion-conges-frais/admin-organigramme.jpg",
      "assets/projets/gestion-conges-frais/admin-utilisateurs.jpg",
    ],
  },
  {
    id: "pizza-pete",
    publie: true, // passer à true quand le projet est vérifié
    titre: "Pizza Pete — plateforme microservices",
    resume:
      "Plateforme de commande de pizzas : front-end React, passerelle API, découverte de services et 7 microservices Node.js avec MongoDB.",
    categorie: "Web",
    annee: "2024 – 2025",
    role: "Projet réalisé en équipe",
    image: "assets/projets/pizza-pete/catalogue.jpg",
    technologies: ["Node.js", "Express", "React", "MongoDB", "JWT", "Microservices", "Docker"],
    description: [
      "Plateforme de commande de pizzas en ligne conçue selon une architecture microservices. Chaque domaine (utilisateurs, produits, commandes, paiements, notifications, stocks) est un service Node.js / Express indépendant, avec sa propre base MongoDB.",
      "Une passerelle API centralise les appels du front-end : elle interroge un serveur de découverte, auprès duquel chaque service s'enregistre au démarrage, puis redirige la requête vers le bon service.",
      "Le front-end React propose un espace client (inscription, connexion, profil, catalogue avec recherche et filtre par prix) et un espace administrateur pour gérer le catalogue, avec un contrôle des rôles côté interface et côté API.",
    ],
    fonctionnalites: [
      "Inscription et connexion sécurisées (mots de passe hachés avec bcrypt, authentification JWT)",
      "Catalogue de pizzas avec recherche par nom et filtre par prix maximum",
      "Espace administrateur : ajout, modification et suppression de produits",
      "Contrôle d'accès par rôle (client / admin) sur le front-end et sur l'API",
      "Passerelle API et serveur de découverte de services développés sur mesure",
      "API REST de gestion des stocks, des commandes, des paiements et des notifications",
    ],
    github: "https://github.com/TAHABENSALEM/pizza-pete",
    demo: "",
    video: "assets/projets/pizza-pete/demo.mp4", // vidéo affichée en haut de la page du projet
    galerie: [
      "assets/projets/pizza-pete/connexion.jpg",
      "assets/projets/pizza-pete/catalogue.jpg",
      "assets/projets/pizza-pete/admin-produits.jpg",
      "assets/projets/pizza-pete/admin-ajout.jpg",
    ],
  },
  {
    id: "maison-intelligente",
    publie: true, // passer à true quand le projet est vérifié
    titre: "Maison intelligente — ESP8266",
    resume:
      "Maquette domotique : température, humidité et gaz suivis en temps réel, alarmes et lampes commandées depuis une page web embarquée.",
    categorie: "IoT",
    annee: "2024",
    role: "Projet personnel",
    image: "assets/projets/maison-intelligente/interface-apercu.jpg",
    technologies: ["ESP8266 (NodeMCU)", "C++ (Arduino)", "DHT11", "MQ2", "HTML / CSS", "JavaScript"],
    description: [
      "Maquette de maison connectée construite autour d'une carte NodeMCU ESP8266. La carte se connecte au Wi-Fi et héberge un serveur web : depuis un téléphone ou un ordinateur du même réseau, on suit les mesures en temps réel et on commande l'éclairage.",
      "Un capteur DHT11 mesure la température et l'humidité, un capteur MQ2 détecte le gaz. La carte lit les capteurs toutes les deux secondes et déclenche elle-même les alarmes : un buzzer au-dessus du seuil de gaz et une LED d'alerte au-delà de 30 °C, même quand aucune page n'est ouverte.",
      "La page web, stockée dans la mémoire flash de la carte, interroge une petite API JSON et s'actualise automatiquement ; elle est pensée pour le téléphone.",
    ],
    fonctionnalites: [
      "Serveur web embarqué sur l'ESP8266 (page HTML / CSS / JavaScript en mémoire flash)",
      "Mesure de la température et de l'humidité (DHT11)",
      "Détection de gaz (MQ2) avec alarme sonore au-dessus d'un seuil",
      "LED d'alerte en cas de température élevée",
      "Commande à distance de deux lampes, avec leur état affiché",
      "API JSON /data et actualisation automatique toutes les 2 secondes",
    ],
    github: "https://github.com/TAHABENSALEM/maison-intelligente",
    demo: "",
    galerie: [
      "assets/projets/maison-intelligente/interface-telephone.jpg",
      "assets/projets/maison-intelligente/interface-alarme.jpg",
    ],
  },
  {
    id: "programme-gym",
    publie: true, // passer à true quand le projet est vérifié
    titre: "Online Coaching — programme de gym",
    resume:
      "Site de coaching sportif : programme prise de masse ou perte de poids selon le profil, exercices en vidéo et conseils nutrition.",
    categorie: "Web",
    annee: "2023 – 2024",
    role: "Projet personnel",
    image: "assets/projets/programme-gym/programme.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: [
      "Site web statique destiné aux débutants en musculation. L'utilisateur indique son genre, son poids et sa taille, et le site l'oriente vers un programme de prise de masse ou de perte de poids.",
      "Chaque programme propose un planning hebdomadaire complet : 5 jours de musculation à raison de 2 groupes musculaires par jour, une séance de cardio par jour d'entraînement et 2 jours de repos. Chaque exercice est illustré par une vidéo de démonstration et des consignes étape par étape.",
      "Une section nutrition aide à estimer ses besoins caloriques avec l'équation de Harris-Benedict et présente un tableau d'aliments avec leurs valeurs nutritionnelles.",
    ],
    fonctionnalites: [
      "Orientation automatique vers un programme selon le genre, le poids et la taille",
      "Planning hebdomadaire musculation + cardio, avec jours de repos",
      "10 groupes musculaires et 10 séances de cardio, avec des exercices en vidéo",
      "Consignes d'exécution détaillées, affichées à la demande",
      "Calcul des besoins caloriques (équation de Harris-Benedict)",
      "Tableau d'aliments : calories, glucides, protéines et lipides pour 100 g",
    ],
    github: "https://github.com/TAHABENSALEM/site-statique-gym",
    demo: "https://tahabensalem.github.io/site-statique-gym/welcomepage.html",
    galerie: [
      "assets/projets/programme-gym/accueil.png",
      "assets/projets/programme-gym/programme.png",
      "assets/projets/programme-gym/exercices.png",
    ],
  },
];

/* ---------------- MODÈLE À COPIER ----------------
  {
    id: "",
    publie: true,
    titre: "",
    resume: "",
    categorie: "",
    annee: "",
    role: "",
    image: "",
    technologies: [],
    description: [""],
    fonctionnalites: [],
    github: "",
    demo: "",
    video: "", // ex : "assets/projets/<id>/demo.mp4" (optionnel)
    galerie: [],
  },
--------------------------------------------------- */
