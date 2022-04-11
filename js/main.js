// Плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Реализация функционала кнопки Показать еще

const btnShowMore = document.querySelector(".lectures__btn-show-more");
const lecturesList = document.querySelector(".lectures__list");
btnShowMore?.addEventListener("click", ()=>{
  lecturesList.classList.toggle("lectures__list_more");
  if(lecturesList.classList.contains("lectures__list_more")){
    btnShowMore.textContent = "Скрыть";
  }
  else{
    btnShowMore.textContent = "Показать еще";
  }

})

// Слайдер Swiper

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.announcement__slider-button-next',
    prevEl: '.announcement__slider-button-prev',
  },
  simulateTouch: false,
  autoHeight: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide:false,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination:{
    el: ".swiper-pagination",
    type: "fraction",
  },
});