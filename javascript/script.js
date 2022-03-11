const changeLinkState = document.querySelectorAll('.navbar__tab')

changeLinkState.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        changeLinkState.forEach(element => {
            element.classList.remove('active')
            element.setAttribute('data-active', '0')
        })
        element.classList.add('active');
        element.setAttribute('data-active', '1')
    })
})