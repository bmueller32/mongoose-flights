const FlightModel = require("../models/flight");

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

async function index(req, res) {
  const flights = await FlightModel.find({});
  console.log(flights);
  res.render("flights/index", { title: "All Flights", flights:flights });
}
// FlightModel.find({}, function(err, flights){
//   res.render('flights/index', { title: 'All Flights', flights });
// })



async function show(req, res) {
  const flight = await FlightModel.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Detail', flight });
}


function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });noe
  }

  
async function create(req, res) {
  // convert delayed?'s checkbox of nothing or "on" to boolean
  req.body.delayed = !!req.body.delayed;
 // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {


    const flightFromTheDatabase =  await FlightModel.create(req.body);// the await is waiting for the MovieModel to go to MongoDB ATLAS (our db) a
    //and put the contents form in the db, and come to the express server

    // if you want to see what you put in the database on your server
    console.log(flightFromTheDatabase)

    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/flights');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}