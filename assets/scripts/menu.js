const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');

menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle("show");
    
    // verify if show has the show class
    if(menu.classList.contains('show')){
        menuIcon.src = '/assets/images/iconCloseMenu.svg';
        menuIcon.title = "Fechar menu"
    }else{
        menuIcon.src = '/assets/images/menu-hambuger.svg'
        menuIcon.title = "Abrir menu"
    }
})