

const tl = gsap.timeline({
    defaults: {
        ease: "power2.out"
    }
});
tl.fromTo(".h1animate",{
    y: "100%",
    opacity: 0
},{
    duration: 2,
    y: "0%",
    opacity: 1,
    ease: "power1.out"
});
tl.to(".animation" , {
    duration: 2.5,
    opacity: 0,
    display: "none",
    ease: "power1.out"
},"+=1");
tl.fromTo(".p",{
    y: "100%",
    opacity: 0
},{
    duration: 1.5,
    y: "0%",
    opacity: 1
},"-=1");
tl.fromTo(".heroImg",{
    y: "100%"
},{
    duration: 1,
    y: "0%",
    opacity: 1,
    ease: "power1.in"
},"-=3");
tl.fromTo(".logo",{
    y: "100%",
    opacity: 0
},{
    duration: 1,
    y: "0%",
    opacity: 1
},"-=0.5");
tl.fromTo(".theme",{
    y: "100%",
    visibilty: "none"
},{
    duration: 2,
    y: "0%",
    visibilty: "visible"
},"-=1.5");
tl.fromTo(".social , .menu",{
    y: "100%",
    opacity: 0
},{
    duration: 2,
    y: "0%",
    opacity: 1,
    delay: 0.25,
    stagger: 0.25
},"-=1");

/*==================== Image filter ====================*/
let innerCursor = document.querySelector(".inner-cursor"),
            outerCursor = document.querySelector(".outer-cursor"),
            cursorText = document.querySelector(".cursor-text");

        document.addEventListener("mousemove", e => {
            let x = e.clientX, y = e.clientY;
            innerCursor.style.left = outerCursor.style.left = `${x}px`;
            innerCursor.style.top = outerCursor.style.top = `${y}px`;
            
            // Smooth outer cursor movement
            outerCursor.style.transform = "translate(-50%, -50%) scale(1.2)";
            setTimeout(() => {
                outerCursor.style.transform = "translate(-50%, -50%) scale(1)";
            }, 50);
        });

        document.querySelectorAll("img").forEach(img => {
            img.addEventListener("mouseover", () => {
                cursorText.style.opacity = "1";
                innerCursor.style.opacity = "1";
            });

            img.addEventListener("mouseleave", () => {
                cursorText.style.opacity = "0";
                innerCursor.style.opacity = "0";
            });
        });