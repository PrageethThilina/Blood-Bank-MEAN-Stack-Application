const express = require('express');
const appointmentrouter = express.Router();
const ctrlappointment = require('../controllers/appointment.controller');

//add appointment
appointmentrouter.post('/book-appointments', ctrlappointment.add_appointment);

//Blood Bank View appointment
appointmentrouter.get('/admin-view-appointmets', ctrlappointment.view_appointments);

//Hospital View appointment
appointmentrouter.get('/hospital-manage-appointments', ctrlappointment.view_hospital_appointments);

//hospital accept appointment
appointmentrouter.post('/hospital-manage-appointments/:id', ctrlappointment.accept_appointment);

//view all appointments of purticular donor
appointmentrouter.get('/appointments', ctrlappointment.view_donors_appointments);


appointmentrouter.get('/donor-view-previous-appointment', ctrlappointment.view_donors_accepted_appointments);

//bloodbank delete appointmnet
appointmentrouter.get('/admin-accept-delete-appointments/:id', ctrlappointment.delete_appointment);

//bloodbank delete appointmnet
appointmentrouter.get('/admin-accepted-appointments/:id', ctrlappointment.delete_appointment);

//Hospital delete appointments
appointmentrouter.get('/hospital-manage-appointments/:id', ctrlappointment.delete_appointment);

//donor delete appoitntment
appointmentrouter.get('/appointments/:id', ctrlappointment.delete_appointment);

//Blood Bank View appointment
appointmentrouter.get('/admin-accept-delete-appointments', ctrlappointment.get_pending_appointments);

//Blood Bank View appointment
appointmentrouter.get('/admin-accepted-appointments', ctrlappointment.get_accepted_appointments);

//Blood Bank View appointment
appointmentrouter.get('/admin-finished-appointments', ctrlappointment.get_finished_appointments);

//admin accept appointment
appointmentrouter.post('/admin-accept-delete-appointments/:id', ctrlappointment.accept_appointment);

//admin finish appointment
appointmentrouter.post('/admin-accepted-appointments/:id', ctrlappointment.finish_appointment);

//get the appointment count of blood bank
appointmentrouter.get('/pending-appointments', ctrlappointment.appointment_count);

//get the accepted appointment count of blood bank
appointmentrouter.get('/accepted-appointments', ctrlappointment.accepted_appointment_count);

appointmentrouter.get('/finished-appointments', ctrlappointment.finished_appointment_count);

module.exports = appointmentrouter;

