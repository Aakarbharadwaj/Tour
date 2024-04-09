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
  const reloadHandler = () => {
    setTour(data);
  }
  if (tours.length === 0) {
    return (
      <div className='tour-btn'>
        <button onClick={reloadHandler}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tour tours={tours} removeTours={removeTours} reloadHandler={reloadHandler} />
    </div>
  )
}

export default App
