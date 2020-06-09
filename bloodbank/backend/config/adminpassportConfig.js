const adminpassport = require('passport');
const adminlocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Admin = mongoose.model('Admin');

adminpassport.use('admin',
    new adminlocalStrategy({ usernameField: 'admin_username', session: false },
        (username, password, done) => {
            Admin.findOne({ admin_username: username },
                (err, admin) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!admin)
                        return done(null, false, { message: 'Not registered Account' });
                    // wrong password
                    else if (!admin.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, admin);
                });
        })
);