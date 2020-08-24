var express = require('express');
var appointmentrouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require("body-parser");

var { Appointment } = require('../models/appointment.model');

//blood bank view appoitnment
module.exports.view_appointments = (req, res, next) => {
    Appointment.find({"location": "National Blood Center - Narahenpita"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}
//blood bank get pending appointments
module.exports.get_pending_appointments = (req, res, next) => {
    Appointment.find({"location": "National Blood Center - Narahenpita","status":"Pending"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}
//blood bank get accepted appointments
module.exports.get_accepted_appointments = (req, res, next) => {
    Appointment.find({"location": "National Blood Center - Narahenpita","status":"Accepted"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}
//blood bank get finished appointments
module.exports.get_finished_appointments = (req, res, next) => {
    Appointment.find({"location": "National Blood Center - Narahenpita","status":"Finished"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//hospital view pending appoitnment
module.exports.view_hospital_appointments = (req, res, next) => {
    Appointment.find({"location": "Karapitiya Hospital","status":"Pending"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//hospital view accepted appoitnment
module.exports.view_hospital_accepted_appointments = (req, res, next) => {
    Appointment.find({"location": "Karapitiya Hospital","status":"Accepted"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//hospital view accepted appoitnment
module.exports.view_hospital_finished_appointments = (req, res, next) => {
    Appointment.find({"location": "Karapitiya Hospital","status":"Finished"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// to view puticular donor's appointments
module.exports.view_donors_appointments = (req, res, next) => {
    Appointment.find({"donor_nic": "951043028v","status":"Pending"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// to view puticular donor's previous appointments
module.exports.view_donors_accepted_appointments = (req, res, next) => {
    Appointment.find({"donor_nic": "951043028v",$or:[{"status":"Accepted"},{"status":"Finished"}]},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Appointments :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//add appoitment & send mail
module.exports.add_appointment = (req, res, next) => {
    var appointment = new Appointment({
        donor_id: req.body._id,
        donor_nic:  req.body.donor_nic,
        full_name:  req.body.full_name,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        contact: req.body.contact,
        email: req.body.email,
        
    });
    appointment.save((err, doc) => {
        if (!err) {
            res.send(doc);  
            
            let appointment = req.body;
            sendMail(appointment, info => {
              console.log(`The mail has been send and the id is ${info.messageId}`);
              //res.send(info);
            });
        }
        else { 
            console.log('Error in Adding Appointment :' + JSON.stringify(err, undefined, 2)); 
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
      <h3>Thanks for Join to donate blood, Appointment Requested successfully for : </h3><br>
      <h5>Venue : ${appointment.location}</h5><br>
      <h5>Date : ${appointment.date}</h5><br>
      <h5>Time : ${appointment.time}</h5><br>
      <h2>Our Admin will get back to you soon</h2><br>
      <h4>If there is any issue reagrding the appointment booking free to contact us or email us (prageeththilina8@gmail.com)</h4>
      </body>
      `
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
  }

//delete appointment
module.exports.delete_appointment = (req, res, next) => {
    Appointment.findByIdAndRemove({ _id: req.params.id }, function (err, appointment) {
        if (err) res.json(err);
        else res.json('Appointment Deleted Successfully');
    });
}

// Admin accept appointment
module.exports.accept_appointment = (req, res, next) => {
    Appointment.findById(req.params.id, function (err, appointment) {
    if (!appointment)
    return next(new Error('Unable To Find Appointment With This Id'));
    else {

    console.log( req.body.status);
    appointment.status = req.body.status;
   
    appointment.save().then(bloodinv => {
   
    res.json('Appointment Accepted Successfully');

    })
    .catch(err => {
    res.status(400).send("Error");
    });
    }
    });
}

// Hospital accept appointment
module.exports.hospital_accept_appointment = (req, res, next) => {
    Appointment.findById(req.params.id, function (err, appointment) {
    if (!appointment)
    return next(new Error('Unable To Find Appointment With This Id'));
    else {

    appointment.status = req.body.status;
   
    appointment.save().then(bloodinv => {
   
    res.json('Appointment Accepted Successfully');

    })
    .catch(err => {
    res.status(400).send("Error");
    });
    }
    });
}

// Admin accept appointment
module.exports.finish_appointment = (req, res, next) => {
    Appointment.findById(req.params.id, function (err, appointment) {
    if (!appointment)
    return next(new Error('Unable To Find Appointment With This Id'));
    else {

    console.log( req.body.status);
    appointment.status = req.body.status;
   
    appointment.save().then(bloodinv => {
    res.json('Appointment mark as finished');
    })
    .catch(err => {
    res.status(400).send("Error");
    });
    }
    });
}

// get the pending appointment count in admin dashboard
module.exports.appointment_count = (req, res, next) => {
    Appointment.countDocuments({"location": "National Blood Center - Narahenpita","status":"Pending"},(err, count) => {
        if (!err) {
            res.json(count) 

        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// get the accepted appointment count in admin dashboard
module.exports.accepted_appointment_count = (req, res, next) => {
    Appointment.countDocuments({"location": "National Blood Center - Narahenpita","status":"Accepted"},(err, count) => {
        if (!err) {
            res.json(count) 
        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// get the accepted appointment count in admin dashboard
module.exports.finished_appointment_count = (req, res, next) => {
    Appointment.countDocuments({"location": "National Blood Center - Narahenpita","status":"Finished"},(err, count) => {
        if (!err) {
            res.json(count) 
        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// get the pending appointment count in hospital dashboard
module.exports.hospital_appointment_count = (req, res, next) => {
    Appointment.countDocuments({"location": "Karapitiya Hospital","status":"Pending"},(err, count) => {
        if (!err) {
            res.json(count) 

        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// get the accepted appointment count in hospital dashboard
module.exports.hospital_accepted_appointment_count = (req, res, next) => {
    Appointment.countDocuments({"location": "Karapitiya Hospital","status":"Accepted"},(err, count) => {
        if (!err) {
            res.json(count) 
        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// get the accepted appointment count in hospital dashboard
module.exports.hospital_finished_appointment_count = (req, res, next) => {
    Appointment.countDocuments({"location": "Karapitiya Hospital","status":"Finished"},(err, count) => {
        if (!err) {
            res.json(count) 
        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}
