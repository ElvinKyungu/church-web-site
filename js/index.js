const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;
openBtn.addEventListener("click", ()=>{
    if(navLeft < 0){
        navigation.classList.add("show");
        nav.classList.add("show");
        document.body.classList.add("show");
    }
});

closeBtn.addEventListener("click", ()=>{
    if(navLeft < 0){
        navigation.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove("show");
    }
})
// Fin NAVIGATION=======================
// Fixed nav
const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight >  navHeight){
        navBar.classList.add("fix-nav");
    }
    else{
        navBar.classList.remove("fix-nav");
    }
})