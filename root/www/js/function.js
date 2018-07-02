function yesnoCheck(that) {
        if (that.value == "feminino") {
            document.getElementById("feminino").style.display = "block";
        } else {
            document.getElementById("feminino").style.display = "none";
        }
    }


$('input').on("input", function(e) {
    $(this).val($(this).val().replace(/,/g, ""));
});
    
    
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

