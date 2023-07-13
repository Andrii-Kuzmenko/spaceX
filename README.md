# spaceX App

[Demo link](https://andrii-kuzmenko.github.io/spaceX/)

# Application with static and dynamic content

# HOME PAGE: 
 - Logo in header it’s link which always return to home page
 - Header navigation menu - have hover effect, home link navigates to home page as logo too.
 - Header aside: “Favorite” button redirects to favorite page, “Sign in” button has pressible visual effect, but with any redirect.
 - Banner section: all content is static, “Explore tours” scrolls down by pressing on it.
 - Main slider section: static carousel title, carousel controls (slides one by one), slides content with dynamic data from SpaceX API. Each slider has a “Buy” button with no action on press and “Add to favorite” button, which will add this trip to your personal favorites list.

	FAVORITES PAGE:
 - Header and banner sections are static, “Favorite” button is active
 - “Clean all” - removes all flights from favorite
 - List of favorite flights - “Buy” button doesn't do anything, “Delete” button removes exact flight. 

## Used technologies:

 - Typescript
 - React
 - React Router
 - React Apollo (to get data from API)
 - Recoil (for state management)
 - Styled Component
 - ClassNames
 - JavaScript
 - SCSS
