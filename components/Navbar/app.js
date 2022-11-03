if (typeof window !== "undefined") {
  window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector("nav");
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
      navbar.classList.add("nav_active");
    } else {
      navbar.classList.remove("nav_active");
    }
  });
}
