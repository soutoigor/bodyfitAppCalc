(function () {
        'use strict';

       
    
        var $altura = document.getElementById('alturaImc');
        var $peso = document.getElementById('pesoImc');

        var $btnCalcular = document.getElementById('calcular');
    
        $btnCalcular.addEventListener('click', callResultado());

               

        function callResultado() {
            return function () {
               
                abrirJanelaModal();
                
              
                viewResultado(calculo($peso.value, $altura.value));
                
            }
        }

        function viewResultado(imc) {
            var resultado = document.getElementById('resultadodoimc');
            
            if (imc < 18.5) {
                resultado.textContent = "Você está abaixo do peso com este indice: " + imc;
            }

            if (imc >= 18.5 && imc < 24.9) {

                resultado.textContent = "Você está normal com este indice: " + imc;

            }

            if (imc >= 25 && imc < 29.9) {
                resultado.textContent = "Você está com sobre peso com este indice: " + imc;
            }
            if (imc >= 30 && imc < 39.9) {
                resultado.textContent = "Você está com obeisdade com este indice: " + imc;
            }
            if (imc > 40) {
                resultado.textContent = "Você está com obesidade grave com este indice: " + imc;
            }

        }
    
     function calculo(peso, altura) {
            var result = ((peso / altura) / altura) * 10000;
            result = parseFloat(result).toFixed(2);
            return result;
                
        }
    


})()