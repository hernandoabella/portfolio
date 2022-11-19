// dark mode btn

let icon = document.querySelector('i.fa-moon')
let btn = document.querySelector('div.dark-mode-btn')
let body = document.querySelector('body');
let anchor = document.querySelectorAll('header nav ul li > a');

btn.addEventListener('click', function(x){
    body.classList.toggle('dark-mode')
    this.classList.toggle('backgroundBtn')
})

// show datetime
function myFunction2() {
    var date = new Date()
    var current_time = date.getHours() + ":" + date.getMinutes()
    document.getElementById('hora').innerHTML = current_time; 
}

setInterval(myFunction2, 1000)