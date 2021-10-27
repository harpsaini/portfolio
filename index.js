/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});




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
