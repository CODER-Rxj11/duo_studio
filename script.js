function init(){
    // LOCOMOTIVE SCROLL TRIGGER CODEPEN 
    // REMOVE RED , ORANGE AND GREEN PANEL CODE

    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init();

function cursor(){
    var crsr = document.querySelector(".cursor");
    var main = document.querySelector(".main");
    var video = document.querySelectorAll("img, #video2");
    var mainvideo = document.querySelector(".page1>video");
    video.forEach((v)=>{
        v.addEventListener("mouseenter", function(){
        crsr.style.width = "3em"
        crsr.style.borderRadius = "10px"
        crsr.style.fontSize = "10px"
        crsr.style.padding="2px"
        crsr.style.color = "initial"
        crsr.style.fontWeight="bold"
        crsr.innerHTML = "VIEW"
        })
        v.addEventListener("mouseleave",function(){
            crsr.style.width = "15px"
        crsr.style.borderRadius = "50%"
        crsr.style.fontSize = "initial"
        crsr.style.padding = "0"
        crsr.innerHTML = ""
        })
    })

    mainvideo.addEventListener("mouseenter", function(dets){
        crsr.style.width = "fit-content"
        crsr.style.margin = "auto"
        crsr.style.borderRadius = "10px"
        crsr.style.fontSize = "12px"
        crsr.style.padding = "2px"
        crsr.style.color = "initial"
        crsr.style.fontWeight = "bold"
        crsr.innerHTML = "SOUND ON"
    })
    mainvideo.addEventListener("mouseleave", function (dets) {
        crsr.style.width = "15px"
        crsr.style.borderRadius = "50%"
        crsr.style.fontSize = "initial"
        crsr.style.padding = "0"
        crsr.innerHTML = ""
    })
    
    document.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.x + 10 + "px"
        crsr.style.top = dets.y + 10+"px"
    })

    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
        box.addEventListener("mouseenter", function () {
            var att = box.getAttribute("data-image")
            console.log(att);
            crsr.style.width = "450px";
            crsr.style.height = "350px";
            crsr.style.borderRadius = "0";
            crsr.style.backgroundImage = `url(${att})`;
            crsr.style.mixBlendMode = 'initial'
        })
        box.addEventListener("mouseleave", function () {
            box.style.backgroundColor = "transparent";
            crsr.style.width = "15px"
            crsr.style.height = "15px"
            crsr.style.borderRadius = "50%"
            crsr.style.backgroundImage = "none"
        })
    })

}
cursor();

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

tl.to(".page1 h1", {
    x:-100,
},"anim")

tl.to(".page1 h2", {
    x: 100,
},"anim")

tl
.to(".page1 video",{
    width:"90%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end: "top 130",
        scrub: 3
    }
});
tl2.to(".main",{
    backgroundColor:'#fff',
    color:"#111"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4 .elem",
        scroller: ".main",
        start: "top 100%",
        end: "top 0%",
        scrub: 5,
    }
});

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})

var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
var content = document.querySelectorAll(".scroll-div h1");

h4.forEach((elem) => {
    content.forEach((name) =>{
        elem.addEventListener("mouseenter", () => {
            var elemName = elem.innerHTML;
            purple.style.display = "block";
            purple.style.opacity = "1";
            name.innerHTML=`${elemName}`;
        })
        elem.addEventListener("mouseleave", () => {
            purple.style.display = "none";
            purple.style.opacity = "0";
        })
    })
})





