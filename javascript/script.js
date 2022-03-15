const tabs = document.querySelectorAll('.navbar__tab')
const variableForTest = document.querySelector('.container__main')

tabs.forEach(element => {
    element.addEventListener('click', (event) => {
        tabs.forEach(element => {
            element.setAttribute('data-active', '0')
        })
        element.setAttribute('data-active', '1')
    })
})

// changeLinkState.forEach(element => {
//     element.addEventListener('mouseover', (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//         element.classList.add('active');
//         element.classList.remove('inactive')
//         element.classList.add('text__focus_color')
//     })
// })

// changeLinkState.forEach(element => {
//     element.addEventListener('mouseout', (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//         element.classList.remove('active');
//         element.classList.add('inactive')
//         element.classList.remove('text__focus_color')
//     })
// })