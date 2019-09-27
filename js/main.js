$(document).ready(function(){

    $('.mm_btn').on('click',function () {
        $('.main_nav').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        return false;
    });

    if($(window).innerWidth() < 767){
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_nav.open").length) {
                $(".main_nav.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });
    }

    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            infinite:false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed:9000,
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<span>0'+(i+1)+'</span>' ;},
        });
    }


    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });


    if($(window).innerWidth() < 1200){
        $('.pr_list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            responsive: [

                {
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots:true
                    }
                }
            ]
        });
    }




    if($(".partners_slider > div").length >4){
        $('.partners_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots:true
                    }
                }
            ]
        });
    }




    /**********************************/




    $("#price_range").slider({
        range: true,
        min: 0,
        max: 350,
        values: [0, 150],
        step: 1,
        slide: function(event, ui) {
            $("#rub-left").text(ui.values[0] + ' руб.');
            $("#rub-right").text(ui.values[1] + ' руб.');
            /*
            if (ui.handleIndex === 0) {
                // потянули левый ползунок - переместим левый span
                $("#rub-left").css('margin-left', ui.handle.style.left);
            } else {
                // потянули правый ползунок - переместим правый span
                $("#rub-right").css('margin-left', ui.handle.style.left);
            }*/
        }
    });

    $("#rub-left").text($("#price_range").slider("values", 0) + ' руб.');
    $("#rub-right").text($("#price_range").slider("values", 1) + ' руб.');



    $('#show_category').click(function(){
        $(this).toggleClass('act').next().slideToggle();
    });

    $('#show_filter').click(function(){
        $(this).toggleClass('act').next().slideToggle();
    });



    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.product_slider',
        //vertical:true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow:2,
                }
            }
        ]
    });


    $(".dropdown-menu li p").click(function(){
        $(this).parents(".dropdown").find('.address').html($(this).html());
        $(this).parents(".dropdown").find('.address').val($(this).data('value'));
    });



   $('input#pickup').click(function(){
       $('.courier_checked').removeClass('active');
       $('.pickup_checked').addClass('active');

   });

    $('input#courier').click(function(){
        $('.pickup_checked').removeClass('active');
        $('.courier_checked').addClass('active');
    });









});


