
const ApiKey="2b743c3634a7ca40f65fda4a622a0a2c";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q={Germany}&appigd={2b743c3634a7ca40f65fda4a622a0a2c}"
async function checkWeather() {
    const response= await fetch (apiUrl + `&appigd=${ApiKey}`)
    const data = await response.json();
    console.log(data);
}
checkWeather();

