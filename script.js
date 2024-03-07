
var crsr = document.querySelector("#cursor");
var crsr_blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x - 10 + "px";
    crsr.style.top = dets.y - 10 + "px";
    crsr_blur.style.left = dets.x - 100 + "px";
    crsr_blur.style.top = dets.y - 100 + "px";
    crsr.style.transition = "all ease 0.1s"
    crsr_blur.style.transition = "all ease 0.2s"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top 80%",
        scrub: 8
    }
})

var nav_elements = document.querySelectorAll("#nav h5");
nav_elements.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2,
        crsr.style.backgroundColor = "transparent",
        crsr.style.border = "0.1px solid #fff"
    })
})

nav_elements.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1,
        crsr.style.backgroundColor = "#9FC11E",
        crsr.style.borderRadius = "50% solid #9FC11E"
    })
})

gsap.from("#comma1",{
    x: -50,
    y: -50,
    scrollTrigger: {
        trigger: "#comma1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})

gsap.from("#comma2",{
    x: 50,
    y: 50,
    scrollTrigger: {
        trigger: "#comma1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroll: "body",
        scrub: 4,
        start: "top 75%",
        end: "top 70%"
    }
})

var footer_elements = document.querySelectorAll(".menu-div h1");
footer_elements.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 2,
        crsr.style.backgroundColor = "transparent",
        crsr.style.border = "0.1px solid #fff"
    })
})

footer_elements.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1,
        crsr.style.backgroundColor = "#9FC11E",
        crsr.style.borderRadius = "50% solid #9FC11E"
    })
})