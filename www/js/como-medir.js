

function medirAltura(){
   document.getElementById('titulo-medir').textContent = "Altura";
   document.getElementById('corpo-medir').textContent = "Use uma fita métrica, uma régua improvisada ou outro para medir sua altura em centimetros, e coloque o resultado no campo \"altura\".";
    document.getElementById('botao-medir').textContent = "Próximo >";
    var botao = document.getElementById('botao-medir');
     botao.setAttribute("onclick","medirPeso();");
};

function medirPeso(){
   document.getElementById('titulo-medir').textContent = "Peso";
  
   document.getElementById('corpo-medir').textContent = "Use uma balança para se pesar e coloque seu peso em kg no campo solicitado.";
    document.getElementById('botao-medir').textContent = "< Anterior";
    var botao = document.getElementById('botao-medir');
    botao.setAttribute("onclick","medirAltura();");
};

function botaoTroca(){
    var botao = document.getElementById('botao-medir');
      var titulo = document.getElementById('titulo-medir').textContent;
    medirAltura();
    
   
   
    
    
};