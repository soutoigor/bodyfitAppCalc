(function(){
    'use strict';
var $gasto = document.getElementById("gasto");
var $btnSetGasto = document.getElementById('btnSetGasto');
var $btnResultado = document.getElementById('mostraResultado');

    
    $btnSetGasto.addEventListener('click', setGasto());
    
    $btnResultado.addEventListener('click', viewResultado());
    
        
    
    function viewResultado(){
        return function(){
            abrirJanelaModal();
            
            
            viewTabelaDieta();
            
            
        }
    }
    
    
    function setGasto(){
        return function(){
        var gastoCalorico = window.localStorage.getItem("gasto_calorico");
        $gasto.value = gastoCalorico;
    }
    }
    
    function calculoCalorias(gasto){
        var objetivo = getRadioValor('objetivo');
        
        if(objetivo === "perder")  return parseInt(gasto - (gasto * 0.15));
        
        if(objetivo === "manter")  return gasto;
        
        if(objetivo === "ganhar")  return parseInt(gasto * 1.15);
    }
    
    function viewTabelaDieta(){
        var $divTabelaDieta = document.getElementById('divTabelaDieta');
       
        calculoMacros(calculoCalorias($gasto.value));
        
    
    }
    
    function calculoMacros(calorias){
        
        var proteina = calorias *= 0.15;
        var gordura = calorias *= 0.25;
        var carbo = calorias *= 0.60;
        
    }
    
})()