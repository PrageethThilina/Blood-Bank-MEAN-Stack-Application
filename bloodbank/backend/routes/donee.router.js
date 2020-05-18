const express = require('express');
const doneerouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlDonee = require('../controllers/donee.controller');

doneerouter.post('/donee-register', ctrlDonee.donee_register);
doneerouter.post('/donee-login', ctrlDonee.donee_login);
doneerouter.get('/donee-facilities',jwtHelper.doneeverifyJwtToken, ctrlDonee.donee_profile);

module.exports = doneerouter;



