(function () {
    'use strict';



    var $altura = document.getElementById('alturaImc');
    var $peso = document.getElementById('pesoImc');
    var $form = document.getElementById('formImc');
    
 
    
    $form.addEventListener('submit', function (e) {
        
        e.preventDefault();
        callResultado();
    })



    function callResultado() {

        abrirJanelaModal();


        viewResultado(calculo($peso.value, $altura.value));

    }

    function viewResultado(imc) {
        var resultado = document.getElementById('resultadodoimc');

        if (imc < 18.5) {
            resultado.innerHTML = "<span>" + imc + "</span><br><br>Você está <br><b>Abaixo do Peso</b>.";
        }

        if (imc >= 18.5 && imc < 24.9) {

            resultado.innerHTML = "<span>" + imc + "</span><br><br>Você está <br><b>Normal</b>.";

        }

        if (imc >= 25 && imc < 29.9) {
            resultado.innerHTML = "<span>" + imc + "</span><br><br>Você está com <br><b>Sobre Peso</b>.";
        }
        if (imc >= 30 && imc < 39.9) {
            resultado.innerHTML = "<span>" + imc + "</span><br><br>Você está com <br><b>Obesidade</b>.";
        }
        if (imc > 40) {
            resultado.innerHTML = "<span>" + imc + "</span><br><br>Você está com <br><b>Obesidade Grave</b>.";
        }

    }

    function calculo(peso, altura) {
        var result = ((peso / altura) / altura) * 10000;
        result = parseFloat(result).toFixed(2);
        return result;

    }

   
   
    

})()