import { Request, Response } from 'express';
import { contacts, Contact } from '../models/contact';

let nextId = 1;

/**
 * Create a new contact
 * @param req 
 * @param res 
 */
export const createContact = (req: Request, res: Response): void => {
  const newContact: Contact = { id: nextId++, ...req.body };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

/**
 * Get a contact by ID
 * @param req 
 * @param res 
 */
export const getContactById = (req: Request, res: Response): void => {
  const contact = contacts.find(c => c.id === +req.params.id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
};

/**
 * Delete a contact by ID
 * @param req 
 * @param res 
 */
export const deleteContact = (req: Request, res: Response): void => {
  const contactIndex = contacts.findIndex(c => c.id === +req.params.id);
  if (contactIndex > -1) {
    contacts.splice(contactIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
};

/**
 * Update a contact by ID
 * @param req 
 * @param res 
 */
export const updateContact = (req: Request, res: Response): void => {
  const contactIndex = contacts.findIndex(c => c.id === +req.params.id);
  if (contactIndex > -1) {
    contacts[contactIndex] = { id: +req.params.id, ...req.body };
    res.json(contacts[contactIndex]);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
};
