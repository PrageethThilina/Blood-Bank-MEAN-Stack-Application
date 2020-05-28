const express = require('express');
const blood_inventory_router = express.Router();
const ctrlBlood_Inventory = require('../controllers/blood_inventory.controller');

blood_inventory_router.post('/add-blood-storage', ctrlBlood_Inventory.add_blood_storage);
blood_inventory_router.get('/view-blood-storage', ctrlBlood_Inventory.view_blood_storage);
blood_inventory_router.get('/add-blood-storage/:id', ctrlBlood_Inventory.view_blood_bag);
blood_inventory_router.post('/update-blood-storage/:id', ctrlBlood_Inventory.update_blood_bag);
blood_inventory_router.get('/manage-blood-storage/:id', ctrlBlood_Inventory.manage_blood_storage);


module.exports = blood_inventory_router;