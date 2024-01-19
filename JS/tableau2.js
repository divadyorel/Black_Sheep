// Récupère l'élément conteneur du tableau dans le document
const containTable = document.getElementById('tableaux-container');

// Création les éléments HTML nécessaires pour construire le tableau

// Tableau et son identifiant
const table = document.createElement('table');
table.id = ('tableau');

// Thead
const thead = document.createElement('thead');
const trTitle = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const divTh1 = document.createElement('div');
divTh1.id = ('div-title1');
const divTh2 = document.createElement('div');
divTh2.id = ('div-title2');
const title1 = document.createElement('h2');
const title2 = document.createElement('h2');

// Tbody
const tbody = document.createElement('tbody');
const trbody = document.createElement('tr');




// Ajoute le tableau au conteneur
containTable.appendChild(table);

// Ajoute le thead au tableau
table.appendChild(thead);

// Ajoute la ligne tr au thead
thead.appendChild(trTitle);

// Ajoute les 2 th au tr
trTitle.appendChild(th1);
trTitle.appendChild(th2);

// Ajoute les div dans les th
th1.appendChild(divTh1);
th1.colSpan = 2;
th2.appendChild(divTh2);
th2.colSpan = 4;

// Ajoute les titres dans les div du thead et définit les nombre de sous-divisions dessous
divTh1.appendChild(title1);
divTh2.appendChild(title2);

// Contenu des titres du thead
title1.innerHTML = '<u>PROCHAINEMENT EN CONCERT :</u>';
title2.innerHTML = '<u>DATES PASS&#201ES :</u>';

// Ajoute le tbody au tableau
table.appendChild(tbody);

// Ajoute des 2 th au tbody
tbody.appendChild(trbody);

// Ajoute les titres des colonnes au tableau
const columnTitle = ['Dates', 'Lieux', 'Adresse', 'Localisation', 'Début'];

columnTitle.forEach(title => {
    // Création d'une nouvelle cellule
    const td = document.createElement('td');

    // Attribution du texte du titre à la cellule
    td.textContent = title;

    // Ajout de la cellule à la ligne
    trbody.appendChild(td);
    trbody.id = 'titres';

    // Utilisation d'un switch pour personnaliser chaque cellule titre 
    switch (title) {
        case 'Dates':
            td.id = 'Dates';
            break;
        case 'Lieux':
            td.id = 'lieux';
            break;
        case 'Adresse':
            td.id = 'adresse';
            break;
        case 'Localisation':
            td.colSpan = 2;
            td.id = 'loc';
            break;
        case 'Début':
            td.id = 'debut';
            break;
    }
});

//Remplissage de chaque nouvelles dates de concert
const line1Data = [
    '16/12/2023',
    'Au pub "Les brasseurs d\'air"',
    'L\'essert, 17600 CORME-ECLUSE',
    { name: 'MAPS', url: 'https://maps.app.goo.gl/PLWwyQYPRDbD35U3A' },
    { name: 'WAZE', url: 'https://waze.com/ul/hgbp7s95et' },
    '20H'
]

const line2Data = [
    '27/01/2024',
    'salles des fêtes de Chaillevette',
    '21 rue de la mairie 17390 Chaillevette',
    { name: 'MAPS', url: 'https://maps.app.goo.gl/rR1Fk7CWk9mjAXBA8' },
    { name: 'WAZE', url: 'https://ul.waze.com/ul?place=ChIJT_8ZsxVwAUgRYgQs94Rc7lc&ll=45.73131050%2C-1.06886280&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' },
    '20H'
]

const line3Data = [
    '17/07/2024',
    'Au kiosque de ronce-les-bains (La Tremblade)',
    '61 Av. Gabrielle, 17390 La Tremblade',
    { name: 'MAPS', url: 'https://maps.app.goo.gl/EWvscAE3BsbWR6SLA' },
    { name: 'WAZE', url: 'https://www.waze.com/ul/hgbpht3rfv' },
    '20H'
]

const line4Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

const line5Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

const line6Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

const line7Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

const line8Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

const line9Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

const line10Data = [
    '',
    '',
    '',
    { name: 'MAPS', url: '#' },
    { name: 'WAZE', url: '#' },
    ''
]

// Fonction pour créer une ligne à partir des données
function createRow(data, rowId) {
    // Création d'une nouvelle ligne 
    const row = document.createElement('tr');
    row.classList.add('date');
    row.id = rowId;

    // Parcours des données pour créer les cellules de la ligne
    data.forEach((rowData, index) => {
        // Création d'une nouvelle cellule (<td>)
        const cell = document.createElement('td');

        // Vérification si la donnée est un objet avec les propriétés 'name' et 'url'
        if (typeof rowData === 'object' && rowData.hasOwnProperty('name') && rowData.hasOwnProperty('url')) {
            // Création d'un lien (<a>) avec les propriétés de l'objet
            const link = document.createElement('a');
            link.href = rowData.url;
            link.textContent = rowData.name;
            cell.appendChild(link);

            // Ajout des classes spécifiques aux liens
            link.classList.add(`link-${index + 1}`);

            // Ajout l'attribut target="_blank" au lien
            link.setAttribute('target', '_blank');

            // Ajout la classe gps si le lien concerne la localisation
            if (rowData.name === 'MAPS' || rowData.name === 'WAZE') {
                link.classList.add('gps');
                cell.classList.add('GPS'); // Ajout de la classe GPS au td
            }

        } else {
            // Si la donnée n'est pas un objet, ajoute le texte de la donnée à la cellule
            cell.textContent = rowData;

            // Ajout de classes spécifiques en fonction de l'index de la colonne
            switch (index) {
                case 0:
                    cell.classList.add('Dates');
                    break;
                case 1:
                    cell.classList.add('Lieux');
                    break;
                case 2:
                    cell.classList.add('Adresse');
                    break;
                case 5:
                    cell.classList.add('Debut');
                    break;
            }
        }
        // Ajout de la cellule à la ligne
        row.appendChild(cell);
    });

    // Retourne la ligne créée
    return row;
}

// Crée un tableau de tableaux de données
const allLineData = [line1Data, line2Data, line3Data, line4Data, line5Data, line6Data, line7Data, line8Data, line9Data, line10Data];

// Boucle sur les données et crée et ajoute les lignes au tableau
for (let i = 0; i < allLineData.length; i++) {
    const rowData = allLineData[i];

    // Utilisation de la fonction createRow
    const lineRow = createRow(rowData, `dateRow${i + 1}`);
    lineRow.classList.add('date');

    // Ajouter la ligne au tableau
    tbody.appendChild(lineRow);
};



document.addEventListener('DOMContentLoaded', function () {
    // Récupère les éléments HTML avec les classes correspondantes
    const Dates = document.getElementsByClassName('Dates');  // cases dates
    const dateRaw = document.getElementsByClassName('date'); // lignes du tableau
    let currentDate = new Date(); // Crée un objet Date pour la date actuelle
    let picModal;
    let slideshowContainer;
    let currentIndex = 0;  // Index de l'image actuelle dans le diaporama
    let totalImages = 12;   // Nombre total d'images dans le diaporama

    // Crée un conteneur pour les dates passées
    const pastDatesContainer = document.createElement('tbody');

    // Crée un tableau pour stocker les dates passées
    const pastDates = [];

    // Boucle pour traiter chaque élément de la classe 'Dates'
    for (let i = Dates.length - 1; i >= 0; i--) {
        const dateText = Dates[i].textContent.trim();
        const [day, month, year] = dateText.split('/').map(Number);
        let concertDate = new Date(year, month - 1, day);

        // Vérifie si la date du concert est passée
        if (concertDate < currentDate) {
            // Cache les lignes pour les dates passées
            dateRaw[i].style.display = 'none';

            const rows = document.querySelectorAll('#tableau tbody .Lieux, .Adresse, .GPS');
            divTh2.addEventListener('click', function () {
                divTh1.style.width = '70%';
                divTh2.style.width = '130%';
                divTh1.style.backgroundColor = 'rgba(64, 93, 158, 0.3)';
                divTh2.style.backgroundColor = 'rgb(170, 98, 98)';
                rows.forEach(row => {
                    row.style.backgroundColor = 'rgb(189, 155, 155)';
                });
                dateRaw[i].style.display = '';
            });

            divTh1.addEventListener('click', function () {
                divTh1.style.width = '130%';
                divTh2.style.width = '70%';
                divTh1.style.backgroundColor = 'rgb(64, 93, 158)';
                divTh2.style.backgroundColor = 'rgb(202, 136, 136)';
                rows.forEach(row => {
                    row.style.backgroundColor = 'rgb(181, 192, 214)';

                });
                dateRaw[i].style.display = 'none';
            });

            //Change le style pour les dates passées
            dateRaw[i].style.cursor = 'pointer';
            dateRaw[i].setAttribute('title', 'Cliquez pour voir les photos du concert');
        };

        // Vérifie si la date du concert est passée
        if (concertDate > currentDate) {
            // Cache les lignes pour les dates passées
            dateRaw[i].style.display = '';
            const newRow = document.createElement('tr');

            // Crée une cellule pour chaque colonne de la nouvelle ligne
            for (let j = 0; j < columnTitle.length; j++) {
                const cell = document.createElement('td');
                
                // Ajoute la cellule à la nouvelle ligne
                newRow.appendChild(cell);
            }

            // Ajoute la nouvelle ligne au tbody
            tbody.appendChild(newRow);

            const rows = document.querySelectorAll('#tableau tbody .Lieux, .Adresse, .GPS');
            divTh2.addEventListener('click', function () {
                divTh1.style.width = '70%';
                divTh2.style.width = '130%';
                divTh1.style.backgroundColor = 'rgba(64, 93, 158, 0.3)';
                divTh2.style.backgroundColor = 'rgb(170, 98, 98)';
                rows.forEach(row => {
                    row.style.backgroundColor = 'rgb(189, 155, 155)';
                });
                dateRaw[i].style.display = 'none';
            });


            divTh1.addEventListener('click', function () {
                divTh1.style.width = '130%';
                divTh2.style.width = '70%';
                divTh1.style.backgroundColor = 'rgb(64, 93, 158)';
                divTh2.style.backgroundColor = 'rgb(202, 136, 136)';
                rows.forEach(row => {
                    row.style.backgroundColor = 'rgb(181, 192, 214)';
                });
                dateRaw[i].style.display = '';
            });
        };
    };
    // Trie les dates par ordre croissant
    pastDates.sort((a, b) => b.date - a.date);

    // Ajoute les dates triées à la section des dates passées
    for (const pastDate of pastDates) {
        pastDatesContainer.appendChild(pastDate.row.cloneNode(true));
    }

    // Trouve l'emplacement où insérer la section des dates passées
    const futureDatesContainer = document.querySelector('#tableau tbody');
    futureDatesContainer.parentNode.insertBefore(pastDatesContainer, futureDatesContainer.nextSibling);


    // Boucle pour ajouter des écouteurs d'événements à chaque ligne du tableau
    for (let i = 0; i < dateRaw.length; i++) {
        dateRaw[i].addEventListener('click', function () {
            // Réinitialise l'index du diaporama à zéro
            currentIndex = 0;
            // Vérifie si la ligne cliquée est celle avec l'ID "dateRow1"
            if (this.id === 'dateRow1') {
                // Récupère la date de la case 'Dates' de la ligne cliquée
                const dateText = Dates[i].textContent.trim();
                const [day, month, year] = dateText.split('/').map(Number);
                const clickedDateValue = new Date(year, month - 1, day);

                // Vérifie si la date du concert est passée
                if (clickedDateValue.getDate() < currentDate.getDate()) {

                    // Crée l'élément du modal
                    picModal = document.createElement('div');
                    picModal.id = 'pic-modal';
                    document.body.appendChild(picModal);

                    // Ajoute une div pour contenir le diaporama et le bouton de fermeture
                    const modalContent = document.createElement('div');
                    modalContent.id = 'modal-content';
                    picModal.appendChild(modalContent);

                    // Ajoute le bouton de fermeture au modal
                    const closeButton = document.createElement('img');
                    closeButton.src = 'Medias/Logos/close.png';
                    closeButton.id = 'close-button';
                    picModal.appendChild(closeButton);

                    // Ensuite, ajoute la div pour contenir le diaporama
                    slideshowContainer = document.createElement('div');
                    slideshowContainer.id = 'slideshow-container';
                    modalContent.appendChild(slideshowContainer);

                    closeButton.addEventListener('click', function () {
                        // Vide le contenu du diaporama
                        clearSlideshow();
                        picModal.style.display = 'none';
                    });

                    // Ajoute une div pour contenir le diaporama
                    slideshowContainer = document.createElement('div');
                    slideshowContainer.id = 'slideshow-container';
                    picModal.appendChild(slideshowContainer);
                    // Fonction pour vider le contenu du diaporama
                    function clearSlideshow() {
                        while (slideshowContainer.firstChild) {
                            slideshowContainer.removeChild(slideshowContainer.firstChild);
                        };
                    };

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

                    // Fonction pour vider le contenu du diaporama
                    function clearSlideshow() {
                        while (slideshowContainer.firstChild) {
                            slideshowContainer.removeChild(slideshowContainer.firstChild);
                        }
                        currentIndex = 0;  // Réinitialise l'index
                    }

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
                        console.log('image suivante');
                    }


                    // Écouteurs d'événements pour les boutons "Précédent" et "Suivant"
                    prevButton.addEventListener('click', function () {
                        showSlides(-1);
                    });

                    nextButton.addEventListener('click', function () {
                        showSlides(1);
                    });
                }
            }
        });
    };
});

