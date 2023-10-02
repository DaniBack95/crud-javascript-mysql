const express = require("express");
const TasksController = require("../controllers/TaskController");
const router = express.Router();

router.get("/tasks", TasksController.index);
router.get("/create", TasksController.create);
router.post("/create", TasksController.store);
router.post("/tasks/delete", TasksController.destroy);
router.get("/tasks/edit/:id", TasksController.edit);
router.post("/tasks/edit/:id", TasksController.update);

module.exports = router;
