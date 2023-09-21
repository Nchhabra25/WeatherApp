const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0950226ee7msh9c33c85a7fd12b3p158793jsnf6d8fd146891',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
    function getweather(city) {
        document.getElementById("name").innerHTML=city;
        const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response);
            document.getElementById("temp").innerHTML=response.temp;
            document.getElementById("feelslike").innerHTML=response.feels_like;
            document.getElementById("humidity").innerHTML=response.humidity;
            document.getElementById("cloud_pct").innerHTML=response.cloud_pct;
            document.getElementById("Sunrise").innerHTML=response.sunrise;
            document.getElementById("sunset").innerHTML=response.sunset;
            document.getElementById("winddeg").innerHTML=response.wind_degrees;
            document.getElementById("windspeed").innerHTML=response.wind_speed;
            let img=document.querySelector("img");
            if(parseInt(response.temp)>=35){
                img.src="sunny.PNG";
                console.log("weather is sunny");
            }
            else if(parseInt(response.temp)<35 && parseInt(response.temp)>=20){
                console.log("weather is mild");
                img.src="cloudy.PNG";
            }
            else if(parseInt(response.temp)<20){
                console.log("weather is cold");
                img.src="cold.PNG";
            }
        })       
    }
} catch (error) {
	console.error(error);
}
document.getElementById("submit").addEventListener("click",(val)=>{
    getweather(document.getElementById("cityname").value);
    click.preventDefault();
})
getweather("Delhi");
