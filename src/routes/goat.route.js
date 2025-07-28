import express from 'express';
import * as goatController from '../controllers/goat.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { createGoatSchema, updateGoatSchema } from '../validators/goat.validator.js';

const router = express.Router();

router.post('/', validate(createGoatSchema), goatController.createGoat);
router.get('/', goatController.getAllGoats);
router.get('/:id', goatController.getGoatDetail);
router.put('/:id', validate(updateGoatSchema), goatController.updateGoat);
router.delete('/:id', goatController.deleteGoat);
router.get('/:id/qrcode', goatController.generateGoatQRCode);

export default router;
