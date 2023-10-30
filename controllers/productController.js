const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Add other controller functions for CRUD operations

// Export the functions
