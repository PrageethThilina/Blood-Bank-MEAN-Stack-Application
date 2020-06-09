const donorpassport = require('passport');
const donorlocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Donor = mongoose.model('Donor');

donorpassport.use('donor',
    new donorlocalStrategy({ usernameField: 'donor_nic' },
        (username, password, done) => {
            Donor.findOne({ donor_nic: username },
                (err, donor) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!donor)
                        return done(null, false, { message: 'Donor Not registered' });
                    // wrong password
                    else if (!donor.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, donor);
                });
        })
);