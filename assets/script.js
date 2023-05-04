var apiKey="7a5fbb620c7fd758129e19ab9b1ddc40"
var searchForm = document.getElementById("search-form");
var userInput = document.getElementById("userInput");

var citySearchBtn = document.getElementById("citySearchBtn");
var cityName = document.getElementById("cityName");
var currentDate = document.getElementById("currentDate");
var weatherIcon = document.getElementById("weatherIcon");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var forecast = document.getElementById("forecast");
var searchHistory = document.getElementById("searchHistory");
var fiveDayForecast = document.getElementById("five-day-forecast");
// document.querySelector(".search-btn").addEventListener("click",)


function fetchWeather(city){
    // var inputEl=document.querySelector(".form-control")
    // var cityName=inputEl.value
    var url="https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid="+apiKey
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        var lat=data[0].lat
        var lon=data[0].lon
        getFiveDayForecast(lat,lon,city)
    })
}
function getFiveDayForecast(lat,lon,city){
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(url)
    .then(function(response){
        return response.json()

    })
    .then (function(data){
        cityName.innerHTML=data.name + dayjs.unix(data.dt).format(' MMM D, YYYY') + `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
            temperature.innerHTML= "Temp: "+ data.main.temp + " Degrees Celcius";
            humidity.innerHTML="Humidity: "+ data.main.humidity + "%";
            wind.innerHTML ="Wind: " + data.wind.speed + " MPH";

        })
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2094bbd487480c136f9574e38b34a323&units=metric`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function(data){
            console.log(data)
            for(var i=2;i<data.list.length; i=i+8){
                console.log(data.list[i])
                var currentDay = data.list[i]
                var cardEl = document.createElement("div")
                cardEl.textContent = currentDay.main.temp
                fiveDayForecast.appendChild(cardEl)
            }
        })
}

citySearchBtn.addEventListener("click", function(event){
    console.log(userInput.value)
    fetchWeather(userInput.value)
})



