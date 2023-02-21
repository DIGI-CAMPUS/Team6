let mouseCursor = document.querySelector(".cursor");
let headTitle = document.querySelector("h1");
let crdHdr = document.querySelector(".card-header");
  //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
//   window.addEventListener("scroll", cursor);
//   window.addEventListener("mousemove", cursor);
//   //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
//   function cursor(e) {
//     mouseCursor.style.left = e.pageX + "px";
//     mouseCursor.style.top = e.pageY - scrollY + "px";
// }


headTitle.addEventListener("mouseover", () => {
  mouseCursor.classList.add("cursor-grow");
  mouseCursor.style.zIndex = "-1";
  headTitle.classList.add("hovered-h1");
  crdHdr.classList.add("hvrdCrdHdr");
});
headTitle.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("cursor-grow");
  mouseCursor.style.zIndex = "1000";
  headTitle.classList.remove("hovered-h1");
  crdHdr.classList.remove("hvrdCrdHdr");
});