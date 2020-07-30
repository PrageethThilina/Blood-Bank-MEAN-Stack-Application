const express = require('express');
const doneerouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlDonee = require('../controllers/donee.controller');

doneerouter.post('/donee-register', ctrlDonee.donee_register);
doneerouter.post('/donee-login', ctrlDonee.donee_login);
doneerouter.get('/donee-facilities',jwtHelper.doneeverifyJwtToken, ctrlDonee.donee_profile);
doneerouter.post('/update-donee-details/:id', ctrlDonee.update_donee_details);
doneerouter.get('/registered-donee', ctrlDonee.view_donee);
doneerouter.get('/manage-registered-donee/:id', ctrlDonee.delete_donee);
doneerouter.post('/donee-request-blood/:id', ctrlDonee.insert_record_details);

module.exports = doneerouter;



