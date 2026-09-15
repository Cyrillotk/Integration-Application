const Course = require("../models/Course");

const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.render("courses/index", { courses });
  } catch (error) {
    next(error);
  }
};

const showCreateForm = (req, res) => {
  res.render("courses/new");
};

const createCourse = async (req, res, next) => {
  try {
    await Course.create(req.body);
    res.redirect("/courses");
  } catch (error) {
    next(error);
  }
};

const showEditForm = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).render("error", {
        message: "Course not found"
      });
    }

    res.render("courses/edit", { course });
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      return res.status(404).render("error", {
        message: "Course not found"
      });
    }

    res.redirect("/courses");
  } catch (error) {
    next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).render("error", {
        message: "Course not found"
      });
    }

    res.redirect("/courses");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCourses,
  showCreateForm,
  createCourse,
  showEditForm,
  updateCourse,
  deleteCourse
};