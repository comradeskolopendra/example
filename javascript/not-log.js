const menuMobileButton = document.querySelector('#menuMobile')
const menuMobileStack = document.querySelector('#menuMobileStack')
const contentMenu = document.querySelector('#contentMenu')
const buttonCloseMenu = document.querySelector('#buttonCloseMenu')

menuMobileButton.addEventListener('click', (event) => {
    event.preventDefault();
    menuMobileStack.classList.remove('display__none')
})

buttonCloseMenu.addEventListener('click', (event) => {
    event.preventDefault();
    menuMobileStack.classList.add('display__none')
})

contentMenu.addEventListener('click', (event) => {
    event.stopPropagation();
})