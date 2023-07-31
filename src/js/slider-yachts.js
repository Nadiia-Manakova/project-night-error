$('.autoplay').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    dotsClass: "my-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-next"><img src="./img/right.svg" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/left.svg" alt="prev"></button>'
    
});