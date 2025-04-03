function animatedText(text, containerId, delay) {
    const container = document.getElementById(containerId);
    
    text.split("").forEach((char, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.innerHTML = char === " " ? "&nbsp;" : char;
            span.classList.add("letter");
            container.appendChild(span);
        }, index * 100 + delay);
    })
}

// animatedText("ubur ubur ikan lele,", "animated-text1", 1000)
// animatedText("selamat datang le.", "animated-text2", 4000)
animatedText("kepoin aja langsung sapa tau demen hehehaha, AWOKAWOK", "animated-text3", 1000);

//togle

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navbarNav = document.getElementById("navbar-nav");
    const menuIcon = document.querySelector(".menu-icon")
    const closeIcon = document.querySelector(".close-icon")
    
    hamburgerMenu.addEventListener("click", function() {
        navbarNav.classList.toggle("active");
        
        if (navbarNav.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });

    closeIcon.addEventListener("click", function(){
        navbarNav.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    })

});

// document.getElementById(".close-icon").addEventListener("click", function(){

//     document.getElementById("navbar-nav").classList.remove("active");
// })

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

// Initialize first slide
slides[currentSlide].style.opacity = 1;

// Add event listeners
prevButton.addEventListener('click', () => {
    slides[currentSlide].style.animation = 'slideOut 1s';
    setTimeout(() => {
        slides[currentSlide].style.opacity = 0;
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].style.opacity = 1;
        slides[currentSlide].style.animation = 'slideIn 1s';
    }, 1000);
});

nextButton.addEventListener('click', () => {
    slides[currentSlide].style.animation = 'slideOut 1s';
    setTimeout(() => {
        slides[currentSlide].style.opacity = 0;
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].style.opacity = 1;
        slides[currentSlide].style.animation = 'slideIn 1s';
    }, 1000);
});

function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const addres = document.getElementById('addres').value;
    const pesan = document.getElementById('pesan').value;

    const url = `https://api.whatsapp.com/send?phone=6285138039373&text=Hallo%20Admin%0ASaya%20*${name}*%2C%20Asal%20*${addres}*%0A%0A${pesan}%0A`
    
    window.open(url);
}
