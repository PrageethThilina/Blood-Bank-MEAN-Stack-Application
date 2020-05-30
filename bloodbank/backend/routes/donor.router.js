const express = require('express');
const donorrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlDonor = require('../controllers/donor.controller');

donorrouter.post('/donor-register', ctrlDonor.donor_register);
donorrouter.post('/donor-login', ctrlDonor.donor_login);
donorrouter.get('/donor-facilities',jwtHelper.donorverifyJwtToken, ctrlDonor.donor_profile);
donorrouter.post('/book-appointments/:id', ctrlDonor.insert_record_details);

module.exports = donorrouter;



