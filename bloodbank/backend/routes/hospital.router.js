const express = require('express');
const hospitalrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlHospital = require('../controllers/hospital.controller');

//hospital register
hospitalrouter.post('/hospital-register', ctrlHospital.hospital_register);
//hospital login
hospitalrouter.post('/hospital-login', ctrlHospital.hospital_login);
//get hospital profile
hospitalrouter.get('/hospital-facilities', jwtHelper.hospitalverifyJwtToken, ctrlHospital.hospital_profile);
//insert hospital details to request blood page
hospitalrouter.post('/hospital-order-blood/:id', ctrlHospital.insert_record_details);


module.exports = hospitalrouter;



