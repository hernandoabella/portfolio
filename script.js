// dark mode btn

let icon = document.querySelector('i.fa-moon-o')
let btn = document.querySelector('div.dark-mode-btn')
let body = document.querySelector('body');


// icon.addEventListener('click', function(){
//     body.classList.toggle('dark-mode')
//     this.classList.toggle('backgroundBtn')
//     this.classList.toggle('fa-sun-o')
// })

// function myFunction(x) {
//     x.classList.toggle('fa-thumbs-down')
// }

// show datetime
function myFunction2() {
    var date = new Date()
    var current_time = date.getHours() + ":" + date.getMinutes()
    document.getElementById('hora').innerHTML = current_time; 
}

setInterval(myFunction2, 1000)

