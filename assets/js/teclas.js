const box = document.querySelector('#box')
const boxDos = document.querySelector('#box-dos')

document.addEventListener('keydown', function (event){
  if(event.key === 'a'){
    box.style.backgroundColor = 'pink'
  }else if(event.key === 's'){
    box.style.backgroundColor = 'orange'
  }else if(event.key === 'd'){
    box.style.backgroundColor = 'skyblue'
  }else if(event.key === 'q'){
    boxDos.style.backgroundColor = 'purple'
  }else if(event.key === 'w'){
    boxDos.style.backgroundColor = 'grey'
  }else if(event.key === 'e'){
    boxDos.style.backgroundColor = 'brown'
  }else{
    box.style.backgroundColor = 'none'
    boxDos.style.backgroundColor = 'none'
  }
})
