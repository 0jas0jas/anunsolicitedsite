const Mahi = document.querySelector('.Mahi');
const Ojas = document.querySelector('.Ojas');
const Vangmay = document.querySelector('.Vangmay');

const tl = new TimelineMax();

tl.fromTo(Mahi,0.8,{opacity:0,x:-30},{opacity:1,x:0,ease:Power2.easeIn,delay:0.2})
tl.fromTo(Ojas,0.8,{opacity:0,x:-30},{opacity:1,x:0,ease:Power2.easeIn,delay:0.1})
tl.fromTo(Vangmay,0.8,{opacity:0,x:-30},{opacity:1,x:0,ease:Power2.easeIn})