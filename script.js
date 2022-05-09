const topPart = document.querySelector(".top");
const Part = document.querySelector(".bottom");
const mainDiv = document.querySelector(".main-div");

console.log(topPart);
topPart.addEventListener("mouseenter", () => {
  console.log(1);
  topPart.classList.add("hover");
  mainDiv.classList.add("hover");
});
topPart.addEventListener("mouseleave", () => {
  console.log(2);
  topPart.classList.remove("hover");
  mainDiv.classList.remove("hover");
});

bottomPart.addEventListener("mouseenter", () => {
  console.log(3);
  bottomPart.classList.add("hover");
  mainDiv.classList.add("hover");
});
bottomPart.addEventListener("mouseleave", () => {
  console.log(4);
  bottomPart.classList.remove("hover");
  mainDiv.classList.remove("hover");
});
