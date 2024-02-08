function toggleSidebar() {
  
    var sidebar = document.getElementById('sidebar');
    var overlay = document.querySelector('.overlay');

   
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeSidebar() {
  
    var sidebar = document.getElementById('sidebar');
    var overlay = document.querySelector('.overlay');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}



function changeStylesheet(href) {
    var linkElement = document.getElementById('main-stylesheet');
    linkElement.setAttribute('href', href);
}




// Example: Change to an alternative stylesheet after 300 pixels of scrolling
document.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        changeStylesheet('nav-black.css');
    } else {
        changeStylesheet('nav.css');
    }
});




