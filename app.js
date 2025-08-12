'use strict'

import funcionario from './funcionarios/funcionarios.json' with { type: 'json' }

function criarGaleria(funcionario) {
    const galeria = document.getElementById('container')

    const img = document.createElement('img')
    img.src = funcionario.img

    const container = document.createElement('div')
    container.className = 'box'

    const titulo = document.createElement('h1')
    titulo.className = 'Nome'
    titulo.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.className = 'cargo'
    cargo.textContent = funcionario.cargo

    container.appendChild(img)
    container.appendChild(titulo)
    container.appendChild(cargo)
    galeria.appendChild(container)
}

function carregarImagens() {
    funcionario.forEach(func => criarGaleria(func))
}

carregarImagens()