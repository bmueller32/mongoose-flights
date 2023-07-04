const FlightModel = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
};

async function index(req, res) {
  const flights = await FlightModel.find({});
  console.log(flights);
  res.render("flights/index", { title: "All Flights", flights: flights });
}
// FlightModel.find({}, function(err, flights){
//   res.render('flights/index', { title: 'All Flights', flights });
// })


function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
  }