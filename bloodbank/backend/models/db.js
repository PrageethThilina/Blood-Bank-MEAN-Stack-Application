const mongoose = require('mongoose');

//connect the mongodb databse
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./hospital.model');
require('./donor.model');
require('./donee.model');
require('./admin.model');
require('./blood_inventory.model');
require('./appointment.model');
require('./hospital_blood_request.model');
require('./donee_blood_request.model');
require('./blood_campaigns.model');