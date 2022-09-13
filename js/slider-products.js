function sliderProducts() {
  new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 62,
    grabCursor: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
}
sliderProducts();