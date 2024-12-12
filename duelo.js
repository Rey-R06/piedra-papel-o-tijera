// Mostrar el saludo con el nombre del jugador
let saludo = document.getElementById("saludo");
let compararJugador = localStorage.getItem("nombre");
let jugadores = JSON.parse(localStorage.getItem("jugadores"));// Obtener el nombre desde localStorage
let idjugadorActual;
// Variables para llevar el puntaje
let contadorBot = 0, contadorPlayer = 0;
for (let i = 0; i < jugadores.length; i++) {
    if (jugadores[i].nombre == compararJugador) {
        idjugadorActual = i;
    } 
}
        saludo.innerHTML = jugadores[idjugadorActual].nombre;
let bienvenido = document.getElementById("bienvenido");


// Función para hacer la elección del jugador
function eleccion(n) {  
    let video = document.getElementById("videoI");
    let videoD = document.getElementById("videoD");
    let puntajeB = document.getElementById("puntajeB");
    let puntajeJ = document.getElementById("puntajeA");
    let empate = document.getElementById("empate");
    if (contadorBot == 5 || contadorPlayer == 5) {
        return;
    }
    
    // Establecer el video según la elección del jugador
    switch (n) {
        case 1:
            video.src = "multimedia/piedraI.mp4";
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

    video.autoplay = false;
    video.loop = false;
    video.load();
    video.play();

    // Generar una elección aleatoria para la máquina
    function numeroAleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let bot = numeroAleatorioEntre(1, 3);

    // Establecer el video de la máquina según su elección
    switch (bot) {
        case 1:
            videoD.src = "multimedia/piedraD.mp4";
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

    videoD.autoplay = false;
    videoD.loop = false;
    videoD.load();
    videoD.play();

    empate.innerHTML = ""; // Limpiar cualquier mensaje previo
    puntaje(n, bot, puntajeB, puntajeJ); // Calcular el puntaje
}

function puntaje(n, bot, puntajeB, puntajeJ) {

    // Comparar las elecciones y actualizar los puntajes
    if (n === bot) {
        empate.innerHTML = "Empate";
    }
    if (n == 1 && bot == 2 || n == 2 && bot == 3 || n == 3 && bot == 1) {
        contadorBot++;
    }
    if (n == 2 && bot == 1 || n == 3 && bot == 2 || n == 1 && bot == 3) {
        contadorPlayer++;
    }

    // Actualizar los puntajes en pantalla
    puntajeB.innerHTML = contadorBot;
    puntajeJ.innerHTML = contadorPlayer;

    ganador(contadorPlayer, contadorBot);
    
}


// Función que maneja la lógica del ganador
function ganador(puntajeJ, puntajeB) {
    // Verificar si el jugador ha ganado
    if (puntajeJ === 5) {
        bienvenido.innerHTML = "";
        saludo.innerHTML = "¡Le ganaste a la máquina, " + jugadores[idjugadorActual].nombre + "!";
        jugadores[idjugadorActual].victorias = (jugadores[idjugadorActual].victorias || 0) + 1; // Incrementamos las victorias
        localStorage.setItem('jugadores', JSON.stringify(jugadores)); // Guardar en localStorage
    }

    // Verificar si el bot ha ganado
    if (puntajeB === 5) {
        bienvenido.innerHTML = "";
        saludo.innerHTML = "Te ganó la máquina, " + jugadores[idjugadorActual].nombre;
        jugadores[idjugadorActual].Derrotas = (jugadores[idjugadorActual].Derrotas || 0) + 1; // Incrementamos las derrotas
        localStorage.setItem('jugadores', JSON.stringify(jugadores)); // Guardar en localStorage
    }
}



// Función para reiniciar el juego
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

    // Resetear los puntajes
    let puntajeB = document.getElementById("puntajeB");
    let puntajeJ = document.getElementById("puntajeA");

    saludo.innerHTML = "Quien ganara?";

    contadorBot = 0;
    contadorPlayer = 0;
    puntajeB.innerHTML = 0;
    puntajeJ.innerHTML = 0;
}

/*
// Crear una nueva fila (<tr>)
let nuevotr = document.createElement('tr');

// Agregar contenido HTML dentro de la fila (<tr>) con celdas (<td>)
nuevotr.innerHTML = '<td>nombre</td> <td>puntaje</td>';

// Suponiendo que ya tienes una tabla con id 'miTabla', agregamos la nueva fila a la tabla
let tabla = document.getElementById('miTabla');
tabla.appendChild(nuevotr);*/