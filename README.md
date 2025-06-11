
# EZWatiqa - Assistant Universitaire Marocain

## 📋 Cahier des charges

### Vue d'ensemble du projet
EZWatiqa est une application web progressive (PWA) conçue spécifiquement pour les étudiants des universités marocaines. Elle facilite la gestion des documents administratifs et des informations personnelles nécessaires pour les démarches universitaires.

### Objectifs principaux
- Simplifier la gestion des documents universitaires
- Centraliser les informations personnelles des étudiants
- Fournir un assistant IA multilingue avec support vocal
- Offrir une interface adaptée aux langues officielles du Maroc

### Public cible
- Étudiants des universités marocaines
- Personnel administratif universitaire
- Nouveaux étudiants en processus d'inscription

## 🛠️ Technologies utilisées

### Frontend
- **React 18.3.1** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Outil de build moderne et rapide
- **React Router DOM 6.26.2** - Routage côté client

### Interface utilisateur
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/UI** - Composants UI modernes et accessibles
- **Lucide React** - Bibliothèque d'icônes
- **Radix UI** - Composants primitifs accessibles

### Gestion d'état et données
- **TanStack React Query 5.56.2** - Gestion des données asynchrones
- **React Hook Form 7.53.0** - Gestion des formulaires
- **Zod 3.23.8** - Validation de schémas TypeScript

### Fonctionnalités avancées
- **date-fns 3.6.0** - Manipulation des dates
- **class-variance-authority** - Gestion des variantes de classes CSS
- **cmdk** - Interface de commandes
- **sonner** - Notifications toast

## 🏗️ Architecture du projet

### Structure des dossiers
```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Composants UI de base (Shadcn)
│   ├── AssistantBot.tsx # Assistant IA flottant
│   ├── Layout.tsx       # Layout principal
│   └── LanguageSelector.tsx # Sélecteur de langue
├── hooks/               # Hooks personnalisés
│   ├── useLanguage.tsx  # Gestion multilingue
│   └── use-*.ts         # Autres hooks utilitaires
├── pages/               # Pages de l'application
│   ├── Welcome.tsx      # Page d'accueil
│   ├── LanguageSelection.tsx # Sélection de langue
│   ├── Auth/            # Pages d'authentification
│   ├── Dashboard.tsx    # Tableau de bord
│   ├── Home.tsx         # Page d'accueil connectée
│   └── UserInfo/        # Pages de gestion des informations
├── lib/                 # Utilitaires
└── main.tsx            # Point d'entrée
```

### Composants principaux

#### 1. Système d'authentification
- **Login** - Connexion utilisateur
- **Register** - Inscription
- **ForgotPassword** - Récupération de mot de passe
- **EmailVerification** - Vérification email

#### 2. Gestion des informations utilisateur
- **PersonalInfo** - Informations personnelles
- **LegalTutor** - Informations du tuteur légal
- **ContactDetails** - Coordonnées et adresse
- **SpecificInfo** - Informations spécifiques universitaires
- **OtherDocs** - Autres documents

#### 3. Assistant IA
- **Chatbot** - Interface de chat avec support vocal
- **AssistantBot** - Widget flottant accessible depuis toutes les pages

## 🌍 Support multilingue

### Langues supportées
- **Français** - Langue principale
- **العربية (Arabe)** - Langue officielle du Maroc
- **English** - Langue internationale
- **ⵜⴰⵎⴰⵣⵉⵖⵜ (Tamazight)** - Langue amazighe

### Fonctionnalités linguistiques
- Interface RTL pour l'arabe
- Polices spécialisées (Noto Sans Arabic, Noto Sans Tifinagh)
- Traduction contextuelle
- Détection automatique de la direction du texte

## 📱 Fonctionnalités

### Core Features
1. **Gestion d'identité numérique**
   - Stockage sécurisé des informations personnelles
   - Upload et gestion des documents
   - Validation des données

2. **Assistant IA multilingue**
   - Chat textuel et vocal
   - Réponses contextuelles
   - Support des 4 langues

3. **Interface responsive**
   - Design mobile-first
   - Adaptation automatique aux différents écrans
   - Navigation intuitive

### Fonctionnalités techniques
- **PWA Ready** - Application web progressive
- **Offline Support** - Fonctionnement hors ligne
- **Performance optimisée** - Lazy loading, code splitting
- **Accessibilité** - Conforme aux standards WCAG

## 🔧 Configuration et déploiement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [<repository-url>](https://github.com/Bourzguifatimazahra/watiqa-page-layout-design)

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build
```
 

## 🎨 Design System

### Couleurs principales
- **Vert** - Couleur du drapeau marocain
- **Rouge** - Couleur du drapeau marocain
- **Bleu** - Couleur institutionnelle

### Typographie
- **Sans-serif** - Police principale
- **Noto Sans Arabic** - Texte arabe
- **Noto Sans Tifinagh** - Texte amazighe

## 📊 Métriques et performance

### Objectifs de performance
- **First Contentful Paint** < 1.5s
- **Largest Contentful Paint** < 2.5s
- **Cumulative Layout Shift** < 0.1
- **First Input Delay** < 100ms

### Accessibilité
- **WCAG 2.1 AA** - Niveau de conformité visé
- **Keyboard Navigation** - Navigation complète au clavier
- **Screen Reader** - Support des lecteurs d'écran

## 🔐 Sécurité

### Mesures de sécurité
- Validation côté client et serveur
- Sanitisation des entrées utilisateur
- Protection CSRF
- Chiffrement des données sensibles

## 🚀 Roadmap

### Version 1.0 (Actuelle)
- [x] Interface multilingue
- [x] Gestion des informations utilisateur
- [x] Assistant IA avec support vocal
- [x] Design responsive

### Version 1.1 (Prochaine)
- [ ] Intégration API universitaires
- [ ] Notifications push
- [ ] Mode hors ligne avancé
- [ ] Export PDF des documents

### Version 2.0 (Future)
- [ ] Intégration blockchain pour la vérification
- [ ] IA avancée avec ML
- [ ] Marketplace de services universitaires

## 👥 Équipe de développement

### Rôles et responsabilités
- **Product Owner** -  nawal EL KELLALI
- **UI/UX Designer** -  nawal EL KELLALI
- **Frontend Developer** -  Bourzgui fatima zahra
- **Backend Developer** -  Bourzgui fatima zahra
- **DevOps** -  Bourzgui fatima zahra

## 📞 Support et maintenance

### Canaux de support
- Documentation en ligne
- Chat support intégré
- Email support
- FAQ multilingue

### Maintenance
- Mises à jour sécurité mensuelles
- Nouvelles fonctionnalités trimestrielles
- Support technique 24/7

---

**EZWatiqa** - Simplifier la vie universitaire au Maroc 🇲🇦
