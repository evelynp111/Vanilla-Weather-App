function displayTemperature(response) {
	console.log(response.data);

	let cityElement = document.querySelector("#city");
	let temperatureElement =
		document.querySelector("#temperature");
	let descriptionElement =
		document.querySelector("#description");
	let windElement = document.querySelector("#wind");
	let humidityElement = document.querySelector("#humidity");
	temperatureElement.innerHTML = Math.round(
		response.data.temperature.current
	);
	cityElement.innerHTML = response.data.city;
	descriptionElement.innerHTML =
		response.data.condition.description;
	windElement.innerHTML = Math.round(
		response.data.wind.speed
	);
	humidityElement.innerHTML =
		response.data.temperature.humidity;
}

let apiKey = "fbf3f590d8fa5cdo2b6a6d68f4tc4ef2";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=los+angeles&key=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
