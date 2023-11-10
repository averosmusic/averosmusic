// funciones para los botones de "Ya disponibles" y "Proximos Lanzamientos"
function mostrarLista(tipo) {
    const disponibles = document.querySelector('.listaDisponibles');
    const proximos = document.querySelector('.listaProximos');
    const botonesDisponibles = document.querySelector('.botones.disponibles');
    const botonesProximos = document.querySelector('.botones.proximos');

    disponibles.style.display = tipo === 'disponibles' ? 'grid' : 'none';
    proximos.style.display = tipo === 'proximos' ? 'grid' : 'none';

    botonesDisponibles.classList.toggle('activo', tipo === 'disponibles');
    botonesProximos.classList.toggle('activo', tipo === 'proximos');
}

// Funcion del carrousel y sus funciones internas

const carrouseles = document.querySelectorAll('.carrousel');

carrouseles.forEach(carrousel => {
    const prevButton = carrousel.querySelector("#prev");
    const nextButton = carrousel.querySelector("#next");
    const images = carrousel.querySelectorAll('.carrousel img');
    const dotsContainer = carrousel.querySelector('.carrousel > div > div');
    let currentIndex = 0;

    if (!dotsContainer) {
        console.error("No se ha encontrado el contenedor de puntos (dotsContainer). Verifica tu selector.");
        return;
    }

    const createDot = index => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => updateCarousel(index));
        dotsContainer.appendChild(dot);
    };

    images.forEach((_, index) => createDot(index));

    const updateCarousel = index => {
        currentIndex = index !== undefined ? index : currentIndex;
        images.forEach((image, i) => image.style.display = i === currentIndex ? "block" : "none");
        dotsContainer.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    };

    updateCarousel();

    const handleButtonClick = increment => updateCarousel((currentIndex + increment + images.length) % images.length);

    nextButton.addEventListener('click', () => handleButtonClick(1));
    prevButton.addEventListener('click', () => handleButtonClick(-1));

    let touchStartX = null;

    carrousel.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);

    carrousel.addEventListener('touchend', e => {
        if (touchStartX !== null) {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            handleButtonClick(deltaX > 50 ? -1 : deltaX < -50 ? 1 : 0);
            touchStartX = null;
        }
    });
});
