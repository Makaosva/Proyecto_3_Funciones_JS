/*----------PARTE 2.1----------*/
/*function pintar() {
  ele.style.backgroundColor = "yellow";
}*/
//console.log("antes--->", ele);
const ele = document.getElementById("ele1");

//ele.addEventListener("click", pintar);

/*----------PARTE 2.2-----------*/
/*
ele.addEventListener("click", function () {
  ele.style.backgroundColor = "Yellow";
});
*/
/*----------PARTE 2.3-----------*/
var color = "green";

ele.addEventListener("click", function (color) {
  color = "yellow";
  ele.style.backgroundColor = color;
});
