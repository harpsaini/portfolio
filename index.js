const app = {};

//makes nav bar fixed and add background colour
app.navBarScrollHandler = () =>{
  // const navBtn = document.querySelectorAll(".navButton")
  const fixedNav = document.querySelector("header nav")
  window.addEventListener('scroll', ()=>{
    let scrolledDistance = window.scrollY;
    if(scrolledDistance > 10){
      fixedNav.classList.add("scrolled")
    }
    else{
      fixedNav.classList.remove("scrolled")
    } 
  })
}

//handles the contact form in the contact section
app.contactFormHandler = () => {
  const buttonToShowForm = document.querySelector('.contactMe a')
  const form = document.querySelector('form')
  const closeForm = document.querySelector(".closeform")
  buttonToShowForm.addEventListener('click',()=>{
    form.classList.remove("hiddenForm")
  }) 
  closeForm.addEventListener('click',()=>{
    form.classList.add("hiddenForm")
  })
}

// hamberget menu for mobile and ipad views. 
app.hanburgerMenuHandler = () => {
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
}
  

app.init = ()=> {
  app.navBarScrollHandler();
  app.contactFormHandler();
  app.hanburgerMenuHandler();
}

app.init();