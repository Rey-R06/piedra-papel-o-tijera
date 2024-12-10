let avanzar = document.getElementById("avanzar");

avanzar.addEventListener("click", avanza);

function avanza() {
    let nombre = document.getElementById("nombre").value.trim();

    if(nombre == ""){
        alert("Ingrese un nombre");
    }else{
        // Guardar el nombre en el localStorage
        localStorage.setItem("nombre", nombre);
        
        // Redirigir a la página de duelo (duelo.html)
        window.location.href = "duelo.html"; 
    }
}
