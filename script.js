const navClose = document.querySelector('#nav-close');
const navMenu = document.querySelector('#nav-menu');
const navToogle = document.querySelector('.nav__toogle');


if(navToogle){
    navToogle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
    
}

// Remove menu mobile when clicked on any link

const NavLink = document.querySelectorAll('.nav__link');

NavLink.forEach((l) =>{
    l.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
})



// Bg Header

const BGHeader = () =>{
    const header = document.querySelector('#header');
    this.screenY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll',BGHeader);



// gsap

gsap.from('.home__img-2',1.2,{
    opacity:0,
    y:200,
    delay:.1,
})


gsap.from('.home__img-3',1.2,{
    opacity:0,
    y:200,
    delay:.5,
})


gsap.from('.home__data',1.2,{
    opacity:0,
    y:-60,
    delay:1,
})

gsap.from('.home__bird-1',1.2,{
    opacity:0,
    x:-80,
    delay:1.1,
})

gsap.from('.home__bird-2',1.2,{
    opacity:0,
    x:80,
    delay:1.2,
})


gsap.from('.home__img-1',1.2,{
    opacity:0,
    x:200,
    delay:1.2,
})

gsap.from('.home__img-4',1.2,{
    opacity:0,
    x:200,
    delay:1.3,
})