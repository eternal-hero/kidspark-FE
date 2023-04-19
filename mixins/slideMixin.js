export const slideMixin = {
  mounted () {
    $('#__readingHistorySlider').slick({
      arrows: true,
      speed: 1000,
      slidesToShow: 6,
      variableWidth: true,
      responsive: [{
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      }, ],
    });
  }
}
