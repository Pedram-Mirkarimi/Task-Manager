const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const userController = require('../controllers/user')
const auth = require('../middleware/auth')

const router = express.Router()

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('File must be a JPG|JPEG|PNG.'))
    }

    cb(undefined, true)
  }
})

// Create user
router.post('/users', userController.createUser)

// Login user
router.post('/users/login', userController.login)

// Logout user
router.post('/users/logout', auth, userController.logout)

// Logout all
router.post('/users/logoutAll', auth, userController.logoutAll)

// Read profile
router.get('/users/me', auth, userController.getUsers)

// Update user
router.patch('/users/me', auth, userController.updateUser)

// Delete user
router.delete('/users/me', auth, userController.deleteUser)

// Upload avatar
router.post(
  '/users/me/avatar',
  auth,
  upload.single('avatar'),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
  },
  (error, req, res, next) => {
    res.status(400).send({
      error: error.message
    })
  }
)

// Get avatar
router.get('/users/:id/avatar', userController.getAvatar)

// Delete avatar
router.delete('/users/me/avatar', auth, userController.deleteAvatar)

module.exports = router
