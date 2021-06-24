"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    // register service worker
    registerServiceWorker();
    // get measurement data
    initializeMeasurements();
    // get ratings based on data
    generateRatings();
}

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then(res => console.log("Successfully registered service worker with scope:", res.scope))
            .catch(err => console.error("Error installing service worker", err));
    }
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
    carbonmonoxide.innerHTML = 85;

    // particulate matter
    let particulatematter = document.querySelector('#pm');
    particulatematter.innerHTML = 6;
}

// generate ratings based off co & pm levels
function generateRatings() {
    // get values, rating span & cells
    let co = parseInt(document.querySelector('#co').innerHTML);
    let co_rating = document.querySelector('#co-rating');

    let pm = parseInt(document.querySelector('#pm').innerHTML);
    let pm_rating = document.querySelector('#pm-rating');

    // check co value & assign rating
    switch (true) {
        case co <= 100:
            co_rating.innerHTML = "LOW";
            break;
        case (co > 100) && (co <= 500):
            co_rating.innerHTML = "MODERATE";
            break;
        case co > 500:
            co_rating.innerHTML = "HIGH";
            break;
    }

    // check pm value & assign rating
    switch (true) {
        case pm <= 50:
            pm_rating.innerHTML = "LOW";
            break;
        case (pm > 50) && (pm <= 100):
            pm_rating.innerHTML = "MODERATE";
            break;
        case pm > 100:
            pm_rating.innerHTML = "HIGH";
            break;
    }
}
