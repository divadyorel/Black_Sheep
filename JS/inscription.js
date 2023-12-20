
const inscription = document.getElementById('inscription');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close');
const validez = document.getElementById('validez');

inscription.addEventListener('click', function() {
    modal.style.display = 'block';
    
    closeModalButton.addEventListener ('click', function() {
    modal.style.display = 'none';
    });

    validez.addEventListener('click', function () {
        modal.style.display = 'none';
    })

});

