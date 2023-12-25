const connection = document.getElementById('connection');
const modal2 = document.getElementById('modal2');
const closeModalButton2 = document.getElementById('close2');
const validez2 = document.getElementById('validez2');

connection.addEventListener('click', function() {
    modal2.style.display = 'block';
    
    closeModalButton2.addEventListener ('click', function() {
    modal2.style.display = 'none';
    });

    validez2.addEventListener('click', function () {
        modal2.style.display = 'none';
    })

});