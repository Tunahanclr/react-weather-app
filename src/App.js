import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [city,setCity]=useState("")
    const [info,setInfo]=useState([])
    const [state,setState]=useState(false)
    const handleChange= async ()=>{
      const api="2f25136bbbfaa799517de2dc346147e9"
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
      await axios(url).then(data=> setInfo(data.data))
        setState(true)
    }
  return (
    <div className="app">
      <div className="search">
        <form onSubmit={(e)=>{e.preventDefault();handleChange()}}>
        <input
          placeholder='Enter Location'
          type="text" 
          onChange={(e)=>setCity(e.target.value)}
          />
        </form>
      </div>
   <div>
    {
      state ?    <div className="container">
      <div className="top">
      <div className="location">
          <p>{info.name}</p>
        </div>
        <div className='weather'>
          <p>Hava durumu: {info.weather[0].description}</p> 
        </div>
        <div className="weather-img">
          <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`} alt="" />
        </div>
        <div className="temp">
            <p>
              Sıcaklık: {info.main.temp}C°
            </p>
        </div>
      </div>
    </div> :null
    }
   </div>
    </div>
  );
}

export default App;