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

