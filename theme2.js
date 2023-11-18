let header = document.querySelector('.container-1')
let button = document.querySelector('.btn')
let main = document.querySelector('.container-2')
let footer = document.querySelector('.container-3')
const image = document.querySelector('.logo');
let line = document.querySelector('.header-line');
let body = document.querySelector('body');
let chipizdrik = document.querySelector('.chipizdrik');
let comm = document.querySelectorAll('.comment');
let avotar = document.querySelectorAll('.avotar');
let otziv = document.querySelectorAll('.comm');
let commline = document.querySelectorAll('.comm-line');
let nik = document.querySelectorAll('.nik');

// let hui = document.getElementsByClassName("comm")['0'].textContent;
// console.log(hui)
// console.log(otziv[0].textContent)
// console.log(nik[0].textContent)             Работает
// nik[0].textContent = otziv[0].textContent; 

// console.log(avotar[0]);
// let her = avotar[0].getAttribute("src")     Работает
// chipizdrik.setAttribute('src', her);

button.onclick = function(){
    header.classList.toggle('first1')
    main.classList.toggle('first2')
    footer.classList.toggle('first3')
    for (var i = 0; i < comm.length; ++i) {
        comm[i].classList.toggle('first4');
    };

    header.classList.toggle('second1')
    main.classList.toggle('second2')
    footer.classList.toggle('second3')
    for (var i = 0; i < comm.length; ++i) {
        comm[i].classList.toggle('second4');
    };

    image.classList.toggle('logo')

    if (image.classList.contains("logo")){
        image.setAttribute('src', '../images/amnyam.webp');
        image.style.borderRadius = "0%";
        image.style.marginTop = "0px";
        body.style.backgroundColor = "white";
        chipizdrik.setAttribute('src', '../images/hzshto.jpg');
        chipizdrik.style.border = "solid black 5px"
        for (var i = 0; i < comm.length; ++i) {
            avotar[i].setAttribute('src', '../images/amnyam.webp');
            otziv[i].textContent = "Всё честно";
            commline[i].style.border = "solid black 5px"
            otziv[i].style.border = "solid black 5px"
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
        chipizdrik.setAttribute('src', '../images/boom.gif');
        chipizdrik.style.border = "solid white 5px"
        for (var i = 0; i < comm.length; ++i) {
            avotar[i].setAttribute('src', '../images/om nom.jpg');
            otziv[i].textContent = "НАЕБАЛОВО ПОЛНОЕ";
            commline[i].style.border = "solid white 5px"
            otziv[i].style.border = "solid white 5px"
        };
    }
}