const weather = new Weather('Tallinn');
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(city) {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data);
	})
	.catch(error => console.log(error))
}