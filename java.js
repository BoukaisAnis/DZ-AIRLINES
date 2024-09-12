let togglee = document.querySelector('.toggle');
let menu = document.querySelector('#menu');

togglee.addEventListener('click', function() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        this.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        menu.classList.add('active');
        this.innerHTML = '<i class="fa-solid fa-times"></i>'; // Change icon when active
    }
});
