// Fonctions partagées entre les pages.

// ---------- Langue (français par défaut, anglais via le bouton ou ?lang=en) ----------
function detecterLangue() {
  const demandee = new URLSearchParams(location.search).get("lang");
  if (demandee === "fr" || demandee === "en") {
    try {
      localStorage.setItem("langue", demandee);
    } catch (e) {}
    return demandee;
  }
  try {
    const memorisee = localStorage.getItem("langue");
    if (memorisee === "fr" || memorisee === "en") return memorisee;
  } catch (e) {}
  return "fr";
}

const LANG = detecterLangue();
document.documentElement.lang = LANG;

// En anglais, les traductions de data/en.js remplacent les textes français.
if (LANG === "en" && window.EN) {
  const base = window.PROFIL;
  const enProfil = window.EN.profil || {};
  window.PROFIL = { ...base, ...enProfil, contact: { ...base.contact, ...(enProfil.contact || {}) } };
  if (enProfil.cv_en) window.PROFIL.cv = enProfil.cv_en;
  else window.PROFIL.cvLangue = "fr"; // pas de CV anglais : on l'indique sur le bouton
  window.PROJETS = (window.PROJETS || []).map((p) => ({ ...p, ...((window.EN.projets || {})[p.id] || {}) }));
}

// Textes de l'interface (tout ce qui n'est pas dans data/*.js).
const UI = {
  fr: {
    nav_projets: "Projets",
    nav_parcours: "Parcours",
    nav_apropos: "À propos",
    nav_contact: "Contact",
    nav_tous_projets: "← Tous les projets",
    theme: "Changer de thème",
    langue_bouton: "EN",
    langue_label: "English version",
    meta_description: "Portfolio de Taha Ben Salem — ingénieur en informatique, IA et full-stack.",
    dispo_defaut: "Disponible pour des missions",
    contacter: "Me contacter",
    voir_projets: "Voir mes projets",
    telecharger_cv: "Télécharger mon CV",
    titre_projets: "Projets",
    titre_parcours: "Parcours",
    titre_apropos: "À propos",
    experience: "Expérience",
    formation: "Formation",
    certificats: "Certificats",
    langues: "Langues",
    associations: "Vie associative",
    tous: "Tous",
    bientot: "Les projets arrivent bientôt.",
    contact_titre: "Un projet en tête ?",
    contact_texte: "Parlons-en : je réponds généralement sous 24 h.",
    introuvable: "Projet introuvable",
    introuvable_texte: "Ce projet n'existe pas ou a été renommé.",
    retour: "← Retour aux projets",
    code_github: "Code sur GitHub",
    voir_demo: "Voir la démo",
    categorie: "Catégorie",
    annee: "Année",
    role: "Rôle",
    description: "Description",
    fonctionnalites: "Fonctionnalités",
    technologies: "Technologies",
    galerie: "Galerie",
  },
  en: {
    nav_projets: "Projects",
    nav_parcours: "Background",
    nav_apropos: "About",
    nav_contact: "Contact",
    nav_tous_projets: "← All projects",
    theme: "Toggle theme",
    langue_bouton: "FR",
    langue_label: "Version française",
    meta_description: "Portfolio of Taha Ben Salem — software engineer in AI and full-stack development.",
    dispo_defaut: "Available for assignments",
    contacter: "Contact me",
    voir_projets: "See my projects",
    telecharger_cv: "Download my CV",
    telecharger_cv_fr: "Download my CV (French)",
    titre_projets: "Projects",
    titre_parcours: "Background",
    titre_apropos: "About",
    experience: "Experience",
    formation: "Education",
    certificats: "Certifications",
    langues: "Languages",
    associations: "Activities",
    tous: "All",
    bientot: "Projects coming soon.",
    contact_titre: "Have a project in mind?",
    contact_texte: "Let's talk: I usually reply within 24 hours.",
    introuvable: "Project not found",
    introuvable_texte: "This project does not exist or has been renamed.",
    retour: "← Back to projects",
    code_github: "Code on GitHub",
    voir_demo: "View demo",
    categorie: "Category",
    annee: "Year",
    role: "Role",
    description: "Description",
    fonctionnalites: "Features",
    technologies: "Technologies",
    galerie: "Gallery",
  },
};

function T(cle) {
  return (UI[LANG] && UI[LANG][cle]) ?? UI.fr[cle] ?? cle;
}

// Ajoute ?lang=en aux liens internes en anglais (la langue suit même sans mémoire du navigateur).
function lien(url) {
  if (LANG !== "en") return url;
  const [chemin, ancre] = url.split("#");
  const sep = chemin.includes("?") ? "&" : "?";
  return `${chemin}${sep}lang=en${ancre ? "#" + ancre : ""}`;
}

function esc(texte) {
  return String(texte ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}

function initiales(texte) {
  return String(texte || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((m) => m[0].toUpperCase())
    .join("");
}

// Image du projet, ou un visuel de remplacement avec ses initiales.
function visuelProjet(projet, classe) {
  if (projet.image) {
    return `<img class="${classe}" src="${esc(projet.image)}" alt="${esc(projet.titre)}" loading="lazy" />`;
  }
  return `<div class="${classe} visuel-vide"><span>${esc(initiales(projet.titre))}</span></div>`;
}

const LIBELLES_LIENS = {
  github: "GitHub",
  linkedin: "LinkedIn",
  malt: "Malt",
  fiverr: "Fiverr",
  upwork: "Upwork",
};

function liensSociaux(profil) {
  return Object.entries(profil.liens || {})
    .filter(([, url]) => url)
    .map(([cle, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(LIBELLES_LIENS[cle] || cle)}</a>`)
    .join("");
}

// Thème clair / sombre (mémorisé dans le navigateur).
(function () {
  const racine = document.documentElement;
  try {
    const choix = localStorage.getItem("theme");
    if (choix) racine.dataset.theme = choix;
  } catch (e) {}
  document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.getElementById("theme-toggle");
    if (!bouton) return;
    bouton.addEventListener("click", () => {
      const sombreActuel =
        racine.dataset.theme === "dark" ||
        (!racine.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
      racine.dataset.theme = sombreActuel ? "light" : "dark";
      try {
        localStorage.setItem("theme", racine.dataset.theme);
      } catch (e) {}
    });
  });
})();

// Bouton FR / EN : recharge la page dans l'autre langue (en gardant l'adresse du projet).
function changerLangue() {
  const url = new URL(location.href);
  url.searchParams.set("lang", LANG === "fr" ? "en" : "fr");
  location.href = url.toString();
}

// Traduit le menu, le pied de page et les textes écrits en dur dans le HTML.
function remplirNavEtFooter(profil) {
  document.getElementById("nav-nom").textContent = profil.nom;
  document.getElementById("footer").innerHTML = `
    <span>© ${new Date().getFullYear()} ${esc(profil.nom)}</span>
    <span class="footer-liens">${liensSociaux(profil)}</span>`;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = T(el.dataset.i18n);
  });
  document.querySelectorAll("a[href^='index.html'], a[href^='projet.html']").forEach((a) => {
    a.setAttribute("href", lien(a.getAttribute("href")));
  });

  const theme = document.getElementById("theme-toggle");
  if (theme) theme.setAttribute("aria-label", T("theme"));
  const bouton = document.getElementById("lang-toggle");
  if (bouton) {
    bouton.textContent = T("langue_bouton");
    bouton.setAttribute("aria-label", T("langue_label"));
    bouton.setAttribute("title", T("langue_label"));
    bouton.addEventListener("click", changerLangue);
  }
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", T("meta_description"));
}
