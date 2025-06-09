function menuShow() {
    let cabecalho__mobile = document.querySelector('.cabecalho__mobile')
    if (cabecalho__mobile.classList.contains('open')){
        cabecalho__mobile.classList.remove('open');
        
    } else {
        cabecalho__mobile.classList.add('open');
        
    }

}

