const share = document.querySelector(".article .right .user > i");
const component = document.querySelector(
  ".article .right .user .share-component"
);
share.addEventListener("click", (e) => {
  component.classList.toggle("show");
});
