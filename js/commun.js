// Fonctions partagées entre les pages.

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

function remplirNavEtFooter(profil) {
  document.getElementById("nav-nom").textContent = profil.nom;
  document.getElementById("footer").innerHTML = `
    <span>© ${new Date().getFullYear()} ${esc(profil.nom)}</span>
    <span class="footer-liens">${liensSociaux(profil)}</span>`;
}
