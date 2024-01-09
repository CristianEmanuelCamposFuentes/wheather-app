import { useState } from "react";

export const WheatherApp = () => {

  const [ciudad, setCiudad] = useState('');
  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length < 0) fetchClima();
  }

  const fetchClima = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={d4bab971d3535b69e7123fc73cc89de4}`);
    } catch (error) {
      console.log(error);
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
    </div>
  )
}
