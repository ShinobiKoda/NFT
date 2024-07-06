const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

const prevButton = document.querySelectorAll(".prev");
const nextButton = document.querySelectorAll(".next");
const comments = document.querySelectorAll(".comment");
let currentIndex = 0;

prevButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentIndex > 0) {
      comments[currentIndex].classList.remove("active");
      comments[--currentIndex].classList.add("active");
    }
  });
});

nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentIndex < comments.length - 1) {
      comments[currentIndex].classList.remove("active");
      comments[++currentIndex].classList.add("active");
    }
  });
});
