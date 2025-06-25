// Muestra un mensaje al hacer clic en el botón "¡Conoce más!"
function mostrarMensaje() {
  alert("Gracias por tu interés en Éxodo Digital. Muy pronto sabrás más sobre nuestros servicios.");
}

// Captura el envío del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const nombre = form.querySelector("input[type='text']").value;
    const correo = form.querySelector("input[type='email']").value;
    const mensaje = form.querySelector("textarea").value;

    console.log("Formulario enviado:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    alert("¡Gracias, " + nombre + "! Tu mensaje ha sido enviado (simulado).");

    form.reset(); // Limpia el formulario
  });
});
