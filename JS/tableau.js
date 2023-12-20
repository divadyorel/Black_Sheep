
// Récupère les éléments HTML avec les classes correspondantes
const dates = document.getElementsByClassName('Dates');  // cases dates
const debuts = document.getElementsByClassName('Debut'); // cases début du concert
const dateRaw = document.getElementsByClassName('date'); // lignes du tableau
let currentDate = new Date(); // Crée un objet Date pour la date actuelle
let picModal;

let currentIndex = 0;  // Index de l'image actuelle dans le diaporama
let totalImages = 12;   // Nombre total d'images dans le diaporama

// Boucle pour traiter chaque élément de la classe 'Dates'
for (let i = 0; i < dates.length; i++) {
    
    // Récupère le texte de la case 'Dates' et le nettoie des espaces autour
    const dateText = dates[i].textContent.trim();
    
    // Sépare le jour, le mois et l'année en utilisant '/' comme séparateur et les convertit en nombres
    const [day, month, year] = dateText.split('/').map(Number);
    
    // Crée un objet Date à partir des composants jour, mois, année
    const dateValue = new Date(year, month - 1, day);


    
    // Comparez la date actuelle avec la date de la case 'Dates' correspondante
    if (dateValue.getDate() < currentDate.getDate()) {
        // Style pour les dates passées
        dateRaw[i].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        dateRaw[i].style.cursor = 'pointer';
        dateRaw[i].setAttribute('title', 'Cliquez pour voir les photos du concert');
        dateRaw[i].style.opacity ='0.6';
        dates[i].style.color = 'black';
        debuts[i].style.color = 'black';

        // Styles pour les liens GPS
        const gpsCells = dateRaw[i].querySelectorAll('.gps');
        gpsCells.forEach(gpsCell => {
            gpsCell.style.color = 'black';
        });

        // Cloner la ligne existante
        const clonedRow = dateRaw[i].cloneNode(true);

        // Supprimer la ligne existante
        dateRaw[i].parentNode.removeChild(dateRaw[i]);
 
        // Ajouter la ligne clonée à la fin du tableau
        document.querySelector('tbody').appendChild(clonedRow);

    } 
}

// Boucle pour ajouter des écouteurs d'événements à chaque ligne du tableau
for (let i = 0; i < dateRaw.length; i++) {
    dateRaw[i].addEventListener('click', function() {
        // Vérifie si la ligne cliquée est celle avec l'ID "dateRow1"
        if (this.id === 'dateRow1') {
            // Récupère la date de la case 'Dates' de la ligne cliquée
            const dateText = dates[i].textContent.trim();
            const [day, month, year] = dateText.split('/').map(Number);
            const clickedDateValue = new Date(year, month - 1, day);
            
            // Vérifie si la date du concert est passée
            if (clickedDateValue.getDate() < currentDate.getDate()) {

                // Crée l'élément du modal
                picModal = document.createElement('div');
                picModal.id = 'pic-modal';
                document.body.appendChild(picModal);

                // Ajoute le bouton de fermeture au modal
                const closeButton = document.createElement('img');
                closeButton.src = 'Medias/Logos/close.png';
                closeButton.id = 'close-button';
                picModal.appendChild(closeButton); 
                
                // Ajoute un gestionnaire d'événements pour fermer le modal
                closeButton.addEventListener ('click', function() {                
                    picModal.style.display = 'none';                
                });

                // Ajoute une div pour contenir le diaporama
                const slideshowContainer = document.createElement('div');
                slideshowContainer.id = 'slideshow-container';
                picModal.appendChild(slideshowContainer);

                // Ajoute les images du diaporama
                for (let j = 1; j <= totalImages; j++) {
                    const img = document.createElement('img');
                    img.src = `Medias/Photos/Photos_16-12-2023/${j}.jpg`;
                    img.className = 'slideshow-image';
                    slideshowContainer.appendChild(img);
                }

                // Ajoute des boutons "Précédent" et "Suivant" pour naviguer dans le diaporama
                const prevButton = document.createElement('a');
                prevButton.className = 'prev-next-slideshow';
                prevButton.id = 'prev-button';
                prevButton.innerHTML = '&#10095;';
                slideshowContainer.appendChild(prevButton);

                const nextButton = document.createElement('a');
                nextButton.className = 'prev-next-slideshow';
                nextButton.id = 'next-button';
                nextButton.innerHTML = '&#10094;';
                slideshowContainer.appendChild(nextButton);

                // Fonction pour passer à l'image suivante ou précédente
                function showSlides(n) {
                    currentIndex += n;
                    if (currentIndex >= totalImages) {
                        currentIndex = 0;
                    } else if (currentIndex < 0) {
                        currentIndex = totalImages - 1;
                    }
                    const slides = document.getElementsByClassName('slideshow-image');
                    for (let k = 0; k < slides.length; k++) {
                        slides[k].style.display = 'none';
                    }
                    slides[currentIndex].style.display = 'block';
                }

                // Écouteurs d'événements pour les boutons "Précédent" et "Suivant"
                prevButton.addEventListener('click', function() {
                    showSlides(-1);
                });

                nextButton.addEventListener('click', function() {
                    showSlides(1);
                }); 
            }           
        }       
    });
};
