# Blocs à implémenter

## Pression
[x] pressure() => fournit la pression mesurée au moment courant.
[x] setPressureRange(range) => définit la pression maximale mesurable.

## Humidité
[ ] humidity() => fournit la valeur d'humidité mesurée à l'instant courant.
[ ] on humidityChange/humidityUp/humidityDown => évènements indiquant une modification de l'humidité.

## GPS
[x] objet location/localisation => couple de deux valeurs
[x] getLocation => fournit un couple latitude/longitude de la position actuelle
[x] location.getLatitude/Longitude => permet de récupérer l'une ou l'autre valeur
[ ] objet map/carte => permet de mémoriser plusieurs positions et de les afficher
[ ] createMap(anchor/ancrage: location, [centre, coin haut-gauche...], cellSize : number, [m, km]) => construit une map avec une première localisation
[ ] map.setAnchor(location, [centre, coin haut-gauche...]) => définit une localisation comme ancre (point à partir duquel la carte est dessinée), ajoute la localisation à la map si elle n'y était pas.
[ ] map.moveAnchor(nb cases vers le haut, nb cases vers la droite) => garde la même ancre que précédemment mais la place différemment à l'affichage.
[ ] map.setCellSize(number, unité) => définit la taille des cases de la grille pour l'affichage.
[ ] map.addPoint(location) => ajoute une localisation à la map
[ ] map.print() => affiche la map sur l'écran de LEDs de la Micro:bit en utilisant l'ancre pour décider de ce qu'il faut afficher.
[ ] map.clearMap() => supprime toutes les localisations enregistrées par la map, nécessite de définir une ancre avant le prochain affichage.
[ ] map.onMove -> évènement occurant lorsqu'un point est ajouté et qu'il se situe dans une autre case que le précédent.

## LoRa
[ ] sendMessage(texte) => envoie un message sur une fréquence définit par défaut.
[ ] sendMessage(texte, fréquence) => envoie un message sur une fréquence particulière.
[ ] receiveMessage() => reçoit un message sur la fréquence par défaut. (bloquant)
[ ] receiveMessage(fréquence) => reçoit un message sur une fréquence précise. (bloquant)
[ ] onMessageReceived => évènement occurant lorsqu'un message est réceptionné.
