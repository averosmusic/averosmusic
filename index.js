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