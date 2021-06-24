"use strict";

window.addEventListener("DOMContentLoaded", init);

// set colours
let green = "rgb(137, 232, 148)";
let yellow = "rgb(253, 253, 150)";
let red = "rgb(255, 105, 97)";

function init() {
    changeSiteAccentColour();
    changeRatingCellColour();
}

// change webpage's accent colour based off ratings
//pastel green by default and/or when both ratings are LOW
//pastel yellow when measurements are both MODERATE
//pastel red when measurements are both HIGH
//also change individual cell colours based on rating
function changeSiteAccentColour() {
    // get ratings
    let co_rating = document.querySelector('#co-rating').innerHTML;
    let pm_rating = document.querySelector('#pm-rating').innerHTML;

    // get elements to style
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    let button = document.querySelectorAll('.selection');

    // declare variable for style colour
    let colour;

    // compare ratings
    switch (true) {
        case (co_rating === "LOW") && (pm_rating === "LOW"):
            colour = green;
            break;
        case (co_rating === "MODERATE") || (pm_rating === "MODERATE"):
            colour = yellow;
            break;
        case (co_rating === "HIGH") && (pm_rating === "HIGH"):
            colour = red;
            break;
    }

    // change site accent colours
    header.style.backgroundColor = colour;
    footer.style.backgroundColor = colour;
    // use foreach loop to get both buttons
    button.forEach(function (item) {
        item.style.backgroundColor = colour;
    });
}

function changeRatingCellColour() {
    let co_rating = document.querySelector('#co-rating').innerHTML;
    let co_rating_cell = document.querySelector('#rating1');
    let pm_rating = document.querySelector('#pm-rating').innerHTML;
    let pm_rating_cell = document.querySelector('#rating2');

    switch (true) {
        case co_rating === "LOW":
            co_rating_cell.style.backgroundColor = green;
            break;
        case co_rating === "MODERATE":
            co_rating_cell.style.backgroundColor = yellow;
            break;
        case co_rating === "HIGH":
            co_rating_cell.style.backgroundColor = red;
            break;
    }

    // check pm value & assign rating
    switch (true) {
        case pm_rating === "LOW":
            pm_rating_cell.style.backgroundColor = green;
            break;
        case pm_rating === "MODERATE":
            pm_rating_cell.style.backgroundColor = yellow;
            break;
        case pm_rating === "HIGH":
            pm_rating_cell.style.backgroundColor = red;
            break;
    }

}
