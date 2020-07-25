let body = document.querySelector('body');
let navbar = body.querySelector('.navbar');
let navbarLogo = navbar.querySelector('.navbar__logo');

let navbarLogoText = navbarLogo.querySelector('.navbar__logo__text');
let navbarLogoBackground = navbarLogo.querySelector('.navbar__logo__background');
let navbarLogoForeground = navbarLogo.querySelector('.navbar__logo__foreground');

let navbarHoverMenu = document.body.querySelector('.navbar__hover-menu');
let navbarHamburgerMenu = navbar.querySelector('.navbar__hamburger-menu');


let featuresTabby = document.querySelector('.features-tabby');
let featuresTabbyTitles = document.querySelector('.features-tabby__titles');
let featuresTabbyTitle = Array.from(document.querySelectorAll('.features-tabby__title'));

let featuresTabbyContents = document.querySelector('.features-tabby__contents');
let featuresTabbyContent = Array.from(document.querySelectorAll('.features-tabby__content'));


let FAQAccordion = body.querySelector('.FAQ__accordion');


let newsletter = body.querySelector('.newsletter');
let newsletterForm = newsletter.querySelector('.newsletter__form');
let newsletterInput = newsletter.querySelector('.newsletter__input');
let newsletterInputWarning = newsletter.querySelector('.newsletter__input-warning');
let newsletterButton = newsletter.querySelector('.btn--newsletter');

let validateEmailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig;



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





/*featuresTabby*/
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
function FAQAccordionFunctionality(event) {
    let myTarget = event.target;
    if(!myTarget.closest(".FAQ__accordion__h4")) return;
    // the .icon-arrow__arrow of the .FAQ__accordion__icon
    let path = myTarget.nextElementSibling.firstElementChild;
    // the .FAQ__accordion__text
    let text = myTarget.parentElement.nextElementSibling;

    path.classList.toggle('FAQ__accordion--selected');
    text.classList.toggle('FAQ__accordion--selected');
}

FAQAccordion.addEventListener('click', FAQAccordionFunctionality);





/*Newsletter*/
newsletterForm.addEventListener('submit', (event, inputs) => {
    event.preventDefault();
    let input = newsletterInput.value;
    console.log(input);

    if(validateEmailRegEx.test(input) === true) {
        // hide msg
        newsletterInput.classList.remove('newsletter--warning-msg-on');
        newsletterInputWarning.classList.remove('newsletter--warning-msg-on');

    } else if(validateEmailRegEx.test(input) === false) {
        // show msg
        newsletterInput.classList.add('newsletter--warning-msg-on');
        newsletterInputWarning.classList.add('newsletter--warning-msg-on');
    }
});


/*
### TODO ###
------
5. create tablet / desktop versions
############
*/