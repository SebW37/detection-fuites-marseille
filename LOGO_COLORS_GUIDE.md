# Guide d'utilisation du système de couleurs - A LA RECHERCHE DE LA FUITE

## 🎨 Palette de couleurs basée sur le logo

Ce système de couleurs a été créé à partir des couleurs principales du logo de l'entreprise pour assurer une identité visuelle cohérente sur tout le site.

### Variables CSS principales

```css
--logo-dark-blue: #0d1b2a      /* Bleu foncé - fond du cercle */
--logo-blue: #1a3a5c           /* Bleu moyen - cercles concentriques */
--logo-turquoise: #00d4ff      /* Turquoise - goutte d'eau principale */
--logo-cyan: #40e0d0           /* Cyan - base de la goutte */
--logo-light-cyan: #00e5ff     /* Cyan lumineux - texte et accents */
--logo-accent: #0096c7         /* Bleu accent - transitions */
--logo-dark-turquoise: #00b4d8 /* Turquoise foncé - nuances */
```

## 📦 Installation

### Option 1 : Inclure dans votre HTML

Ajoutez cette ligne dans le `<head>` de toutes vos pages :

```html
<link rel="stylesheet" href="logo-colors.css">
```

### Option 2 : Intégrer dans votre fichier CSS principal

Copiez-collez le contenu de `logo-colors.css` dans votre fichier CSS principal.

## 🚀 Utilisation

### Classes de couleur de texte

```html
<p class="logo-color-primary">Texte en turquoise principal</p>
<p class="logo-color-secondary">Texte en cyan</p>
<p class="logo-color-accent">Texte en accent bleu</p>
<p class="logo-color-dark">Texte en bleu foncé</p>
```

### Classes de couleur de fond

```html
<div class="logo-bg-primary">Fond turquoise</div>
<div class="logo-bg-gradient">Fond avec dégradé du logo</div>
```

### Boutons stylisés

```html
<button class="btn-logo-primary">Bouton primaire</button>
<button class="btn-logo-secondary">Bouton secondaire</button>
```

### Badges

```html
<span class="badge-logo">Badge standard</span>
<span class="badge-logo-primary">Badge primaire</span>
```

### Cartes

```html
<div class="card-logo">
    Contenu de la carte
</div>
```

### Sections avec dégradé

```html
<section class="section-logo-gradient">
    Section avec dégradé du logo
</section>
```

## 🔄 Surcharges automatiques

Les classes Tailwind suivantes sont automatiquement remplacées par les couleurs du logo :

- `text-blue-600` → Turquoise principal
- `text-blue-700` → Accent bleu
- `bg-blue-600` → Fond turquoise
- `bg-blue-700` → Fond accent bleu
- Et toutes les variantes hover correspondantes

Vous n'avez pas besoin de modifier votre code existant, les couleurs seront automatiquement appliquées !

## 📝 Exemples d'utilisation

### Exemple 1 : Header avec navigation

```html
<header class="logo-bg-gradient text-white">
    <nav>
        <a href="#" class="link-logo">Accueil</a>
        <a href="#" class="link-logo">Services</a>
    </nav>
</header>
```

### Exemple 2 : Section de services

```html
<section class="section-logo-light">
    <div class="card-logo">
        <h3 class="logo-color-primary">Titre</h3>
        <p>Contenu...</p>
        <button class="btn-logo-primary">En savoir plus</button>
    </div>
</section>
```

### Exemple 3 : Formulaire

```html
<form>
    <input type="text" class="input-logo" placeholder="Nom">
    <button type="submit" class="btn-logo-primary">Envoyer</button>
</form>
```

## 🎯 Bonnes pratiques

1. **Utilisez les classes personnalisées** (`logo-color-*`, `logo-bg-*`) pour un contrôle total
2. **Les classes Tailwind** seront automatiquement adaptées
3. **Pour les nouveaux éléments**, préférez les classes avec préfixe `logo-` pour la cohérence
4. **Testez sur toutes les pages** pour assurer une uniformité visuelle

## 🔧 Personnalisation

Si vous souhaitez ajuster les couleurs, modifiez les variables CSS dans `:root` au début du fichier `logo-colors.css`.

---

**Créé pour : A LA RECHERCHE DE LA FUITE**
*Système de couleurs basé sur le logo de l'entreprise*

