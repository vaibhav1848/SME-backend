const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  uen: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[0-9]{8}[A-Za-z]$/.test(value),
      message: 'Invalid Company UEN',
    },
  },
  companyName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
      message: 'Invalid email format',
    },
  },
  phone: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
