(function () {
    'use strict';



    var rand = sortear(5);

    window.addEventListener('load', function () {

        document.querySelector('.background-index').style.backgroundImage = "url('img/" + rand + ".jpg')";

    });



function sortear(n) {
        var _n = n || 1;
        var nSorteado = Math.random();
        nSorteado = nSorteado * _n;
        nSorteado = Math.ceil(nSorteado);


        return nSorteado;
    }
    


})();