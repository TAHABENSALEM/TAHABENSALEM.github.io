# Portfolio

Site statique (HTML / CSS / JS), sans installation ni compilation.

## Structure

```
portfolio/
├── index.html          Page d'accueil (présentation, projets, services, contact)
├── projet.html         Page de détail d'un projet (projet.html?id=...)
├── data/
│   ├── profil.js       ← vos informations (nom, contact, compétences, services)
│   └── projets.js      ← la liste de vos projets
├── assets/
│   ├── img/            Photo de profil, CV…
│   └── projets/        Un dossier par projet pour ses images
├── css/style.css
└── js/                 Code d'affichage (pas besoin d'y toucher)
```

## Modifier le contenu

- **Profil** : éditer `data/profil.js`.
- **Ajouter un projet** : copier le modèle en bas de `data/projets.js`, le remplir,
  et mettre ses images dans `assets/projets/<id-du-projet>/`.

## Voir le site en local

Double-cliquer sur `index.html`.

## Mettre en ligne (lien à partager) — GitHub Pages, gratuit

1. Créer un dépôt public sur GitHub nommé `<votre-pseudo>.github.io`.
2. Y envoyer le contenu du dossier :
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/<votre-pseudo>/<votre-pseudo>.github.io.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : branche `main`**, dossier `/ (root)`.
4. Le site est accessible à l'adresse `https://<votre-pseudo>.github.io`.

Alternative sans Git : glisser-déposer le dossier sur https://app.netlify.com/drop.
