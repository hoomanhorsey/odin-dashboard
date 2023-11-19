addEventListener('DOMContentLoaded', () => {

let btn = document.querySelector('.sidebar-logo');

btn.addEventListener('click', ()=> {
    console.log('clicked')
    let all = document.querySelector('*');
    all.setAttribute('class', 'show-border')
    console.log(all.style);

    // if (all.getAttribute('class') === 'show-border') {
    //     console.log('got attbiute')
    //     all.setAttrbute('class', 'hide-border')
    // }




})

}); 