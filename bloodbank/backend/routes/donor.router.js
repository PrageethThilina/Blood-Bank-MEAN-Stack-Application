const express = require('express');
const router = express.Router();

const ctrlDonor = require('../controllers/donor.controller');

router.post('/donor-register', ctrlDonor.donor_register);

module.exports = router;