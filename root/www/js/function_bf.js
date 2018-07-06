(function () {
    'use strict';

    var $altura = document.getElementById('altura');

    var $abdomen = document.getElementById('abdomen');

    var $pescoco = document.getElementById('pescoco');

    var $sexo = document.getElementById('sexo');

    document.getElementById('calcular').addEventListener('click', viewBF());



    function viewBF() {
        return function () {
            debugger;
            abrirJanelaModal();
            viewResultadoBF(calculoBF($sexo.value, parseFloat($altura.value), parseFloat($abdomen.value), parseFloat($pescoco.value)), $sexo.value);

        }
    }

    function calculoBF(sexo, altura, abdomen, pescoco){

        var resultado = 0;
        if (sexo === 'masculino') {

            resultado = 86.010 * Math.log10(abdomen - pescoco) - 70.041 * Math.log10(altura) + 30.30;

            return parseFloat(resultado.toFixed(2));
        }

        if (sexo === 'feminino') {
            var quadril = document.getElementById('quadril');

            resultado = 163.205 * Math.log10(abdomen + parseFloat(quadril.value) - pescoco) - 97.684 * Math.log10(altura) - 104.912;

            return parseFloat(resultado.toFixed(2));

        }

    }



    function viewResultadoBF(BF, sexoResult) {

        if (sexoResult === 'masculino') {

            if (BF > 0 && BF <= 6) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Nível de competidor";
            };

            if (BF <= 9) {

                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Bastante em forma";

            };

            if (BF <= 14) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Em forma";
            };

            if (BF <= 19) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Média";
            };

            if (BF <= 25) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Acima da média";
            };

            if (BF > 25) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Atenção! Obesidade!";
            };


        };



        if (sexoResult === 'feminino') {

            if (BF > 0 && BF <= 12) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Nível de competidor";
            };


            if (BF <= 15) {

                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Bastante em forma";

            };

            if (BF <= 20) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Em forma";
            };

            if (BF <= 25) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Média";
            };

            if (BF <= 30) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Acima da média";
            };

            if (BF > 30) {
                document.getElementById('resultadobf').textContent = "Seu BF é: " + BF + "% Atenção! Obesidade!";
            };

        }
    }

})()





/*function validarCampoVazioBF() {
  
    var campoAltura = document.getElementById('altura').value;
    var campoAbdomen = document.getElementById('abdomen').value;
    var campoPescoco = document.getElementById('pescoco').value;
    var campoSexo = document.getElementById('sexo').value;
    var campoQuadril = document.getElementById('quadril').value;
    
    
    if ((campoAltura == "" ) || (isNaN(campoAltura))) {
            document.getElementById('resultadodobf').textContent = "Preencha corretamente os campos.";                
        }
    if((campoAbdomen == "" ) || (isNaN(campoAbdomen))){
        document.getElementById('resultadodobf').textContent = "Preencha corretamente os campos.";
    }
    if((campoPescoco == "" ) || (isNaN(campoPescoco))){
        document.getElementById('resultadodobf').textContent = "Preencha corretamente os campos.";
    }
    if(campoSexo == "" ){
        document.getElementById('resultadodobf').textContent = "Preencha corretamente os campos.";
    }
    if((campoQuadril.style.display == "block") && (campoQuadril === null) ){
         document.getElementById('resultadodobf').textContent = "Preencha corretamente os campos.";
    }
};*/