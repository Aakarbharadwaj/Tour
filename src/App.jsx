import { useState } from 'react'
import './App.css'
import Tour from './components/Tour/Tour'
import data from './data'
function App() {
  const [tours, setTour] = useState(data)
  const removeTours = (id) => {
    const newTour = tours.filter(item => item.id !== id);
    setTour(newTour);
  }
  return (
    <div>
      <Tour tours={tours} removeTours={removeTours} />
    </div>
  )
}

export default App
