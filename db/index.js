// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

mongoose
.connect("mongodb+srv://stringrolls:g61f6e1WppytuAX8@cluster0.dk3tr.mongodb.net/Drones?retryWrites=true&w=majority")
.then(()=>console.log("connected to the database"))

.catch(()=>console.log("couldn't connect to the database"))
