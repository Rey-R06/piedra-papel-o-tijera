let avanzar = document.getElementById("avanzar");

avanzar.addEventListener("click", avanza);


function avanza() {
    let nombre =  document.getElementById("nombre").value.trim();;  // Este valor puede venir de un campo de entrada

    if(nombre == ""){
        alert("Ingrese un nombre");
    }else{
        // Guardar el nombre en el localStorage
        localStorage.setItem("nombre", nombre);
        jugadores(nombre);
        
        // Redirigir a la página de duelo (duelo.html)
        window.location.href = "duelo.html"; 
    }
}


// Función para almacenar y actualizar jugadores en localStorage
function jugadores(nombre) {
    // Recuperamos el array de jugadores desde localStorage o inicializamos uno vacío si no existe
    let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];

    // Verificamos si el jugador ya existe en el array
    let jugadorExistente = jugadores.find(j => j.nombre === nombre);

    if (!jugadorExistente) {
        // Si el jugador no existe, lo agregamos al array con 1 victoria y 5 puntos
        jugadores.push({ nombre: nombre, victorias: 0, Derrotas: 0});
    }

    // Guardamos el array actualizado de jugadores en localStorage
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
}