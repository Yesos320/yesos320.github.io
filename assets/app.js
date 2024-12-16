// Función para iniciar la animación
function iniciarOla() {
  const letras = document.querySelectorAll('.letra');
  letras.forEach((letra, index) => {
    letra.style.animationPlayState = 'running'; // Inicia la animación
  });
}

// Función para detener la animación temporalmente
function detenerOla() {
  const letras = document.querySelectorAll('.letra');
  letras.forEach((letra) => {
    letra.style.animationPlayState = 'paused'; // Detiene la animación
  });
}

// Función para reiniciar la animación después de un intervalo
function reiniciarOla() {
  detenerOla();
  setTimeout(() => {
    iniciarOla();
  }, 5000); // Espera 5 segundos antes de reiniciar
}

// Llamada inicial para iniciar la animación
document.addEventListener('DOMContentLoaded', (event) => {
  iniciarOla();

  // Detener la animación después de 10 segundos y luego reiniciar
  setTimeout(() => {
    detenerOla();
    reiniciarOla();
  }, 10000); // Detener y reiniciar después de 10 segundos
});
