const express = require('express');
const donorrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlDonor = require('../controllers/donor.controller');

donorrouter.post('/donor-register', ctrlDonor.donor_register);
donorrouter.post('/add-donors', ctrlDonor.donor_register);
donorrouter.get('/registered-donors', ctrlDonor.view_donors);
donorrouter.post('/donor-login', ctrlDonor.donor_login);
donorrouter.get('/donor-facilities',jwtHelper.donorverifyJwtToken, ctrlDonor.donor_profile);
donorrouter.post('/book-appointments/:id', ctrlDonor.insert_record_details);
donorrouter.post('/update-donor-details/:id', ctrlDonor.update_donor_details);
donorrouter.get('/manage-registered-donors/:id', ctrlDonor.delete_donors);
donorrouter.get('/donors-count', ctrlDonor.donors_count);


module.exports = donorrouter;