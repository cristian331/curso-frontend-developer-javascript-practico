const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    // if(desktopMenu.style.display === 'block'){
    //     desktopMenu.style.display = 'none'
    // }else{
    //     desktopMenu.style.display = 'block'
    // }
    desktopMenu.classList.toggle('inactive')


}