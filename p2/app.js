// app.js

// Seleccionar elementos
const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Variables para el control del slider
let currentIndex = 0;

// Función para actualizar el tema y el fondo
function updateTheme(index) {
    // Remover clases de tema del body
    document.body.classList.remove('theme1', 'theme2', 'theme3');

    // Agregar la clase del tema correspondiente
    const theme = items[index].getAttribute('data-theme');
    document.body.classList.add(theme);
}

// Función para mostrar el item actual
function showCurrentItem() {
    const totalItems = items.length;
    // Calcular el nuevo índice
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Ir al último si es menor que 0
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Volver al primero si es mayor o igual al total
    }

    // Mover la lista de items
    const offset = -currentIndex * 100; // Mover en porcentaje
    list.style.transform = `translateX(${offset}%)`;

    // Actualizar el tema
    updateTheme(currentIndex);
}

// Eventos para los botones
prevButton.addEventListener('click', () => {
    currentIndex--; // Disminuir el índice
    showCurrentItem(); // Mostrar el item actual
});

nextButton.addEventListener('click', () => {
    currentIndex++; // Aumentar el índice
    showCurrentItem(); // Mostrar el item actual
});

// Inicializar el primer tema
updateTheme(currentIndex);