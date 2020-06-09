const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

var doneeSchema = new mongoose.Schema({
    donee_nic: {
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
    city: {
        type: String,
        required: 'city can\'t be empty'
    },
    contact: {
        type: String,
        required: 'Contact Number can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        index:true, 
        unique:true,
        sparse:true
    },
    blood_group: {
        type: String,
        required: 'Blood Group can\'t be empty'
    },
    address: {
        type: String,
        required: 'Address can\'t be empty'
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
    medical_report: {
        type: String,
        required: 'Medical can\'t be empty'
    },
    saltSecret: String
});

doneeSchema.plugin(uniqueValidator);

// Custom validation for email
doneeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
doneeSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
doneeSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

doneeSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



mongoose.model('Donee', doneeSchema);