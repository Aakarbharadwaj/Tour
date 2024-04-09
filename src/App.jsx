import { useState } from 'react'
import './App.css'
import Tour from './components/Tour/Tour'
import data from './data'
function App() {
  const [tours, setTour] = useState(data)

  return (
    <div>
      <Tour tours={tours}/>
    </div>
  )
}

export default App
