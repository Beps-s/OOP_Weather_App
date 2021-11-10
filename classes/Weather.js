class Weather{
	constructor(city){
		this.key = "6b56759eba64e104adfcdaa2683cc7bf";
		this.city = city;
	}

	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json()
		return responseData
	}

	changeCity(city){
		this.city = city;
	}
}