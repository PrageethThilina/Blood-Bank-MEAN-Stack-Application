const mongoose = require('mongoose');

var Blood_Inventory = mongoose.model('Blood_Inventory', {
    blood_group: { 
        type: String,
        required: 'blood_group can\'t be empty',
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