// let meaning = 0;
// let next = document.querySelector(".next");


// let slider = {
//     nameItem: document.querySelector(".slider-items"),
//     swipeNext: function swipe() {
//         meaning = meaning + 113.8;
//         if (meaning > 455.2) {
//             meaning = 0
//         }
//         slider.nameItem.style.left = -meaning + "em";
//     },
//     swipePrev: function swipe() {
//         meaning = meaning - 113.8;
//         if (meaning < 0) {
//             meaning = 455.2;
//         }
//         slider.nameItem.style.left = -meaning + "em";
//     },

// };

// next.addEventListener('click', slider.swipeNext);
// prev.addEventListener('click', slider.swipePrev);


// Test

let position = 0;
let slidesToShow = 2;
let slidesToScroll = 1;
let sliderWrap = document.querySelector(".slider-wrap");
let sliderItems = document.querySelector(".slider-items");
let sliderItem = document.querySelectorAll(".slider-item");
let bulit = document.querySelector(".slider-bulit")
let builds = document.querySelector('.slider-bulits')
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let itemWidth = sliderWrap.clientWidth / slidesToShow;
let movePosition = slidesToScroll * itemWidth;
let itemCount = sliderItem.length;



sliderItem.forEach((item) => {
    item.style.minWidth = itemWidth + "px"
})

bulit.forEach((it) => {
    it.addEventListener("click", function() {
        console.log(1);
    })
})


// next.addEventListener("click", function() {

//     position -= movePosition
//     setPosition();
//     checkBtn();
// })

// prev.addEventListener("click", function() {
//     position += movePosition
//     setPosition();
//     checkBtn();
// })



// function setPosition() {
//     sliderItems.style.transform = `translateX(${position}px)`;
// }

// function checkBtn() {
//     if (position === 0) {
//         prev.style.display = 'none'
//     } else {
//         prev.style.display = 'block'
//     }
// }


// checkBtn()