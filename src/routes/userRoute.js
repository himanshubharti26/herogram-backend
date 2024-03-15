const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/:id', userController.getUserById);
router.get('/email/:email', userController.getUserByEmail);
router.post('/', userController.registerUser);

module.exports = router;