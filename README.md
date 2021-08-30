# project-boilerplate

Dossier - Base

Le dossier base/ contient ce que nous pourrions appeler le code standard (boilerplate) du projet. On pourrait y trouver par exemple le fichier de reset, quelques règles typographiques, et probablement une feuille de style définissant quelques styles standard pour les éléments HTML les plus employés (que j’ai l’habitude d’appeler _base.scss).

<!-- ------------------------ -->

Dossier - Layout

Le dossier layout/ contient tout ce qui concerne la mise en page du site ou de l’application. Ce dossier pourrait intégrer des feuilles de style pour les principales parties du site (header, footer, navigation, sidebar…), pour le système de grille ou même les styles CSS pour tous les formulaires.

<!-- ------------------------ -->

Dossier - Components

Pour les plus petits composants, il y a le dossier components/. Alors que layout/ est macro (c’est-à-dire qu’il définit l’armature globale), components/ est plus centré sur les widgets. Il contient toutes sortes de modules spécifiques tels qu’un slider, un loader, un widget et toutes ces sortes de choses. Il y a en général de nombreux fichiers dans components/ car l’application tout entière devrait être essentiellement constituée de petits modules.

<!-- ------------------------ -->

Dossier - Pages

Si vous avez des styles spécifiques à certaines pages, il est préférable de les inclure à l’intérieur d’un dossier pages/ dans un fichier portant le nom de la page. Par exemple, il n’est pas rare d’avoir des styles très spécifiques pour la page d’accueil, d’où la nécessité d’un fichier _home.scss dans pages/.

<!-- ------------------------ -->

Dossier - Thèmes

Dans des sites ou applications de grande envergure, il n’est pas rare d’avoir plusieurs thèmes. Il y a certainement bien des façons de traiter les thèmes, mais personnellement j’aime les regrouper dans un dossier themes/.

<!-- ------------------------ -->

Dossier - Abstracts

Le dossier abstracts/ regroupe les outils et helpers Sass utilisés à travers le projet. Toutes les variables globales, les fonctions, les mixins et les placeholders devraient se retrouver dans ce dossier.

La règle générale concernant ce dossier est qu’il ne devrait pas retourner une seule ligne de CSS s’il était compilé seul. Ce ne sont ici que des helpers Sass.

Le dossier abstracts/ pourrait également être appelé utilities/ ou helpers/, au choix.

<!-- ------------------------ -->

Dossier - Vendors

Et last but not least, la plupart des projets comportent un dossier vendors/ qui regroupe tous les fichiers CSS provenant de bibliothèques et frameworks externes — Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, etc. Le fait de les mettre ainsi de côté dans un dossier séparé est une bonne façon d’indiquer qu’ils ne sont pas de vous et ne relèvent pas de votre responsabilité.

Si vous devez remplacer une section d’un fichier vendor, je recommande de créer un 8e dossier nommé vendors-extensions/ dans lequel vous aurez des fichiers nommés en fonction du vendor qu’ils remplacent.

Par exemple, vendors-extensions/_boostrap.scss serait un fichier contenant toutes les règles CSS qui re-déclarent le CSS par défaut de Bootstrap. Vous éviterez ainsi de modifier les fichiers vendors eux-mêmes, ce qui n’est pas conseillé.
