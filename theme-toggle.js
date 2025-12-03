// ============================================
// SYSTÈME DE BASCULE DE THÈME CLAIR/SOMBRE
// A LA RECHERCHE DE LA FUITE
// ============================================

(function() {
    'use strict';
    
    // Sélectionner les éléments du toggle (desktop et mobile)
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const html = document.documentElement;
    
    // Récupérer le thème sauvegardé ou utiliser le thème clair par défaut
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    
    // Fonction pour mettre à jour les icônes
    function updateIcons(theme) {
        if (theme === 'dark') {
            if (themeIcon) {
                themeIcon.className = 'fas fa-sun';
            }
            if (themeIconMobile) {
                themeIconMobile.className = 'fas fa-sun mr-2';
            }
        } else {
            if (themeIcon) {
                themeIcon.className = 'fas fa-moon';
            }
            if (themeIconMobile) {
                themeIconMobile.className = 'fas fa-moon mr-2';
            }
        }
    }
    
    // Initialiser les icônes au chargement
    updateIcons(currentTheme);
    
    // Fonction pour basculer le thème
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
        
        // Optionnel : déclencher un événement personnalisé
        const event = new CustomEvent('themeChanged', { 
            detail: { theme: newTheme } 
        });
        document.dispatchEvent(event);
    }
    
    // Ajouter les event listeners
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Exposer la fonction toggleTheme globalement si nécessaire
    window.toggleTheme = toggleTheme;
    window.getCurrentTheme = function() {
        return html.getAttribute('data-theme');
    };
})();

