btn = document.querySelectorAll("button");
inp = document.querySelector("input");

console.log(btn[0]);

const arr = [0, 1, 2];
function clickHandler(e) {
  console.log(evnet);
}
arr.map((item) => btn[item].addEventListener("click", clickHandler));
