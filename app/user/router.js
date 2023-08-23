const router = require('express').Router();
const userController = require('./controller');
const multer = require('multer');
const os = require('os');

router.get('/user', userController.getUserByToken);
router.patch('/user',  multer({dest:os.tmpdir()}).single('image'),userController.updateUser);

module.exports = router;