var metodo = document.getElementById("s-metod");
var formCesar = document.getElementById("formCesar");
var formBase = document.getElementById("formBase");
var radioCesar = document.querySelectorAll("radio");
var radioBase = document.querySelectorAll("radio2");

metodo.addEventListener("click", function () {
  if (metodo.value == 0) {
    formCesar.style.display = "none";
    formBase.style.display = "none";
  } else if (metodo.value == 1) {
    formCesar.style.display = "flex";
    formBase.style.display = "none";
  } else if (metodo.value == 2) {
    formBase.style.display = "flex";
    formCesar.style.display = "none";
  }
});

radioCesar.addEventListener("click", function () {
  if (radioCesar[0].checked) {
    btnCodCesar.style.display = "flex";
    btnDecodCesar.style.display = "none";
  } else if (radioCesar[1].checked) {
    btnDecodCesar.style.display = "flex";
    btnCodCesar.style.display = "none";
  }
});
