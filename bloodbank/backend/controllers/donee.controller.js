const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;

const Donee = mongoose.model('Donee');

module.exports.donee_register = (req, res, next) => {
    var donee = new Donee();
    donee.donee_nic = req.body.donee_nic,
    donee.full_name = req.body.full_name,
    donee.gender = req.body.gender,
    donee.birthday = req.body.birthday,
    donee.province = req.body.province,
    donee.district = req.body.district,
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
                    'province',
                    'district',
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

// To Update The Donee Details
module.exports.update_donee_details = (req, res, next) => {
    Donee.findById(req.params.id, function (err, donee) {
    if (!donee)
    return next(new Error('Unable To Find Donee With This Id'));
    else {

        donee.province = req.body.province,
        donee.district = req.body.district,
        donee.contact = req.body.contact;
        donee.email = req.body.email;
        donee.address = req.body.address;
        donee.password = req.body.password;
        donee.spouce = req.body.spouce;
        donee.health = req.body.health;
       // donee.medical_report = req.body.medical_report;
   
    donee.save().then(dn => {
    res.json('Updated Successfully....');
    })
    .catch(err => {
    res.status(400).send("Updated failed..!!!");
    });
    }
    });

}

module.exports.view_donee = (req, res, next) => {
    Donee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Donee :' + JSON.stringify(err, undefined, 2)); }
    });
}


// To Delete The Donee
module.exports.delete_donee = (req, res, next) => {
    Donee.findByIdAndRemove({ _id: req.params.id }, function (err, donee) {
    if (err) res.json(err);
    else res.json('Donee Account Deleted Successfully..!!!');
    });
}