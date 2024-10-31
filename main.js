$(document).ready(function() {
    $("#avanzar").click(function() {
        let nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") { 
            alert("Ingrese el nombre"); 
            window.location.reload();  
        } else {
            window.location.href = "duelo.html"; 
        }
    });

});
