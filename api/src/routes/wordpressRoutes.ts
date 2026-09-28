import { Router } from 'express';

import {
    getServices
} from '../controllers/wordpressController.js';

const router = Router();

router.get(
    '/services',
    getServices
);

export default router;