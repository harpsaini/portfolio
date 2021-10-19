

//makes nav bar fixed and add background colour
const fixedNav = document.querySelector("header nav")

window.addEventListener('scroll', ()=>{
  if(scroll){
    fixedNav.classList.add("scrolled")
  }
  // else{
  //   fixedNav.classList.remove("scrolled")
  // }
})


