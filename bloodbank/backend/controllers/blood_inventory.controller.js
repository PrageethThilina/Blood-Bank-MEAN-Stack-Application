const express = require('express');
var blood_inventory_router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Blood_Inventory } = require('../models/blood_inventory.model');

module.exports.view_blood_storage = (req, res) => {
    Blood_Inventory.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Blood Inventory :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.view_blood_bag = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Blood_Inventory.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Blood Bag :' + JSON.stringify(err, undefined, 2)); }
    });
}

module.exports.add_blood_storage = (req, res) => {
    var inventory = new Blood_Inventory({
        blood_group: req.body.blood_group,
        volume: req.body.volume,
        received_date: req.body.received_date,
        expiry_date: req.body.expiry_date,
    });
    inventory.save((err, doc) => {
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Adding Blood Inventory :' + JSON.stringify(err, undefined, 2)); 
        }
    });
}

// To Update The Blood Inventory Details
module.exports.update_blood_bag = (req, res) => {
    Blood_Inventory.findById(req.params.id, function (err, bloodinventory) {
    if (!bloodinventory)
    return next(new Error('Unable To Find Blood Inventory With This Id'));
    else {
    bloodinventory.blood_group = req.body.blood_group;
    bloodinventory.volume = req.body.volume;
    bloodinventory.received_date = req.body.received_date;
    bloodinventory.expiry_date = req.body.expiry_date;
   
    bloodinventory.save().then(bloodinv => {
    res.json('Blood Inventory Updated Successfully');
    })
    .catch(err => {
    res.status(400).send("Unable To Update Blood Inventory");
    });
    }
    });
}

// To Delete The Blood Inventory
module.exports.manage_blood_storage = (req, res) => {
    Blood_Inventory.findByIdAndRemove({ _id: req.params.id }, function (err, bloodinventory) {
    if (err) res.json(err);
    else res.json('Blood Inventory Deleted Successfully');
    });
}