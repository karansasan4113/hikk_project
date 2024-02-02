function toggleSidebar(event) {
    var body = document.body;
    var sidebar = document.getElementById('sidebar');
    var overlay = document.querySelector('.overlay');

    if (event) {
        event.preventDefault(); // Prevent the default behavior (e.g., scrolling to the top)
        event.stopPropagation(); // Stop the event from propagating to parent elements
    }
  
    body.classList.toggle('sidebar-active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeSidebar(event) {
    var body = document.body;
    var sidebar = document.getElementById('sidebar');
    var overlay = document.querySelector('.overlay');

    if (event) {
        event.preventDefault(); // Prevent the default behavior (e.g., scrolling to the top)
    }

    body.classList.remove('sidebar-active');
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
