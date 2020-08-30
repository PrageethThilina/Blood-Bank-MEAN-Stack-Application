var mongoose = require('mongoose');

//Blood campaigns schema
var Blood_Campaigns_Schema = new mongoose.Schema({
  province: {
    type: String,
    required: 'Province can\'t be empty',
  },
  district: {
    type: String,
    required: 'District can\'t be empty',
  },
  address: {
    type: String,
    required: 'Address can\'t be empty',
  },
  organiser: {
    type: String,
    required: 'Organiser Name can\'t be empty',
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
    required: 'Contact can\'t be empty',
  },
  email: {
    type: String,
    required: 'Email can\'t be empty',
  },
  imagePath: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'Pending',
  },
});

module.exports = mongoose.model('Blood_Campaigns', Blood_Campaigns_Schema);
