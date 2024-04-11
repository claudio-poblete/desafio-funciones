const element = document.querySelector('#element')

element.style.backgroundColor = 'green'

// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función
const pintar = (elemento) => elemento.style.backgroundColor = 'yellow'
element.addEventListener('click', () => pintar(element))


// Modifica el código anterior para poder pasarle un color como argumento a la
// función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
// párrafo se debe pasar amarillo como color
const pint = (elemento, color) => elemento.style.backgroundColor = color
element.addEventListener('click', () => pint(element, 'yellow'))