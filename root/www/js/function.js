function trocaSexo(that) {
        if (that.value == "feminino") {
            document.getElementById("feminino").style.display = "block";
            document.getElementById("quadril").setAttribute("required", "");
        } else {
            document.getElementById("feminino").style.display = "none";
            document.getElementById("quadril").removeAttribute("required");

        }
    }

/*Teste ATOM*/



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

