import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState<any>({})
  // const [icon, setIcon] = useState("")


  const handleSearch = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=49b33b68191e4c1248e5763aafd8b662&lat=30&lon=30&units=metric`).then(response => {
      console.log(response.data)
      setWeatherData(response.data)
    })
  }


  const handleChange = (e: any) => {
    console.log(e.target.value)
    setCity(e.target.value)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-white">
          Weather Forecast
        </a>
      </nav>
      
      <main className="container">
      <div className="jumbotrom">
          <h1>Check the weather forecast here!</h1>
          <p className="lead">        
            Write your city in the field below and click search
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                value={city} />
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
          
          
          <div>
            <blockquote className="blockquote">
              {
                weatherData.main && <p className="mb-0">The current temperature is:{weatherData.main.temp}°F</p>
              }
            </blockquote>
          </div>

          <div>
            <blockquote className="blockquote">
              {
                weatherData.weather && <p className="mb-0">The sky is: {weatherData.weather[0]?.description}</p>
              }
            </blockquote>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
