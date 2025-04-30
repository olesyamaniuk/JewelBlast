$(function () {
  $(".w-u-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-u-reviews-list-left",
    nextArrow: ".w-u-reviews-list-right",
  });
});
$(function () {
  $(".w-u-uniqueness-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-u-uniqueness-list-left",
    nextArrow: ".w-u-uniqueness-list-right",
  });
});
