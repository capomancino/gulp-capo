const scroll = document.querySelector(".scroll");

window.onscroll = () => {
  if (window.scrollY > 200) {
    scroll.classList.remove("scroll--hidden");
  } else if (window.scrollY < 200) {
    scroll.classList.add("scroll--hidden");
  }
};

scroll.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};