# Test de connectivité vers les CDNs
Write-Host "🔍 Test de connectivité vers les CDNs..." -ForegroundColor Cyan

$cdns = @(
    "https://cdn.tailwindcss.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://cdnjs.cloudflare.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com"
)

foreach ($cdn in $cdns) {
    try {
        $response = Invoke-WebRequest -Uri $cdn -Method Head -TimeoutSec 10
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ $cdn - OK ($($response.StatusCode))" -ForegroundColor Green
        } else {
            Write-Host "⚠️  $cdn - Status: $($response.StatusCode)" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "❌ $cdn - Erreur: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n📋 Résumé des tests de connectivité CDN" -ForegroundColor Cyan
Write-Host "Si tous les CDNs sont accessibles, le problème vient de la CSP." -ForegroundColor White
Write-Host "Notre fichier _headers devrait résoudre le problème." -ForegroundColor White
