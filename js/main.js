(function ($) {
    "use strict";

    //    preloader
    $(window).load(function () {
        $("#loading").fadeOut(500);
    })



    //menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile',
        meanScreenWidth: "991"
    });

    //    sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 5) {
            sticky.removeClass('sticky-menu');
        } else {
            $('#sticky-header').addClass('sticky-menu')
        }

    });


    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });




    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //slick

    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-img-active'
    });
    $('.testimonial-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    });




    //wow
    new WOW().init();


    //pop-up video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    //faq

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }


    //brand

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


    //    scroll
    $('body').materialScrollTop();



})(jQuery);
