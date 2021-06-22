"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    initializeMeasurements();
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
    carbonmonoxide.innerHTML = "28";
    // particulate matter
    let particulatematter = document.querySelector('#pm');
    particulatematter.innerHTML = "16";
}