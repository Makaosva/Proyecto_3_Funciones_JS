/*-----------PARTE 3.2-------*/

const ele_az = document.getElementById("col_az");
const ele_ro = document.getElementById("col_ro");
const ele_ve = document.getElementById("col_ve");
const ele_am = document.getElementById("col_am");

const color = "black";

ele_az.addEventListener("click", function () {
  ele_az.style.backgroundColor = color;
  ele_ro.style.backgroundColor = "red";
  ele_ve.style.backgroundColor = "green";
  ele_am.style.backgroundColor = "yellow";
});

ele_ro.addEventListener("click", function () {
  ele_az.style.backgroundColor = "blue";
  ele_ro.style.backgroundColor = color;
  ele_ve.style.backgroundColor = "green";
  ele_am.style.backgroundColor = "yellow";
});

ele_ve.addEventListener("click", function () {
  ele_az.style.backgroundColor = "blue";
  ele_ro.style.backgroundColor = "red";
  ele_ve.style.backgroundColor = color;
  ele_am.style.backgroundColor = "yellow";
});

ele_am.addEventListener("click", function () {
  ele_az.style.backgroundColor = "blue";
  ele_ro.style.backgroundColor = "red";
  ele_ve.style.backgroundColor = "green";
  ele_am.style.backgroundColor = color;
});

/*---------PARTE 3.3 -----------*/
const key = document.getElementById("key");
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "lightblue";
  }
});

/*--------PARTE 3.4-------------*/
const key2 = document.getElementById("key2");
document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    key2.style.backgroundColor = "purple";
  } else if (event.key === "w") {
    key2.style.backgroundColor = "gray";
  } else if (event.key === "e") {
    key2.style.backgroundColor = "brown";
  }
});
