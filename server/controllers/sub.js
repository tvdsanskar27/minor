const Sub = require('../models/SubCategory');
const slugify = require('slugify');

exports.create = async (req, res) => {
  try {
    console.log("$$$$$$$$$$$$$$$ CATEGORY CREATE completed $$$$$$$$$$$$$$");
  } catch (err){
    res.status(400).send('@@@@@Create category failed@@@@@@');
  }

}
exports.list = async (req, res) => {
  res.json(await Sub.find({}).sort({createdAt: -1}).exec());
  console.log("List Send to frontend");
}
exports.read = async (req, res) => {
  let sub = await Sub.findOne({slug: req.params.slug}).exec();
  res.json(sub);

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
