// Mudar Formulario do Cifra de César para o Base64

var metodo = document.getElementById("s-metod");
var formCesar = document.getElementById("formCesar");
var formBase = document.getElementById("formBase");

metodo.addEventListener("change", function () {
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
    btnCodDecod.innerHTML = "Resultado codificado:";
  }
});

radioCesar[1].addEventListener("click", function () {
  if (radioCesar[1].checked) {
    btnCodDecod.innerHTML = "Resultado decodificado:";
  }
});

radioBase[0].addEventListener("click", function () {
  if (radioBase[0].checked) {
    btnCodDecod2.innerHTML = "Resultado codificado:";
  }
});

radioBase[1].addEventListener("click", function () {
  if (radioBase[1].checked) {
    btnCodDecod2.innerHTML = "Resultado decodificado:";
  }
});

// Criptografia Cifra de César

var entrada = document.getElementById("entrada");
var saida = document.getElementById("saida");
var chavePasso = document.getElementById("chavePasso");
var valueChave;

entrada.addEventListener("keyup", function () {
  if (radioCesar[0].checked) {
    var valueText = entrada.value.split("");
    valueChave = parseInt(chavePasso.value);
    saida.value = codifica(valueText, valueChave);
  } else {
    var valueText = entrada.value.split("");
    valueChave = parseInt(chavePasso.value);
    saida.value = decodifica(valueText, valueChave);
  }
});

function codifica(texto, chavePasso) {
  return (
    texto
      // map é um for que mapeia o array
      .map((str) => {
        // famosa arrow function
        var cripto = str.charCodeAt();
        // limitar o ascii a letras do alfabeto maiusculas e minusculas
        if (cripto >= 65 && cripto <= 90) {
          // retornar em string
          return String.fromCharCode(((cripto - 65 + chavePasso) % 26) + 65);
        } else if (cripto >= 97 && cripto <= 122) {
          return String.fromCharCode(((cripto - 97 + chavePasso) % 26) + 97);
        } else {
          return str;
        }
      })
      // juntar tudo em uma string novamente
      .join("")
  );
}

function decodifica(texto, chavePasso) {
  return (
    texto
      // map é um for que mapeia o array
      .map((str) => {
        // famosa arrow function
        var cripto = str.charCodeAt();
        // limitar o ascii a letras do alfabeto maiusculas e minusculas
        if (cripto >= 65 && cripto <= 90) {
          // retornar em string
          return String.fromCharCode(cripto - 65 - chavePasso < 0)
            ? // if e else como operador condicional ternario
              String.fromCharCode(((cripto - 65 - chavePasso + 26) % 26) + 65)
            : String.fromCharCode(((cripto - 65 - chavePasso) % 26) + 65);
        } else if (cripto >= 97 && cripto <= 122) {
          return String.fromCharCode(cripto - 97 - chavePasso < 0)
            ? String.fromCharCode(((cripto - 97 - chavePasso + 26) % 26) + 97)
            : String.fromCharCode(((cripto - 97 - chavePasso) % 26) + 65);
        } else {
          return str;
        }
      })
      // juntar tudo em uma string novamente
      .join("")
  );
}

// Criptografia do Base64
var entradaBase = document.getElementById("entrada2");
var saida2 = document.getElementById("saida2");
var baseValue;

entradaBase.addEventListener("keyup", function () {
  baseValue = entradaBase.value;
  if (radioBase[0].checked) {
    saida2.value = btoa(baseValue);
  } else if (radioBase[1].checked) {
    saida2.value = atob(baseValue);
  } else {
    return 0;
  }
});
