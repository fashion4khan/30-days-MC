import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [clock, setClock] = useState("00:00:00"); 
  function updateClock()
  {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let period = "AM";
    if(hour >= 12)
    {
      period = "PM";
    }
    if(hour > 12)
    {
      hour = hour -12;
    }
    if(hour === 0)
    {
      hour = 12;
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    setClock(hour + ":" + minute + ":" + second + " " + period);
  }
  useEffect(() => {
    let interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  },[]);
  return (
    <div className="App">
      <div className="Box">
          <h1>{clock}</h1>
      </div>
    </div>
  );
}

export default App;
