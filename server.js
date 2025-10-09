const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // allow frontend to fetch

// Sample timetable data
const timetable = {
  Monday: [
    {
      start: "08:10",
      end: "09:00",
      subject: "Distributed Computing",
      color: "#9c27b0",
    },
    { start: "09:00", end: "09:50", subject: "AI Lab", color: "#03a9f4" },
    { start: "09:50", end: "10:40", subject: "AI Lab", color: "#03a9f4" },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    { start: "11:00", end: "11:50", subject: "AI Lab", color: "#03a9f4" },
    { start: "11:50", end: "12:40", subject: "AI", color: "#2196f3" },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    {
      start: "13:40",
      end: "14:40",
      subject: "Self-learning",
      color: "#757575",
    },
    {
      start: "14:40",
      end: "15:30",
      subject: "Self-learning",
      color: "#757575",
    },
  ],
  Tuesday: [
    {
      start: "08:10",
      end: "09:00",
      subject: "Self-learning",
      color: "#757575",
    },
    { start: "09:00", end: "09:50", subject: "AI", color: "#2196f3" },
    {
      start: "09:50",
      end: "10:40",
      subject: "Software & Programming in IoT",
      color: "#ffeb3b",
    },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    {
      start: "11:00",
      end: "11:50",
      subject: "Data Preprocessing",
      color: "#4caf50",
    },
    {
      start: "11:50",
      end: "12:40",
      subject: "Self-learning",
      color: "#757575",
    },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    {
      start: "13:40",
      end: "14:40",
      subject: "Calculus & Numerical Methods",
      color: "#f44336",
    },
    {
      start: "14:40",
      end: "15:30",
      subject: "Self-learning",
      color: "#757575",
    },
  ],
  Wednesday: [
    {
      start: "08:10",
      end: "09:00",
      subject: "Data Preprocessing",
      color: "#4caf50",
    },
    {
      start: "09:00",
      end: "09:50",
      subject: "Calculus & Numerical Methods",
      color: "#f44336",
    },
    {
      start: "09:50",
      end: "10:40",
      subject: "Calculus & Numerical Methods",
      color: "#f44336",
    },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    { start: "11:00", end: "11:50", subject: "AI", color: "#2196f3" },
    {
      start: "11:50",
      end: "12:40",
      subject: "Web Technologies",
      color: "#ff9800",
    },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    { start: "13:40", end: "14:40", subject: "Guest Lec", color: "#3f51b5" },
    { start: "14:40", end: "15:30", subject: "Guest Lec", color: "#3f51b5" },
  ],
  Thursday: [
    {
      start: "08:10",
      end: "09:00",
      subject: "Software & Programming in IoT",
      color: "#ffeb3b",
    },
    {
      start: "09:00",
      end: "09:50",
      subject: "Software & Programming in IoT",
      color: "#ffeb3b",
    },
    {
      start: "09:50",
      end: "10:40",
      subject: "Web Technologies",
      color: "#ff9800",
    },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    {
      start: "11:00",
      end: "11:50",
      subject: "Distributed Computing",
      color: "#9c27b0",
    },
    {
      start: "11:50",
      end: "12:40",
      subject: "Self-learning",
      color: "#757575",
    },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    {
      start: "13:40",
      end: "14:40",
      subject: "Software & Programming in IoT Lab",
      color: "#fbc02d",
    },
    {
      start: "14:40",
      end: "15:30",
      subject: "Software & Programming in IoT Lab",
      color: "#fbc02d",
    },
  ],
  Friday: [
    {
      start: "08:10",
      end: "09:00",
      subject: "Web Technologies",
      color: "#ff9800",
    },
    {
      start: "09:00",
      end: "09:50",
      subject: "Web Technologies",
      color: "#ff9800",
    },
    {
      start: "09:50",
      end: "10:40",
      subject: "Data Preprocessing",
      color: "#4caf50",
    },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    {
      start: "11:00",
      end: "11:50",
      subject: "Self-learning",
      color: "#757575",
    },
    {
      start: "11:50",
      end: "12:40",
      subject: "Web Technologies Lab",
      color: "#ef6c00",
    },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    {
      start: "13:40",
      end: "14:40",
      subject: "Web Technologies Lab",
      color: "#ef6c00",
    },
    {
      start: "14:40",
      end: "15:30",
      subject: "Web Technologies Lab",
      color: "#ef6c00",
    },
  ],
};

// API endpoint
app.get("/", (req, res) => {
  res.json(timetable);
});

// Start server
const PORT = process.env.PORT || 8080; // Changed from 5000 to 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
