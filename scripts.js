$(".burger").on("click", function () {
    $(".burger").toggleClass("change");
    $(".nav").toggleClass("change");
})

$('.check-btn').on("click", function () {
    $(window).scrollTop($contactFromTop);
})

let $realizationFromTop = $('.realization').offset().top;
let $locationsFromTop = $('.locations').offset().top;
let $opinionsFromTop = $('.opinions').offset().top;
let $contactFromTop = $('.contact-section').offset().top;
let $abtUsFromTop = $('.abt-us').offset().top;


let $navHeight = $('.nav').outerHeight();
let $menuHeight = $('.menu').outerHeight();

$('.one').on('click', function () {
    if ($(window).innerWidth() > 1024) {
        $(window).scrollTop($abtUsFromTop);
    } else {
        $(window).scrollTop($abtUsFromTop + $menuHeight);
    }
})

$('.two').on('click', function () {
    if ($(window).innerWidth() > 1024) {
        $(window).scrollTop($realizationFromTop);
    } else {
        $(window).scrollTop($realizationFromTop + $menuHeight);
    }
})

$('.three').on('click', function () {
    if ($(window).innerWidth() > 1024) {
        $(window).scrollTop($locationsFromTop);
    } else {
        $(window).scrollTop($locationsFromTop + $menuHeight);
    }
})

$('.four').on('click', function () {
    if ($(window).innerWidth() > 1024) {
        $(window).scrollTop($opinionsFromTop);
    } else {
        $(window).scrollTop($opinionsFromTop + $menuHeight);
    }
})

$('.five').on('click', function () {
    if ($(window).innerWidth() > 1024) {
        $(window).scrollTop($contactFromTop);
    } else {
        $(window).scrollTop($contactFromTop + $menuHeight);
    }
})
