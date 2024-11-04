const toggle = document.getElementById("toggle");
const icon = document.getElementById("icon");

// Cambiar tema al hacer clic
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

// Comprobar el tema guardado en el almacenamiento local al cargar la página
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
} else {
    document.body.classList.remove("dark");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}

$(document).ready(function() {
    $('#destinos-link').click(function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado
        $('#sub-menu').toggleClass('show'); // Mostrar u ocultar el submenú
    });

    // Cerrar el submenú si se hace clic fuera de él
    $(document).click(function(event) {
        if (!$(event.target).closest('#destinos-link, #sub-menu').length) {
            $('#sub-menu').removeClass('show');
        }
    });

    // Añadir el evento de clic a las tarjetas de destino
    $('.card').click(function() {
        // Remover la clase clicked de todas las tarjetas
        $('.card').removeClass('clicked');

        // Añadir la clase clicked a la tarjeta que se ha clicado
        $(this).addClass('clicked');
    });
});
