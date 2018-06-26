$(document).ready(function () {


ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            //clusterize: true,
            // ObjectManager принимает твфефе же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });
    myMap.behaviors.disable('scrollZoom'); 
    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#redIcon');
    objectManager.clusters.options.set('preset', 'islands#redClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "/Content/data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}

    //if ($(".slider_pager_on").length > 0) {
    //    $(".slider_pager_on").carousel({ interval: 6500 });


    //    //устанавливаем жесткий размер обертки слайдера
    //    $(".slider_pager_on").each(function () {
    //        var SlideWr = $(this);
    //        var maxHeight = 0;
    //        $(this).find('.item').each(function () {
    //            var HeightThis = $(this).outerHeight();
    //            if (HeightThis > maxHeight) maxHeight = HeightThis;
    //        });
    //        SlideWr.find('.item').css('min-height', maxHeight);
    //    });

    //}

});
