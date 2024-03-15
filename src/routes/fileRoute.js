const router  = require('express').Router();
const fileController = require('../controllers/fileController');
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'),fileController.uploadFile);
router.get('/:email', fileController.getUserFiles)

module.exports = router;