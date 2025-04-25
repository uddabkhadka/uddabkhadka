const menuToggle = document.querySelector("#menu-toggle");
const menuList = document.querySelector("#menu-list");
menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('active');
});

// image slider
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);