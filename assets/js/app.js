$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

//  Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

//  Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.attr('data-scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);


    });

//    Menu nav toggle

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    });

//    Collapse

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.attr('data-collapse');

        $this.toggleClass("active");
    });

//    Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});