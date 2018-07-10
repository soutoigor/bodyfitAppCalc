function yesnoCheck(that) {
        if (that.value == "feminino") {
            document.getElementById("feminino").style.display = "block";
        } else {
            document.getElementById("feminino").style.display = "none";
        }
    }



    
    
function abrirJanelaModal(){
    $('#modal01').modal();
};

$(".ttp").tooltip();

   
    
 function getRadioValor(name){
       
  var rads = document.getElementsByName(name);
   
  for(var i = 0; i < rads.length; i++){
   if(rads[i].checked){
    return rads[i].value;
   }
   
  }
   
  return null;
 }

function validaForm(...inputs){
        for(var i = 0; i < inputs.length; i++){
            
            if(inputs[i].value.length > 3){
                limitaCampo(inputs[i]);
            }
        }
    }
    
    function limitaCampo(campo){
        
       
  var max_numeros = 3;
        console.log('funfou');
  if(campo.value.length > max_numeros) {
    campo.value = campo.value.substr(0, max_numeros);
      
  }
}