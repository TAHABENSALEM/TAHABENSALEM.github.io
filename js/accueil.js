(function () {
  const profil = window.PROFIL;
  const projets = (window.PROJETS || []).filter((p) => p.publie !== false);

  document.title = `${profil.nom} — ${profil.titre}`;
  remplirNavEtFooter(profil);

  // ---------- Hero ----------
  const photo = profil.photo
    ? `<img class="hero-photo" src="${esc(profil.photo)}" alt="${esc(profil.nom)}" />`
    : `<div class="hero-photo visuel-vide"><span>${esc(initiales(profil.nom))}</span></div>`;

  document.getElementById("hero").innerHTML = `
    ${photo}
    <div>
      ${profil.disponible ? `<span class="badge-dispo">● ${esc(profil.disponible === true ? T("dispo_defaut") : profil.disponible)}</span>` : ""}
      <h1>${esc(profil.nom)}</h1>
      <p class="hero-titre">${esc(profil.titre)}</p>
      <p class="hero-accroche">${esc(profil.accroche)}</p>
      ${profil.localisation ? `<p class="muted">${esc(profil.localisation)}</p>` : ""}
      <div class="actions">
        <a class="btn btn-primaire" href="#contact">${T("contacter")}</a>
        <a class="btn" href="#projets">${T("voir_projets")}</a>
        ${profil.cv ? `<a class="btn" href="${esc(profil.cv)}" target="_blank" rel="noopener">${profil.cvLangue === "fr" ? T("telecharger_cv_fr") : T("telecharger_cv")}</a>` : ""}
      </div>
    </div>`;

  // ---------- Projets + filtres ----------
  const grille = document.getElementById("grille-projets");
  const filtres = document.getElementById("filtres");
  const categories = [...new Set(projets.map((p) => p.categorie).filter(Boolean))];

  function carte(p) {
    return `
      <a class="carte" href="${lien("projet.html?id=" + encodeURIComponent(p.id))}">
        ${visuelProjet(p, "carte-visuel")}
        <div class="carte-corps">
          <div class="carte-meta">${esc(p.categorie || "")}${p.annee ? ` · ${esc(p.annee)}` : ""}</div>
          <h3>${esc(p.titre)}</h3>
          <p>${esc(p.resume)}</p>
          <div class="tags">${(p.technologies || []).slice(0, 5).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </div>
      </a>`;
  }

  function afficher(categorie) {
    const liste = categorie ? projets.filter((p) => p.categorie === categorie) : projets;
    grille.innerHTML = liste.length
      ? liste.map(carte).join("")
      : `<p class="muted">${T("bientot")}</p>`;
    filtres.querySelectorAll("button").forEach((b) =>
      b.classList.toggle("actif", (b.dataset.cat || "") === (categorie || ""))
    );
  }

  if (categories.length > 1) {
    filtres.innerHTML =
      `<button data-cat="">${T("tous")}</button>` +
      categories.map((c) => `<button data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    filtres.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") afficher(e.target.dataset.cat);
    });
  }
  afficher("");

  // ---------- Services ----------
  const services = profil.services || [];
  if (services.length) {
    document.getElementById("services").innerHTML = services
      .map((s) => `<div class="service"><h3>${esc(s.titre)}</h3><p>${esc(s.texte)}</p></div>`)
      .join("");
  } else {
    document.getElementById("services-section").remove();
  }

  // ---------- Parcours ----------
  const experiences = profil.experiences || [];
  document.getElementById("experiences").innerHTML = experiences.length
    ? `<h3 class="parcours-titre">${T("experience")}</h3>` +
      experiences
        .map(
          (x) => `
      <div class="experience">
        <div class="experience-entete">
          <div><h4>${esc(x.poste)}</h4><div class="experience-org">${esc(x.entreprise)}</div></div>
          <span class="muted experience-periode">${esc(x.periode)}</span>
        </div>
        <ul>${(x.points || []).map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </div>`
        )
        .join("")
    : "";

  const blocListe = (titre, items) =>
    items && items.length
      ? `<div class="parcours-bloc"><h3 class="parcours-titre">${titre}</h3><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`
      : "";
  const formation = profil.formation || [];
  document.getElementById("parcours-aside").innerHTML =
    (formation.length
      ? `<div class="parcours-bloc"><h3 class="parcours-titre">${T("formation")}</h3>${formation
          .map(
            (f) => `
        <div class="formation">
          <h4>${esc(f.diplome)}</h4>
          <div class="muted">${esc(f.etablissement)}</div>
          <div class="muted experience-periode">${esc(f.periode)}</div>
        </div>`
          )
          .join("")}</div>`
      : "") +
    blocListe(T("certificats"), profil.certificats) +
    blocListe(T("langues"), profil.langues) +
    blocListe(T("associations"), profil.associations);
  if (!experiences.length && !formation.length) document.getElementById("parcours").remove();

  // ---------- À propos + compétences ----------
  document.getElementById("apropos-texte").innerHTML = (profil.apropos || [])
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");
  document.getElementById("competences").innerHTML = (profil.competences || [])
    .map(
      (c) => `
      <div class="competence">
        <h4>${esc(c.categorie)}</h4>
        <div class="tags">${c.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div>
      </div>`
    )
    .join("");

  // ---------- Contact ----------
  const { email, telephone, titre, texte } = profil.contact || {};
  document.getElementById("contact-card").innerHTML = `
    <h2>${esc(titre || T("contact_titre"))}</h2>
    <p>${esc(texte || T("contact_texte"))}</p>
    <div class="actions">
      ${email ? `<a class="btn btn-primaire" href="mailto:${esc(email)}">${esc(email)}</a>` : ""}
      ${telephone ? `<a class="btn" href="tel:${esc(telephone.replace(/\s/g, ""))}">${esc(telephone)}</a>` : ""}
    </div>
    <div class="liens-sociaux">${liensSociaux(profil)}</div>`;
})();
