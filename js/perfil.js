document.addEventListener('DOMContentLoaded', function() {

    value_no = localStorage.getItem('nome_perfil')
    value_i = localStorage.getItem('idade_perfil')
    value_d = localStorage.getItem('dimdim_perfil')
    value_c = localStorage.getItem('curso_perfil')
    value_l = localStorage.getItem('local_perfil')
    value_e = localStorage.getItem('estilo_perfil') 
    value_ni = localStorage.getItem('nivel_perfil')

    // if (value != null) {

    span_no = document.querySelector('.nome')
    span_i = document.querySelector('.idade') 
    span_d = document.querySelector('.dimdim')
    span_c = document.querySelector('.curso')
    span_l = document.querySelector('.local')
    span_e = document.querySelector('.estilo')
    span_ni = document.querySelector('.nivel')

    span_no.innerHTML = value_no
    span_i.innerHTML = value_i
    span_d.innerHTML = value_d
    span_c.innerHTML = value_c 
    span_l.innerHTML = value_l
    span_e.innerHTML = value_e
    span_ni.innerHTML = value_ni


    // }

})
