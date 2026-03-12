# Projet Collaboratif : Gestionnaire de Tâches Web

## Membres du groupe

- Antoine GUNET  
- Ali SINCER  
- Léo CROFT  

---

# Description du projet

Ce projet a pour objectif de développer une application web de gestion de tâches collaborative tout en appliquant les concepts vus en cours :

- utilisation de **Git et GitHub**
- mise en place d'un **workflow de développement**
- **tests automatisés** (unitaires, intégration, E2E)
- organisation du travail en équipe

L'application permet de gérer des tâches via une interface web et une API REST.

Fonctionnalités principales :

- création de tâches  
- modification de tâches  
- suppression de tâches  
- gestion du statut et de la priorité  
- interface web pour interagir avec l'application  

---

# Organisation du projet

Structure du projet :

```
projet-gestionnaire-taches/
│
├── frontend/          # Interface web
├── backend/           # API et logique applicative
├── tests/             # Tests automatisés
│
├── README.md
└── .github/           # Configuration GitHub Actions
```

---

# Mise en place du repository

Nous avons commencé par créer un repository GitHub partagé pour centraliser le projet et permettre le travail collaboratif.

Ensuite nous avons configuré :

- les accès au repository
- la structure du projet
- le fichier README

---

# Workflow Git

Nous avons choisi d'utiliser un **workflow basé sur les feature branches**.

Principe :

- la branche `main` contient uniquement le code stable
- chaque fonctionnalité ou type de test est développé dans une branche dédiée
- les modifications passent par des **pull requests**

## Protection de la branche main

Une règle de protection a été mise en place afin de :

- empêcher les **push directs sur `main`**
- obliger l'utilisation de **pull requests**

Cela permet de garantir la qualité du code et d'éviter les erreurs.

---

# Organisation des branches

Les branches créées sont :

```
main
features/test_unitaires
features/test_integration
features/test_e2e
```

Chaque membre du groupe était responsable d’un type de test.

---

# Répartition du travail

| Membre | Responsabilité |
|------|------|
| Antoine | Tests End-to-End (E2E) |
| Léo | Tests d’intégration |
| Ali | Tests unitaires |

---

## Antoine — Tests E2E

Antoine a développé les **tests End-to-End avec Selenium** permettant de simuler le comportement d’un utilisateur sur l’application :

- ouverture du site
- connexion
- création d’une tâche
- vérification de l’apparition de la tâche

Ces tests permettent de vérifier que **l'application fonctionne correctement du point de vue utilisateur**.

---

## Léo — Tests d'intégration

Léo a développé les **tests d’intégration**, qui permettent de vérifier que les différentes parties de l’application fonctionnent correctement ensemble :

- interaction entre l’API et la base de données
- communication entre frontend et backend
- validation des routes de l’API

---

## Ali — Tests unitaires

Ali a développé les **tests unitaires**, qui permettent de tester les fonctions et composants individuellement :

- vérification des fonctions de gestion des tâches
- validation des entrées
- vérification des résultats attendus

Ces tests permettent de garantir la **fiabilité du code à petite échelle**.

---

# Tests automatisés

Trois types de tests ont été implémentés :

### Tests unitaires
Vérifient le fonctionnement des fonctions individuelles.

### Tests d’intégration
Vérifient l'interaction entre les différentes parties de l'application.

### Tests E2E
Simulent un utilisateur réel utilisant l’application via Selenium.

---

# Qualité du code

Pour améliorer la qualité du projet :

- utilisation de **tests automatisés**
- séparation claire des responsabilités
- workflow Git structuré
- protection de la branche principale

---

# Conclusion

Ce projet nous a permis de mettre en pratique :

- le **travail collaboratif avec Git et GitHub**
- la gestion d’un **workflow de développement**
- la mise en place de **tests automatisés**
- l'organisation d’un projet logiciel en équipe

Les différents types de tests permettent d’assurer la **fiabilité et la stabilité de l’application** à plusieurs niveaux.



