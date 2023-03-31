const {Router} = require('express');
const { createOrder, getAllOrders, getOrderById, getStatus} = require( '../controllers' );
const router = Router();

// Create a new order
router.post('/order', createOrder);

// Get all orders
router.get('/', getAllOrders);

// Get order by id
router.get('/orders/:id', getOrderById);

// Get status of order by id
router.get('/status/:id', getStatus);

module.exports = router;


