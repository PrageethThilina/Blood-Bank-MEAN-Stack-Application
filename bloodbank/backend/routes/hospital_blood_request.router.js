const express = require('express');
const hospitalbloodrequestrouter = express.Router();
const ctrlhospitalbloodrequest = require('../controllers/hospital_blood_request.controller');

//add request
hospitalbloodrequestrouter.post('/hospital-order-blood', ctrlhospitalbloodrequest.order_blood);
//view all orders of purticular hospital
hospitalbloodrequestrouter.get('/hospital-order-blood', ctrlhospitalbloodrequest.view_hospital_orders);
//view hospital accepted orders
hospitalbloodrequestrouter.get('/hospital-view-previous-blood-requests', ctrlhospitalbloodrequest.view_hospital_previous_orders);
//hospital cancel orders
hospitalbloodrequestrouter.get('/hospital-order-blood/:id', ctrlhospitalbloodrequest.delete_orders);
//view all Hospital of Blood requests
hospitalbloodrequestrouter.get('/manage-hopital-blood-orders', ctrlhospitalbloodrequest.admin_view_hospital_orders);
//Blood bank cancel Hospital Blood requests
hospitalbloodrequestrouter.get('/manage-hopital-blood-orders/:id', ctrlhospitalbloodrequest.admin_delete_orders);
//view all pending Hospital of Blood requests
hospitalbloodrequestrouter.get('/hospital-blood-request-table', ctrlhospitalbloodrequest.admin_view_hospital_orders);

hospitalbloodrequestrouter.get('/hospital-blood-request-count', ctrlhospitalbloodrequest.hospital_blood_request_count);

hospitalbloodrequestrouter.post('/manage-hopital-blood-orders/:id', ctrlhospitalbloodrequest.accept_blood_order);


module.exports = hospitalbloodrequestrouter;