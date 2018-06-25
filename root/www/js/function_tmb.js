(function(){
   'use strict';
var $altura = document.getElementById('altura');
var $peso = document.getElementById('peso');
var $idade = document.getElementById('idade');
var $sexo = document.getElementById('sexo');
var $atividade = getRadioValor('atividade');
var $btnCalc = document.getElementById('calcular');


$btnCalc.addEventListener('click', function(){
        mostraResultado($altura.value, $peso.value, $idade.value, $sexo.value, $atividade);


    });
    
    
    
    function mostraResultado(altura, peso, idade, sexo, atividade){
    
    $('#modal01').modal();
    
    var $resultadoTmb = document.getElementById('resultadodotmb');
    var $resultadoGastoCalorico = document.getElementById('resultadogastocalorico');
   
    $resultadoTmb.innerHTML = altura;
    $resultadoGastoCalorico.innerHTML = peso + " " + idade + " " + sexo + " " + atividade;
    
    
}
    
    function getRadioValor(name){
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }
    
    
})()