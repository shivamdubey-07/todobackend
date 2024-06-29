const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask,toggleTaskDone } = require('../controllers/taskController');

router.get('/get/tasks', getTasks);
router.post('/create/tasks', createTask);
router.put('/update/tasks/:id', updateTask);
router.delete('/delete/tasks/:id', deleteTask);
router.put('/tasks/:id/toggle', toggleTaskDone);

module.exports = router;
