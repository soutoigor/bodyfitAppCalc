(function(){
   'use strict';
var $altura = document.getElementById('altura');
var $peso = document.getElementById('peso');
var $idade = document.getElementById('idade');
var $sexo = document.getElementById('sexo');
var $btnCalc = document.getElementById('calcular');


$btnCalc.addEventListener('click', mostraResultado());
  
    
    function mostraResultado(){
        return function (){
    $('#modal01').modal();
   
    var $resultadoTmb = document.getElementById('resultadodotmb');
    var $resultadoGastoCalorico = document.getElementById('resultadogastocalorico');
    var resultadoCalculoTMB = calculoTMB($altura.value, $peso.value, $idade.value, $sexo.value);
    var resultadoGastoCalorico = calculoGastoCalorico(resultadoCalculoTMB);
    
        $resultadoTmb.innerHTML = "Sua Taxa Metabólica Basal é: <br><strong>" + resultadoCalculoTMB + " Kcal</strong>";
        $resultadoGastoCalorico.innerHTML = "Seu Gasto Calórico Diário é: <br><strong>" + resultadoGastoCalorico + " Kcal</strong>";
    window.localStorage.setItem("gasto_calorico", resultadoGastoCalorico);
       
        }
            }
    
   function calculoTMB(altura, peso, idade, sexo){
        var resultadoTmb = 0;
       if(sexo === 'masculino'){
           resultadoTmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
       }
       else{
           resultadoTmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
       }
       
     
       return parseInt(resultadoTmb);
        }
    
    
    function calculoGastoCalorico(tmb){
       var $atividade = getRadioValor('atividade');
        
        if($atividade === "atv1"){
            return parseInt(tmb * 1.2);
        }
            else if($atividade === "atv2"){
                return parseInt(tmb * 1.375);
            }
                else if($atividade === "atv3"){
                    return parseInt(tmb * 1.55);
                }
                    else if($atividade === "atv4"){
                        return parseInt(tmb * 1.725);
                    }
                        else if($atividade === "atv5"){
                            return parseInt(tmb * 1.9);
                        }
        
                    }
    


})()