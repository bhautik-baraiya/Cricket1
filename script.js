let crsr = document.querySelector("#cursor");
let crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px";
    crsr.style.top = dets.y + "px";
    crsr_blur.style.left = dets.x - 200 + "px";
    crsr_blur.style.top = dets.y - 200 + "px";
})

let h4all = document.querySelectorAll('#nav h4');
h4all.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        crsr.style.scale = 3
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave', function () {
        crsr.style.scale = 1
        crsr.style.border = '0px solid rgb(0, 208, 255)'
        crsr.style.backgroundColor = 'rgb(0, 208, 255)'
    })
})

gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -7px",
        end: "top -8px",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        tigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
});

gsap.from('#about-us img,#about-us-in', {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '#about-us',
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 1
    }
})

gsap.from('.card', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    // stagger: .1,
    scrollTrigger: {
        trigger: '.card',
        scroller: "body",
        start: "top 70%",
        end: "top 68%",
        scrub: 3
    }
})

gsap.from('#page3 p', {
    scale: 0.9,
    scrollTrigger: {
        trigger: '#page3 p',
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.from('#colon1', {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.from('#colon2', {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.from("#page4 h1", {
    y: 110,
    scrollTrigger: {
        trigger: '#page4 h1',
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 3
    }
})


