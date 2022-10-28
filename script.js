var hate_btns = document.querySelectorAll('.button_hate')
var submit = document.querySelector('.button_submit')
var classific = document.querySelector('.classification')
var hate_container = document.querySelector('.hate_container')
var thanks_container= document.querySelector('.thanks_container')


hate_btns.forEach(e =>{
    e.addEventListener('click',()=>{
        classific.innerText = e.innerText

    })
})

submit.addEventListener('click',()=>{
    hate_container.style.display = 'none'
    thanks_container.style.display = 'block'
})