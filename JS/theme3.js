let header = document.querySelector('.container-1')
let button = document.querySelector('.btn')
let main = document.querySelector('.container-2')
let footer = document.querySelector('.container-3')
const image = document.querySelector('.logo');
let line = document.querySelector('.header-line');
let body = document.querySelector('body');
let prichina = document.querySelectorAll('.prichina');
let pr = document.querySelectorAll('.pr');
let comm = document.querySelectorAll('.comm');

button.onclick = function(){
    header.classList.toggle('first1')
    main.classList.toggle('first2')
    footer.classList.toggle('first3')
    for (var i = 0; i < prichina.length; ++i) {
        prichina[i].classList.toggle('first4');
    };

    header.classList.toggle('second1')
    main.classList.toggle('second2')
    footer.classList.toggle('second3')
    for (var i = 0; i < prichina.length; ++i) {
        prichina[i].classList.toggle('second4');
    };

    image.classList.toggle('logo')

    if (image.classList.contains("logo")){
        image.setAttribute('src', '../images/amnyam.webp');
        image.style.borderRadius = "0%";
        image.style.marginTop = "0px";
        body.style.backgroundColor = "white";
        for (var i = 0; i < prichina.length; ++i) {
            pr[i].style.color = "Black";
            comm[i].style.color = "Black";
        };
    }
    else{
        confirm("Ебать хохлов?")
        image.setAttribute('src', '../images/wagner.png');
        image.style.width = "60px";
        image.style.height = "60px";
        image.style.borderRadius = "50%";
        image.style.marginRight = "2vw" ;
        body.style.backgroundColor = "black";
        for (var i = 0; i < prichina.length; ++i) {
            pr[i].style.color = "White";
            comm[i].style.color = "White";
        };
    }
}