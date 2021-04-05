const express = require('express')
const postController = require('./controller/postController')
const middleware = require('./middleware/authMiddleware')

const router = express.Router()

router.get('/posts', postController.index)
router.post('/posts', middleware, postController.create)
router.get('/usuario/posts', middleware, postController.findById)


module.exports = router