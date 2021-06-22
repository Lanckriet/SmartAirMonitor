"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    initializeMeasurements();
    generateRatings();
}

// get all the data into their respective spans
function initializeMeasurements() {

    // update timestamp
    let timestamp = document.querySelector('#last-updated');
    timestamp.innerHTML = "01/01/1970 at 00:00";

    // temperature
    let temperature = document.querySelector('#temp');
    temperature.innerHTML = "21.6";

    // humidity
    let humidity = document.querySelector('#hum');
    humidity.innerHTML = "47";

    // carbon monoxide
    let carbonmonoxide = document.querySelector('#co');
    carbonmonoxide.innerHTML = "198";

    // particulate matter
    let particulatematter = document.querySelector('#pm');
    particulatematter.innerHTML = "16";
}

function generateRatings() {
    let co = document.querySelector('#co').innerHTML;
    let co_rating = document.querySelector('#co-rating');
    let pm = document.querySelector('#pm').innerHTML;
    let pm_rating = document.querySelector('#pm-rating');
    switch(co_rating) {
        case co < 100:
            co_rating.innerHTML = "LOW";
            break;
        case co <= 500:
            co_rating.innerHTML = "MODERATE";
            break;
        case co > 500:
            co_rating.innerHTML = "HIGH";
            break;
        default:
            co_rating.innerHTML = "LOW";
    }

    switch(co_rating) {
        case co < 50:
            co_rating.innerHTML = "LOW";
            break;
        case co <= 100:
            co_rating.innerHTML = "MODERATE";
            break;
        case co > 100:
            co_rating.innerHTML = "HIGH";
            break;
        default:
            co_rating.innerHTML = "LOW";
    }


}