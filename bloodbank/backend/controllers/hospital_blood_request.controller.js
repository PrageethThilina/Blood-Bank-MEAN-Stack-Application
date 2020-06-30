var express = require('express');
var hospitalbloodrequestrouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Hospital_Blood_Request } = require('../models/hospital_blood_request.model');

//add Blood request
module.exports.order_blood = (req, res, next) => {
    var hospital_blood_request = new Hospital_Blood_Request({
        hospital_id: req.body._id,
        hospital_name:  req.body.hospital_name,
        date:  req.body.date,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
        blood_group: req.body.blood_group,
        quantity: req.body.quantity,
    });
    hospital_blood_request.save((err, doc) => {
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Ordering Blood :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}