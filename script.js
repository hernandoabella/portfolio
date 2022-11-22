// set default colors

document.body.style.background = "white";
document.body.style.color = "black";

let a = document.querySelectorAll("li a");
    for(let i = 0; i < a.length; i++){
        a[i].style.color = "green";
}

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
    for (let i = 0; i < 3; i++){
        color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    }

    document.body.style.color = color;
    
    var a = document.querySelectorAll("li a");
    for(var i = 0; i < a.length; i++){
        a[i].style.color = color;
    }
    
}

// dark mode btn
function darkMode(x) {
    generateLightColorHex()
    randDarkColor()
    
    document.body.classList.toggle('dark-mode');
    
    x.classList.toggle("fa-moon");
}


// show hour
function getTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    var meridian = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var strTime = h + ":" + m + ":" + s + " " + meridian;
    document.getElementById('hora').innerText = strTime;
    setTimeout(startTime, 1000);
    
}

// const getTimeAMPMFormat = (date) => {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     hours = hours < 10 ? '0' + hours : hours;
//     // appending zero in the start if hours less than 10
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     document.getElementById('hora') = hours + ':' + minutes + ' ' + ampm;

//     getTimeAMPMFormat(new Date())
// };

setInterval(getTime, 1000)

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
