/* =========================
TYPING EFFECT PROFESSIONNEL
========================= */

const words = ["Web Developer", "Python Developer", "Creative Programmer"];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {
    const typing = document.getElementById("typing");
    const current = words[wordIndex];

    if(!deleting){
        typing.textContent = current.substring(0, letterIndex++);
        if(letterIndex > current.length){
            deleting = true;
            setTimeout(typingEffect, 1000);
            return;
        }
    } else {
        typing.textContent = current.substring(0, letterIndex--);
        if(letterIndex === 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typingEffect, 80);
}

typingEffect();


/* =========================
SCROLL ANIMATION PROFESSIONNEL
========================= */

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.2});
hiddenElements.forEach(el=>observer.observe(el));


/* =========================
CURSOR FLUIDE
========================= */

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
    cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});


/* =========================
MENU MOBILE
========================= */

const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click",()=>{
    menu.classList.toggle("active");
});


/* =========================
CONTACT FORM
========================= */

const form = document.getElementById("contactForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const button = form.querySelector("button");
    button.innerText = "Envoi...";
    setTimeout(()=>{
        button.innerText = "Message envoyé ✓";
        form.reset();
        setTimeout(()=>{ button.innerText = "Envoyer"; }, 2000);
    }, 1000);
});


/* =========================
COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const target = +counter.dataset.target;
    let count = 0;
    const update = () => {
        const increment = target / 120;
        count += increment;
        if(count < target){
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };
    update();
});


/* =========================
STAR RATING
========================= */

const stars = document.querySelectorAll(".stars span");
stars.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        stars.forEach((s,i)=>{
            s.style.color = i <= index ? "gold" : "gray";
        });
    });
});


/* =========================
PARALLAX HERO EFFET
========================= */

const hero = document.querySelector(".hero");
window.addEventListener("mousemove",(e)=>{
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});