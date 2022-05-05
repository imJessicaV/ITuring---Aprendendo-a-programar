function mostrarResultadoIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value / 100;
  var imc = peso / altura ** 2;
  var result = "";
  if (imc < 18.5) {
    window.alert("Você está abaixo do peso ideal");
  }
  if (imc >= 18.5 && imc <= 24.9) {
    result="Seu IMC está Normal!";
  } else if (imc >= 25.0 && imc <= 29.9) {
    result="Você está com Sobrepeso!";
  } else if (imc >= 30.0 && imc <= 40.0) {
    result="Você está com Obesidade!";
  } else if (imc > 40.0) {
    result="Você está com Obesidade Morbida";
  }
  document.getElementById("text_area").innerText = result;
}
