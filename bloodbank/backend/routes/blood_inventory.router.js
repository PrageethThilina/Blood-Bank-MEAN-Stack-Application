const express = require('express');
const blood_inventory_router = express.Router();
const ctrlBlood_Inventory = require('../controllers/blood_inventory.controller');

//add blood bag
blood_inventory_router.post('/add-blood-storage', ctrlBlood_Inventory.add_blood_storage);
//admin view blood storage
blood_inventory_router.get('/view-blood-storage', ctrlBlood_Inventory.view_blood_storage);
//view blood bag
blood_inventory_router.get('/add-blood-storage/:id', ctrlBlood_Inventory.view_blood_bag);
//update blood bag
blood_inventory_router.post('/update-blood-storage/:id', ctrlBlood_Inventory.update_blood_bag);
//delete blood bag
blood_inventory_router.get('/manage-blood-storage/:id', ctrlBlood_Inventory.manage_blood_storage);
//get a positive blood count
blood_inventory_router.get('/a-positive', ctrlBlood_Inventory.a_positive_count);
//get a negative blood count
blood_inventory_router.get('/a-negative', ctrlBlood_Inventory.a_negative_count);
//get b positive blood count
blood_inventory_router.get('/b-positive', ctrlBlood_Inventory.b_positive_count);
//get b negative blood count
blood_inventory_router.get('/b-negative', ctrlBlood_Inventory.b_negative_count);
//get ab positive blood count
blood_inventory_router.get('/ab-positive', ctrlBlood_Inventory.ab_positive_count);
//get ab negative blood count
blood_inventory_router.get('/ab-negative', ctrlBlood_Inventory.ab_negative_count);
//get o positive blood count
blood_inventory_router.get('/o-positive', ctrlBlood_Inventory.o_positive_count);
//get o negative blood count
blood_inventory_router.get('/o-negative', ctrlBlood_Inventory.o_negative_count);
////get a positive count
blood_inventory_router.get('/a-positive-chart', ctrlBlood_Inventory.a_positive_count);
//get a negative blood count
blood_inventory_router.get('/a-negative-chart', ctrlBlood_Inventory.a_negative_count);
//get b positive count
blood_inventory_router.get('/b-positive-chart', ctrlBlood_Inventory.b_positive_count);
//get b negative count
blood_inventory_router.get('/b-negative-chart', ctrlBlood_Inventory.b_negative_count);
//get ab positive count
blood_inventory_router.get('/ab-positve-chart', ctrlBlood_Inventory.ab_positive_count);
//get ab negative count
blood_inventory_router.get('/ab-negative-chart', ctrlBlood_Inventory.ab_negative_count);
//get o positive count
blood_inventory_router.get('/o-positive-chart', ctrlBlood_Inventory.o_positive_count);
//get o negative count
blood_inventory_router.get('/o-negative-chart', ctrlBlood_Inventory.o_negative_count);




module.exports = blood_inventory_router;