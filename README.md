# matrice-actions-HPI

Matrice d'actions **Effort × Impact** — 53 actions issues d'un bilan WPPSI-IV,
classées en quatre quadrants (Gains rapides, Grands paris, Compléments faciles,
À différer). Chaque action ouvre une fiche détaillée : pourquoi, étapes,
matériel, signaux, pièges.

Site statique en HTML/CSS/JS, sans build, prêt à être servi par GitHub Pages.

## Voir en ligne

Une fois GitHub Pages activé pour ce dépôt, le site est servi à :

<https://toniojero.github.io/matrice-actions-HPI/>

La page racine redirige automatiquement vers `matrice/`.

## Structure

```
.
├── index.html              # redirection racine vers matrice/
├── .nojekyll               # désactive Jekyll (préserve les fichiers en _*)
└── matrice/
    ├── index.html          # vue matrice (4 quadrants)
    ├── data.js             # source unique : 53 actions + métadonnées
    └── actions/            # une page de détail par action
        ├── _template.html
        ├── journal-comportemental.html
        └── … (53 fiches)
```

`data.js` est la source de vérité pour la matrice. Les fiches sous
`actions/<slug>.html` sont des pages indépendantes générées à partir du même
modèle (`_template.html`).

## Activer GitHub Pages

1. Repository → **Settings** → **Pages**.
2. *Source* : **Deploy from a branch**.
3. *Branch* : `main` · *Folder* : `/ (root)`.
4. Sauvegarder ; le site est publié sous une minute.

Le fichier `.nojekyll` à la racine est important : sans lui, Jekyll
ignorerait `matrice/actions/_template.html` (préfixe `_`).

## Développer en local

Pas de build. N'importe quel serveur statique convient :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

Ou directement :

```bash
npx serve .
```

## Ajouter une action

1. Ajouter une entrée dans `matrice/data.js` (slug, titre, quadrant, effort,
   impact, etc.).
2. Dupliquer `matrice/actions/_template.html` sous le nom
   `matrice/actions/<slug>.html` et remplir le contenu.
3. Vérifier que le slug correspond exactement entre `data.js` et le nom de
   fichier — la matrice s'y lie directement.
