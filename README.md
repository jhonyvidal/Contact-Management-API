**Contact Management API**

This is a simple Contact Management API built with Node.js and TypeScript. It provides endpoints for creating, retrieving, updating, and deleting contacts. Data is stored in memory for simplicity, and no authentication logic is implemented.

**Solution and Desicions**

Step 1: Setup the Project

First, let's set up a new Node.js project with TypeScript.

1. Initialize a new Node.js project:

mkdir contacts-api
cd contacts-api
npm init -y - create a new package.json file

2. Install the required dependencies:

npm install express body-parser
npm install --save-dev typescript @types/node @types/express ts-node nodemon jest @types/jest

3. Initialize TypeScript configuration:

npx tsc --init 

4. Create the project structure:

mkdir src
mkdir src/routes
mkdir src/controllers
mkdir src/models
mkdir src/assets

Step 2: Implement the API

1. Create a simple in-memory data store for contacts.

src/models/contact.ts:

2. Create the contact controller with CRUD operations.

src/controllers/contactController.ts:

3. Create routes for the contact endpoints.

src/routes/contactRoutes.ts:

4. Setup the Express server.

src/index.ts:


Step 3: Add Unit Tests

1. Create tests for the contact controller.

src/test/contactController.test.ts:

2. Update package.json scripts to include test scripts:


Step 4: Create POSTMAN Collection

1. Create a POSTMAN collection with examples of how to call each endpoint. Here is a basic structure for your collection:

2. Save the collection and export it as a JSON file.


**Project Time Estimate**

The project took approximately 1 hour to complete, including:

Setting up the project structure and dependencies.
Implementing the endpoints.
Writing unit tests.
Documenting the code and preparing the POSTMAN collection.

**Installation**

Clone the repository:

1. Navigate to the project directory:
2. cd contact-management-api

Install dependencies:

1. npm install

**Usage**

Running the Server
To start the server, run:

1. npm start
The server will start listening on port 3000 by default.

**Testing**

To run the unit tests, use:

1. npm test

**API Endpoints**

The API provides the following endpoints:

POST /contacts: Create a new contact.
GET /contacts/{id}: Retrieve a contact by ID.
DELETE /contacts/{id}: Delete a contact by ID.
PUT /contacts/{id}: Update a contact by ID.

**POSTMAN Collection**

A POSTMAN collection is provided (src/API.postman_collection.json) with examples of how to call each endpoint. Import this collection into POSTMAN to test the API.

**License**

This project is licensed under the MIT License. See the LICENSE file for details.

**Credits**

This project was created by Jhony German Vidal Lopez.