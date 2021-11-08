class Weather{
	constructor(city){
		this.key = "afdc4f8bad1a71f008d1c53bb6d0cb56";
		this.city = city;
	}

	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
		const responseData = await response.json();
		return responseData;
	}

	changeCity(city){
		this.city = city;
	}
}