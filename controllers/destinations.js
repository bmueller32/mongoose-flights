// Import our movie model in order to talk to the movies collection in mongodb
const FlightModel = require("../models/flight");

module.exports = {
  create,
};

async function create(req, res) {
  // Take the contents of the form and create a destination

  // 1. Find the flight we want to add the destination too.
  // What information do we have the identifys the flight? req.params.id
  //2. Talk to the database to go find that flight,
  //   What talks to the Movies in the database? FlightModel
  // What method on the flightModel can find something by an id? findById
  // What variable is the Contents of the form? req.body <- represent a Destination
  console.log(req.body);
  try {
    const flightFromTheDb = await FlightModel.findById(req.params.id);
    // I could check my code make sure I'm finding the flight

    // add the destination (req.body) to the flight (flightFromTheDb) we found from the db
    flightFromTheDb.destinations.push(req.body);
    // since I changed a document (flightFromTheDb) (I mutated it)
    // I have to tell mongodb that, so we have to save
    await flightFromTheDb.save();
    // Then respond to the client!
    console.log(flightFromTheDb);
    // what do you have access too that has the movie id?
    res.redirect(`/flights/${req.params.id}`);
    
  } catch (err) {
    res.send(err);
  }
}
