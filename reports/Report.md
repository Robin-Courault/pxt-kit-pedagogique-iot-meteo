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

`\newpage{}`{=latex}

## 2. Introduction

This project is a final 4th-year project for computer science engineering students at Polytech Grenoble. It takes place alongside other courses and an internship search that can prove to be stressful. The project is therefore set within an educational yet realistic context, with the aim of creating a situation representative of a corporate project.

Our subject involves creating an educational kit for teaching IoT (Internet of Things) in middle school. We are therefore targeting a level suitable for middle school students, with a pedagogical objective and a result intended for middle school teachers.

This project is supervised by Mr. Didier DONSEZ, who also represents the client, his needs, and requirements in the roles of Project Owner (PO, or MOA in french) and Project Manager (PM, or MOE in french). The project team consists of two students, Robin COURAULT and Sophie HAUGUEL, the project team has also a part of Project Manager role. After several weeks, we established contact with a potential client, an interested teacher, Mrs. Christel HARDY. At the same time, Mr. Sébastien JEAN identified himself as a facilitator/mediator for our communications with Mrs. HARDY.

![Figure 1: Project Stakeholders](Parties_prenantes.png "Figure 1: Project Stakeholders")

The needs analysis proved complex due to our main contact's busy schedule. The specifications (cahier des charges) were difficult to define and stabilize; after a first version based on the single sentence serving as the project subject, we produced a second version by discussing it with Mr. DONSEZ, then adjusted it throughout the project as we progressed and asked questions. The validation of the second version of the specifications was never finalized despite our emails and verbal attempts. It was through questions and discussions that we refined the requirements.

The second version of our specifications identifies two expected deliverables, in addition to the deliverables inherent to the educational context (report + defense): a practical work (TP in french) assignment for teachers and middle schoolers, as well as an extension for the `MakeCode` no-code programming interface. These two deliverables were intended to allow the use of additional modules added to a `Micro:bit V2` board via a `SEED` expansion board, with the goal of enabling middle schoolers to create a weather balloon.

Thus, the practical work assignment was described in our specifications as being independent of other resources, intended for users already familiar with the `Micro:bit V2`, covering each new module useful for the weather balloon, and required to be in `Markdown` format. To suit middle school students, we agreed on a rather short format for each part of our practical work assignment, with each part consisting of:

- manipulation instructions, requiring exploration and understanding;
- a correction of the manipulations and short explanations;
- an optional discovery lesson to explain the relevance of the section toward building a weather balloon.

To cover all the modules necessary for the weather balloon while maintaining a logical and pedagogical sequence, we chose to define the following sections for the assignment:
- Introduction
- Launch test (checking if the board works)
- Exploration of the modules with:
    - Thermometer
    - Accelerometer
    - Pressure sensor
    - Humidity sensor
    - GPS
    - LoRa Transmitter/Receiver
- Development of the program for the weather balloon, also allowing for the consolidation of acquired knowledge.

To complement the TP assignment, an extension for `MakeCode` was requested, which should abstract the complex hardware operation of each module. This extension is exclusively intended for the `Micro:bit V2` board.

This description ultimately serves to fulfill the need to introduce middle schoolers to the Internet of Things (IoT).

`\newpage{}`{=latex}

## 3. Project Management

> Where to find the ressources:
>
> - in the `Appendices` section of this document
> - on github : <https://github.com/Robin-Courault/pxt-kit-pedagogique-iot-meteo/tree/main>
>   - check each branch

La gestion de projet s'est orientée vers les objectifs suivants :

- faire la majeure partie du travail lors des séances réservées dans l'emploi du temps
- maitrise de toutes les parties du projet par toute l'équipe
- égalisation des compétences de l'équipe pour faire en sorte que toute l'équipe atteigne un niveau commun.

### 3.1. Management Methods

Pour la gestion de projet, nous avons choisi de suivre une méthode agile, un cycle itératif. Toutes les 2 semaines environ, des modifications dans les exigences et de nouvelles découvertes entrainent de nouveaux cycles. Tout au long du projet, des parties de livrables ont été régulièrement déployables. De plus, nous avons intégré notre cliente potentielle dans la démarche projet, peut-être un peu trop tardivement. Cependant notre maître d'ouvrage était intégré dès le début et l'a été tout au long du projet.

Chaque séance de travail débutait par une petite réunion sur le travail de la dernière séance, un petit récapitulatif du travail restant puis la répartition du travail pour la séance. Cette répartition se faisait en discussion à l'amiable mais en règle générale, les membres ayant quelque chose à terminer, continuait sur leur travail. Pour les autres cas, chacun choisissait ce qu'il souhaitait parmi le travail restant à faire, il arrivait également régulièrement que l'un des membres de l'équipe demande à l'autre de continuer ou reprendre son travail afin d'avoir une autre vision.

Cette organisation nous a permis de garantir nos objectifs de maitrise globale du projet et d'égalisation des compétences grâce au fait que chaque partie du projet pouvait avancer et développer ses compétences sur la tâche de son choix. L'excellente motivation de l'équipe projet a permis de faire fonctionner cette méthode sur les premières semaines du projet, cependant à mesure que le projet avance, la motivation de l'équipe a diminué et ce n'est que la volonté de terminer qui a maintenu le fonctionnement de cette méthode d'organisation. La faible taille de l'équipe a également contribué au fonctionnement de cette méthode.

Tout le travail restant à faire a été géré grâce à l'outil `Jira`, nous permettant de maintenir un suivi des différentes tâches et sous-tâches à réaliser, l'ensemble des tâches a été réalisé et actualisé en parallèle des mouvements du cahier des charges. Nous avons choisi `Jira` car un membre de l'équipe connaissait déjà l'outil, et qu'il permettait d'avoir un tableau des tâches, sous-tâche ainsi qu'un planning ordonné prenant un aspect proche d'un diagramme de Gantt. A posteriori, l'outil était bien trop lourd, l'un des membres du projet mettant parfois quasiment une minute à charger chaque page de l'outil, les modifications s'appliquaient avec des délais d'une dizaine de secondes et le nombre de clics à effectuer pour modifier une sous-tâche était bien trop important (de l'ordre de 4 ou 5, avec certains boutons perdus dans une interface extrêmement riche), de plus, l'outil étant très complet, la complexité d'utilisation a été un frein. `Jira` emportait également trop de composants pour la taille de notre projet, nous n'avons utilisé que le `board`, la `timeline` et la `list` sur les plus de 14 composants de l'outil. Le choix d'un outil plus simple et plus léger aurait été d'avantage pertinent.

Pour ce qui est des autres outils utilisés, du côté des environnement pour le développement, `VSCode` et `neovim` ont été utilisés, pour `VSCode`, l'intérêt était un excellent support et des extensions pour le développement (complétion, coloration) pour `TypeScript`, dont nous reparlerons plus tard, comme les deux viennent de `Microsoft`. De plus `VSCode` était maitrisé par une partie de l'équipe et était capable d'être utilisé sur les autres types de documents manipulés grâce à ses extensions, facilitant ainsi l'écriture des fichiers `Markdown`, la lecture des PDFs, des images et du JSON depuis le même outil. Pour `neovim`, il a été utilisé car l'autre partie de l'équipe ne souhaitait pas utiliser d'IDE (Integrated Development Environment) à client lourd ayant un ordinateur avec peu de performances, connaissait d'avantage cet outil. L'interface `Playground` en ligne de `Microsoft MakeCode` a également été beaucoup utilisé notamment pour tester les effets du code et son fonctionnement sur l'interface `MakeCode` et sur la carte `Micro:bit`, les tests via l'interface `MakeCode` directement étant plutôt lourds puisque nécessitant une installation locale (de plusieurs Giga octets). Cette interface `Playground` est également utile pour développer puisqu'elle embarque un éditeur avec de l'auto-complétion `TypeScript` mais également sur les bibliothèques spécifiques à `MakeCode` et à la carte `Micro:bit`.

Pour continuer sur les outils de code, nous avons utilisé `Git` et notamment les dépôts `github`, tout d'abord car `Git` est le seul outil de versioning que nous connaissions et maitrisions. Le versioning étant nécessaire dans tout projet pour garantir d'être capable de maintenir un arbre de l'évolution des versions d'un projet et être capable de revenir à une version antérieure en cas de problème. `Github` nous a été imposé pour la création d'une extension pour `Microsoft MakeCode`, ce dernier n'acceptant que les dépôts `github` pour importer des extensions. `MakeCode` quant à lui, a été la destination imposé par notre maitre d'oeuvre et d'ouvrage monsieur DONSEZ pour l'extension car c'est celle que le client utilisait ou souhaitait. L'utilisation de `MakeCode` a également imposé l'utilisation du langage `TypeScript` pour écrire l'extension, étant le seul langage réellement accepté malgré des méthodes existantes pour utiliser du `C++` mais ces dernières sont très mal documentées.

Continuons avec le matériel, du côté de la carte et des différents capteurs, notre maitre d'ouvrage nous a imposé le choix de la `Micro:bit V2` pour la carte, ce qui ne nous semble pas particulièrement judicieux du point de vue développement, de part l'absence de bibliothèques pour utiliser la totalité des modules matériels nous ayant été fournis, cependant la carte a les avantages d'être peu onéreuse (~20€) et d'avoir plusieurs interfaces no-code, elle est donc adapté à une utilisation en collège et donc au besoin identifié pour le projet. Pour les capteurs et émetteurs, au vu du nombre de modules existants et du temps imparti, il nous a été appréciable de ne pas avoir à choisir par nous même, les modules étaient plutôt bien documentés puisque nous avons trouvé rapidement les documentations nécessaires lorsque nous savions quoi chercher.

Pour terminer sur les outils, la communication a été effectuée à l'oral en présentiel, via `Discord` ou via les `SMS`, le premier étant le plus simple et le plus direct, les deux autres paliant les moments à distance. Le `SMS` a été choisi car plus rapide, l'un des membres de l'équipe n'ayant pas de `Smartphone`, les SMS étaient appropriés lors d'échanges demandant une faible latence, comme la communication organisationnelle, à savoir les problèmes d'emploi du temps ou les impossibilités de présence par exemple. `Discord` a été choisi pour le reste de la communication à distance, déjà utilisé dans les communications étudiantes dans la classe, toute l'équipe en avait la maitrise et possédait un compte, de plus, il est bien plus aisé de lire de gros textes sur un ordinateur que sur un téléphone (`Discord` permettant les deux). Les `emails` ont également été utilisés, surtout pour communiquer avec les autres parties prenantes car nous ne possédions leur contact que sur ce canal pour certains, cela permettait d'informer toutes les parties prenantes quand cela était nécessaire.
Aucun des outils utilisé pour la communication ne garantissait réellement la confidentialité des échanges, cela n'était cependant pas un problème puisque le projet n'avait pas de contrainte de confidentialité.

### 3.2. Risks Analysis & Planning

Voici ci-dessous le diagramme de Gantt de notre projet, c'est un Gantt qui contient le Gantt originel sur lequel nous avons ajouté le Gantt de fin de projet. Les éléments rayés avec un gris sombre représentent les parties que nous avons annulés, les parties encadrées de vert sont quant à elles les parties terminées que nous avons conservé dans notre objectif de rendu final, après les nombreuses péripéties auxquelles nous avons fait face, notamment l'absence de certains modules initialements prévus ou l'impossibilité temporelle d'effectuer certaines tâches. La partie bleue (non rayée) des tâches représente la partie terminée des tâches.

On peut voir que nous avons dû éliminer de nombreuses parties initialement prévues, notamment une bonne partie du sujet que nous avions rédigée, n'a finalement pas été conservée, nous entendons ici par "conservée", que c'est une partie qui a été finie mais qui ne sera pas utile puisqu'elle concerne des parties sur des capteurs que nous n'avons pas obtenu qui sortent donc du contexte du projet. On peut notamment voir les capteurs d'humidité et de pression, dont la partie d'implémentation a également été annulée pour cette raison. L'implémentation du `LoRa` a été annulée surtout par manque de temps mais également car des membres d'un autre groupe plus spécialisés que nous sur l'aspect électronique embarqué n'ont pas réussi à faire fonctionner le `LoRa` sur la `Micro:bit` malgré plus de temps, de compétences et de moyens humains que notre groupe. La partie concernant le ballon météo a été annulé surtout par manque de temps mais également en conséquence aux autres annulations, un ballon météo capable seulement de mesurer la température et de se localiser n'est pas vraiment complet.

![Figure 2: Gantt Chart with cancelled tasks](Gantt_en.png "Figure 2: Gantt Chart with cancelled tasks")

Ceci illustre parfaitement les nombreux aléas auxquels nous avons fait face et nos difficultés à obtenir un projet clair.
Ce diagramme de Gantt illustre également parfaitement le fait que nous n'ayons pas identifié de nombreux risques ou que nous n'avons pas bien évalué leur probabilité ou l'impact qu'ils pouvaient avoir sur le projet. Mais nous allons le voir plus en détails dans très peu de temps en parlant de notre analyse des risques.

**Risques identifiés au départ :**

- **A.** Arrivée tardive de la carte => **Acceptation**, c'est un risque important mais contre lequel on ne peut pas vraiment faire quelque chose dans le contexte de ce projet. Cela nous empêcherait de faire des tests aussi bien sur la carte que sur les modules. On connait tout de même la carte avant de la recevoir.
- **B.** Arrivée tardive des modules => **Réduction**, risque important car empêchant de faire les drivers (car aucune idée du modèle pour certains modules) et les tests, nous avons réduit l'impact en anticipant la conception afin de ne pas retarder l'ensemble du projet si le risque se transformait en certitude.
- **C.** Objectifs et définition du projet imprécise => **Réduction** (de l'impact), par l'intégration de validations et révisions régulières du cahier des charges dans l'organisation. Ce risque, si il se réalise, peut provoquer des changements importants et nous faire perdre du temps en nous obligeant à jeter du travail réalisé.
- **D.** Contraintes dans le matériel et le développement trop fortes => **Acceptation**, risque de mauvais choix pour coller aux contraintes et d'un développement trop complexifié. Accepté car c'est quelque chose pour lequel nous n'avions aucun poids de décision.
- **E.** Manque de compétence de l'équipe => **Acceptation** (Provisionnement), c'est un risque accepté en choisissant de réserver du temps pour la montée en compétence.

![Figure 3: Risks Matrix en début de projet](MatriceCriticiteRisques.png "Figure 3: Risks Matrix en début de projet")

**Réévaluation des risques en fin de projet et nouveaux risques :**

- F. Contraintes des utilisateurs finaux divergents des contraintes données par le maitre d'ouvrage et d'oeuvre => **Evitement** (ou a minima **Réduction**) en communiquant et intégrant d'avantage les utilisateurs finaux en l'occurence ici, Christel HARDY, au projet.
- G. Non Fonctionnement d'un module sur notre carte (Micro:Bit) => **Evitement** en changeant de module ou de carte. Ou en retirant ce module du cahier des charges dans le pire des cas. Ou encore **Réduction** en sélectionnant une carte ayant d'avantages de support et de bibliothèques matérielles.
- H. Non arrivée des modules prévus => **Acceptation** car peu de chance que cela arrive, mais très problèmatique car éventuellement perte de temps en jetant du travail déjà réalisé.

![Figure 4: Risks Matrix en fin de projet](MatriceCriticiteRisquesPostProjet.png "Figure 4: Risks Matrix en fin de projet")

Comme on peut le voir, plusieurs risques imprévus en début de projet se révèlent critiques si ils se réalisent, problème étant qu'ils sont arrivés sans que nous ayons anticipé des stratégies de mitigation. Trois des cinq risques initiaux se sont révélés plus impactant que prévu ce qui nous a également porté préjudice.

### 3.3. Financial Assessment

Ce projet s'est déroulé avec peu de moyens, mais suffisant sauf au niveau du temps, nous avions : 
- 2 ordinateurs portables
- 2 Micro:bit V2
- 1 module GPS XA1110
- 2 émetteurs/récepteurs LoRa, Wio-SX1262
- 2 étudiants (Robin COURAULT & Sophie HAUGUEL) durant approximativement 50h, soit une centaine d'heures de travail humain.


`\newpage{}`{=latex}

## 4. Technical Work

### 4.1. Instructions Sheet

> See branch `sujet`, file `sujet/sujet.md`.

Initially, we built a first skeleton within the specifications. This first skeleton only contained the names of the parts and the breakdown of the subject.

We then developed a more advanced skeleton detailing each part. This time, we added a line to quickly describe the expected features of each section. In addition to this brief description, the skeleton for each part was more finely defined. Since the project aims to be educational, each part would consist of short explanations regarding its objective and context, manipulation instructions, a brief lesson, and a correction for the exercises. To make the tutorial more pleasant to use and easier for teachers to divide, the corrections section was subsequently moved to a separate section at the end of the document.

In the final stage, each part was written by completing the previously defined skeleton. An introduction was also added to present the final goal of the project: the development of a program for a sounding balloon or weather balloon. For each part, the first step was to introduce the section with a short sentence, such as: `To ensure everything is properly installed, let's start with a quick test:`. We then wrote the manipulation instructions to be as concise, explicit, and precise as possible, for example:

```md
- Try to make the LED blink.

    > It should turn on for 500ms, turn off for 500ms, then repeat indefinitely.
```

Following the instructions, a small lesson section explains the importance of the sensor in the context of a weather balloon. This lesson part required research, but there was no need to be exhaustive; its purpose was only to provide the broad outlines of the sensor's utility. We supplemented this with a short link redirecting to explanatory pages from Météo-France, so that interested students could find more information or an alternative explanation.

Finally, the drafting of the parts concluded with the correction elements, which were first built and tested on the MakeCode interface and then integrated as screenshots at the end of the subject in a separate section titled `Corrections`.

In total, 4 parts were written: `Thermometer`, `Pressure`, `Humidity`, and `GPS`, the latter not being completely finished as a short lesson is potentially missing. Furthermore, these parts do not all have a correction and are not necessarily implemented at the MakeCode extension level, but we will discuss this further on.

### 4.2. Code

> See branch `code`, file `main.ts`.

> The `//%` annotations in the code are used by MakeCode to generate blocks and categories in the interface.

#### 4.2.1. Blocks

> It should be noted that we are speaking here only of the methods and functions usable via the MakeCode interface in the form of blocks; we are not speaking of the additional code necessary to make them function.

##### 4.2.1.1. Pressure Sensor

For the first set of blocks, we focused on the pressure sensor, which we ultimately did not obtain, but here are the planned blocks:

- `setPressureRange` block: similar to the `setAccelerometerRange` present in MakeCode, the idea was to allow students to define a maximum value for the pressure sensor.
- `pressure` or `getPressure` block: this was simply intended to retrieve the current value from the pressure sensor, the current pressure.

> Having not obtained the pressure sensor, these blocks were not implemented.

##### 4.2.1.2. Humidity Sensor

For the second set of blocks, we addressed the humidity sensor:

- `humidity` or `getHumidity` block: used simply to retrieve the current value of the sensor.
- `onHumidityChange` block: which we considered optional, intended to be an event—meaning a block that executes the code provided as soon as the humidity changes.

> Having not obtained the humidity sensor, these blocks were not implemented.

##### 4.2.1.3. GPS

For the third set of blocks, the GPS was addressed:

- `getLocation` block: allows the current location to be retrieved in the form of an object consisting of two elements; this block aimed to introduce students to the world of the object-oriented paradigm while providing a simple way to retrieve a meaningful location.
- `getLocationElement` block: allowing the retrieval of the longitude or latitude of a `Location` object using a block that lets the user select one or the other value via a dropdown list.
- We then chose to add several additional blocks to add interaction to the project and allow students to visually see the location evolve; we will see the implementation in more detail in the [Map library](#422-map-library) section. Of course, these blocks are not intended for use in the actual weather balloon:
    - `createMap` block: allowing the construction of a `Map` object; this object can be seen as an aggregate of `Location` objects converted into flat coordinates. The `Map` object aims to allow the display of `Locations` more simply for students using the Micro:bit's 5x5 LED screen.
    - `addLocation` block: allowing a `Location` to be added to a `Map`.
    - `clearMap` block: allowing all points in a `Map` to be deleted.
    - `setAnchor` block: allowing the anchor point used to display the `Map` to be redefined from a `Location` (without adding the `Location` to the Map points).
    - `moveAnchor` block: allowing the anchor point to be redefined by providing an offset in grid cells from the current anchor point.
    - `setCellSize` block: allowing the size of the `Map` cells to be redefined; when at least 1 point is located in a cell, it is lit up.

##### 4.2.1.4. LoRa

For the final set of blocks, LoRa was addressed:

- `sendMsg` block: allowing a LoRa message to be sent on a specific constant frequency.
- `sendMsgFreq` block: allowing a LoRa message to be sent on a given frequency.
- `receiveMsg` block: allowing a LoRa message to be received on a specific constant frequency (the same as the `sendMsg` block).
- `receiveMsgFreq` block: allowing a LoRa message to be received on a given frequency.
- `onReceiveMsg` block: an event block executing its code when a message is received.

This set of blocks would have allowed us, in our opinion, to do pretty much whatever we wanted with LoRa. However, according to the group of students working on the same board as us, the LoRa transmitter was unusable on a Micro:bit. In any case, we would not have had the time to complete this part.

#### 4.2.2. Map library

The `Map` library we built contains all the blocks accessible on the MakeCode interface as well as all the functions and objects necessary for their operation.

Initially, we have two enumerated types: `anchorPositionType`, which corresponds to the position of the anchor point on the display (center, top-left corner, top-right corner, bottom-left corner, and bottom-right corner), and `sizeUnitType`, which corresponds to a distance unit (meter or kilometer).

```ts
export enum anchorPositionType {
    //% block="Center"
    anchorCenter,
    //% block="Top left corner"
    anchorTopLeft,
    //% block="Top right corner"
    anchorTopRight,
    //% block="Bottom left corner"
    anchorBottomLeft,
    //% block="Bottom right corner"
    anchorBottomRight
}

export enum sizeUnitType {
    //% block="m"
    m,
    //% block="km"
    km
}
```

We therefore have a `Map` object (below), carrying information about its anchor point, the size of its cells, its points, the display size, and the pixels to turn on during display. This last field avoids allocating a new array in memory for every display update.
The constructor takes a cell size and a unit as parameters; the `Map` retrieves the current position to use as the initial anchor point and defines it as the center of the display.

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

However, to simply allow the creation of `Map` objects, a helper function `newMap` will be used as a block in MakeCode. The first annotation defines the block text, the second the name of the variable to be populated with the constructed object, and the last defines the default value for the `cellSize` parameter. The other two annotations are only for the visual behavior of the block.

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

In a `Map`, we do not store a `Location` directly but rather `Point2D` objects; these also have 2 numerical values, but they do not have the same meaning and correspond to flat coordinates in meters.

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

These objects are constructed from a `Location` using the latter's `toPoint2D()` method, which handles the conversion. This responsibility could have belonged to the `Point2D` objects, but it also seemed entirely consistent to us that another object should implement its own conversion since it is best placed to know its own structure.

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

Regarding the simple blocks for using the `Map` object, the code is self-explanatory, so here it is below:

```ts
//% block="Set $anchor as anchor on $position for $this"
//% this.defl=map
setAnchor(anchor : inputSeed.Location, position : anchorPositionType) {
    this.anchor_m = anchor.toPoint2D();
    this.anchorPosition = position;
}

//% block="Move $anchor of $this of $nCellsAbscisse cells in x and $nCellsOrdonnee cells in y"
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

As for the display block (`print`), we will not cover all of its code as it is quite long, but you can find its code and that of its utility functions in the [Appendices](#611-map---print--additionnals-functions). The general idea is as follows:
- Reset the array of pixels to be lit.
- Define a top boundary value and a left boundary value based on the display position and the anchor point coordinates.
- Set the anchor point pixel as one to be displayed, even if it is not part of the `Map` points.
- Iterate through the `Map` points within the defined boundaries and note the pixels to be displayed.
- Convert the array of pixels to be displayed into a character string according to the format expected by the MakeCode standard library function for lighting an LED array.
- Display the portion of the `Map` by lighting the LEDs.

#### 4.2.3. GPS library

The GPS module library includes functions for retrieving sentences from the module, parsing them, and extracting longitude and latitude values, as well as module configuration and basic blocks for MakeCode.

Let's start with the blocks involving the `Location` object; since the object's structure is self-descriptive, let's continue with obtaining a new object of this type.

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

Obtaining a new `Location` involves retrieving the last current location. The choice was made to have a regular background loop responsible for retrieving sentences from the module and extracting the latest location to avoid saturating the I2C buffer connecting the module to our board, thus preventing a GPS module reset.

```ts
//% block="retrieve current location"
//% blockSetVariable=location
//% group="GPS"
export function getLocation(): Location {
    return lastLocation;
}
```

We will discuss the regular loop later; first, let's talk about the last block accessible from the outside: the `getLocationElement` method, which simply returns one or the other field of a given `Location` object in the block, depending on the `typeVal` parameter which corresponds to the `locationType` enumeration.

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

Returning to the regular loop (called every 200ms in the background) mentioned earlier: it retrieves all sentences—that is, it retrieves all raw data available from the GPS module and extracts complete sentences. The loop then iterates through each sentence, splitting it to isolate each field, removing the checksum, and then processing it. Processing consists of attempting to read a `GGA` sentence; if no location is found, it attempts to read an `MTK` sentence; otherwise, it defines the last location as the one just retrieved.

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

This loop retrieves all sentences via `getAllTrames()`. This function retrieves all available raw data and adds it to the buffer containing the last incomplete sentence. Then, the function splits the set of sentences into an array and keeps the last sentence because it is incomplete; note that if the last sentence is complete, the last element of the sentence array will contain an empty string.

```ts
export function getAllTrames(): string[] {
    let raw = readRawData();
    if (raw.length === 0) return [];

    trameBuffer += raw;

    // Processing complete phrases
    let lines = trameBuffer.split("\n");

    // Keep the last incomplete line in the buffer
    trameBuffer = lines[lines.length - 1];

    return lines;
}
```

The retrieval of raw data is done by reading a maximum of 32 bytes from the GPS module's address. For each byte, it checks if it is a printable character or one of the two end-of-line characters; if so, it adds it to the result returned at the end.

> Note that subsequently, we will have two '\n' at each line end, which will create empty array elements in `getAllTrames()` during splitting; however, this is not a problem as an empty element is ignored in the regular loop.

```ts
function readRawData(): string {
    let result = "";
    try {
        // Reading bytes from the module
        let data = pins.i2cReadBuffer(GPS_ADDRESS, 32, false);

        for (let i = 0; i < data.length; i++) {
            let charCode = data.getNumber(NumberFormat.UInt8LE, i);
            // Filter valid characters (printable ASCII)
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

Regarding the analysis of GGA sentences, the code is quite simple: we check the value of the first field to ensure it is a GGA sentence, verify that we have a GPS fix, and then retrieve the longitude and latitude by converting them into a single decimal value each, avoiding the format that includes time and cardinal direction. We then return a `Location` object created with the retrieved longitude and latitude values.

```ts
const GGA_LAT_POS = 2;
const GGA_LON_POS = 4;
const GGA_FIX_GPS_POS = 6;
export function parseTrameGGA(trame : string[]): Location | null {
    // GP = GPS | GN = GPS + GLONASS
    if (trame[0] == "$GPGGA" || trame[0] == "$GNGGA") {
        // if FIXGPS (= positioning type) = 0 then no position fix,
        // we would preferably like GPS (=1) but fundamentally as long as it's fixed, it suits us.
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

For the processing of MTK sentences, we check the prefix and then remove it. In the case where we have a system message, we look at its meaning; if it indicates the end of startup, we define the sentences we wish to receive—in this case, only GGA.

```ts
const MTK_INIT_CMD = "$PMTK314,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29\r\n";
let isStarted : boolean = false;
export function checkTrameMTK(trame : string[]): boolean {
    if (trame[0].substr(0,5) == "$PMTK") {
        switch (trame[0].substr(5)) {
            case "010": // sys_msg
                // msg = startup ended
                if (trame[1] == "002" && !isStarted) {
                    // setup the sending of GGA sentences
                    let buf = pins.createBuffer(MTK_INIT_CMD.length);
                    for (let i = 0; i < MTK_INIT_CMD.length; i++) {
                        buf.setNumber(NumberFormat.UInt8LE, i, MTK_INIT_CMD.charCodeAt(i));
                    }
                    pins.i2cWriteBuffer(GPS_ADDRESS, buf, false);
                    isStarted = true;
                }
                break;
            case "001": // ack
                // we do not handle the acknowledgment of our initialization
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

There we go; thanks to all of this, the GPS module has what it needs to function. However, we encountered a problem: the module keeps resetting (restarting its startup procedure) without us knowing why, despite numerous attempts and research.

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

#### 3.4.2. 

#### 3.4.3. Deliverables

> Expected:
> > One Instructions Sheet (with details on each part)
> > One Micro:bit Extension for Microsoft MakeCode (with each block & functions expected)
> > A report

> Finish:
> > One Instructions Sheet (with details on what part is done and not ended parts)
> > One Micro:bit Extension for Microsoft MakeCode (with each block implemented)
> > This report, witness of our difficulties

#### 3.4.1. Impacts

> In prevision, can learn to college students how a weather balloon works and understand the quantity of different use the IoT have => Education Impact + Can be funny

Finalement pour conclure cette partie 

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
