const doneepassport = require('passport');
const doneelocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Donee = mongoose.model('Donee');

/*doneepassport.use(Donee,
    new doneelocalStrategy({ usernameField: 'donee_nic' },
        (username, password, done) => {
            Donee.findOne({ donee_nic: username },
                (err, donee) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!donee)
                        return done(null, false, { message: 'Donee Not registered' });
                    // wrong password
                    else if (!donee.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, donee);
                });
        })
);*/