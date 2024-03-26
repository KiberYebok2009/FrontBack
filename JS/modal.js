let icon = document.querySelectorAll('.product-icon');
let name = document.querySelectorAll('.name-product');
let emptyicon = document.querySelector('.empty-icon');
let emptyprice = document.querySelector('.price-empty');
let emptyname = document.querySelector('.empty-name');
let treasure = document.querySelector('.treasure');
var ind = {val: 0};
var buttons = document.querySelectorAll(".but");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonId = this.id;
        ind.val = Number(buttonId);
        var modal = document.getElementById("myModal");

        let newicon = icon[ind.val].getAttribute("src");
        emptyicon.setAttribute('src', newicon);
        emptyname.textContent = name[ind.val].textContent;
        emptyprice.textContent = price[ind.val].textContent; 
        if (ind.val > 12){
            treasure.textContent = "Treasure: Collector's cache 2022 II"
        }

// Получить элемент <span>, который закрывает модальный
        var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
        modal.style.display = "block";

        // Когда пользователь нажимает на <span> (x), закройте модальное окно
        span.onclick = function() {
        modal.style.display = "none";
        }

        // Когда пользователь щелкает в любом месте за пределами модального, закройте его
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }    
  });
});