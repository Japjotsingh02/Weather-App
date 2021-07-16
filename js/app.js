// All DOM Selecytors

const input=document.querySelector('.input');
const searchButton=document.querySelector('.button');
const description=document.querySelector('.weather-desc');
const city=document.querySelector(".city");
const country=document.querySelector(".country");
const temperature=document.querySelector(".temp");
const weather=document.querySelector(".weather");
const pressure=document.querySelector(".pressure-value");
const humidity=document.querySelector(".humidity-value");
const windSpeed=document.querySelector(".wind-speed-value");
const feelsLike=document.querySelector(".feels-like-value");
const feelsScale=document.querySelector(".feels-unit");
const celsius=document.querySelector(".celsius");
const fahrenheit=document.querySelector(".fahrenheit");
const image=document.querySelector(".image");
let unit="";


//  Api Data
const weatherApi={
    baseUrl : "https://api.openweathermap.org/data/2.5/weather",
    key : "f148d0c428da6c4b5e0b4555655ff723",
};


// ------------------- Event listener function to get city Name -------------------
 function renderWeather(e){
    e.preventDefault();
    if(input.value ==="") return;
    getWeatherData(input.value);
};



// ------------------- Get city's weather data -------------------
function getWeatherData(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&units=${unit}&appid=${weatherApi.key}`)
        .then(resp =>resp.json())
            .then(showWeatherData);
};



// ------------------- Show city's weather data -------------------
function showWeatherData(data){
    if(data.cod=== "404") {
        description.style.display="none";
    }
    else{
        console.log(data);
        city.innerHTML=data.name;
        country.innerHTML=data.sys.country;
        temperature.innerHTML=Math.round(data.main.temp);
        weather.innerHTML=data.weather[0].description;
        feelsLike.innerHTML=Math.round(data.main.feels_like);
        pressure.innerHTML=data.main.pressure;
        humidity.innerHTML=data.main.humidity;
        windSpeed.innerHTML=data.wind.speed;
        changeIcon(data);
        changeScaleColor();
        changeFeelsUnit();
        description.style.display="block";
        init();
    }
    
};

// ------------------- Change temperature scales -------------------
function changeTempScale(){
    const tempScale=this.getAttribute('class');
    console.log(tempScale);
    if(tempScale==="celsius"){
        unit="metric";
        
    }
    else{
        unit="default";    
    }
    getWeatherData(city.innerHTML);
};


// ------------------- Change Scales color -------------------
function changeScaleColor(){
    if(unit==="metric"){
        celsius.style.color="#ffffff";
        fahrenheit.style.color=""
    }
    else{
        fahrenheit.style.color="#ffffff";
        celsius.style.color="";
    }
};


// ------------------- Change Feels unit -------------------
function changeFeelsUnit(){
    if(unit==="metric"){
        feelsScale.innerHTML="&#8451;";
    }
    else{
        feelsScale.innerHTML="&#8457;";
    }
}



// ------------------- Change Weather Styles -------------------
function changeIcon(data){
    let icon="";
    let background="";

    if( data.weather[0].main ==="sunny"){

        icon="./resources/images/sunny.svg";
        background ="linear-gradient(0.25turn,#fec492,#fde1cc,#fec492) ";           
    }

    else if( data.weather[0].main === "Haze" || data.weather[0].main === "Smoke" || data.weather[0].main === "Dust" || data.weather[0].main === "Fog" || data.weather[0].main === "Sand" || data.weather[0].main === "Ash" || data.weather[0].main === "Squall" || data.weather[0].main === "Tornado"){

        icon= "./resources/images/haze.svg";
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";
    } 

    // else if( data.weather[0].main === "Smoke" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";
    // }

    // else if( data.weather[0].main === "Dust" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    // }

    // else if( data.weather[0].main === "Fog" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    // }

    // else if( data.weather[0].main === "Sand" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    // }

    // else if( data.weather[0].main === "Ash" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    // }

    // else if( data.weather[0].main === "Squall" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    // }

    // else if( data.weather[0].main === "Tornado" ){
        // icon= "./resources/images/haze.svg";
        // background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    // }

    else if(data.weather[0].main ==="Clouds"){
        icon="./resources/images/clouds.svg";
        background ="linear-gradient(0.25turn,#05172f,#935874,#05172f) ";

    }

    else if(data.weather[0].main ==="Clear"){
        icon="./resources/images/clear.svg";
        background="linear-gradient(0.25turn,#1A7DD3,#349CF7,#1A7DD3) ";

    }
    else if(data.weather[0].main ==="Rain" || data.weather[0].main ==="Drizzle"){
        icon="./resources/images/rain.svg";
        background="linear-gradient(0.25turn,#0a486b,#4d8288,#0a486b)";

    }
    // else if(data.weather[0].main ==="Drizzle"){
        // icon="./resources/images/rain.svg";
        // background="linear-gradient(0.25turn,#0a486b,#4d8288,#0a486b)";

    // }
    else if(data.weather[0].main ==="Thunderstorm"){
        icon="./resources/images/storm.svg";
        background="linear-gradient(0.25turn,#0a486b,#4d8288,#0a486b) ";

    }
    else if(data.weather[0].main ==="Mist" ){
        icon="./resources/images/mist.svg";
        background="linear-gradient(0.25turn,#a5c0c2,#e0e7ea,#7c959d) ";

    }
    else if(data.weather[0].main ==="Snow"){
        icon="./resources/images/snow.svg";
        background="linear-gradient(0.25turn,#94F2F4,#ECFFFD,#94F2F4)";
        
    }

    image.src=icon;
    document.body.style.background=background;
};


// ------------------- Clears the input field -------------------
function init(){
    input.value="";
}



searchButton.addEventListener("click",renderWeather);
celsius.addEventListener("click",changeTempScale);
fahrenheit.addEventListener("click",changeTempScale);










