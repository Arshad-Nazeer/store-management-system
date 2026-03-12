const Product = require("../models/Product");

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH
exports.searchProduct = async (req, res) => {
  try {

    const name = req.query.name;

    if (!name) {
      return res.status(400).json({ message: "Search name is required" });
    }

    const products = await Product.find({
      productName: { $regex: name, $options: "i" }
    });

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};

// FILTER CATEGORY
exports.filterCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.query.cat
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};