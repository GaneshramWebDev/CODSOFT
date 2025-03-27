const menuicon = document.querySelector("#menu-icon");
const navLInks = document.querySelector(".navLinks");

menuicon.addEventListener("click", () => {
  navLInks.classList.toggle("active");
});

ScrollReveal().reveal("#skills,#education, #projects, #contact", {
  origin: "bottom", 
  distance: "50px", 
  duration: 2000, 
  delay: 200, 
  easing: "ease-in-out",
  reset: true, 
});

document.addEventListener("DOMContentLoaded", function () {
  const trailContainer = document.createElement("div");
  trailContainer.style.position = "fixed";
  trailContainer.style.top = "0";
  trailContainer.style.left = "0";
  trailContainer.style.pointerEvents = "none";
  trailContainer.style.zIndex = "9999";
  document.body.appendChild(trailContainer);

  let circles = [];

  for (let i = 0; i < 15; i++) {
    let circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.width = "10px";
    circle.style.height = "10px";
    circle.style.backgroundColor = "black";
    circle.style.borderRadius = "50%";
    circle.style.opacity = "0.8";
    circle.style.transition = "transform 0.1s linear";
    trailContainer.appendChild(circle);
    circles.push(circle);
  }

  document.addEventListener("mousemove", (e) => {
    let { clientX: x, clientY: y } = e;

    circles.forEach((circle, index) => {
      setTimeout(() => {
        circle.style.transform = `translate(${x}px, ${y}px)`;
      }, index * 20);
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({ repeat: -1, yoyo: true }); 

  tl.fromTo(
    ".text h3",
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
  )
    .fromTo(
      ".text h1",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".text span",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
});

gsap.fromTo(
  ".Header",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" }
);

function changeBg(platform) {
  const body = document.body; 

  
  if (platform === "github") {
    body.style.backgroundColor = "#171515"; 
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 2000);
  } else if (platform === "linkedin") {
    body.style.backgroundColor = "#0077b5";
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 2000); 

  }

  // Set background styles
  body.style.backgroundSize = "contain";
  body.style.backgroundRepeat = "no-repeat"; 
  body.style.backgroundPosition = "center"; 
  body.style.opacity = "0.9"; // 

  setTimeout(() => {
    if (platform === "github") {
      window.location.href = "https://github.com/GaneshramWebDev";
    } else if (platform === "linkedin") {
      window.location.href =
        "https://www.linkedin.com/in/ganesh-ram-48120b34a/";
    }
  }, 500);
}
