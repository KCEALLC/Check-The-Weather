/* Check The Weather */

// Init Storage
const storage = new Storage();
// Get storage location data
const weatherLocation = storage.getLocationData();
// Init Weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    // Change location
    weather.changeLocation(city, state);

    // Set location in Local Storage
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));   
}
