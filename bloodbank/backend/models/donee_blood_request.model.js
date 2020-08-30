const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var DateOnly = require('dateonly');

//donee blood request schema
var Donee_Blood_Request = mongoose.model('Donee_Blood_Request', {
    donee_id: {
        type: String,
        required: 'Donee Id can\'t be empty',
    },
    donee_nic: {
        type: String,
        required: 'Donee NIC can\'t be empty',
    },
    full_name: {
        type: String,
        required: 'Full Name can\'t be empty',
    },
    date: {
        type: Date,
        default: Date.now,
        DateOnly,
    },
    gender: {
        type: String,
        required: 'Gender can\'t be empty',
    },
    birthday: {
        type: String,
        required: 'Birthday can\'t be empty',
    },
    province: {
        type: String,
        required: 'Province can\'t be empty',
    },
    district: {
        type: String,
        required: 'District can\'t be empty',
    },
    contact: {
        type: String,
        required: 'Contact Number can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
    },
    blood_group: {
        type: String,
        required: 'Blood Group can\'t be empty',
    },
    address: {
        type: String,
        required: 'Address can\'t be empty',
    },
    spouce: {
        type: String,
        required: 'Spouce Details can\'t be empty',
    },
    health: {
        type: String,
        required: 'Health Issues can\'t be empty',
    },
    medical_report: {
        type: String,
        required: 'Medical Reports can\'t be empty',
    },
    status: {
        type: String,
        default: 'Pending',
    }
});

module.exports = { Donee_Blood_Request };