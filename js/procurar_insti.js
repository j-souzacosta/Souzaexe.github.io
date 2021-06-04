document.addEventListener('DOMContentLoaded', function() {

    local = document.querySelector('.local')
    nivel = document.querySelector('.nivel')
    curso = document.querySelector('.curso')
    dimdim1 = document.querySelector('.dimdim1')
    dimdim2 = document.querySelector('.dimdim2')

    botao = document.querySelector('.botao')

    botao.addEventListener('click', function(event) {

        value_l = local.value
        value_ni = nivel.value
        value_c = curso.value
        value_d1 = dimdim1.value
        value_d2 = dimdim2.value

        localStorage.setItem('local_procu', value_l)
        localStorage.setItem('nivel_procu', value_ni) 
        localStorage.setItem('curso_procu', value_c)
        localStorage.setItem('dimdim1_procu', value_d1) 
        localStorage.setItem('dimdim2_procu', value_d2)

        // DICA: O comportamento padrão do clique
        // no botão (redirecionar para result.html)
        // pode ser bloqueado se você descomentar
        // a linha abaixo. Nesse exemplo, queremos
        // que esse comportamento aconteça, então
        // a linha está comentada.

        //event.preventDefault()

    })

})
