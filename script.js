=gsap.from(".title",{

opacity:0,
y:80,

duration:2

});

gsap.from(".ticket",{

opacity:0,
scale:.5,

duration:2,
delay:1

});

gsap.to(".smoke1",{

y:-120,

duration:8,

repeat:-1,

yoyo:true

});

gsap.to(".smoke2",{

y:-180,

duration:10,

repeat:-1,

yoyo:true

});

function createParticle(){

const particle =
document.createElement("div");

particle.classList.add("particle");

document.body.appendChild(particle);

particle.style.left =
Math.random()*window.innerWidth+"px";

particle.style.top =
window.innerHeight+"px";

gsap.to(particle,{

y:-window.innerHeight-200,

x:(Math.random()*300)-150,

duration:
6+Math.random()*5,

onComplete:()=>{

particle.remove();

}

});

}

setInterval(createParticle,300);
