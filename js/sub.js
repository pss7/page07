$(function () {

    /* 폼 */
    $('.inputTextBox input[type="text"]').keyup(function () {

        if ($(this).val().length > 0) {
            $('.combtn').prop('disabled', false);
            $('.combtn').removeClass('disabled');
            $(this).parents('.inputTextBox').find('.textDelBtn').show();
            $(this).parents('.inputTextBox').find('.voice').hide();
        } else {
            $('.combtn').prop('disabled', true);
            $('.combtn').addClass('disabled');
            $(this).parents('.inputTextBox').find('.textDelBtn').hide();
            $(this).parents('.inputTextBox').find('.voice').show();
        }

    });

    /* 인풋 */
    $('.inputTextBox input[type="text"]').focus(function () {
        $(this).parent('.inputTextBox').addClass('focus');
        if ($(this).parent().hasClass('ResultBox')) {
            $(this).parent('.inputTextBox').removeClass('focus');
        }
    });
    $('.inputTextBox input[type="text"]').blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent('.inputTextBox').removeClass('focus');
        }
    });

    $('.quickCommonPopup input[type="text"]').focus(function () {
        $('.formBorder').hide();
    });
    $('.quickCommonPopup input[type="text"]').blur(function () {
        $('.formBorder').show();
    });

    /* 인풋-텍스트 지우기 */
    $('.textDelBtn').click(function () {
        $(this).hide();
        $(this).siblings('.inputTextBox input[type="text"]').val('');
        $('.inputTextBox').removeClass('focus');
        $('.combtn').prop('disabled', true);
        $('.combtn').addClass('disabled');
    });

    $('.agreeCommonPopup .agreeBox label').click(function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.agreeCommonPopup .agreeBox').next().slideUp();
        } else {
            $(this).addClass('active');
            $('.agreeCommonPopup .agreeBox').next().slideDown();
        }

    });

    /* 즐겨찾기 */
    $('.favoritesWrap .favoritesList li .favoritesBtn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    /* 즐겨찾기-탭 */
    $('.favoritesContentBox .favoritesList').hide();
    $('.favoritesContentBox .favoritesList').first().show();
    $('.favoritesWrap .tab li').click(function () {

        var Idx = $(this).index();

        $('.favoritesWrap .tab li').children().removeClass('active');
        $(this).children().addClass('active');

        $('.favoritesContentBox .favoritesList').hide();
        $('.favoritesContentBox .favoritesList').eq(Idx).show();

    });

    /* 즐겨찾기-필터 */
    $('.statusCommonPopup01 .select').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    /* 퀵-상세정보 */
    $('.quickWrap .infoBtn').click(function () {
        if ($('.quickWrap .infoBtn').hasClass('active')) {
            $('.quickWrap .infoBtn').removeClass('active');
            $('.quickWrap .detailInfoText').fadeOut();
        } else {
            $('.quickWrap .infoBtn').addClass('active');
            $('.quickWrap .detailInfoText').fadeIn();
        }
    });

    $('.favoritesBtn02').click(function () {
        if ($('.favoritesBtn02').hasClass('active')) {
            $('.favoritesBtn02').removeClass('active');
        } else {
            $('.favoritesBtn02').addClass('active');
        }
    });

    /* 퀵-특이사항 */
    $('.checkInput input').change(function () {
        if ($(this).is(':checked')) {
            $('.checkInputBox').show();
        } else {
            $('.checkInputBox').hide();
        }
    });

    /* 퀵-결제수단 */
    $('.paymentCommonPopup01 .slick').slick({
        variableWidth: true,
        autoplay: false,
        arrows: false,
        dots: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 5000
    });

    /* 퀵-물품정보 */
    $('.quickWrap .articelSelectBox a').click(function () {
        $('.quickWrap .articelSelectBox a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.quickWrap .select').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        return false;
    });

    $('.quickWrap .articleSizeList li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.quickWrap .articleSizeList li a').removeClass('active');
            $(this).addClass('active');
        }
        return false;
    });

    /* 이용현황-필터 */
    $('.statusCommonPopup01 .filterList li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    /* 내정보-고객센터 */
    $('.serviceCenterWrap .tab02 li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.serviceCenterWrap .tab02 li a').removeClass('active');
            $(this).addClass('active');
        }
    });

    /* 내정보-문의하기 */
    $('.selectBox .select').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    /* 내정보-설정 */
    $('.modeBox button').click(function () {
        if ($(this).parent().hasClass('on')) {
            $(this).parent().removeClass('on');
            $(this).parent().addClass('off');
        } else {
            $(this).parent().removeClass('off');
            $(this).parent().addClass('on');
        }
    });
    $('.modeBox button').click(function () {
        if ($(this).hasClass('offBtn')) {
            $(this).parent().removeClass('on');
            $(this).parent().addClass('off');
        } if ($(this).hasClass('onBtn')) {
            $(this).parent().removeClass('off');
            $(this).parent().addClass('on');
        }
    });

});