let body = document.querySelector('body');
let navbar = body.querySelector('.navbar');
let navbarLogo = navbar.querySelector('.navbar__logo');

let navbarLogoText = navbarLogo.querySelector('.navbar__logo__text');
let navbarLogoBackground = navbarLogo.querySelector('.navbar__logo__background');
let navbarLogoForeground = navbarLogo.querySelector('.navbar__logo__foreground');

let navbarHoverMenu = document.body.querySelector('.navbar__hover-menu');
let navbarHamburgerMenu = navbar.querySelector('.navbar__hamburger-menu');


/*navbar hover menu*/
function navbarHoverMenuFunctionality (event) {
    // toggles the navbar hover menu
    navbarHoverMenu.classList.toggle('menu-open');

    // stuff in the navbar hover menu
    body.classList.toggle('menu-open-navbar');
    navbar.classList.toggle('menu-open-navbar');
    // change the color of the company svg icon
    navbarLogoText.classList.toggle('menu-open-navbar');
    navbarLogoBackground.classList.toggle('menu-open-navbar');
    navbarLogoForeground.classList.toggle('menu-open-navbar');

    // toggles the hamburger menu / close button icon
    if(navbarHoverMenu.classList.contains('menu-open')) {
        event.target.src = 'help-files/images/icon-close.svg';
    } else {
        event.target.src = 'help-files/images/icon-hamburger.svg';
    }
}
navbarHamburgerMenu.addEventListener('click', navbarHoverMenuFunctionality);





 let featuresTabby = document.querySelector('.features-tabby');
 let featuresTabbyTitles = document.querySelector('.features-tabby__titles');
 let featuresTabbyTitle = Array.from(document.querySelectorAll('.features-tabby__title'));

let featuresTabbyContents = document.querySelector('.features-tabby__contents');
let featuresTabbyContent = Array.from(document.querySelectorAll('.features-tabby__content'));
// console.log(featuresTabbyContents)

function featuresTabbyFunctionality(event) {
    let myTarget = event.target;

    // if(!featuresTabbyTitles) return;
    if(!myTarget.closest(".features-tabby__title")) return;

    let selectedHeader = myTarget.dataset.featuresTabby;
    let selectedTab;
    let selectedTabTitle;
    let selectedTabContent;
    /* loop through the contents for dataset attribute
    that will match the selectedHeader*/
    for(let i = 0; i < featuresTabbyContent.length; i+=1) {
        if(selectedHeader === featuresTabbyContent[i].dataset.featuresTabby) {
            // get the tab
            selectedTab = featuresTabbyContent[i].dataset.featuresTabby;

            // get the title
            selectedTabTitle = featuresTabbyTitle[i];
            // get the content
            selectedTabContent = featuresTabbyContent[i];
        }
    }

    /*remove selected class from all the tabby titles & tabby contents*/
    for(let i = 0; i < featuresTabbyContent.length; i+=1 ) {
        // tabbys titles
        featuresTabbyTitle[i].classList.remove('features-tabby__title-selected');
        // tabbys contents
        featuresTabbyContent[i].classList.remove('tabby__content-selected');
    }
    // title
    selectedTabTitle.classList.add('features-tabby__title-selected');
    // content
    selectedTabContent.classList.add('tabby__content-selected');
}

featuresTabbyTitles.addEventListener('click', featuresTabbyFunctionality);





/*FAQ__accordion*/













/*FAQ__accordion steps*/
// 1. transform & transition the height on click
// 2. rotate the svg arrow 180deg
// 3. change the svg arrows color to red

/*
### TODO ###
------

3. create Javascript functionality for FAQ__accordion
grab -> .FAQ__accordion__h4(listen for clicks on here)
 & .icon-arrow
 & .icon-arrow__arrow 
(add the .FAQ__accordion--selected class to .icon-arrow__arrow)

4. create javascript for newsletter input functionality
grab --> newsletter form &
.newsletter__input (for the warning img & to read the input)
& .newsletter__input-warning (for the message to slide down)
apply .newsletter--warning-msg-on
to both .newsletter__input & .newsletter__input-warning
--
5. create tablet / desktop versions
############
*/