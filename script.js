document.querySelector("#range").style.display = "None";

const units = {
    Celcius: "",
    Fahrenheit: "°F"
};


const config = {
    minTemp: 0,
    maxTemp: 10,
    unit: units["Celcius"]
};


// Change min and max temperature values

const tempValueInputs = document.querySelectorAll("input[type='text']");

tempValueInputs.forEach(input => {
    input.addEventListener("change", event => {
        const newValue = event.target.value;

        if (isNaN(newValue)) {
            return input.value = config[input.id];
        } else {
            config[input.id] = input.value;
            range[input.id.slice(0, 3)] = config[input.id]; // Update range
            return setTemperature(); // Update temperature
        }
    });
});

// Switch unit of temperature

const unitP = document.getElementById("unit");


// Change temperature

const range = document.querySelector("input[type='range']");
const temperature = document.getElementById("temperature");

function setTemperature() {
    temperature.style.height = (range.value - config.minTemp) / (config.maxTemp - config.minTemp) * 100 + "%";
    temperature.dataset.value = range.value;
}

range.addEventListener("input", setTemperature);
setTimeout(setTemperature, 1000);

var url_string = window.location.href
var url = new URL(url_string);
var current_temp = url.searchParams.get("current_temp");
if (!current_temp) {
    current_temp = 5;
}

document.getElementById("current_temp").value = current_temp;