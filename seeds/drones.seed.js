// Iteration #1

 const { request } = require("express");
const mongoose = require('mongoose');

const Drone = require("../models/Drone.model")
require('../configs/db.config')



Drone.deleteMany()

Drone.create([
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
])
.then(()=>{
  console.log(`${Drone.length} drones successfully created`)
mongoose.connection.close()})
.catch(()=>console.log("couldn't add the drones"))
