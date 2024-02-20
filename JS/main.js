const nav = document.querySelector('nav');
const closemenu = document.querySelector('.closemenu');
const nv0 = document.querySelector('.nv-0');



nv0.addEventListener('click',show);
closemenu.addEventListener('click',close);


function show(){
    nav.style.display = 'flex';
    nav.style.top = '0';
}

function close(){
    nav.style.top = '-100%';
    
}