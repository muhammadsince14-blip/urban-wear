const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const select = document.querySelector('.select');
const body = document.querySelector('body');
const topsec = document.querySelector('.top');
const cart = document.querySelector('.cart');
const s = document.querySelector('.switch');
const grid = document.querySelector('.grid');
const frames = document.querySelectorAll('.frame');


light.addEventListener('click', () =>{
    select.classList.add('l');
    body.classList.add('light');
    topsec.classList.add('light');
    cart.classList.add('light');
    s.classList.add('light');
    grid.classList.add('light');
    frames.forEach(frame => {
        frame.classList.add('light');
    });
    localStorage.setItem('theme', 'light');
});

dark.addEventListener('click', () =>{
    select.classList.remove('l');
    body.classList.remove('light');
    topsec.classList.remove('light');
    cart.classList.remove('light');
    s.classList.remove('light');
    grid.classList.remove('light');
    frames.forEach(frame => {
        frame.classList.remove('light');
    });
    localStorage.setItem('theme', 'dark');
});

let themeSave = () => {
    let theme = localStorage.getItem('theme');
    if(theme == 'light'){
    select.classList.add('l');
    body.classList.add('light');
    topsec.classList.add('light');
    cart.classList.add('light');
    s.classList.add('light');
    grid.classList.add('light');
    frames.forEach(frame => {
        frame.classList.add('light');
    });

    }

    else{
    select.classList.remove('l');
    body.classList.remove('light');
    topsec.classList.remove('light');
    cart.classList.remove('light');
    s.classList.remove('light');
    grid.classList.remove('light');
    frames.forEach(frame => {
        frame.classList.remove('light');
    });


    }
}

window.onload = themeSave;

frames.forEach(frame => {
    frame.addEventListener('mousemove', (e) =>{
        const rect = frame.getBoundingClientRect();
        frame.style.transition = 'background 0.4s ease, border 0.4s ease, transform 0.1s ease';
        const x = e.clientX - rect.left - rect.width /2;
        const y = e.clientY - rect.top - rect.height / 2;
        const X = (-x / 30);
        const Y = (y / 30);
        frame.style.transform = `perspective(1000px) rotateX(${Y}deg) rotateY(${X}deg)`;
    });

    frame.addEventListener('mouseleave', () =>{
        frame.style.transition = 'all 0.3s';
                frame.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;

    });

    frame.addEventListener('mousedown', () =>{
        frame.style.transform = 'scale(0.95)'
    })
    frame.addEventListener('mouseup', () =>{
        frame.style.transform = 'scale(1)'
    })
})