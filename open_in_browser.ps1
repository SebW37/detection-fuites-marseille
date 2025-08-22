# Script PowerShell pour ouvrir le plan SEO dans le navigateur
# et générer un PDF

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Plan d'Optimisation SEO - PDF" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si le fichier HTML existe
if (Test-Path "seo-optimization-plan.html") {
    Write-Host "✓ Fichier HTML trouvé" -ForegroundColor Green
    Write-Host ""
    Write-Host "Instructions pour générer le PDF:" -ForegroundColor Yellow
    Write-Host "1. Appuyez sur Ctrl+P (ou Cmd+P sur Mac)" -ForegroundColor White
    Write-Host "2. Choisissez 'Enregistrer en PDF'" -ForegroundColor White
    Write-Host "3. Enregistrez le fichier" -ForegroundColor White
    Write-Host ""
    
    # Demander confirmation
    $response = Read-Host "Appuyez sur Entrée pour ouvrir dans le navigateur"
    
    # Ouvrir le fichier dans le navigateur par défaut
    try {
        Start-Process "seo-optimization-plan.html"
        Write-Host "✓ Fichier ouvert dans votre navigateur!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Vous pouvez maintenant générer le PDF." -ForegroundColor Yellow
    }
    catch {
        Write-Host "❌ Erreur lors de l'ouverture du fichier" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
}
else {
    Write-Host "❌ Fichier seo-optimization-plan.html non trouvé" -ForegroundColor Red
    Write-Host "Assurez-vous que le fichier est dans le même dossier que ce script." -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Appuyez sur Entrée pour fermer"
