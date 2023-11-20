addEventListener('DOMContentLoaded', () => {

let btn = document.querySelector('.sidebar-logo');

btn.addEventListener('click', ()=> {
    let allDivs = document.querySelectorAll('div');
    allDivs.forEach( (allDivs) => {
        console.log(allDivs.classList)
        allDivs.classList.add('show-border')
    })
    

    // if (all.getAttribute('class') === 'show-border') {
    //     console.log('got attbiute')
    //     all.setAttrbute('class', 'hide-border')
    // }




})

}); 