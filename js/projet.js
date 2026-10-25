(function () {
  const profil = window.PROFIL;
  const projets = (window.PROJETS || []).filter((p) => p.publie !== false);
  remplirNavEtFooter(profil);

  const id = new URLSearchParams(location.search).get("id");
  const index = projets.findIndex((p) => p.id === id);
  const zone = document.getElementById("detail");

  if (index === -1) {
    document.title = `Projet introuvable — ${profil.nom}`;
    zone.innerHTML = `
      <h1>Projet introuvable</h1>
      <p class="muted">Ce projet n'existe pas ou a été renommé.</p>
      <a class="btn" href="index.html#projets">← Retour aux projets</a>`;
    return;
  }

  const p = projets[index];
  document.title = `${p.titre} — ${profil.nom}`;

  const liens = [
    p.github && `<a class="btn btn-primaire" href="${esc(p.github)}" target="_blank" rel="noopener">Code sur GitHub</a>`,
    p.demo && `<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Voir la démo</a>`,
  ].filter(Boolean).join("");

  const infos = [
    ["Catégorie", p.categorie],
    ["Année", p.annee],
    ["Rôle", p.role],
  ].filter(([, v]) => v);

  const precedent = projets[index - 1];
  const suivant = projets[index + 1];

  zone.innerHTML = `
    <div class="detail-entete">
      <div class="carte-meta">${esc(p.categorie || "")}${p.annee ? ` · ${esc(p.annee)}` : ""}</div>
      <h1>${esc(p.titre)}</h1>
      <p class="hero-accroche">${esc(p.resume)}</p>
      ${liens ? `<div class="actions">${liens}</div>` : ""}
    </div>

    ${p.video
      ? `<video class="detail-visuel" src="${esc(p.video)}" ${p.image ? `poster="${esc(p.image)}"` : ""} controls preload="metadata"></video>`
      : visuelProjet(p, "detail-visuel")}

    <div class="detail-grille">
      <div class="detail-texte">
        <h2>Description</h2>
        ${(p.description || []).map((t) => `<p>${esc(t)}</p>`).join("")}
        ${(p.fonctionnalites || []).length ? `
          <h2>Fonctionnalités</h2>
          <ul>${p.fonctionnalites.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
      </div>
      <aside class="detail-aside">
        ${infos.map(([k, v]) => `<div><div class="muted">${k}</div><div>${esc(v)}</div></div>`).join("")}
        ${(p.technologies || []).length ? `
          <div><div class="muted">Technologies</div>
          <div class="tags">${p.technologies.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>` : ""}
      </aside>
    </div>

    ${(p.galerie || []).length ? `
      <h2>Galerie</h2>
      <div class="galerie">
        ${p.galerie.map((src) => `<a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="" loading="lazy" /></a>`).join("")}
      </div>` : ""}

    <nav class="detail-nav">
      ${precedent ? `<a href="projet.html?id=${encodeURIComponent(precedent.id)}">← ${esc(precedent.titre)}</a>` : "<span></span>"}
      ${suivant ? `<a href="projet.html?id=${encodeURIComponent(suivant.id)}">${esc(suivant.titre)} →</a>` : "<span></span>"}
    </nav>`;
})();
