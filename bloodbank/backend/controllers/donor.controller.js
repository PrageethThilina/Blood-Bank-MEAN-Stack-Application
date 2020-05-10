const mongoose = require('mongoose');

const donors = mongoose.model('donors');

module.exports.donor_register = (req, res, next) => {
   var donor = new donors();

    donor.donor_id = req.body.donor_id;
    donor.nic = req.body.nic;
    donor.full_name = req.body.full_name;
    donor.gender = req.body.gender;
    donor.birthday = req.body.birthday;
    donor.last_donate_date = req.body.last_donate_date;
    donor.city = req.body.city;
    donor.weight = req.body.weight;
    donor.height = req.body.height;
    donor.blood_group = req.body.blood_group;
    donor.address = req.body.address;
    donor.email = req.body.email;
    donor.contact = req.body.contact;
    donor.password = req.body.password;
    donor.re_password = req.body.re_password;
    donor.spouce = req.body.spouce;
    donor.health = req.body.health;
    donor.photo = req.body.photo;

    donor.save((err, doc) => {
        if (!err)
        {
            res.send(doc);
        }
        else
        {
            if (err.code == 11000)
            {
                res.status(422).send(['Duplicate email adrress found.']);
            }
            else
            {
                return next(err);
            }
        }
    });
}