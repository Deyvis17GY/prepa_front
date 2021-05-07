const btn = document.querySelector('.click')
const title = document.querySelector('.titulo')


btn.addEventListener('click',()=>{
    btn.disabled = true
    title.textContent = 'Tocame'
})

title.addEventListener('click',()=>{
    title.textContent = 'Desabilitar el Botón'
    btn.disabled = false
})

