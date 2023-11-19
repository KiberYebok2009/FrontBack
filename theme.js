let header = document.querySelector('.container-1')
let button = document.querySelector('.btn')
let main = document.querySelector('.container-2')
let footer = document.querySelector('.container-3')
const image = document.querySelector('.logo');
let line = document.querySelector('.header-line');
let body = document.querySelector('body');
let product = document.querySelectorAll('.package');
let prname = document.querySelectorAll('.name-product');
let price = document.querySelectorAll('.price-product');
let mdhead = document.querySelector('.modal-header');
let mdfoot = document.querySelector('.modal-footer');
let empname = document.querySelector('.empty-name');
let rar = document.querySelector('.rar');
let treas = document.querySelector('.treasure');
let empprice = document.querySelector('.price-empty');
let cont = document.querySelector('.modal-content');
let empicon = document.querySelector('.empty-icon');
button.onclick = function(){
    header.classList.toggle('first1')
    main.classList.toggle('first2')
    footer.classList.toggle('first3')
    for (var i = 0; i < product.length; ++i) {
        product[i].classList.toggle('first4');
        };
    header.classList.toggle('second1')
    main.classList.toggle('second2')
    footer.classList.toggle('second3')
    for (var i = 0; i < product.length; ++i) {
        product[i].classList.toggle('second4');
        };
    image.classList.toggle('logo')
    if (image.classList.contains("logo")){
        image.setAttribute('src', '../images/amnyam.webp');
        image.style.borderRadius = "0%";
        image.style.marginTop = "0px";
        body.style.backgroundColor = "white";
        mdfoot.style.backgroundColor = "#7A08FA";
        mdhead.style.backgroundColor = "#7A08FA";
        empname.style.color = "black";
        rar.style.color = "black";
        treas.style.color = "black";
        empprice.style.color = "black";
        cont.style.backgroundColor = "white";
        cont.style.backgroundImage = "none";
        empicon.style.border = "solid black 5px";
        for (var i = 0; i < product.length; ++i) {
            prname[i].style.color = "black";
            prname[i].style.fontFamily = "Agbalumo";
            price[i].style.color = "black";
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
        mdfoot.style.backgroundColor = "red";
        mdhead.style.backgroundColor = "red";
        empname.style.color = "white";
        rar.style.color = "white";
        treas.style.color = "white";
        empprice.style.color = "white";
        cont.style.backgroundImage = "url('../images/disguise3.jpg')";
        cont.style.backgroundRepeat = "no-repeat";
        cont.style.backgroundSize = "cover";
        empicon.style.border = "solid white 5px";
        for (var i = 0; i < product.length; ++i) {
            prname[i].style.color = "white";
            prname[i].style.fontFamily = "Black Ops One";
            price[i].style.color = "white";
            };
    }
}