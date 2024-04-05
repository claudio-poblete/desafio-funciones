const element = document.querySelector('#element')

const changeColor = () => {
  if(element.style.backgroundColor === 'yellow'){
    element.style.backgroundColor = 'green'
    element.style.color = 'white'
  }else{
    element.style.backgroundColor = 'yellow'
    element.style.color = 'black'
  }
}

element.addEventListener ('click', () =>{
  changeColor();
})

