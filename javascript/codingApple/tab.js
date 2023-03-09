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
// // })
// let tabBtn = $('.tab-button')
// let tabContent = $('.tab-content')
// for(let i = 0;  i < tabBtn.length; i++){
//   $('.tab-button').eq(i).on('click', function(){
//     tab(i)
//   })
// }

function tab(n){
  $('.tab-button').removeClass('orange')
  $('.tab-button').eq(n).addClass('orange')
  $('.tab-content').removeClass('show')
  $('.tab-content').eq(n).addClass('show')
}

$('.list').click(function(e){
   tab(e.target.dataset.id)

})