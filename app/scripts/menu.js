var nav = document.querySelector('.navigation');
var body = document.getElementsByTagName('body')
module.exports = function menu() {

    //всплывающее меню при размере экрана больше 768px 


    var burger = document.querySelector('.burger');

    //показываем меню
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        nav.classList.toggle('navigation-active');
    })



}

