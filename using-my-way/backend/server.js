const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//These are from the controller file
const { createCar, getCertainCars, getCars, deleteCar, updateCar } = require('./CarsController.js/CarController')

//MIDDLEWARE
app.use(express.json());

//These are all the items related to the controller functions
app.get('/api/cars', getCars)

app.get('/api/cars/Older-Than-Five-Years', getCertainCars)

app.post('/api/cars', createCar)

app.delete('/api/cars/:id', deleteCar)

app.put('/api/cars/:id', updateCar)


//This connects the application to the Database(DB)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('App is connected to the DB and is listening on port ' + process.env.PORT)
    })
})

