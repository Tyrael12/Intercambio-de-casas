setInterval('avanzaSlide()',5000);
var arrayImagenes = new Array(".img1",".img2",".img3",".img4",".img5");
var contador = 0;


function mostrar(img){
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeIn(1500);        
    });
}


function ocultar(img){
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeOut(1500);        
    });
}


function avanzaSlide(){
    ocultar(arrayImagenes[contador]);
    contador = (contador + 1) % 5;
    mostrar(arrayImagenes[contador]);
}
