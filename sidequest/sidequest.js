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
      color: "rgb(127 10 43)",
    },
    "start"
  )
  .to(
    "#scaleableImg1",
    {
      scale: 10,
      x: -1500,
    },
    "start"
  )
  .to(
    "#scaleableImg2",
    {
      scale: 10,
      x: -2500,
    },
    "start"
  )
  .to(
    "#scaleableImg3",
    {
      scale: 10,
      x: -2000,
    },
    "start"
  )
  .to(
    "#scaleableImg4",
    {
      scale: 10,
      x: 3000,
    },
    "start"
  )
  .to(
    "#scaleableImg5",
    {
      scale: 10,
      x: 2000,
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
      delay: 0.1, // Adjust timing as needed
      opacity: 1,
    },
    "start"
  )
  .to(".scaleableImg", {
    opacity: 0,
  });

  
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    direction: "horizontal",
  });

  let blocks = document.querySelectorAll(".block[data-block-section]");
  scroll.on("scroll", (args) => {
    blocks.forEach((block) => {
      let attr = block.getAttribute("data-block-section");
      let section = document.querySelector(
        `section[data-block-section='${attr}']`
      );

      if (section.getBoundingClientRect().left <= block.offsetWidth * attr) {
        block.classList.add("fixed");
        block.classList.remove("init");
        block.classList.remove("active");
        block.style.left = "";
      } else if (
        section.getBoundingClientRect().left >=
        window.innerWidth - block.offsetWidth * (blocks.length - attr)
      ) {
        block.classList.add("init");
        block.classList.remove("active");
        block.classList.remove("fixed");
        block.style.left = "";
      } else {
        block.classList.add("active");
        block.classList.remove("init");
        block.classList.remove("fixed");
      }

      if (block.classList.contains("active")) {
        block.style.left = section.getBoundingClientRect().left + "px";
      }
    });
  });