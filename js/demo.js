const carousel = document.querySelector(".caraousel");
const dragLeft = document.querySelector(".dragLeft");
const dragRight = document.querySelector(".dragRight");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  //records the initial cursor and scroll
  // position in the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragLeftbtn = () => {
  // carousel.scrollBy(400, 0);
  carousel.scrollBy(-firstCardWidth, 0);
};
const dragRighttbtn = () => {
  carousel.scrollBy(firstCardWidth, 0);
  // carousel.scrollBy(-400, 0);
};
const dragging = (e) => {
  // console.log(e.pageX); //returns the horizontal cordinate of mouse pointer
  //scrollLeft ets or return the number of pixels
  //an elements content is scrolled horizontally
  if (!isDragging) return;
  carousel.scrollLeft = e.pageX;
  //updartes the scroll position of the carousel
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
dragLeft.addEventListener("click", dragLeftbtn);
dragRight.addEventListener("click", dragRighttbtn);
