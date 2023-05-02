import { Router } from 'express';
import { convert } from '../controllers';

export const router = Router();

router.post('/', (req, res) => {
    convert(req, res);
});