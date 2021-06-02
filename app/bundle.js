const menu = require("./scripts/menu");
const stock = require("./scripts/stock");



window.addEventListener('load', () => {
    //анимация для меню
    menu();




    // выравнивание высоты картинок для каталога с товарами
    if (document.querySelector('.stock_item')) {
        stock();
    }



    //подключение слайдера на странице с товаром 
    if (document.querySelectorAll('.slider-item').length > 1) {
        $('.slider').bxSlider({
            adaptiveHeight: 'true',
            pagerType: 'short',
            slideMargin: 10,
        });
    }

    //вывод сообщения об отправке формы 
    if (document.querySelector("#send-message")) {
        document.querySelector("#send-message").addEventListener("submit", () => {
            var message = document.querySelector(".message");
            var messageTxt = document.querySelector(".messageTxt");
            var loader = document.querySelector(".loader");
            message.style.display = "flex";
            loader.style.display = 'flex';
            setTimeout(hideLoaderAndShowMessageTxt, 1000);
            setTimeout(hideMessageTxt, 2500);

            function hideLoaderAndShowMessageTxt() {
                loader.style.display = 'none';
                messageTxt.style.display = 'flex';
            }
            function hideMessageTxt() {
                document.querySelector("#nameInput").value = "";
                document.querySelector("#mailInput").value = "";
                document.querySelector("#messageInput").value = "";
                document.querySelector("#checkbox").checked = false;
                messageTxt.style.display = 'none';
                message.style.display = "none";
            }
        });
    }
})