const express = require('express');
const appointmentrouter = express.Router();
const ctrlappointment = require('../controllers/appointment.controller');

appointmentrouter.post('/book-appointments', ctrlappointment.add_appointment);
appointmentrouter.get('/admin-view-appointmets', ctrlappointment.view_appointments);
appointmentrouter.get('/appointments/:id', ctrlappointment.view_appointment);
appointmentrouter.get('/admin-accept-delete-appointments/:id', ctrlappointment.delete_appointment);

module.exports = appointmentrouter;