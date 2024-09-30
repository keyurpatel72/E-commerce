E-commerce API

This project is a scalable e-commerce API built with Node.js and Express for managing products, orders, and customers. It provides JWT-based authentication for secure access and integrates a payment gateway using Stripe. The API supports basic operations like user registration, login, adding products to a cart, creating orders, and processing payments.
Features

    User Authentication:
        JWT-based authentication for user registration and login.
        Secure access control for managing products and orders.

    Product Management:
        Add, update, delete, and retrieve products.
        Search and filter products by category and other criteria.

    Order Management:
        Create orders with multiple products.
        Track orders by status and retrieve order history.

    Shopping Cart:
        Add products to a cart and manage cart items.

    Payment Integration:
        Secure payment processing using Stripe.
        Supports major credit card payments.

    MongoDB for efficient data storage and management.

Tech Stack

    Node.js: Server-side JavaScript runtime environment.
    Express.js: Fast, unopinionated, minimalist web framework for Node.js.
    MongoDB: NoSQL database for storing products, orders, and users.
    JWT: JSON Web Token for secure user authentication.
    Stripe: Payment gateway for handling secure payments.
    dotenv: Environment variable management.

Installation
1. Clone the repository

bash

git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api

2. Install dependencies

bash

npm install

3. Create .env file

Create a .env file in the root directory and add the following:

bash

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

4. Start the server

bash

node app.js

The server will run at http://localhost:5000.
API Endpoints
Authentication

    Register a user: POST /api/auth/register
    Login a user: POST /api/auth/login

Products

    Get all products: GET /api/products
    Add a product: POST /api/products (Requires authentication)

Orders

    Create an order: POST /api/orders (Requires authentication)

Payments

    Process payment: POST /api/payments (Requires authentication)

Testing with Postman

To test the API:

    Use Postman to register/login and get the JWT token.
    Include the JWT token in the x-auth-token header for protected routes.
    Add products, create orders, and process payments using the relevant endpoints.

Example: Add a Product

    Method: POST
    URL: http://localhost:5000/api/products
    Headers:
        x-auth-token: your_jwt_token
    Body (raw JSON):

    json

    {
      "name": "Chimta",
      "price": 280,
      "description": "Stainless Steel",
      "category": "Utensil",
      "stock": 10
    }

Contributing

Feel free to fork this repository and make changes. To contribute:

    Fork the project.
    Create your feature branch (git checkout -b feature/AmazingFeature).
    Commit your changes (git commit -m 'Add some AmazingFeature').
    Push to the branch (git push origin feature/AmazingFeature).
    Open a pull request.

License

This project is licensed under the MIT License.
Contact

For any issues or inquiries, please contact Keyurp7298@gmail.com.
