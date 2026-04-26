# matrice-actions-HPI

Cinquante-trois actions concrètes pour accompagner un enfant à haut potentiel
intellectuel (HPI), classées dans une matrice **Effort × Impact**.

Pensée rapide, sensibilité accrue, exigence interne forte : ce fonctionnement
demande un cadre adapté pour ne pas basculer dans l'épuisement, l'opposition ou
le retrait. La matrice permet de choisir où dépenser l'énergie en priorité,
plutôt que de tout tenter à la fois.

Site statique en HTML/CSS/JS, sans build, servi par GitHub Pages.

## Voir en ligne

<https://toniojero.github.io/matrice-actions-HPI/>

La page racine redirige automatiquement vers `matrice/`.

## Comment lire la matrice

Les actions sont réparties dans quatre quadrants :

| | Impact élevé | Impact moindre |
|---|---|---|
| **Effort faible** | Gains rapides | Compléments faciles |
| **Effort moyen à élevé** | Grands paris | À différer ou conditionnel |

Commencer par **Gains rapides** — faible effort, bénéfice élevé. Cliquer sur
une action ouvre une fiche détaillée : pourquoi, comment faire, matériel,
signes que ça fonctionne, pièges à éviter.

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
        └── … (53 fiches)
```

`data.js` est la source de vérité pour le contenu. Chaque fiche sous
`actions/<slug>.html` est un clone du modèle (`_template.html`) qui lit
`data.js` au chargement et affiche l'entrée correspondant à son nom de fichier.

## Activer GitHub Pages

1. Repository → **Settings** → **Pages**.
2. *Source* : **Deploy from a branch**.
3. *Branch* : `main` · *Folder* : `/ (root)`.
4. Sauvegarder ; le site est publié sous une minute.

Le fichier `.nojekyll` à la racine est important : sans lui, Jekyll ignorerait
`matrice/actions/_template.html` (préfixe `_`).

## Développer en local

Pas de build. N'importe quel serveur statique convient :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

Ou :

```bash
npx serve .
```

## Ajouter une action

1. Ajouter une entrée dans `matrice/data.js` (slug, titre, quadrant, effort,
   impact, etc.).
2. Dupliquer `matrice/actions/_template.html` sous le nom
   `matrice/actions/<slug>.html`.
3. Vérifier que le slug dans `data.js` correspond exactement au nom de fichier
   — la matrice et la fiche s'y lient directement.
