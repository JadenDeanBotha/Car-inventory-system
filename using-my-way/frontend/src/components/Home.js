import React, { useEffect, useState } from "react";

import CarDetails from "./CarDetails";
import CarForms from "./CarForms";


const Home = () => {
  const [cars, setCars] = useState(null);

  //This is the state values for adding a car
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [CurrentOwner, setCurrentOwner] = useState("");
  const [PreviousOwner, setPreviousOwner] = useState("");
  const [CurrentAddress, setCurrentAddress] = useState("");
  let [carData, setCarData] = useState('');
  const [error, setError] = useState(null);

 
  //This is the handle submit of the add form
  const handleAdd = async (e) => {
    e.preventDefault();

    const newCar = { Make, Model, CurrentOwner, PreviousOwner, CurrentAddress };

    const response = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify(newCar),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //converts response to json so that it can be used
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("new car added", json);
      setMake("");
      setModel("");
      setCurrentAddress("");
      setCurrentOwner("");
      setPreviousOwner("");
    }
  };

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch("/api/cars");
      const json = await response.json();

      if (response.ok) {
        setCars(json);
      }
    };
    fetchCars();
  }, [{handleAdd}]);

  

  async function updateCar(car) {
    setCarData(car)
 
  }
  //Create a function that makes an update request with the data we are going to parse from the form component
  const updateCars = async(Make, Model, CurrentOwner, PreviousOwner, CurrentAddress) => {
    console.log(Make)
    const response = await fetch("/api/cars/"+ carData._id, {
        method: "PUT",
        body: JSON.stringify({
            Make: Make,
            Model: Model,
            CurrentOwner: CurrentOwner,
            PreviousOwner: PreviousOwner,
            CurrentAddress: CurrentAddress
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //converts response to json so that it can be used
      const json = await response.json();
  
      if (!response.ok) {
        setError(json.error);
      }else {
        console.log("car was updated", json);
        
      }
  }

  return (
    <div className="Home">
      <div className="cars">
        {cars && cars.map((car) => <CarDetails key={car._id} car={car} updateCar={updateCar} />)}
      </div>
      <CarForms
        Make={Make}
        setMake={setMake}
        Model={Model}
        setModel={setModel}
        CurrentOwner={CurrentOwner}
        setCurrentOwner={setCurrentOwner}
        PreviousOwner={PreviousOwner}
        setPreviousOwner={setPreviousOwner}
        CurrentAddress={CurrentAddress}
        setCurrentAddress={setCurrentAddress}
        handleAdd={handleAdd}
        updateCars={updateCars}
        carData={carData}
      />
    </div>
  );
};

export default Home;
