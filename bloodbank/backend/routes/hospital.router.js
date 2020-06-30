const express = require('express');
const hospitalrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlHospital = require('../controllers/hospital.controller');

hospitalrouter.post('/hospital-register', ctrlHospital.hospital_register);
hospitalrouter.post('/hospital-login', ctrlHospital.hospital_login);
hospitalrouter.get('/hospital-facilities',jwtHelper.hospitalverifyJwtToken, ctrlHospital.hospital_profile);
hospitalrouter.post('/hospital-order-blood/:id', ctrlHospital.insert_record_details);


module.exports = hospitalrouter;


