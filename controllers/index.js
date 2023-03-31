const Order = require('../models/order');

// Create order route
exports.createOrder = async (req, res) => {
    console.log({body:req.body});
    try {
        const order = await Order.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                order
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

// Get all orders route
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({
            status: 'success',
            data: {
                orders
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
// Get specific order by means of Id
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                order
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
// Get trip phase status by using id
exports.getStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        var data = "Delivered"
        for(var i=0; i<order.trips.length; i++){
            if(order.trips[i].tripStatus == 'pending'){
                data = order.trips[i];
                break;
            }
        }
        res.status(200).json({
            status: 'success',
            data: {
                data
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
