const router = require("express").Router();
const Workout = require("../models/workout.js");
// GET for API.getLastWorkout()
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

// PUT for API.addExercise()
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
// POST for API.createWorkout()
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
// GET for API.getWorkoutsInRange()
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
