/*const ele = document.getElementById("ele1");

ele.addEventListener("click", function pintar() {
  ele.style.backgroundColor = "yellow";
});*/

const pintar = (ele, color) => (ele.style.backgroundColor = color);
ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
