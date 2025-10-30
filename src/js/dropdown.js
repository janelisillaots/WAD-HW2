window.onload = function() {

    /* dropdown showing info */
    let logo = document.querySelector('.logo');
    let menu = document.querySelector('.dropdown-menu');
    
    logo.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    /* Logout button */
    const logoutBtn = document.querySelector('#logout-btn');
    logoutBtn.addEventListener('click', function() {
    window.location.href = 'login.html';
    });
};
