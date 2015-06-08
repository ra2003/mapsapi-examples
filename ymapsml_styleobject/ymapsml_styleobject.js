ymaps.ready(init);

function init () {
    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [55.692, 37.561],
            zoom: 16
        });
    // Загрузка YMapsML-файла.
    ymaps.geoXml.load('data.xml')
        .then(function (res) {
            // Добавление геообъектов на карту.
            myMap.geoObjects.add(res.geoObjects);
        },
        // Вызывается в случае неудачной загрузки YMapsML-файла.
        function (error){
            alert('При загрузке YMapsML-файла произошла ошибка: ' + error);
        });
}