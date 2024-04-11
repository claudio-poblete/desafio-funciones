let box = document.querySelector('#box')
let container = document.querySelector('#container')
let div = document.createElement('div')

document.addEventListener('keydown', (event)=>{
  if(event.key === 'a'){
    box.style.backgroundColor = 'pink'
  }else if(event.key === 's'){
    box.style.backgroundColor = 'orange'
  }else if(event.key === 'd'){
    box.style.backgroundColor = 'skyblue'
  }else{
    box.style.backgroundColor = 'black'
    boxDos.style.backgroundColor = 'black'
  }
})

document.addEventListener('keydown', (event)=>{
  if(event.key === 'q'){
    div.setAttribute('class', 'box')
    div.style.backgroundColor = 'purple'
    container.append(div)
  }else if(event.key === 'w'){
    div.setAttribute('class', 'box')
    div.style.backgroundColor = 'grey'
    container.append(div)
  }else if(event.key === 'e'){
    div.setAttribute('class', 'box')
    div.style.backgroundColor = 'brown'
    container.append(div)
  }else{
    container.removeChild(div)
  }
})
