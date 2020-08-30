const express = require('express');
const hospitalbloodrequestrouter = express.Router();
const ctrlhospitalbloodrequest = require('../controllers/hospital_blood_request.controller');

//add request
hospitalbloodrequestrouter.post('/hospital-order-blood', ctrlhospitalbloodrequest.order_blood);
//view all orders of purticular hospital
hospitalbloodrequestrouter.get('/hospital-order-blood/:hospital_name', ctrlhospitalbloodrequest.view_hospital_orders);
//view hospital accepted orders
hospitalbloodrequestrouter.get('/hospital-view-previous-blood-requests/:hospital_name', ctrlhospitalbloodrequest.view_hospital_previous_orders);
//hospital cancel orders
hospitalbloodrequestrouter.delete('/hospital-order-blood/:id', ctrlhospitalbloodrequest.delete_orders);
//view all Hospital of Blood requests
hospitalbloodrequestrouter.get('/manage-hopital-blood-orders', ctrlhospitalbloodrequest.admin_view_hospital_orders);
//Blood bank cancel Hospital Blood requests
hospitalbloodrequestrouter.delete('/manage-hopital-blood-orders/:id', ctrlhospitalbloodrequest.admin_delete_orders);
//view all pending Hospital of Blood requests
hospitalbloodrequestrouter.get('/hospital-blood-request-table', ctrlhospitalbloodrequest.admin_view_hospital_orders);
//get hospital blood request count
hospitalbloodrequestrouter.get('/hospital-blood-request-count', ctrlhospitalbloodrequest.hospital_blood_request_count);
//manage hospital blood orders
hospitalbloodrequestrouter.post('/manage-hopital-blood-orders/:id', ctrlhospitalbloodrequest.accept_blood_order);
//hospital get pending blood request count
hospitalbloodrequestrouter.get('/pending-blood-request-count/:hospital_name', ctrlhospitalbloodrequest.each_hospital_pending_blood_request_count);
//hospital get accepted blood request count
hospitalbloodrequestrouter.get('/accepted-blood-request-count/:hospital_name', ctrlhospitalbloodrequest.each_hospital_accepted_blood_request_count);



module.exports = hospitalbloodrequestrouter;