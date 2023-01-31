$(function () {


    $('.mainslide').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });

    $('.mainVisual .slide_arrow i:first-child').on('click', function () {
        $('.mainslide').slick('slickPrev')
    });
    $('.mainVisual .slide_arrow i:last-child').on('click', function () {
        $('.mainslide').slick('slickNext')
    });


})