const carSchema = require('../models/CarsModel')
const mongoose = require('mongoose')

//Get all cars
const getCars = async(req, res) => {
    const cars = await carSchema.find({}).sort({Model: -1})

    res.status(200).json(cars)

}


//GET cars over 5 years
const getCertainCars = async(req, res) => {
    const cars = await carSchema.find({Model: {$lt: 2018}}).sort({Model: -1})

    res.status(200).json(cars)
}

//CREATE new car
const createCar = async(req, res) => {
    const {Make, Model, CurrentOwner, PreviousOwner, CurrentAddress} = req.body

    //add doc to db
    try{
        const car = await carSchema.create({Make, Model, CurrentOwner, PreviousOwner, CurrentAddress})
        res.status(200).json(car)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//DELETE car
const deleteCar = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such car exists"})
    }

    const car = await carSchema.findOneAndDelete({_id: id});

    if(!car) {
        return res.status(404).json({error: "No such car exists"})
    }

    res.status(200).json(car)
}

//UPDATE car
const updateCar = async(req, res) => {
    const { id } = req.params

    //is not really needed
   // if(!mongoose.Types.ObjectId.isValid(id)) {
      //  return res.status(404).json({error: "no such car exists"})
  //  }
  console.log(id)
    console.log(req.body)
    const car = await carSchema.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!car) {
        return res.status(404).json({error: "No such car exists"})
    }


    res.status(200).json(car)
}


module.exports = { createCar, getCertainCars, getCars, deleteCar, updateCar }