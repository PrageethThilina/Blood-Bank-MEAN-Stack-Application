const express = require('express');
const adminrouter = express.Router();
const jwtHelper = require('../config/jwtHelper');

const ctrlAdmin = require('../controllers/admin.controller');

adminrouter.post('/admin-login', ctrlAdmin.admin_login);

module.exports = adminrouter;

