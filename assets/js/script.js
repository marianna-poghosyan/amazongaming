function backTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function openProfile() {
    let menu = document.querySelector(".p-o");
    let arrow = document.querySelector(".header-arrow--right.profile");

    document.querySelector(".l-o").style.display='none';
    document.querySelector('.header-arrow--right.lang').style.rotate='0deg';

    if(menu.style.display == "block") {
        menu.style.display='none';
        arrow.style.rotate='0deg';
    } else {
        menu.style.display='block';
        arrow.style.rotate='180deg';
    };
};

function openLang() {
    let menu = document.querySelector(".l-o");
    let arrow = document.querySelector(".header-arrow--right.lang");

    document.querySelector(".p-o").style.display='none';
    document.querySelector('.header-arrow--right.profile').style.rotate='0deg';

    if(menu.style.display == "block") {
        menu.style.display='none';
        arrow.style.rotate='0deg';
    } else {
        menu.style.display='block';
        arrow.style.rotate='180deg';
    };
};

document.querySelectorAll('.l-o--container .a').forEach((i) => {
    i.addEventListener('click', () => {
        document.querySelector('.l-o--container .a.selected').classList.remove('selected');
        i.classList.add('selected');
    });
});

document.querySelectorAll('.doubts--container-content').forEach((i) => {
    let item = i.querySelector('.doubts--container-content-top');
    item.addEventListener('click', () => {
        let text = i.querySelector('.doubts--container-content-bottom');

        if(text.style.display == 'block'){
            text.style.display = 'none';
            i.style.background = '#2c2541';
        } else {
            text.style.display = 'block';
            i.style.background = '#392e5c';
        };
    });
});

document.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
    })
})

document.onclick = function(e) {
    if(e.target.id !== 'lang' && e.target.id !== 'prof' && e.target.id !== 'langIcon' && e.target.id !== 'langText' && e.target.id !== 'langArrow' && e.target.id !== 'profIcon' && e.target.id !== 'profText' && e.target.id !== 'profArrow'){
        document.querySelector(".l-o").style.display='none';
        document.querySelector('.header-arrow--right.lang').style.rotate='0deg';
        document.querySelector('.header-arrow--right.profile').style.rotate='0deg';
    }
}
