import { Router } from 'express';

const router = Router();

router.get('/status', (_, res) => {
  res.json({ status: true });
});

export default router;
