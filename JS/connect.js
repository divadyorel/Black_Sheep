
const user = document.getElementById('user');
const connect = document.querySelectorAll('#ul-connect .connect');

user.addEventListener('mouseover', function() {
    connect.forEach(item => {
        item.style.display = "inline";
    });    
});

user.addEventListener('mouseout', function(event) {
    if (!user.contains(event.relatedTarget)) {
        connect.forEach(item => {
            item.style.display = "none";
        });
    }
});

