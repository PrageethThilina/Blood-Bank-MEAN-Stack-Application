const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Admin = mongoose.model('Admin');

//admin login
module.exports.admin_login = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('admin', (err, admin, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (admin) return res.status(200).json({ "token": admin.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

//get the admin profile
module.exports.admin_profile = (req, res, next) => {
    Admin.findOne({ _id: req._id },
        (err, admin) => {
            if (!admin)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({
                    status: true, donor: _.pick(admin,
                        ['_id',
                            'admin_username',
                        ])
                });
        }
    );
}
