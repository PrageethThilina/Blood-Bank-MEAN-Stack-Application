const express = require('express');
const appointmentrouter = express.Router();
const ctrlappointment = require('../controllers/appointment.controller');

//add appointment
appointmentrouter.post('/book-appointments', ctrlappointment.add_appointment);

//donor delete appoitntment
appointmentrouter.delete('/appointments/:id', ctrlappointment.delete_appointment);

//view all appointments of purticular donor
appointmentrouter.get('/appointments/:donor_id', ctrlappointment.view_donors_appointments);

//donor view previous appointments
appointmentrouter.get('/donor-view-previous-appointment/:donor_id', ctrlappointment.view_donors_accepted_appointments);

//Hospital View appointment
appointmentrouter.get('/hospital-manage-appointments/:location', ctrlappointment.view_hospital_appointments);

//hospital accept appointment
appointmentrouter.post('/hospital-manage-appointments/:id', ctrlappointment.hospital_accept_appointment);

//Hospital delete appointments
appointmentrouter.delete('/hospital-manage-appointments/:id', ctrlappointment.delete_appointment);

//Hospital View accepted appointment
appointmentrouter.get('/hospital-finish-appointments-component/:location', ctrlappointment.view_hospital_accepted_appointments);

//hospital finish appointment
appointmentrouter.post('/hospital-finish-appointments-component/:id', ctrlappointment.accept_appointment);

//Hospital delete appointments
appointmentrouter.delete('/hospital-finish-appointments-component/:id', ctrlappointment.delete_appointment);

//Hospital View Finished appointment
appointmentrouter.get('/hospital-view-finished-appointments/:location', ctrlappointment.view_hospital_finished_appointments);

//Blood Bank View appointment
appointmentrouter.get('/admin-view-appointmets', ctrlappointment.view_appointments);

//bloodbank delete appointmnet
appointmentrouter.delete('/admin-accept-delete-appointments/:id', ctrlappointment.delete_appointment);

//bloodbank delete appointmnet
appointmentrouter.delete('/admin-accepted-appointments/:id', ctrlappointment.delete_appointment);

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

//finished appointment count
appointmentrouter.get('/finished-appointments', ctrlappointment.finished_appointment_count);

//get the appointment count of hospital
appointmentrouter.get('/pending-appointment-count/:location', ctrlappointment.hospital_appointment_count);

//get the accepted appointment count of hospital
appointmentrouter.get('/accepted-appointment-count/:location', ctrlappointment.hospital_accepted_appointment_count);

//finished appointment count of hospital
appointmentrouter.get('/finished-appointment-count/:location', ctrlappointment.hospital_finished_appointment_count);

module.exports = appointmentrouter;

