const express = require('express');

const router = express.Router();


const Drone = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => 
  // Iteration #2: List the drones
  
  Drone.find()
  .then((drones)=> res.render("drones/list", {drones:drones}))
  .catch(()=>console.log("couldn't display the list of drones"))
);

router.route('/drones/create')
.get((req, res, next) => res.render("drones/create-form"))
.post((req, res, next) => 
{// Iteration #3: Add a new drone
  const {} = req.body
  Drone.create({ name, propellers, maxSpeed}= req.body)
  .then(newDrone => res.redirect(`/drones`)) 
.catch(err => console.log(err))
})

router.route('/drones/:id/edit')
.get((req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  Drone.findById(id)
  .then((drone)=>res.render("drones/update-form", drone))
  .catch(err => console.log(err))})
  .post((req, res, next) =>
  {
  const {id} = req.params
  const {} = req.body
  Drone.findByIdAndUpdate(id, 
    {name, propellers, maxSpeed}=req.body)
  .then(()=>res.redirect("/drones"))
  .catch(drone => res.render("drones/update-form", drone))
})




router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then(()=>res.redirect("/drones"))
});

module.exports = router;
