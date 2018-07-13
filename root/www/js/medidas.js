(function (){
    
    document.querySelector('#btn-show-medidas').addEventListener('click', function(){
        
       
        $(this).parent().find('div.accordion').slideToggle("slow");
        
           // document.querySelector('#area-medidas').className = "show-insere-medidas";
         //   document.querySelector('#area-medidas').style.transition = "all 2s linear"; 
        
            
    })
    
    
    
})()