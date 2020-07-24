let body = document.querySelector('body');
let navbar = body.querySelector('.navbar');
let navbarLogo = navbar.querySelector('.navbar__logo');

let navbarLogoText = navbarLogo.querySelector('.navbar__logo__text');
let navbarLogoBackground = navbarLogo.querySelector('.navbar__logo__background');
let navbarLogoForeground = navbarLogo.querySelector('.navbar__logo__foreground');

let navbarHamburgerMenu = navbar.querySelector('.navbar__hamburger-menu');
let navbarHoverMenu = document.body.querySelector('.navbar__hover-menu');
console.log(navbarHoverMenu)

/*navbar hover menu */

// 1. setup an event listener on the body 

// 2. toggle the .menu-open class on .navbar__hover-menu

// 2.5 toggle the .menu-open-navbar on
// body, .navbar, .navbar__logo__text, 
// .navbar__logo__background,
// .navbar__logo__foreground

// 2.75 toggle the icon from
// src="help-files\images\icon-hamburger.svg"
// TO
// src="help-files\images\icon-close.svg


/*features-tabby*/


/*FAQ__accordion*/




/*
### TODO ###
------
1. create Javascript functionality for navbar hover menu

2. create Javascript functionality for features-tabby
-

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