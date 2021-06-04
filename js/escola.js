document.addEventListener('DOMContentLoaded', function() {
    
    value_l = localStorage.getItem('local_procu')
    value_ni = localStorage.getItem('nivel_procu')
    value_c = localStorage.getItem('curso_procu')
    value_d1 = localStorage.getItem('dimdim1_procu')
    value_d2 = localStorage.getItem('dimdim2_procu')

    // if (value != null) {

    span_l = document.querySelector('.local')
    span_ni = document.querySelector('.nivel')
    span_c = document.querySelector('.curso')
    span_d1 = document.querySelector('.dimdim1')
    span_d2 = document.querySelector('.dimdim2')

    // span_l.innerHTML = value_l
    span_l.innerHTML = value_l
    span_ni.innerHTML = value_ni
    span_c.innerHTML = value_c  
    span_d1.innerHTML = value_d1 
    span_d2.innerHTML = value_d2


    // }

})
