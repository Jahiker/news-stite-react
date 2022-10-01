import { useEffect } from 'react'
import './App.scss'

function App() {
  const API_KEY = '70abb1a6c8f645e88f3c7c8f2485e3ce';

  useEffect(() => {
    
    const news = fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
    
  },[])

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  )
}

export default App
