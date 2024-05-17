import { Router } from 'express';
import { createContact, getContactById, deleteContact, updateContact } from '../controllers/contactController';

const router = Router();

router.post('/contacts', createContact);
router.get('/contacts/:id', getContactById);
router.delete('/contacts/:id', deleteContact);
router.put('/contacts/:id', updateContact);

export default router;
