// funciones para los botones de "Ya disponibles" y "Proximos Lanzamientos"
function mostrarLista(tipo) {
    document.querySelector('.listaDisponibles').style.display = 'none';
    document.querySelector('.listaProximos').style.display = 'none';

    document.querySelector('.botones.disponibles').classList.remove('activo');
    document.querySelector('.botones.proximos').classList.remove('activo');

    if (tipo === 'disponibles') {
        document.querySelector('.listaDisponibles').style.display = 'grid';
        document.querySelector('.botones.disponibles').classList.add('activo');
    } else if (tipo === 'proximos') {
        document.querySelector('.listaProximos').style.display = 'grid';
        document.querySelector('.botones.proximos').classList.add('activo');
    }
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

    const createDot = (index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    };

    images.forEach((_, index) => createDot(index));

    const updateCarousel = () => {
        images.forEach((image, i) => image.style.display = i === currentIndex ? "block" : "none");

        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    };

    updateCarousel();

    const handleButtonClick = (increment) => {
        currentIndex = (currentIndex + increment + images.length) % images.length;
        updateCarousel();
    };

    nextButton.addEventListener('click', () => handleButtonClick(1));
    prevButton.addEventListener('click', () => handleButtonClick(-1));

    let touchStartX = null;

    carrousel.addEventListener('touchstart', (e) => touchStartX = e.touches[0].clientX);

    carrousel.addEventListener('touchend', (e) => {
        if (touchStartX !== null) {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            handleButtonClick(deltaX > 50 ? 1 : deltaX < -50 ? -1 : 0);

            touchStartX = null;
        }
    });
});
