import React from 'react';
import Car from '../components/car.jsx';

function Garage({ cars, id }) {
  // If an ID is provided, find the specific car; otherwise, render all cars
  if (id) {
    const car = cars.find(car => car.id === id);
    return (
      <>
        <h1>Who lives in my garage?</h1>
        {car ? <Car key={car.id} brand={car.brand} /> : <p>Car not found!</p>}
      </>
    );
  } else {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map(car => (
            <Car key={car.id} brand={car.brand} />
          ))}
        </ul>
      </>
    );
  }
}

export default Garage;
