let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll('a'));

console.log(links);

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
    link.addEventListener("mouseover", () => {
        outerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        outerCursor.classList.remove("grow");
    });
});

/*==================== Buttonsection ====================*/
let button = document.querySelector('button');  // Select the button element

console.log(button);

button.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
});

button.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
});

button.addEventListener("mouseover", () => {
    outerCursor.classList.add("grow");
});

button.addEventListener("mouseleave", () => {
    outerCursor.classList.remove("grow");
});
/*==================== Mousepointerjs.end ====================*/
/*==================== Box openingjs.start ====================*/
let lastScrollY = 0;

        window.addEventListener('scroll', function() {
            const box = document.getElementById('box');
            const text = document.getElementById('text');
            const worksSection = document.getElementById('container');
            const scrollPos = window.scrollY;

            // Detect scroll direction
            if (scrollPos > lastScrollY) {  // Scrolling down
                if (scrollPos > 1300) {
                    box.style.height = '100vh';
                    box.style.width = '100%';
                }
                if (scrollPos > 1600) {
                    text.children[0].style.opacity = '1';
                }
                if (scrollPos > 1800) {
                    text.children[1].style.opacity = '1';
                }
                if (scrollPos > 2500) {
                    box.style.opacity = '0';
                    worksSection.classList.add('visible');
                }
            } else {  // Scrolling up
                if (scrollPos < 1700) {
                    box.style.height = '0';
                    box.style.width = '100px';
                }
                if (scrollPos < 1900) {
                    text.children[0].style.opacity = '0';
                }
                if (scrollPos < 2100) {
                    text.children[1].style.opacity = '0';
                }
                if (scrollPos < 2500) {
                    box.style.opacity = '1';
                    worksSection.classList.remove('visible');
                }
            }

            lastScrollY = scrollPos;  // Update last scroll position
        });
        /*==================== Box openingjs.end ====================*/
        /*==================== image carousel.start ====================*/
        const tl = gsap.timeline();
        tl.from(".img, .heading, .menu, h1, p, .bottom-section", {
        duration: 1,
        y: 200,
        opacity: 0,
        stagger: {
          amount: 0.5,
        },
      });

         /*==================== Button tweaking ====================*/
      function shareWebsite() {
        if (navigator.share) {
          navigator.share({
            title: document.title,
            url: window.location.href
          })
          .then(() => console.log('Thanks for sharing!'))
          .catch((error) => console.log('Error sharing:', error));
        } else {
          alert('Web Share API is not supported on this browser.');
        }
      }