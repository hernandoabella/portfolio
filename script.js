// generate random dark color
function randDarkColor() {
    let lum = -0.25;
    let hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    
    
    document.body.style.background = rgb;
}

// generate light color

function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    
    document.body.style.color = color;
    
    var a = document.querySelectorAll("li a");
    for(var i = 0; i < a.length; i++){
        a[i].style.color = color;
    }
    
}



// dark mode btn
function darkMode(x) {
    // let body = document.getElementById('body');
    // body.classList.toggle('dark-mode');
    generateLightColorHex()
    randDarkColor()
    
    document.body.classList.toggle('dark-mode');
    
    x.classList.toggle("fa-moon");
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

// project section
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
