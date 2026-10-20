document.addEventListener("DOMContentLoaded", () => {
    // Gestion du menu mobile (Burger)
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
            menuBtn.setAttribute("aria-expanded", !expanded);
        });

        // Fermer le menu mobile quand on clique sur un lien
        const mobileLinks = document.querySelectorAll(".mobile-link");
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Gestion du carrousel de destinations (4 par 4)
    const cards = document.querySelectorAll(".destination-card");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    
    if (cards.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;
        const itemsPerPage = 4;

        function showCards() {
            cards.forEach((card, index) => {
                if (index >= currentIndex && index < currentIndex + itemsPerPage) {
                    card.style.display = "block"; // Affiche la carte
                } else {
                    card.style.display = "none";  // Masque la carte
                }
            });
        }

        nextBtn.addEventListener("click", () => {
            if (currentIndex + itemsPerPage < cards.length) {
                currentIndex += itemsPerPage;
            } else {
                currentIndex = 0; // Retour au début si on arrive à la fin
            }
            showCards();
        });

        prevBtn.addEventListener("click", () => {
            if (currentIndex - itemsPerPage >= 0) {
                currentIndex -= itemsPerPage;
            } else {
                // Va directement à la dernière page complète
                currentIndex = Math.floor((cards.length - 1) / itemsPerPage) * itemsPerPage;
            }
            showCards();
        });

        // Initialisation de l'affichage au chargement de la page
        showCards();
    }
});