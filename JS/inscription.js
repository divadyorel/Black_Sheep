
const inscription = document.getElementById('inscription');
const modal1 = document.getElementById('modal1');
const closeModalButton1 = document.getElementById('close1');
const validez1 = document.getElementById('validez1');

inscription.addEventListener('click', function() {
    modal1.style.display = 'block';
    
    closeModalButton1.addEventListener ('click', function() {
    modal1.style.display = 'none';
    });

    validez1.addEventListener('click', function () {
        modal1.style.display = 'none';
    })

});

