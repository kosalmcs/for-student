// AOS JS

AOS.init();

// Hero Swiper Slider

var swiper = new Swiper(".heroSwiper", {
  sliderPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  //   auotplay: {
  //     delay: 2000,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Show Hero Elements

const swiperPreBtn = document.querySelectorAll(".swiper-button-prev");
const swiperNextBtn = document.querySelectorAll(".swiper-button-next");
const heroShape1 = document.querySelector(".hero-shape-1");
const heroShape2 = document.querySelector(".hero-shape-2");

function ResetAnim(heroElement) {
  heroElement.classList.add("show-element");

  // Remove Animation
  setTimeout(() => {
    heroElement.classList.remove("show-element");
  }, 2800); //animation Duration
}

swiperNextBtn.forEach((nextBtn) => {
  nextBtn.addEventListener("click", () => {
    ResetAnim(heroShape1);
    ResetAnim(heroShape2);
  });
});
swiperPreBtn.forEach((prevtBtn) => {
  prevtBtn.addEventListener("click", () => {
    ResetAnim(heroShape1);
    ResetAnim(heroShape2);
  });
});
