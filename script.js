// toogle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').conclik = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar sidebar untuk menutup nav 
const hamburger = document.querySelector('#hamburger-menu');
// ketika klik dimanapun halamannya
document.addEventListener('click', function(e){
    // selama yg diklik bukan navbar dan juga hamburger
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
