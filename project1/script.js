function page1Animation() {
    var tl = gsap.timeline()
    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        delay: 0.8,
        duration: 0.5,
        opacity: 0,
        stagger: 0.3
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    tl.from(".center-part1 p", {
        x: -100,
        duration: 0.5,
        opacity: 0,
    })

    tl.from(".center-part1 button", {
        opacity: 0
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5,
        x: 200
    }, "-=0.3")

    tl.from(".section1bottom img", {
        opacity: 0,
        duration: 0.5,
        y: 30,
        stagger: 0.2
    })
}

function page2Animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        
        start:"top 50%",
        end:"top -50%",
        scrub:2,
    }
})

tl2.from(".services",{
    opacity:0,
    y:30
})
tl2.from(".slem.line1.left",{
    opacity:0,
    x:-300,
    duration:1
},"anim1")
tl2.from(".slem.line1.right",{
    opacity:0,
    x:200,
    duration:1
},"anim1")
tl2.from(".slem.line2.left",{
    opacity:0,
    x:-300,
    duration:1
},"anim2")
tl2.from(".slem.line2.right",{
    opacity:0,
    x:200,
    duration:1
},"anim2")
tl2.from(".slem.line3.left",{
    opacity:0,
    x:-300,
    duration:1
},"anim3")
tl2.from(".slem.line3.right",{
    opacity:0,
    x:200,
    duration:1
},"anim3")
tl2.from(".slem.line4.left",{
    opacity:0,
    x:-300,
    duration:1
},"anim4")
tl2.from(".slem.line4.right",{
    opacity:0,
    x:200,
    duration:1
},"anim4")
}
page1Animation()
page2Animation()