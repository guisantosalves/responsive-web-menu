const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');

menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle("show");
    
    // verify if menu has the show class
    if(menu.classList.contains('show')){
        menuIcon.src = '/assets/images/iconCloseMenu.svg';
        menuIcon.title = "Fechar menu"
    }else{
        menuIcon.src = '/assets/images/menu-hambuger.svg'
        menuIcon.title = "Abrir menu"
    }
})

addEventListener('resize', () => {
    // verify if menu has the show class
    if(menu.classList.contains('show')){
        menuIcon.src = '/assets/images/iconCloseMenu.svg';
        menuIcon.title = "Fechar menu"
    }else{
        menuIcon.src = '/assets/images/menu-hambuger.svg'
        menuIcon.title = "Abrir menu"
    }

    if(window.innerWidth > 768){
        menu.classList.remove('show');
    }
})