import React, { useState } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fde0d7d6e959504ba320b86974c32a06";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
      ` ${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feelsLike,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    }
    catch (err) {
     throw(err)
    }
    
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }
    catch (err) {
       setError(true);
    }
    
  };

  return (
    <div className="SearchBox">
      <h3>Search For The Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Send
        </Button>
        {error && <p style={{ color: "red" }}>No such place exits</p>}
      </form>
    </div>
  );
}
