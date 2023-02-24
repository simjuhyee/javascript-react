let links = {
  SetColor : function(color){
    let alist = document.querySelectorAll('a')
  let i = 0;
  while(alist.length > i){
      console.log(alist[i])
      alist[i].style.color = color
      i++
  }
  }
}

let body = {
  SetColor : function(color){
    document.querySelector('body').style.color = color
  },
  SetBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color
  },
}

function nightDayHandler (self){
  var target = document.querySelector('body')
    if(this.value === 'night'){
    body.SetBackgroundColor('#000')
    body.SetColor('#fff')
    this.value = 'day'
    links.SetColor('powderblue')

  }else{
    body.SetBackgroundColor('#FFF')
    body.SetColor('#000')
    this.value = 'night'
    links.SetColor('blue')
  }
}