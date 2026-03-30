# Kit pédagogique SEED micro:bit

## Intro

    Connais-tu les ballons-sondes ?  

Ces ballons permettent de faire des mesures dans l'atmosphère. Nous nous intéressons aux ballons météorologiques, dont la nacelle est remplie de capteurs.

Ils s'élèvent dans le ciel, à plus de 25km du sol ! Cela leur permet de mesurer la température, l'humidité, la vitesse du vent et beaucoup d'autres données. Grâce à toutes les données récoltées depuis les ballons météorologiques, nous pouvons prédire la météo !

L'objectif de ce travail pratique est de réaliser un programme capable de mesurer des données et de les envoyer à une antenne, ce programme sera mis en application par une carte électronique qui pourra ensuite être déposée dans la nacelle d'un ballon :

1. Dans un premier temps, tu vas faire fonctionner chaque capteur indépendamment afin de comprendre leur fonctionnement et leur utilisation. [Partie 1 - Les Capteurs](#les-capteurs).
2. Une fois que tu sauras utiliser tous les capteurs, tu pourras réaliser ton propre programme de ballon météo. [Partie 2 - Le Ballon](#ballon-météorologique--envoi-de-toutes-les-données-au-format-aprs-).

> Pas de panique, tu seras guidé tout au long de ce travail pratique.

**Attention :** toucher les parties métalliques de la carte pendant son fonctionnement peut l'abîmer ! De plus, la carte n'aime pas l'eau...

## Test de lancement - Faire clignoter une LED

Pour s'assurer que tout est bien installé, commençons par un petit test :

- Essaie de faire clignoter la LED.

    > Elle doit s'allumer 500ms, s'éteindre 500ms puis recommencer indéfiniment.

**Si tu n'as pas réussi** aucun problème, jette un oeil à [la fin du sujet ou clique ici pour voir la solution.](#correction---test-de-lancement)

## Les capteurs

### Thermomètre (micro:bit)

#### Utilisation du thermomètre

Essayons maintenant de faire fonctionner le thermomètre :

1) Affiche la température capturée par le thermomètre de la carte.

    1. Récupérer la température.
    2. Afficher la valeur récupérée.

2) Est-ce que la température affichée se met à jour ?
    - Si oui, bien joué, tu avais déjà tout prévu.
    - Sinon, fais en sorte que l'affichage change lorsque la carte se réchauffe ou se refroidit.

    Dans tous les cas, tu peux tester si ça marche en soufflant dessus, en la mettant dehors, en la rapprochant d'un radiateur, etc.

**Si tu n'as pas réussi** aucun problème, jette un oeil à [la fin du sujet ou clique ici pour voir la solution.](#correction---thermomètre)

#### Mais quel intérêt de connaître la température ?

Connaitre la température a plusieurs intérêts :

- Le premier vise à analyser les évolutions de température ou de moyenne de température dans une zone et ce sur plusieurs années, les températures collectées sont donc archivées sur de longues durées.
    > Cela permet notamment de constater une réelle augmentation des températures moyennes en France par exemple mais plus généralement dans le monde sur les quelques dernières dizaines d'années. Salut le réchauffement climatique !
- Le second intérêt est de mettre en évidence des zones à fortes différences de température, identifiant les différents fronts des perturbations.
- Le troisième intérêt plus utile pour nous est d'identifier les zones favorables aux orages caractérisées par de l'air chaud en bas et de l'air froid en altitude.

[Pour en savoir plus, Météo France a une petite page explicative, clique ici](https://meteofrance.com/comprendre-la-meteo/temperatures/quest-ce-que-la-temperature).

<!-- ### Accéléromètre (micro:bit) -->
<!---->
<!-- 1) fonction d'affichage de barre d'accélération -->
<!-- 2) affichage de l'accélération -->

### Pression (SEED)

#### Utilisation du capteur de pression

##### La valeur de pression

Faisons fonctionner le capteur de pression atmosphérique :

1) Affiche la température capturée par le thermomètre de la carte.

    1. Récupérer la température.
    2. Afficher la valeur récupérée.
    3. Faire en sorte que la valeur se mette à jour régulièrement.

> As-tu remarqué que la valeur ne change pas beaucoup ?
> > Des explications sont présentes un [peu plus loin](#mais-la-pression-quest-ce-que-cest-) pour t'expliquer pourquoi.

**Si tu n'as pas réussi** aucun problème, jette un oeil à [la fin du sujet ou clique ici pour voir la solution.](#correction---pression---affichage-de-la-valeur)

##### La précision de pression (pressure range en anglais)

> La précision correspond à l'intervalle/la plage des valeurs récupérables avec les blocs que tu as utilisé dans la manipulation précédente.

    TODO : exercice de manipulation de la pressure range.

**Si tu n'as pas réussi** aucun problème, jette un oeil à [la fin du sujet ou clique ici pour voir la solution.](#correction---pression---la-précision)

#### Mais la pression qu'est ce que c'est ?

Ici, on parle de pression atmosphérique, c'est à dire la force exercé par le poids de l'air sur une surface, cette force est exprimée en Pascal (Pa).

La pression atmosphérique évolue lorsque l'on monte en altitude, au niveau de la mer (0m d'altitude), on a en moyenne 1013.25 hectoPascals. Imaginez un peu, une colonne d'air d'1m2 soit un carré d'un mètre par un mètre partant de la surface de la Terre et montant jusqu'au sommet de l'atmosphère (en moyenne 600km d'altitude) a une masse de près de 10 000kg.

Les ballons-sondes volent aux alentours de 25km d'altitude, à cette hauteur, la pression est d'environ 25 hPa (hectoPascals).

[Pour en savoir plus, Météo France a une petite page explicative, clique ici](https://meteofrance.com/actualites-et-dossiers/comprendre-la-meteo/quest-ce-que-la-pression-atmospherique).

#### La pression à quoi ça sert ?

Pour faire simple, une pression importante est synonyme de temps calme et de beau temps, à l'inverse une pression faible va de paire avec le brouillard et les nuages bas.

Mais les valeurs ne sont pas la seule donnée leurs variations ont également une importance, par exemple une diminution rapide est souvent synonyme de pluie et de vents violents.

Enfin ça c'est pour faire simple car le temps est quelque chose de complexe, l'important c'est d'avoir des données de façon constante afin de pouvoir faire des analyses et continuellement apprendre et se corriger.

### Humidité (SEED)

1) Fonction d'affichage de barre

2) Afficher la barre d'humidité

### GPS (à ajouter)

1) faire une fonction d'affichage de coordonnées

### Communication LoRa (à ajouter)

- Cours : utilisation limitée
- Emission et réception de messages
- Ajout d'un header pour trier la réception
- Envoi de différentes données (nécessitant test côté récepteur)

## Ballon météorologique : envoi de toutes les données au format (APRS ?)

## Corrections

Bienvenue dans la section des corrections, tu trouveras ci-dessous des corrections aux exercices pratiques du sujet. Il y a **souvent plusieurs bonnes réponses** et les **corrections ne contiennent pas toutes les bonnes façons de répondre** à un exercice, en cas de doute, demande au professeur de vérifier ta réponse.

> **Note :** En règle générale nous réalisons la réponse la plus concise (= courte) possible.

### Correction - Test de lancement

Pour cette correction, nous avons choisi d'allumer la LED en haut à gauche de la carte (aux coordonnées (0,0)). Mais il est possible de le faire avec n'importe quelle LED.

#### Correction - Test de lancement - Mode Blocs

![correction test de lancement en mode blocs](./images/sol_test-lancement.png)

#### Correction - Test de lancement - Mode JavaScript (code)

Version utilisant `toggle`

```js
basic.forever(function () {
    led.toggle(0, 0)
    basic.pause(500)
})
```

Version utilisant `plot` et `unplot`

```js
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(500)
    led.unplot(0, 0)
    basic.pause(500)
})
```

### Correction - Thermomètre

Pour cette correction, nous avons choisi d'attendre 1 seconde entre chaque mesure + affichage de la température mais peut importe la durée de pause, cela fonctionne également sans pause.

#### Correction - Thermomètre - Mode Blocs

![correction utilisation du thermomètre en mode blocs](./images/sol_util-thermo.png)

#### Correction - Thermomètre - Mode JavaScript (code)

```js
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
```

### Correction - Pression

#### Correction - Pression - Affichage de la valeur

#### Correction - Pression - La précision

### Correction - Humidité

### Correction - GPS

### Correction - LoRa

### Correction - Ballon météo
