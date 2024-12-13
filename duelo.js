let saludo = document.getElementById("saludo");// Mostrar el saludo con el nombre del jugador

let contadorBot = 0, contadorPlayer = 0;// Variables para llevar el puntaje

let compararJugador = localStorage.getItem("nombre");// Obtener el nombre que ingresa en el main desde localStorage

let jugadores = JSON.parse(localStorage.getItem("jugadores"));// Obtenemos el arrey de objetos jugadores

let idjugadorActual;//Esto es para obtener el id del jugador que esta actualmente jugando

//Aqui es donde obtenemos el jugador actual
for (let i = 0; i < jugadores.length; i++) {
    if (jugadores[i].nombre == compararJugador) {
        idjugadorActual = i;
    } 
}

saludo.innerHTML = jugadores[idjugadorActual].nombre;//Agrega al html un saludo con el nombre del jugador actual

//traemos un h2 que tiene el id bienvenido y lo asignamos a una variable
let bienvenido = document.getElementById("bienvenido");



let estadisticas = document.getElementById("estadisticas");

estadisticas.addEventListener("click", verEstadisticas);


let mostrar = 1;
let contenedor = document.getElementById("contenedor");
function verEstadisticas() {
    
    if (mostrar == 1) { 
        contenedor.style.display = "none";  // Ocultar el contenedor
        contenedor.style.visibility = "hidden"; 
        estadisticas.innerText = "Ver estadisticas";
        mostrar = 2;  // Cambiar el estado para indicar que está visible
    } else {
        contenedor.style.display = "block";  // Mostrar el contenedor
        contenedor.style.visibility = "visible";
        estadisticas.innerText = "Ocultar estadisticas";
        mostrar = 1;  // Cambiar el estado para indicar que está oculto
    }
}

//traemos una tabla que tiene el id tabla y lo asignamos a una variable
let tabla = document.getElementById("tabla");
//Esto es para que se cargue la tabla de estadisticas desde que entre el usuario
//Arreglar problema que se nota cuando entres en la pagina
document.addEventListener('DOMContentLoaded', agregarEstadisticas);

//Esta funcion agrega a la tabla los jugadores(nombre, victorias y derrotas) que tengamos en el arrey de objetos que tenemos en el localStorage
function agregarEstadisticas() {
    // Iterar sobre el array de jugadores
    for (let i = 0; i < jugadores.length; i++) {
        //obteniendo los nombres
        let nombre = jugadores[i].nombre;
        //obteniendo las victorias
        let victorias = jugadores[i].victorias;
        //obteniendo las derrotas
        let derrotas = jugadores[i].derrotas;  // Asegúrate de que la propiedad sea 'Derrotas' (si es así en tu array)

        // Crea una nueva fila (<tr>)
        let nuevotr = document.createElement('tr');

        // Agrega las estadisticas obtenidas en el HTML dentro de la fila (<tr>) con celdas (<td>)
        nuevotr.innerHTML = `<td id="jugador${i}">${nombre}</td><td id="victorias${i}">${victorias}</td><td id="derrotas${i}">${derrotas}</td>`;


        // Agregar la nueva fila a la tabla
        tabla.appendChild(nuevotr);
    }
}



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

    //hacemos que se pare el video para que muestre el resultado
    video.autoplay = false;
    video.loop = false;
    //cargan la eleccion
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
    //hacemos que se pare el video para que muestre el resultado
    videoD.autoplay = false;
    videoD.loop = false;
    //cargan la eleccion
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

    ganador(contadorPlayer, contadorBot);//Enviamos los puntajes a una funcion para que determine si alguien gano
}


// Función que maneja la lógica del ganador
function ganador(puntajeJ, puntajeB) {
    // Verificar si el jugador ha ganado
    if (puntajeJ === 5) {
        let victorias = document.getElementById("victorias"+idjugadorActual);
        //Obtener el valor actual de victorias (debe ser un número, así que lo convertimos a entero)
        let victoriasActuales = parseInt(victorias.textContent) || 0;  // Aseguramos que sea un número

        // Actualizar el contenido de la celda con el nuevo valor
        victoriasActuales += 1;
        //Y mandarlo
        victorias.textContent = victoriasActuales;

        bienvenido.innerHTML = "";//vaciamos el h2 de vienvenida del html

        saludo.innerHTML = "¡Le ganaste a la máquina, " + jugadores[idjugadorActual].nombre + "!";//mensaje de que le gano a la maquina

        jugadores[idjugadorActual].victorias = (jugadores[idjugadorActual].victorias || 0) + 1; // Incrementamos las victorias

        localStorage.setItem('jugadores', JSON.stringify(jugadores)); // Guardar en localStorage
    }

    // Verificar si el bot ha ganado
    if (puntajeB === 5) {
        let derrotas = document.getElementById("derrotas"+idjugadorActual);
        //Obtener el valor actual de derrotas (debe ser un número, así que lo convertimos a entero)
        let derrotasActuales = parseInt(derrotas.textContent) || 0;  // Aseguramos que sea un número
        // Actualizar el contenido de la celda con el nuevo valor
        derrotasActuales += 1;
        //y mandarlo
        derrotas.textContent = derrotasActuales;
        
        bienvenido.innerHTML = "";//vaciamos el h2 de vienvenida del html
        
        saludo.innerHTML = "Te ganó la máquina, " + jugadores[idjugadorActual].nombre;//mensaje de que te gano la maquina

        jugadores[idjugadorActual].derrotas = (jugadores[idjugadorActual].derrotas || 0) + 1; // Incrementamos las derrotas

        localStorage.setItem('jugadores', JSON.stringify(jugadores)); // Guardar en localStorage
    }
}

//traemos un boton que tiene el id reinicio y lo asignamos a una variable
let reinicio = document.getElementById("reinicio");

//Este evento hara que cuando se haga click en ek boton de reinicio del html
//se regresan a 0 los puntajes
reinicio.addEventListener('click', reiniciar);

//Este evento hara que cuando se haga click en ek boton de reinicio del html
//se actualiza la tabla en el html
reinicio.addEventListener('click', agregarEstadisticas);

// Función para reiniciar el juego
function reiniciar() {
    location.reload();
}
