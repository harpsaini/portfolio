

//makes nav bar fixed and add background colour
const fixedNav = document.querySelector("header nav")
const navBtn = document.querySelectorAll(".navButton")
const buttonToShowForm = document.querySelector('.contactMe a')
const form = document.querySelector('form')
console.log(form);

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
