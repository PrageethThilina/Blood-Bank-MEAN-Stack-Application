const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Blood_Inventory = mongoose.model('Blood_Inventory', {
    blood_group: { 
        type: String,
        required: 'blood_group can\'t be empty',
    },
    volume: { 
        type: String,
        required: 'Volume can\'t be empty',
    },
    received_date: { 
        type: String,
        required: 'received_date can\'t be empty',
    },
    expiry_date: { 
        type: String,
        required: 'expiry_date can\'t be empty',
    }
});

module.exports = { Blood_Inventory };