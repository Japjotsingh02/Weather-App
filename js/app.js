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
    
    const sunny=`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;" xml:space="preserve">
        <circle style="fill:#FFC107;" cx="245.333" cy="245.333" r="160"/>
        <g>
            <path style="fill:#FFD54F;" d="M245.333,64C251.224,64,256,59.224,256,53.333V10.667C256,4.776,251.224,0,245.333,0   c-5.891,0-10.667,4.776-10.667,10.667v42.667C234.667,59.224,239.442,64,245.333,64z"/>
            <path style="fill:#FFD54F;" d="M245.333,426.667c-5.891,0-10.667,4.776-10.667,10.667V480c0,5.891,4.776,10.667,10.667,10.667   c5.891,0,10.667-4.776,10.667-10.667v-42.667C256,431.442,251.224,426.667,245.333,426.667z"/>
            <path style="fill:#FFD54F;" d="M480,234.667h-42.667c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667H480   c5.891,0,10.667-4.776,10.667-10.667C490.667,239.442,485.891,234.667,480,234.667z"/>
            <path style="fill:#FFD54F;" d="M64,245.333c0-5.891-4.776-10.667-10.667-10.667H10.667C4.776,234.667,0,239.442,0,245.333   C0,251.224,4.776,256,10.667,256h42.667C59.224,256,64,251.224,64,245.333z"/>
            <path style="fill:#FFD54F;" d="M140.096,84.395c1.909,3.307,5.44,5.341,9.259,5.333c1.873,0.007,3.715-0.486,5.333-1.429   c5.102-2.946,6.849-9.469,3.904-14.571l-21.333-36.949c-2.979-5.082-9.514-6.787-14.596-3.808   c-5.035,2.951-6.763,9.401-3.878,14.474L140.096,84.395z"/>
            <path style="fill:#FFD54F;" d="M350.571,406.272c-2.98-5.082-9.515-6.786-14.597-3.806c-5.033,2.952-6.761,9.4-3.878,14.473   l21.333,36.949c1.909,3.307,5.44,5.341,9.259,5.333c1.873,0.007,3.715-0.486,5.333-1.429c5.102-2.946,6.849-9.469,3.904-14.571   L350.571,406.272z"/>
            <path style="fill:#FFD54F;" d="M411.605,160c1.873,0.007,3.715-0.486,5.333-1.429l36.949-21.333   c5.22-2.731,7.238-9.176,4.507-14.396c-2.731-5.22-9.176-7.238-14.396-4.507c-0.266,0.139-0.525,0.289-0.778,0.45l-36.949,21.333   c-5.102,2.946-6.849,9.47-3.904,14.571c1.905,3.3,5.426,5.333,9.237,5.333V160z"/>
            <path style="fill:#FFD54F;" d="M73.728,332.096l-36.949,21.333c-5.102,2.946-6.849,9.469-3.904,14.571   c1.905,3.3,5.426,5.333,9.237,5.333c1.873,0.007,3.715-0.486,5.333-1.429l36.949-21.333c5.22-2.731,7.238-9.176,4.507-14.396   c-2.731-5.22-9.176-7.238-14.396-4.507c-0.266,0.139-0.525,0.289-0.778,0.45L73.728,332.096z"/>
            <path style="fill:#FFD54F;" d="M36.779,137.237l36.949,21.333c1.613,0.939,3.446,1.433,5.312,1.429   c5.891,0,10.666-4.776,10.666-10.667c0-3.81-2.033-7.331-5.333-9.237l-36.949-21.333c-4.972-3.16-11.564-1.692-14.724,3.279   s-1.692,11.564,3.279,14.724c0.253,0.161,0.512,0.311,0.778,0.45L36.779,137.237z"/>
            <path style="fill:#FFD54F;" d="M453.888,353.429l-36.949-21.333c-4.972-3.16-11.564-1.692-14.724,3.279   c-3.16,4.971-1.692,11.564,3.279,14.724c0.253,0.161,0.513,0.311,0.778,0.45l36.949,21.333c1.619,0.943,3.46,1.436,5.333,1.429   c5.891,0,10.666-4.776,10.666-10.667c0-3.811-2.033-7.332-5.333-9.237V353.429z"/>
            <path style="fill:#FFD54F;" d="M336,88.299c1.619,0.943,3.46,1.436,5.333,1.429c3.818,0.008,7.349-2.027,9.259-5.333l21.333-36.949   c2.911-5.121,1.119-11.633-4.002-14.544c-5.073-2.883-11.521-1.156-14.473,3.878l-21.333,36.949   C329.168,78.824,330.906,85.346,336,88.299z"/>
            <path style="fill:#FFD54F;" d="M154.667,402.368c-5.102-2.945-11.625-1.198-14.571,3.904l-21.333,36.949   c-2.945,5.102-1.198,11.625,3.904,14.571c1.619,0.943,3.46,1.436,5.333,1.429c3.818,0.008,7.35-2.027,9.259-5.333l21.333-36.949   c2.94-5.105,1.186-11.627-3.919-14.567C154.671,402.37,154.669,402.369,154.667,402.368z"/>
        </g>
    </svg>
    `;


    const haze=`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 448.02 448.02" style="enable-background:new 0 0 448.02 448.02;" xml:space="preserve">
        <g>
	        <path style="fill:#607D8B;" d="M20.874,99.059l42.272-13.536c29.984-9.632,62.912-6.464,90.336,8.544   c21.76,11.968,46.144,17.888,70.528,17.888s48.768-5.952,70.528-17.888c27.392-15.04,60.288-18.176,90.336-8.576l42.272,13.536   c8.448,2.56,17.408-1.984,20.096-10.368c2.688-8.416-1.952-17.408-10.368-20.128L394.57,54.995   c-38.336-12.224-80.384-8.224-115.424,11.008c-34.016,18.624-76.256,18.624-110.272,0c-35.072-19.2-77.152-23.2-115.456-10.976   L11.146,68.563C2.698,71.283-1.942,80.275,0.778,88.691C3.434,97.043,12.362,101.587,20.874,99.059z"/>
	        <path style="fill:#607D8B;" d="M436.874,164.563l-42.304-13.536c-38.336-12.192-80.384-8.192-115.424,11.008   c-34.016,18.624-76.256,18.624-110.272,0c-35.072-19.2-77.152-23.2-115.456-11.008l-42.272,13.536   c-8.448,2.72-13.088,11.712-10.368,20.128c2.656,8.384,11.584,12.96,20.096,10.368l42.272-13.536   c29.984-9.568,62.912-6.464,90.336,8.544c21.76,11.968,46.144,17.888,70.528,17.888s48.768-5.952,70.528-17.888   c27.392-15.008,60.288-18.176,90.336-8.576l42.272,13.536c8.448,2.624,17.408-2.016,20.096-10.368   C449.962,176.275,445.322,167.283,436.874,164.563z"/>
	        <path style="fill:#607D8B;" d="M436.874,260.563l-42.304-13.536c-38.336-12.192-80.384-8.192-115.424,11.008   c-34.016,18.624-76.256,18.624-110.272,0c-35.072-19.2-77.152-23.2-115.456-11.008l-42.272,13.536   c-8.416,2.72-13.056,11.712-10.368,20.128c2.656,8.416,11.584,12.928,20.096,10.368l42.272-13.536   c29.984-9.6,62.912-6.464,90.336,8.576c21.76,11.936,46.112,17.888,70.528,17.888s48.768-5.952,70.528-17.888   c27.392-15.04,60.288-18.176,90.336-8.576l42.272,13.536c8.448,2.56,17.408-1.984,20.096-10.368   C449.962,272.275,445.322,263.283,436.874,260.563z"/>
	        <path style="fill:#607D8B;" d="M436.874,356.563l-42.304-13.536c-38.336-12.224-80.384-8.192-115.424,11.008   c-34.016,18.624-76.256,18.624-110.272,0c-35.072-19.2-77.152-23.232-115.456-11.008l-42.272,13.536   c-8.416,2.72-13.056,11.712-10.368,20.128c2.656,8.384,11.584,12.96,20.096,10.368l42.272-13.536   c29.984-9.6,62.912-6.464,90.336,8.576c21.76,11.936,46.112,17.888,70.528,17.888s48.768-5.952,70.528-17.888   c27.392-15.04,60.288-18.176,90.336-8.576l42.272,13.536c8.448,2.624,17.408-1.984,20.096-10.368   C449.962,368.275,445.322,359.283,436.874,356.563z"/>
        </g>
    </svg>
    `;


    const clouds=`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.998 511.998" style="enable-background:new 0 0 511.998 511.998;" xml:space="preserve">
        <path style="fill:#9FDEF7;" d="M155.968,187.07h38.254c14.29-26.216,38.712-46.094,68.024-54.357  c-5.897-14.318-19.979-24.397-36.419-24.397c-4.11,0-8.069,0.633-11.79,1.798c0.02-0.598,0.046-1.195,0.046-1.798  c0-29.244-23.714-52.956-52.96-52.956c-25.223,0-46.309,17.632-51.642,41.239c-3.168-1.056-6.548-1.634-10.069-1.634  c-10.834,0-20.398,5.424-26.133,13.703c-3.2-0.825-6.56-1.272-10.019-1.272c-22,0-39.834,17.835-39.834,39.836  c0,21.997,17.835,39.836,39.834,39.836h63.687"/>
        <path style="fill:#BEEAFC;" d="M373.536,162.958c-20.468-21.893-49.607-35.578-81.941-35.578c-53.408,0-98.066,37.345-109.362,87.34  c-6.704-2.236-13.865-3.466-21.318-3.466c-22.947,0-43.196,11.49-55.341,29.022c-6.779-1.751-13.888-2.692-21.216-2.692  C37.768,237.584,0,275.352,0,321.942c0,46.588,37.768,84.361,84.358,84.361h93.011c0.196-28.675,23.489-51.858,52.206-51.858  c5.446,0,10.697,0.835,15.633,2.382c-0.023-0.79-0.059-1.582-0.059-2.382c0-38.787,31.442-70.23,70.228-70.23  c33.443,0,61.41,23.387,68.483,54.691c4.197-1.401,8.678-2.17,13.346-2.17c14.368,0,27.051,7.194,34.655,18.175  c4.245-1.098,8.696-1.688,13.284-1.688c19.231,0,36.057,10.279,45.295,25.637c13.396-14.793,21.557-34.414,21.557-55.94  c0-46.056-37.332-83.384-83.384-83.384c-8.696,0-17.08,1.333-24.963,3.803c0.041-1.263,0.096-2.529,0.096-3.803  c0-18.832-4.641-36.579-12.845-52.163"/>
        <path style="fill:#AEE4FF;" d="M89.442,237.74c-1.682-0.102-3.376-0.157-5.084-0.157C37.768,237.582,0,275.351,0,321.941  c0,46.588,37.768,84.361,84.358,84.361h93.011c0.061-8.998,2.4-17.454,6.464-24.823C137.844,346.086,103.961,295.755,89.442,237.74z  "/>
        <path style="fill:#83D4ED;" d="M81.614,174.026c0-27.362,4.208-53.738,11.999-78.528c-8.402,1.551-15.646,6.407-20.333,13.171  c-3.2-0.825-6.56-1.272-10.019-1.272c-22,0-39.834,17.835-39.834,39.836c0,21.997,17.835,39.836,39.834,39.836h18.678  C81.727,182.747,81.614,178.4,81.614,174.026z"/>
        <path style="fill:#E4F2F9;" d="M445.146,350.991c-4.588,0-9.041,0.588-13.284,1.688c-7.604-10.982-20.287-18.175-34.655-18.175  c-4.668,0-9.149,0.769-13.346,2.17c-7.074-31.305-35.04-54.691-68.483-54.691c-38.786,0-70.228,31.443-70.228,70.23  c0,0.8,0.035,1.592,0.059,2.382c-4.936-1.547-10.187-2.382-15.633-2.382c-28.835,0-52.212,23.373-52.212,52.216  c0,28.835,23.378,52.21,52.212,52.21h156.329h29.013h30.23c29.175,0,52.827-23.651,52.827-52.824  C497.973,374.64,474.321,350.991,445.146,350.991z"/>
        <path style="fill:#D7EDF9;" d="M285.258,337.525c0-18.847,4-36.758,11.185-52.941c-29.585,8.267-51.295,35.403-51.295,67.627  c0,0.8,0.035,1.592,0.059,2.382c-4.936-1.547-10.187-2.382-15.633-2.382c-28.835,0-52.212,23.373-52.212,52.216  c0,28.835,23.378,52.21,52.212,52.21h132.677C316.86,436.184,285.258,390.545,285.258,337.525z"/>
    </svg>
    `;

        
    const clear=`
    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 504.5 504.5" height="200" viewBox="0 0 504.5 504.5" width="250"><g><path d="m409.887 289.236c13.139-18.8 20.846-41.676 20.846-66.353 0-64.047-51.92-115.967-115.967-115.967-52.755 0-97.282 35.227-111.343 83.441v132.209h210.077z" fill="#ffd900"/><path d="m430.733 222.883c0-64.047-51.92-115.967-115.967-115.967-3.849 0-7.648.21-11.401.576 58.6 5.82 104.367 55.259 104.367 115.391 0 24.676-7.707 47.553-20.846 66.353l3.613 33.33h23l-3.613-33.33c13.14-18.8 20.847-41.677 20.847-66.353z" fill="#fb0"/><g><path d="m497 230.383h-33.133c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h33.133c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z" fill="#ffd900"/></g><g><path d="m420.203 124.938c-1.919 0-3.839-.732-5.303-2.196-2.929-2.929-2.929-7.678 0-10.606l23.429-23.43c2.929-2.93 7.678-2.929 10.607-.001 2.929 2.929 2.929 7.678 0 10.606l-23.429 23.43c-1.465 1.464-3.384 2.197-5.304 2.197z" fill="#ffd900"/></g><g><path d="m314.767 81.25c-4.142 0-7.5-3.357-7.5-7.5v-33.133c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v33.133c0 4.143-3.358 7.5-7.5 7.5z" fill="#ffd900"/></g><g><path d="m209.321 124.914c-1.919 0-3.839-.732-5.303-2.196l-23.429-23.429c-2.929-2.93-2.929-7.678 0-10.607 2.929-2.928 7.678-2.928 10.606 0l23.429 23.429c2.929 2.93 2.929 7.678 0 10.607-1.464 1.464-3.384 2.196-5.303 2.196z" fill="#ffd900"/></g><g><path d="m257.699 92.605c-2.943 0-5.736-1.743-6.932-4.632l-6.34-15.306c-1.585-3.827.232-8.214 4.059-9.799 3.826-1.585 8.215.231 9.799 4.059l6.34 15.306c1.585 3.827-.232 8.214-4.059 9.799-.939.388-1.911.573-2.867.573z" fill="#ffa400"/></g><g><path d="m176.983 173.314c-.956 0-1.929-.184-2.867-.573l-15.306-6.34c-3.827-1.585-5.644-5.972-4.059-9.799 1.585-3.826 5.973-5.648 9.799-4.059l15.306 6.34c3.827 1.585 5.644 5.972 4.059 9.799-1.196 2.888-3.989 4.632-6.932 4.632z" fill="#ffa400"/></g><g><path d="m467.85 293.795c-.957 0-1.929-.184-2.867-.573l-15.306-6.34c-3.827-1.585-5.644-5.972-4.059-9.799 1.585-3.826 5.974-5.647 9.799-4.059l15.306 6.34c3.827 1.585 5.644 5.972 4.059 9.799-1.196 2.888-3.989 4.632-6.932 4.632z" fill="#ffa400"/></g><g><path d="m452.55 173.314c-2.943 0-5.736-1.743-6.932-4.632-1.585-3.827.232-8.214 4.059-9.799l15.306-6.34c3.827-1.585 8.214.232 9.799 4.059s-.232 8.214-4.059 9.799l-15.306 6.34c-.938.389-1.911.573-2.867.573z" fill="#ffa400"/></g><g><path d="m371.834 92.605c-.957 0-1.929-.184-2.867-.573-3.827-1.585-5.644-5.972-4.059-9.799l6.34-15.306c1.585-3.826 5.973-5.647 9.799-4.059 3.827 1.585 5.644 5.972 4.059 9.799l-6.34 15.306c-1.196 2.887-3.989 4.632-6.932 4.632z" fill="#ffa400"/></g><g><path d="m404.739 289.149h-69.507c-2.9 0-5.362-2.08-5.897-4.93-10.155-54.171-57.967-95.069-115.225-94.463-63.743.675-114.71 53.37-114.71 117.118v9.409c0 3.314-2.686 6-6 6h-17.914c-41.106 0-75.179 32.879-75.484 73.984-.307 41.432 33.187 75.116 74.548 75.116h331.333c50.552 0 91.49-41.168 91.114-91.807-.372-50.241-42.016-90.427-92.258-90.427z" fill="#c8effe"/><g fill="#99e2fc"><g><path d="m404.739 289.149h-23c50.242 0 91.885 40.186 92.258 90.426.375 50.639-40.562 91.808-91.114 91.808h23c50.553 0 91.49-41.168 91.114-91.808-.372-50.24-42.016-90.426-92.258-90.426z"/><path d="m306.336 284.219c.534 2.851 2.996 4.931 5.897 4.931h23c-2.9 0-5.362-2.08-5.897-4.931-10.155-54.171-57.967-95.069-115.225-94.463-3.437.036-6.835.233-10.192.566 51.461 5.09 93.029 43.82 102.417 93.897z"/></g><path d="m149.1 322.283c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-49.7v8.999c0 3.314-2.686 6-6 6h-17.914c-.007 0-.013.001-.02.001z"/></g></g></g></svg>
    `;

        
    const rain=`
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="200" viewBox="0 0 512 512" width="512"><g><path d="m476.004 204.65c0 8.88-1.16 17.69-3.45 26.19-.09.35-.22.7-.36 1.03l-29.807 68.7c-1.19 2.75-3.889 4.52-6.879 4.52h-335.05c-55.393 0-100.458-45.06-100.458-100.44 0-23.15 8.069-45.75 22.727-63.62 13.338-16.27 31.546-27.99 51.704-33.4 7.389-42.4 35.276-77.34 72.511-95.06 16.969-8.07 35.867-12.57 55.654-12.57 42.165 0 81.29 20.2 105.748 54.31 6.589-1.65 13.358-2.48 20.188-2.48 36.286 0 68.372 23.54 79.441 57.74 18.778 6.43 35.586 18.54 47.644 34.43 13.338 17.57 20.387 38.54 20.387 60.65z" fill="#eef0f5"/><g fill="#dae1ea"><path d="m476.004 204.65c0 8.88-1.16 17.69-3.45 26.19-.09.35-.22.7-.36 1.03l-29.807 68.7c-1.19 2.75-3.889 4.52-6.879 4.52h-20.738l27.427-63.22c.14-.33.27-.68.36-1.03 2.29-8.5 3.45-17.31 3.45-26.19 0-22.11-7.049-43.08-20.388-60.65-12.059-15.89-28.867-28-47.644-34.43-11.069-34.2-43.155-57.74-79.441-57.74-6.829 0-13.598.83-20.188 2.48-24.456-34.11-63.581-54.31-105.746-54.31-8.759 0-17.338.88-25.657 2.57 16.968-8.07 35.866-12.57 55.653-12.57 42.165 0 81.29 20.2 105.748 54.31 6.589-1.65 13.358-2.48 20.188-2.48 36.286 0 68.372 23.54 79.441 57.74 18.778 6.43 35.586 18.54 47.644 34.43 13.338 17.57 20.387 38.54 20.387 60.65z"/><path d="m100.459 260.101c-30.584 0-55.466-24.874-55.466-55.448 0-4.142-3.358-7.5-7.499-7.5s-7.499 3.358-7.499 7.5c0 38.845 31.61 70.448 70.464 70.448 4.142 0 7.499-3.358 7.499-7.5s-3.357-7.5-7.499-7.5z"/><path d="m512 266.21c0 32.52-23.337 59.7-54.144 65.68-4.14.81-8.409 1.23-12.779 1.23-19.508 0-37.806-8.44-50.434-22.93-17.438 14.84-39.325 22.93-62.493 22.93-15.888 0-31.486-3.91-45.425-11.34-11.959 7.43-25.627 11.34-39.825 11.34-41.715 0-75.651-33.93-75.651-75.64 0-41.7 33.936-75.63 75.651-75.63 1.8 0 3.64.07 5.489.21 5.949-8.72 13.138-16.26 21.268-22.45 16.508-12.62 36.886-19.65 58.493-19.65 40.655 0 76.781 25.57 90.629 63.14 7.129-2.53 14.598-3.81 22.297-3.81 36.897 0 66.924 30.02 66.924 66.92z"/></g><path d="m512 266.21c0 32.52-23.337 59.7-54.144 65.68 13.588-12.25 22.147-29.99 22.147-49.68 0-36.9-30.027-66.92-66.922-66.92-7.699 0-15.168 1.28-22.297 3.81-13.848-37.57-49.974-63.14-90.629-63.14-9.119 0-18.018 1.25-26.497 3.65 16.508-12.62 36.886-19.65 58.493-19.65 40.655 0 76.781 25.57 90.629 63.14 7.129-2.53 14.598-3.81 22.297-3.81 36.896 0 66.923 30.02 66.923 66.92z" fill="#b9cfdf"/><g><path d="m78.058 416.986c-2.883-2.697-7.363-2.697-10.247 0-27.05 25.31-38.333 52.747-30.181 73.396 5.344 13.536 18.542 21.618 35.305 21.618s29.96-8.082 35.304-21.618c8.152-20.649-3.131-48.086-30.181-73.396z" fill="#81ebeb"/><path d="m157.092 349.012c-2.882-2.697-7.363-2.697-10.246 0-17.015 15.919-23.997 33.466-18.679 46.937 3.651 9.247 12.548 14.767 23.802 14.767s20.151-5.521 23.802-14.767c5.318-13.471-1.665-31.018-18.679-46.937z" fill="#00cec8"/><path d="m434.19 416.986c-2.883-2.697-7.363-2.697-10.247 0-27.05 25.31-38.333 52.747-30.181 73.396 5.344 13.536 18.542 21.618 35.305 21.618s29.96-8.082 35.304-21.618c8.152-20.649-3.131-48.086-30.181-73.396z" fill="#81ebeb"/><path d="m256.124 403.364c-2.883-2.697-7.363-2.697-10.247 0-31.155 29.149-44.196 60.632-34.885 84.216 6.036 15.291 20.993 24.42 40.009 24.42s33.972-9.129 40.009-24.419c9.31-23.584-3.731-55.067-34.886-84.217z" fill="#81ebeb"/><path d="m357.155 359.008c-2.882-2.697-7.363-2.697-10.246 0-20.37 19.058-28.79 39.911-22.524 55.782 4.216 10.681 14.552 17.058 27.647 17.058s23.431-6.376 27.647-17.058c6.266-15.871-2.154-36.724-22.524-55.782z" fill="#00cec8"/></g></g></svg>
    `;


    const storm=`
    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 0 0" height="200" viewBox="0 0 512 512" width="250"><g><path d="m298.032 134.504c-24.154 0-43.535-20.724-41.792-45.225 1.431-20.112 17.362-36.563 37.42-38.616 2.823-.289 5.595-.294 8.292-.042 3.682.344 7.077-1.982 8.283-5.478 9.058-26.268 33.979-45.143 63.324-45.143 22.017 0 41.543 10.627 53.752 27.027 3.113 4.181 7.969 6.634 13.181 6.6.106-.001.212-.001.318-.001 28.143 0 50.903 23.049 50.432 51.301-.462 27.656-23.602 49.577-51.262 49.577z" fill="#daeaff"/><path d="m440.811 33.626c-.106 0-.212 0-.318.001-5.213.034-10.069-2.419-13.181-6.6-12.209-16.4-31.736-27.027-53.753-27.027-3.976 0-7.866.358-11.651 1.022 17.159 3.023 32.065 12.576 42.061 26.004 3.113 4.181 7.969 6.634 13.181 6.6.106-.001.212-.001.319-.001 28.143 0 50.903 23.049 50.432 51.301-.462 27.656-23.602 49.577-51.262 49.577h23.342c27.66 0 50.8-21.921 51.262-49.577.471-28.251-22.289-51.3-50.432-51.3z" fill="#bed8fb"/><path d="m448.549 34.216c-2.523-.388-5.107-.59-7.738-.59-.106 0-.212 0-.318.001-5.213.034-10.069-2.419-13.181-6.6-.917-1.232-1.88-2.427-2.878-3.591-24.28 9.443-41.541 33.051-41.541 60.629 0 4.204 3.408 7.611 7.611 7.611s7.612-3.408 7.612-7.611c0-27.469 22.348-49.817 49.817-49.817.208 0 .412-.015.616-.032z" fill="#cbe0fc"/><g><g><path d="m440.942 168.13h-.023c-1.239 0-2.305-.833-2.652-2.023-8.146-27.974-33.974-48.416-64.577-48.416-11.443 0-22.212 2.867-31.642 7.911-3.696 1.977-8.284.944-10.634-2.527-9.067-13.393-24.397-22.197-41.788-22.197-4.067 0-8.021.484-11.808 1.395-4.104.987-8.34-1.218-9.665-5.225-12.18-36.838-46.889-63.421-87.811-63.421-51.071 0-92.471 41.401-92.471 92.471 0 1.16.03 2.312.078 3.46.048 1.136-.325 2.25-1.024 3.146l-.072.093c-.876 1.123-2.202 1.785-3.624 1.862-44.745 2.438-80.183 39.842-79.41 85.374.782 46.028 39.073 82.603 85.108 82.603h351.013c36.961 0 67.769-29.401 68.249-66.359.487-37.554-29.807-68.147-67.247-68.147z" fill="#ecf4ff"/><path d="m440.942 168.13h-.023c-1.239 0-2.305-.833-2.652-2.023-8.146-27.974-33.974-48.416-64.577-48.416-11.443 0-22.212 2.867-31.642 7.911-3.696 1.977-8.284.944-10.634-2.527-9.067-13.393-24.397-22.197-41.788-22.197-4.067 0-8.021.484-11.808 1.395-4.104.987-8.34-1.218-9.665-5.225-12.18-36.838-46.889-63.421-87.811-63.421-51.071 0-92.471 41.401-92.471 92.471 0 1.16.03 2.312.078 3.46.048 1.136-.325 2.25-1.024 3.146l-.072.093c-.876 1.123-2.202 1.785-3.624 1.862-44.745 2.438-80.183 39.842-79.41 85.374.782 46.028 39.073 82.603 85.108 82.603h351.013c36.961 0 67.769-29.401 68.249-66.359.487-37.554-29.807-68.147-67.247-68.147z" fill="#ecf4ff"/><path d="m440.942 168.13h-.023c-1.239 0-2.305-.833-2.652-2.023-8.146-27.974-33.974-48.416-64.577-48.416-3.979 0-7.874.354-11.663 1.019 25.347 4.439 45.813 23.065 52.898 47.398.346 1.189 1.413 2.023 2.652 2.023h.023c37.439 0 67.733 30.593 67.246 68.145-.479 36.958-31.288 66.359-68.249 66.359h23.342c36.961 0 67.769-29.401 68.249-66.359.488-37.553-29.806-68.146-67.246-68.146z" fill="#daeaff"/><path d="m164.324 218.569c0 4.204 3.408 7.611 7.612 7.611s7.611-3.407 7.611-7.611c0-52.052-40.382-94.848-91.462-98.708-.137 2.062-.214 4.14-.214 6.236 0 1.16.03 2.312.078 3.46.048 1.136-.325 2.249-1.024 3.146l-.072.093c-.876 1.123-2.202 1.785-3.624 1.862-.675.037-1.34.107-2.011.159 45.884.359 83.106 37.784 83.106 83.752z" fill="#ddeafb"/><g><path d="m276.979 102.427c-3.828.521-7.592-1.645-8.827-5.38-.764-2.311-1.618-4.582-2.555-6.809-28.111 9.93-48.315 36.756-48.315 68.224 0 4.204 3.408 7.611 7.611 7.611 4.204 0 7.612-3.407 7.612-7.611 0-27.15 19.045-50.156 44.473-55.994v-.041z" fill="#ddeafb"/></g><path d="m381.302 239.187c0-4.204-3.408-7.611-7.612-7.611s-7.612 3.407-7.612 7.611c0 26.019 12.705 49.117 32.229 63.446h41.632c.815 0 1.623-.032 2.431-.06-33.884-1.257-61.068-29.199-61.068-63.386z" fill="#ddeafb"/></g></g><path d="m229.351 269.007h65.425c5.738 0 9.79 5.621 7.975 11.065l-26.249 78.748c-1.814 5.443 2.237 11.065 7.975 11.065h16.619c6.285 0 10.347 6.645 7.482 12.239l-61.515 120.107c-2.308 4.102-8.583 1.891-7.809-2.752l15.028-86.117c.898-5.143-3.061-9.852-8.281-9.852h-38.716c-5.264 0-9.233-4.782-8.263-9.956l22.067-117.691c.745-3.975 4.216-6.856 8.262-6.856z" fill="#ffe07d"/><path d="m301.095 369.885h-16.619c-5.738 0-9.789-5.621-7.975-11.065l26.249-78.748c1.814-5.443-2.237-11.065-7.975-11.065h-23.342c5.738 0 9.789 5.621 7.975 11.065l-26.249 78.748c-1.814 5.443 2.237 11.065 7.975 11.065h16.619c6.285 0 10.347 6.645 7.482 12.239l-38.683 75.529-7.299 41.827c-.774 4.643 5.502 6.854 7.809 2.752l61.515-120.107c2.865-5.595-1.197-12.24-7.482-12.24z" fill="#ffd064"/><g fill="#bed8fb"><path d="m37.432 328.648c-4.204 0-7.611 3.408-7.611 7.612v67.252c0 4.204 3.407 7.612 7.611 7.612s7.611-3.408 7.611-7.612v-67.252c.001-4.204-3.407-7.612-7.611-7.612z"/><path d="m146.716 328.648c-4.204 0-7.612 3.408-7.612 7.612v67.252c0 4.204 3.407 7.612 7.612 7.612 4.204 0 7.611-3.408 7.611-7.612v-67.252c0-4.204-3.407-7.612-7.611-7.612z"/><path d="m92.073 429.525c-4.204 0-7.612 3.408-7.612 7.612v67.252c0 4.204 3.407 7.612 7.612 7.612 4.204 0 7.611-3.408 7.611-7.612v-67.252c.001-4.204-3.407-7.612-7.611-7.612z"/><path d="m419.927 429.525c-4.204 0-7.612 3.408-7.612 7.612v67.252c0 4.204 3.407 7.612 7.612 7.612 4.204 0 7.612-3.408 7.612-7.612v-67.252c-.001-4.204-3.408-7.612-7.612-7.612z"/><path d="m365.284 328.648c-4.204 0-7.611 3.408-7.611 7.612v67.252c0 4.204 3.407 7.612 7.611 7.612s7.612-3.408 7.612-7.612v-67.252c0-4.204-3.407-7.612-7.612-7.612z"/><path d="m474.568 328.648c-4.204 0-7.612 3.408-7.612 7.612v67.252c0 4.204 3.407 7.612 7.612 7.612 4.204 0 7.612-3.408 7.612-7.612v-67.252c-.001-4.204-3.408-7.612-7.612-7.612z"/></g></g></svg>
    `;

    const mist=`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <circle style="fill:#F8E99B;" cx="385.438" cy="132.315" r="109.303"/>
        <path style="fill:#F5DC60;" d="M385.438,23.011v218.607c60.367,0,109.303-48.937,109.303-109.303S445.805,23.011,385.438,23.011z"/>
        <path style="fill:#E8F4FC;" d="M11.506,316.405c0-41.303,33.484-74.787,74.787-74.787c0-82.607,66.966-149.573,149.573-149.573  s149.573,66.966,149.573,149.573c41.303,0,74.787,33.484,74.787,74.787"/>
        <g>
	        <rect y="339.416" style="fill:#D1E5F5;" width="477.483" height="34.517"/>
	        <rect y="454.472" style="fill:#D1E5F5;" width="477.483" height="34.517"/>
	        <rect x="34.517" y="396.944" style="fill:#D1E5F5;" width="477.483" height="34.517"/>
	        <path style="fill:#D1E5F5;" d="M385.438,241.618c0-82.607-66.966-149.573-149.573-149.573v224.36h224.36   C460.225,275.102,426.741,241.618,385.438,241.618z"/>
        </g>
    </svg>
    `;

    const snow=`
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="200" viewBox="0 0 128 128"><path d="M122.427,82.2l-14.592,2.49L90.983,74.96,115.846,64,90.988,53.037l16.847-9.726,14.592,2.49,1.345-7.885L112.51,35.993l3.966-10.716-7.5-2.777-5.14,13.883L86.989,46.109,89.926,19.1,68,35.152v-16.9L77.453,6.855,71.3,1.747,64,10.541,56.7,1.747,50.547,6.855,60,18.248v16.9L38.084,19.1l2.938,27.014L24.165,36.383,19.026,22.5l-7.5,2.777L15.49,35.993,4.227,37.916,5.573,45.8l14.592-2.49,16.851,9.728L12.164,64,37.021,74.958,20.165,84.689,5.573,82.2,4.227,90.084,15.49,92.007l-3.967,10.716,7.5,2.777,5.139-13.883,16.856-9.732-2.937,27.008L60,92.849v16.9l-9.453,11.392,6.156,5.108,7.3-8.793,7.3,8.793,6.156-5.108L68,109.747v-16.9l21.926,16.051-2.936-27,16.844,9.725,5.14,13.883,7.5-2.777L112.51,92.007l11.262-1.923ZM96.018,64,82.4,70,72,64l10.4-6.006ZM80.012,36.273,78.4,51.066,68,57.072V45.066ZM48,36.274l12,8.785V57.072l-10.392-6ZM31.993,64,45.6,58,56,64,45.607,70ZM48,91.72l1.609-14.792,10.393-6V82.935Zm32.014,0L68,82.928v-12l10.4,6.007Z" fill="#81c8ee"/></svg>
    `

    if( data.weather[0].main ==="sunny"){

        icon=sunny;
        background ="linear-gradient(0.25turn,#fec492,#fde1cc,#fec492) ";           
    }

    else if( data.weather[0].main === "Haze" ){

        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";
    } 

    else if( data.weather[0].main === "Smoke" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";
    }

    else if( data.weather[0].main === "Dust" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    }

    else if( data.weather[0].main === "Fog" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    }

    else if( data.weather[0].main === "Sand" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    }

    else if( data.weather[0].main === "Ash" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    }

    else if( data.weather[0].main === "Squall" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    }

    else if( data.weather[0].main === "Tornado" ){
        icon= haze;
        background ="linear-gradient(0.25turn,#969c92,#c2b0a2,#969c92) ";

    }

    else if(data.weather[0].main ==="Clouds"){
        icon=clouds;
        background ="linear-gradient(0.25turn,#05172f,#935874,#05172f) ";

    }

    else if(data.weather[0].main ==="Clear"){
        icon=clear;
        background="linear-gradient(0.25turn,#1A7DD3,#349CF7,#1A7DD3) ";

    }
    else if(data.weather[0].main ==="Rain"){
        icon=rain;
        background="linear-gradient(0.25turn,#0a486b,#4d8288,#0a486b)";

    }
    else if(data.weather[0].main ==="Drizzle"){
        icon=rain;
        background="linear-gradient(0.25turn,#0a486b,#4d8288,#0a486b)";

    }
    else if(data.weather[0].main ==="Thunderstorm"){
        icon=storm;
        background="linear-gradient(0.25turn,#0a486b,#4d8288,#0a486b) ";

    }
    else if(data.weather[0].main ==="Mist" ){
        icon=mist;
        background="linear-gradient(0.25turn,#a5c0c2,#e0e7ea,#7c959d) ";

    }
    else if(data.weather[0].main ==="Snow"){
        icon=snow;
        background="linear-gradient(0.25turn,#94F2F4,#ECFFFD,#94F2F4)";
        
    }

    image.innerHTML=icon;
    document.body.style.background=background;
};


// ------------------- Clears the input field -------------------
function init(){
    input.value="";
}



searchButton.addEventListener("click",renderWeather);
celsius.addEventListener("click",changeTempScale);
fahrenheit.addEventListener("click",changeTempScale);









