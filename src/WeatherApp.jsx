import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
         city:"Ahmedabad",
        feelsLike:28.11,
        temp:28.24,
        tempMin:28.24,
        tempMax:28.24,
        humidity:43,
        weather:"Clear Sky",
    })
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return  (
<div>
    <h1>Weather App by Me!</h1>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
</div>
    )
}