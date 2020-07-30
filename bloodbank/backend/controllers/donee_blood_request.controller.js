var express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;

var { Donee_Blood_Request } = require('../models/donee_blood_request.model');

//add Blood request
module.exports.request_blood = (req, res, next) => {
    var donee_blood_request = new Donee_Blood_Request({
        donee_id: req.body._id,
        donee_nic: req.body.donee_nic,
        full_name:  req.body.full_name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        province: req.body.province,
        district: req.body.district,
        contact: req.body.contact,
        email: req.body.email,
        blood_group: req.body.blood_group,
        address: req.body.address,
        spouce: req.body.spouce,
        health: req.body.health,
        medical_report: req.body.medical_report,

    });
    donee_blood_request.save((err, doc) => {
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Requesting Blood :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// to view purticular donee's requests
module.exports.view_donee_request = (req, res, next) => {
    Donee_Blood_Request.find({"donee_nic": "951043028v"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Requests :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//delete orders
module.exports.delete_requests = (req, res, next) => {
    Donee_Blood_Request.findByIdAndRemove({ _id: req.params.id }, function (err, donee_blood_request) {
        if (err) res.json(err);
        else res.json('Request Deleted Successfully');
    });
}

// to view purticular donee's requests
module.exports.view_all_donee_request = (req, res, next) => {
    Donee_Blood_Request.find((err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Requests :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// To Update The donee blood request Details
module.exports.update_donee_request = (req, res, next) => {
    Donee_Blood_Request.findById(req.params.id, function (err, doneebloodrequest) {
    if (!doneebloodrequest)
    return next(new Error('Unable To Find Blood Request With This Id'));
    else {
    doneebloodrequest.donee_id = req.body.donee_id;
    doneebloodrequest.donee_nic = req.body.donee_nic;
    doneebloodrequest.full_name = req.body.full_name;
    doneebloodrequest.gender = req.body.gender;
    doneebloodrequest.birthday = req.body.birthday;
    doneebloodrequest.province = req.body.province;
    doneebloodrequest.district = req.body.district;
    doneebloodrequest.contact = req.body.contact;
    doneebloodrequest.email = req.body.email;
    doneebloodrequest.blood_group = req.body.blood_group;
    doneebloodrequest.address = req.body.address;
    doneebloodrequest.spouce = req.body.spouce;
    doneebloodrequest.health = req.body.health;
    doneebloodrequest.medical_report = req.body.medical_report;
   
    doneebloodrequest.save().then(dnebldrq => {
    res.json('Request Updated Successfully');
    })
    .catch(err => {
    res.status(400).send("Unable To Update Blood Request");
    });
    }
    });
}