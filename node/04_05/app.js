const express = require("express");
const app = express();

app.use(express.json());

// חיבור ל־routes
const studentsRoutes = require("./routes/students.routes");
app.use("/students", studentsRoutes);

// בדיקה
app.get("/", (req, res) => {
  res.send("Server is working");
});

const port = 3000;

app.listen(port, () => {
  console.log("Server running on http://localhost:3000");
});