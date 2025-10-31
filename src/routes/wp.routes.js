// File: src/routes/client.routes.js
import express from 'express';
import { wpController } from '../controllers/wp.controller.js';

const router = express.Router();

router.post('/get_products', wpController.getProducts);
router.post('/test_connection', wpController.getTestConnection);
router.post('/update_products', wpController.updateProducts);
router.post('/get_orders', wpController.getOrders);

export default router;