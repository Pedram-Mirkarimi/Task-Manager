const express = require('express')
const auth = require('../middleware/auth')
const taskController = require('../controllers/task')

const router = express.Router()

// Create Task
router.post('/tasks', auth, taskController.createTask)

// Read Tasks
router.get('/tasks', auth, taskController.getTasks)

// Read Task
router.get('/tasks/:id', auth, taskController.getTask)

// Update Task
router.patch('/tasks/:id', auth, taskController.updateTask)

// Delete Task
router.delete('/tasks/:id', auth, taskController.deleteTask)

module.exports = router
