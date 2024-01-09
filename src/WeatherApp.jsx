import { useState } from "react";

export const WeatherApp = () => {

  const urlBase = `http://api.openweathermap.org/data/2.5/weather`
  const API_KEY = 'd4bab971d3535b69e7123fc73cc89de4';
  const difKelvin = 273.15;

  const [ciudad, setCiudad] = useState('');
  const [dataClima, setDataClima] = useState(null);
  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  }

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      // Pasar a json para poder trabajarlo con JS
      const data = await response.json();
      setDataClima(data);
      console.log(data);
    } catch (error) {
      console.log('Ocurrió el siguiente error: ', error);
    }
  }

  return (
    <div className="container">
      <h1>Aplicacion del clima</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
          placeholder="Ciudad" />
        <button type="submit">Buscar</button>
      </form>
      {
        dataClima && (
          <div className="clima-container">
            <h2 className="clima-location">{dataClima.name}, {dataClima.sys.country}</h2>
            <p className="clima-description">{dataClima.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />
            <p className="clima-temperature">Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)} °C</p>
          </div>
        )
      }
    </div>
  )
}
