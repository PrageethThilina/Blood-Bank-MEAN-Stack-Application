const express = require('express');
const adminrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlAdmin = require('../controllers/admin.controller');

//admin login route
adminrouter.post('/admin-login', ctrlAdmin.admin_login);
//get admin profile route
adminrouter.get('/admin-side-nav', jwtHelper.adminverifyJwtToken, ctrlAdmin.admin_profile);


module.exports = adminrouter;

