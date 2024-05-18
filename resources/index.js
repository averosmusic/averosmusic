import { getIconoSVG } from './logos/logosIconos.js';

// Datos multimedia (musicas y videos) en forma de objetos
const MULTIMEDIA = {
    DISPONIBLES: [
        {
            musica: true,
            video: true,
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Sobrenatural",
            coverURL: "https://i.scdn.co/image/ab67616d00001e0297f5d6d8a1d280ab8ab68ac1",
            plataformasMusica: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/3Q6G1iAlw1Cws3RDE96cDL" },
                { nombre: "YTMusic", url: "https://music.youtube.com/watch?v=nqlkZ2DTB_A&si=eD9rs4j5foER_FW_" },
                { nombre: "Apple", url: "https://music.apple.com/us/album/sobrenatural-feat-addisong/1717492942?i=1717492943" }
            ],
            plataformasVideo: [
                { nombre: "YouTube", url: "https://www.youtube.com/watch?v=7W1Flyt-8Yk" },
                { nombre: "Apple", url: "https://music.apple.com/us/music-video/sobrenatural-feat-addisong/1744992164" },
                { nombre: "Tidal", url: "https://tidal.com/browse/video/361696683" }
            ],
        },
        {
            musica: true,
            video: false,
            artistas: "Averos Music, Fernando Ville",
            nombreCancion: "Primera Vez",
            coverURL: "https://i.scdn.co/image/ab67616d00001e02ff386fdff9996b6ccc21a31c",
            plataformasMusica: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/62JHWhcS2ABNSsve3K7jWg" },
                { nombre: "YTMusic", url: "https://music.youtube.com/watch?v=BdHwIT-m1UY&si=QHTelwTnLW9c0MJd" },
                { nombre: "Apple", url: "https://music.apple.com/us/album/primera-vez-feat-fernando-ville/1715099089?i=1715099090" }
            ],
            plataformasVideo: [],
        },
        {
            musica: true,
            video: true,
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Ser Un Niño Otra Vez",
            coverURL: "https://i.scdn.co/image/ab67616d00001e023b4a73b8fcce26dd47b1bb16",
            plataformasMusica: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/5ShabTACl2O5tXVFrClNGE" },
                { nombre: "YTMusic", url: "https://music.youtube.com/watch?v=83hsamJu_Qk&si=2S1FHXtLfXWB_ROY" },
                { nombre: "Apple", url: "https://music.apple.com/us/album/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1708634683?i=1708634685" }
            ],
            plataformasVideo: [
                { nombre: "YouTube", url: "https://youtu.be/-xOs7F91hjQ?si=Ra1gkcD5roDwAR9L" },
                { nombre: "Apple", url: "https://music.apple.com/us/music-video/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1722866849" },
                { nombre: "Tidal", url: "https://tidal.com/browse/video/336982814" }
            ]
        },
    ],
    PROXIMOSLANZAMIENTOS: {
        artistas: "Averos Music, Saúl Padilla (Música)",
        nombreCancion: "Matando Mariposas",
        coverURL: "./resources/img/portada_MatandoMariposas.jpg",
    }
}

const MERCANCIAS = [
    {
        nombreArticulo: `Gorra Oficial Averos<br>(Nombre Personalizado)`,
        imagenesArticulo: [
            "https://i.etsystatic.com/45506732/r/il/3cd38f/5381809884/il_794xN.5381809884_rkwx.jpg",
            "https://i.etsystatic.com/45506732/r/il/27aa4e/5429970779/il_794xN.5429970779_n4t0.jpg",
            "https://i.etsystatic.com/45506732/r/il/a92b91/5429970479/il_794xN.5429970479_e36c.jpg",
            "https://i.etsystatic.com/45506732/r/il/fea35f/5381809840/il_794xN.5381809840_dre5.jpg",
            "https://i.etsystatic.com/45506732/r/il/93046c/5429970409/il_794xN.5429970409_e2my.jpg",
            "https://i.etsystatic.com/45506732/r/il/9bd999/5381809698/il_794xN.5381809698_dvqn.jpg",
        ],
        enlaceComprar: 'https://www.etsy.com/listing/1584866763/official-averos-project-cap',
    },
    {
        nombreArticulo: `Sudaderas Cuello Redondo<br>Camaleon Averos`,
        imagenesArticulo: [
            "https://i.etsystatic.com/45506732/r/il/3e952a/5413760051/il_794xN.5413760051_e1ij.jpg",
            "https://i.etsystatic.com/45506732/r/il/4301a1/5365593994/il_794xN.5365593994_pj67.jpg",
            "https://i.etsystatic.com/45506732/r/il/459933/5413757173/il_794xN.5413757173_ppyh.jpg",
            "https://i.etsystatic.com/45506732/r/il/f2f2c8/5413756861/il_794xN.5413756861_p248.jpg",
            "https://i.etsystatic.com/45506732/r/il/e86a7d/5413757279/il_794xN.5413757279_no20.jpg",
            "https://i.etsystatic.com/45506732/r/il/023327/5365590538/il_794xN.5365590538_fpid.jpg",
            "https://i.etsystatic.com/45506732/r/il/c8543f/5413758231/il_794xN.5413758231_hqxu.jpg",
        ],
        enlaceComprar: 'https://www.etsy.com/listing/1567541386/chameleon-crewneck-sweatshirt-stylish',
    },
    {
        nombreArticulo: `Project Averos Official Hoodie<br>LIMITED EDITION`,
        imagenesArticulo: [
            "https://i.etsystatic.com/45506732/r/il/289ebc/5653578961/il_1588xN.5653578961_80h3.jpg",
            "https://i.etsystatic.com/45506732/r/il/259b18/5605315088/il_1588xN.5605315088_qxxg.jpg",
            "https://i.etsystatic.com/45506732/r/il/e89abd/5605321642/il_1588xN.5605321642_olzw.jpg",
            "https://i.etsystatic.com/45506732/r/il/31dd45/5653578095/il_1588xN.5653578095_7bbc.jpg",
            "https://i.etsystatic.com/45506732/r/il/c01b8e/5605501568/il_794xN.5605501568_jg07.jpg",
        ],
        enlaceComprar: 'https://www.etsy.com/listing/1638805997/project-averos-official-hoodie-limited',
    },
];

// Verificar cuantos tipo de ('musica' o 'video') existen
function contadorTipoMediaDisponible(tipo) {
    const filtro = MULTIMEDIA.DISPONIBLES.filter(cancion => cancion[tipo] === true)
    return filtro
}

// Generador de media en Disponible y Proximos Lanzamientos
function generarListadoDisponibles() {
    const listaDisponibles = document.querySelector('.listaDisponibles')
    var listaDeMusicaDisponibles = document.createElement('div');
    var listaDeVideoDisponibles = document.createElement('div');

    listaDeMusicaDisponibles.classList.add('musicaArea');
    listaDeVideoDisponibles.classList.add('videoArea');

    function crearListaMediaDisponible(tipoMedia, tituloArea, claseAreaMedia, clasePlataformas) {
        var listaDeMediaDisponibles = document.createElement('div');
        listaDeMediaDisponibles.classList.add(claseAreaMedia);

        if (contadorTipoMediaDisponible(tipoMedia).length > 0) {
            var titleArea = document.createElement('h2');
            titleArea.classList.add('titleArea');
            titleArea.innerHTML = tituloArea;

            var mediaDisponibles = document.createElement('div');
            mediaDisponibles.classList.add('mediaDisponibles');

            listaDeMediaDisponibles.appendChild(titleArea);
            listaDeMediaDisponibles.appendChild(mediaDisponibles);
            listaDisponibles.appendChild(listaDeMediaDisponibles);

            contadorTipoMediaDisponible(tipoMedia).forEach(media => {
                var single = document.createElement('div');
                single.classList.add('single');

                var img = document.createElement('img');
                img.src = media.coverURL;

                var infoContainer = document.createElement('div');
                var h3 = document.createElement('h3');
                h3.innerHTML = media.artistas;
                var p = document.createElement('p');
                p.innerHTML = media.nombreCancion;
                infoContainer.appendChild(h3);
                infoContainer.appendChild(p);

                var plataformasContainer = document.createElement('div');
                plataformasContainer.classList.add('plataformas');

                media[clasePlataformas].forEach(plataforma => {
                    var a = document.createElement('a');
                    a.href = plataforma.url;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';

                    var iconoSVG = document.createElement('div');
                    iconoSVG.innerHTML = getIconoSVG(plataforma.nombre);
                    a.appendChild(iconoSVG);

                    plataformasContainer.appendChild(a);
                });

                single.appendChild(img);
                single.appendChild(infoContainer);
                single.appendChild(plataformasContainer);

                mediaDisponibles.appendChild(single);
            });
        }
    }

    crearListaMediaDisponible('musica', 'Música', 'musicaArea', 'plataformasMusica');
    crearListaMediaDisponible('video', 'Video', 'videoArea', 'plataformasVideo');
}

generarListadoDisponibles();

////////////////////////////////////////////////////////////////////////////////////

function generarListadoProximo() {
    if (Object.keys(MULTIMEDIA.PROXIMOSLANZAMIENTOS).length > 0) {
        const boxMusica = document.querySelector('.boxMusica')
        boxMusica.classList.add('boxMusicaConProx')

        var listaProximos = document.createElement('div')
        listaProximos.classList.add('listaProximo')
        const proximaMedia = MULTIMEDIA.PROXIMOSLANZAMIENTOS
        var titleAreaProximos = document.createElement('h2')
        titleAreaProximos.classList.add('titleArea')
        titleAreaProximos.innerHTML = 'Próximo Lanzamiento'

        var mediaProxima = document.createElement('div')
        mediaProxima.classList.add('mediaProxInfo')
        var infoContainer = document.createElement('div');
        var h3 = document.createElement('h3');
        h3.innerHTML = proximaMedia.artistas;
        var p = document.createElement('p');
        p.innerHTML = proximaMedia.nombreCancion;
        infoContainer.appendChild(h3);
        infoContainer.appendChild(p);

        var img = document.createElement('img')
        img.src = proximaMedia.coverURL

        boxMusica.appendChild(listaProximos)
        listaProximos.appendChild(titleAreaProximos)
        listaProximos.appendChild(mediaProxima)
        mediaProxima.appendChild(infoContainer)
        mediaProxima.appendChild(img)
    }
}

generarListadoProximo()

////////////////////////////////////////////////////////////////////////////////////

// funcion del boton drop para las tabs

const botonDropUpTab = document.querySelector('.botonMostrarOcultar');
const infoTab = document.querySelector('.infoTab');
const infoTabMerch = document.querySelector('.infoTabMerch');

botonDropUpTab.addEventListener('click', mostrarOcultarInformacion);

function mostrarOcultarInformacion() {
    botonDropUpTab.classList.toggle('fa-chevron-circle-down');
    botonDropUpTab.classList.toggle('fa-chevron-circle-up');
    infoTab.style.display = infoTab.style.display === 'none' ? 'grid' : 'none';
}

// Solo si los articulos de mercaderia es un numero impar, el ultimo articulo tomara dos columnas en su lugar

function ajustedeColumnas(i) {
    if (i.childNodes.length % 2 === 1) {
        i.childNodes[i.childNodes.length - 1].classList.add("ultimoImpar")
    }
}

// Carrouseles en Merch

function crearCarrouselesMercaderia() {

    MERCANCIAS.forEach(mercancia => {
        var imagenIndex = 0;

        const carrouselDiv = document.createElement("div");
        carrouselDiv.classList.add("carrousel");

        const h2Element = document.createElement("h2");
        h2Element.innerHTML = mercancia.nombreArticulo;

        const slidesDiv = document.createElement("div");
        slidesDiv.classList.add("slides");

        const imgElement = document.createElement("img");
        imgElement.src = mercancia.imagenesArticulo[imagenIndex];

        const prevButton = document.createElement("a");
        prevButton.classList.add("prevImagen");
        prevButton.textContent = "❮";

        const nextButton = document.createElement("a");
        nextButton.classList.add("nextImagen");
        nextButton.textContent = "❯";

        const boxDotIndexDiv = document.createElement("div");
        boxDotIndexDiv.classList.add("boxDotIndex");

        slidesDiv.appendChild(imgElement);
        slidesDiv.appendChild(prevButton);
        slidesDiv.appendChild(nextButton);
        slidesDiv.appendChild(boxDotIndexDiv);

        const comprarButton = document.createElement("a");
        comprarButton.classList.add("botonComprar");
        comprarButton.href = mercancia.enlaceComprar;
        comprarButton.textContent = "Comprar/Buy";

        carrouselDiv.appendChild(h2Element);
        carrouselDiv.appendChild(slidesDiv);
        carrouselDiv.appendChild(comprarButton);

        infoTabMerch.appendChild(carrouselDiv);
    });

    ajustedeColumnas(infoTabMerch)


    // Obtén todas las instancias de carrousel después de agregarlos al DOM
    var carrousels = document.querySelectorAll('.carrousel');


    carrousels.forEach((carrousel, index) => {
        var imagenIndex = 0;
        var prevImagen = carrousel.querySelector('.prevImagen');
        var nextImagen = carrousel.querySelector('.nextImagen');
        var slidesImg = carrousel.querySelector('.slides img');
        var boxDotIndex = carrousel.querySelector('.boxDotIndex');

        MERCANCIAS[index].imagenesArticulo.forEach((imagen, i) => {
            var dot = document.createElement('div');
            dot.className = 'dotIndex' + (i === 0 ? ' dotActivo' : '');
            dot.addEventListener('click', function () {
                imagenIndex = i;
                actualizarImagen();
            });
            boxDotIndex.appendChild(dot);
        });


        prevImagen.addEventListener('click', function () {
            imagenIndex--;
            actualizarImagen();
        });

        nextImagen.addEventListener('click', function () {
            imagenIndex++;
            actualizarImagen();
        });

        // Función para actualizar la imagen actual
        function actualizarImagen() {
            var mercancia = MERCANCIAS[index];
            if (imagenIndex < 0) {
                imagenIndex = mercancia.imagenesArticulo.length - 1;
            } else if (imagenIndex >= mercancia.imagenesArticulo.length) {
                imagenIndex = 0;
            }
            slidesImg.src = mercancia.imagenesArticulo[imagenIndex];

            boxDotIndex.querySelectorAll('.dotIndex').forEach((dot, i) => {
                dot.classList.toggle('dotActivo', i === imagenIndex);
            });
        }
    });
}

crearCarrouselesMercaderia();