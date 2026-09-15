const express = require("express");

const {
  getCourses,
  showCreateForm,
  createCourse,
  showEditForm,
  updateCourse,
  deleteCourse
} = require("../controllers/courseController");

const router = express.Router();

router.get("/", getCourses);
router.get("/new", showCreateForm);
router.post("/", createCourse);
router.get("/:id/edit", showEditForm);
router.post("/:id/update", updateCourse);
router.post("/:id/delete", deleteCourse);

module.exports = router;