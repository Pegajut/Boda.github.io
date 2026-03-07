// Inicializar librería AOS (Animaciones)
AOS.init({
    duration: 1000,
    once: true
});

// Configuración de la fecha: 18 de Julio de 2026 (Mes 6 es Julio)
const weddingDate = new Date(2026, 6, 18, 18, 0, 0).getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar en el HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la fecha ya pasó
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "¡Es hoy!";
    }
}, 1000);
