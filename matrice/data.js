// Single source of truth for the matrix and detail pages.
// Each action: { slug, title, category, effort, impact, quadrant, summary, why, steps, materials, signals, pitfalls }

window.ACTIONS = [
  // ============ Q1: Gains rapides (Effort faible · Impact élevé) ============
  {
    slug: "journal-comportemental",
    title: "Journal comportemental",
    category: "Clinique",
    effort: "Faible",
    impact: 2,
    quadrant: "quick",
    topPick: true,
    summary: "Note partagée entre les deux parents. Cinq champs, deux à quatre entrées par semaine. Base de preuves longitudinale pour l'évaluation de juillet 2026.",
    why: "C'est l'action au ROI le plus élevé disponible avant l'évaluation. Coût : dix minutes par semaine. Sortie : la documentation qui détermine si le rendez-vous aboutit à un diagnostic précis ou à un nouveau report.",
    steps: [
      "Créer une note partagée (Notes Apple, Google Keep, Notion) accessible aux deux parents.",
      "Définir le format en cinq champs : Date · Contexte · Déclencheur · Réaction · Ce qui a aidé.",
      "Ne pas tout capturer. Capturer le typique : 2 à 4 entrées significatives par semaine.",
      "Écrire en descriptif, pas en interprétatif. « Elle s'est bouché les oreilles » plutôt que « elle était submergée ».",
      "Relire ensemble une fois par semaine, repérer les patterns récurrents.",
      "Imprimer ou exporter en PDF avant le rendez-vous de juillet 2026."
    ],
    materials: [
      "Une note numérique partagée, ou un carnet papier dédié.",
      "Aucun outil spécialisé requis."
    ],
    example: {
      label: "Exemple d'entrée",
      rows: [
        ["Date", "2026-04-22 · 17h30 · Jeudi"],
        ["Contexte", "Sortie d'école, cour, groupe de 6 enfants."],
        ["Déclencheur", "Sifflet bruyant d'un autre parent."],
        ["Réaction", "Bouché les oreilles, demandé à partir, refus du goûter pendant 20 min."],
        ["Ce qui a aidé", "Marche calme jusqu'à la maison, eau, nommer le bruit à voix haute."]
      ]
    },
    signals: [
      "Patterns récurrents qui apparaissent après 3 semaines.",
      "Distinction claire entre déclencheurs sensoriels et déclencheurs sociaux.",
      "Inventaire des stratégies qui fonctionnent réellement."
    ],
    pitfalls: [
      "Vouloir tout consigner — la fatigue tue le journal en 10 jours.",
      "Interpréter au lieu de décrire — le clinicien a besoin de données brutes.",
      "Tenir le journal seul — les deux parents doivent contribuer."
    ]
  },
  {
    slug: "parents-alignes",
    title: "Les deux parents alignés",
    category: "Famille",
    effort: "Faible",
    impact: 2,
    quadrant: "quick",
    topPick: true,
    summary: "Mêmes routines, même langage, mêmes réponses face aux mêmes situations. La cohérence inter-parentale est l'un des amplificateurs les plus puissants de toute intervention.",
    why: "Une enfant à profil hétérogène a besoin d'un environnement maximalement prévisible. Deux adultes qui répondent différemment au même déclencheur multiplient la charge cognitive et émotionnelle de l'enfant.",
    steps: [
      "Discussion hebdomadaire de 20 minutes entre les deux parents, sans l'enfant.",
      "Convenir des trois ou quatre formulations clés : nommer une émotion, annoncer une transition, refuser quelque chose.",
      "Convenir des règles non-négociables (5 max) et des marges de souplesse.",
      "Quand l'un des parents gère une crise, l'autre soutient sans intervenir ni contredire.",
      "Réajuster en cas de désaccord — en privé, jamais devant l'enfant."
    ],
    materials: [
      "Une note partagée listant les formulations et règles convenues.",
      "20 minutes hebdomadaires bloquées dans le calendrier."
    ],
    example: {
      label: "Formulations partagées",
      rows: [
        ["Transition", "« Dans cinq minutes, on range. » (jamais « bientôt »)"],
        ["Refus", "« Je comprends que tu veux X. La réponse est non. »"],
        ["Émotion", "« Tu as l'air en colère. C'est OK d'être en colère. »"],
        ["Crise", "Le parent présent gère. L'autre attend en silence."]
      ]
    },
    signals: [
      "L'enfant ne fait plus de tentatives de triangulation entre parents.",
      "Diminution de la durée des crises de transition.",
      "Sentiment partagé d'équipe parentale."
    ],
    pitfalls: [
      "Désaccords devant l'enfant — sape immédiatement l'effet.",
      "Vouloir aligner sur trop de choses à la fois — commencer par 3 ou 4.",
      "Confondre alignement et uniformité — chaque parent garde sa personnalité."
    ]
  },
  {
    slug: "emploi-du-temps-visuel",
    title: "Emploi du temps visuel mural",
    category: "Environnement",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Une frise de pictogrammes affichée dans la cuisine ou le couloir. L'enfant voit la séquence de sa journée et peut anticiper plutôt que subir.",
    why: "L'anticipation réduit l'anxiété de transition. Pour un profil hétérogène, voir la journée à venir transforme l'incertitude en lecture.",
    steps: [
      "Choisir un mur visible et à hauteur d'enfant (cuisine, entrée, ou chambre).",
      "Imprimer ou dessiner 8 à 12 pictogrammes : lever, petit-déjeuner, école, déjeuner, sieste, goûter, jeu, bain, dîner, histoire, dodo.",
      "Fixer avec velcro ou aimants pour pouvoir réorganiser selon les jours.",
      "Le matin, parcourir la frise ensemble : « Aujourd'hui, après l'école, on va chez Mamie. »",
      "Déplacer un curseur ou retourner les pictogrammes au fur et à mesure de la journée."
    ],
    materials: [
      "Pictogrammes imprimés (téléchargeables gratuitement : ARASAAC, Sclera).",
      "Velcro adhésif ou aimants.",
      "Un panneau ou simplement un mur."
    ],
    example: {
      label: "Séquence type d'un mercredi",
      rows: [
        ["07h30", "🌅 Lever"],
        ["08h00", "🥐 Petit-déjeuner"],
        ["09h00", "🎨 Activité créative"],
        ["12h00", "🍽 Déjeuner"],
        ["14h00", "🏞 Parc"],
        ["17h00", "📚 Histoire"],
        ["19h30", "🛁 Bain · 🌙 Dodo"]
      ]
    },
    signals: [
      "L'enfant consulte spontanément la frise.",
      "Diminution des questions répétées « et après ? ».",
      "Transitions plus fluides."
    ],
    pitfalls: [
      "Frise trop chargée — 12 items maximum.",
      "Ne pas la mettre à jour — perd toute crédibilité en 3 jours.",
      "L'imposer — la construire avec l'enfant la rend sienne."
    ]
  },
  {
    slug: "time-timer",
    title: "Time-timer pour les transitions",
    category: "Environnement",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Un minuteur visuel qui montre le temps restant par un disque rouge qui se réduit. Rend le temps concret pour un cerveau qui n'a pas encore l'abstraction horaire.",
    why: "« Encore cinq minutes » est une abstraction. Un disque rouge qui rétrécit est une perception. La transition devient anticipée plutôt que subie.",
    steps: [
      "Acheter un Time-Timer (ou utiliser une app gratuite équivalente).",
      "L'introduire dans un contexte non-conflictuel d'abord : « On joue jusqu'à ce que le rouge disparaisse. »",
      "Annoncer la transition en montrant le minuteur, pas en l'imposant verbalement.",
      "Quand le disque atteint zéro, transition immédiate, sans négociation.",
      "Utiliser pour : fin de jeu, fin d'écran, durée de brossage, durée de tâche."
    ],
    materials: [
      "Un Time-Timer 20cm (env. 30€) ou app « Time Timer » sur tablette.",
      "Une routine d'utilisation cohérente."
    ],
    example: {
      label: "Usage type",
      rows: [
        ["Fin de jeu libre", "10 min avant le bain"],
        ["Brossage des dents", "2 min"],
        ["Temps d'écran", "20 min, non-renouvelable"],
        ["Habillage du matin", "10 min, en autonomie"]
      ]
    },
    signals: [
      "L'enfant accepte la fin sans crise après quelques jours.",
      "Elle commande elle-même le minuteur pour ses propres tâches.",
      "Réduction des conflits de transition."
    ],
    pitfalls: [
      "Le déclencher au milieu d'un conflit — l'introduire en contexte calme d'abord.",
      "Renégocier quand le disque atteint zéro — la règle disparaît.",
      "L'utiliser pour tout — perd son effet sur les vrais moments-clés."
    ]
  },
  {
    slug: "desencombrer-chambre",
    title: "Désencombrer la chambre",
    category: "Environnement",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Moins de jouets visibles, rotation hebdomadaire d'un petit ensemble. Une chambre épurée réduit la charge sensorielle et améliore la qualité du jeu.",
    why: "Une chambre saturée d'objets est un environnement saturé de stimuli. Pour un profil sensoriellement réactif, c'est une fatigue de fond permanente. La rotation transforme aussi 50 jouets en 50 redécouvertes.",
    steps: [
      "Faire un inventaire complet avec l'enfant. Trier en 3 piles : favoris, occasionnels, à donner.",
      "Garder visible 8 à 12 jouets / livres maximum, rangés par catégorie.",
      "Stocker le reste dans des caisses opaques étiquetées, hors de vue (placard, cave).",
      "Tourner une caisse par semaine — le dimanche, échanger un set contre un autre.",
      "Donner ou jeter les jouets cassés ou jamais utilisés depuis 6 mois."
    ],
    materials: [
      "3 ou 4 caisses de rangement opaques avec couvercle.",
      "Étagères ouvertes pour les 8–12 visibles.",
      "Une après-midi de tri."
    ],
    example: {
      label: "Set actuellement visible",
      rows: [
        ["Construction", "Une boîte de Kapla"],
        ["Imitation", "Dînette + 4 figurines"],
        ["Créatif", "Crayons, papiers, ciseaux"],
        ["Lecture", "8 livres choisis cette semaine"],
        ["Calme", "Un puzzle, une peluche"]
      ]
    },
    signals: [
      "L'enfant joue plus longtemps avec un même jouet.",
      "Le rangement du soir devient possible en moins de 5 minutes.",
      "Demande spontanée d'un jouet « stocké » → le ressortir, en ranger un autre."
    ],
    pitfalls: [
      "Jeter sans concertation — crée un sentiment de perte.",
      "Désencombrer puis racheter — l'inflation reprend en 3 mois.",
      "Stocker à vue — annule l'effet de simplification."
    ]
  },
  {
    slug: "annoncer-changements",
    title: "Annoncer les changements à l'avance",
    category: "Environnement",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Aucune surprise. Tout changement de routine, de lieu, de personne est annoncé au moins quelques heures à l'avance, idéalement la veille.",
    why: "Les profils rigides aux transitions ne réagissent pas mal au changement — ils réagissent mal au changement non-prévu. La même sortie devient acceptable si elle est annoncée 24h à l'avance.",
    steps: [
      "Annoncer la veille au soir tous les événements non-routiniers du lendemain.",
      "Pour les imprévus du jour, prévenir dès que possible avec un délai concret : « Dans une heure, on part chez Mamie. »",
      "Utiliser un calendrier mural visuel pour la semaine.",
      "Quand quelque chose est annulé, l'expliquer aussi : « Mamie devait venir, elle est malade, elle viendra dimanche. »",
      "Décrire ce qui va se passer concrètement : qui sera là, où, combien de temps, ce qu'on fera."
    ],
    materials: [
      "Calendrier mural à pictogrammes pour la semaine.",
      "Routine du soir « ce qu'on fera demain »."
    ],
    example: {
      label: "Annonce type",
      rows: [
        ["Veille au soir", "« Demain matin, on va chez le pédiatre. »"],
        ["Détails", "« Tu prendras ton doudou. Le médecin écoutera ton cœur avec son stéthoscope. »"],
        ["Durée", "« Ça dure 20 minutes. Après, on rentre à la maison. »"],
        ["Récap matin", "« Tu te souviens, ce matin on va... »"]
      ]
    },
    signals: [
      "Diminution des crises de transition.",
      "L'enfant pose des questions précises sur l'événement à venir.",
      "Elle anticipe sans angoisse."
    ],
    pitfalls: [
      "Annoncer trop longtemps à l'avance — anxiété d'anticipation.",
      "Sur-promettre — chaque manquement érode la confiance.",
      "Oublier d'annoncer les annulations — vécu aussi fortement que l'événement."
    ]
  },
  {
    slug: "nommer-emotions",
    title: "Nommer ses émotions à voix haute",
    category: "Émotion",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Mettre des mots sur ce qu'elle ressent, en temps réel, sans interpréter. Construit le vocabulaire émotionnel et la métacognition.",
    why: "À 5 ans, le cerveau émotionnel domine le cerveau verbal. Nommer l'émotion active les circuits préfrontaux et amorce la régulation. C'est de la co-régulation explicite.",
    steps: [
      "Observer la posture, le visage, le ton avant d'interpréter.",
      "Formuler de manière hypothétique : « Tu as l'air... » plutôt que « Tu es... ».",
      "Valider sans corriger : « C'est OK d'être en colère. »",
      "Élargir le vocabulaire au-delà de joie/tristesse/colère/peur : frustré, déçu, jaloux, anxieux, fier, soulagé.",
      "Le faire aussi pour les émotions positives — pas seulement pour gérer les crises."
    ],
    materials: [
      "Aucun matériel requis.",
      "Optionnel : roue des émotions ou cartes (voir action dédiée)."
    ],
    example: {
      label: "Reformulations types",
      rows: [
        ["Crise", "« Tu es très en colère parce que ta tour est tombée. »"],
        ["Refus", "« Tu es déçue qu'on ne puisse pas y aller aujourd'hui. »"],
        ["Réussite", "« Tu as l'air vraiment fière de ton dessin. »"],
        ["Confusion", "« Je vois que tu es triste, mais je ne sais pas pourquoi. Tu peux m'expliquer ? »"]
      ]
    },
    signals: [
      "L'enfant nomme spontanément ses propres émotions au bout de quelques semaines.",
      "Elle commence à nommer les émotions des autres.",
      "Diminution de l'intensité des crises (même fréquence d'abord, puis durée plus courte)."
    ],
    pitfalls: [
      "Nommer à la place de l'enfant à chaque fois — empêche l'auto-identification.",
      "Corriger : « Mais non, tu n'es pas en colère. » — invalide.",
      "Le faire seulement en crise — manque le temps positif."
    ]
  },
  {
    slug: "cartes-emotions",
    title: "Cartes d'émotions / roue des sentiments",
    category: "Émotion",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Un support visuel à portée de main qui permet à l'enfant de pointer ce qu'elle ressent quand les mots manquent.",
    why: "Quand l'amygdale est activée, l'accès au lexique chute. Pointer un visage ou une couleur reste possible. Le support contourne le verrou et amorce le retour au calme.",
    steps: [
      "Choisir un format adapté : roue à pivot, cartes plastifiées, ou poster mural.",
      "L'introduire en moment calme, jouer à reconnaître les visages.",
      "Le placer dans deux endroits stratégiques : coin calme et près du lit.",
      "En crise, ne pas demander « pourquoi tu pleures » — proposer la roue : « Montre-moi. »",
      "Élargir progressivement : ajouter des émotions secondaires (frustré, jaloux, anxieux)."
    ],
    materials: [
      "Roue des émotions imprimée ou achetée (env. 10€).",
      "Ou cartes plastifiées maison à partir de visages photographiés ou dessinés.",
      "Velcro ou aimants pour la fixer."
    ],
    example: {
      label: "Niveaux à introduire",
      rows: [
        ["Niveau 1", "Joie · Tristesse · Colère · Peur"],
        ["Niveau 2", "Frustration · Déception · Surprise · Dégoût"],
        ["Niveau 3", "Jalousie · Honte · Fierté · Soulagement"],
        ["Niveau 4", "Anxiété · Ennui · Gratitude · Tendresse"]
      ]
    },
    signals: [
      "L'enfant pointe spontanément en moment difficile.",
      "Elle utilise le vocabulaire des cartes en parlant.",
      "Elle propose la roue à un parent ou frère/sœur."
    ],
    pitfalls: [
      "Trop de visages d'un coup — commencer par 4.",
      "L'utiliser comme test ou évaluation — l'enfant se braque.",
      "L'oublier en crise — mettre un exemplaire dans chaque pièce-clé."
    ]
  },
  {
    slug: "renforcement-positif",
    title: "Retour positif immédiat et spécifique",
    category: "Émotion",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Pas « bravo » générique. Décrire ce qui a été observé, immédiatement, factuellement. Renforce les comportements précis qu'on veut voir se répéter.",
    why: "Les louanges générales (« tu es géniale ») construisent une identité fragile. Les retours spécifiques (« tu as continué malgré la difficulté ») construisent des capacités identifiables et réutilisables.",
    steps: [
      "Observer activement, surtout les tentatives, pas seulement les réussites.",
      "Décrire factuellement : « Tu as pris une grande respiration avant de parler. »",
      "Nommer la qualité ou stratégie : « C'est de la patience. »",
      "Le faire immédiatement — pas en fin de journée.",
      "Doser : 3 à 5 retours positifs spécifiques par jour suffisent."
    ],
    materials: [
      "Aucun matériel.",
      "Une attention déployée plutôt qu'automatique."
    ],
    example: {
      label: "Reformulations",
      rows: [
        ["Au lieu de", "→ Préférer"],
        ["Bravo !", "Tu as terminé tout ton puzzle."],
        ["Tu es géniale.", "Tu as essayé trois fois avant de réussir."],
        ["C'est joli.", "Tu as utilisé beaucoup de bleus dans ton dessin."],
        ["Bien joué.", "Tu as attendu ton tour, c'était difficile."]
      ]
    },
    signals: [
      "L'enfant répète les comportements nommés.",
      "Elle commence à se féliciter elle-même de manière spécifique.",
      "Sentiment de compétence plutôt que dépendance au regard adulte."
    ],
    pitfalls: [
      "Sur-louanger — perd toute valeur.",
      "Ne louanger que les résultats — manque les efforts.",
      "Confondre louange et corruption (« Si tu fais ça, je te dis bravo »)."
    ]
  },
  {
    slug: "journaliser-declencheurs",
    title: "Identifier et journaliser les déclencheurs sensoriels",
    category: "Sensoriel",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Tenir une liste vivante des stimuli qui provoquent une réaction marquée : bruits, textures, lumières, odeurs, étiquettes, températures.",
    why: "On ne peut retirer que ce qu'on a identifié. Sans inventaire, on traite chaque crise comme un événement isolé alors qu'elle suit souvent un pattern sensoriel précis.",
    steps: [
      "Démarrer une liste à 5 colonnes : Date · Stimulus · Contexte · Réaction · Intensité (1-3).",
      "Noter pendant 2 à 3 semaines, sans modifier l'environnement.",
      "Trier ensuite par catégorie : auditif / tactile / visuel / olfactif / proprioceptif.",
      "Identifier les stimuli intensité 3 récurrents — ce sont les priorités.",
      "Distinguer évitable (étiquette de t-shirt) et inévitable (sirène de pompiers)."
    ],
    materials: [
      "Note partagée ou tableur.",
      "Format minimal : 5 colonnes."
    ],
    example: {
      label: "Extrait de tableau",
      rows: [
        ["22/04 · Sifflet", "Cour d'école", "Bouche oreilles, demande de partir", "3 — Auditif"],
        ["23/04 · Étiquette T-shirt", "Habillage", "Refus, pleurs", "2 — Tactile"],
        ["24/04 · Pull en laine", "Habillage", "Gratte, énervement", "2 — Tactile"],
        ["25/04 · Lumière néon", "Cantine", "Plisse les yeux, mange peu", "1 — Visuel"]
      ]
    },
    signals: [
      "Émergence d'un ou deux patterns clairs (auditif puis tactile, par ex.).",
      "Capacité à anticiper les contextes à risque.",
      "Liste utilisable telle quelle par l'évaluateur."
    ],
    pitfalls: [
      "Noter seulement les crises — manque les sensibilités sub-cliniques.",
      "Catégoriser trop tôt — laisser les données s'accumuler.",
      "Confondre déclencheur sensoriel et déclencheur émotionnel."
    ]
  },
  {
    slug: "supprimer-irritants",
    title: "Supprimer les irritants sensoriels connus",
    category: "Sensoriel",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Une fois les déclencheurs identifiés, retirer ceux qui sont supprimables : étiquettes, vêtements rugueux, néons, parfums, casque anti-bruit dans les contextes à risque.",
    why: "Chaque irritant retiré libère de la bande passante régulatoire. Pour un profil sensoriellement réactif, retirer 3 irritants quotidiens peut rendre une journée gérable au lieu de submergée.",
    steps: [
      "À partir du journal des déclencheurs, lister les irritants évitables.",
      "Couper toutes les étiquettes de vêtements en une session.",
      "Identifier 2 à 3 vêtements « toujours problématiques » → les retirer du tiroir.",
      "Acheter un casque anti-bruit enfant (Alpine Muffy, env. 25€) pour cantine, fêtes, sortie école.",
      "Adoucir les éclairages : remplacer ampoules froides par chaudes, lampe d'appoint dans la chambre.",
      "Réduire les parfums et lessives parfumées."
    ],
    materials: [
      "Casque anti-bruit enfant (Alpine Muffy / Edz Kidz).",
      "Ciseaux fins pour étiquettes.",
      "Ampoules chaudes 2700K.",
      "Lessive sans parfum."
    ],
    example: {
      label: "Plan d'action sur 2 semaines",
      rows: [
        ["Semaine 1", "Couper toutes les étiquettes · acheter casque anti-bruit"],
        ["Semaine 1", "Retirer pulls grattants du tiroir"],
        ["Semaine 2", "Remplacer ampoule chambre par 2700K"],
        ["Semaine 2", "Tester casque à la cantine 2 jours, ajuster"]
      ]
    },
    signals: [
      "Diminution des crises matinales d'habillage en quelques jours.",
      "Cantine ou cour d'école devient gérable avec le casque.",
      "L'enfant demande elle-même son casque."
    ],
    pitfalls: [
      "Tout supprimer d'un coup — confond les effets.",
      "Forcer le casque — le proposer, l'introduire en contexte calme.",
      "Confondre irritant et préférence (« elle n'aime pas »)."
    ]
  },
  {
    slug: "lecture-au-dessus-niveau",
    title: "Lui lire des livres au-dessus de son âge",
    category: "Cognitif",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Le décodage seul plafonne au niveau scolaire. La lecture à voix haute des parents peut nourrir un raisonnement verbal au 98e percentile sans contrainte de décodage.",
    why: "Une enfant avec un raisonnement verbal très supérieur s'ennuie avec les livres de son âge. La lecture par un adulte permet d'accéder à la complexité narrative et au vocabulaire qui correspondent à son niveau cognitif réel.",
    steps: [
      "Sélectionner des albums et romans courts au-dessus de l'âge nominal (CE1 à CM1).",
      "Lui laisser choisir les sujets — astronomie, mythologie, animaux, histoire.",
      "Lire à voix haute, expliquer les mots inconnus en passant.",
      "Encourager les interruptions et questions.",
      "Alterner avec des livres qu'elle décode elle-même à son niveau."
    ],
    materials: [
      "Bibliothèque municipale (carte gratuite).",
      "Sélection de séries jeunesse hauts plafonds : Mythes grecs adaptés, Roald Dahl, Astrid Lindgren, documentaires illustrés.",
      "20 minutes par jour."
    ],
    example: {
      label: "Sélection de départ",
      rows: [
        ["Mythologie", "Mythes grecs racontés aux enfants — Hélène Kérillis"],
        ["Documentaire", "Collections Mes p'tits docs (Milan)"],
        ["Roman court", "Le BGG — Roald Dahl (lu à voix haute)"],
        ["Astronomie", "L'imagerie de l'univers — Fleurus"],
        ["Classique", "Fifi Brindacier — Astrid Lindgren"]
      ]
    },
    signals: [
      "Vocabulaire qui s'élargit visiblement.",
      "Questions qui sortent du cadre du livre (« et chez les Égyptiens ? »).",
      "Demande de relire les mêmes passages."
    ],
    pitfalls: [
      "Confondre « au-dessus de l'âge » avec « adulte » — la maturité émotionnelle reste celle de 5 ans.",
      "Lire des livres qu'on n'aime pas soi-même — l'ennui s'entend.",
      "Faire de la lecture un examen — questions à la chaîne."
    ]
  },
  {
    slug: "questions-pourquoi-comment",
    title: "Encourager les questions « pourquoi / comment »",
    category: "Cognitif",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Ne jamais couper court à une question. Répondre, ou chercher ensemble, ou nommer qu'on ne sait pas. Préserver le moteur de curiosité.",
    why: "À 5 ans, le moteur explicatif est à son apogée. Pour un profil cognitif fort, c'est le carburant principal du développement. Couper court installe une autocensure durable.",
    steps: [
      "Adopter la règle : aucune question n'est stupide.",
      "Si on sait : répondre simplement, sans simplifier excessivement.",
      "Si on ne sait pas : « Je ne sais pas, on cherche ensemble. » — puis réellement chercher.",
      "Si on n'a pas le temps : « C'est une bonne question. On en reparle ce soir. » — puis y revenir.",
      "Renvoyer la question : « À ton avis, pourquoi ? » avant d'apporter la réponse."
    ],
    materials: [
      "Une encyclopédie illustrée jeunesse.",
      "Smartphone pour vérifier ensemble.",
      "Volonté de freiner les agendas du quotidien."
    ],
    example: {
      label: "Réponses types",
      rows: [
        ["« Pourquoi le ciel est bleu ? »", "« Le soleil envoie de la lumière qui contient toutes les couleurs. Le bleu rebondit le plus dans l'air. Tu veux qu'on regarde une vidéo ? »"],
        ["« Comment on fabrique le pain ? »", "« Tu te souviens de la farine ? On va en faire ensemble samedi. »"],
        ["« Pourquoi je dois dormir ? »", "« Pendant que tu dors, ton cerveau range tout ce que tu as appris dans la journée. »"]
      ]
    },
    signals: [
      "Le flot de questions augmente — c'est bon signe.",
      "Elle commence à formuler des hypothèses avant de demander.",
      "Elle se souvient des réponses et les recoupe."
    ],
    pitfalls: [
      "Inventer une réponse — érode la confiance à long terme.",
      "Trop simplifier — l'enfant sent qu'on la prend pour plus petite qu'elle est.",
      "Promettre « plus tard » sans y revenir."
    ]
  },
  {
    slug: "jeux-categorisation",
    title: "Jeux de catégorisation",
    category: "Cognitif",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Trier, classer, ranger par critères. Joue directement sur la pensée catégorielle exceptionnelle révélée par le bilan.",
    why: "Le subtest Concepts Verbaux ressort au plafond. Nourrir cette force renforce un point de stabilité identitaire et fait office de soupape cognitive — l'ennui est l'un des principaux déclencheurs comportementaux.",
    steps: [
      "Trier les jouets par catégorie inventée : « tous ceux qui roulent », « tous les bleus ».",
      "Jouer aux familles : « Trouve trois choses qui vivent dans l'eau. »",
      "Tris ouverts : « Tu peux ranger ces objets comme tu veux. Explique-moi ton système. »",
      "Jeux du commerce : Dobble, Loto des animaux, Set Junior.",
      "Catégorisation à plusieurs niveaux : « Et parmi les animaux, lesquels sont des mammifères ? »"
    ],
    materials: [
      "Aucun matériel obligatoire — n'importe quel ensemble d'objets.",
      "Optionnel : Dobble (env. 13€), Loto des animaux Djeco."
    ],
    example: {
      label: "Progressions",
      rows: [
        ["Niveau 1", "Trier par couleur, par taille, par forme."],
        ["Niveau 2", "Trier par fonction (manger, écrire, jouer)."],
        ["Niveau 3", "Catégories multiples : tous les bleus ET ronds."],
        ["Niveau 4", "Hiérarchies : animal → mammifère → félin → chat."],
        ["Niveau 5", "Sa propre taxonomie expliquée."]
      ]
    },
    signals: [
      "Elle invente des catégories non-évidentes.",
      "Elle explique son système en le défendant.",
      "Demande de jeux de tri spontanément."
    ],
    pitfalls: [
      "Imposer LE bon tri — il n'y en a pas.",
      "Transformer en exercice scolaire.",
      "Sous-estimer la complexité qu'elle peut gérer."
    ]
  },
  {
    slug: "rdv-tete-a-tete",
    title: "Rendez-vous de jeu en tête-à-tête",
    category: "Social",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Privilégier les invitations à un seul autre enfant plutôt que les groupes. Plus prévisible, plus régulable, plus accessible socialement.",
    why: "Un groupe de 6 enfants multiplie les variables sociales et sensorielles. À deux, l'enfant peut négocier le jeu, faire des pauses, gérer le rythme. Les habiletés sociales se construisent en duo avant le groupe.",
    steps: [
      "Identifier 2 ou 3 enfants compatibles (calmes, intéressés par les mêmes thèmes).",
      "Inviter chez soi pour 1h30 maximum la première fois.",
      "Préparer une activité-pivot (atelier cuisine, peinture, parcours) pour structurer le temps.",
      "Briefer l'enfant à l'avance : qui vient, combien de temps, ce qu'on fera.",
      "Prévoir une pause possible (chambre, casque) si surcharge."
    ],
    materials: [
      "Une activité-pivot par invitation.",
      "Un goûter prévisible.",
      "Un espace calme accessible."
    ],
    example: {
      label: "Format type d'invitation",
      rows: [
        ["Durée", "1h30 (jamais plus de 2h en début)"],
        ["Heure", "Plutôt 14h–15h30 (énergie haute)"],
        ["Structure", "30 min jeu libre · 30 min activité-pivot · 30 min goûter + dessin"],
        ["Sortie", "Annoncer 10 min avant la fin"],
        ["Bilan", "Le soir : « Qu'est-ce qui t'a plu ? Qu'est-ce qui était difficile ? »"]
      ]
    },
    signals: [
      "Elle demande à inviter à nouveau.",
      "Sortie sans crise.",
      "Mention spontanée de l'enfant les jours suivants."
    ],
    pitfalls: [
      "Inviter trop d'enfants pour « rentabiliser » — annule l'effet.",
      "Trop long — fatigue, conflit en fin de journée.",
      "Pas de pause possible — pas de soupape."
    ]
  },
  {
    slug: "briefing-social",
    title: "Briefing préalable des situations sociales",
    category: "Social",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Avant un anniversaire, une fête de famille, une nouvelle activité : décrire ce qui va se passer, qui sera là, ce qu'on fera, ce qu'on dira.",
    why: "L'incertitude sociale est l'un des plus gros consommateurs de bande passante. Un briefing transforme un événement anxiogène en répétition générale.",
    steps: [
      "La veille : décrire le lieu, les personnes présentes, le déroulé probable.",
      "Anticiper 2 ou 3 moments potentiellement difficiles (gâteau bruyant, photos, cadeaux).",
      "Préparer une formulation pour saluer, refuser, demander de l'aide.",
      "Convenir d'un signal discret pour quitter ou faire une pause.",
      "Le matin du jour J : récap rapide, sans en faire un examen."
    ],
    materials: [
      "Aucun matériel.",
      "10 minutes de discussion la veille."
    ],
    example: {
      label: "Briefing pour anniversaire",
      rows: [
        ["Qui", "Léa fête ses 6 ans. Il y aura 8 enfants, dont Sarah et Tom que tu connais."],
        ["Où", "Chez elle, dans le jardin."],
        ["Quoi", "On joue, on goûte, on chante Joyeux Anniversaire, on rentre."],
        ["Difficile", "Beaucoup d'enfants en même temps. Si c'est trop, tu peux venir me voir."],
        ["Mots", "« Joyeux anniversaire ! » à l'arrivée. « Merci, c'était bien » au départ."]
      ]
    },
    signals: [
      "L'enfant arrive plus calme.",
      "Elle se réfère au briefing pendant l'événement.",
      "Acceptation progressive de situations auparavant difficiles."
    ],
    pitfalls: [
      "Sur-briefer — angoisse d'anticipation.",
      "Promettre que « tout ira bien » — ne pas garantir, juste préparer.",
      "Oublier le débriefing post-événement."
    ]
  },
  {
    slug: "partager-bilan-maitresse",
    title: "Partager le bilan avec sa maîtresse",
    category: "École",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Demander un rendez-vous, partager les éléments-clés du bilan WPPSI, expliquer le profil hétérogène et les besoins concrets.",
    why: "La maîtresse passe 6 heures par jour avec l'enfant. Elle a un effet de levier énorme — mais seulement si elle dispose des bonnes informations. Un bilan dans un tiroir n'aide personne.",
    steps: [
      "Demander un rendez-vous formel (15-20 min, hors récréation).",
      "Préparer un résumé d'une page : forces, fragilités, déclencheurs, stratégies qui fonctionnent.",
      "Apporter le bilan complet en option, mais ne pas l'imposer.",
      "Formuler des demandes concrètes (pas des plaintes) : « Une place éloignée du couloir aiderait. »",
      "Proposer un canal de communication : carnet ou mail, fréquence convenue."
    ],
    materials: [
      "Résumé d'une page (à préparer).",
      "Le bilan complet en pièce jointe.",
      "3 demandes concrètes."
    ],
    example: {
      label: "Trame de résumé une page",
      rows: [
        ["Forces", "Raisonnement verbal très supérieur · Pensée catégorielle · Mémoire excellente"],
        ["Fragilités", "Vitesse de traitement · Transitions · Sensibilité sensorielle (auditif, tactile)"],
        ["Déclencheurs", "Bruit fort soudain · Étiquettes · Changements non-annoncés"],
        ["Ce qui aide", "Préavis 5 min · Place calme · Casque possible · Choix limités"],
        ["Évaluation", "Diagnostic en cours, RDV juillet 2026"]
      ]
    },
    signals: [
      "La maîtresse adapte spontanément.",
      "Communication régulière sur ce qui fonctionne ou non.",
      "Diminution des incidents en classe."
    ],
    pitfalls: [
      "Arriver en revendication — ferme la porte.",
      "Trop d'information — rien n'est retenu.",
      "Ne pas suivre — le rendez-vous unique s'oublie en 3 semaines."
    ]
  },
  {
    slug: "place-eloignee-bruit",
    title: "Demander une place éloignée du bruit",
    category: "École",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Place de classe loin de la porte, du couloir, du radiateur, des camarades les plus bruyants. Petit changement, gros effet sur la charge sensorielle quotidienne.",
    why: "Six heures par jour à proximité d'un irritant sensoriel = épuisement chronique. Une simple modification de plan de classe peut transformer la disponibilité cognitive sur la journée.",
    steps: [
      "Identifier les sources de bruit dans la classe avec l'enfant ou la maîtresse.",
      "Demander explicitement un emplacement adapté lors du rendez-vous.",
      "Argumenter avec les déclencheurs documentés (renvoie au journal sensoriel).",
      "Proposer une solution si refus : casque anti-bruit autorisé, sortie 2 min en cas de surcharge.",
      "Refaire le point après 3 semaines."
    ],
    materials: [
      "Le journal sensoriel comme appui.",
      "Casque anti-bruit en réserve si besoin."
    ],
    example: {
      label: "Demandes types",
      rows: [
        ["Place idéale", "Au milieu d'une rangée, loin de la porte et de la fenêtre."],
        ["Voisinage", "Pas à côté d'un enfant très expressif vocalement."],
        ["Lumière", "Pas en plein contre-jour."],
        ["Replis", "Coin lecture accessible si surcharge."]
      ]
    },
    signals: [
      "L'enfant rentre moins épuisée.",
      "Diminution des plaintes « j'aime pas l'école ».",
      "Meilleure concentration en début d'après-midi."
    ],
    pitfalls: [
      "Demander sans documenter — refus probable.",
      "Imposer une solution unique — laisser la maîtresse adapter.",
      "Ne pas réévaluer."
    ]
  },
  {
    slug: "preavis-transitions-classe",
    title: "Demander des préavis de transition en classe",
    category: "École",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Demander à la maîtresse d'annoncer les transitions 2 minutes à l'avance et d'utiliser un emploi du temps visuel en classe — bénéficie à toute la classe, pas que l'enfant concerné.",
    why: "Beaucoup d'enseignants annoncent déjà — mais pas systématiquement. La demande est légère, accommodante, et profite à 25 enfants. Très haut taux d'acceptation.",
    steps: [
      "Lors du rendez-vous, demander : « Pourriez-vous prévenir 2 min avant chaque changement d'activité ? »",
      "Suggérer un emploi du temps visuel mural pour la classe (proposer de fournir les pictogrammes).",
      "Mentionner que cela aide aussi les autres profils sensibles aux transitions.",
      "Remercier explicitement après quelques semaines si en place.",
      "Si refus, proposer que la maîtresse prévienne l'enfant individuellement."
    ],
    materials: [
      "Pictogrammes imprimés à proposer (ARASAAC).",
      "Une formulation écrite courte à laisser."
    ],
    example: {
      label: "Formulations à proposer",
      rows: [
        ["Transition", "« Dans 2 minutes, on range et on passe à la lecture. »"],
        ["Changement majeur", "« Aujourd'hui, on ne fait pas sport, on fait arts visuels à la place. »"],
        ["Imprévu", "Annoncer dès que possible, même 30 secondes avant."]
      ]
    },
    signals: [
      "Diminution des incidents au moment des transitions.",
      "Adoption progressive par la maîtresse pour toute la classe.",
      "Retour positif d'autres parents."
    ],
    pitfalls: [
      "Insister sans flexibilité — perçu comme intrusion pédagogique.",
      "Demander trop de modifications d'un coup.",
      "Oublier de remercier — relation pédagogique."
    ]
  },
  {
    slug: "filmer-extraits",
    title: "Filmer de courts extraits des moments difficiles",
    category: "Clinique",
    effort: "Faible",
    impact: 1,
    quadrant: "quick",
    summary: "Quelques vidéos de 30 à 60 secondes des moments-clés (crise, rigidité, réaction sensorielle) qui complètent le journal pour l'évaluateur de juillet.",
    why: "Une description écrite ne capture jamais la qualité d'une réaction. 60 secondes de vidéo donnent à l'évaluateur ce qu'aucun récit ne peut transmettre : l'intensité, la durée, le contexte.",
    steps: [
      "Décider à l'avance les types de moments à filmer (crises typiques, rituel rigide, réaction sensorielle).",
      "Filmer discrètement avec le téléphone, format paysage, distance respectueuse.",
      "Garder uniquement les extraits représentatifs — supprimer le reste rapidement.",
      "Stocker dans un dossier dédié, sauvegardé.",
      "Préparer 4 à 6 extraits maximum pour le rendez-vous."
    ],
    materials: [
      "Smartphone.",
      "Dossier dédié (cloud privé).",
      "Accord entre les deux parents sur l'usage strict."
    ],
    example: {
      label: "Liste type",
      rows: [
        ["1.", "Crise au moment d'enlever un manteau (rigidité)."],
        ["2.", "Réaction au sifflet de la cour (sensoriel auditif)."],
        ["3.", "Routine du coucher quand la séquence est respectée (positif)."],
        ["4.", "Routine du coucher quand interrompue (contraste)."],
        ["5.", "Jeu en tête-à-tête réussi (positif social)."],
        ["6.", "Tentative de groupe (difficulté sociale)."]
      ]
    },
    signals: [
      "L'évaluateur peut s'appuyer sur des éléments concrets.",
      "Moins de questions reposées en consultation.",
      "Diagnostic plus rapide ou plus précis."
    ],
    pitfalls: [
      "Filmer trop — perd la valeur de sélection.",
      "Filmer sans retirer après usage — vie privée de l'enfant.",
      "Filmer pendant la crise au lieu de la gérer — la gestion prime."
    ]
  },

  // ============ Q2: Grands paris (Effort élevé / moyen · Impact élevé) ============
  {
    slug: "psychomotricite",
    title: "Poursuivre la psychomotricité",
    category: "Sensoriel",
    effort: "Fort",
    impact: 1,
    quadrant: "big",
    summary: "Maintenir la prise en charge en psychomotricité déjà initiée. Continuité de soin sur le moteur, le sensoriel et la régulation.",
    why: "L'arrêt prématuré d'une prise en charge en cours est une perte sèche. Même sans diagnostic finalisé, le travail psychomoteur a un effet propre : meilleure proprioception, meilleure coordination, meilleure régulation.",
    steps: [
      "Confirmer la fréquence et la durée prévue avec le psychomotricien.",
      "Demander un point d'étape semestriel écrit — utile pour l'évaluation de juillet.",
      "Faire le lien entre les exercices en séance et la maison (1 ou 2 transposables par semaine).",
      "Communiquer le journal sensoriel au psychomotricien.",
      "Ne pas interrompre pour un autre soin sans concertation."
    ],
    materials: [
      "Séances en cours.",
      "Carnet de liaison parents/professionnel."
    ],
    example: {
      label: "Liaison à structurer",
      rows: [
        ["Avant séance", "Mentionner les 2-3 événements marquants de la semaine."],
        ["Après séance", "Demander 1 exercice transposable à la maison."],
        ["Mensuel", "Point bref de 5 min sur l'évolution."],
        ["Semestriel", "Compte-rendu écrit pour l'équipe pluridisciplinaire."]
      ]
    },
    signals: [
      "Progrès sur la coordination, l'équilibre, le tonus.",
      "L'enfant demande à y aller.",
      "Transferts visibles à la maison."
    ],
    pitfalls: [
      "Considérer la séance comme suffisante en soi — la transposition compte.",
      "Multiplier les prises en charge avant le diagnostic — surcharge.",
      "Couper la communication avec le pro."
    ]
  },
  {
    slug: "rituel-coucher",
    title: "Rituel du coucher prévisible",
    category: "Environnement",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Même séquence chaque soir, dans le même ordre, à la même heure. Bain, pyjama, brossage, histoire, calin, lumière. Le coucher est l'un des moments les plus rentables pour la régulation globale.",
    why: "Un sommeil prévisible et de qualité est l'un des plus puissants modulateurs de l'humeur, de la régulation et de la disponibilité cognitive. Un mauvais coucher empoisonne la journée suivante.",
    steps: [
      "Définir une séquence à 5 ou 6 étapes, dans un ordre fixe.",
      "Toujours la même heure de début, ±15 min.",
      "Lumière progressivement diminuée à partir d'une demi-heure avant.",
      "Pas d'écran 60 min avant le coucher.",
      "Histoire calme, voix posée, fin claire (« on dit bonne nuit »)."
    ],
    materials: [
      "Veilleuse à intensité variable.",
      "Sélection d'histoires courtes pour le soir.",
      "Time-timer pour la durée du bain ou de l'histoire."
    ],
    example: {
      label: "Séquence type",
      rows: [
        ["19h00", "Dîner terminé."],
        ["19h30", "Bain (10 min)."],
        ["19h45", "Pyjama, brossage des dents."],
        ["20h00", "Histoire (un livre, 10 min)."],
        ["20h15", "Câlin, mots du soir, lumière."],
        ["20h20", "Veilleuse seule."]
      ]
    },
    signals: [
      "Endormissement plus rapide après quelques semaines.",
      "Réveils nocturnes plus rares.",
      "L'enfant connaît et anticipe la séquence."
    ],
    pitfalls: [
      "Décaler l'heure pour les soirées des parents — déstabilise sur 3 jours.",
      "Allonger l'histoire à la demande — l'élastique se tend.",
      "Coucher dans l'urgence quand on est en retard."
    ]
  },
  {
    slug: "coin-calme",
    title: "Coin calme à la maison",
    category: "Émotion",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Un espace dédié, accessible à tout moment, à utiliser comme outil de régulation. Pas une punition, pas une obligation — une ressource.",
    why: "L'enfant a besoin d'un endroit où elle peut se réfugier sans demander la permission, sans être jugée, sans être accompagnée. C'est un outil d'auto-régulation.",
    steps: [
      "Choisir un emplacement calme, à l'écart mais visible (coin de salon, partie de chambre).",
      "Délimiter avec un tapis, un tipi, une tente, ou simplement des coussins.",
      "Y installer 3 à 5 ressources : peluche, livre, casque anti-bruit, cartes émotions, bouteille sensorielle.",
      "Le présenter explicitement : « C'est ton endroit. Tu y vas quand tu veux. »",
      "Ne jamais l'utiliser comme punition (« va dans ton coin »)."
    ],
    materials: [
      "Tipi enfant ou tente, env. 40-80€ (ou couverture sur 4 chaises).",
      "Tapis doux.",
      "Coussin lourd.",
      "Boîte avec : peluche, casque, livres, roue des émotions."
    ],
    example: {
      label: "Contenu type",
      rows: [
        ["Doudou", "Une peluche dédiée à cet espace."],
        ["Sensoriel", "Une bouteille à paillettes, un coussin lesté."],
        ["Auditif", "Le casque anti-bruit."],
        ["Visuel", "2 ou 3 livres préférés, calmes."],
        ["Émotion", "La roue des émotions."],
        ["Lumière", "Une petite veilleuse douce."]
      ]
    },
    signals: [
      "L'enfant y va spontanément en début de surcharge.",
      "Diminution des crises atteignant leur paroxysme.",
      "Elle propose le coin à un frère/sœur ou parent."
    ],
    pitfalls: [
      "L'utiliser comme menace — détruit l'effet.",
      "Le surcharger d'objets — devient un irritant en soi.",
      "L'imposer en crise — doit rester un choix."
    ]
  },
  {
    slug: "rituel-respiration",
    title: "Rituel quotidien de respiration",
    category: "Émotion",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Cinq minutes par jour, à un moment prévisible, en duo avec un parent. Construit progressivement une compétence d'auto-régulation utilisable en crise.",
    why: "On ne peut pas apprendre une technique de régulation pendant une crise. Le rituel quotidien hors crise rend l'outil disponible quand l'amygdale s'allume.",
    steps: [
      "Choisir un moment fixe : juste avant le coucher, ou en sortant de l'école.",
      "Démarrer par 2 min seulement, augmenter à 5 sur quelques semaines.",
      "Choisir 2 ou 3 techniques simples (respiration carrée, ballon, fleur-bougie).",
      "Le faire ensemble, en miroir.",
      "Ne pas en parler en crise — juste le proposer."
    ],
    materials: [
      "Aucun matériel obligatoire.",
      "Optionnel : app Petit Bambou Kids, cartes Respirations Hop'Toys, livre Calme et attentif comme une grenouille."
    ],
    example: {
      label: "Techniques par âge",
      rows: [
        ["Fleur-bougie", "Inspirer une fleur (4s), souffler la bougie (4s)."],
        ["Ballon", "Imaginer gonfler un ballon dans le ventre, le dégonfler."],
        ["Respiration carrée", "Inspirer 4s, retenir 4s, souffler 4s, retenir 4s."],
        ["Respiration animale", "Lapin (rapide), tortue (lent), serpent (long souffle)."]
      ]
    },
    signals: [
      "L'enfant utilise la technique spontanément en moment difficile.",
      "Capacité à se calmer en 2-3 min en début de surcharge.",
      "Demande le rituel les jours où il a été oublié."
    ],
    pitfalls: [
      "L'imposer en pleine crise comme antidote — trop tard.",
      "Sauter quand on est pressé — perd la régularité.",
      "Le faire seul à seul puis y mettre fin sans rituel de clôture."
    ]
  },
  {
    slug: "sortie-physique-quotidienne",
    title: "Sortie physique quotidienne",
    category: "Sensoriel",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "30 minutes minimum d'activité extérieure par jour. Course, vélo, parc, escalade. La régulation passe d'abord par le corps.",
    why: "Pour un profil sensoriellement réactif, l'apport proprioceptif et vestibulaire d'une activité physique extérieure est l'un des plus puissants modulateurs disponibles. Effet immédiat sur l'humeur, le sommeil, l'attention.",
    steps: [
      "Bloquer 30 minutes minimum dans la routine quotidienne.",
      "Privilégier l'extérieur — la lumière naturelle compte.",
      "Varier : course, vélo, trottinette, parc, jardin, escalade.",
      "Inclure des activités proprioceptives : grimper, sauter, porter, pousser.",
      "Y aller même par mauvais temps (vêtements adaptés)."
    ],
    materials: [
      "Vélo / trottinette / draisienne.",
      "Vêtements de pluie.",
      "Accès à un parc, un jardin, ou une cour."
    ],
    example: {
      label: "Format selon disponibilité",
      rows: [
        ["Tous les jours", "30 min de parc après l'école."],
        ["Mercredi/samedi", "1h de sortie : forêt, plage, escalade."],
        ["Pluie", "Galipettes et parcours moteur dans le salon."],
        ["Soir court", "10 min de saut sur trampoline indoor."]
      ]
    },
    signals: [
      "Endormissement plus rapide.",
      "Diminution de l'agitation en fin de journée.",
      "Demande spontanée de sortir."
    ],
    pitfalls: [
      "Compenser par de l'écran les jours où on saute.",
      "Sur-stimuler par une activité bruyante quand l'enfant est déjà saturé.",
      "Confondre activité physique et activité dirigée stricte."
    ]
  },
  {
    slug: "activites-proprioceptives",
    title: "Activités proprioceptives / charges lourdes",
    category: "Sensoriel",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Activités qui sollicitent les muscles et articulations en profondeur : porter, pousser, grimper, suspension. Effet régulateur puissant et immédiat.",
    why: "L'apport proprioceptif est régulateur quel que soit le profil — hyper ou hypo-réactif. C'est l'un des outils les plus simples et les plus efficaces pour ramener un enfant désorganisé à un état calme.",
    steps: [
      "Intégrer 2 ou 3 activités proprioceptives par jour, en doses brèves.",
      "Avant un moment exigeant (école, sortie) : 10 min de portage / poussée.",
      "Au retour à la maison : suspension, escalade, sauts.",
      "Avant le coucher : massage profond, couverture lestée si tolérée.",
      "En crise : proposer (pas imposer) un câlin ferme ou une pression."
    ],
    materials: [
      "Sac à dos lesté (1-2 kg).",
      "Trampoline indoor (env. 80€).",
      "Couverture lestée si validée par psychomot' (2-3 kg).",
      "Espalier ou barre de traction enfant."
    ],
    example: {
      label: "Activités à doser",
      rows: [
        ["Pousser", "Pousser un panier de courses, déplacer une caisse."],
        ["Porter", "Aider à porter les sacs, transporter des livres."],
        ["Grimper", "Mur d'escalade, structure de jeu, cabane."],
        ["Suspendre", "Trapèze, espalier, branche basse."],
        ["Sauter", "Trampoline, sauts à pieds joints, parcours."],
        ["Compresser", "Câlin ferme, sandwich avec coussins, couverture lestée."]
      ]
    },
    signals: [
      "Effet calmant en 5-10 minutes.",
      "Demande spontanée de l'enfant (« fais-moi un câlin serré »).",
      "Meilleure concentration après."
    ],
    pitfalls: [
      "Trop intense d'un coup — peut déréguler.",
      "Couverture lestée trop lourde — règle : 10 % du poids de l'enfant max.",
      "Imposer le câlin ferme — risque d'aversion tactile."
    ]
  },
  {
    slug: "carte-bibliotheque",
    title: "Carte de bibliothèque, visite hebdomadaire",
    category: "Cognitif",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Inscrire l'enfant à la bibliothèque municipale. Visite hebdomadaire, elle choisit elle-même 5 à 10 livres. Carburant cognitif gratuit et illimité.",
    why: "Une enfant à raisonnement verbal très supérieur a un appétit cognitif que l'achat de livres ne peut pas suivre. La bibliothèque transforme cette faim en accès illimité, et la sortie devient un rituel structurant.",
    steps: [
      "S'inscrire à la médiathèque municipale (gratuit dans la plupart des villes).",
      "Bloquer un créneau hebdomadaire fixe (mercredi ou samedi matin).",
      "La laisser choisir librement — y compris des livres « trop simples » ou « trop durs ».",
      "Limiter à 5–10 livres par visite pour éviter la saturation.",
      "Profiter des animations (heure du conte, ateliers)."
    ],
    materials: [
      "Carte de médiathèque (gratuite).",
      "Sac dédié pour le transport.",
      "1 heure hebdomadaire bloquée."
    ],
    example: {
      label: "Routine type",
      rows: [
        ["Mercredi 10h", "Arrivée, retour des livres."],
        ["10h05", "Choix libre, 20 min."],
        ["10h25", "Heure du conte si en cours."],
        ["10h45", "Lecture d'un livre sur place."],
        ["11h", "Sortie."]
      ]
    },
    signals: [
      "Elle attend la sortie hebdomadaire.",
      "Diversification des intérêts.",
      "Familiarité avec les bibliothécaires."
    ],
    pitfalls: [
      "Imposer ce qu'elle doit lire.",
      "Manquer 3 semaines de suite — perd le rituel.",
      "Limiter par âge officiel — la laisser explorer."
    ]
  },
  {
    slug: "enrichissement-classe",
    title: "Fournir du matériel d'enrichissement en classe",
    category: "École",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Avec l'accord de la maîtresse, fournir des fiches, livres, ou activités à faire en autonomie quand le travail est terminé. Évite l'ennui — qui est l'un des principaux déclencheurs comportementaux.",
    why: "Une enfant qui finit en 5 minutes ce qui occupe les autres pendant 20 a 15 minutes vides à occuper. Sans matériel d'enrichissement, ces 15 minutes deviennent agitation, perturbation, ou retrait.",
    steps: [
      "Demander à la maîtresse si elle accepte que vous fournissiez du matériel.",
      "Préparer une boîte ou un classeur dédié, restant en classe.",
      "Sélectionner des activités auto-correctives, calmes, en autonomie.",
      "Renouveler tous les mois.",
      "Demander un retour : ce qui marche, ce qui dérange."
    ],
    materials: [
      "Fiches plastifiées d'énigmes, mandalas, mots-croisés simples.",
      "Petits livres-puzzles, sudokus enfants.",
      "Cahiers d'activités au-dessus du niveau (CE1-CE2)."
    ],
    example: {
      label: "Boîte d'enrichissement",
      rows: [
        ["Logique", "Mots-mêlés, sudokus enfants, énigmes."],
        ["Lecture", "Petites BD, livres-jeux."],
        ["Création", "Mandalas, dessins libres."],
        ["Découverte", "Documentaires courts, cartes du monde."],
        ["Manipulation calme", "Origami simple, fiches de pliage."]
      ]
    },
    signals: [
      "Diminution des plaintes d'ennui.",
      "L'enfant raconte ce qu'elle a fait en autonomie.",
      "Maîtresse satisfaite du dispositif."
    ],
    pitfalls: [
      "Imposer à la maîtresse — passer par la demande.",
      "Activités trop bruyantes ou désorganisantes pour la classe.",
      "Substituer au travail commun — doit rester complément."
    ]
  },
  {
    slug: "surveiller-refus-scolaire",
    title: "Surveiller refus scolaire et plaintes somatiques",
    category: "École",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Tenir un suivi simple des phrases « j'aime pas l'école », des maux de ventre, des troubles du sommeil. Signaux précoces qui demandent une réponse rapide.",
    why: "Le refus scolaire et les plaintes somatiques sont les premiers signes d'une charge insoutenable. Plus on intervient tôt, moins l'installation est durable. Ignorer 3 mois rend l'intervention 10 fois plus complexe.",
    steps: [
      "Tenir un suivi hebdomadaire rapide : nombre de plaintes, type, contexte.",
      "Distinguer plainte ponctuelle (1-2 par semaine) et plainte récurrente (>3 par semaine).",
      "Si récurrent : prendre rendez-vous maîtresse + pédiatre dans la quinzaine.",
      "Vérifier en parallèle : sommeil, appétit, humeur générale, jeux.",
      "Ne pas dramatiser ni banaliser — observer."
    ],
    materials: [
      "Tableau simple (papier ou note partagée).",
      "5 colonnes : Date · Phrase · Contexte · Symptôme physique · Intensité."
    ],
    example: {
      label: "Seuils d'alerte",
      rows: [
        ["Plainte verbale", "> 3 fois par semaine pendant 2 semaines."],
        ["Mal de ventre", "Le matin, plus que 1 fois par semaine."],
        ["Sommeil", "Difficulté d'endormissement liée à anxiété scolaire."],
        ["Refus", "Pleurs ou supplications pour ne pas y aller."],
        ["Action", "Consulter dans la quinzaine si l'un de ces seuils est atteint."]
      ]
    },
    signals: [
      "Détection précoce avant installation.",
      "Capacité à objectiver auprès de la maîtresse et du pédiatre.",
      "Réponse rapide qui désamorce la spirale."
    ],
    pitfalls: [
      "Banaliser : « tous les enfants disent ça ».",
      "Sur-interpréter chaque mal de ventre.",
      "Tenir le suivi trop longtemps avant d'agir."
    ]
  },
  {
    slug: "preparer-rdv-juillet",
    title: "Préparer le rendez-vous de juillet 2026",
    category: "Clinique",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Confirmer la date, préparer une anamnèse développementale écrite, rassembler les documents : bilan WPPSI, journal comportemental, vidéos sélectionnées, observations de la maîtresse.",
    why: "Le rendez-vous est court (1 à 3h selon l'évaluateur). La qualité des données présentées détermine si la séance aboutit à un diagnostic précis ou à des compléments d'investigation. La préparation multiplie le rendement par 3.",
    steps: [
      "Confirmer la date 6 mois à l'avance, puis 1 mois à l'avance.",
      "Rédiger l'anamnèse développementale (grossesse, naissance, étapes-clés, antécédents).",
      "Imprimer ou exporter le journal comportemental en PDF.",
      "Sélectionner 4 à 6 extraits vidéo représentatifs.",
      "Solliciter une note écrite de la maîtresse.",
      "Préparer 5 questions concrètes à poser."
    ],
    materials: [
      "Pochette ou dossier numérique dédié.",
      "Anamnèse type (modèle disponible chez la plupart des évaluateurs).",
      "Smartphone avec extraits vidéo."
    ],
    example: {
      label: "Pochette à apporter",
      rows: [
        ["Bilan WPPSI", "Original + copie."],
        ["Journal comportemental", "PDF imprimé, 3 derniers mois."],
        ["Anamnèse", "2-3 pages structurées."],
        ["Note maîtresse", "1 page."],
        ["Vidéos", "Smartphone, 6 extraits courts."],
        ["Questions", "Liste écrite des 5 questions clés."]
      ]
    },
    signals: [
      "Évaluateur qui s'appuie sur les documents.",
      "Diagnostic ou hypothèse claire à l'issue du rendez-vous.",
      "Recommandations concrètes et hiérarchisées."
    ],
    pitfalls: [
      "Arriver avec trop de documents non-triés.",
      "Oublier la note de la maîtresse.",
      "Vouloir tout dire — l'évaluateur structure l'entretien."
    ]
  },
  {
    slug: "lire-ouvrage-hpi",
    title: "Lire un ouvrage sur HPI + profil sensoriel",
    category: "Famille",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Un livre accessible par parent, lu avant l'évaluation de juillet. Construit une grille de lecture commune et désamorce les interprétations divergentes.",
    why: "Beaucoup de désalignement parental vient d'interprétations différentes du même comportement. Un cadre théorique partagé — même imparfait — augmente massivement la cohérence quotidienne.",
    steps: [
      "Choisir un livre accessible, pas un manuel technique.",
      "Le lire séparément en 3-4 semaines.",
      "Bloquer une discussion d'1h après lecture pour partager les passages-clés.",
      "Identifier 3 idées à appliquer concrètement.",
      "Garder le livre disponible comme référence."
    ],
    materials: [
      "Un ouvrage accessible (suggestions ci-dessous).",
      "1h de discussion programmée."
    ],
    example: {
      label: "Suggestions",
      rows: [
        ["HPI", "Trop intelligent pour être heureux ? — Jeanne Siaud-Facchin"],
        ["HPI/atypique", "100 idées pour accompagner les enfants à haut potentiel — Olivier Revol"],
        ["Sensoriel", "Le syndrome dys-sensoriel — Isabelle Filliozat (chapitres pertinents)"],
        ["Régulation", "Au cœur des émotions de l'enfant — Isabelle Filliozat"],
        ["Parentalité", "L'enfant — Maria Montessori (revisité)"]
      ]
    },
    signals: [
      "Vocabulaire commun aux deux parents.",
      "Réinterprétation de comportements antérieurs.",
      "Diminution des désaccords sur la conduite à tenir."
    ],
    pitfalls: [
      "Choisir un livre trop militant ou trop technique.",
      "Ne pas en discuter — la lecture seule ne suffit pas.",
      "Plaquer la grille du livre sur tout."
    ]
  },
  // ============ Q3: Compléments faciles (Effort faible · Impact moindre) ============
  {
    slug: "regles-maison",
    title: "Liste courte de règles de la maison",
    category: "Environnement",
    effort: "Faible",
    impact: 0,
    quadrant: "easy",
    summary: "Trois à cinq règles maximum, formulées positivement, affichées à hauteur d'enfant. Cadre clair, négociation impossible, énergie quotidienne économisée.",
    why: "Les règles non-écrites se renégocient à chaque conflit. Trois règles affichées remplacent vingt rappels quotidiens. Bénéfice modeste mais cumulé sur l'année.",
    steps: [
      "Choisir 3 à 5 règles non-négociables, en couple parental.",
      "Formuler positivement : « On parle calmement » plutôt que « pas de cris ».",
      "Les afficher à hauteur d'enfant, avec pictogrammes.",
      "Les présenter une fois, calmement.",
      "Pointer la règle, ne pas la répéter, en cas d'écart."
    ],
    materials: [
      "Une feuille A4 imprimée ou un panneau.",
      "Pictogrammes simples."
    ],
    example: {
      label: "Règles type",
      rows: [
        ["1.", "On parle calmement."],
        ["2.", "On range ce qu'on sort."],
        ["3.", "On respecte les corps (le sien, les autres)."],
        ["4.", "On dit ce qu'on ressent avec des mots."]
      ]
    },
    signals: [
      "Diminution des rappels verbaux.",
      "L'enfant cite la règle elle-même.",
      "Cadre intériorisé."
    ],
    pitfalls: [
      "Trop de règles — perd l'effet.",
      "Règles formulées négativement.",
      "Règles que les parents eux-mêmes n'appliquent pas."
    ]
  },
  {
    slug: "tableau-recompenses",
    title: "Tableau de récompenses / motivation",
    category: "Émotion",
    effort: "Faible",
    impact: 0,
    quadrant: "easy",
    summary: "Tableau visuel de gommettes ou étoiles pour cibler 1 ou 2 comportements précis sur quelques semaines. Outil ponctuel, pas durable.",
    why: "Utile pour amorcer un comportement spécifique, mais l'effet s'épuise. Bon pour des micro-objectifs (s'habiller seule, brosser ses dents sans rappel) sur 4 à 6 semaines, pas comme système global.",
    steps: [
      "Choisir UN comportement précis et observable.",
      "Définir une récompense modeste, non-matérielle de préférence.",
      "Tableau visuel à cocher chaque jour.",
      "Atteindre le palier en 4 à 6 semaines.",
      "Retirer le tableau quand le comportement est installé."
    ],
    materials: [
      "Tableau ou feuille avec cases.",
      "Gommettes ou tampons."
    ],
    example: {
      label: "Cibles type",
      rows: [
        ["S'habiller seule le matin", "5 jours sur 7 → sortie au parc samedi."],
        ["Brosser les dents sans rappel", "10 jours d'affilée → choix de l'histoire du soir."],
        ["Ranger la chambre", "Un dimanche par mois → activité partagée."]
      ]
    },
    signals: [
      "Comportement amorcé en 2 à 3 semaines.",
      "L'enfant gère le tableau elle-même.",
      "Maintien après retrait du tableau."
    ],
    pitfalls: [
      "Tableau permanent — installe la dépendance à la récompense.",
      "Trop de cibles à la fois.",
      "Récompenses matérielles importantes."
    ]
  },
  {
    slug: "documentaires-rythme",
    title: "Documentaires à son rythme",
    category: "Cognitif",
    effort: "Faible",
    impact: 0,
    quadrant: "easy",
    summary: "Sélection de documentaires courts adaptés à son appétit cognitif. Pas tous les jours, sans en faire un substitut au jeu ou à la lecture.",
    why: "Une enfant à fort raisonnement verbal apprécie les documentaires comme prolongement de sa curiosité. Apport positif, mais à doser pour éviter la passivité écran.",
    steps: [
      "Sélectionner 5 à 10 documentaires courts (10-25 min) sur des sujets variés.",
      "Proposer plutôt que laisser libre accès.",
      "Regarder ensemble si possible, pour échanger.",
      "Maximum 2 sessions par semaine.",
      "Toujours en suivre la conversation : « Qu'est-ce qui t'a marquée ? »"
    ],
    materials: [
      "Plateforme avec documentaires jeunesse (C'est pas sorcier, Il était une fois la vie, Lumni).",
      "Curation parentale."
    ],
    example: {
      label: "Sélection",
      rows: [
        ["Sciences", "C'est pas sorcier — épisodes courts."],
        ["Nature", "BBC Earth Kids, ARTE Junior."],
        ["Histoire", "Quelle Histoire ! (chaîne)."],
        ["Corps humain", "Il était une fois la vie."]
      ]
    },
    signals: [
      "Discussion riche après visionnage.",
      "Recoupements avec d'autres lectures.",
      "Curiosité prolongée hors écran."
    ],
    pitfalls: [
      "Substitut à la lecture ou au jeu.",
      "Visionnage passif sans échange.",
      "Sujets anxiogènes pour son âge."
    ]
  },

  // ============ Q4: À différer ou conditionnel ============
  {
    slug: "tableau-weekend",
    title: "Tableau du week-end",
    category: "Environnement",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Affichage matinal de la journée du samedi ou du dimanche : qui, quoi, où, quand. Peut être utile, mais redondant avec l'emploi du temps visuel mural.",
    why: "Apport marginal si l'emploi du temps mural est en place. À envisager seulement si les week-ends posent problème spécifiquement.",
    steps: [
      "Préparer la veille au soir un tableau du jour suivant.",
      "Afficher au petit-déjeuner.",
      "Reprendre la séquence avec l'enfant.",
      "Cocher les étapes au fil de la journée."
    ],
    materials: [
      "Ardoise effaçable ou feuille du jour.",
      "Pictogrammes."
    ],
    example: {
      label: "Samedi type",
      rows: [
        ["Matin", "Marché avec papa."],
        ["Midi", "Déjeuner mamie."],
        ["Après-midi", "Parc, vélo."],
        ["Soir", "Pizza maison, film court."]
      ]
    },
    signals: [
      "Week-ends plus fluides.",
      "Moins de questions répétées."
    ],
    pitfalls: [
      "Redondant avec l'emploi du temps mural.",
      "Effort quotidien à maintenir."
    ]
  },
  {
    slug: "yoga-sophrologie",
    title: "Yoga / sophrologie / méditation enfant",
    category: "Émotion",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Cours collectifs ou ateliers spécifiques. Apport possible, mais souvent redondant avec le rituel respiration quotidien à la maison.",
    why: "Bénéfique en soi, mais demande déplacement, créneau, budget. Le rituel respiration quotidien à la maison capte 70 % du bénéfice à 10 % du coût. À envisager seulement si l'enfant aime particulièrement le format collectif.",
    steps: [
      "Identifier un atelier ponctuel ou stage court avant de s'engager.",
      "Tester sur 3 séances.",
      "Évaluer : effet observable, plaisir de l'enfant, durabilité du créneau."
    ],
    materials: [
      "Tapis.",
      "Tenue confortable.",
      "Budget cours (10-25€/séance)."
    ],
    signals: [
      "L'enfant demande à y retourner.",
      "Effet observable de régulation.",
      "Compatible avec le reste de l'agenda."
    ],
    pitfalls: [
      "Engagement annuel sans test.",
      "Ajout d'un créneau supplémentaire à un agenda déjà chargé.",
      "Substitut au rituel respiration maison."
    ]
  },
  {
    slug: "coaching-tcc",
    title: "Coaching parental TCC",
    category: "Émotion",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "Accompagnement parental basé sur la thérapie cognitivo-comportementale. À envisager après le diagnostic si la dynamique se complique.",
    why: "Outil puissant mais coûteux et exigeant. Précipité avant le diagnostic. Une fois le profil clarifié, peut être envisagé si les approches plus simples ne suffisent pas.",
    steps: [
      "Attendre le diagnostic de juillet 2026.",
      "Évaluer si les actions Q1+Q2 ont produit l'effet attendu.",
      "Si insuffisant, demander une recommandation au psychologue référent.",
      "Démarrer par un bilan court (3 séances)."
    ],
    materials: [
      "Praticien certifié TCC enfant.",
      "Budget significatif (séances non remboursées en France hors CMP)."
    ],
    signals: [
      "Outils concrets et reproductibles à la maison.",
      "Effet mesurable après 6-8 séances."
    ],
    pitfalls: [
      "Démarrer avant le diagnostic.",
      "Choisir un praticien non-spécialisé enfant.",
      "Substitut aux interventions de premier niveau."
    ]
  },
  {
    slug: "massages-couverture-lestee",
    title: "Massages, couverture lestée",
    category: "Sensoriel",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Apport proprioceptif passif, le soir. À tester avec validation du psychomotricien, particulièrement pour la couverture lestée.",
    why: "Effet variable selon les profils. Certains enfants y répondent très bien, d'autres trouvent cela aversif. À tester avant d'investir.",
    steps: [
      "En parler au psychomotricien avant achat de couverture lestée.",
      "Tester un massage doux à fermeté progressive.",
      "Si tolérée : couverture lestée 10 % du poids de l'enfant max.",
      "Usage le soir, jamais en sommeil profond.",
      "Évaluer après 2 semaines."
    ],
    materials: [
      "Couverture lestée 2-3 kg (env. 50-90€).",
      "Huile neutre pour massage.",
      "Validation pro."
    ],
    signals: [
      "Endormissement plus rapide.",
      "Demande spontanée."
    ],
    pitfalls: [
      "Acheter sans tester.",
      "Couverture trop lourde.",
      "Imposer le massage."
    ]
  },
  {
    slug: "ergotherapie",
    title: "Ergothérapie avec intégration sensorielle",
    category: "Sensoriel",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "Prise en charge spécialisée si le profil sensoriel est confirmé après diagnostic. Effort logistique et financier élevé, à n'engager qu'après indication clinique.",
    why: "Très utile si indiquée, redondante sinon. La psychomotricité couvre déjà une partie du périmètre. À envisager après le diagnostic, sur recommandation explicite.",
    steps: [
      "Attendre l'évaluation de juillet 2026.",
      "Demander à l'évaluateur si l'ergothérapie est indiquée.",
      "Si oui, identifier un ergo formé en intégration sensorielle (ASI / Ayres).",
      "Démarrer par un bilan ergo complet.",
      "Coordonner avec la psychomotricité existante."
    ],
    materials: [
      "Ergothérapeute formé en intégration sensorielle.",
      "Budget : non remboursé en libéral (env. 50-70€/séance)."
    ],
    signals: [
      "Indication explicite par l'évaluateur.",
      "Coordination claire avec la psychomot'."
    ],
    pitfalls: [
      "S'engager sans indication.",
      "Doublonner avec la psychomot'.",
      "Praticien non-spécialisé sensoriel."
    ]
  },
  {
    slug: "musees-jardins",
    title: "Musées, jardins botaniques, aquariums",
    category: "Cognitif",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Sorties culturelles enrichissantes, mais souvent saturées sensoriellement (foule, bruit, lumière). À doser avec le profil de l'enfant.",
    why: "Apport cognitif réel, mais le rapport stimulation/fatigue est souvent défavorable pour un profil sensoriel réactif. Préférer petites doses, hors affluence.",
    steps: [
      "Choisir des créneaux peu fréquentés (matin de semaine vacances, mardi après-midi).",
      "Limiter à 1h-1h30 maximum.",
      "Cibler un seul espace ou thème par visite.",
      "Prévoir un repli (banc, sortie) si surcharge.",
      "Une sortie par mois maximum au début."
    ],
    materials: [
      "Carte annuelle si rentable.",
      "Casque anti-bruit en réserve."
    ],
    signals: [
      "L'enfant garde un souvenir précis et positif.",
      "Pas de crise après la sortie.",
      "Demande de revenir."
    ],
    pitfalls: [
      "Visites longues et touristiques.",
      "Heures d'affluence.",
      "Vouloir « rentabiliser » une visite chère."
    ]
  },
  {
    slug: "seconde-langue",
    title: "Seconde langue précoce",
    category: "Cognitif",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Initiation à une langue étrangère via dessins animés en VO, comptines, ou cours ludique. Apport modeste, à différer si l'agenda est chargé.",
    why: "Bénéfice cognitif réel mais peu critique avant 7-8 ans. Risque d'ajouter une charge à un agenda déjà bien rempli. À considérer si l'enfant montre un intérêt spontané.",
    steps: [
      "Démarrer par exposition passive : VO sous-titrée, comptines.",
      "Si intérêt manifesté, proposer un atelier ludique court.",
      "Ne pas en faire un cours formel à 5 ans.",
      "Réévaluer à 7 ans."
    ],
    materials: [
      "Films/dessins animés en VO.",
      "Livres bilingues.",
      "App ludique (Gus, Holy Owly)."
    ],
    signals: [
      "L'enfant utilise spontanément des mots étrangers.",
      "Demande d'écouter en VO."
    ],
    pitfalls: [
      "Cours formel imposé.",
      "Ajout au sentiment de « tout faire ».",
      "Comparaison à d'autres enfants bilingues."
    ]
  },
  {
    slug: "echecs-construction",
    title: "Échecs, casse-tête, jeux de construction",
    category: "Cognitif",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Lego, Kapla, échecs simplifiés, casse-tête. Apport cognitif intéressant mais facultatif si la lecture et les jeux de catégorisation sont déjà en place.",
    why: "Souvent surinvesti par l'environnement HPI alors que d'autres leviers (lecture à voix haute, catégorisation) sont plus efficaces. À considérer si l'enfant accroche spontanément.",
    steps: [
      "Proposer en libre accès, sans cours dirigé.",
      "Démarrer par les Kapla (peu prescriptifs).",
      "Échecs : version simplifiée (Storyboard ou Pawn game) avant règles complètes.",
      "Construction : laisser inventer plutôt que suivre des notices."
    ],
    materials: [
      "Boîte de Kapla 200 pièces (env. 60€).",
      "Lego classic.",
      "Échiquier + livre Story Time Chess (en) ou Échecs pour enfants (fr)."
    ],
    signals: [
      "Engagement long sans intervention adulte.",
      "Construction d'objets de plus en plus complexes."
    ],
    pitfalls: [
      "Cours d'échecs dirigé trop tôt.",
      "Constructions imposées par l'adulte.",
      "Surinvestir au détriment du jeu libre."
    ]
  },
  {
    slug: "jeux-roles",
    title: "Jeux de rôle avec poupées / figurines",
    category: "Social",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Mettre en scène des situations sociales difficiles avec des figurines pour les rejouer. Outil utile mais demande disponibilité et créativité parentale.",
    why: "Efficace pour préparer ou rejouer une situation, mais effort élevé. Si l'enfant joue déjà naturellement, suffit d'écouter et accompagner. Sinon, à essayer ponctuellement.",
    steps: [
      "Identifier UNE situation à rejouer (anniversaire raté, conflit avec un copain).",
      "Utiliser des figurines neutres (Playmobil, peluches).",
      "Laisser l'enfant mener le scénario.",
      "Reformuler ce qui se passe sans interpréter.",
      "Proposer parfois une issue alternative."
    ],
    materials: [
      "Figurines déjà à la maison.",
      "Optionnel : maison Playmobil, école Playmobil."
    ],
    signals: [
      "L'enfant ramène d'elle-même les sujets sensibles dans le jeu.",
      "Réinvestissement dans la vie réelle."
    ],
    pitfalls: [
      "Imposer le scénario.",
      "Transformer en thérapie maison.",
      "Sur-interpréter chaque détail."
    ]
  },
  {
    slug: "activite-creative-groupe",
    title: "Activité créative en petit groupe",
    category: "Social",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Atelier d'art, théâtre, musique en groupe restreint. Bonne entrée sociale par le « faire ensemble » plutôt que par l'interaction directe.",
    why: "Format intéressant pour un profil socialement réactif : la médiation par l'activité réduit la pression sociale. À privilégier petit groupe, encadrement bienveillant.",
    steps: [
      "Identifier un atelier à 4-6 enfants maximum.",
      "Vérifier l'expérience de l'animateur avec les profils sensibles.",
      "Tester sur 3 séances.",
      "Évaluer plaisir, fatigue, durabilité."
    ],
    materials: [
      "Atelier hebdomadaire (associations municipales, MJC).",
      "Budget annuel (souvent 100-300€)."
    ],
    signals: [
      "L'enfant raconte spontanément l'atelier.",
      "Pas de fatigue excessive après.",
      "Production rapportée à la maison."
    ],
    pitfalls: [
      "Groupes trop grands.",
      "Animateurs orientés performance.",
      "Engagement sans test."
    ]
  },
  {
    slug: "groupe-habiletes-sociales",
    title: "Groupe d'habiletés sociales",
    category: "Social",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "Petits groupes structurés animés par psychologue ou orthophoniste. Indication post-diagnostic uniquement, si déficit social spécifique confirmé.",
    why: "Très utile dans le cadre TSA confirmé, mais inadapté avant clarification diagnostique. À ne pas confondre avec un cours de socialisation.",
    steps: [
      "Attendre l'évaluation de juillet 2026.",
      "Demander une indication explicite.",
      "Choisir un programme structuré (Vermeulen, Baghdadli, ou équivalent).",
      "Démarrer par un cycle court."
    ],
    materials: [
      "Groupe encadré par professionnel formé.",
      "Budget significatif."
    ],
    signals: [
      "Indication clinique précise.",
      "Outils concrets transposables."
    ],
    pitfalls: [
      "Démarrer sans diagnostic.",
      "Groupes hétérogènes mal calibrés.",
      "Confondre avec activité sociale ordinaire."
    ]
  },
  {
    slug: "pap",
    title: "PAP — Plan d'Accompagnement Personnalisé",
    category: "École",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "Démarche administrative pour formaliser des aménagements scolaires. À engager si les ajustements informels avec la maîtresse ne suffisent plus.",
    why: "Outil puissant mais lourd à constituer. La majorité des aménagements utiles peuvent être obtenus par dialogue informel. Le PAP devient pertinent si l'enseignant change ou si l'établissement résiste.",
    steps: [
      "Évaluer d'abord ce que la maîtresse accepte d'elle-même.",
      "Si insuffisant, demander rendez-vous au directeur d'école.",
      "Demander un PAP par écrit, joindre le bilan WPPSI.",
      "Le médecin scolaire évalue et propose les aménagements.",
      "Signature, mise en œuvre, révision annuelle."
    ],
    materials: [
      "Bilan WPPSI complet.",
      "Note du psychologue ou pédiatre.",
      "Patience administrative (3-6 mois)."
    ],
    signals: [
      "Aménagements respectés indépendamment de l'enseignant.",
      "Continuité l'année suivante."
    ],
    pitfalls: [
      "Engager avant d'avoir essayé l'informel.",
      "PAP trop ambitieux non-applicable en classe.",
      "Sous-estimer le délai administratif."
    ]
  },
  {
    slug: "saut-classe",
    title: "Saut de classe",
    category: "École",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "Décision lourde, à n'envisager que si la maturité émotionnelle suit le niveau cognitif. Profil hétérogène = grande prudence.",
    why: "Le saut de classe résout l'ennui scolaire mais expose à des fragilités sociales et émotionnelles. Pour un profil hétérogène avec sensibilités sensorielles, le risque est souvent supérieur au bénéfice.",
    steps: [
      "Ne pas l'envisager avant le diagnostic de juillet 2026.",
      "Demander explicitement l'avis de l'évaluateur sur la maturité émotionnelle.",
      "Si envisagé, faire un essai de quelques semaines avant décision.",
      "Évaluer aussi alternatives : enrichissement, décloisonnement.",
      "Décision concertée famille + école + clinicien."
    ],
    materials: [
      "Avis clinique écrit.",
      "Avis enseignant et directeur.",
      "Période d'essai."
    ],
    signals: [
      "Maturité émotionnelle clairement supérieure à l'âge.",
      "Pas de fragilité sociale, anxiété ou rigidité."
    ],
    pitfalls: [
      "Décision basée sur le seul QI.",
      "Saut imposé contre l'avis clinique.",
      "Sans période d'essai."
    ]
  },
  {
    slug: "bilan-auditif-visuel",
    title: "Bilan auditif et visuel",
    category: "Clinique",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Examens ORL et ophtalmologique pour écarter une cause sensorielle de base. Standard avant toute évaluation neurodéveloppementale.",
    why: "Indispensable comme préalable mais souvent déjà fait. À vérifier dans le carnet de santé. Si pas fait depuis 18 mois, à refaire avant juillet 2026.",
    steps: [
      "Vérifier dans le carnet de santé les derniers bilans.",
      "Si > 18 mois, prendre rendez-vous ORL et ophtalmo.",
      "Apporter les résultats à l'évaluation de juillet."
    ],
    materials: [
      "Rendez-vous ORL.",
      "Rendez-vous ophtalmologue.",
      "Couverture sécu."
    ],
    signals: [
      "Audition et vision normales confirmées par écrit.",
      "Pas de doute sensoriel de base à l'évaluation."
    ],
    pitfalls: [
      "Reporter sans cesse.",
      "Examens trop anciens à l'évaluation."
    ]
  },
  {
    slug: "consult-pediatrique",
    title: "Consultation pédiatrique si aggravation",
    category: "Clinique",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Rendez-vous pédiatre si sommeil, alimentation, ou anxiété s'aggravent significativement avant juillet. Filet de sécurité.",
    why: "Le rendez-vous de juillet est lointain. Si une aggravation se manifeste, le pédiatre peut intervenir en première ligne sans attendre l'évaluation neuropsychologique.",
    steps: [
      "Définir les seuils d'alerte avec le pédiatre par avance.",
      "Tenir un suivi simple : sommeil, appétit, humeur.",
      "Si seuil franchi 2 semaines de suite, consulter.",
      "Communiquer le journal comportemental au pédiatre."
    ],
    materials: [
      "Pédiatre référent disponible.",
      "Journal de suivi quotidien simple."
    ],
    signals: [
      "Capacité à intervenir rapidement.",
      "Le pédiatre devient un relais informé."
    ],
    pitfalls: [
      "Attendre la prochaine visite annuelle.",
      "Multiplier les avis non-coordonnés."
    ]
  },
  {
    slug: "equipe-clinique-postdx",
    title: "Constituer l'équipe clinique post-diagnostic",
    category: "Clinique",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "Une fois le diagnostic posé, identifier les bons professionnels (psychologue, ergothérapeute, orthophoniste si indiqué) et coordonner.",
    why: "Travail majeur, mais conditionné au diagnostic. Avant juillet, prématuré et risqué. Après, essentiel — la qualité de l'équipe détermine la trajectoire des 5 prochaines années.",
    steps: [
      "Attendre le diagnostic.",
      "Demander à l'évaluateur ses recommandations professionnelles.",
      "Choisir une figure pivot (souvent le psychologue référent).",
      "Construire l'équipe par couches : pivot d'abord, spécialistes ensuite.",
      "Réunion de coordination tous les 6 mois."
    ],
    materials: [
      "Réseau de professionnels formés au profil.",
      "Budget significatif et durable.",
      "Coordination active."
    ],
    signals: [
      "Cohérence des prises en charge.",
      "Pas de redondance.",
      "Communication entre praticiens."
    ],
    pitfalls: [
      "Multiplier les prises en charge non-coordonnées.",
      "Choisir sur disponibilité plutôt que compétence.",
      "Engager avant le diagnostic."
    ]
  },
  {
    slug: "groupe-parents",
    title: "Groupe de parents (HPI / TSA après Dx)",
    category: "Famille",
    effort: "Moyen",
    impact: 0,
    quadrant: "defer",
    summary: "Associations de parents, groupes de parole, pairs. Ressource précieuse mais surtout pertinente une fois le diagnostic clarifié.",
    why: "Avant le diagnostic, le risque est de s'identifier prématurément à un profil. Après, très utile pour les ressources pratiques et la décharge émotionnelle.",
    steps: [
      "Attendre que le diagnostic soit posé.",
      "Identifier 1 ou 2 associations sérieuses (Afep pour HPI, AFFA pour autisme, etc.).",
      "Tester une réunion ou un échange en ligne.",
      "Distinguer ressources pratiques et discussions générales."
    ],
    materials: [
      "Associations reconnues.",
      "Forums modérés."
    ],
    signals: [
      "Apport concret (livres, praticiens, démarches).",
      "Décharge émotionnelle bénéfique."
    ],
    pitfalls: [
      "Identification prématurée à un profil.",
      "Forums peu modérés.",
      "Comparaison toxique."
    ]
  },
  {
    slug: "therapie-familiale",
    title: "Thérapie familiale",
    category: "Famille",
    effort: "Fort",
    impact: 0,
    quadrant: "defer",
    summary: "À envisager si la dynamique familiale se tend durablement. Outil de régulation systémique, pas de première ligne.",
    why: "Très efficace dans des dynamiques complexes (fratrie qui souffre, couple en crise sur la conduite à tenir), mais lourde. Les actions Q1 et Q2 captent souvent 80 % du bénéfice.",
    steps: [
      "Évaluer d'abord ce que les actions Q1+Q2 ont déjà résolu.",
      "Si tension persistante > 6 mois, en parler au pédiatre.",
      "Choisir un thérapeute familial systémique.",
      "Démarrer par 3-4 séances exploratoires."
    ],
    materials: [
      "Thérapeute familial expérimenté.",
      "Budget durable.",
      "Disponibilité de tous les membres."
    ],
    signals: [
      "Dynamique qui s'apaise progressivement.",
      "Outils transposables au quotidien."
    ],
    pitfalls: [
      "Démarrer trop tôt.",
      "Confondre avec coaching ou thérapie individuelle.",
      "Engager sans adhésion de tous."
    ]
  },
  {
    slug: "preserver-couple-fratrie",
    title: "Préserver le temps de couple et de fratrie",
    category: "Famille",
    effort: "Moyen",
    impact: 1,
    quadrant: "big",
    summary: "Bloquer du temps régulier sans l'enfant identifié comme « celui qui demande de l'attention ». Le couple parental et la fratrie sont des ressources qui s'épuisent silencieusement.",
    why: "Une intervention efficace tient sur la durée. Le burn-out parental ou l'effacement de la fratrie sapent les bases. Préserver ces espaces n'est pas un luxe, c'est de la maintenance d'infrastructure.",
    steps: [
      "Bloquer une soirée de couple toutes les 2 semaines minimum.",
      "Bloquer un moment fratrie sans l'enfant identifié, 1h par semaine.",
      "Identifier des relais : grands-parents, baby-sitter de confiance, garde croisée.",
      "Ne pas annuler ces créneaux — c'est de la santé familiale.",
      "Faire un point trimestriel : qu'est-ce qui s'érode ?"
    ],
    materials: [
      "Calendrier partagé avec les créneaux bloqués.",
      "Liste de 2 ou 3 relais possibles.",
      "Budget baby-sitter si nécessaire."
    ],
    example: {
      label: "Routine type",
      rows: [
        ["Bi-mensuel", "Soirée couple : sortie ou simple dîner après coucher des enfants."],
        ["Hebdomadaire", "1h fratrie sans l'enfant identifié (sortie individuelle avec un parent)."],
        ["Mensuel", "Demi-journée chacun pour soi (sport, ami, lecture)."],
        ["Trimestriel", "Bilan court : ce qui s'épuise, ce qui tient."]
      ]
    },
    signals: [
      "Couple qui parle d'autre chose que des enfants 30 % du temps.",
      "Fratrie qui se sent vue et attendue.",
      "Pas de signe d'épuisement parental majeur."
    ],
    pitfalls: [
      "Annuler à la première difficulté.",
      "Faire de la soirée couple une réunion de crise.",
      "Sous-estimer le besoin d'attention des frères/sœurs."
    ]
  }
];
