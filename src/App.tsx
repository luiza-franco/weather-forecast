import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState<any>({})

  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition(function({coords}) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=49b33b68191e4c1248e5763aafd8b662&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`).then(response => {
        console.log(response.data)
        setWeatherData(response.data)
      })
    })
   
  }

  useEffect(() => {
    updateLocation()
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <h1 className="navbar-brand text-white">
          Weather Forecast
        </h1>
      </nav>
      
      <main className="container">
      <div className="jumbotrom">
          <h1>Check the weather forecast here!</h1>
          <p className="lead">        
            Write your city in the field below and click search
          </p>
          
          <div>
            <blockquote className="blockquote">
              {
                weatherData.main && <p className="mb-0">The current temperature is:{weatherData.main.temp}°C</p>
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
