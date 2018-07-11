
function botaoTrocaBF(){
    var botao = document.getElementById('botao-medir-bf');
      var titulo = document.getElementById('titulo-medir').textContent;
    medirAlturaBF();
    
};

function medirQuadril(){
  
    document.getElementById('botao-voltar').style.display = 'inline-block';
    
    document.getElementById('botao-medir-bf').style.display = 'none';
    
    document.getElementById('titulo-medir').textContent = "Quadril";
    
    document.getElementById('corpo-medir').textContent = "A medida do Quadril, só é feita para as mulheres, e deve-se levar em consideração a maior medida possível.";
    
    document.getElementById('botao-medir-bf').textContent = "Próximo >";
        
    document.getElementById('botao-voltar').setAttribute("onclick","medirPescoco();");
    
};

function medirPescoco(){
  
    document.getElementById('botao-voltar').style.display = 'inline-block';
    document.getElementById('botao-medir-bf').style.display = 'inline-block';
    
    document.getElementById('titulo-medir').textContent = "Pescoço";
    
    document.getElementById('corpo-medir').textContent = "A medida do pescoço deve ser feita logo acima do trapézio, tome cuidado para não levar o trapézio em consideração, isso pode aumentar o erro da medida, fazendo com que o seu BF pareça abaixo do que ele realmente é";
    
    document.getElementById('botao-medir-bf').textContent = "Próximo >";
    
    document.getElementById('botao-medir-bf').setAttribute("onclick","medirQuadril();");
    
    document.getElementById('botao-voltar').setAttribute("onclick","medirAbs();");
    
    
};

function medirAbs(){
    
     document.getElementById('botao-medir-bf').style.display = 'inline-block';
 
    document.getElementById('botao-voltar').style.display = 'inline-block';
    
    document.getElementById('titulo-medir').textContent = "Abdomen";
    
    document.getElementById('corpo-medir').textContent = "A medida da cintura deve ser feita na altura do umbigo soltando todo o ar, sem necessidade de murchar a barriga, apenas soltar todo ar;";
    
    document.getElementById('botao-medir-bf').textContent = "Próximo >";
    
    document.getElementById('botao-medir-bf').setAttribute("onclick","medirPescoco();");
    
    document.getElementById('botao-voltar').setAttribute("onclick","medirAlturaBF();");
    
    
};

function medirAlturaBF(){
    
     document.getElementById('botao-medir-bf').style.display = 'inline-block';
    
    document.getElementById('botao-voltar').style.display = 'none';
    
   document.getElementById('titulo-medir').textContent = "Altura";
   document.getElementById('corpo-medir').textContent = "Use uma fita métrica, uma régua improvisada ou outro para medir sua altura em centimetros, e coloque o resultado no campo \"altura\".";
    document.getElementById('botao-medir-bf').textContent = "Próximo >";
    var botao = document.getElementById('botao-medir-bf');
     botao.setAttribute("onclick","medirAbs();");
};

