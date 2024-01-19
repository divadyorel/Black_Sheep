// // Récupère l'élément conteneur du tableau dans le document
// const containTable = document.getElementById('tableaux-container');

// // Crée les éléments HTML nécessaires pour construire le tableau
// const table = document.createElement('table');
// const thead = document.createElement('thead');
// const trTitle = document.createElement('tr');
// const divTitle1 = document.createElement('div');
// const divTitle2 = document.createElement('div');
// const th1 = document.createElement('th');
// const th2 = document.createElement('th');
// const tbody = document.createElement('tbody');
// const enteteLine = document.createElement('tr');
// const tableTitle1 = document.createElement('h2');
// const tableTitle2 = document.createElement('h2');
// const tdElements = document.querySelectorAll('td');

// // Définit l'ID de la table
// table.id = 'tableau';

// // Ajoute la table au conteneur
// containTable.appendChild(table);

// // Ajoute les éléments de l'en-tête à la table
// table.appendChild(thead);
// thead.appendChild(trTitle);

// // Définit la propriété colspan pour occuper toute la largeur
// th1.colSpan = 2;
// th2.colSpan = 4;

// //attribution id à th1 et th2
// th1.id = 'nextDate';
// th2.id = 'pastDate';

// // Création de deux colonnes distinctes dans la ligne du titre
// trTitle.appendChild(th1);
// trTitle.appendChild(th2);

// // Création de deux éléments h2 distincts
// th1.appendChild(divTitle1);
// th2.appendChild(divTitle2);

// //Création de 2 div qui entourent les h2
// divTitle1.appendChild(tableTitle1);
// divTitle2.appendChild(tableTitle2);

// divTitle1.id = 'div-title1';
// divTitle2.id = 'div-title2';

// // Ajoutez du contenu à vos h2 comme vous le souhaitez
// tableTitle1.innerHTML = '<u>PROCHAINEMENT EN CONCERT :</u>';
// tableTitle2.innerHTML = '<u>DATES PASSEES :</u>';

// // Ajoute le corps du tableau
// table.appendChild(tbody);
// tbody.appendChild(enteteLine);

// // Ajoute les titres des colonnes au tableau
// const columnTitle = ['Dates', 'Lieux', 'Adresse', 'Localisation', 'Début'];

// columnTitle.forEach(title => {
//     const td = document.createElement('td');
//     td.textContent = title;
//     enteteLine.appendChild(td);
//     enteteLine.id = 'titres';

//     switch (title) {
//         case 'Dates':
//             td.id = 'Dates';
//             break;
//         case 'Lieux':
//             td.id = 'lieux';
//             break;
//         case 'Adresse':
//             td.id = 'adresse';
//             break;
//         case 'Localisation':
//             td.colSpan = 2;
//             td.id = 'loc';
//             break;
//         case 'Début':
//             td.id = 'debut';
//             break;
//     }
// });

// //Remplissage de chaque nouvelles dates de concert
// const line1Data = [
//     '16/12/2023',
//     'Au pub "Les brasseurs d\'air"',
//     'L\'essert, 17600 CORME-ECLUSE',
//     { name: 'MAPS', url: 'https://maps.app.goo.gl/PLWwyQYPRDbD35U3A' },
//     { name: 'WAZE', url: 'https://waze.com/ul/hgbp7s95et' },
//     '20H'
// ]

// const line2Data = [
//     '27/01/2024',
//     'salles des fêtes de Chaillevette',
//     '21 rue de la mairie 17390 Chaillevette',
//     { name: 'MAPS', url: 'https://maps.app.goo.gl/rR1Fk7CWk9mjAXBA8' },
//     { name: 'WAZE', url: 'https://ul.waze.com/ul?place=ChIJT_8ZsxVwAUgRYgQs94Rc7lc&ll=45.73131050%2C-1.06886280&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' },
//     '20H'
// ]

// const line3Data = [
//     '17/07/2024',
//     'Au kiosque de ronce-les-bains (La Tremblade)',
//     '61 Av. Gabrielle, 17390 La Tremblade',
//     { name: 'MAPS', url: 'https://maps.app.goo.gl/EWvscAE3BsbWR6SLA' },
//     { name: 'WAZE', url: 'https://www.waze.com/ul/hgbpht3rfv' },
//     '20H'
// ]

// const line4Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]

// const line5Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]

// const line6Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]

// const line7Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]

// const line8Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]

// const line9Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]

// const line10Data = [
//     '',
//     '',
//     '',
//     { name: 'MAPS', url: '#' },
//     { name: 'WAZE', url: '#' },
//     ''
// ]


// // Fonction pour créer une ligne à partir des données
// function createRow(data, rowId) {
//     const row = document.createElement('tr');
//     row.classList.add('date');
//     row.id = rowId;

//     data.forEach((rowData, index) => {
//         const cell = document.createElement('td');

//         if (typeof rowData === 'object' && rowData.hasOwnProperty('name') && rowData.hasOwnProperty('url')) {
//             const link = document.createElement('a');
//             link.href = rowData.url;
//             link.textContent = rowData.name;
//             cell.appendChild(link);

//             // Ajouter des classes spécifiques aux liens
//             link.classList.add(`link-${index + 1}`);

//             // Ajouter l'attribut target="_blank" au lien
//             link.setAttribute('target', '_blank');

//             // Ajouter la classe gps si le lien concerne la localisation
//             if (rowData.name === 'MAPS' || rowData.name === 'WAZE') {
//                 link.classList.add('gps');
//                 cell.classList.add('GPS'); // Ajout de la classe GPS au td
//             }

//         } else {
//             cell.textContent = rowData;

//             switch (index) {
//                 case 0:
//                     cell.classList.add('Dates');
//                     break;
//                 case 1:
//                     cell.classList.add('Lieux');
//                     break;
//                 case 2:
//                     cell.classList.add('Adresse');
//                     break;
//                 case 5:
//                     cell.classList.add('Debut');
//                     break;
//             }
//         }
//         row.appendChild(cell);
//     });

//     return row;
// }

// // Crée un tableau de tableaux de données
// const allLineData = [line1Data, line2Data, line3Data, line4Data, line5Data, line6Data, line7Data, line8Data, line9Data, line10Data];

// // Boucle sur les données et crée et ajoute les lignes au tableau
// for (let i = 0; i < allLineData.length; i++) {
//     const rowData = allLineData[i];

//     // Utilisation de la fonction createRow
//     const lineRow = createRow(rowData, `dateRow${i + 1}`);
//     lineRow.classList.add('date');

//     // Ajouter la ligne au tableau
//     tbody.appendChild(lineRow);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     // Récupère les éléments HTML avec les classes correspondantes
//     const Dates = document.getElementsByClassName('Dates');  // cases dates
//     const debuts = document.getElementsByClassName('Debut'); // cases début du concert
//     const dateRaw = document.getElementsByClassName('date'); // lignes du tableau
//     let currentDate = new Date(); // Crée un objet Date pour la date actuelle
//     let picModal;
//     let slideshowContainer;
//     let currentIndex = 0;  // Index de l'image actuelle dans le diaporama
//     let totalImages = 12;   // Nombre total d'images dans le diaporama

//     // Crée un conteneur pour les dates passées
//     const pastDatesContainer = document.createElement('tbody');

//     // Crée un tableau pour stocker les dates passées
//     const pastDates = [];

//     // Boucle pour traiter chaque élément de la classe 'Dates'
//     for (let i = Dates.length - 1; i >= 0; i--) {

//         const dateText = Dates[i].textContent.trim();
//         const [day, month, year] = dateText.split('/').map(Number);
//         let concertDate = new Date(year, month - 1, day);


//         // Vérifie si la date du concert est passée
//         if (concertDate < currentDate) {

//             // Change le style pour les dates passées
//             dateRaw[i].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//             dateRaw[i].style.cursor = 'pointer';
//             dateRaw[i].setAttribute('title', 'Cliquez pour voir les photos du concert');
//             dateRaw[i].style.opacity = '0.6';
//             Dates[i].style.color = 'black';
//             debuts[i].style.color = 'black';

//             // Styles pour les liens GPS
//             const gpsCells = dateRaw[i].querySelectorAll('.gps');
//             gpsCells.forEach(gpsCell => {
//                 gpsCell.style.color = 'black';
//             });

//             // Ajoute la date à l'array des dates passées
//             pastDates.push({ date: concertDate, row: dateRaw[i] });

//             // Supprime la ligne originale
//             dateRaw[i].parentNode.removeChild(dateRaw[i]);
//         };
//     };


//     // Trie les dates par ordre croissant
//     pastDates.sort((a, b) => b.date - a.date);

//     // Ajoute les dates triées à la section des dates passées
//     for (const pastDate of pastDates) {
//         pastDatesContainer.appendChild(pastDate.row.cloneNode(true));
//     }

//     // Trouve l'emplacement où insérer la section des dates passées
//     const futureDatesContainer = document.querySelector('#tableau tbody');
//     futureDatesContainer.parentNode.insertBefore(pastDatesContainer, futureDatesContainer.nextSibling);


//     // Boucle pour ajouter des écouteurs d'événements à chaque ligne du tableau
//     for (let i = 0; i < dateRaw.length; i++) {
//         dateRaw[i].addEventListener('click', function () {
//             // Réinitialise l'index du diaporama à zéro
//             currentIndex = 0;
//             // Vérifie si la ligne cliquée est celle avec l'ID "dateRow1"
//             if (this.id === 'dateRow1') {
//                 // Récupère la date de la case 'Dates' de la ligne cliquée
//                 const dateText = Dates[i].textContent.trim();
//                 const [day, month, year] = dateText.split('/').map(Number);
//                 const clickedDateValue = new Date(year, month - 1, day);

//                 // Vérifie si la date du concert est passée
//                 if (clickedDateValue.getDate() < currentDate.getDate()) {

//                     // Crée l'élément du modal
//                     picModal = document.createElement('div');
//                     picModal.id = 'pic-modal';
//                     document.body.appendChild(picModal);

//                     // Ajoute le bouton de fermeture au modal
//                     const closeButton = document.createElement('img');
//                     closeButton.src = 'Medias/Logos/close.png';
//                     closeButton.id = 'close-button';
//                     picModal.appendChild(closeButton);

//                     closeButton.addEventListener('click', function () {
//                         // Vide le contenu du diaporama
//                         clearSlideshow();
//                         picModal.style.display = 'none';
//                     });

//                     // Ajoute une div pour contenir le diaporama
//                     slideshowContainer = document.createElement('div');
//                     slideshowContainer.id = 'slideshow-container';
//                     picModal.appendChild(slideshowContainer);
//                     // Fonction pour vider le contenu du diaporama
//                     function clearSlideshow() {
//                         while (slideshowContainer.firstChild) {
//                             slideshowContainer.removeChild(slideshowContainer.firstChild);
//                         };
//                     };

//                     // Ajoute les images du diaporama
//                     for (let j = 1; j <= totalImages; j++) {
//                         const img = document.createElement('img');
//                         img.src = `Medias/Photos/Photos_16-12-2023/${j}.jpg`;
//                         img.className = 'slideshow-image';
//                         slideshowContainer.appendChild(img);
//                     }

//                     // Ajoute des boutons "Précédent" et "Suivant" pour naviguer dans le diaporama
//                     const prevButton = document.createElement('a');
//                     prevButton.className = 'prev-next-slideshow';
//                     prevButton.id = 'prev-button';
//                     prevButton.innerHTML = '&#10095;';
//                     slideshowContainer.appendChild(prevButton);

//                     const nextButton = document.createElement('a');
//                     nextButton.className = 'prev-next-slideshow';
//                     nextButton.id = 'next-button';
//                     nextButton.innerHTML = '&#10094;';
//                     slideshowContainer.appendChild(nextButton);

//                     // Fonction pour vider le contenu du diaporama
//                     function clearSlideshow() {
//                         while (slideshowContainer.firstChild) {
//                             slideshowContainer.removeChild(slideshowContainer.firstChild);
//                         }
//                         currentIndex = 0;  // Réinitialise l'index
//                     }

//                     // Fonction pour passer à l'image suivante ou précédente
//                     function showSlides(n) {
//                         currentIndex += n;
//                         if (currentIndex >= totalImages) {
//                             currentIndex = 0;
//                         } else if (currentIndex < 0) {
//                             currentIndex = totalImages - 1;
//                         }

//                         const slides = document.getElementsByClassName('slideshow-image');
//                         for (let k = 0; k < slides.length; k++) {
//                             slides[k].style.display = 'none';
//                         }
//                         slides[currentIndex].style.display = 'block';
//                         console.log('image suivante');
//                     }


//                     // Écouteurs d'événements pour les boutons "Précédent" et "Suivant"
//                     prevButton.addEventListener('click', function () {
//                         showSlides(-1);
//                     });

//                     nextButton.addEventListener('click', function () {
//                         showSlides(1);
//                     });
//                 }
//             }
//         });
//     };
// });

// const tableau = document.getElementById('tableau');
// const rows = document.querySelectorAll('#tableau tbody .Lieux, .Adresse, .GPS');
// divTitle2.addEventListener('click', function () {   
//     divTitle1.style.width = '70%';
//     divTitle2.style.width = '130%';
//     divTitle1.style.backgroundColor = 'rgba(64, 93, 158, 0.3)';
//     divTitle2.style.backgroundColor = 'rgb(170, 98, 98)';
//     rows.forEach(row => {
//         row.style.backgroundColor = 'rgb(189, 155, 155)';
//     });

// });


// divTitle1.addEventListener('click', function () {
//     divTitle1.style.width = '130%';
//     divTitle2.style.width = '70%';
//     divTitle1.style.backgroundColor = 'rgb(64, 93, 158)';
//     divTitle2.style.backgroundColor = 'rgb(202, 136, 136)';
//     rows.forEach(row => {
//         row.style.backgroundColor = 'rgb(181, 192, 214)';
//     });    
// });



// Récupère l'élément conteneur du tableau dans le document
const containTable = document.getElementById('tableaux-container');

// Crée les éléments HTML nécessaires pour construire le tableau
const table = document.createElement('table');
const thead = document.createElement('thead');
const trTitle = document.createElement('tr');
const divTitle1 = document.createElement('div');
const divTitle2 = document.createElement('div');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const tbody = document.createElement('tbody');
const enteteLine = document.createElement('tr');
const tableTitle1 = document.createElement('h2');
const tableTitle2 = document.createElement('h2');
const tdElements = document.querySelectorAll('td');

// Définit l'ID de la table
table.id = 'tableau1';

// Ajoute la table au conteneur
containTable.appendChild(table);

// Ajoute les éléments de l'en-tête à la table
table.appendChild(thead);
thead.appendChild(trTitle);

// Définit la propriété colspan pour occuper toute la largeur
th1.colSpan = 2;
th2.colSpan = 4;

//attribution id à th1 et th2
th1.id = 'nextDate';
th2.id = 'pastDate';

// Création de deux colonnes distinctes dans la ligne du titre
trTitle.appendChild(th1);
trTitle.appendChild(th2);

// Création de deux éléments h2 distincts
th1.appendChild(divTitle1);
th2.appendChild(divTitle2);

//Création de 2 div qui entourent les h2
divTitle1.appendChild(tableTitle1);
divTitle2.appendChild(tableTitle2);

divTitle1.id = 'div-title1';
divTitle2.id = 'div-title2';

// Ajoutez du contenu à vos h2 comme vous le souhaitez
tableTitle1.innerHTML = '<u>PROCHAINEMENT EN CONCERT :</u>';
tableTitle2.innerHTML = '<u>DATES PASSEES :</u>';

// Ajoute le corps du tableau
table.appendChild(tbody);
tbody.appendChild(enteteLine);

// Ajoute les titres des colonnes au tableau
const columnTitle = ['Dates', 'Lieux', 'Adresse', 'Localisation', 'Début'];

columnTitle.forEach(title => {
    const td = document.createElement('td');
    td.textContent = title;
    enteteLine.appendChild(td);
    enteteLine.id = 'titres';

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
    '16/12/2024',
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
    const row = document.createElement('tr');
    row.classList.add('date');
    row.id = rowId;

    data.forEach((rowData, index) => {
        const cell = document.createElement('td');

        if (typeof rowData === 'object' && rowData.hasOwnProperty('name') && rowData.hasOwnProperty('url')) {
            const link = document.createElement('a');
            link.href = rowData.url;
            link.textContent = rowData.name;
            cell.appendChild(link);

            // Ajouter des classes spécifiques aux liens
            link.classList.add(`link-${index + 1}`);

            // Ajouter l'attribut target="_blank" au lien
            link.setAttribute('target', '_blank');

            // Ajouter la classe gps si le lien concerne la localisation
            if (rowData.name === 'MAPS' || rowData.name === 'WAZE') {
                link.classList.add('gps');
                cell.classList.add('GPS'); // Ajout de la classe GPS au td
            }

        } else {
            cell.textContent = rowData;

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
        row.appendChild(cell);
    });

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
}


document.addEventListener('DOMContentLoaded', function () {
    // Récupère les éléments HTML avec les classes correspondantes
    const Dates = document.getElementsByClassName('Dates');  // cases dates
    const dateRaw = document.getElementsByClassName('date'); // lignes du tableau
    let currentDate = new Date(); // Crée un objet Date pour la date actuelle
    let picModal;
    let slideshowContainer;
    let currentIndex = 0;  // Index de l'image actuelle dans le diaporama
    let totalImages = 12;   // Nombre total d'images dans le diaporama

    // Crée un tableau pour stocker les indices des lignes correspondant aux dates passées
    const datesPasseesIndices = [];


    // Boucle sur les données et crée et ajoute les lignes au tableau
    for (let i = 0; i < allLineData.length; i++) {
        const rowData = allLineData[i];

        // Utilisation de la fonction createRow
        const lineRow = createRow(rowData, `dateRow${i + 1}`);
        lineRow.classList.add('date');

        // Ajouter la ligne au tableau
        //tbody.appendChild(lineRow);

        // Vérifier si la date est passée
        const dateText = rowData[0]; // Assurez-vous que l'index est correct pour la date dans votre tableau
        const [day, month, year] = dateText.split('/').map(Number);
        let concertDate = new Date(year, month - 1, day);

        if (concertDate < currentDate) {
            // Change le style de la date passée
            dateRaw[i].style.cursor = 'pointer';
            dateRaw[i].setAttribute('title', 'Cliquez pour voir les photos du concert');

            // Ajouter l'index de la ligne correspondante au tableau des dates passées
            datesPasseesIndices.push(i);
        }

        if (concertDate >= currentDate) {
            dateRaw[i].classList.add('future-date');
        }
    }
    const rows = document.querySelectorAll('.Lieux, .Adresse, .GPS');
    const futureDates = document.querySelectorAll('.future-date');

    // Créer un tableau pour stocker les contenus des cellules future-date
    const originalContent = [];
    futureDates.forEach(dateCell => {
        originalContent.push(dateCell.textContent);
    });

    divTitle1.addEventListener('click', function () {
        divTitle1.style.width = '130%';
        divTitle2.style.width = '70%';
        divTitle1.style.backgroundColor = 'rgb(64, 93, 158)';
        divTitle2.style.backgroundColor = 'rgb(202, 136, 136)';
        rows.forEach(row => {
            row.style.backgroundColor = 'rgb(181, 192, 214)';
        });

        // futureDates.forEach((dateCell, index) => {
        //     dateCell.textContent = originalContent[index];
        // });
    });

    // Fonction pour créer une ligne vide à partir des données
    function createEmptyRow(rowId) {
        const row = document.createElement('tr');
        row.classList.add('date');
        row.id = rowId;

        const emptyData = ['', '', '', { name: 'MAPS', url: '#' }, { name: 'WAZE', url: '#' }, ''];

        emptyData.forEach((rowData, index) => {
            const cell = document.createElement('td');

            if (typeof rowData === 'object' && rowData.hasOwnProperty('name') && rowData.hasOwnProperty('url')) {
                const link = document.createElement('a');
                link.href = rowData.url;
                link.textContent = rowData.name;
                cell.appendChild(link);

                // Ajouter des classes spécifiques aux liens
                link.classList.add(`link-${index + 1}`);

                // Ajouter l'attribut target="_blank" au lien
                link.setAttribute('target', '_blank');

                // Ajouter la classe gps si le lien concerne la localisation
                if (rowData.name === 'MAPS' || rowData.name === 'WAZE') {
                    link.classList.add('gps');
                    cell.classList.add('GPS'); // Ajout de la classe GPS au td
                }

            } else {
                cell.textContent = rowData;

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
            row.appendChild(cell);
        });

        return row;
    }

    divTitle2.addEventListener('click', function () {
        divTitle1.style.width = '70%';
        divTitle2.style.width = '130%';
        divTitle1.style.backgroundColor = 'rgba(64, 93, 158, 0.3)';
        divTitle2.style.backgroundColor = 'rgb(170, 98, 98)';
    
        rows.forEach(row => {
            row.style.backgroundColor = 'rgb(189, 155, 155)';
        });
    
        // Supprimer toutes les lignes existantes du tableau
        dateRaw.forEach(row => {
            tbody.removeChild(row);
        });
    
        // Ajouter de nouvelles lignes vides au tableau
        for (let i = 0; i < allLineData.length; i++) {
            const emptyRow = createEmptyRow(`emptyRow${i + 1}`);
            tbody.appendChild(emptyRow);
        }
    
        // Cache le contenu des cellules des dates futures
        futureDates.forEach(dateCell => {
            dateCell.textContent = '';
        });
    
        // Remplacer les lignes vides par les dates passées
        datesPasseesIndices.forEach(index => {
            const emptyRow = document.getElementById(`emptyRow${index + 1}`);
            if (emptyRow) {
                // Remplacer l'ancienne ligne vide par la nouvelle ligne de données
                const newDataRow = createRow(allLineData[index], `dateRow${index + 1}`);
                newDataRow.classList.add('date');
                tbody.appendChild(newDataRow);
            }
        });
    });






















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
                if (clickedDateValue.getDate() > currentDate.getDate()) {

                    // Crée l'élément du modal
                    picModal = document.createElement('div');
                    picModal.id = 'pic-modal';
                    document.body.appendChild(picModal);

                    // Ajoute le bouton de fermeture au modal
                    const closeButton = document.createElement('img');
                    closeButton.src = 'Medias/Logos/close.png';
                    closeButton.id = 'close-button';
                    picModal.appendChild(closeButton);

                    closeButton.addEventListener('click', function () {
                        // Vide le contenu du diaporama
                        clearSlideshow();
                        picModal.style.display = 'none';
                    });

                    // Ajoute une div pour contenir le diaporama
                    slideshowContainer = document.createElement('div');
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

                    // Écouteurs d'événements pour les boutons "Précédent" et "Suivant"
                    prevButton.addEventListener('click', function () {
                        showSlides(-1);
                    });

                    nextButton.addEventListener('click', function () {
                        showSlides(1);
                    });

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
                }
            }
        });
    };
});


