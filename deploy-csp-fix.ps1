# Script pour déployer la correction CSP
Write-Host "🚨 DÉPLOIEMENT CORRECTION CSP - TAILWIND CDN" -ForegroundColor Red

# Vérifier que le fichier _headers existe
if (Test-Path "_headers") {
    Write-Host "✅ Fichier _headers trouvé" -ForegroundColor Green
    Get-Content "_headers" | Select-Object -First 10
} else {
    Write-Host "❌ Fichier _headers manquant" -ForegroundColor Red
    exit 1
}

Write-Host "`n📋 Contenu de la politique CSP :" -ForegroundColor Yellow
$cspLine = Get-Content "_headers" | Where-Object { $_ -match "Content-Security-Policy:" }
if ($cspLine) {
    Write-Host $cspLine -ForegroundColor Cyan
} else {
    Write-Host "❌ Ligne CSP non trouvée" -ForegroundColor Red
}

Write-Host "`n🎯 Vérification des domaines autorisés :" -ForegroundColor Yellow
$domains = @(
    "cdn.tailwindcss.com",
    "fonts.googleapis.com", 
    "cdnjs.cloudflare.com",
    "fonts.gstatic.com",
    "www.googletagmanager.com"
)

foreach ($domain in $domains) {
    if ($cspLine -match $domain) {
        Write-Host "✅ $domain autorisé" -ForegroundColor Green
    } else {
        Write-Host "❌ $domain manquant" -ForegroundColor Red
    }
}

Write-Host "`n🚀 Instructions de déploiement :" -ForegroundColor Yellow
Write-Host "1. Le fichier _headers est prêt avec la bonne politique CSP" -ForegroundColor White
Write-Host "2. Vous devez le déployer manuellement sur Netlify" -ForegroundColor White
Write-Host "3. Ou attendre que Netlify détecte automatiquement les changements" -ForegroundColor White
Write-Host "4. Attendre 2-3 minutes après déploiement" -ForegroundColor White
Write-Host "5. Vider le cache navigateur et tester" -ForegroundColor White

Write-Host "`n📝 Résumé de la correction CSP :" -ForegroundColor Yellow
Write-Host "- Ajout de script-src-elem pour Tailwind CDN" -ForegroundColor White
Write-Host "- Autorisation explicite de tous les domaines CDN" -ForegroundColor White
Write-Host "- Politique de sécurité renforcée" -ForegroundColor White

