const ls = new LS();
const weatherLoc = ls.getLocationData();

const weather = new Weather(weatherLoc);
const ui = new UI();


const form = document.querySelector('#cityName')
form.addEventListener('submit', ChangeCityName)

document.addEventListener('DOMContentLoaded', getWeather);

function ChangeCityName(event){
	const city = document.getElementById('cityName').value
	weather.changeCity(city)
	getWeather()
	console.log(city)
	document.getElementById('cityName').value = ''
	event.preventDefault()
}

function getWeather(city) {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data);
	})
	.catch(error => console.log(error))
}