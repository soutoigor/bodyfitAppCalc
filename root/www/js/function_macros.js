(function(){
    'use strict';
var $gasto = document.getElementById("gasto");
var $peso = document.getElementById('peso');
var $btnSetGasto = document.getElementById('btnSetGasto');
var $btnResultado = document.getElementById('mostraResultado');
var $btnLimpar = document.getElementById('limparTabela');
var proteina = 0;
var gordura = 0;
var carbo = 0;
    
    $btnSetGasto.addEventListener('click', setStorageValues());
    
    $btnResultado.addEventListener('click', viewResultado());
    
        
    
    function viewResultado(){
        return function (){

            abrirJanelaModal();            
             criaTabelaMacros();
            
            
        }
    }
    
    
    function setStorageValues(){
        return function (){
        var gastoCalorico = window.localStorage.getItem("gasto_calorico");
        var peso = window.localStorage.getItem("peso");
        $gasto.value = gastoCalorico;
        $peso.value = peso;
    }
    }
    
    function calculoCalorias(gasto){
        var objetivo = getRadioValor('objetivo');
        
        if(objetivo === "perder")  return parseInt(gasto - 300);
    
        if(objetivo === "manter")  return parseInt(gasto);
        
        if(objetivo === "ganhar")  return parseInt(gasto + 300);
    }
    
    function criaTabelaMacros(){
        var $TabelaDieta = document.getElementById('tabelaDieta');
        var objetivo = getRadioValor('objetivo');
        objetivo = objetivo.charAt(0).toUpperCase() + objetivo.slice(1);
        var valorCaloriasCalculadas =  parseInt(calculoMacros(calculoCalorias(parseInt($gasto.value)), parseInt($peso.value)));
        
        //criação linha tabela
        var $linha = document.createElement("tr");
        $linha.setAttribute("class", "linhaTr");
        var $tdObjetivo = document.createElement("th");
        var $tdCarboidrato = document.createElement("td");
        var $tdGordura = document.createElement("td");
        var $tdProteina = document.createElement("td");
        var $tdCaloria = document.createElement("td");
        
        //Valores 
        var tdObjetivoValue = document.createTextNode(objetivo);
        var tdCarboidratoValue = document.createTextNode(parseInt(carbo));
        var tdGorduraValue = document.createTextNode(parseInt(gordura));
        var tdProteinaValue = document.createTextNode(parseInt(proteina));
        var tdCaloriasValue = document.createTextNode(valorCaloriasCalculadas);
        
        //Vincula valores nas tds da tabela
        $tdObjetivo.appendChild(tdObjetivoValue);
        $tdCarboidrato.appendChild(tdCarboidratoValue);
        $tdGordura.appendChild(tdGorduraValue);
        $tdProteina.appendChild(tdProteinaValue);
        $tdCaloria.appendChild(tdCaloriasValue);   
        $linha.appendChild($tdObjetivo);
        $linha.appendChild($tdCarboidrato);
        $linha.appendChild($tdGordura);
        $linha.appendChild($tdProteina);
        $linha.appendChild($tdCaloria);
        
        //vinculando TDs na tabela
        $TabelaDieta.appendChild($linha);
        
         function limpaTabela(linha){
             return function (){
               if($linha.parentNode){
                 $linha.parentNode.removeChild( $linha );
               }
        }
        }
           if($linha){ $btnLimpar.addEventListener('click', limpaTabela()) };

    }
    
   
    
    
    function calculoMacros(calorias, peso){

        proteina =  peso * 2.2;
        var caloriaSoma = proteina * 4; 
        gordura  =  peso * 0.9; 
        caloriaSoma += gordura * 9;
        carbo = (calorias - caloriaSoma) / 4 ;
        
        return calorias;
    }  
    
    
    
})()