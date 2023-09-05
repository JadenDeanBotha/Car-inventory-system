import React from 'react'
import { useEffect, useState } from 'react';

const DisplayOlder = () => {
    const [cars, setCars] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
          const response = await fetch("/api/cars/Older-Than-Five-Years");
          const json = await response.json();
    
          if (response.ok) {
            setCars(json);
          }
        };
        fetchCars();
      }, []);
  return (
    <div>
        <h2>Cars older than 5 years old</h2>
        {cars && cars.map((car) => (
            <div className='car-details'>
            <h4>{car.Make}</h4>
            <p key={car._id}><strong>Model: </strong>{car.Model}</p>
            <p><strong>Current Owner: </strong>{car.CurrentOwner}</p>
            <p><strong>Previous Owner: </strong>{car.PreviousOwner}</p>
            <p><strong>Current Address: </strong>{car.CurrentAddress}</p>
            </div>
        ))}
    </div>
  )
}

export default DisplayOlder