(function ($) {
    'use strict';

    /* Cart Currency Search toggle active */
    $(".header-cart a").on("click", function (e) {
        e.preventDefault();
        $(this).parent().find('.shopping-cart-content').slideToggle('medium');
    })

    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.transparent-bar');
    var win = $(window);

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });

    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });


    /* Slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* Best selling active */
    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    /* Best selling active */
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1100: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    /* Testimonial active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* Brand logo active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 5,
        margin: 80,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            480: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 4,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 100,
            },
            1200: {
                items: 5
            }
        }
    })


    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });


    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function () {
        sliderrange.slider({
            range: true,
            min: 0,
            max: 1200,
            values: [0, 800],
            slide: function (event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-right"></i></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*------ Wow Active ----*/
    new WOW().init();

    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*-------------------------------------
        Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $('.thumb-menu a').on('click', function () {
        $('.thumb-menu a').removeClass('active');
    })


    /*---------------------
    shop grid list
    --------------------- */
    $('.view-mode li a').on('click', function () {
        var $proStyle = $(this).data('view');
        $('.view-mode li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.product-view').removeClass('product-grid product-list').addClass($proStyle);
    })

    /* blog gallery slider */
    $('.blog-gallery-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });


    $('.testimonial-2-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            992: {
                items: 2
            },
            1024: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });


    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    // Логика прилипания хедера
    if ($(window).scrollTop() >= 100) {
        $('.header__bottom').addClass('fixed');
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.header__bottom').addClass('fixed');
        } else {
            $('.header__bottom').removeClass('fixed');
        }
    });
    // Логика каруселей на главной
    var owl = $('.common-owl').owlCarousel({
        loop: false,
        margin: 32,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        nav: true,
        dots: true,
        autoWidth: true,
        navText: '',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
        }
    })
    var gallery = $('.product__left-gallery').owlCarousel({
        loop: true,
        margin: 32,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        nav: true,
        autoWidth: true,
        navText: '',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            900: {
                items: 4
            },
        }
    })
    gallery.on('changed.owl.carousel', function(event) {
        var myLightbox2 = GLightbox({
            'selector': '#gallery a'
        });
    })
    // Логика работы мобильного меню
    $('.menu-burger').on('click', function () {
        $('.mobile-menu').slideDown();
        $('body').addClass('body-overflow');
    });
    $('.close-menu').on('click', function () {
        $('.mobile-menu').slideUp();
        $('body').removeClass('body-overflow');
    });
    // добавления в корзину
    function addToCart(id,count,number){
        $('.lodding-shopping').addClass('active');
        var post_id = id,
            counter = count,
            field = number;
        var data = {
            'action': 'add_cart',
            'ID': post_id,
            'counter': counter,
            'field': field,
            'page': page_id_ajax
        };
        $('.cart-append-ajax').html('');
        if(post_id>0){
            $.ajax({
                type: 'POST',
                url: '/wp-admin/admin-ajax.php',
                data: data,
                success: function(data) {
                    if(data.cart == true && data.count_cart==0){
                        document.location.replace("/cart");
                    } else {
                        $('.cart-counters-js').attr('data-count',data.count_cart);
                        $('.cart-append-ajax').html(data.cart_header);
                        $('.cart-result-js-2').html(data.cart_price);
                        $('.cart-result-js-sale').html(data.procent);
                        $('.cart-result-js-1').html(data.cart_no_sale);
                        if(data.cart == true){
                            $("body .js-card-"+data.element).hide();
                        }
                    }
                    $('.lodding-shopping').removeClass('active');
                },
                dataType: 'json'
            });
        }
    }
    // Логика работы колиества товаров
    $('.item__price__li__minus').on('click', function () {
        let post_id = $(this).attr('data-id'),
            item = $(this).attr('data-item');
        let count = Number($(this).next('.item__price__li__count').html());
        $(this).next('.item__price__li__count').next('.item__price__li__plus').removeClass('item__price__li__inactive');
        if (count > 1) {
            count--;
            $(this).next('.item__price__li__count').html(count);
            addToCart(post_id,count,item);
        } else {
            $(this).next('.item__price__li__count').html('0');
            $(this).addClass('item__price__li__inactive');
            addToCart(post_id,0,item);
        }
    });
    $('.item__price__li__plus').on('click', function () {
        let post_id = $(this).attr('data-id'),
            item = $(this).attr('data-item');
        let count = Number($(this).prev('.item__price__li__count').html());
        $(this).prev('.item__price__li__count').prev('.item__price__li__minus').removeClass('item__price__li__inactive');
        if (count < 998) {
            count++;
            $(this).prev('.item__price__li__count').html(count);
            addToCart(post_id,count,item);
        } else {
            $(this).prev('.item__price__li__count').html('999');
            $(this).addClass('item__price__li__inactive');
        }
    });
    // Логика работы корзины
    if (screen.width > 991) {
//         $('.header__cart-wrap').on('click', function () {
//             $('.cart-hover').toggleClass('hide-cart');
//         });
//         $('.cart-hover').on('click', function () {
//             $(this).toggleClass('hide-cart');
//         });
//         $('.header__cart-wrap').on('mouseleave', function () {
//             $('.cart-hover').removeClass('hide-cart');
//         });
//     } else {
        $('.header__cart-wrap').on('mouseenter', function () {
            $('.cart-hover').addClass('hide-cart');
        });
        $('.header__cart-wrap').on('mouseleave', function () {
            $('.cart-hover').removeClass('hide-cart');
        });
    }
    // // яндекс карты метки
    if ($("#shopsmap").length > 0) {
        ymaps.ready(init);
        function init () {

            var myMap = new ymaps.Map('shopsmap', {
                    center: [55.76, 37.64],
                    zoom: 10,
                    controls: ['zoomControl', 'fullscreenControl']
                }, {
                    searchControlProvider: '',
                    zoomControlPosition: { right: 10, top: 50 }
                }),
                objectManager = new ymaps.ObjectManager({
                    clusterize: true,
                    geoObjectOpenBalloonOnClick: false,
                    clusterOpenBalloonOnClick: false
                });
            myMap.geoObjects.add(objectManager);
            objectManager.add(collection);
            function getIdEvent (e) {
                var objectId = e.get('objectId');
                $('.map__sidebar-hidden').removeClass('active');
                $('.js-open-'+objectId).addClass('active');
            }
            objectManager.objects.events.add('click', getIdEvent);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                myMap.behaviors.disable('drag');
            }
        }
    }
    // // Логика работы стоимоcти в корзине
    // $('.cart__table__cell .item__price__li__plus').on('click', function () {
    //     let price = Number($(this).parents('.cart__table__cell').prev('.cart__table__cell').children('.item__price__li__left').children('.item__price__li__price').children('span').html());
    //     let count = Number($(this).prev('.item__price__li__count').html());
    //     price = price * count;
    //     $(this).parents('.cart__table__cell').next('.cart__table__cell').children('.item__price__li__price').children('span').html(price);
    // });
    // $('.cart__table__cell .item__price__li__minus').on('click', function () {
    //     let price = Number($(this).parents('.cart__table__cell').prev('.cart__table__cell').children('.item__price__li__left').children('.item__price__li__price').children('span').html());
    //     let count = Number($(this).next('.item__price__li__count').html());
    //     price = price * count;
    //     $(this).parents('.cart__table__cell').next('.cart__table__cell').children('.item__price__li__price').children('span').html(price);
    // });
    // Логика удаления товара из корзины
    $('.cart__table__cell__delete').on('click', function () {
        $('.lodding-shopping').addClass('active');
        let post_id = $(this).attr('data-id'),
            field = $(this).attr('data-item'),
            this_i = $(this);

        var data = {
            'action': 'del_cart',
            'ID': post_id,
            'field': field,
            'page': page_id_ajax
        };
        $('.cart-append-ajax').html('');
        if(post_id>0){
            $.ajax({
                type: 'POST',
                url: '/wp-admin/admin-ajax.php',
                data: data,
                success: function(data) {
                    if(data.cart == true && data.count_cart==0){
                        document.location.replace("/cart");
                    } else {
                        $('.cart-counters-js').attr('data-count',data.count_cart);
                        $('.cart-append-ajax').html(data.cart_header);
                        $('.cart-result-js-2').html(data.cart_price);
                        $('.cart-result-js-sale').html(data.procent);
                        $('.cart-result-js-1').html(data.cart_no_sale);
                        this_i.parents('.cart__table__row').hide();
                    }
                    $('.lodding-shopping').removeClass('active');
                },
                dataType: 'json'
            });
        }
    });
    $('body').on('click','.map__sidebar__close', function () {
        $(this).parent().removeClass('active');
    });
    $('body').on('click','.cart-hover__list__item__delete', function () {
        $('.lodding-shopping').addClass('active');
        let post_id = $(this).attr('data-id'),
            field = $(this).attr('data-item');
        var data = {
            'action': 'del_cart',
            'ID': post_id,
            'field': field,
            'page': page_id_ajax
        };
        $('.cart-append-ajax').html('');
        if(post_id>0){
            $.ajax({
                type: 'POST',
                url: '/wp-admin/admin-ajax.php',
                data: data,
                success: function(data) {
                    if(data.cart == true && data.count_cart==0){
                        document.location.replace("/cart");
                    } else {
                        $('.cart-counters-js').attr('data-count',data.count_cart);
                        $('.cart-append-ajax').html(data.cart_header);
                        $('.cart-result-js-2').html(data.cart_price);
                        $('.cart-result-js-sale').html(data.procent);
                        $('.cart-result-js-1').html(data.cart_no_sale);
                        if(data.cart != true){
                            $("body .js-card-"+data.element).each(function () {
                                $(this).text("0");
                            });
                        } else {
                            $("body .js-card-"+data.element).each(function () {
                                $(this).hide();
                            });
                        }
                        $('.lodding-shopping').removeClass('active');
                    }
                },
                dataType: 'json'
            });
        }
    });
    function validatePhone(phoneNumber) {
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return re.test(phoneNumber);
    }
    $(".js-button-cart").submit(function() { return false; });
    $(".js-button-cart").on("click", function(){

        var form   = $(this).parents('.js-order-cart'),
            name = form.find('#name').val(),
            phone = form.find('#phone').val(),
            date = form.find('#date-select option:selected').val(),
            date_current = form.find('#date').val(),
            from_time = form.find('#from-time').val(),
            to_time = form.find('#to-time').val();
        var date_cur = true;
        if(!validatePhone(phone)){
            form.find('#phone').addClass('error');
        } else {
            form.find('#phone').removeClass('error');
        }
        if(name.length > 2){
            form.find('#name').removeClass('error');
        } else {
            form.find('#name').addClass('error');
        }
        if(date != "today" && date != "tomorrow"){
            if(date=="other" && date_current.length<5){
                form.find('#date').addClass('error');
                date_cur = false;
            } else {
                form.find('#date').removeClass('error');
                date_cur = true;
            }
        }
        /*if(from_time.length < 1){
            form.find('#from-time').addClass('error');
        } else {
           form.find('#from-time').removeClass('error');
       }*/
        if(to_time.length < 1 ){
            form.find('#to-time').addClass('error');
        } else {
            form.find('#to-time').removeClass('error');
        }
        if(name.length > 2 && validatePhone(phone) && date_cur==true  && to_time.length>1){
            $('.lodding-shopping').addClass('active');
            $.ajax({
                url: "/wp-admin/admin-ajax.php",
                type: "POST",
                data: 'action=order_cart&' + form.serialize(),
                dataType: "json",
                success: function(data){
                    if(data.message) {
                        document.location.replace("/cart?order=send");
                        $('.lodding-shopping').removeClass('active');
                    }
                }
            });
        }
        return false;
    });
    // Логика масок ввода
    $('input[type="tel"]').inputmask('+7(999)999-99-99');
    // Логика работы селекта с выбором даты
    $('.cart__date-select').on('change', function () {
        if ($(this).val() == 'other') {
            $('.date-label').show();
        } else {
            $('.date-label').hide();
        }
    });
    var myLightbox = GLightbox({
        'selector': '.spotlight'
    });
    $('.loyalty-first__down-arrow-link').on('click', function() {
        var destination = $(this).data('destination');
        $('html, body').animate({
            scrollTop: $(destination).offset().top - $('.header__bottom').height()
        }, 1000);
    });
    $('.overlay__btn').on('click', function () {
        $('.overlay').hide();
        document.cookie = "popup_close=true";
    });

    /* Safari style only */
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
        $('<link rel="stylesheet" href="/wp-content/themes/beer/assets/css/safari.css">').appendTo('body');
    }

})(jQuery);
