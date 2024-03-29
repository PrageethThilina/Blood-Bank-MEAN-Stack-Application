const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//hospital schema
var hospitalSchema = new mongoose.Schema({
    hospital_name: {
        type: String,
        required: 'hospital name can\'t be empty'
    },
    address: {
        type: String,
        required: 'address can\'t be empty'
    },
    contact: {
        type: String,
        required: 'Phone number can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        index: true,
        unique: true,
        sparse: true
    },
    hospital_username: {
        type: String,
        required: 'username can\'t be empty',
        index: true,
        unique: true,
        sparse: true,
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be atleast 4 character long']
    },
    saltSecret: String
});


// Custom validation for email
hospitalSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
hospitalSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
hospitalSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

hospitalSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}



mongoose.model('Hospital', hospitalSchema);