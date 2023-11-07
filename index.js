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



const carrouseles = document.querySelectorAll('.carrousel')

carrouseles.forEach(carrousel=>{
    function cambiarCarrousel() {
        const prevButton = carrousel.querySelector("#prev");
        const nextButton = carrousel.querySelector("#next");
        const images = carrousel.querySelectorAll('.carrousel img');
        let currentIndex = 0;
    
        images[currentIndex].classList.add('active');
        images.forEach(image => {
            image.classList.add('fade');
        });
        
    
        nextButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        });
    
        prevButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add('active');
        });
    }
    
    cambiarCarrousel();
})

