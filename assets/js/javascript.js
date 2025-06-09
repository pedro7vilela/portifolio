function menuShow() {
    let cabecalho__mobile = document.querySelector('.cabecalho__mobile')
    if (cabecalho__mobile.classList.contains('open')){
        cabecalho__mobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons8-grip-lines-32.png";
    } else {
        cabecalho__mobile.classList.add('open')
        document.querySelector('.icon').src = "img/icons8-x-32.png";
    }

}