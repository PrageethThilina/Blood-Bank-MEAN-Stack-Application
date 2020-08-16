const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require("body-parser");

const Donor = mongoose.model('Donor');

module.exports.donor_register = (req, res, next) => {
    var donor = new Donor();
    donor.donor_nic = req.body.donor_nic,
    donor.full_name = req.body.full_name,
    donor.gender = req.body.gender,
    donor.birthday = req.body.birthday,
    donor.last_donate_date = req.body.last_donate_date,
    donor.province = req.body.province,
    donor.district = req.body.district,
    donor.weight = req.body.weight,
    donor.height = req.body.height,
    donor.blood_group = req.body.blood_group,
    donor.address = req.body.address,
    donor.email = req.body.email,
    donor.contact = req.body.contact,
    donor.password = req.body.password,
    donor.spouce = req.body.spouce,
    donor.health = req.body.health,
    donor.photo = req.body.photo,
    donor.save((err, doc) => {
        if (!err){
            res.send(doc);

            console.log("request came");
            let donor = req.body;
            sendMail(donor, info => {
              console.log(`The mail has been send and the id is ${info.messageId}`);
              //res.send(info);
            });
        }
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

async function sendMail(donor, callback) {
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
      to: donor.email, // list of receivers
      subject: "Successfully registered as Donor", // Subject line
      html: `
      <head>
      </head>
      <body>
      <h1>Dear : ${donor.full_name}</h1><br>
      <h3>Thank you for register as donor </h3><br>
      <h5>Contact : ${donor.contact}</h5><br>
      <h5>Email : ${donor.email}</h5><br>
      <h2>Be a active Donor</h2><br>
      <h4>If there is any issue free to contact us or email us (prageeththilina8@gmail.com)</h4>
      </body>
      `
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
}

module.exports.view_donors = (req, res, next) => {
    Donor.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Donors :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.donor_login = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('donor', (err, donor, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (donor) return res.status(200).json({ "token": donor.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.donor_profile = (req, res, next) =>{
    Donor.findOne({ _id: req._id },
        (err, donor) => {
            if (!donor)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, donor : _.pick(donor,
                    ['_id',
                    'donor_nic',
                    'full_name',
                    'gender',
                    'birthday',
                    'last_donate_date',
                    'province',
                    'district',
                    'weight',
                    'height',
                    'blood_group',
                    'address',
                    'email',
                    'contact',
                    'spouce',
                    'health',
                    'photo',
                    'profile_status',
                ]) });
        }
    );
}

module.exports.insert_record_details = (req, res, next) => {
    Donor.findById(req.params.id, function (err, donor) {
    if (!donor)
    return next(new Error('Unable To Find Donor With This Id'));
    else {
        donor._id = req.body._id;
        donor.donor_nic = req.body.donor_nic;
        donor.full_name = req.body.full_name;
        donor.contact = req.body.contact;
        donor.email = req.body.email;
   
    donor.save().then(dnr => {
    res.json('Appointment Booked Successfully');
    })
    .catch(err => {
    res.status(400).send("Appointment Booking failed..!!!");
    });
    }
    });

}

// To Update The Donor Details
module.exports.update_donor_details = (req, res, next) => {
    Donor.findById(req.params.id, function (err, donor) {
    if (!donor)
    return next(new Error('Unable To Find Donor With This Id'));
    else {

        donor.last_donate_date = req.body.last_donate_date;
        donor.province = req.body.province,
        donor.district = req.body.district,
        donor.weight = req.body.weight;
        donor.height = req.body.height;
        donor.address = req.body.address;
        donor.email = req.body.email;
        donor.contact = req.body.contact;
        donor.password = req.body.password;
        donor.spouce = req.body.spouce;
        donor.health = req.body.health;
        donor.photo = req.body.photo;
   
    donor.save().then(dnr => {
    res.json('Updated Successfully....');
    })
    .catch(err => {
    res.status(400).send("Updated failed..!!!");
    });
    }
    });

}

// To Delete The Donor
module.exports.delete_donors = (req, res, next) => {
    Donor.findByIdAndRemove({ _id: req.params.id }, function (err, donor) {
    if (err) res.json(err);
    else res.json('Donor Account Deleted Successfully..!!!');
    });
}

// get the O- Blood Count
module.exports.donors_count = (req, res, next) => {
    Donor.countDocuments((err, count) => {
        if (!err) {
            res.json(count) 
        }
        else { 
            console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}