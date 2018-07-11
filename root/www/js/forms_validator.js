(function (){
function limitaTotal(e){

        var input = e.target;
        var value = input.value;

        if (value.length <= 3) {
            return;
        }

        input.value = input.value.substr(0, 3); 
}
    
    
var valida = document.querySelectorAll('.valida');
    for(var i = 0; i < valida.length; i++){
        valida[i].addEventListener('input', limitaTotal);
    }
    
    
    })()