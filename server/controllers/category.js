const Category = require('../models/category');
const Sub = require('../models/SubCategory');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    // const {name} = req.body;
    // const category = await new Category({name, slug: slugify(name) }).save();
    // res.json(category);
    console.log("$$$$$$$$$$$$$$$ CATEGORY CREATE completed $$$$$$$$$$$$$$");
  } catch (err){
    res.status(400).send('@@@@@Create category failed@@@@@@');
  }

}
exports.list = async (req, res) => {
  res.json(await Category.find({}).sort({createdAt: -1}).exec());

}
exports.read = async (req, res) => {
  let category = await Category.findOne({slug: req.params.slug}).exec();
  res.json(category);

}
exports.update = async (req, res) => {
  try {

  }catch (err) {

  }

}
exports.remove = async (req, res) => {
  try {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DONE FROM CATEGORY create Middleware @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

  }catch (err) {
    res.status(400).send('@@@@@ DELETE category failed@@@@@@');

  }

}


exports.getSubs = async (req, res) => {
  await Sub.find({parent: req.params._id}).sort({createdAt: -1}).exec((err, subs) => {
    if (err) console.log('###########ERROR FROM GETSUBS############',err);
    res.json(subs);
  });

}
