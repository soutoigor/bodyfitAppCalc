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
        valida[i].setAttribute("onkeypress","return SomenteNumero(event)");
    }
    
    
    
    
    
    })()

function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}