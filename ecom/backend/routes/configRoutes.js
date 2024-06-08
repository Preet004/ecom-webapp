import express from 'express';
import { PAYPAL_CLIENT_ID } from '../config/paypal.js';
const router = express.Router();

router.get('/paypal', (req, res) => {
  res.send({ clientId: PAYPAL_CLIENT_ID });
});

export default router;
