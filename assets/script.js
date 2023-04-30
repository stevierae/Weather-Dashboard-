var apiKey="7a5fbb620c7fd758129e19ab9b1ddc40"
document.querySelector(".search-btn").addEventListener("click",getLatLon)

function getLatLon(){
    var inputEl=document.querySelector(".form-control")
    var cityName=inputEl.value
    var url="http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=1&appid="+apiKey
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var lat=data[0].lat
        var lon=data[0].lon
        getFiveDayForecast(lat,lon)
    })
}
function getFiveDayForecast(lat,lon){
    var url="http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid="+apiKey
    fetch(url)
    .then(function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)
    })
}
