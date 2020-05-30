const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Donor = mongoose.model('Donor');

module.exports.donor_register = (req, res, next) => {
    var donor = new Donor();
    donor.donor_nic = req.body.donor_nic,
    donor.full_name = req.body.full_name,
    donor.gender = req.body.gender,
    donor.birthday = req.body.birthday,
    donor.last_donate_date = req.body.last_donate_date,
    donor.city = req.body.city,
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
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.donor_login = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, donor, info) => {       
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
                    'city',
                    'weight',
                    'height',
                    'blood_group',
                    'address',
                    'email',
                    'contact',
                    'spouce',
                    'health',
                    'photo',
                ]) });
        }
    );
}

module.exports.insert_record_details = (req, res) => {
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