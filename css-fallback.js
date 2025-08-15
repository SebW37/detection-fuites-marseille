// 🚨 SCRIPT DE FALLBACK CSS - DÉTECTION TAILWIND CDN

(function() {
    'use strict';
    
    console.log('🚨 CSS Fallback Script - Démarrage...');
    
    // Configuration
    const TAILWIND_CDN_URL = 'https://cdn.tailwindcss.com';
    const LOCAL_CSS_URL = '/styles.css';
    const FALLBACK_TIMEOUT = 3000; // 3 secondes
    
    // Éléments à surveiller
    let tailwindLoaded = false;
    let fallbackApplied = false;
    
    // Fonction pour appliquer le CSS local
    function applyLocalCSS() {
        if (fallbackApplied) return;
        
        console.log('🔄 Application du CSS local de fallback...');
        
        // Créer le lien CSS local
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = LOCAL_CSS_URL;
        link.id = 'css-fallback';
        
        // Ajouter au head
        document.head.appendChild(link);
        
        // Marquer comme appliqué
        fallbackApplied = true;
        
        console.log('✅ CSS local appliqué avec succès');
        
        // Ajouter une classe au body pour indiquer le fallback
        document.body.classList.add('css-fallback-active');
        
        // Notification visuelle
        showFallbackNotification();
    }
    
    // Fonction pour vérifier si Tailwind est chargé
    function checkTailwindLoaded() {
        // Vérifier si Tailwind est disponible
        if (window.tailwind && window.tailwind.config) {
            console.log('✅ Tailwind CDN détecté et fonctionnel');
            tailwindLoaded = true;
            return true;
        }
        
        // Vérifier si les classes Tailwind sont appliquées
        const testElement = document.createElement('div');
        testElement.className = 'bg-blue-500 text-white p-4 rounded';
        testElement.style.position = 'absolute';
        testElement.style.left = '-9999px';
        testElement.textContent = 'Test Tailwind';
        
        document.body.appendChild(testElement);
        
        // Vérifier si les styles sont appliqués
        const computedStyle = window.getComputedStyle(testElement);
        const hasTailwindStyles = computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' || 
                                 computedStyle.color !== 'rgba(0, 0, 0, 0)' ||
                                 computedStyle.padding !== '0px';
        
        document.body.removeChild(testElement);
        
        if (hasTailwindStyles) {
            console.log('✅ Tailwind CDN détecté via styles appliqués');
            tailwindLoaded = true;
            return true;
        }
        
        console.log('❌ Tailwind CDN non détecté');
        return false;
    }
    
    // Fonction pour afficher une notification de fallback
    function showFallbackNotification() {
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #f59e0b;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 9999;
                max-width: 300px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <strong>🚨 CSS Fallback Activé</strong><br>
                <small>Tailwind CDN non disponible - CSS local utilisé</small>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Supprimer après 5 secondes
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }
    
    // Fonction principale de détection
    function detectAndFallback() {
        console.log('🔍 Vérification de Tailwind CDN...');
        
        // Vérifier immédiatement
        if (checkTailwindLoaded()) {
            console.log('✅ Tailwind CDN fonctionne - Aucun fallback nécessaire');
            return;
        }
        
        // Attendre un peu plus puis revérifier
        setTimeout(() => {
            if (!tailwindLoaded && !fallbackApplied) {
                console.log('⏰ Timeout atteint - Application du CSS local');
                applyLocalCSS();
            }
        }, FALLBACK_TIMEOUT);
        
        // Vérification continue
        const checkInterval = setInterval(() => {
            if (tailwindLoaded || fallbackApplied) {
                clearInterval(checkInterval);
                return;
            }
            
            if (checkTailwindLoaded()) {
                clearInterval(checkInterval);
                return;
            }
            
            // Si après 10 secondes Tailwind n'est toujours pas chargé
            if (Date.now() - startTime > 10000) {
                clearInterval(checkInterval);
                console.log('⏰ Timeout final - Application du CSS local');
                applyLocalCSS();
            }
        }, 1000);
    }
    
    // Démarrer la détection quand le DOM est prêt
    const startTime = Date.now();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectAndFallback);
    } else {
        detectAndFallback();
    }
    
    // Fallback d'urgence si rien ne fonctionne
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!tailwindLoaded && !fallbackApplied) {
                console.log('🚨 Fallback d\'urgence - Application du CSS local');
                applyLocalCSS();
            }
        }, 5000);
    });
    
    // Exposer les fonctions pour debug
    window.cssFallback = {
        checkTailwind: checkTailwindLoaded,
        applyLocal: applyLocalCSS,
        isActive: () => fallbackApplied,
        isTailwindLoaded: () => tailwindLoaded
    };
    
    console.log('🚨 CSS Fallback Script - Initialisation terminée');
    
})();
