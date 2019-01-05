/* 
Check the Weather Weather Class, API Call & Change Location
*/
class Weather {
    constructor(city, state) {
        this.apiKey = '073b2c4a57f0d5f89507657c5100e8f6';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.state}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();
        return responseData;
    }

    // Change location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}