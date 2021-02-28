const Product = require('../models/product');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    // const {name} = req.body;
    // const category = await new Category({name, slug: slugify(name) }).save();
    // res.json(category);
    console.log("$$$$$$$$$$$$$$$ PRODUCT CREATE completed $$$$$$$$$$$$$$");
  } catch (err){
    res.status(400).send('@@@@@Create category failed@@@@@@');
  }
}


exports.listAll = async (req, res) => {
  try {
    let products = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate('category')
    .populate('subs')
    .sort([['createdAt', 'desc']])
    .exec()
    res.json(products);
    console.log("$$$$$$$$$$$$$$$ PRODUCT CREATE completed $$$$$$$$$$$$$$");
  } catch (err){
    res.status(400).send('@@@@@Create category failed@@@@@@');
  }
}


exports.remove = async (req, res) => {
  console.log("$$$$$$$$$$$$$$$ PRODUCT REMOVE completed $$$$$$$$$$$$$$");

}


exports.read = async (req, res) => {
  const product = await Product.findOne({slug: req.params.slug})
  .populate('category')
  .populate('subs')
  .exec();

  res.json(product);
  console.log("$$$$$$$$$$$$$$$ PRODUCT Retrive completed $$$$$$$$$$$$$$");

}
