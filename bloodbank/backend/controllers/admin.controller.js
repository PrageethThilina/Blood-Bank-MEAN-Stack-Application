const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Admin = mongoose.model('Admin');

module.exports.admin_login = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, admin, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (admin) return res.status(200).json({ "token": admin.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}
