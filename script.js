// hamburger menu toggler
function toggleMenu(x) {
    x.classList.toggle('change');
    document.querySelector('nav').classList.toggle('changeNav');
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
    document.querySelector('h1').style.color = color;
    
    let a = document.querySelectorAll("li a");
    for(let i = 0; i < a.length; i++){
        a[i].style.color = color;
    }

}

// set default colors
document.body.style.background = "#fff";
document.body.style.color = "black";

let a = document.querySelectorAll('li a');

for(let i = 0; i < a; i++) {
    a[i].style.color = "green";
}

// dark mode btn
function darkMode(x) {
    generateLightColorHex()
    randDarkColor()
    randDarkColor2()
    document.body.classList.toggle('dark-mode');
    x.classList.toggle("fa-moon");
}

// default mode btn
var defaultState = false;

function defaultMode() {
    if(!defaultState) {
        document.body.style.background = "#99C24D";
        document.body.style.color = "#3E4147";
        let a = document.querySelectorAll("li a");

        for(let i = 0; i < a.length; i++) {
            a[i].style.color = "#3E4147";
        }

        document.querySelector('form').style.background = "#99C24D";

        document.querySelector('h1').style.color = "#3E4147";

        defaultState = true;
    } else {
        defaultState = false;
    }
}

function clickHandler() {
    defaultMode();
    let mybtn = document.querySelector('.my-btn');

    mybtn.addEventListener('click', defaultMode);
}

onload = () => clickHandler();


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
}

setInterval(getTime, 1000)

// testimonial slideshow 
let slideIndex = 0;
showSlides();

function showSlides() {

    // background: var(--black);
    // transition: .3s;
    // animation: animation1 1s;
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
    // dots[slideIndex-1].style.background = "blue";
    
    setTimeout(showSlides, 5000); // Change image every 10 seconds

}

// typing effect

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Full-Stack Engineer', 'UI/UX Designer', 'Artist'];
const typingDelay = 150;
const erasingDelay = 90;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(!(cursorSpan.classList.contains('typing'))) {
        cursorSpan.classList.add('typing');
    }
    // if last letter of a word is not typed
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(!(cursorSpan.classList.contains('typing'))) {
        cursorSpan.classList.add('typing');
    }
    // if string is not entirely erased
    if(charIndex > 0) { 
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    if(textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
})

