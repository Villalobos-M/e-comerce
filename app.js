const express = require('express');

// Controllers
const { globalErrorHandler } = require('../cine-clon/api-ecommerce/controllers/error.controller');

// Routers
const { usersRouter } = require('../cine-clon/api-ecommerce/routes/users.routes');
const { productsRouter } = require('../cine-clon/api-ecommerce/routes/products.routes');
const { cartRouter } = require('../cine-clon/api-ecommerce/routes/cart.routes');
const { orderRouter } = require('../cine-clon/api-ecommerce/routes/orders.routes');

//Utils
const {AppError} =require('../cine-clon/api-ecommerce/util/appError.js');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/cart', cartRouter);

app.use('*', (req, res, next) => {
    next(new AppError(404, `${req.originalUrl} not found in this server.`));
});

app.use(globalErrorHandler);

module.exports = { app };
