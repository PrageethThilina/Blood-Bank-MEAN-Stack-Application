const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Donee = mongoose.model('Donee');

module.exports.donee_register = (req, res, next) => {
    var donee = new Donee();
    donee.donee_nic = req.body.donee_nic,
    donee.full_name = req.body.full_name,
    donee.gender = req.body.gender,
    donee.birthday = req.body.birthday,
    donee.city = req.body.city,
    donee.contact = req.body.contact,
    donee.email = req.body.email,
    donee.blood_group = req.body.blood_group,
    donee.address = req.body.address,
    donee.password = req.body.password,
    donee.spouce = req.body.spouce,
    donee.health = req.body.health,
    donee.medical_report = req.body.medical_report,
    donee.save((err, doc) => {
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

module.exports.donee_login = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('donee', (err, donee, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (donee) return res.status(200).json({ "token": donee.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.donee_profile = (req, res, next) =>{
    Donee.findOne({ _id: req._id },
        (err, donee) => {
            if (!donee)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, donee : _.pick(donee,
                    ['donee_nic',
                    'full_name',
                    'gender',
                    'birthday',
                    'city',
                    'contact',
                    'email',
                    'blood_group',
                    'address',
                    'spouce',
                    'health',
                    'medical_report',
                ]) });
        }
    );
}