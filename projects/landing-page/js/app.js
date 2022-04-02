/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNavBar() {
    const navBarMenu = document.querySelector('.navbar__menu');
    const navBarList = document.getElementById('navbar__list');
    const sections = Array.from(document.getElementsByTagName("section"));

    for (section of sections ) {
        const item = document.createElement('li');
        item.innerHTML += `<li><a class="menu__link">${section.dataset.nav}</a></li>`;
        navBarList.appendChild(item);
        navBarMenu.appendChild(navBarList);
    }
}

buildNavBar();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
