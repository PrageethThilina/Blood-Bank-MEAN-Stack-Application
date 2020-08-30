const express = require('express');
const doneerouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlDonee = require('../controllers/donee.controller');

//donee register
doneerouter.post('/donee-register', ctrlDonee.donee_register);
//donee login route
doneerouter.post('/donee-login', ctrlDonee.donee_login);
//donee profile
doneerouter.get('/donee-facilities', jwtHelper.doneeverifyJwtToken, ctrlDonee.donee_profile);
//update donee details
doneerouter.post('/update-donee-details/:id', ctrlDonee.update_donee_details);
//view registered donee
doneerouter.get('/registered-donee', ctrlDonee.view_donee);
//delete donee by admin
doneerouter.get('/manage-registered-donee/:id', ctrlDonee.delete_donee);
//insert donee details to blood request page
doneerouter.post('/donee-request-blood/:id', ctrlDonee.insert_record_details);

module.exports = doneerouter;



