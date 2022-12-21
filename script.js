const next_button = document.querySelector('.next_button')
const back_button = document.querySelector('.back_button')
const submit_button = document.querySelector('.submit_button')
const back_button2 = document.querySelector('.back_button2')
const submit_button2 = document.querySelector('.submit_button2')
const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const form3 = document.querySelector('.form3')
next_button.addEventListener('click',()=>{
    form1.style.display = "none"
    form2.style.display = "flex"
})
back_button.addEventListener('click',()=>{
    form2.style.display = "none"
    form1.style.display = "flex"
})
submit_button.addEventListener('click',()=>{
    form2.style.display = "none"
    form3.style.display = "flex"
})
back_button2.addEventListener('click',()=>{
    form3.style.display = "none"
    form2.style.display = "flex"
})
submit_button2.addEventListener('click',()=>{
    form3.style.display = "none"
    alert('Yo wassup')
    form2.style.display = "none"
    form1.style.display = "flex"
})

