$(function () {
ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 12,
            controls : []
        });

        var coords = [
           [55.75, 37.50],
           [55.75, 37.71],
           [55.70, 37.70],
           [55.80, 37.55]
        ],

        myCollection = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: '../img/icons/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52], 
                draggable: false
        });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }

        
        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    }
});