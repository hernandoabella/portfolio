// dark mode btn
function darkMode() {
    let body = document.getElementById('body');
    body.classList.toggle('dark-mode');
}


// show datetime
function myFunction2() {
    var date = new Date()
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('hora').innerHTML = current_time; 
}

setInterval(myFunction2, 1000)

// testimonial slideshow 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// work section
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activo", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activo";
}

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();



// contact form 
