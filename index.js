

//makes nav bar fixed and add background colour
const fixedNav = document.querySelector("header nav")

window.addEventListener('scroll', ()=>{
  let scrolledDistance = window.scrollY;

  console.log('scrolledDistance');
  if(scrolledDistance > 10){
    fixedNav.classList.add("scrolled")
   }
  else{
    fixedNav.classList.remove("scrolled")
  }
})




