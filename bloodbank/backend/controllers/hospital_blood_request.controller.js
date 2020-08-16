var express = require('express');
var hospitalbloodrequestrouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require("body-parser");

var { Hospital_Blood_Request } = require('../models/hospital_blood_request.model');

//add Blood request
module.exports.order_blood = (req, res, next) => {
    var hospital_blood_request = new Hospital_Blood_Request({
        hospital_id: req.body._id,
        hospital_name:  req.body.hospital_name,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
        blood_group: req.body.blood_group,
        quantity: req.body.quantity,
    });
    hospital_blood_request.save((err, doc) => {
        if (!err) { 
            res.send(doc); 

            console.log("request came");
            let hospital_blood_request = req.body;
            sendMail(hospital_blood_request, info => {
              console.log(`The mail has been send and the id is ${info.messageId}`);
              //res.send(info);
            });
        }
        else { 
            console.log('Error in Ordering Blood :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

async function sendMail(hospital_blood_request, callback) {
    // reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "prageeththilina8@gmail.com",
        pass: "prageeth199541312345"
      },
      tls: {
          rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: '"National Blood Transfussion service"<example.gmail.com>', // sender address
      to: hospital_blood_request.email, // list of receivers
      subject: "We Recived Request", // Subject line
      html: `
      <head>
      </head>
      <body>
      <h1>Dear : ${hospital_blood_request.hospital_name}</h1><br>
      <h3>We Received your Request </h3><br>
      <h5>Blood Group : ${hospital_blood_request.blood_group}</h5><br>
      <h5>Quantity : ${hospital_blood_request.quantity}</h5><br>
      <h2>We will send you the order within One Day</h2><br>
      <h4>If there is any issue free to contact us or email us (prageeththilina8@gmail.com)</h4>
      </body>
      `
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
  }

// to view purticular hospital's orders
module.exports.view_hospital_orders = (req, res, next) => {
    Hospital_Blood_Request.find({"hospital_name": "Karapitiya Hospital","order_status":"Pending"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Orders :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//delete orders
module.exports.delete_orders = (req, res, next) => {
    Hospital_Blood_Request.findByIdAndRemove({ _id: req.params.id }, function (err, hospital_blood_request) {
        if (err) res.json(err);
        else res.json('Order Deleted Successfully');
    });
}

// admin view hospital's orders
module.exports.admin_view_hospital_orders = (req, res, next) => {
    Hospital_Blood_Request.find({"order_status":"Pending"},(err, docs) => {
        if (!err) { 
            res.send(docs); 
        }
        else { 
            console.log('Error in Retriving Orders :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

//admin delete orders
module.exports.admin_delete_orders = (req, res, next) => {
    Hospital_Blood_Request.findByIdAndRemove({ _id: req.params.id }, function (err, hospital_blood_request) {
        if (err) res.json(err);
        else res.json('Order Deleted Successfully');
    });
}

// get hospital blood request count
module.exports.hospital_blood_request_count = (req, res, next) => {
    Hospital_Blood_Request.countDocuments((err, count) => {
        if (!err) {
            res.json(count) 
        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}
