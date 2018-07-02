
  function validaForms(){
      
   
    /*  if(document.getElementById('sexo').value !== "feminino"){
          document.getElementById('feminino').removeChild(document.getElementById('quadril'));
      } */
      
    var campos = document.querySelectorAll('input');

    for(var i = 0; i < campos.length; i++){
    
            if(!campos[i].value){
                alert("Preencha o campo " + campos[i].getAttribute("name"));
                
                history.go();
                
            }
        
        if((campos[i].getAttribute("name") === "altura") && (campos[i].value > 230) || campos[i].value < 0){
                alert("Insira uma altura válida!");
                history.go();
            }
        
        if((campos[i].getAttribute("name") === "peso") && (campos[i].value > 230) || campos[i].value < 0){
                alert("Insira um peso válido!");
                history.go();
            }
        
        if((campos[i].getAttribute("name") === "abdomen") && (campos[i].value > 200) || campos[i].value < 0){
                alert("Insira um valor válido para o abdômen!");
                history.go();
            }
        
        if((campos[i].getAttribute("name") === "pescoco") && (campos[i].value > 50) || campos[i].value < 0){
                alert("Insira um valor válido para o pescoço!");
                history.go();
            }
        
        if((campos[i].getAttribute("name") === "idade") && (campos[i].value > 120) || campos[i].value < 0){
                alert("Insira uma idade válida!");
                history.go();
            }
        
        
        }
      
    
  }