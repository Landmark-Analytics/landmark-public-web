//-------------------------
//Sticky section header positioning
const header = document.querySelector('header');
const sectionTitles = document.querySelectorAll('.project-title');

function calcHeaderStickyPos() {
    const headerHeight = header.getBoundingClientRect().height;

    for (let i = 0; i < sectionTitles.length; i++) {
        const t = sectionTitles[i];
        t.style.top = headerHeight + 'px';
    }
}

calcHeaderStickyPos();

let timer = null
window.addEventListener('resize', () =>{
    clearTimeout(timer);
    timer = setTimeout(calcHeaderStickyPos, 300);
});

//-------------------------
//Lightbox Stuff
const lightbox = document.querySelector('#lightbox');
const thumbs = document.querySelectorAll('.thumb');

lightbox.addEventListener('click', (ev) => {
    lightbox.classList.remove('show');
    ev.preventDefault();
});

document.addEventListener('keydown', (ev) => {
    if(ev.key === 'Escape'){
        lightbox.classList.remove('show');
    }
});

for (let i = 0; i < thumbs.length; i++) {
    const t = thumbs[i];

    t.addEventListener('click', (ev) => {
        const img = t.querySelector('img');
        lightbox.innerHTML = img.outerHTML + '<h4>'+ img.getAttribute('alt') +'</h4>'
        lightbox.classList.add('show');
        ev.preventDefault();
    });
}
