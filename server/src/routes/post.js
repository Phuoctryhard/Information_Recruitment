
const express = require('express');
const router = express.Router();
const PostController = require('../app/controllers/PostController');
router.get('/by/:id',PostController.getbyid);
router.get('/create',PostController.create);
router.post('/create',PostController.createpost);
router.get('/',PostController.show);


module.exports = router;