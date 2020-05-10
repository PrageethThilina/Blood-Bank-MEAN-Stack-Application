const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var donorSchema = new mongoose.Schema({

    donor_id: {
        type: String,
        unique: true
    },
    nic: {
        type: String,
        required: 'NIC can\'t be empty',
        unique: true
    },
    full_name: {
        type: String,
        required: 'Full name can\'t be empty',
    },
    gender: {
        type: String,
        required: 'gender can\'t be empty',
    },
    birthday: {
        type: String,
        required: 'birthday can\'t be empty'
    },
    last_donate_date: {
        type: String,
        required: 'last donate date can\'t be empty'
    },
    city: {
        type: String,
        required: 'City can\'t be empty'
    },
    weight: {
        type: String,
        required: 'Weight can\'t be empty'
    },
    height: {
        type: String,
        required: 'Height can\'t be empty'
    },
    blood_group: {
        type: String,
        required: 'Blood group can\'t be empty'
    },
    address: {
        type: String,
        required: 'Address can\'t be empty'
    },
    email: {
        type: String,
        required: 'email can\'t be empty',
        unique: true
    },
    contact: {
        type: String,
        required: 'Contact number can\'t be empty'
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    re_password: {
        type: String,
        required: ' Re-type Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    spouce: {
        type: String,
        required: 'Spouce details can\'t be empty'
    },
    health: {
        type: String,
    },
    photo: {
        type: String,
    },
    saltSecret: String
});

// Custom validation for email
donorSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
donorSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

mongoose.model('donors', donorSchema);