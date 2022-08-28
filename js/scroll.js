window.onscroll = function(){
    
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("texto");




    elemento1.style.top = posicion * 0.2 + "px";
    
}

