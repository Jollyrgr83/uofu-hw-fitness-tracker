const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter a valid type of exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter a name for the exercise"
        },
        duration: {
          type: Number,
          required: "Please enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
);

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
