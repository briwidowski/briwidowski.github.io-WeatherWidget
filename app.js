/* API Key Info
    key: d76793564b9895ec33c5cc82983f876f
    baseurl: "https://api.openweathermap.org/data/2.5/" 
*/


let weather = {
    "apiKey": "d76793564b9895ec33c5cc82983f876f",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data)); 

    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max, humidity } = data.main;
        const { speed } = data.wind;
        const { all } = data.clouds; // precipitation
        console.log(name, description, temp, temp_min, temp_max, humidity, speed, all);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = Math.round(temp);
        document.querySelector(".high").innerText = "H: " + Math.round(temp_max) + "°";
        document.querySelector(".low").innerText = " L: " + Math.round(temp_min) + "°";
        document.querySelector(".clouds").innerText = all + "%";
        document.querySelector(".humidityLevel").innerText = Math.round(humidity) + "%";
        document.querySelector(".windSpeed").innerText = Math.round(speed) + "mph";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search").value);
    }
};

const button = document.getElementById('submit');
button.addEventListener('click', function() {
    weather.search();
    document.querySelector(".search").value = "";
})