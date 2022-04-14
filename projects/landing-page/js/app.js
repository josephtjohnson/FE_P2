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
const sections = Array.from(document.getElementsByTagName('section'));


/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//Function will determine if current element is within the viewport
function activeViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <= window.innerWidth &&
        rect.bottom <= window.innerHeight
    );
}

//Create smooth scrolling event listener
const scroll = (item, section) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth'
        });
    })
}

/*
const collapse = (section) => {
    const contents = section.getElementsByTagName("p");
    const button = section.getElementsByTagName("button");
    for (item in contents) {
        section.addEventListener("click", function(e) {
                if(!button[0].classList.contains('active')) {
                    contents[item].style.display="hidden";
                }
                else {
                    contents[item].style.display="initial";
                }
        })
    }
}
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

    for (section of sections) {
        const item = document.createElement('li');
        item.innerHTML += `<a class="menu__link" data=${section.id}' +
            ' href=${section.id}>${section.dataset.nav}</a>`;
        navBarList.appendChild(item);
        navBarMenu.appendChild(navBarList);
        //Create scroll event listener for each section
        scroll(item, section);
        /*collapse(section);*/
    }
}
buildNavBar();


// Add class 'active' to section
document.addEventListener('scroll', function() {
    e.preventDefault;
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];

        if (activeViewPort(section)) {
            section.classList.add('active-class');
            document.querySelector(`[data=${section.id}]`).classList.add('active-nav');
        } else {
            section.classList.remove('active-class');
            document.querySelector(`[data=${section.id}]`).classList.remove('active-nav');
        }
    }
});

//Hides the navigation bar when scrolling
const lastScrollTop = 0;
window.addEventListener('scroll', function() {
    e.preventDefault;
    const location = window.pageYOffset;
    if (location > lastScrollTop + 20) {
        document.getElementsByClassName("page__header")[0].style.display = 'none';
    } else {
        document.getElementsByClassName("page__header")[0].style.display = 'inline-block';
    }
    lastScrollTop = location;
});

//Scrolls to top when clicked
const tb = document.getElementById('topButton');
tb.addEventListener('click', function(e) {
    e.preventDefault;
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

/**
 * End Main Functions
 * Begin Events
 *
 */
