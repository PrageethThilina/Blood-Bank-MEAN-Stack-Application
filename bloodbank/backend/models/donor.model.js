const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var donorSchema = new mongoose.Schema({
    nic: {
        type: String,
        required: 'nic can\'t be empty',
        index:true, 
        unique:true,
        sparse:true
    },
    full_name: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    gender: {
        type: String,
        required: 'gender can\'t be empty'
    },
    birthday: {
        type: String,
        required: 'Birthday can\'t be empty'
    },
    last_donate_date: {
        type: String,        
    },
    city: {
        type: String,
        required: 'city can\'t be empty'
    },
    weight: {
        type: String,
        required: 'Current weight can\'t be empty'
    },
    height: {
        type: String,
        required: 'Current height can\'t be empty'
    },
    blood_group: {
        type: String,
        required: 'Blood Group can\'t be empty'
    },
    address: {
        type: String,
        required: 'Address can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        index:true, 
        unique:true,
        sparse:true
    },
    contact: {
        type: String,
        required: 'Contact Number can\'t be empty'
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    spouce: {
        type: String,
        required: 'Spouce details can\'t be empty'
    },
    health: {
        type: String,
        required: 'Health issues can\'t be empty'
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


// Methods
donorSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

donorSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



mongoose.model('Donor', donorSchema);