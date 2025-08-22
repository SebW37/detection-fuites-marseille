# 🚀 Guide de Déploiement Netlify - Méthode Simple

## Option 1: Déploiement Direct (Recommandé)

### Étape 1: Préparation
1. Assurez-vous que tous vos fichiers sont dans le dossier du projet
2. Vérifiez que vous avez ces fichiers principaux :
   - `index.html`
   - `marseille.html`
   - `aix-en-provence.html`
   - `toulon.html`
   - `sitemap.xml`
   - `robots.txt`
   - `netlify.toml`
   - `404.html`

### Étape 2: Déploiement
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte ou connectez-vous
3. Cliquez sur "New site from Git" ou "Deploy manually"
4. **Glissez-déposez votre dossier entier** dans la zone de déploiement
5. Attendez quelques secondes - votre site sera en ligne !

### Étape 3: Configuration
1. Netlify vous donnera une URL (ex: `https://random-name.netlify.app`)
2. Vous pouvez personnaliser cette URL dans les paramètres
3. Ajoutez votre domaine personnalisé si vous en avez un

## Option 2: Avec Git (Si vous voulez l'installer)

### Installation de Git
1. Téléchargez Git depuis [git-scm.com](https://git-scm.com)
2. Installez avec les options par défaut
3. Redémarrez PowerShell

### Commandes Git
```powershell
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit"

# Créer un repository GitHub
# Puis connecter à Netlify
```

## Option 3: GitHub Desktop (Plus Simple)

1. Téléchargez [GitHub Desktop](https://desktop.github.com)
2. Créez un repository
3. Poussez vers GitHub
4. Connectez GitHub à Netlify

## ✅ Vérifications Post-Déploiement

1. **Testez votre site** sur l'URL Netlify
2. **Vérifiez les redirections** (404.html, etc.)
3. **Testez le formulaire de contact**
4. **Vérifiez les liens "lire l'article"**
5. **Configurez Google Analytics** avec la nouvelle URL

## 🔧 Configuration SEO Post-Déploiement

1. **Google Search Console**
   - Ajoutez votre propriété
   - Vérifiez la propriété
   - Soumettez votre sitemap.xml

2. **Google Analytics**
   - Mettez à jour l'URL dans GA4
   - Vérifiez que le tracking fonctionne

3. **Google My Business**
   - Mettez à jour le site web
   - Ajoutez des photos du site

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que tous les fichiers sont présents
2. Assurez-vous que `index.html` est à la racine
3. Vérifiez que `netlify.toml` est correct
4. Contactez le support Netlify si nécessaire

---
**Recommandation : Utilisez l'Option 1 (Déploiement Direct) - C'est le plus simple et rapide !**
