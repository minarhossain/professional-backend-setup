import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, next) {
        cb(null, '/public/temp')
    },

    filename: function (req, file, next) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })