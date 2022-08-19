let menubtn = document.querySelector('.menuwrapper')
let closemenubtn = document.querySelector('.top-menu-closer i')
let mobilemenu = document.querySelector('.mobile-menu')
let body = document.querySelector('body')
menubtn.addEventListener('click', function () {
    mobilemenu.style.transform = 'translateX(0)'
    closemenubtn.addEventListener('click', () => {
        mobilemenu.style.transform = 'translateX(-100%)'
    })

})
let searchbtn = document.querySelector('.bi-search')
let search = document.querySelector('.search')
searchbtn.addEventListener('click', () => {
    search.style.scale = '1'
    body.addEventListener('click', () => {
        search.style.scale = '0'
    }, true)
})
let registersection = document.querySelector('.register i')
let registerdrop = document.querySelector('.register-dropdown')
registersection.addEventListener('click', () => {
    registerdrop.style.scale = '1'
    registerdrop.style.border = '1px solid rgb(96, 96, 96)'
    body.addEventListener('click', () => {
        registerdrop.style.scale = '0'
        registerdrop.style.border = 'none'
    }, true)
})

let header = document.querySelector('header')
document.addEventListener('scroll', function () {
    if (window.scrollY > 88) {
        header.classList.add('headeractive')
    }
    else {
        header.classList.remove('headeractive')

    }
})