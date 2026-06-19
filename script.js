window.addEventListener("scroll", ()=>{

let scroll = window.scrollY;

document.querySelector(".logo").style.transform =
`translateY(${scroll * 0.15}px)`;

});
