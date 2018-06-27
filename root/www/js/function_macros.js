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
            
            
             criaTabelaMacros();
            
            
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
    
    function criaTabelaMacros(){
        var $TabelaDieta = document.getElementById('tabelaDieta');
        calculoMacros(calculoCalorias($gasto.value));
        
        //criação linha tabela
        var $linha - document.createElement("tr");
        var $tdCarboidrato = document.createElement("td");
        var $tdGordura = document.createElement("td");
        var $tdProteina = document.createElement("td");
        var $tdCaloria = document.createElement("td");
        
        //Valores 
        var tdCarboidratoValue = document.createTextNode(carboidrato);
        var tdGorduraValue = document.createTextNode(gordura);
        var tdProteinaValue = document.createTextNode(proteina);
        var tdCaloriasValue = document.createTextNode(calorias);
        
        //Vincula valores nas tds da tabela
        $tdCarboidrato.appendChild(tdCarboidratoValue);
        $tdGordura.appendChild(tdGorduraValue);
        $tdProteina.appendChild(tdProteinaValue);
        $tdCalorias.appendChild(tdCaloriasValue);   
        $linha.appendChild($tdCarboidrato);
        $linha.appendChild($tdGordura);
        $linha.appendChild($tdProteina);
        $linha.appendChild($tdCalorias);
        
        //vinculando TDs na tabela
        $TabelaDieta.appendChild($linha);
        
        
        
        
        
        
    
    }
    
    function calculoMacros(calorias){
        
        var proteina = calorias *= 0.15;
        var gordura = calorias *= 0.25;
        var carbo = calorias *= 0.60;
        
    }
    
})()