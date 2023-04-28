const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88071a687dmsha95ce6be9cff588p1217fcjsnd67bf7d7664a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
   const capitalizedCity = city.slice(0, 1).toUpperCase() + city.slice(1);	
   cityName.innerHTML = capitalizedCity;
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then(response => {
      
      function UTC_Conversion(time){
         const oldTime = new Date(time * 1000);
         const newTime = oldTime.toLocaleTimeString();
         return newTime;
      }
         
         cloud_pct.innerHTML = response.cloud_pct;
         temp.innerHTML = response.temp;
         temp2.innerHTML = response.temp;
         feels_like.innerHTML = response.feels_like;
         humidity.innerHTML = response.humidity;
         humidity2.innerHTML = response.humidity;
         min_temp.innerHTML = response.min_temp
         max_temp.innerHTML = response.max_temp;
         wind_speed.innerHTML = response.wind_speed;
         sunrise.innerHTML = UTC_Conversion(response.sunrise);
         sunrise2.innerHTML = UTC_Conversion(response.sunrise);
         sunset.innerHTML = UTC_Conversion(response.sunset);
	   


      })
      .catch(err => console.error(err));
}
   
submit.addEventListener("click",(e)=>{
   e.preventDefault()
   getWeather(city.value)
})

getWeather("New Delhi")



