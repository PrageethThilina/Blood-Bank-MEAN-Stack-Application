const express = require('express');
const donorrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlDonor = require('../controllers/donor.controller');

//donor register
donorrouter.post('/donor-register', ctrlDonor.donor_register);
//hospital add donors
donorrouter.post('/add-donors', ctrlDonor.donor_register);
//donee view registered donee
donorrouter.get('/registered-donors', ctrlDonor.view_donors);
//donor login
donorrouter.post('/donor-login', ctrlDonor.donor_login);
//get donor profile
donorrouter.get('/donor-facilities', jwtHelper.donorverifyJwtToken, ctrlDonor.donor_profile);
//insert donor details to appoint booking page
donorrouter.post('/book-appointments/:id', ctrlDonor.insert_record_details);
//update donor details
donorrouter.post('/update-donor-details/:id', ctrlDonor.update_donor_details);
//admin delete donors
donorrouter.get('/manage-registered-donors/:id', ctrlDonor.delete_donors);
//get donors count
donorrouter.get('/donors-count', ctrlDonor.donors_count);


module.exports = donorrouter;