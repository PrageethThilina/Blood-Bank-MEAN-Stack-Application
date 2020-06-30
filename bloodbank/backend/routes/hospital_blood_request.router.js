const express = require('express');
const hospitalbloodrequestrouter = express.Router();
const ctrlhospitalbloodrequest = require('../controllers/hospital_blood_request.controller');

//add request
hospitalbloodrequestrouter.post('/hospital-order-blood', ctrlhospitalbloodrequest.order_blood);

module.exports = hospitalbloodrequestrouter;