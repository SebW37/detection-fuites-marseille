# Guide de Renommage du Dossier et Clonage GitHub

## 🎯 Objectif
Renommer le dossier "A LA RECHERCHE DE FUITE" en "detection-fuites-marseille" pour faciliter le clonage GitHub.

## 🚨 Problème Actuel
Le dossier ne peut pas être renommé car il est utilisé par un autre processus (GitHub Desktop, terminal, etc.).

## ✅ Solution : Renommage Manuel

### 1. Fermer Toutes les Applications
- **Fermer GitHub Desktop** complètement
- **Fermer tous les terminaux** qui utilisent ce dossier
- **Fermer l'explorateur de fichiers** s'il est ouvert dans ce dossier
- **Fermer VS Code/Cursor** s'il est ouvert sur ce projet

### 2. Renommer le Dossier
1. Ouvrir l'**Explorateur de fichiers Windows**
2. Naviguer vers : `C:\Users\seb13\OneDrive\Documents\Boulot Seb\`
3. **Clic droit** sur le dossier "A LA RECHERCHE DE FUITE"
4. Sélectionner **"Renommer"**
5. Taper le nouveau nom : `detection-fuites-marseille`
6. Appuyer sur **Entrée**

### 3. Vérifier le Renommage
- Le dossier doit maintenant s'appeler `detection-fuites-marseille`
- Le chemin complet sera : `C:\Users\seb13\OneDrive\Documents\Boulot Seb\detection-fuites-marseille\`

## 🔄 Clonage GitHub avec le Bon Nom

### Option 1 : GitHub Desktop (Recommandé)
1. **Ouvrir GitHub Desktop**
2. **File → Clone Repository**
3. Choisir votre repository "A LA RECHERCHE DE FUITE"
4. **Local path** : `C:\Users\seb13\OneDrive\Documents\Boulot Seb\detection-fuites-marseille`
5. Cliquer **"Clone"**

### Option 2 : Clonage Direct
Si vous avez Git installé :
```bash
cd "C:\Users\seb13\OneDrive\Documents\Boulot Seb"
git clone https://github.com/votre-username/votre-repo.git detection-fuites-marseille
```

## 📋 Vérification Post-Clonage

Après le clonage, vérifiez que :
- ✅ Le dossier s'appelle `detection-fuites-marseille`
- ✅ Tous les fichiers sont présents
- ✅ GitHub Desktop reconnaît le repository
- ✅ Les modifications locales sont visibles dans "Changes"

## 🆘 Si le Renommage Échoue

### Alternative : Copier-Coller
1. **Copier** tout le contenu du dossier "A LA RECHERCHE DE FUITE"
2. **Créer** un nouveau dossier nommé "detection-fuites-marseille"
3. **Coller** tout le contenu dans le nouveau dossier
4. **Supprimer** l'ancien dossier une fois la copie vérifiée

### Alternative : Clonage Direct
Si le renommage pose problème, clonez directement dans un nouveau dossier :
1. Utilisez GitHub Desktop pour cloner dans `detection-fuites-marseille`
2. Copiez vos modifications locales vers le nouveau dossier cloné

## 📞 Support

**Après le renommage réussi :**
- Votre dossier aura le bon nom pour le clonage
- GitHub Desktop pourra fonctionner correctement
- Le déploiement Netlify sera plus simple

**Besoin d'aide ?** Décrivez l'étape où vous bloquez.


