import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  var [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8df86d8ff8491e2b1163d5b226652c9b`

  const searchlocation = (event)=>{
  if(event.key === 'Enter'){
    fetch(url)
    .then(res=>res.json())
    .then(data=>setData(data))
    // console.log(data.weather)
    setLocation('')
  }
}
  return (
    <div className="app">
      <div className='search'>
          <input type="text" onKeyPress={searchlocation} value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main? <h1>{data.main.temp.toFixed()} F</h1>: null}
          </div>
          <div className='desc'>
            {data.weather? <p className='bold'>{data.weather[0].main} </p>: null}
          </div>
{data.main != undefined && 

          <div className='bottom'>
            <div className='feels'>
              {data.main? <p className='bold'>{data.main.feels_like.toFixed()} F</p> :null}
                <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main? <p className='bold'>{data.main.humidity}%</p>:null}
              <p>Humidity</p>
            </div>
            <div className='wind'>
              {data.wind?<p className='bold'>{data.wind.speed.toFixed()} MPH</p>:null}
              <p>Wind Speed</p>
            </div>
          </div>
}
        </div>
      </div>
    </div>
  );
}

export default App;
