document.addEventListener('DOMContentLoaded', function() {

    nome = document.querySelector('.nome')
    idade = document.querySelector('.idade')
    dimdim = document.querySelector('.dimdim')
    curso = document.querySelector('.curso')
    local = document.querySelector('.local')
    estilo = document.querySelector('.estilo')
    nivel = document.querySelector('.nivel')

    botao = document.querySelector('.botao')

    botao.addEventListener('click', function(event) {

        value_no = nome.value
        value_i = idade.value
        value_d = dimdim.value
        value_c = curso.value
        value_l = local.value
        value_e = estilo.value 
        value_ni = nivel.value  

        localStorage.setItem('nome_perfil', value_no)
        localStorage.setItem('idade_perfil', value_i)
        localStorage.setItem('dimdim_perfil', value_d)
        localStorage.setItem('curso_perfil', value_c)
        localStorage.setItem('local_perfil', value_l)
        localStorage.setItem('estilo_perfil', value_e)
        localStorage.setItem('nivel_perfil', value_ni)


        // DICA: O comportamento padrão do clique
        // no botão (redirecionar para result.html)
        // pode ser bloqueado se você descomentar
        // a linha abaixo. Nesse exemplo, queremos
        // que esse comportamento aconteça, então
        // a linha está comentada.

        //event.preventDefault()

    })

})
