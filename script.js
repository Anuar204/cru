/*
Esto es un comentario
de varias líneas
en JavaScript
function cambiarModo() {
  document.body.classList.toggle("oscuro");
}
*/
// Cambia el tema entre claro y oscuro
const toggle = document.getElementById('toggle-theme');
const root = document.documentElement;

toggle.addEventListener('change', function () {
  if (toggle.checked) {
    root.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Mantiene el tema seleccionado al recargar
if (localStorage.getItem('theme') === 'dark') {
  toggle.checked = true;
  root.classList.add('dark-mode');
}