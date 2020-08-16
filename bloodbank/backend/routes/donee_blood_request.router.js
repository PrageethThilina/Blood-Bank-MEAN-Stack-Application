const express = require('express');
const doneebloodrequestrouter = express.Router();
const ctrldoneebloodrequest = require('../controllers/donee_blood_request.controller');

//add request
doneebloodrequestrouter.post('/donee-request-blood', ctrldoneebloodrequest.request_blood);
//view all requests of purticular donee
doneebloodrequestrouter.get('/donee-request-blood', ctrldoneebloodrequest.view_donee_request);
//donee cancel request
doneebloodrequestrouter.get('/view-donee-requests/:id', ctrldoneebloodrequest.delete_requests);
//view all requests of donee
doneebloodrequestrouter.get('/view-donee-requests', ctrldoneebloodrequest.view_all_donee_request);
//update blood request
doneebloodrequestrouter.post('/update-blood-request/:id', ctrldoneebloodrequest.update_donee_request);

doneebloodrequestrouter.get('/donee-requests-count', ctrldoneebloodrequest.donee_request_count);

module.exports = doneebloodrequestrouter;