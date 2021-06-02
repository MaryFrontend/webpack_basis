module.exports = function stock() {
    //выравнивание фотографий
    var image = document.querySelectorAll('.stock_item-img');
    var imageWidth = image[0].offsetWidth;
    for (let i = 0; i < image.length; i++) {
        image[i].style.height = `${imageWidth / 100 * 70}px`;
    }
};
