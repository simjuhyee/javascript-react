// document.querySelectorAll('.tab-button')[0].addEventListener('click', function(){
//   document.querySelectorAll('.tab-button')[0].classList.add('orange')
//   document.querySelectorAll('.tab-content')[0].classList.add('show')
//   // 기존 class 제거
//   document.querySelectorAll('.tab-button')[1].classList.remove('orange')
//   document.querySelectorAll('.tab-button')[2].classList.remove('orange')
//   document.querySelectorAll('.tab-content')[1].classList.remove('show')
//   document.querySelectorAll('.tab-content')[2].classList.remove('show')
// })
// document.querySelectorAll('.tab-button')[1].addEventListener('click', function(){
//   document.querySelectorAll('.tab-button')[1].classList.add('orange')
//   document.querySelectorAll('.tab-content')[1].classList.add('show')
//   // 기존 class 제거
//   document.querySelectorAll('.tab-button')[0].classList.remove('orange')
//   document.querySelectorAll('.tab-button')[2].classList.remove('orange')
//   document.querySelectorAll('.tab-content')[0].classList.remove('show')
//   document.querySelectorAll('.tab-content')[2].classList.remove('show')
// })
// document.querySelectorAll('.tab-button')[2].addEventListener('click', function(){
//   document.querySelectorAll('.tab-button')[2].classList.add('orange')
//   document.querySelectorAll('.tab-content')[2].classList.add('show')
//   // 기존 class 제거
//   document.querySelectorAll('.tab-button')[0].classList.remove('orange')
//   document.querySelectorAll('.tab-button')[0].classList.remove('orange')
//   document.querySelectorAll('.tab-content')[1].classList.remove('show')
//   document.querySelectorAll('.tab-content')[1].classList.remove('show')
// })


// $('.tab-button').on('click', function(){
//   $(this).addClass('orange')
//   $(this).addClass('show')
//   $(this).siblings().removeClass('orange')
//   $(this).siblings().removeClass('show')
// })
let tabBtn = $('.tab-button')
let tabContent = $('.tab-content')
for(let i = 0;  i < tabBtn.length; i++){
  tabBtn[i].addEventListener('click', function(){
    tabBtn[i].classList.add('orange')
    tabContent[i].classList.add('show')
    // 기존 class 제거
    document.querySelector(".list").childNodes.classList.remove('orange')
    document.querySelector(".container").childNodes.classList.remove('show')
    document.querySelector(".list").childNodes.classList.remove('orange')
    document.querySelector(".container").childNodes.classList.remove('show')
  })
}


function tab(){

}