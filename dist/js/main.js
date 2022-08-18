(function ($) {

	$('.menu-toggle--burger').on('click', function() {
		$(this).toggleClass('toggled');
        $('.site-header_menu').toggleClass('open');
        $('body').toggleClass('no-scroll');
    });

    /* === Slick init ======*/
	$('.main-section_content').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        fade: true,
        pauseOnHover: false
    });

    $('.gallery-block').slick({
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        dots: true,
        pauseOnHover: true,
        responsive: [
            {    
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {    
                breakpoint: 760,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* Плавные якоря ====*/
    $(document).ready(function() {
        $('.site-header_menu__item a').click(function(){
            $('.site-header_menu').removeClass('open');
            $('.menu-toggle--burger').removeClass('toggled');
            $('body').removeClass('no-scroll');
            
            var el = $(this).attr('href');
            el = el.replace(/[^\#]*/, ''); 
            $('body,html').animate({
            scrollTop: $(el).offset().top}, 1000);
            return false;
        });
    });

    /* Кнопка прокрутки вверх ======*/
    $(function (){
        $("#back-top").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 600){
                $("#back-top").fadeIn();
            } else{
                $("#back-top").fadeOut();
            }
        });

        $("#back-top").click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });


    /* Добавление анимации по классу ====*/
    $('.title-section').addClass('revealator-slideup');
    $('.section-feedback .input-form:nth-child(1)').addClass('revealator-zoomin revealator-delay1');
    $('.section-feedback .input-form:nth-child(2)').addClass('revealator-zoomin revealator-delay2');

    let header_height = $('.site-header').outerHeight(true);
    // $('body').css(
    //     'padding-top', header_height
    // );

    $('.site-header_menu__item').find('.sub-menu').parent('li').addClass('has_sub-menu');


})(jQuery);	
