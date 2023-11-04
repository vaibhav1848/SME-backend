const Company = require('../models/companyModel');

// Controller function to handle the submission of company data
const submitCompanyData = async (req, res) => {
  try {
    // Extract data from the request body
    const { uen, companyName, fullName, position, email, phone } = req.body;

    // Create a new instance of the Company model
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

    // Respond with the saved company data
    res.json(savedCompany);
  } catch (error) {
    console.error('Error saving company data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  submitCompanyData,
};
