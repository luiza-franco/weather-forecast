import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState<any>({})

  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition(function ({ coords }) {
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

    <div className="myBackground">
      <div className='title'>
        {
          weatherData.weather && <p>{weatherData.name}</p>
        }
      </div>

      <div>
        {
          weatherData.main && <p className='temperature'>{Math.round(weatherData.main.temp)}°</p>
        }
      </div>

      <div className='description'>
        {
          weatherData.weather && <p>{weatherData.weather[0]?.description}</p>
        }
      </div>

      <div className='TempMaxMin'>
        {
          weatherData.weather && <p>Min.:{weatherData.main.temp_min}° | Max.:{weatherData.main.temp_max}°</p>
        }
      </div>

    </div>
  );
}


export default App;
