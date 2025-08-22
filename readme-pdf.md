# Génération du PDF - Plan d'Optimisation SEO

Ce dossier contient les fichiers nécessaires pour générer un PDF du plan d'optimisation SEO.

## 📁 Fichiers inclus

- `seo-optimization-plan.html` - Le fichier HTML avec le plan d'optimisation SEO
- `generate_pdf.py` - Script Python pour convertir HTML en PDF
- `README-PDF.md` - Ce fichier d'instructions

## 🚀 Méthodes pour générer le PDF

### Méthode 1 : Script Python (Recommandée)

1. **Ouvrir un terminal** dans ce dossier
2. **Exécuter le script Python** :
   ```bash
   python generate_pdf.py
   ```
3. Le script installera automatiquement WeasyPrint si nécessaire
4. Le PDF sera généré sous le nom `plan-optimisation-seo.pdf`

### Méthode 2 : Impression depuis le navigateur

1. **Ouvrir le fichier** `seo-optimization-plan.html` dans votre navigateur
2. **Appuyer sur Ctrl+P** (ou Cmd+P sur Mac)
3. **Choisir "Enregistrer en PDF"** dans les options d'impression
4. **Enregistrer** le fichier

### Méthode 3 : Outils en ligne

Vous pouvez utiliser des services en ligne comme :
- **Puppeteer** (si vous avez Node.js)
- **wkhtmltopdf** (outil en ligne de commande)
- **Services web** : HTML to PDF converters

## 📋 Prérequis

### Pour la méthode Python :
- Python 3.6 ou supérieur
- WeasyPrint (installé automatiquement par le script)

### Pour la méthode navigateur :
- Aucun prérequis spécial

## 🎨 Personnalisation

Le fichier HTML utilise :
- **Police** : Inter (Google Fonts)
- **Couleurs** : Palette bleue professionnelle
- **Mise en page** : Optimisée pour l'impression
- **Responsive** : S'adapte aux différentes tailles d'écran

## 📄 Contenu du PDF

Le PDF contient :
- **4 phases d'optimisation SEO** détaillées
- **Priorités et délais** pour chaque phase
- **Tâches spécifiques** avec des cases à cocher
- **Recommandations immédiates** pour commencer
- **Design professionnel** et lisible

## 🔧 Dépannage

### Erreur WeasyPrint
Si vous rencontrez des erreurs avec WeasyPrint :
```bash
pip install --upgrade weasyprint
```

### Problèmes de polices
Le fichier utilise Google Fonts. Si les polices ne se chargent pas :
- Vérifiez votre connexion internet
- Ou téléchargez les polices localement

### Problèmes d'encodage
Le fichier est encodé en UTF-8. Si vous voyez des caractères bizarres :
- Ouvrez le fichier dans un éditeur qui supporte UTF-8
- Vérifiez que votre système supporte les caractères français

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que tous les fichiers sont présents
2. Assurez-vous d'avoir les permissions d'écriture dans le dossier
3. Essayez la méthode navigateur si le script Python ne fonctionne pas

---

**Note** : Le PDF généré sera optimisé pour l'impression et la lecture à l'écran, avec une mise en page professionnelle adaptée au contenu SEO.
