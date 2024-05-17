Contact Management API
This is a simple Contact Management API built with Node.js and TypeScript. It provides endpoints for creating, retrieving, updating, and deleting contacts. Data is stored in memory for simplicity, and no authentication logic is implemented.

Project Time Estimate
The project took approximately 1 hour to complete, including:

Setting up the project structure and dependencies.
Implementing the endpoints.
Writing unit tests.
Documenting the code and preparing the POSTMAN collection.

Installation
Clone the repository:

bash
Copy code
Navigate to the project directory:

bash
Copy code
cd contact-management-api
Install dependencies:

bash
Copy code
npm install
Usage
Running the Server
To start the server, run:

bash
Copy code
npm start
The server will start listening on port 3000 by default.

Testing
To run the unit tests, use:

bash
Copy code
npm test

API Endpoints
The API provides the following endpoints:

POST /contacts: Create a new contact.
GET /contacts/{id}: Retrieve a contact by ID.
DELETE /contacts/{id}: Delete a contact by ID.
PUT /contacts/{id}: Update a contact by ID.

POSTMAN Collection
A POSTMAN collection is provided (src/API.postman_collection.json) with examples of how to call each endpoint. Import this collection into POSTMAN to test the API.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Credits
This project was created by Jhony German Vidal Lopez.