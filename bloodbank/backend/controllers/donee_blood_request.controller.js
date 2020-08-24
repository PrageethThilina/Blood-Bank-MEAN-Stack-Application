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
    Donee_Blood_Request.find({"status": "Pending"},(err, docs) => {
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

// get the pending appointment count in admin dashboard
module.exports.donee_request_count = (req, res, next) => {
    Donee_Blood_Request.countDocuments({"status": "Pending"},(err, count) => {
        if (!err) {
            res.json(count) 

        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

async function sendMail(appointment, callback) {
    // reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "prageeththilina8@gmail.com",
        pass: "prageeth199541312345###"
      },
      tls: {
          rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: '"National Blood Transfussion service"<example.gmail.com>', // sender address
      to: appointment.email, // list of receivers
      subject: "We Recived Request", // Subject line
      html: `
      <head>
      </head>
      <body>
      <h1>Dear : ${appointment.full_name}</h1><br>
      <h3>Thanks for Join to donate blood Appointment Booked successfully for : </h3><br>
      <h5>Venue : ${appointment.location}</h5><br>
      <h5>Date : ${appointment.date}</h5><br>
      <h5>Time : ${appointment.time}</h5><br>
      <h2>Your Apppointment has been verified</h2><br>
      <h4>If there is any issue reagrding the appointment booking free to contact us or email us (prageeththilina8@gmail.com)</h4>
      </body>
      `
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
  }

  // Hospital accept appointment
module.exports.donne_found_request = (req, res, next) => {
    Donee_Blood_Request.findById(req.params.id, function (err, donee_blood_request) {
    if (!donee_blood_request)
    return next(new Error('Unable To Find Request with this id'));
    else {

    donee_blood_request.status = req.body.status;  
    donee_blood_request.save().then(bloodinv => {
   
    res.json('Blood request found Successfully');

    })
    .catch(err => {
    res.status(400).send("Error");
    });
    }
    });
}