const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  try {
    const newProduct = new Product({ name, price, description, category, stock });
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
