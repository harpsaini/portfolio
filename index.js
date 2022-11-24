const app = {};

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
app.hamburgerMenuHandler = () => {
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
  app.contactFormHandler();
  app.hamburgerMenuHandler();
}

app.init();
