import React from 'react'

const CarDetails = ({car, updateCar}) => {

    const handleClickDelete = async(carData) => {
        const response = await fetch("/api/cars/" + carData._id, {
          method: "DELETE"
        })
    
        const json  = await response.json()
    
        if (response.ok) {
            console.log("car was deleted", json)

        }
      }

      const handleClickEdit = async(carData) => {    
        updateCar(carData)
      }

  return (
    <div>
        <div className='car-details'>
            <h4>{car.Make}</h4>
            <p><strong>Model: </strong>{car.Model}</p>
            <p><strong>Current Owner: </strong>{car.CurrentOwner}</p>
            <p><strong>Previous Owner: </strong>{car.PreviousOwner}</p>
            <p><strong>Current Address: </strong>{car.CurrentAddress}</p>
            <span onClick={() => handleClickDelete(car)}>delete</span>
            <button onClick={() => handleClickEdit(car)}>edit</button>
        </div>
    </div>
  )
}

export default CarDetails