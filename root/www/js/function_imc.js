 function imc() {
    
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    
   
    
    
    var calculo = ((peso / altura) / altura) * 10000;
    
    var arredondado = parseFloat(calculo.toFixed(2));
     
    abrirJanelaModal();
     validarCampoVazio();
   
    
    if(calculo<18.5){
document.getElementById('resultadodoimc').textContent = "Você está abaixo do peso com este indice: " + arredondado;   
};
    if(calculo>=18.5 && calculo<24.9){
    
     document.getElementById('resultadodoimc').textContent = "Você está normal com este indice: " + arredondado;   
       
};

 if(calculo>=25 && calculo<29.9) {
document.getElementById('resultadodoimc').textContent = "Você está com sobre peso com este indice: " + arredondado;   ;
};
 if(calculo>=30 && calculo<39.9) {
document.getElementById('resultadodoimc').textContent = "Você está com obeisdade com este indice: " + arredondado;   
};
 if (calculo>40){
document.getElementById('resultadodoimc').textContent = "Você está com obesidade grave com este indice: " + arredondado;   
};

};

function validarCampoVazio() {
  
    var campo1 = document.getElementById('altura').textContent;
    var campo2 = document.getElementById('peso').textContent;
    
    if ((campo1 == "" ) || (isNaN(campo1))) {
            document.getElementById('resultadodoimc').textContent = "Preencha corretamente os campos.";                
        }
    if((campo2 == "" ) || (isNaN(campo2))){
        document.getElementById('resultadodoimc').textContent = "Preencha corretamente os campos.";
    }
};



