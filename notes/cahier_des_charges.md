# Cahier des charges  

* Seront fournis :
    * Sujet (format MarkDown)
    * Code source (TypeScript)

## Contraintes du sujet

* Indépendant : le sujet se suffit à lui-même
    * Peut comporter des liens externes, dans l'idéal non
* Format court : que des petits paragraphes (max 5 lignes)
* Composition des parties
    * Consigne de manipulation (nécessitant d'explorer, de comprendre)
    * Correction & explication courte
    * Éventuellement cours succint avant/après question
* Parties prévues
    * Test de lancement : faire clignoter une LED
    * Les capteurs
        * Thermomètre : afficher valeur
        * Accéléromètre : barre d'accélération
        * Pression : afficher valeur
        * Humidité : afficher barre
        * GPS : faire déplacer un point dans le carré des LEDs
    * Communication LoRa
        * Cours : utilisation limitée
        * Emetteur & Récepteur
        * Test d'envoi (message/mélodie codé en dur)
        * Envoi de différentes données (nécessitant test côté récepteur)
    * Ballon météorologique : envoi de toutes les données au format (APRS ?)

## Contraintes du code source

* Compatible avec l'interface blocks de Microsoft pour Micro:bit
    * Blocs abstrayant l'utilisation des capteurs de la carte supplémentaire
