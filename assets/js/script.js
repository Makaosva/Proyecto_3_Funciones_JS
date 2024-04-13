/*----------PARTE 2.1----------*/
/*function pintar() {
  ele.style.backgroundColor = "yellow";
}*/
const ele = document.getElementById("ele1");
//ele.addEventListener("click", pintar);
ele.addEventListener("click", function () {
  color = "green";
  console.log("color");
  ele.style.backgroundColor = color;
});
