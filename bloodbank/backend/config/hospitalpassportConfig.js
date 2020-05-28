const hospitalpassport = require('passport');
const hospitallocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Hospital = mongoose.model('Hospital');

/*hospitalpassport.use(Hospital,
    new hospitallocalStrategy({ usernameField: 'hospital_username' },
        (username, password, done) => {
            Hospital.findOne({ hospital_username: username },
                (err, hospital) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!hospital)
                        return done(null, false, { message: 'Not registered' });
                    // wrong password
                    else if (!hospital.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, hospital);
                });
        })
);*/