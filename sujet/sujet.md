# Kit pédagogique SEED micro:bit


## Intro
Connais-tu les ballons-sondes ?  
Ces ballons permettent de faire des mesures dans l'atmosphère.
Nous nous intéressons aux ballons météorologiques, dont la nasselle est remplie de capteurs.
Ils s'élèvent dans le ciel, à au moins 35km du sol, où ils peuvent mesurer la température, l'humidité, la vitesse du vent, etc.
Grâce à eux, nous pouvons prédire la météo !

Dans ce projet, tu vas implémenter une carte capable de mesurer des données et de les envoyer à une antenne.
Nous allons commencer par faire fonctionner chaque capteur indépendamment.
Une fois que tu sauras utiliser tous les capteurs, tu pourras implémenter l'envoi des données mesurées depuis un ballon.



## Test de lancement

**Faire clignoter une LED**  
Pour s'assurer que tout est bien installé, commençons par un test.
Fais clignoter la LED. 
Elle doit s'allumer 500ms et s'éteindre 500ms indéfiniment.


## Les capteurs

### Thermomètre (micro:bit) 

**Afficher valeur**
1) Affiche la température.  
2) Est-ce que la température affichée se met à jour ?
Si ce n'est pas le cas, fais en sorte que l'affichage change lorsque la carte se réchauffe ou se refroidit. 
Tu peux tester si ça marche en soufflant dessus, en la mettant dehors, en la rapprochant d'un radiateur, etc.  

Attention : toucher les parties métalliques de la carte pendant son fonctionnement peut l'abîmer ! 
De plus, la carte n'aime pas l'eau...

<!-- ### Accéléromètre (micro:bit) -->
<!---->
<!-- 1) fonction d'affichage de barre d'accélération -->
<!-- 2) affichage de l'accélération -->


### Pression (SEED)

**Afficher valeur**
Maintenant, fais la même chose avec la pression.
TODO : manipuler la pressure range.


### Humidité (SEED)

1) Fonction d'affichage de barre


2) Afficher la barre d'humidité


### GPS (à ajouter)

1) faire une fonction d'affichage de coordonnées


## Communication LoRa (à ajouter)

* Cours : utilisation limitée
* Emission et réception de messages
* Ajout d'un header pour trier la réception
* Envoi de différentes données (nécessitant test côté récepteur)


## Ballon météorologique : envoi de toutes les données au format (APRS ?)


