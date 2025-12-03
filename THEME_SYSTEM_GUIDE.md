# Guide d'utilisation du système de thème Clair/Sombre

## 🌓 Système de thème Clair/Sombre

Ce système permet de basculer entre un thème clair et un thème sombre sur toutes les pages du site, avec sauvegarde de la préférence de l'utilisateur.

## 📦 Fichiers créés

1. **`theme-system.css`** - Styles CSS pour les thèmes clair et sombre
2. **`theme-toggle.js`** - JavaScript pour basculer entre les thèmes
3. **Bouton toggle** - Intégré dans le header (desktop et mobile)

## 🚀 Installation sur une nouvelle page

### Étape 1 : Ajouter les fichiers CSS et JS

Ajoutez ces lignes dans le `<head>` de votre page HTML :

```html
<link rel="stylesheet" href="theme-system.css">
```

Ajoutez cette ligne juste avant la fermeture de `</body>` :

```html
<script src="theme-toggle.js"></script>
```

### Étape 2 : Ajouter le bouton toggle dans le header

**Pour le header desktop :**

```html
<button id="theme-toggle" class="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded-full transition flex items-center justify-center" title="Basculer le thème">
    <i class="fas fa-moon" id="theme-icon"></i>
</button>
```

**Pour le menu mobile :**

```html
<button id="theme-toggle-mobile" class="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded-full text-center transition mt-2 flex items-center justify-center mx-auto" title="Basculer le thème">
    <i class="fas fa-moon mr-2" id="theme-icon-mobile"></i>
    <span>Thème</span>
</button>
```

### Étape 3 : Initialiser le body avec data-theme

Ajoutez l'attribut `data-theme` au body :

```html
<body data-theme="light">
```

Le JavaScript initialisera automatiquement le thème sauvegardé.

## 🎨 Variables CSS disponibles

### Mode Clair
```css
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;
--bg-tertiary: #f3f4f6;
--text-primary: #111827;
--text-secondary: #6b7280;
--card-bg: #ffffff;
```

### Mode Sombre
```css
--bg-primary: #0d1b2a;
--bg-secondary: #1a3a5c;
--bg-tertiary: #0f172a;
--text-primary: #f9fafb;
--text-secondary: #d1d5db;
--card-bg: #1a3a5c;
```

## 📝 Utilisation dans votre CSS

Vous pouvez utiliser ces variables dans vos propres styles :

```css
.mon-element {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}
```

## 🔧 Fonctionnalités

- ✅ Bascule automatique entre thème clair et sombre
- ✅ Sauvegarde de la préférence dans localStorage
- ✅ Icônes qui changent (🌙 pour clair, ☀️ pour sombre)
- ✅ Transition douce entre les thèmes
- ✅ Compatible desktop et mobile
- ✅ Utilise les couleurs du logo pour le mode sombre

## 🎯 Exemple complet d'intégration

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma Page</title>
    <link rel="stylesheet" href="theme-system.css">
    <link rel="stylesheet" href="logo-colors.css">
</head>
<body data-theme="light">
    <header>
        <!-- Votre navigation -->
        <button id="theme-toggle">
            <i class="fas fa-moon" id="theme-icon"></i>
        </button>
    </header>
    
    <!-- Votre contenu -->
    
    <script src="theme-toggle.js"></script>
</body>
</html>
```

## 🎨 Personnalisation

### Modifier les couleurs du mode sombre

Éditez les variables dans `theme-system.css` :

```css
[data-theme="dark"] {
    --bg-primary: #votre-couleur;
    --text-primary: #votre-couleur;
    /* ... */
}
```

### Ajouter des styles personnalisés pour le mode sombre

```css
[data-theme="dark"] .ma-classe {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}
```

## 📱 Position du bouton

Le bouton est positionné :
- **Desktop** : En haut à droite dans le header, juste avant le bouton "Contact"
- **Mobile** : Dans le menu mobile, juste avant le bouton "Contact"

## 💾 Sauvegarde

La préférence de thème est sauvegardée dans le `localStorage` du navigateur avec la clé `theme`. Elle persiste entre les sessions.

## 🔄 API JavaScript

Le système expose également des fonctions globales :

```javascript
// Basculer le thème manuellement
toggleTheme();

// Obtenir le thème actuel
const currentTheme = getCurrentTheme(); // 'light' ou 'dark'

// Écouter les changements de thème
document.addEventListener('themeChanged', (event) => {
    console.log('Nouveau thème:', event.detail.theme);
});
```

---

**Créé pour : A LA RECHERCHE DE LA FUITE**
*Système de thème basé sur les couleurs du logo*

