let header = document.querySelector('.container-1')
let button = document.querySelector('.btn')
let main = document.querySelector('.container-2')
let footer = document.querySelector('.container-3')
const image = document.querySelector('.logo');
let line = document.querySelector('.header-line');
let body = document.querySelector('body');


button.onclick = function(){
    header.classList.toggle('first1')
    main.classList.toggle('first2')
    footer.classList.toggle('first3')

    header.classList.toggle('second1')
    main.classList.toggle('second2')
    footer.classList.toggle('second3')

    image.classList.toggle('logo')

    if (image.classList.contains("logo")){
        image.setAttribute('src', '../images/amnyam.webp');
        image.style.borderRadius = "0%";
        image.style.marginTop = "0px";
        body.style.backgroundColor = "white";
    }
    else{
        confirm("Ебать хохлов?")
        image.setAttribute('src', '../images/wagner.png');
        image.style.width = "60px";
        image.style.height = "60px";
        image.style.borderRadius = "50%";
        image.style.marginRight = "2vw" ;
        body.style.backgroundColor = "black";
    }
}