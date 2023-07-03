const input = document.querySelector('.search input');
const btnSearch = document.querySelector('.img-icon');
const weather = document.querySelector('.weather');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity-degree');
const wind = document.querySelector('.wind-degree');
const weatherIcon = document.querySelector('.weather-icon');
const details = document.querySelector('.details');
const error = document.querySelector('.error');






// Start from Here


const apiKey = 'a140db5cb9c029326c6b468e5ce006a2';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;





async function getWeather() {
  
  const response = await fetch(apiUrl + `q=${(input.value).trim()}&appid=${apiKey}&units=metric&lang=ar`);
  const data = await response.json();

  

  // That'll be happen when fetch data 

  
  if (response.status == 404) {
    weather.style.display = 'none'
    error.style.display = 'block'
    input.classList.add('border');
  } else {
      city.innerHTML = data.name
      temp.innerHTML = Math.round(data.main.temp) + ' °C'
      humidity.innerHTML = data.main.humidity + ' %'
      wind.innerHTML = data.wind.speed + ' كم/ساعة';
     if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'imgs/clear.png';
    } else if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'imgs/clouds.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'imgs/drizzle.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'imgs/rain.png';
    } else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'imgs/snow.png';
    } else if (data.weather[0].main == 'Wind') {
      weatherIcon.src = 'imgs/wind.png';
    }else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'imgs/mist.png';
    }
    weather.style.display = 'block'
    error.style.display = 'none'
  }
}
















// End Here 














btnSearch.addEventListener('click', () => {
  if (input.value != "") {
    getWeather()
  } else {
    weather.style.display = 'none'
  }
})

document.addEventListener('keypress', (e) => {
  if (e.key == 'Enter' && input.value != "") {
    getWeather()
  } else {
    weather.style.display = 'none'
  }
})

input.addEventListener('input', () => {
  if (input.value == "") {
      input.classList.remove('border');
      weather.style.display = 'none'
      error.style.display = 'none'
  } 
})



