// Seleccionamos los elementos del DOM
const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

// Función para actualizar el contador en la página
function mostrarVisitas() {
    let visitas = localStorage.getItem('visitas');
    
    // Si no es la primera vez (existe en localStorage)
    if (visitas) {
        visitas = parseInt(visitas) + 1;
    } else {
        // Si es la primera vez
        visitas = 1;
    }
    
    // Guardamos el nuevo valor
    localStorage.setItem('visitas', visitas);
    
    // Lo mostramos en el HTML
    contadorVisitas.innerText = visitas;
}

// Llamamos a la función al cargar la página
mostrarVisitas();

// Evento para el botón de reestablecer
btnReestablecer.addEventListener('click', function() {
    // Ponemos el contador a 0 en localStorage
    localStorage.setItem('visitas', 0);
    
    // También lo cambiamos en el HTML para que se vea el cambio
    contadorVisitas.innerText = 0;
});
