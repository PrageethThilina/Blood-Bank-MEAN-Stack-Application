const express = require('express');
const blood_inventory_router = express.Router();
const ctrlBlood_Inventory = require('../controllers/blood_inventory.controller');

blood_inventory_router.post('/add-blood-storage', ctrlBlood_Inventory.add_blood_storage);
blood_inventory_router.get('/view-blood-storage', ctrlBlood_Inventory.view_blood_storage);
blood_inventory_router.get('/add-blood-storage/:id', ctrlBlood_Inventory.view_blood_bag);
blood_inventory_router.post('/update-blood-storage/:id', ctrlBlood_Inventory.update_blood_bag);
blood_inventory_router.get('/manage-blood-storage/:id', ctrlBlood_Inventory.manage_blood_storage);
blood_inventory_router.get('/a-positive', ctrlBlood_Inventory.a_positive_count);
blood_inventory_router.get('/a-negative', ctrlBlood_Inventory.a_negative_count);
blood_inventory_router.get('/b-positive', ctrlBlood_Inventory.b_positive_count);
blood_inventory_router.get('/b-negative', ctrlBlood_Inventory.b_negative_count);
blood_inventory_router.get('/ab-positive', ctrlBlood_Inventory.ab_positive_count);
blood_inventory_router.get('/ab-negative', ctrlBlood_Inventory.ab_negative_count);
blood_inventory_router.get('/o-positive', ctrlBlood_Inventory.o_positive_count);
blood_inventory_router.get('/o-negative', ctrlBlood_Inventory.o_negative_count);
blood_inventory_router.get('/a-positive-chart', ctrlBlood_Inventory.a_positive_count);
blood_inventory_router.get('/a-negative-chart', ctrlBlood_Inventory.a_negative_count);
blood_inventory_router.get('/b-positive-chart', ctrlBlood_Inventory.b_positive_count);
blood_inventory_router.get('/b-negative-chart', ctrlBlood_Inventory.b_negative_count);
blood_inventory_router.get('/ab-positve-chart', ctrlBlood_Inventory.ab_positive_count);
blood_inventory_router.get('/ab-negative-chart', ctrlBlood_Inventory.ab_negative_count);
blood_inventory_router.get('/o-positive-chart', ctrlBlood_Inventory.o_positive_count);
blood_inventory_router.get('/o-negative-chart', ctrlBlood_Inventory.o_negative_count);


module.exports = blood_inventory_router;