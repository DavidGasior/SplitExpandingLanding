const topPart = document.querySelector(".top");
const bottomPart = document.querySelector(".bottom");
const mainDiv = document.querySelector(".main-div");

console.log(topPart);
topPart.addEventListener("mouseenter", () => {
  topPart.classList.add("hover");
  mainDiv.classList.add("hover");
});
topPart.addEventListener("mouseleave", () => {
  topPart.classList.remove("hover");
  mainDiv.classList.remove("hover");
});

bottomPart.addEventListener("mouseenter", () => {
  bottomPart.classList.add("hover");
  mainDiv.classList.add("hover");
});
bottomPart.addEventListener("mouseleave", () => {
  bottomPart.classList.remove("hover");
  mainDiv.classList.remove("hover");
});
