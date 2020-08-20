var express = require('express');
var router = express.Router();
var multer  = require('multer');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require("body-parser");
var Blood_Campaigns = require('../models/blood_campaigns.model.js');


const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  }
});

router.post( "/register-blood-campaign",
  multer({ storage: storage }).single("image"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const blood_campaigns = new Blood_Campaigns({
      province: req.body.province,
      district: req.body.district,
      address: req.body.address,
      organiser: req.body.organiser,
      date: req.body.date,
      time: req.body.time,
      contact: req.body.contact,
      email: req.body.email,
      imagePath: url + "/images/" + req.file.filename
    });
    blood_campaigns.save().then(createdPost => {

      console.log("request came");
      let blood_campaigns = req.body;
      sendMail(blood_campaigns, info => {
        console.log(`The mail has been send and the id is ${info.messageId}`);
        //res.send(info);
      });
      
      res.status(201).json({
        message: "Post added successfully",
        
        blood_campaigns: {
          ...createdPost,
          id: createdPost._id,
          
        }

      });
    });
  }
);

async function sendMail(blood_campaigns, callback) {
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
    to: blood_campaigns.email, // list of receivers
    subject: "We Recived Request", // Subject line
    html: `
    <head>
    </head>
    <body>
    <h1>Dear : ${blood_campaigns.organiser}</h1><br>
    <h3>Thanks for Organising Blood Donation Campaign : </h3><br>
    <h5>Province : ${blood_campaigns.province}</h5><br>
    <h5>District : ${blood_campaigns.district}</h5><br>
    <h5>Address : ${blood_campaigns.address}</h5><br>
    <h5>Date : ${blood_campaigns.date}</h5><br>
    <h5>Time : ${blood_campaigns.time}</h5><br>
    <h2>Your Request has been verified</h2><br>
    <h4>If there is any issue free to contact us or email us (prageeththilina8@gmail.com)</h4>
    </body>
    `
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

router.put("/register-blood-campaign/:id",multer({ storage: storage }).single("image"),
  (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename
    }
    const blood_campaigns = new Blood_Campaigns({
      province: req.body.province,
      district: req.body.district,
      address: req.body.address,
      organiser: req.body.organiser,
      date: req.body.date,
      time: req.body.time,
      contact: req.body.contact,
      email: req.body.email,
      imagePath: imagePath,
      status: status,
    });
    console.log(blood_campaigns);
    Blood_Campaigns.updateOne({ _id: req.params.id }, blood_campaigns).then(result => {
      res.status(200).json({ message: "Update successful!" });
    });
  }
);

router.get("/view-blood-campaigns", (req, res, next) => {
  Blood_Campaigns.find({"status":"Accepted"},).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

router.get("/manage-blood-campaigns", (req, res, next) => {
  Blood_Campaigns.find({"status":"Pending"},).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

router.get("/homepage", (req, res, next) => {
  Blood_Campaigns.find({"status":"Accepted"},).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

router.get("/view-blood-campaigns/:id", (req, res, next) => {
  Blood_Campaigns.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});

router.get("/manage-blood-campaigns/:id", (req, res, next) => {
  Blood_Campaigns.findByIdAndRemove({ _id: req.params.id }, function (err, bloodcampaigns) {
      if (err) res.json(err);
      else res.json('Blood Campaign Deleted Successfully');
  });
});

router.get("/pending-blood-campaigns", (req, res, next) => {
  Blood_Campaigns.countDocuments({"status":"Pending"},(err, count) => {
      if (!err) {
          res.json(count) 
      }
      else { 
          console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
      }
  });
});

router.get("/accepted-blood-campaigns", (req, res, next) => {
  Blood_Campaigns.countDocuments({"status":"Accepted"},(err, count) => {
      if (!err) {
          res.json(count) 
      }
      else { 
          console.log('Cant get the count :' + JSON.stringify(err, undefined, 2)); 
      }
  });
});

// Admin accept appointment
router.post('/manage-blood-campaigns/:id', (req, res, next) => {
  Blood_Campaigns.findById(req.params.id, function (err, bloodcampaign) {
  if (!bloodcampaign)
  return next(new Error('Unable To Find Blood campaign With This Id'));
  else {

  console.log( req.body.status);
  bloodcampaign.status = req.body.status;
 
  bloodcampaign.save().then(bloodinv => {
  res.json('Blood campaign Accepted Successfully');
  })
  .catch(err => {
  res.status(400).send("Error");
  });
  }
  });
});

module.exports = router;
