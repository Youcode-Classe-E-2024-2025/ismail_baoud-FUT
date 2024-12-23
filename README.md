# README - Application de Construction d'Équipe FUT (Ultimate Team)

## Contexte du projet

L'application permettra aux utilisateurs de construire leur équipe FUT (Ultimate Team) en ajoutant, positionnant et modifiant les joueurs tout en respectant les formations tactiques comme 4-4-2 ou 4-3-3. L'accent sera mis sur une expérience interactive avec des formulaires dynamiques, la gestion des données via localStorage, et une interface interactive

**Links**
- **Brief Presentation:**[View Presentation](https://www.canva.com/design/DAGX35CUTL4/Aa93Nff7j1fJzajkCc-lUw/edit)
- **Github Backlog:**[View Backlog](https://ibaoud46.atlassian.net/jira/software/projects/SCRUM/boards/1?sprintStarted=true&atlOrigin=eyJpIjoiODUzOWIyNDhhOWQ1NGE4OThlNWFkOTA4ZDUxNDk0ZDIiLCJwIjoiaiJ9)
- **GitHub Repository:**[View on GitHub](https://github.com/ismailbaoud/ismail_baoud-FUT)
- **Hosted Page:** [View Live](https://ismail-baoud-fut.vercel.app/)

# Fonctionnalités Clés

## 1. Intégration UI et Ajout Dynamique de Joueurs
Formulaire permettant l'ajout de joueurs avec des champs pour : Nom du joueur. Position sur le terrain. Note générale et statistiques (vitesse, tir, passe, dribble, défense, physique). Attribution des positions selon la formation tactique choisie.

## 2. Positionnement des Joueurs Selon la Formation
Prise en charge des formations tactiques suivantes : 4-3-3 : GK, 2 CB, LB, RB, 3 CM, LW, RW, ST. Les joueurs sont automatiquement positionnés en fonction des choix de formation.

## 3. Gestion des Cartes de Joueurs
Ajout et suppression des joueurs via une interface intuitive. Limitation stricte à 11 joueurs dans l'équipe principale. Les joueurs restants sont ajoutés à la liste de réserve.

## 4. Formulaires Dynamiques pour la Gestion des Joueurs
Validation des champs du formulaire pour garantir la cohérence des données. Gestion dynamique : Vérification des noms pour éviter les doublons. Contrôle du nombre de joueurs dans chaque position selon la formation.

## 5. Responsive Design
Interface optimisée pour s'adapter à toutes les tailles d'écran (desktop, tablette, mobile). Design ergonomique pour une expérience utilisateur fluide. Technologies Utilisées HTML : Pour la structure de la page. CSS / Tailwind CSS : Pour le style et la mise en page. JavaScript Vanilla : Pour les interactions dynamiques.

## Technologies Used

This project was built using the following technologies:

- **HTML**: Markup language used to structure the web pages.
- **CSS**: Stylesheets used for designing and formatting the web pages.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **JavaScript**: Programming language for interactive behavior and functionality.