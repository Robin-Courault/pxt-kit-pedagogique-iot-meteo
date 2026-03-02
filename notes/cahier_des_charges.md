# Cahier des charges

## Contexte

* Carte `Micro:bit`.
* Carte d'extension `SEED` avec capteurs et modules complémentaires (GPS, LoRa, humidité, pression).
* Classe de collégiens ayant déjà pratiqué sur une carte `Micro:bit` et ayant déjà utilisé l'environnement `MakeCode`.

## Caractéristique du sujet (de TP)

* **Temps prévu total :** Combien de temps serait-il bon d'allouer à ce TP selon vous ?
* **Indépendant :** Le sujet se suffit à lui-même.
* **Format lisible :** Paragraphes courts (max 5 lignes).
* **Format de fichier :** deux possibilités
    * PDF, que nous aurons construit  avec un fichier Markdown (txt formaté)
    * Tutoriel intégré dans l'interface MakeCode
* **Composition des parties :**
    * Introduction courte
    * Consigne de manipulation (nécessitant d'explorer, de comprendre) (1 ou plusieurs manipulations)
    * Éventuellement des explications ou cours dans un format court
    * (Correction disponible en fin de sujet)
* **Parties prévues :**
    * **Test de lancement :** faire clignoter une LED
    * **Les capteurs :** (phase d'exploration des capteurs)
        * Thermomètre : afficher la température régulièrement
        * Accéléromètre : faire réaliser une fonction affichant une barre de pourcentage, et afficher l'accélération avec
        * Pression : afficher la valeur régulièrement
        * Humidité : afficher barre
        * GPS : utiliser la grille de LEDs comme une petite carte, représenter la position comme un point allumé (qui se déplacera)
    * **Communication LoRa :**
        * Cours : LoRa (principe général, utilisation, bande partagée)
        * Test d'envoi (message)
        * Test de réception
    * **Ballon météorologique :** mini-projet de fin de TP, dans l'idée de placer la carte sur un ballon-sonde
        * Envoi de toutes les données formatées ? (APRS ?)

## Interface de développement (MakeCode)

* Extension de l'interface blocs de Microsoft (MakeCode) pour Micro:bit
    * Blocs abstrayant l'utilisation des capteurs, blocs prévus ci-après.
    * En français ou anglais ?

### Blocs à implémenter

* **Pression**
    - [x] pressure() => fournit la pression mesurée au moment courant.
    - [x] setPressureRange() => définit la pression maximale mesurable.

* **Humidité**
    - [ ] humidity() => fournit la valeur d'humidité mesurée à l'instant courant.
    - [ ] on humidityChange/humidityUp/humidityDown => évènements indiquant une modification de l'humidité.

* **GPS**
    - [x] objet location/localisation => couple de deux valeurs
    - [x] getLocation => fournit un couple latitude/longitude de la position actuelle
    - [x] location.getLatitude/Longitude => permet de récupérer l'une ou l'autre valeur
    - [ ] objet map/carte => permet de mémoriser plusieurs positions et de les afficher
    - [ ] createMap() => construit une map avec une première localisation
    - [ ] map.setAnchor() => définit une localisation comme ancre (point à partir duquel la carte est dessinée), ajoute la localisation à la map si elle n'y était pas.
    - [ ] map.moveAnchor() => garde la même ancre que précédemment mais la place différemment à l'affichage ou positionne une ancre relative par rapport à un nombre de cases donné.
    - [ ] map.setCellSize() => définit la taille des cases de la grille pour l'affichage.
    - [ ] map.addPoint() => ajoute une localisation à la map
    - [ ] map.print() => affiche la map sur l'écran de LEDs de la Micro:bit en utilisant l'ancre pour décider de ce qu'il faut afficher.
    - [ ] map.clearMap() => supprime toutes les localisations enregistrées par la map, nécessite de définir une ancre avant le prochain affichage.
    - [ ] map.onMove -> évènement occurant lorsqu'un point est ajouté et qu'il se situe dans une autre case que le précédent.

* **LoRa**
    - [ ] sendMessage() => envoie un message sur une fréquence définit par défaut ou une fréquence particulière.
    - [ ] receiveMessage() => reçoit un message sur la fréquence par défaut ou une fréquence donnée. (bloquant)
    - [ ] onMessageReceived => évènement occurant lorsqu'un message est réceptionné.
