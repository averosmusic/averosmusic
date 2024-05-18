function createBarNav() {
    var header = document.querySelector('header');
    var nav = createNav();
    var tabsMenu = createMenu();
    var iconMenuMobile = createHamburgerIcon();

    iconMenuMobile.addEventListener('click', menuIconChanger);

    header.appendChild(nav);
    header.appendChild(tabsMenu);
    header.appendChild(iconMenuMobile);

    return header;
}

function menuIconChanger() {
    var menuIcon = document.getElementById('botonMenuMobile');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');

    var body = document.querySelector('body');
    body.style.overflow = (body.style.overflow === 'hidden') ? 'auto' : 'hidden';

    var menu = document.querySelector('.menu');
    menu.style.left = (menu.style.left === '0px' ? '100%' : '0px');
}

function createNav() {
    var nav = document.createElement('nav');
    var addAnchorImg = createAnchor('index.html');
    nav.appendChild(addAnchorImg);

    var imgLogoAveros = createImage('averosLogo', './resources/logos/averos-logo.png');
    addAnchorImg.appendChild(imgLogoAveros);

    return nav;
}

function createMenu() {
    var tabsMenu = document.createElement('div');
    tabsMenu.classList.add('menu');

    // var sponsoredMobile = createMenuItem('Patrocinadores', '#');
    var aboutUsMobile = createMenuItem('Quienes somos', 'about.html');

    // tabsMenu.appendChild(sponsoredMobile);
    tabsMenu.appendChild(aboutUsMobile);

    return tabsMenu;
}

function createHamburgerIcon() {
    var hamburgerMenuIcon = document.createElement('i');
    hamburgerMenuIcon.id = 'botonMenuMobile';
    hamburgerMenuIcon.classList.add('fa-solid', 'fa-bars', 'hamburger-menu');

    return hamburgerMenuIcon;
}

function createAnchor(href) {
    var anchor = document.createElement('a');
    anchor.href = href;
    return anchor;
}

function createImage(className, src) {
    var img = document.createElement('img');
    img.classList.add(className);
    img.src = src;
    return img;
}

function createMenuItem(text, link) {
    var menuItem = createAnchor(link);
    menuItem.textContent = text;
    return menuItem;
}
