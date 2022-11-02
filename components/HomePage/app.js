if (typeof window !== "undefined") {
  window.addEventListener("scroll", (e) => {
    const down_triangle = document.querySelector(".down_shape");
    const scrollY = window.scrollY;

    if (scrollY >= 100) {
      down_triangle.style.opacity = "0";
    } else {
      down_triangle.style.opacity = "1";
    }
  });
}
