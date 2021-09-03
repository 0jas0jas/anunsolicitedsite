//Constants
const frontimage = document.querySelector(".front")
const navbar = document.querySelector("#navbar")
const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slider");
const footer = document.querySelector(".footer-dark")



//NAVBAR DISAPPEARS
frontimageObserverOptions = {
  rootMargin: "-800px 0px 0px 0px",

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

frontimageObserver.observe(frontimage)


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
