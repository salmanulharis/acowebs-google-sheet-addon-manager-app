// File: src/routes/client.routes.js
import express from 'express';
import { clientController } from '../controllers/client.controller.js';

const router = express.Router();

router.post('/', clientController.create);
router.get('/', clientController.findAll);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.delete);

export default router;