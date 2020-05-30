var express = require('express');
var appointmentrouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Appointment } = require('../models/appointment.model');

module.exports.view_appointments = (req, res, next) => {
    Appointment.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.view_appointment = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Appointment.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Appointment :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.add_appointment = (req, res, next) => {
    var appointment = new Appointment({
        donor_id: req.body._id,
        donor_NIC:  req.body.donor_nic,
        full_name:  req.body.full_name,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        contact: req.body.contact,
        donor_email: req.body.email,
    });
    appointment.save((err, doc) => {
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Adding Appointment :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

module.exports.delete_appointment = (req, res, next) => {
    Appointment.findByIdAndRemove({ _id: req.params.id }, function (err, appointment) {
        if (err) res.json(err);
        else res.json('Appointment Deleted Successfully');
    });
}