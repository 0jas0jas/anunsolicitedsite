//Constants
const frontimage = document.querySelector(".frontimage")
const navbar = document.querySelector("#navbar")
const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slider");
const footer = document.querySelector(".footer")



//NAVBAR DISAPPEARS
frontimageObserverOptions = {
  rootMargin: "-800px 0px 0px 0px"

};
 
const frontimageObserver = new IntersectionObserver(function(enteries, frontimageObserver){
  enteries.forEach(entry => {
    if(!entry.isIntersecting){
      $("#navbar").attr("id", "scrolled_navbar")
    }else{
      navbar.id = "navbar"
    }
  })
}, frontimageObserverOptions)




//FADE IN STUFF
const appearOptions = {
  threshold: 0.5,
  // rootMargin: "0px -200px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      entry.target.classList.remove('appear');
    } else{
      entry.target.classList.add('appear')
    }
  });
}, appearOptions)


faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})

sliders.forEach(slider =>{
  appearOnScroll.observe(slider);
})


//FOOTER DISAPPEARANCE
const navGone = new IntersectionObserver(function(entries, navGone){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      console.log(entry.target);
      $("#scrolled_navbar").css("opacity", "1")
      $(".social-icons").css("opacity", "1")
    }else{
      console.log(entry.target);
      $("#scrolled_navbar").css("opacity", "0")
      $(".social-icons").css("opacity", "0")
    }
  })
})


const openMenu = document.querySelector('.openMenu')
const crossBtn = document.querySelector('#cross-btn')
openMenu.addEventListener('click', function(){
  $('.phones').css("display", "flex");
})

crossBtn.addEventListener('click', function(){
  $('.phones').css("display", "none");
})