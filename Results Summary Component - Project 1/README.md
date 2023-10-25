# Frontend Mentor - Results summary component solution

This is a solution to the Results Summary Component (https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Fontawesome - providing icons

### What I learned

Using the CSS Flexbox utility allows for easier and more effective development of responsive web design by sufficiently decreasing the extra time and code, needed to spent to adapt the contents for another type of screen.

For making the design responsive to mobile devices, just one media query was neccessary:

```css
@media only screen and (max-width: 800px){
    .main-panel{
        width: 100vw;
        height: 100vh;
        flex-direction: column;
    }
    .result-screen{
        height:100%;
        width: 100vw;
        border-radius: 0 0 30px 30px;
    }
    .circle{
        width: 20vh;
        height: 20vh;
    }
    .panel-text{
        width: 80%;
    }
}
```

## Author
- Frontend Mentor - [@ivaylokartev](https://www.frontendmentor.io/profile/IvayloKartev)
