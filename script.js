// dark mode btn

let icon = document.querySelector('i.fa-duotone.fa-moon')
let btn = document.querySelector('div.dark-mode-btn')
let body = document.querySelector('body');
let anchor = document.querySelector('header nav ul li a');

btn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    icon.classList.toggle('fa-duotone.fa-sun')
    this.classList.toggle('backgroundBtn')
    anchor.classList.toggle('dark-mode');
})

// show datetime
function myFunction2() {
    var date = new Date()
    var current_time = date.getHours() + ":" + date.getMinutes()
    document.getElementById('hora').innerHTML = current_time; 
}

setInterval(myFunction2, 1000)