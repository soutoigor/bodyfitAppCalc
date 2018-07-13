
(function (){
  var $nome = document.getElementById('nome');
  var $altura = document.getElementById('altura');
  var $peso = document.getElementById('peso');
  var $abdomen = document.getElementById('abdomen');
  var $quadril = document.getElementById('quadril');
  var $bracos = document.getElementById('bracos');
  var $coxas = document.getElementById('coxas');
  var $panturrilha = document.getElementById('panturrilha');

  var $consultar = document.getElementById('consultar');
  var $form = document.getElementById('frmMedidas');

  $consultar.addEventListener('click', getMedidas());

  $form.addEventListener('submit', setMedidas());




  function setMedidas(){
    return function(){
    window.localStorage.setItem("nome", $nome.value);
    window.localStorage.setItem("altura", $altura.value);
    window.localStorage.setItem("peso", $peso.value);
    window.localStorage.setItem("abdomen", $abdomen.value);
    window.localStorage.setItem("quadril", $quadril.value);
    window.localStorage.setItem("bracos", $bracos.value);
    window.localStorage.setItem("coxas", $coxas.value);
    window.localStorage.setItem("panturrilha", $panturrilha.value);

}
}

  function getMedidas(){
    return function (){

    }
  }






    })()
