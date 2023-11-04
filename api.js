// routes/api.js

const express = require('express');
const router = express.Router();
const Company = require('../models/companyModel'); // Import your Mongoose model for a company

// Define a route for company data submission
router.post('/submit-data', async (req, res) => {
  try {
    // Extract data from the request body
    const { uen, companyName, fullName, position, email, phone } = req.body;

    // Create a new instance of the Mongoose model for a company
    const newCompany = new Company({
      uen,
      companyName,
      fullName,
      position,
      email,
      phone,
    });

    // Save the company data to the database
    const savedCompany = await newCompany.save();

    res.json(savedCompany);
  } catch (error) {
    console.error('Error saving company data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route to fetch the latest entered data
router.get('/latest-data', async (req, res) => {
  try {
    // Query the database to get the latest entry (you may need to sort by a timestamp field)
    const latestEntry = await Company.findOne().sort({ _id: -1 });

    if (!latestEntry) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.json(latestEntry);
  } catch (error) {
    console.error('Error fetching latest data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;


