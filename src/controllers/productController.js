const {
  saveProduct,
  fetchProducts,
  deleteProduct,
} = require("../services/productService");

const addProduct = async (req, res) => {
  try {
    const product = await saveProduct(req.body);
    res.status(201).send({
      message: "Product added successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(409).send({ message: error.message, success: false });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await fetchProducts();
    res.send({
      message: "Products fetched successfully",
      success: true,
      data: products,
    });
  } catch (error) {
    return res.status(409).send({ message: error.message, success: false });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await deleteProduct(id);
    res.send({
      message: "Product deleted successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(409).send({ message: error.message, success: false });
  }
};

module.exports = { addProduct, getProducts, removeProduct };
