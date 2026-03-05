/* View Mode Button - Hidden Text */

let viewButton = document.getElementsByClassName("viewMode")
for (let i = 0; i < viewButton.length; i++){
    viewButton[i].textContent= ""
}



/* Swiper */

let swiper = new Swiper(".mySwiper", {
      slidesPerView: 6.2,
      centeredSlides: false,
      spaceBetween: 5,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
    0:   { slidesPerView: 2.2 },
    576: { slidesPerView: 3.2 },
    768: { slidesPerView: 4.2 },
    992: { slidesPerView: 5.2 },
    1200:{ slidesPerView: 6.2 },
  }
    });

    let appendNumber = 4;
    let prependNumber = 1;
  

