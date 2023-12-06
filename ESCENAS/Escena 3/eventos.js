var doctora = document.querySelector('.doc')
var ventna = document.querySelector('.ventana')
var mariposa = document.querySelector('.mari')

doctora.addEventListener('click', aparece)

function aparece(){
    ventna.classList.remove('na')
    doctora.classList.remove('to')
    mariposa.classList.remove('riri')
    mariposa.classList.add('mariri')
}


