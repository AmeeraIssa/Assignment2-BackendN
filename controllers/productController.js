const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProduct = async (req, res) => {
  const { name, description, price, quantity, category } = req.body;

  try {
    const newProduct = new Product({ name, description, price, quantity, category });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      quantity,
      category
    }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All products deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findProductsByName = async (req, res) => {
  const { name } = req.query;

  try {
    const products = await Product.find({ name: { $regex: name, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
