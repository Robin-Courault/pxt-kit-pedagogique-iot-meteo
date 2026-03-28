---
title: "Project Report"
subtitle: "10 - kit to discover IoT with college students"
author: COURAULT Robin, HAUGUEL Sophie
subtitle: "INFO 4th year | 2025-2026 | Polytech Grenoble"
subtitle: "Supervisor: DONSEZ Didier"
subtitle: "Redaction Date: 26/03/2026"
output: pdf_document
fontsize: 12pt
numbersections: true
linestretch: 1.5
toc: true

include-before:
- '`\newpage{}`{=latex}'

header-includes: |
    \usepackage{fancyhdr}
    \fancyfoot[C]{\thepage}
---

`\newpage{}`{=latex}

## 1. Abstract

## 2. Introduction

`\newpage{}`{=latex}

## 3. Project Management

> Where to find the ressources:
>
> - in the `Appendices` section of this document
> - on github : <https://github.com/Robin-Courault/pxt-kit-pedagogique-iot-meteo/tree/main>

### 3.1. Management Methods

#### 3.1.1. Type of Management

> aimed for agile (but in the end, no progressive versions, not enough contact with user)
> organised in tasks of different sizes (some bigger than they should for agile)
> everyday: deciding what to do next, who does what, then checking up on the other +- every hour

> Between Agile, many independants tasks & substasks with multiple iterations, daily meetings, each task follow a circular process of design, implementation & test with each circle which provide a usable part.

#### 3.1.2. Tools used

> Jira
> Git, Github
> Discord
> Text Editor & VSCode

### 3.2. Project Analysis

#### 3.2.1. Project Subject, Goals & Context

> Initial description of our project

> Specifications (cahier des charges), with our differents versions

#### 3.2.2. Stakeholders (parties prenantes)

> Our main interlocutor (client's representative), and our supervisor: DONSEZ Didier

> A potential client : HARDY Christel (viewed as a validator for us)

> JEAN Sébastien as facilitator/mediator with our potential client

> Microsoft as MakeCode provider

#### 3.2.3. Risks Analysis

> Initial Risks Analysis (too short) and solutions expected

> Evolution during the project & impacts

#### 3.2.4. Quality Management

> Criterias:
> > Each captor has his expected blocks in MakeCode extension
> > Each captor has an introduction part in the instructions sheet
> > Weather balloon part in the instructions sheet
> > \+ relevance (blocks & instructions sheet)
> > \+ operation (blocks)
> > \+ clear & informative (instructions sheet)

### 3.3. Planning

> Skills & Motivations matrix
> Tasks chart
> GANTT chart
> > cost-delay-quality triangle

### 3.4. Final Analysis

#### 3.4.1. Impacts

> In prevision, can learn to college students how a weather balloon works and understand the quantity of different use the IoT have => Education Impact + Can be funny

#### 3.4.2. Financial Assessment

> Two computers
> Two Micro:bit V2 boards & one SEED board
> One XA1110 (GPS module)
> Two LoRa emitters (but just one assembled)
> Two students (Sophie & Robin) during ~50 hours (100 hours of work for one people)

#### 3.4.3. Deliverables

> Expected:
> > One Instructions Sheet (with details on each part)
> > One Micro:bit Extension for Microsoft MakeCode (with each block & functions expected)
> > A report

> Finish:
> > One Instructions Sheet (with details on what part is done and not ended parts)
> > One Micro:bit Extension for Microsoft MakeCode (with each block implemented)
> > This report, witness of our difficulties

`\newpage{}`{=latex}

## 4. Technical Work

### 4.1. Instructions Sheet

> Voir branche `sujet`, le fichier `sujet/sujet.md`.

Dans un premier temps, nous avons construit un premier squelette dans le cahier des charges. Ce premier squelette ne contenait que les noms des parties et le découpage du sujet.

Nous avons ensuite constitué un squelette plus avancé détaillant chaque partie. Cette fois, nous avons ajouté une ligne pour décrire rapidement les futures attendues de chaque partie. En complément de cette petite description succinte, le squelette de chaque partie a été défini plus finement. Le sujet visant à être pédagogique, chaque partie serait composée d'explications courtes quant à son objectif et son contexte, de consignes de manipulation, d'un cours succint et d'une correction pour les manipulations. Afin de rendre le sujet plus agréable à utiliser et à découper pour les enseignants, la partie des corrections a été déplacée, par la suite, en fin de sujet dans une section à part.

Dans un dernier temps, chaque partie a été écrite en complétant le squelette précédemment défini. Une introduction a également été ajoutée pour introduire l'objectif final du sujet, l'élaboration d'un programme à destination d'un ballon-sonde ou ballon météo. Pour chaque partie, la première chose était d'introduire la partie avec une courte phrase, comme par exemple : `Pour s'assurer que tout est bien installé, commençons par un petit test :`. Nous avons ensuite écrit les consignes de manipulation en étant le plus concis, explicite et précis possible, par exemple :

```md
- Essaie de faire clignoter la LED.

    > Elle doit s'allumer 500ms, s'éteindre 500ms puis recommencer indéfiniment.
```

Puis après les consignes, une petite partie cours vient expliquer l'intérêt du capteur dans le cadre d'un ballon météo. Cette partie de cours a nécessité des recherches mais nul besoin d'être exhaustif, cette partie n'avait pour but que de donner les grandes lignes de l'intérêt du capteur. Nous avons complété avec un petit lien redirigeant vers des pages explicatives de météo-france, afin que les élèves intéressés puissent avoir un peu plus d'informations ou une autre explication.

Finalement, la rédaction des parties s'est terminé par les éléments de correction qui ont d'abord été construits et testés sur l'interface MakeCode puis intégrés sous la forme de captures d'écran à la fin du sujet dans une partie à part baptisée `Corrections`.

Au total ce sont 4 parties qui ont été écrites, `Thermomètre`, `Pression`, `Humidité` et `GPS`, cette dernière n'étant pas complètement terminée puisqu'il manque éventuellement un petit cours. Ces parties n'ont également pas toutes une correction et ne sont pas forcément implémentées au niveau de l'extension MakeCode mais nous en parlerons un peu plus loin.

### 4.2. Code

> Voir branche `code`, le fichier `main.ts`.

> les annotations `//%` dans le code sont utilisées par MakeCode pour générer les blocs et les parties dans l'interface.

#### 4.2.1. Blocks

> Il est à noter que nous parlons ici uniquement des méthodes et fonctions utilisables via l'interface de MakeCode sous la forme de blocs, nous ne parlons pas du code supplémentaire nécessaire pour faire fonctionner ces dernières.

##### 4.2.1.1. Pressure Sensor

Pour une première suite de blocs, nous avons pris le capteur de pression, que nous n'avons finalement pas obtenu mais en voici les blocs prévus :

- bloc `setPressureRange`, à l'instar du `setAccelerometerRange` présent dans MakeCode, l'idée était de permettre aux élèves de pouvoir définir une valeur maximale au capteur de pression.
- bloc `pressure` ou `getPressure`, celui-ci était simplement destiné à récupérer la valeur courante du capteur de pression, la pression actuelle.

> N'ayant pas obtenu le capteur de pression, ces blocs n'ont pas été implémentés.

##### 4.2.1.2. Humidity Sensor

Pour la seconde suite de blocs, c'est le capteur d'humidité que nous avons traité :

- bloc `humidity` ou `getHumidity` servant simplement à récupérer la valeur courante du capteur.
- bloc `onHumidityChange`, que nous avons considété optionnel, qui devait être un événement, c'est à dire un bloc qui exécute le code qu'on lui donne dès que l'humidité change.

> N'ayant pas obtenu le capteur d'humidité, ces blocs n'ont pas été implémentés.

##### 4.2.1.3. GPS

Pour la troisième suite de blocs, c'est le GPS qui a été traité :

- bloc `getLocation`, permet de récupérer la localisation actuelle sous la forme d'un objet constitué de deux éléments, ce bloc avait pour but d'ouvrir les élèves au monde du paradigme objet tout en fournissant un moyen simple de récupérer une localisation ayant du sens.
- bloc `getLocationElement`, permettant de récupérer la longitude ou la latitude d'un objet `Location` au moyen d'un bloc permettant de sélectionner l'une ou l'autre valeur grâce à une liste déroulante.
- Nous avons ensuite fait le choix d'ajouter plusieurs blocs supplémentaires pour ajouter de l'interaction dans le sujet et permettre aux élèves de voir visuellement la localisation évoluée, nous verrons plus en détails l'implémentation dans la section [Map library](#422-map-library). Bien entendu, ces blocs n'ont pas pour vocation à être utilisé dans le ballon météo :
    - bloc `createMap` permettant de construire un objet `Map`, on peut voir cet objet comme un agrégat d'objets `Location` convertis en coordonnées à plat. L'objet `Map` a pour objectif de permettre l'affichage de `Location` de façon plus simple pour les étudiants en utilisant l'écran de 5x5 LEDs de la Micro:bit.
    - bloc `addLocation` permettant d'ajouter une `Location` à une `Map`.
    - bloc `clearMap` permettant de supprimer tous les points d'une `Map`.
    - bloc `setAnchor` permettant de redéfinir le point d'ancrage utilisé pour afficher la `Map` à partir d'une `Location` (sans ajouter la `Location` aux points de la Map).
    - bloc `moveAnchor` permettant de redéfinir le point d'ancrage en donnant un décalage en cases depuis le point d'ancrage actuel.
    - bloc `setCellSize` permettant de redéfinir la taille des cases de la `Map`, lorsqu'au moins 1 point se situe dans une case, elle est allumée.

##### 4.2.1.4. LoRa

Pour la dernière suite de blocs, c'est le LoRa qui a été traité :

- bloc `sendMsg` permettant d'envoyer un message LoRa sur une fréquence particulière constante.
- bloc `sendMsgFreq` permettant d'envoyer un message LoRa sur une fréquence donnée.
- bloc `receiveMsg` permettant de recevoir un message LoRa sur une fréquence particulière constante (la même que le bloc `sendMsg`).
- bloc `receiveMsgFreq` permettant de recevoir un message LoRa sur une fréquence donnée.
- bloc `onReceiveMsg`, bloc d'évènement exécutant son code lorsqu'un message est réceptionné.

Cet ensemble de blocs aurait permis d'après nous de pouvoir faire un peu ce que l'on voulait avec le LoRa. Cependant d'après le groupe d'étudiants travaillant sur la même carte que nous, l'émetteur LoRa était inutilisable sur une Micro:bit. Nous n'aurions de toute façon pas eu le temps de réaliser cette partie.

#### 4.2.2. Map library

La bibliothèque `Map` que nous avons constituée contient l'intégralité des blocs accessibles sur l'interface MakeCode ainsi que toutes les fonctions et objets nécessaire à leur fonctionnement.

Dans un premier temps, nous avons deux types énumérés, `anchorPositionType` qui correspond à la position du point d'ancrage à l'affichage (centre, angle haut gauche, angle haut droite, angle bas gauche et angle bas droit), et `sizeUnitType` qui correspond à une unité de distance (mètre ou kilomètre).

```ts
export enum anchorPositionType {
    //% block="Centre"
    anchorCenter,
    //% block="Coin haut gauche"
    anchorTopLeft,
    //% block="Coin haut droit"
    anchorTopRight,
    //% block="Coin bas gauche"
    anchorBottomLeft,
    //% block="Coin bas droit"
    anchorBottomRight
}

export enum sizeUnitType {
    //% block="m"
    m,
    //% block="km"
    km
}
```

Nous avons donc un objet `Map` (ci-dessous), portant les informations sur son point d'ancrage, la taille de ses cases, ses points, la taille à afficher et les pixels à allumer lors de l'affichage. Ce dernier champ permet de ne pas réserver un nouveau tableau en mémoire à chaque affichage.
Le constructeur prend une taille de cellule et une unité comme paramètres, la `Map` récupère la position courante pour l'utiliser comme point d'ancrage initial et le défini comme le centre de l'affichage.

```ts
export class Map {
        anchor_m : Point2D; // in meters
        anchorPosition : anchorPositionType;
        cellSize_m : number; // in meters
        points : Point2D[];
        printSize : number = 5;
        pixelsToTurnOn : boolean[][];

        constructor(
            cellSize : number,
            sizeUnit : sizeUnitType
            ) {
                this.anchor_m = (inputSeed.getLocation()).toPoint2D();
                this.anchorPosition = anchorPositionType.anchorCenter;
                if (sizeUnit == sizeUnitType.m) {
                    // sets the size in meters
                    this.cellSize_m = cellSize;
                } else {
                    // converts the size to meters
                    this.cellSize_m = cellSize*1000;
                }
                this.points = [];
        }
        ...
```

Cependant, afin de permettre simplement la création d'objets `Map`, c'est une fonction annexe `newMap` qui sera utilisée sous la forme d'un bloc dans MakeCode. la première annotation définit le texte du bloc, la seconde le nom de la variable à remplir avec l'objet construit et la dernière définit la valeur par défaut pour le paramètre `cellSize`. Les deux autres annotations ne servent qu'au comportement visuel du bloc.

```ts
//% block="new Map centered on current location || and cells measuring $cellSize $sizeUnit"
//% blockSetVariable=map
//% inlineInputMode=external
//% expandableArgumentMode="toggle"
//% cellSize.defl=1
export function newMap(cellSize : number, sizeUnit : sizeUnitType) {
    return new Map(cellSize, sizeUnit);
}
```

Dans une `Map`, on ne stocke pas directement une `Location` mais des `Point2D`, ces derniers ont également 2 valeurs qui sont des nombres mais ils n'ont pas le même sens et correspondent aux coordonnées à plat en mètres.

```ts
export class Point2D {
    x : number;
    y : number;
    
    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }
}
```

Ces objets sont construits à partir d'une `Location` grâce à la méthode `toPoint2D()` de cette dernière qui s'occupe de faire la conversion. Cette responsabilité aurait pu appartenir aux objets `Point2D` mais il nous semblait également tout à fait cohérent qu'un autre objet implémente lui-même sa conversion puisque il est le mieux placé pour connaitre sa structure.

```ts
//Formula found on : https://gis.stackexchange.com/a/488625
// Returns the equivalent flat coordinates (in 2D meters)
// The y axis grows from south to north
// The x axis grows from west to east
toPoint2D(): map.Point2D {
    const lat_rad: number = degToRad(this.latDeg);

    const x_m: number = this.lonDeg * 111111 * Math.cos(lat_rad);
    const y_m: number = this.latDeg * 111111;

    return new map.Point2D(x_m, y_m);
}
```

Pour ce qui est des blocs simples pour utiliser l'objet `Map`, le code s'explique lui-même, le voici donc ci-suit :

```ts
//% block="Set $anchor as anchor on $position for $this"
//% this.defl=map
setAnchor(anchor : inputSeed.Location, position : anchorPositionType) {
    this.anchor_m = anchor.toPoint2D();
    this.anchorPosition = position;
}

//% block="Move $anchor of $this of $nCellsAbscisse cellules in x and $nCellsOrdonnee cellules in y"
//% this.defl=map
moveAnchor(nCellsAbscisse : number, nCellsOrdonnee : number) {
    this.anchor_m.x += nCellsAbscisse*this.cellSize_m;
    this.anchor_m.y += nCellsOrdonnee*this.cellSize_m;
}

//% block="Set cell size of $this to $cellSize $sizeUnit"
//% this.defl=map
setCellSize(cellSize : number, sizeUnit : sizeUnitType) {
    this.cellSize_m = (sizeUnit == sizeUnitType.m) ? cellSize : cellSize*1000;
}

//% block="Add $location to $this"
//% this.defl=map
addLocation(location : inputSeed.Location) {
    this.points.push(location.toPoint2D());
}

//% block="Remove all locations in $this"
//% this.defl=map
clear() {
    this.points = [];
}
```

Pour ce qui est du bloc d'affichage (`print`), nous n'aborderons pas tout son code car il est plutôt long mais nous vous laissons retrouver son code et celui de ses fonctions utilitaires en [Annexes](#6-appendices). L'idée générale est la suivante :
- Réinitialiser le tableau des pixels à allumer.
- Définir une valeur plafond en haut et une valeur plafond à gauche en fonction de la position à l'affichage et des coordonnées du point d'ancrage.
- Définir le pixel du point d'ancrage comme étant à afficher, même si ce dernier ne fait pas partie des points de la `Map`.
- Parcourir les points de la `Map` dans les bornes définies et noter les pixels à afficher.
- Convertir le tableau des pixels à afficher en chaîne de caractères selon le format attendu par la fonction de la bibliothèque standard de MakeCode pour allumer un tableau de LEDs.
- Afficher la portion de la `Map` en allumant les LEDs.

#### 4.2.3. GPS library

La bibliothèque du module GPS embarque les fonctions permettant la récupération des trames depuis le module, leur parsing et la récupération des valeurs de longitude et latitude, ainsi que la configuration du module et les blocs de base pour MakeCode.

Commençons par les blocs avec l'objet `Location`, la structure de l'objet se décrivant elle-même, continuons avec l'obtention d'un nouvel objet de ce type.

```ts
export class Location {
    latDeg: number; // in degrees
    lonDeg: number; // in degrees

    constructor(latitude : number, longitude : number) {
        this.latDeg = latitude;
        this.lonDeg = longitude;
    }
    ...
```

Obtenir une nouvelle `Location`, revient à récupérer la dernière localisation courante, le choix a été fait d'avoir une boucle régulière chargée de récupérer les trames depuis le module et d'en extraire la dernière localisation pour éviter de saturer le buffer i2c reliant le module à notre carte, cela pour éviter une réinitialisation du module GPS.

```ts
//% block="retrieve current location"
//% blockSetVariable=location
//% group="GPS"
export function getLocation(): Location {
    return lastLocation;
}
```

Nous parlerons de la boucle régulière plus tard, parlons d'abord du dernier bloc accessible depuis l'extérieur, la méthode `getLocationElement` qui va simplement renvoyer l'un ou l'autre champ d'un objet `Location` donné dans le bloc, en fonction du paramètre `typeVal` qui correspond à l'énumération `locationType`.

```ts
export enum locationType {
    //% block="Longitude"
    locationLon,
    //% block="Latitude"
    locationLat
}
```

```ts
//% block="get $typeVal of $this"
//% group="GPS"
//% this.defl=location
getLocationElement(typeVal: locationType): number {
    if (typeVal === locationType.locationLat) {
        return this.latDeg;
    } else if (typeVal === locationType.locationLon) {
        return this.lonDeg;
    } else {
        return NaN;
    }
}
```

Revenons sur la boucle régulière (appelée toutes les 200ms en arrière plan) dont nous parlions plus tôt, elle va récupérer toutes les trames, c'est à dire récupérer toutes les données disponibles chez le module GPS et en extraire les trames complètes. La boucle va ensuite parcourir chaque trame, la découper pour isoler chaque champ et retirer le checksum puis la traiter. Le traitement consiste à tenter de lire une trame `GGA`, si on ne trouve aucune localisation alors on va tenter de lire une trame `MTK`, sinon on définit la dernière localisation comme étant celle qu'on vient de récupérer.

```ts
loops.everyInterval(200, function () {
    let trames = inputSeed.getAllTrames();

    for (let i = 0; i < trames.length - 1; i++) {
        if (trames[i].trim().length > 0) {
            let parts = trames[i].trim().split('*')[0].split(',');
            let tempLoc = inputSeed.parseTrameGGA(parts);

            if (tempLoc != null) {
                inputSeed.setLastLoc(tempLoc);
            } else {
                inputSeed.checkTrameMTK(parts);
            }
        }
    }
});
```

Cette boucle récupère toutes les trames grâce à `getAllTrames()`, cette fonction récupère toutes les données brutes disponibles puis les ajoute au buffer contenant la dernière trame incomplète. Ensuite le fonction découpe l'ensemble des trames en un tableau de trames et conserve la dernière trame car incomplète, précisons que si la dernière trame est complète, la dernière case du tableau de trames contiendra une chaîne vide.

```ts
export function getAllTrames(): string[] {
    let raw = readRawData();
    if (raw.length === 0) return [];

    trameBuffer += raw;

    // Traitement des phrases complètes
    let lines = trameBuffer.split("\n");

    // Garder la dernière ligne incomplète dans le buffer
    trameBuffer = lines[lines.length - 1];

    return lines;
}
```

La récupération des données brutes se fait en lisant à l'adresse du module GPS un maximum de 32 octets, pour chaque octet on regarde ensuite si c'est un caractère imprimable ou un des deux caractères de fin de ligne, si c'est le cas, on l'ajoute au résultat renvoyé à la fin.

> Notons que par la suite nous aurons deux '\n' à chaque fin de ligne ce qui nous créera des cases de tableau vides dans `getAllTrames()` au moment du découpage, ce n'est cependant pas un problème car une case vide est ignorée dans la boucle régulière.

```ts
function readRawData(): string {
    let result = "";
    try {
        // Lecture des octets depuis le module
        let data = pins.i2cReadBuffer(GPS_ADDRESS, 32, false);

        for (let i = 0; i < data.length; i++) {
            let charCode = data.getNumber(NumberFormat.UInt8LE, i);
            // Filtrer les caractères valides (ASCII imprimable)
            if (charCode >= 32 && charCode <= 126) {
                result += String.fromCharCode(charCode);
            } 
            // CR + LF
            else if (charCode === 13 || charCode === 10) {
                result += "\n";
            }
        }
    } catch (e) {
        result = "";
    }
    return result;
}
```

Pour ce qui est de l'analyse des trames GGA, le code est plutôt simple, on vérifie la valeur du premier champ pour s'assurer que c'est une trame GGA, on vérifie qu'on a bien un fix GPS, puis on récupère la longitude et la latitude en faisant la conversion pour obtenir une seule valeur décimale pour chacune et éviter d'utiliser le format comportant le temps et la direction cardinale. On retourne ensuite un objet `Location` créé avec les valeurs de longitude et latitude récupérées.

```ts
const GGA_LAT_POS = 2;
const GGA_LON_POS = 4;
const GGA_FIX_GPS_POS = 6;
export function parseTrameGGA(trame : string[]): Location | null {
    // GP = GPS | GN = GPS + GLONASS
    if (trame[0] == "$GPGGA" || trame[0] == "$GNGGA") {
        // si FIXGPS (= type de positionnement) = 0 alors pas de fix de position,
        // on aimerait de préférence du GPS (=1) mais fondamentalement tant que c'est fixé, ça nous convient.
        if (parseFloat(trame[GGA_FIX_GPS_POS]) > 0) {
            let lat = nmeaToDegrees(trame[GGA_LAT_POS], trame[GGA_LAT_POS+1]);
            let lon = nmeaToDegrees(trame[GGA_LON_POS], trame[GGA_LON_POS+1]);

            return new Location(lat, lon);
        } else {
            return null;
        }
    } else {
        return null;
    }
}
```

Pour le traitement des trames MTK, on vérifie le préfixe puis on le retire, ensuite dans le cas où on a un message système, on regarde sa signification et si il indique une fin de démarrage, on définit les trames que l'on souhaite recevoir, ici uniquement les GGA.

```ts
const MTK_INIT_CMD = "$PMTK314,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29\r\n";
let isStarted : boolean = false;
export function checkTrameMTK(trame : string[]): boolean {
    if (trame[0].substr(0,5) == "$PMTK") {
        switch (trame[0].substr(5)) {
            case "010": // sys_msg
                // msg = startup ended
                if (trame[1] == "002" && !isStarted) {
                    // setup de l'envoie des trames GGA
                    let buf = pins.createBuffer(MTK_INIT_CMD.length);
                    for (let i = 0; i < MTK_INIT_CMD.length; i++) {
                        buf.setNumber(NumberFormat.UInt8LE, i, MTK_INIT_CMD.charCodeAt(i));
                    }
                    pins.i2cWriteBuffer(GPS_ADDRESS, buf, false);
                    isStarted = true;
                }
                break;
            case "001": // ack
                // on ne gère pas l'acquittement de notre initialisation
                if (trame[1] == "314" && trame[2] == "3") {}
            default:
                break;
        }
        return true;
    } else {
        return false;
    }
}
```

Voilà, grâce à tout cela, le module GPS a de quoi fonctionner, nous avons cependant rencontré un problème : Le module ne fait que se réinitialiser (réamorcer sa procédure de startup) sans que l'on sache pourquoi malgré de nombreux essais et recherches.

`\newpage{}`{=latex}

## 5. Conclusion

> Assessment:
> > Pay more attention to risks, anticipate more (warning to the time management).
> > Sometimes, it's easier to recreate a library than to use a library that is not suitable for our use case.
> > Contact the client earlier.
> > Not being free to choose can struggle the project team and make the project very difficult.

> Doorway:
> > Completion of the SEED with pressure sensor, humidity sensor (or weather station).
> > Make a library to use LoRa emitter.
> > End the micro-library for GPS XA1110.
> > Complete the Instructions Sheet with a tutorial to create a weather balloon, the part to learn how to use GPS, the part on the LoRa emitter and answers for each new part.

`\newpage{}`{=latex}

## 6. Appendices

> All charts
> Summary of project management meeting
> Screenshots of MakeCode
> Parts of Code, if required (for example if we use code out of context in the report, we can put the complete code here)

### 6.1. Code

#### 6.1.1. Map - print & additionnals functions

```ts
print() {
    this.resetpixelsToTurnOn();
    let screenTop : number;
    let screenLeft : number;

    switch (this.anchorPosition) {
        case anchorPositionType.anchorTopLeft :
            screenTop = this.anchor_m.y + (this.cellSize_m/2);
            screenLeft = this.anchor_m.x - (this.cellSize_m/2);
            this.pixelsToTurnOn[0][0] = true;
            this.setPointsToTurnOn(screenTop,screenLeft);
            break;
        case anchorPositionType.anchorTopRight :
            screenTop = this.anchor_m.y + (this.cellSize_m/2);
            screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize + this.cellSize_m/2);
            this.pixelsToTurnOn[0][this.printSize-1] = true; // last char
            this.setPointsToTurnOn(screenTop,screenLeft);
            break;
        case anchorPositionType.anchorCenter :
            screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize/2 + this.cellSize_m/2);
            screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize/2 + this.cellSize_m/2);
            this.pixelsToTurnOn[this.printSize/2][this.printSize/2] = true; // mid char
            this.setPointsToTurnOn(screenTop,screenLeft);
            break;
        case anchorPositionType.anchorBottomLeft :
            screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize + this.cellSize_m/2);
            screenLeft = this.anchor_m.x - (this.cellSize_m/2);
            this.pixelsToTurnOn[this.printSize-1][0] = true;
            this.setPointsToTurnOn(screenTop,screenLeft);
            break;
        case anchorPositionType.anchorBottomRight :
            screenTop = this.anchor_m.y + (this.cellSize_m*this.printSize + this.cellSize_m/2);
            screenLeft = this.anchor_m.x - (this.cellSize_m*this.printSize + this.cellSize_m/2);
            this.pixelsToTurnOn[this.printSize-1][this.printSize-1] = true; // last char
            this.setPointsToTurnOn(screenTop,screenLeft);
            break;
    }
    
    basic.showLeds(this.convertPixelsToTurnOnInString());
}

setPointsToTurnOn(limitTop : number, limitLeft : number) {
    this.points.forEach(p => {
        if (p.x >= limitLeft && p.x < limitLeft + this.printSize*this.cellSize_m 
            && p.y <= limitTop && p.y > limitTop - this.printSize*this.cellSize_m) {
            // parcours de toutes les lignes de la grille
            for (let i = 1; i <= this.printSize; i++) {
                let j : number;
                // parcours de toutes les colonnes de la grille
                for (j = 1; j <= this.printSize; j++) {
                    // case where cell is already true
                    if (this.pixelsToTurnOn[i-1][j-1]) {
                        break;
                    }
                    // case where p is in [i-1][j-1] cell
                    else if (p.x < limitLeft + j*this.cellSize_m && p.y > limitTop - i*this.cellSize_m) {
                        this.pixelsToTurnOn[i-1][j-1] = true;
                        break;
                    }
                }

                // case where break in prev (j) loop, p can't be in two cells
                if (this.pixelsToTurnOn[i-1][j-1]) {
                    break;
                }
            }
        }
    });
}

convertPixelsToTurnOnInString() : string {
    let stringGrid = "";
    this.pixelsToTurnOn.forEach(l => {
        l.forEach(c => {
            stringGrid = c ? stringGrid += '#' : stringGrid += '.';
        })
        stringGrid = stringGrid.concat("\n");
    });
    return stringGrid;
}

resetpixelsToTurnOn() {
    // réutilisation pour éviter de trop réserver de la mémoire
    if (this.pixelsToTurnOn && this.pixelsToTurnOn.length === this.printSize) {
        for (let i = 0; i < this.printSize; i++) {
            for (let j = 0; j < this.printSize; j++) {
                this.pixelsToTurnOn[i][j] = false;
            }
        }
    } else {
        // Initialisation première fois
        this.pixelsToTurnOn = [];
        for (let i = 0; i < this.printSize; i++) {
            this.pixelsToTurnOn.push([]);
            for (let j = 0; j < this.printSize; j++) {
                this.pixelsToTurnOn[i].push(false);
            }
        }
    }
}
```

`\newpage{}`{=latex}

## 7. Bibliography

> SEED's github
> Micro:bit documentation on micro:bit v2 board
> Microsoft documentation on micro:bit v2 board
> MakeCode documentation
> XA1110 Sparkfun explainations and library
> XA1110 Hardware Plan
> PMTK documentation
> LoRa Emitter Hardware Plan
> Forums, which ones ?
