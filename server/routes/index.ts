import { Router } from 'express';

import { getLinks } from '../services/content';
import { AppError } from '../modules/AppError';

const router = Router();

router.get('/status', (_, res) => {
  res.json({ status: true });
});

router.get('/links', async (_, res) => {
  try {
    const links = await getLinks();
    res.json(links);
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(500).json(e);
    }

    res.status(500).json({
      error: 'Unknown',
    });
  }
});

export default router;
