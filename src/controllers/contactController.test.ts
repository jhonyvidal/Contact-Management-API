import { createContact, getContactById, deleteContact, updateContact } from '../controllers/contactController';
import { Request, Response } from 'express';
import { contacts } from '../models/contact';

describe('Contact Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    req = {};
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({
      json: jsonMock,
      send: jest.fn()
    });

    res = {
      status: statusMock,
      json: jsonMock
    } as unknown as Response;

    contacts.length = 0; 
  });

  test('createContact should create a new contact', () => {
    req.body = { name: 'New Contact', email: 'new@contact.com', phone: '3152511215' };
    createContact(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith({ id: 1, ...req.body });
  });

  test('getContactById should return contact with id 1', () => {
    const contact = { id: 1, name: 'New Contact', email: 'new@contact.com', phone: '3152511215' };
    contacts.push(contact);
    req.params = { id: '1' };
    getContactById(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith(contact);
  });

  test('getContactById should return 404 if contact is not found', () => {
    const contact = { id: 1, name: 'New Contact', email: 'new@contact.com', phone: '3152511215' };
    contacts.push(contact);
    req.params = { id: '2' };
    getContactById(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(404);
    console.log(expect(jsonMock))
    expect(jsonMock).toHaveBeenCalledWith({ message: 'Contact not found' });
  });

  test('deleteContact should delete a contact with id 1', () => {
    const contact = { id: 1, name: 'New Contact', email: 'new@contact.com', phone: '3152511215' };
    contacts.push(contact);
    req.params = { id: '1' };
    deleteContact(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(204);
    expect(contacts.length).toBe(0);
  });

  test('updateContact should update a contact with id 1', () => {
    const contact = { id: 1, name: 'New Contact', email: 'new@contact.com', phone: '3152511215' };
    contacts.push(contact);
    req.params = { id: '1' };
    req.body = { name: 'Update Contact', email: 'update@contact.com', phone: '3155485195' };
    updateContact(req as Request, res as Response);
    expect(jsonMock).toHaveBeenCalledWith({ id: 1, ...req.body });
    expect(contacts[0]).toEqual({ id: 1, ...req.body });
  });
});
