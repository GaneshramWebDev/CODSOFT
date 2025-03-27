let search = document.querySelector(".search-box");

document.getElementById("search-icon").addEventListener("click", () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
});


let navbar = document.querySelector(".navbar");

document.getElementById("menuu").addEventListener("click", () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
});


window.onscroll=()=>{
    search.classList.remove("active");
    navbar.classList.remove("active");
}



let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

ScrollReveal({
  reset: false, // Prevents infinite reload
  distance: "20px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
  viewFactor: 0.3,
  mobile: true,
});

// Reveal sections
ScrollReveal().reveal("header", { origin: "top" });
ScrollReveal().reveal(".home-text, .about-text", { origin: "left" });
ScrollReveal().reveal(".home-img, .about-img", { origin: "right" });
ScrollReveal().reveal(".products-container, .customers-container", {
  origin: "top",
  interval: 200,
});
ScrollReveal().reveal(".newsletter", { origin: "bottom", interval: 200 });
