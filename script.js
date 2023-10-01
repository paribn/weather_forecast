const city = document.querySelector(".input");
const btn = document.querySelector(".btn");
const icon = document.querySelector('.icon');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    Weather(city.value);
})

async function Weather(cityName) {

    const apiKey = "a25c64308d1540a429c6e500948ed49c";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

    const response = await fetch(baseUrl + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = 'Temp -' + Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = 'Humidity -'+ data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = 'Wind speed -'+data.wind.speed + 'km/h';
    data.weather.forEach(item => {
        icon.setAttribute("src", "http://openweathermap.org/img/w/" + item.icon + ".png");
        icon.style.display = "block";
    });


}

