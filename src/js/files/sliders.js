/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	//on home page
	if (document.querySelector('.collection-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.collection-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			// observeParents: true,
			// slidesPerView: 1.075,
			// slidesPerView: 1,
			slidesPerView: "auto",
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
			// touchAngle: 45,
			// touchRatio: 2,
			//simulateTouch: false,
			// loop: true,
			// loopedSlides:2,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				// 320:{
				// 	slidesPerView: 1,
				// 	spaceBetween: 40,
				// },
				// 640: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	// autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// slidesPerView: "auto",
				// spaceBetween: 40,
				// },
			},

			// Події
			on: {

			}
		});
	}
	//on product page
	if (document.querySelector('.thumb') && (document.querySelector('.main'))){
		console.log('done thumb main');
		let mainSlider = new Swiper('.main-product-slider', {
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Thumbs],
			speed: 800,
			slidesPerView: 1,
			// Кнопки "вліво/вправо"
			navigation: {
				nextEl: '.main-product-slider__btn-next',
				prevEl: '.main-product-slider__btn-prev',
				
				// nextEl: '.swiper-button-next',
				// prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: {
					el:'.thumb-product-slider', 
					slidesPerView: 'auto',
					// slidesPerView: 5,
					spaceBetween: 30,
				}
			}
		});
	}
}


// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});