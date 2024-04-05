const boxUno = document.querySelector('#box-uno')
const boxDos = document.querySelector('#box-dos')
const boxTres = document.querySelector('#box-tres')
const boxCuatro = document.querySelector('#box-cuatro')

boxUno.style.backgroundColor = 'blue'
boxDos.style.backgroundColor = 'red'
boxTres.style.backgroundColor = 'green'
boxCuatro.style.backgroundColor = 'yellow'

const changeBlack = (element) =>{
  element.style.backgroundColor = 'black'
  element.style.border = '1px white solid'
}


boxUno.addEventListener('click', () =>{
  if(boxUno.style.backgroundColor === 'black'){
    boxUno.style.backgroundColor = 'blue'
  }else{
    changeBlack(boxUno)
  }
})

boxDos.addEventListener('click', () =>{
  if(boxDos.style.backgroundColor === 'black'){
    boxDos.style.backgroundColor = 'red'
  }else{
    changeBlack(boxDos)
  }
})

boxTres.addEventListener('click', () =>{
  if(boxTres.style.backgroundColor === 'black'){
    boxTres.style.backgroundColor = 'green'
  }else{
    changeBlack(boxTres)
  }
})

boxCuatro .addEventListener('click', () =>{
  if(boxCuatro.style.backgroundColor === 'black'){
    boxCuatro.style.backgroundColor = 'yellow'
  }else{
    changeBlack(boxCuatro)
  }
})