const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

//admin schema
var adminSchema = new mongoose.Schema({
    admin_username: {
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

adminSchema.plugin(uniqueValidator);

// Events
adminSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
adminSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

adminSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}



mongoose.model('Admin', adminSchema);