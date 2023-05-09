const Amadeus = require('amadeus');
const citySearch = async (req, res) => {
   const amadeus = new Amadeus({
      clientId: process.env.API_KEY,
      clientSecret: process.env.API_SECRET,
   });
   const { parameter } = req.params;
   try {
      const response = await amadeus.referenceData.locations.get({
         keyword: parameter,
         subType: Amadeus.location.any
      });
      res.status(200).json(response.data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}

const flighSearch = async (req, res) => {
   const amadeus = new Amadeus({
      clientId: process.env.API_KEY,
      clientSecret: process.env.API_SECRET,
   });
   console.log(req.body)
   const origin = req.body.originCode;
   const destination = req.body.destinationCode;
   const departureDate = req.body.dateOfDeparture
   const adults = req.body.adults

   console.log(origin, destination, departureDate, adults)
   try {
      const response = await amadeus.shopping.flightOffersSearch.get({ 
         originLocationCode: origin,
         destinationLocationCode: destination,
         departureDate: departureDate,
         adults: adults,
         max : '1'
      });
      res.status(200).json(response.data);
   } catch (error) {
      res.status(500).json({ error: error });
   }
}

module.exports = {
   citySearch,
   flighSearch
}