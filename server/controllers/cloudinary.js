const cloudinary = require('cloudinary');



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.upload = async (req, res) => {
  console.log('########### CLOUDINARY BACKEND UPLOAD COMPLETED');
}



exports.remove = (req, res) => {
  console.log('########### CLOUDINARY BACKEND REMOVE COMPLETED');
}
