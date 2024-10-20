$(function () {
    $('#section02 input').focus(function () {
        $('#section02 .formBox').addClass('active');
    });
    $('#section02 input').blur(function () {
        $('#section02 .formBox').removeClass('active');
    });

    /* section05 */
    $('#section05 .slick').slick({
        autoplay: true,
        arrows: false,
        draggable: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        vertical: true,
        autoplaySpeed: 5000
    });

    /* section06 */
    $('#section06 .slick').slick({
        arrows: false,
        variableWidth: true,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 8000
    });


});

