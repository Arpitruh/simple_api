# API1 Project

## Overview

This project is a refactored API built using Node.js and Express. It provides basic authentication functionalities, including user signup and login.

## Project Structure

- **`package.json`**: Contains metadata about the project and lists the dependencies required to run it.
- **`src/server.js`**: Sets up the Express server and defines the main entry point for the application.
- **`src/routes/authRoutes.js`**: Defines the routes for authentication-related operations.
- **`src/controllers/authController.js`**: Contains the logic for handling authentication requests.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd api1
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

- To start the server in production mode:
  ```bash
  npm start
  ```

- To start the server in development mode with auto-reloading:
  ```bash
  npm run dev
  ```

## API Endpoints

### Authentication

- **POST** `/api/auth/signup`
  - Description: Register a new user.
  - Request Body: `{ "username": "string", "password": "string" }`
  - Response: 
    - Success: `201 Created` with a message and user details.
    - Failure: `400 Bad Request` with an error message.

- **POST** `/api/auth/login`
  - Description: Log in an existing user.
  - Request Body: `{ "username": "string", "password": "string" }`
  - Response:
    - Success: `200 OK` with a message and user details.
    - Failure: `401 Unauthorized` with an error message.

## API Flow Explanation

1. **Server Setup (`src/server.js`):**
   - The server is initialized using Express.
   - JSON parsing middleware is added to handle JSON request bodies.
   - The server listens on a specified port (default 3001).

2. **Routing (`src/routes/authRoutes.js`):**
   - Routes for authentication are defined using Express Router.
   - Two main routes are set up: `/signup` and `/login`, both expecting POST requests.

3. **Controller Logic (`src/controllers/authController.js`):**
   - The controller handles the logic for processing signup and login requests.
   - It extracts user data from the request, calls the respective service, and sends back a response based on the service's result.

4. **Service Layer (not shown but implied):**
   - The `authService` is responsible for the actual business logic of signing up and logging in users, such as interacting with a database.

This structure separates concerns by dividing the application into routes, controllers, and services, making it easier to maintain and extend.

## License

This project is licensed under the ISC License.