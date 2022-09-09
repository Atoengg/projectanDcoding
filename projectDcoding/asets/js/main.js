let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            navbar.classList.add('navbar-cng');
        } else {
            navbar.classList.remove('navbar-cng');
        }
});

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

//memperlihatkan navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

//menutup navbar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if (e.target.id != "navbar-collapse" && e.target.id !=
    "navbar-show-btn" && e.target.parentElement.id != 
    "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('ubah-ukuran-animasi');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('ubah-ukuran-animasi');
    }, 400);
});

// galeri
const allGaleriItem = document.querySelectorAll('.galeri-item');
const imgModalDiv = document.getElementById('img-modal-box');
const btnClose = document.getElementById('modal-close-btn');
const btnNext = document.getElementById('next-btn');
const btnPrev = document.getElementById('prev-btn');
let imgIndex = 0;


allGaleriItem.forEach((galeriItem) => {
    galeriItem.addEventListener('click', () => {
        imgModalDiv.style.display = 'block';
        let imgSrc = galeriItem.querySelector('img').src;
        imgIndex = parseInt(imgSrc.split("-")[1].substring(0, 1));
        showImageContent(imgIndex);
    })
});

// btnNext
btnNext.addEventListener('click', () => {
    imgIndex++;
    if (imgIndex > allGaleriItem.length) {
        imgIndex = 1;
    }
    showImageContent(imgIndex);
});

//btnPrev
btnPrev.addEventListener('click', () => {
    imgIndex--;
    if (imgIndex <= 0) {
        imgIndex = allGaleriItem.length;
    }
    showImageContent(imgIndex);
});

function showImageContent(index) {
    imgModalDiv.querySelector('#img-modal img').
    src = `./asets/images/galeri-${index}.jpg`;
}

btnClose.addEventListener('click', () => {
    imgModalDiv.style.display = 'none';
})

// mode terang/malam
const btnToggleMode = document.getElementById('btn-toggle-dark');

btnToggleMode.addEventListener('click', () => {
    if (btnToggleMode.checked) {
        document.querySelector('body').classList.add('dark-mode');
    } else{
        document.querySelector('body').classList.remove('dark-mode');
    }
})
