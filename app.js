
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7b30a6f09bmsh43047d05ad85895p18ea7djsnfeefe7ee789f',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

const div = document.querySelector("div");

const form = document.querySelector("#form");

form.addEventListener("submit",  async(event)=> {
    event.preventDefault();


    const city = document.querySelector("#city").value.trim();
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
   try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        div.innerHTML = `
            <div class="weather-section">
                <h1>Main Section</h1>
                <p><strong>Temperature:</strong> ${result.main.temp} °C</p>
                <p><strong>Feels Like:</strong> ${result.main.feels_like} °C</p>
                <p><strong>Min Temp:</strong> ${result.main.temp_min} °C</p>
                <p><strong>Max Temp:</strong> ${result.main.temp_max} °C</p>
                <p><strong>Place Name:</strong> ${result.name}</p>
            </div>
            
            <div class="weather-section">
                <h1>Wind</h1>
                <p><strong>Wind Speed:</strong> ${result.wind.speed} m/s</p>
                <p><strong>Base:</strong> ${result.base}</p>
            </div>
            
            <div class="weather-section">
                <h1>Clouds</h1>
                <p><strong>Clouds:</strong> ${result.clouds.all} %</p>
            </div>
            
            <div class="weather-section">
                <h1>Coordinates</h1>
                <p><strong>Longitude:</strong> ${result.coord.lon}</p>
                <p><strong>Latitude:</strong> ${result.coord.lat}</p>
            </div>
            
            <div class="weather-section">
                <h1>Additional Info</h1>
                <p><strong>Timestamp:</strong> ${new Date(result.dt * 1000).toLocaleString()}</p>
                <p><strong>ID:</strong> ${result.id}</p>
            </div>
        `;
    } catch (error) {
        console.error(error);
        div.innerHTML = `<p>Unable to fetch weather data. Please try again.</p>`;
    }
});