'use strict';

const select = document.querySelector('.custom-select');
const weatherWrapper = document.querySelector('.weather-wrapper');

select.addEventListener('click', getCity);

function getCity(){
    const selectItem = document.querySelector('.same-as-selected');
    prepareRequest(selectItem.innerHTML);
}

function prepareRequest(city){    
    const address = `https://api.openweathermap.org/data/2.5/weather?q=${city.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    sendRequest(address);
}

function sendRequest(address){
    fetch(address)
    .then(response => response.json())
    .then(renderData);
}

function renderData(data) {
    let weatherTmpl = `
        <p>Weather in {city}</p>        
        <img src = {icon} alt = 'icon'>
        <p>{descr}</p>
        <p>Temperature: {temp} &deg;C</p>
        <p>Feels like: {feels_like} &deg;C</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Humidity: {humidity} %</p>
        <p>Wind speed: {wind_speed} m/s</p>
        <p>Wind direction: {wind_direction} deg</p>
    `;
    
    weatherTmpl = weatherTmpl
        .replace('{city}', data.name)
        .replace('{icon}', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
        .replace('{descr}', data.weather[0].description)
        .replace('{temp}', data.main.temp)
        .replace('{feels_like}', data.main.feels_like)
        .replace('{pressure}', data.main.pressure)
        .replace('{humidity}', data.main.humidity)
        .replace('{wind_speed}', data.wind.speed)
        .replace('{wind_direction}', data.wind.deg)
   
    weatherWrapper.innerHTML = weatherTmpl;    
}