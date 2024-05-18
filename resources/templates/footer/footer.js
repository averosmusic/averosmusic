const redesSociales = {
    instagram: "https://instagram.com/averos_official",
    facebook: "https://www.facebook.com/profile.php?id=61554472505893&mibextid=gik2fB",
    youtube: "https://www.youtube.com/channel/UC-ANElMqJsrkBWTf4pTjVHA",
    tiktok: "https://www.tiktok.com/@averos1112"
}

function createBarFooter() {
    var footer = document.querySelector('footer')
    var redesSocialesDiv = createRedesSociales()
    footer.appendChild(redesSocialesDiv)
    return footer
}

function createRedesSociales() {
    var divRedesSociales = document.createElement('div')
    divRedesSociales.classList.add('redesSociales')
    var siganosRedes = document.createElement('p')
    siganosRedes.classList.add('siganosRedes')
    siganosRedes.innerHTML = 'Síganos en nuestras redes sociales:'
    divRedesSociales.appendChild(siganosRedes)
    var plataformasOficiales = document.createElement('div')
    plataformasOficiales.classList.add("plataformasOficiales")
    divRedesSociales.appendChild(plataformasOficiales)

    for (let red in redesSociales) {
        var enlace = document.createElement('a')
        enlace.href = redesSociales[red]

        var icono = document.createElement('i')
        switch (red) {
            case 'instagram':
                icono.classList.add('fab', 'fa-instagram')
                break
            case 'facebook':
                icono.classList.add('fab', 'fa-facebook')
                break
            case 'youtube':
                icono.classList.add('fab', 'fa-youtube')
                break
            case 'tiktok':
                icono.classList.add('fab', 'fa-tiktok')
                break
            default:
                break
        }

        enlace.appendChild(icono)
        plataformasOficiales.appendChild(enlace)
    }

    return divRedesSociales
}
