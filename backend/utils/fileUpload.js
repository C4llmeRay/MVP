const multer = require('multer');

// Utility function for file upload configuration
exports.uploadFile = (destination) => {
  const storage = multer.diskStorage({
    destination,
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${file.fieldname}-${uniqueSuffix}`);
    },
  });

  return multer({ storage });
};
