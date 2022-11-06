// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const WeatherApi={
    Key:"3c68ceb6b59bc15f1863b3950ec151fd",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox=document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
     console.log(searchInputBox.value);
     getWeatherReport(searchInputBox.value);
     document.querySelector('.weather-body').style.display="block";
    }
})

function getWeatherReport(city){
    fetch(`${WeatherApi.baseUrl}?q=${city}&appid=${WeatherApi.Key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);

}


function showWeatherReport(weather){
console.log(weather);
let city=document.getElementById('city');
city.innerText=`${weather.name},${weather.sys.country}`;

let temprature=document.getElementById('temp');
temprature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

let minMaxTemp=document.getElementById('min-max');
minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

let weatherType=document.getElementById('weather');
weatherType.innerText=`${weather.weather[0].main}`;

let date=document.getElementById('date');
let todayDate=new Date();
date.innerText=dateManage(todayDate);

if(weatherType.textContent==="clear"){
document.body.style.backgroundImage="url('https://media.istockphoto.com/photos/landscape-of-the-clear-sky-picture-id1186224156?b=1&k=20&m=1186224156&s=170667a&w=0&h=yowp1qQLrkEudspdxr2u9Ocgu45_b2DlUPECw9b5jCw=')"
}
else if(weatherType.textContent==="clouds"){
    document.body.style.backgroundImage="url('https://media.istockphoto.com/photos/stormcloud-picture-id157527872?b=1&k=20&m=157527872&s=170667a&w=0&h=IRWpe4Cz7ZBiXod5hC0ExsmHt9O4C0_EbBcoFjZk1DM=')"
    }
else if(weatherType.textContent==="Haze"){
    document.body.style.backgroundImage="url('https://c1.wallpaperflare.com/preview/536/975/603/dark-dawn-evening-fog.jpg')"
    }
else if(weatherType.textContent==="Rain"){
    document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/674201.jpg')"
    } 
else if(weatherType.textContent==="Snow"){
    document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/444743.jpg')"
    }
    else if(weatherType.textContent==="Thunderstorm"){
        document.body.style.backgroundImage="url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/lightning-bolt-strike-2-serhii-kucher.jpg')"
        }
        else if(weatherType.textContent==="Mist") {
            document.body.style.backgroundImage="url('https://images.livemint.com/img/2021/12/17/1600x900/2019-12-31T055914Z_2114992087_RC256E9KDR7S_RTRMADP_3_INDIA-WEATHER_1577783910079_1639732687819.JPG')";

        }
}

function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];

    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date} ${month} (${day}),${year}`;
}

function wow(){
    console.log(a);
}
wow;