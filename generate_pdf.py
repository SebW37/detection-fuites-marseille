#!/usr/bin/env python3
"""
Script pour convertir le plan d'optimisation SEO en PDF
Utilise weasyprint pour la conversion HTML vers PDF
"""

import os
import sys
from pathlib import Path

def install_weasyprint():
    """Installer weasyprint si nécessaire"""
    try:
        import weasyprint
        print("✓ WeasyPrint est déjà installé")
        return True
    except ImportError:
        print("Installation de WeasyPrint...")
        try:
            import subprocess
            subprocess.check_call([sys.executable, "-m", "pip", "install", "weasyprint"])
            print("✓ WeasyPrint installé avec succès")
            return True
        except Exception as e:
            print(f"❌ Erreur lors de l'installation de WeasyPrint: {e}")
            print("Veuillez installer manuellement: pip install weasyprint")
            return False

def generate_pdf():
    """Générer le PDF à partir du fichier HTML"""
    try:
        from weasyprint import HTML, CSS
        from weasyprint.text.fonts import FontConfiguration
        
        # Vérifier que le fichier HTML existe
        html_file = "seo-optimization-plan.html"
        if not os.path.exists(html_file):
            print(f"❌ Fichier {html_file} non trouvé")
            return False
        
        # Configuration des polices
        font_config = FontConfiguration()
        
        # Lire le fichier HTML
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Créer l'objet HTML
        html_doc = HTML(string=html_content)
        
        # Nom du fichier PDF de sortie
        pdf_file = "plan-optimisation-seo.pdf"
        
        print(f"Génération du PDF: {pdf_file}")
        
        # Générer le PDF
        html_doc.write_pdf(
            pdf_file,
            font_config=font_config
        )
        
        print(f"✓ PDF généré avec succès: {pdf_file}")
        
        # Afficher la taille du fichier
        file_size = os.path.getsize(pdf_file)
        print(f"Taille du fichier: {file_size / 1024:.1f} KB")
        
        return True
        
    except Exception as e:
        print(f"❌ Erreur lors de la génération du PDF: {e}")
        return False

def main():
    """Fonction principale"""
    print("=== Générateur de PDF - Plan d'Optimisation SEO ===")
    print()
    
    # Installer weasyprint si nécessaire
    if not install_weasyprint():
        return
    
    print()
    
    # Générer le PDF
    if generate_pdf():
        print()
        print("🎉 Conversion terminée avec succès!")
        print("Vous pouvez maintenant ouvrir le fichier 'plan-optimisation-seo.pdf'")
    else:
        print()
        print("❌ Échec de la conversion")

if __name__ == "__main__":
    main()
