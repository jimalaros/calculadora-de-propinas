function Calcular() {
  
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  let propina = parseInt(numero1) * (parseInt(numero2) / 100);

  let total = parseInt(numero1) + propina;

  if (numero1 == "" && numero2 == "") {
    alert("INGRESE LOS DATOS")
  }

  else {
    document.getElementById('valorInicial').innerHTML =  Number(numero1).toFixed(2);
    document.getElementById('valorPropina').innerHTML =  Number(propina).toFixed(2);
    document.getElementById('total').innerHTML =  total.toFixed(2);
    document.querySelector(".resultados").style.opacity = "1";
  }
}

function Limpiar() {
  /**document.getElementById('numero1').value="";
  document.getElementById('numero2').value="";
  document.getElementById('valorInicial').innerHTML="";
  document.getElementById('valorPropina').innerHTML="";
  document.getElementById('total').innerHTML="";**/
  document.querySelector(".resultados").style.opacity = "0";
}
