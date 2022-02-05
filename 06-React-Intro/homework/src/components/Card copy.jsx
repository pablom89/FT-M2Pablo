import React from "react";

export default function Card({data}) {
  // acá va tu código
  return (
    <>
    <h1>{data.name}</h1>
    <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
    <div style={{display: "flex", flexDirection: "column", margin: "2rem"}}>
      <span>Minimo</span>
      <span>{data.main.temp_min}</span>
    </div>
    <div style={{display: "flex", flexDirection: "column"}}>
      <span>Maximo</span>
      <span>{data.main.temp_max}</span>
    </div>
    <img  alt="image not found" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
    </div>
    </>
  )
}
