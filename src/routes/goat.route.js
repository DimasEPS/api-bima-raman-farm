import express from 'express';
import * as goatController from '../controllers/goat.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { createGoatSchema, updateGoatSchema } from '../validators/goat.validator.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authenticate, validate(createGoatSchema), goatController.createGoat);
router.get('/', goatController.getAllGoats);
router.get('/:id', goatController.getGoatDetailById);
router.get('/codename/:codeName', goatController.getGoatDetail);
router.put('/:id', authenticate, validate(updateGoatSchema), goatController.updateGoat);
router.delete('/:id', authenticate, goatController.deleteGoat);
router.get('/:id/qrcode', authenticate, goatController.generateGoatQRCode);

export default router;
