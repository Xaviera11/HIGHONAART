const tl = gsap.timeline({
repeat:-1,
repeatDelay:3
});

tl.to(".logo",{
opacity:1,
duration:2
})

.to("#headline",{
opacity:1,
duration:1,
onStart:()=>{
document.getElementById("headline").innerHTML =
"ARRIVE";
}
})

.to(".bmw",{
left:"20%",
duration:4
},"-=1")

.to(".car1",{
left:"45%",
duration:4
},"-=4")

.to(".car2",{
left:"65%",
duration:4
},"-=4")

.to("#headline",{
opacity:0,
duration:1
})

.to("#headline",{
opacity:1,
duration:1,
onStart:()=>{
document.getElementById("headline").innerHTML =
"CREATE";
}
})

.to(".guest1",{
left:"40%",
duration:5
},"-=1")

.to(".guest2",{
left:"55%",
duration:5
},"-=5")

.to(".easel",{
opacity:1,
duration:2
})

.to("#headline",{
opacity:0,
duration:1
})

.to("#headline",{
opacity:1,
duration:1,
onStart:()=>{
document.getElementById("headline").innerHTML =
"CONNECT";
}
})

.to(".food",{
opacity:1,
duration:2
})

.to(".dj",{
opacity:1,
duration:2
})

.to(".smoke",{
y:-200,
duration:8
},"-=2")

.to("#headline",{
opacity:0,
duration:1
})

.to(".poster",{
opacity:1,
duration:3
})

.to(".poster",{
opacity:1,
duration:5
})

.to(".poster",{
opacity:0,
duration:2
})

.to(".food",{
opacity:0,
duration:1
},"-=2")

.to(".dj",{
opacity:0,
duration:1
},"-=2");
