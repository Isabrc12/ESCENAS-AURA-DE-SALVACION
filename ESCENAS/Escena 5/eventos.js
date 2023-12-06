var igor = document.querySelector('.igor')
var mariposa =document.querySelector('.mari')
var mari = document.querySelector('.mar')
var text = document.querySelector('.emma')
var parafo = document.querySelector('.dialogo')

igor.addEventListener('click', desaparece)

function desaparece(){
    mariposa.classList.remove('posa')
    igor.classList.remove('chao')
}

text.addEventListener('click', sube)

function sube() {
    mari.classList.remove('ipo')
    
    parafo.classList.remove('ocul')
    parafo.classList.add('aparece')
    text.classList.remove('chai')
}