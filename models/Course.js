const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, "Course name is required"],
      trim: true,
      minlength: [3, "Course name must be at least 3 characters"]
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: [1, "Duration must be at least 1 week"]
    },
    instructor: {
      type: String,
      required: [true, "Instructor is required"],
      trim: true
    },
    maxStudents: {
      type: Number,
      required: [true, "Maximum students is required"],
      min: [1, "Maximum students must be at least 1"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);