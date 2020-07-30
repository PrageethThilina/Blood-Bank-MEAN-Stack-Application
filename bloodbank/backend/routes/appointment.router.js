const express = require('express');
const appointmentrouter = express.Router();
const ctrlappointment = require('../controllers/appointment.controller');

//add appointment
appointmentrouter.post('/book-appointments', ctrlappointment.add_appointment);

//Blood Bank View appointment
appointmentrouter.get('/admin-view-appointmets', ctrlappointment.view_appointments);

//Hospital View appointment
appointmentrouter.get('/hospital-manage-appointments', ctrlappointment.view_hospital_appointments);

//view all appointments of purticular donor
appointmentrouter.get('/appointments', ctrlappointment.view_donors_appointments);

//view one appointment
//appointmentrouter.get('/appointments/:donor_id', ctrlappointment.view_donors_appointments);

//bloodbank delete appointmnet
//appointmentrouter.get('/admin-accept-delete-appointments/:id', ctrlappointment.delete_appointment);

//Hospital delete appointments
appointmentrouter.get('/hospital-manage-appointments/:id', ctrlappointment.delete_appointment);

//donor delete appoitntment
appointmentrouter.get('/appointments/:id', ctrlappointment.delete_appointment);

module.exports = appointmentrouter;

