document.addEventListener('DOMContentLoaded', function() {

    abrir = document.querySelectorAll('.i')[0]
    janela = document.querySelectorAll('.janela')[0]
    fechar = document.querySelectorAll('.fechar')[0]
    abrir.addEventListener('click', function(event) {
        janela.style.display = 'block'
    })
    fechar.addEventListener('click', function(event) {
        janela.style.display = 'none'
    })

    abrir1 = document.querySelectorAll('.i')[1]
    janela1 = document.querySelectorAll('.janela')[1]
    fechar1 = document.querySelectorAll('.fechar')[1]
    abrir1.addEventListener('click', function(event) {
        janela1.style.display = 'block'
    })
    fechar1.addEventListener('click', function(event) {
        janela1.style.display = 'none'
    })

    abrir2 = document.querySelectorAll('.i')[2]
    janela2 = document.querySelectorAll('.janela')[2]
    fechar2 = document.querySelectorAll('.fechar')[2]
    abrir2.addEventListener('click', function(event) {
        janela2.style.display = 'block'
    })
    fechar2.addEventListener('click', function(event) {
        janela2.style.display = 'none'
    })
    
})