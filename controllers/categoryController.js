const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.addCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = new Category({ name });
    await newCategory.save();
    res.json({ message: 'Category added successfully', category: newCategory });
  } catch (error) {
    res.json({ message: error.message });
  }
};
