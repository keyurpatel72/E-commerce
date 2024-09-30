const Order = require('../models/order');
const Product = require('../models/product');

// Create an order
exports.createOrder = async (req, res) => {
  const { products, paymentMethod } = req.body;
  try {
    const totalAmount = products.reduce((acc, product) => acc + product.quantity * product.price, 0);

    const newOrder = new Order({
      user: req.user, // JWT decoded user ID
      products,
      totalAmount,
      paymentMethod
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
