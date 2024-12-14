const bar = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.getElementById('nav');

if(bar) {
    bar.addEventListener('click', (e) => {
        e.preventDefault()
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* document.getElementById("year").textContent = new Date().getFullYear(); */
