

//makes nav bar fixed and add background colour

const fixedNav = document.querySelector("header nav")
const navBtn = document.querySelectorAll(".navButton")
const buttonToShowForm = document.querySelector('.contactMe a')
const form = document.querySelector('form')
const closeForm = document.querySelector(".closeform")
// console.log(closeForm);

window.addEventListener('scroll', ()=>{
  let scrolledDistance = window.scrollY;
  if(scrolledDistance > 10){
    fixedNav.classList.add("scrolled")
   }
  else{
    fixedNav.classList.remove("scrolled")
  } 
})

buttonToShowForm.addEventListener('click',()=>{
  form.classList.remove("hiddenForm")
})


closeForm.addEventListener('click',()=>{
  form.classList.add("hiddenForm")
})



const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector("header nav ul")

let menuOpen = false; 

menuBtn.addEventListener('click', function(){
  if(!menuOpen){
    menuBtn.classList.add("open");
    navMenu.style.visibility = "visible"
    menuOpen = true;
  }else{
    menuBtn.classList.remove("open")
    navMenu.style.visibility = "hidden"
    menuOpen = false;
  }
}
);

