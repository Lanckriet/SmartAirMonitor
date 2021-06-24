"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    initializeMeasurements();
    generateRatings();
    changeSiteAccentColour();
}

// get all the data into their respective spans
function initializeMeasurements() {

    // update timestamp
    let timestamp = document.querySelector('#last-updated');
    timestamp.innerHTML = "01/01/1970 at 00:00";

    // temperature
    let temperature = document.querySelector('#temp');
    temperature.innerHTML = 21.6;

    // humidity
    let humidity = document.querySelector('#hum');
    humidity.innerHTML = 47;

    // carbon monoxide
    let carbonmonoxide = document.querySelector('#co');
    carbonmonoxide.innerHTML = 95;

    // particulate matter
    let particulatematter = document.querySelector('#pm');
    particulatematter.innerHTML = 12;
}

// generate ratings based off co & pm levels
function generateRatings() {
    // get values, rating span & cells
    let co = parseInt(document.querySelector('#co').innerHTML);
    let co_rating = document.querySelector('#co-rating');
    let co_rating_cell = document.querySelector('#rating1');

    let pm = parseInt(document.querySelector('#pm').innerHTML);
    let pm_rating = document.querySelector('#pm-rating');
    let pm_rating_cell = document.querySelector('#rating2');

    console.log(co, pm);

    switch (true) {
        case co <= 100:
            co_rating.innerHTML = "LOW";
            co_rating_cell.style.backgroundColor = "rgb(137, 232, 148)";
            break;
        case (co > 100) && (co <= 500):
            co_rating.innerHTML = "MODERATE";
            co_rating_cell.style.backgroundColor = "rgb(253, 253, 150)";
            break;
        case co > 500:
            co_rating.innerHTML = "HIGH";
            co_rating_cell.style.backgroundColor = "rgb(255, 105, 97)";
            break;
    }

    switch (true) {
        case pm <= 50:
            pm_rating.innerHTML = "LOW";
            pm_rating_cell.style.backgroundColor = "rgb(137, 232, 148)";
            break;
        case (pm > 50) && (pm <= 100):
            pm_rating.innerHTML = "MODERATE";
            pm_rating_cell.style.backgroundColor = "rgb(253, 253, 150)";
            break;
        case pm > 100:
            pm_rating.innerHTML = "HIGH";
            pm_rating_cell.style.backgroundColor = "rgb(255, 105, 97)";
            break;
    }
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
            console.log("low measurements, change to green");
            colour = "rgb(137, 232, 148)";
            break;
        case (co_rating === "MODERATE") || (pm_rating === "MODERATE"):
            console.log("moderate measurements, change to yellow");
            colour = "rgb(253, 253, 150)";
            break;
        case (co_rating === "HIGH") && (pm_rating === "HIGH"):
            console.log("high measurements, change to red");
            colour = "rgb(255, 105, 97)";
            break;
        default:
            console.log("default", co_rating, pm_rating);
    }

    // change site accent colours
    header.style.backgroundColor = colour;
    footer.style.backgroundColor = colour;
    // use foreach loop to get both buttons
    button.forEach(function (item) {
        item.style.backgroundColor = colour;
    });
}