import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponent from '../components/BasicList'
import Garage from '../components/uniquekey'
import Car from '../components/car'

function App() {
  const cars = [
    { id: 1, brand: 'Forddd' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];

  return (
    <>
     <ListComponent/>
     <div>
      <h1>Welcome to My Garage App</h1>
      <h2>All Cars:</h2>
      <ul>
        {cars.map(car => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
      <h2>Specific Car:</h2>
      <Garage cars={cars} id={2} /> {/* Render the car with ID 2 */}
    </div>
    </>
  )
}

export default App
