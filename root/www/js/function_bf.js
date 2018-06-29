function bodyFat(){
     validaForms();
    abrirJanelaModal();
    //validarCampoVazioBF();
        
    var altura = parseFloat(document.getElementById('altura').value); 
   
    var abdomen = parseFloat(document.getElementById('abdomen').value);
   
    var pescoco = parseFloat(document.getElementById('pescoco').value);
   
    var quadril = parseFloat(document.getElementById('quadril').value);
    
    var sexo = String(document.getElementById('sexo').value);
    
    var resultado = 0;
     
    if(sexo == ""){
         document.getElementById('resultadobf').textContent = "Informe seu sexo";
    };
    
   if(sexo == 'masculino') {
    
     resultado = 86.010 * Math.log10(abdomen - pescoco) - 70.041 * Math.log10(altura) + 30.30;
    
        
        resultado = parseFloat(resultado.toFixed(2));
       
         
    if(resultado <= 6){
        document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Nível de competidor</b>";   
    };
    
     if(resultado >= 7 && resultado <= 9){
    
      document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Bastante em forma</b>";   
       
    };

     if(resultado >= 10 && resultado <= 14) {
      document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Em forma</b>";   
    };
    
     if(resultado >= 15 && resultado <= 19) {
      document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Média</b>";   
    };

     if (resultado >= 20 && resultado <= 25){
      document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Acima da média</b>";   
    };   
    
     if (resultado >= 26){
      document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Atenção! Obesidade!</b>";   
    };    
       
   };
    
    
    
    if(sexo == 'feminino'){
        resultado =  163.205 * Math.log10(abdomen + quadril - pescoco) - 97.684 * Math.log10(altura) - 104.912;
   
        resultado = parseFloat(resultado.toFixed(2));
        
        
            if(resultado <= 12){
            document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Nível de competidor</b>";   
        };

         if(resultado >= 13 && resultado <= 15){

          document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Bastante em forma</b>";   

        };

         if(resultado >= 16 && resultado <= 20) {
          document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Em forma</b>";   
        };

         if(resultado >= 21 && resultado <= 25) {
          document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Média</b>";   
        };

         if (resultado >= 26 && resultado <= 30){
          document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Acima da média</b>";   
        };   

         if (resultado >= 31){
          document.getElementById('resultadobf').innerHTML = "<b>Seu BF é: " + resultado + "% <br>Atenção! Obesidade!</b>";   
        };    


    };
    
    
    
    
    
};








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