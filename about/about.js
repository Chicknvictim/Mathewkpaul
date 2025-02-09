/** @format */
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".imageBoard",
      pin: true,
      start: "top top",
      end: "+=300%",
      scrub: 1,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    document.body,
    {
      delay: 0.3,
      backgroundColor: "#080002",
      
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h1",
    {
      opacity: 0,
      color: "#fff",
    },
    "start"
  )
  
  .to(
    ".upper-container span",
    {
      opacity: 0,
      color: "#000",
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.1,
      scale: 5,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 0.4,
      opacity: 1,
    },
    "start"
  )
  .to(
    ".suggestion",
    {
      delay: 0.2, // Adjust timing as needed
      opacity: 1,
    },
    "start"
  )
  .to(".scaleableImg", {
    opacity: 0,
  });
