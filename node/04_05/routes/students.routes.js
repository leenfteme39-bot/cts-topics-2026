const express = require("express");
const router = express.Router();

let students = [
  { id: 1, name: "Omer", course: "DevOps" },
  { id: 2, name: "Dan", course: "BI" },
  { id: 3, name: "Ariel", course: "Fullstack" },
];

// GET all
router.get("/", (req, res) => {
  res.json(students);
});


// SEARCH
router.get("/search", (req, res) => {
  const result = students.filter(
    s => s.course === req.query.course
  );
  res.json(result);
});

// GET by id
router.get("/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

// POST
router.post("/", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.json(newStudent);
});

// DELETE
router.delete("/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;