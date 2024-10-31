function eleccion(n) {  
    let video = document.getElementById("videoI");
    let videoD = document.getElementById("videoD");
    let puntajeB = document.getElementById("puntajeB");
    let puntajeJ = document.getElementById("puntajeA");
        switch (n) {
            case 1:
                video.src = "multimedia/piedraI.mp4";// Cambia a la nueva URL del video
                break;
            case 2:
                video.src = "multimedia/papelI.mp4"; 
                break;
            case 3:
                video.src = "multimedia/tijeraI.mp4";
                break;
        
            default:
                break;
        }
                video.autoplay = false;  // Quita el autoplay
                video.loop = false;
                video.load(); // Recarga el video con la nueva fuente
                video.play(); // Opcional: inicia la reproducción automáticamente
                
    function numeroAleatorioEntre(min, max) {//Genera el numero ramdom
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var bot = numeroAleatorioEntre(1, 3);
    
    switch (bot) {
        case 1:
            videoD.src = "multimedia/piedraD.mp4"; // Cambia a la nueva URL del video
            break;
        case 2:
            videoD.src = "multimedia/papelD.mp4"; 
            break;
        case 3:
            videoD.src = "multimedia/tijeraD.mp4";
            break;
    
        default:
            break;
    }
            videoD.autoplay = false;  // Quita el autoplay
            videoD.loop = false;//Quita el loop
            videoD.load(); // Recarga el video con la nueva fuente
            videoD.play(); // Opcional: inicia la reproducción automáticamente

    let empate = document.getElementById("empate");
            empate.innerHTML = "";
    puntaje(n, bot, puntajeB, puntajeJ);//Llama la funcion que hace que se sumen los puntajes
}

let contadorBot = 0, contadorPlayer = 0;//Contadores del puntaje
function puntaje(n, bot,puntajeB,puntajeJ) {
    
    let mensaje = document.getElementById("mensaje");
    if(n === bot){
        empate.innerHTML = "Empate";
    }
    if (n == 1 && bot == 2||n == 2 && bot == 3||n ==3 && bot == 1) {
        contadorBot++;
    }
    if (n == 2 && bot == 1 || n == 3 && bot == 2|| n == 1 && bot ==3) {
        contadorPlayer++;
    }
    if (contadorBot >= 5 || contadorPlayer >= 5) {
        if (contadorBot == 5) {
          mensaje.innerHTML = "Te gano la maquina";
        } else {
            mensaje.innerHTML = "le ganastes a la maquina";
        }
    } 
    if (contadorBot > 5 || contadorPlayer > 5) {
        contadorBot = "-";
        contadorPlayer = "-";
    }
        puntajeB.innerHTML = contadorBot;
        puntajeJ.innerHTML = contadorPlayer;
    
}

function reinicio() {
    let video = document.getElementById("videoI");
    video.src = "multimedia/aleteo1.mp4";
    video.autoplay = true;
    video.loop = true;
    video.load();
    video.play();

    let videoD = document.getElementById("videoD");
    videoD.src = "multimedia/aleteo2.mp4";
    videoD.autoplay = true;
    videoD.loop = true;
    videoD.load();
    videoD.play(); 


    let puntajeB = document.getElementById("puntajeB");
    let puntajeJ = document.getElementById("puntajeA");
    
    puntajeB.innerHTML = 0;
    puntajeJ.innerHTML = 0;
}


