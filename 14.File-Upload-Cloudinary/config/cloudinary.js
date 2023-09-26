const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dh8gvsaap",
  api_key: "424232242992739",
  api_secret: "H2t9QPGwU9zcE47qI3-CO29-cag",
});

//instance of cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,

  allowedFormats: ["jpg", "png"],
  params: {
    folder: "nodejs",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

module.exports = storage;
