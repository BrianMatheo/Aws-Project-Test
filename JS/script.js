// Función sencilla que saluda al usuario
function saludar() {
    const nombres = [
        '¡Hola, Usuario! 👋',
        '¡El mejor bootcamp! 🎓',
        '¡Excelente, sigues aprendiendo! 💪',
        '¡Eres increíble! ✨',
        '¡Arquitectura! 🚀'
    ];
    
    // Selecciona un mensaje aleatorio
    const mensajeAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    
    // Muestra el mensaje en el elemento con id "mensaje"
    document.getElementById('mensaje').textContent = mensajeAleatorio;
    
    // Efecto visual: anima el mensaje
    const elemento = document.getElementById('mensaje');
    elemento.style.animation = 'none';
    setTimeout(() => {
        elemento.style.animation = 'slideIn 0.5s ease-in-out';
    }, 10);
}

// Función adicional: cambiar tema (oscuro/claro)
function toggleTema() {
    document.body.style.background = 
        document.body.style.background === 'white' 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'white';
}

// Mensaje de bienvenida en consola
console.log('¡Bienvenido al bootcamp, Brian! 🚀');
console.log('Haz clic en el botón para ver un mensaje sorpresa.');
