/* typing effect */

const words=["Web Developer","Python Developer","Creative Programmer"]

let wordIndex=0
let letterIndex=0
let deleting=false

function typingEffect(){

const typing=document.getElementById("typing")
const current=words[wordIndex]

if(!deleting){

typing.textContent=current.substring(0,letterIndex++)

if(letterIndex>current.length){

deleting=true
setTimeout(typingEffect,1000)
return

}

}else{

typing.textContent=current.substring(0,letterIndex--)

if(letterIndex===0){

deleting=false
wordIndex=(wordIndex+1)%words.length

}

}

setTimeout(typingEffect,80)

}

typingEffect()



/* scroll animation */

const hiddenElements=document.querySelectorAll(".hidden")

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

hiddenElements.forEach(el=>observer.observe(el))



/* cursor */

const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`

})



/* menu */

const toggle=document.querySelector(".menu-toggle")
const menu=document.getElementById("menu")

toggle.addEventListener("click",()=>{

menu.classList.toggle("active")

})



/* formulaire */

const form=document.getElementById("contactForm")

form.addEventListener("submit",(e)=>{

e.preventDefault()

alert("Merci pour votre message !")

form.reset()

})



/* stars */

const stars=document.querySelectorAll(".stars span")

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

stars.forEach((s,i)=>{

s.style.color=i<=index?"gold":"gray"

})

})

})



/* projets */

function openProject(id){

const modal=document.getElementById("projectModal")
const title=document.getElementById("projectTitle")
const desc=document.getElementById("projectDescription")

modal.style.display="flex"

if(id==1){

title.innerText="UniVote"
desc.innerText="Application web pour organiser des élections universitaires sécurisées."

}

if(id==2){

title.innerText="MoneBank"
desc.innerText="Site web sur l'économie monétaire et bancaire."

}

if(id==3){

title.innerText="Gestion de Stock"
desc.innerText="Application web de gestion des entrées et sorties."

}

if(id==4){

title.innerText="Arduino"
desc.innerText="Projet IoT basé sur Arduino."

}

}

function closeProject(){

document.getElementById("projectModal").style.display="none"

}