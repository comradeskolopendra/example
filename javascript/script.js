const tabs = document.querySelectorAll('.navbar__tab')

tabs.forEach(element => {
    element.addEventListener('click', () => {
        tabs.forEach(element => {
            element.setAttribute('data-active', '0')
        })
        element.setAttribute('data-active', '1')
    })
})