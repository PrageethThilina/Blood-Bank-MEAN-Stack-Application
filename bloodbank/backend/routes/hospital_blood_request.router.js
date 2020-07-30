const express = require('express');
const hospitalbloodrequestrouter = express.Router();
const ctrlhospitalbloodrequest = require('../controllers/hospital_blood_request.controller');

//add request
hospitalbloodrequestrouter.post('/hospital-order-blood', ctrlhospitalbloodrequest.order_blood);
//view all orders of purticular hospital
hospitalbloodrequestrouter.get('/hospital-order-blood', ctrlhospitalbloodrequest.view_hospital_orders);
//hospital cancel orders
hospitalbloodrequestrouter.get('/hospital-order-blood/:id', ctrlhospitalbloodrequest.delete_orders);

module.exports = hospitalbloodrequestrouter;