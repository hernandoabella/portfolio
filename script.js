// hamburger menu toggler
function toggleMenu(x) {
    x.classList.toggle('change');
    document.querySelector('nav').classList.toggle('changeNav');
}

// dark mode btn
function darkMode(x) {
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
}

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

