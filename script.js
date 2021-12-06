// Mudar Formulario do Cifra de César para o Base64

var metodo = document.getElementById("s-metod");
var formCesar = document.getElementById("formCesar");
var formBase = document.getElementById("formBase");

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

// Mudar botão de decodificar e codificar

var radioCesar = document.querySelectorAll(".radio");
var radioBase = document.querySelectorAll(".radio2");
var btnCodDecod = document.getElementById("codDec");
var btnCodDecod2 = document.getElementById("codDec2");

radioCesar[0].addEventListener("click", function () {
  if (radioCesar[0].checked) {
    btnCodDecod.innerText = "Codificar";
  }
});

radioCesar[1].addEventListener("click", function () {
  if (radioCesar[1].checked) {
    btnCodDecod.innerText = "Decodificar";
  }
});

radioBase[0].addEventListener("click", function () {
  if (radioBase[0].checked) {
    btnCodDecod2.innerText = "Codificar";
  }
});

radioBase[1].addEventListener("click", function () {
  if (radioBase[1].checked) {
    btnCodDecod2.innerText = "Decodificar";
  }
});
