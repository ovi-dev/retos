

const tilde = document.createElement('h1');
tilde.innerText = 'hola Adrian como estas desde el DOM element'


const boton = document.createElement('button')
boton.innerText = 'Vale'


boton.addEventListener('click', () => {
    tilde.innerText = 'Vale se cambio'
    alert('le distes al boton')

})







document.body.append(tilde);
document.body.append(boton);