import React, { useState } from "react";

const CarForms = ({
  Make,
  setMake,
  Model,
  setModel,
  CurrentOwner,
  setCurrentOwner,
  PreviousOwner,
  setPreviousOwner,
  CurrentAddress,
  setCurrentAddress,
  handleAdd,
  carData,
  updateCars
}) => {
   
  //This will be the state for the car that is being edited
  const [editMake, setEditMake] = useState("");
  const [editModel, setEditModel] = useState("");
  const [editCurrentOwner, setEditCurrentOwner] = useState("");
  const [editPreviousOwner, setEditPreviousOwner] = useState("");
  const [editCurrentAddress, setEditCurrentAddress] = useState("");
  //const [id, setId] = useState("");

  function carUpdate(e) {
    e.preventDefault()

    updateCars(editMake, editModel, editCurrentOwner, editPreviousOwner, editCurrentAddress)
    console.log(editMake)
  }

  console.log()
  return (
    <>
      <form onSubmit={handleAdd}>
        <h3>Add Car</h3>
        <label>Car Make:</label>
        <input
          type="text"
          onChange={(e) => setMake(e.target.value)}
          defaultValue={Make}
        />

        <label>Car Model:</label>
        <input
          type="number"
          onChange={(e) => setModel(e.target.value)}
          defaultValue={Model}
        />

        <label>Car's Current Owner:</label>
        <input
          type="text"
          onChange={(e) => setCurrentOwner(e.target.value)}
          defaultValue={CurrentOwner}
        />

        <label>Car's Previous Owner:</label>
        <input
          type="text"
          onChange={(e) => setPreviousOwner(e.target.value)}
          defaultValue={PreviousOwner}
        />

        <label>Current Address:</label>
        <input
          type="text"
          onChange={(e) => setCurrentAddress(e.target.value)}
          defaultValue={CurrentAddress}
        />

        <button>Add Car</button>
      </form>
      {/******************************************************************************************************************** */}
      <form onSubmit={(e) => carUpdate(e)}>
        <h3>edit Car</h3>
        <label>Car Make:</label>
        <input
          type="text"
          onChange={(e) => setEditMake(e.target.value)}
          defaultValue={carData?.Make}
        />

        <label>Car Model:</label>
        <input
          type="number"
          onChange={(e) => setEditModel(e.target.value)}
          defaultValue={carData?.Model}
        />

        <label>Car's Current Owner:</label>
        <input
          type="text"
          onChange={(e) => setEditCurrentOwner(e.target.value)}
          defaultValue={carData?.CurrentOwner}
        />

        <label>Car's Previous Owner:</label>
        <input
          type="text"
          onChange={(e) => setEditPreviousOwner(e.target.value)}
          defaultValue={carData?.PreviousOwner}
        />

        <label>Current Address:</label>
        <input
          type="text"
          onChange={(e) => setEditCurrentAddress(e.target.value)}
          defaultValue={carData?.CurrentAddress}
        />

        <button type="submit">Update Car</button>
      </form>
    </>
  );
};

export default CarForms;
