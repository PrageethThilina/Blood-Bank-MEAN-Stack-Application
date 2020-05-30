const mongoose = require('mongoose');

var Appointment = mongoose.model('Appointment', {
    donor_id: { 
        type: String,
        required: 'Donor Id can\'t be empty',
    },
    donor_NIC: { 
        type: String,
        required: 'NIC can\'t be empty',
    },
    full_name: { 
        type: String,
        required: 'Full Name can\'t be empty',
    },
    location: { 
        type: String,
        required: 'Location can\'t be empty',
    },
    date: { 
        type: String,
        required: 'Date can\'t be empty',
    },
    time: { 
        type: String,
        required: 'Time can\'t be empty',
    },
    contact: { 
        type: String,
        required: 'Contact Number can\'t be empty',
    },
    donor_email: { 
        type: String,
        required: 'Email can\'t be empty',
        sparse:true,
    }
});

module.exports = { Appointment };