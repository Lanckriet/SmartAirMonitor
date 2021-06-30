"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
    // register service worker
    registerServiceWorker();
    // get measurement data
    initializeMeasurements();
    // get ratings based on data
    generateRatings();
    // assign eventlisteners to the buttons
    document.querySelector("#recent").addEventListener("click", initializeMeasurements);
    //document.querySelector("#average").addEventListener("click", get24HourAverage);
}

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then(res => console.log("Successfully registered service worker with scope:", res.scope))
            .catch(err => console.error("Error installing service worker", err));
    }
}

// get ThingSpeak channel id & api key
let channel_id = 1429783;
let api_key = "TZOJZDKFTO00U0B4";


// get all the data into their respective spans
setInterval(initializeMeasurements, 60000); // execute this every minute
function initializeMeasurements() {
    // update timestamp
    let timestamp = document.querySelector('#last-updated');
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function(data) {
        if (data) {
            timestamp.innerHTML = data.created_at.substring(0, 10);
            timestamp.innerHTML += " at ";
            timestamp.innerHTML += data.created_at.substring(11, 19);
        }
    });

    // temperature
    let temperature = document.querySelector('#temp');
    let temp;
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function(data) {
        temp = data.field1;
        if (temp) {
            temperature.innerHTML = parseFloat(temp).toFixed(1);
        }
    });

    // humidity
    let humidity = document.querySelector('#hum');
    let hum;
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function(data) {
        hum = data.field2;
        if (hum) {
            humidity.innerHTML = parseFloat(hum).toFixed(0);
        }
    });

    // carbon monoxide
    let carbonmonoxide = document.querySelector('#co');
    carbonmonoxide.innerHTML = 81;

    // particulate matter
    let particulatematter = document.querySelector('#pm');
    particulatematter.innerHTML = 16;
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
