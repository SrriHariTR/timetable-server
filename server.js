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
      subject: "Intro to Quant Comp",
      color: "#7e57c2",
    },
    { start: "09:00", end: "09:50", subject: "Data Science", color: "#26a69a" },
    {
      start: "09:50",
      end: "10:40",
      subject: "IoT Arch. & Proto",
      color: "#ffca28",
    },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    { start: "11:00", end: "11:50", subject: "Mini Project", color: "#ab47bc" },
    { start: "11:50", end: "12:40", subject: "Mini Project", color: "#ab47bc" },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    { start: "13:40", end: "14:30", subject: "Mini Project", color: "#ab47bc" },
    { start: "14:40", end: "15:30", subject: "Mini Project", color: "#ab47bc" },
  ],

  Tuesday: [
    { start: "08:10", end: "09:00", subject: "IoT Sys Eng", color: "#ef5350" },
    {
      start: "09:00",
      end: "09:50",
      subject: "Cryptography Concepts",
      color: "#5c6bc0",
    },
    { start: "09:50", end: "10:40", subject: "ML", color: "#42a5f5" },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    {
      start: "11:00",
      end: "11:50",
      subject: "Intro to Quant Comp",
      color: "#7e57c2",
    },
    {
      start: "11:50",
      end: "12:40",
      subject: "Industrial Training",
      color: "#8d6e63",
    },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    { start: "13:40", end: "14:30", subject: "Library", color: "#90a4ae" },
    {
      start: "14:40",
      end: "15:30",
      subject: "Seminars / Club Activities",
      color: "#9ccc65",
    },
  ],

  Wednesday: [
    { start: "08:10", end: "09:00", subject: "Data Science", color: "#26a69a" },
    {
      start: "09:00",
      end: "09:50",
      subject: "Cryptography Concepts",
      color: "#5c6bc0",
    },
    { start: "09:50", end: "10:40", subject: "IoT Sys Eng", color: "#ef5350" },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    { start: "11:00", end: "11:50", subject: "ML", color: "#42a5f5" },
    { start: "11:50", end: "12:40", subject: "Mentoring", color: "#26c6da" },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    {
      start: "13:40",
      end: "14:30",
      subject: "Seminars / Club Activities",
      color: "#9ccc65",
    },
    {
      start: "14:40",
      end: "15:30",
      subject: "Seminars / Club Activities",
      color: "#9ccc65",
    },
  ],

  Thursday: [
    { start: "08:10", end: "09:00", subject: "ML (Theory)", color: "#42a5f5" },
    {
      start: "09:00",
      end: "09:50",
      subject: "IoT Arch. & Proto",
      color: "#ffca28",
    },
    { start: "09:50", end: "10:40", subject: "Data Science", color: "#26a69a" },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    {
      start: "11:00",
      end: "11:50",
      subject: "Industrial Training",
      color: "#8d6e63",
    },
    { start: "11:50", end: "12:40", subject: "ML Lab", color: "#66bb6a" },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    { start: "13:40", end: "14:30", subject: "ML Lab", color: "#66bb6a" },
    { start: "14:40", end: "15:30", subject: "ML Lab", color: "#66bb6a" },
  ],

  Friday: [
    {
      start: "08:10",
      end: "09:00",
      subject: "IoT Arch. & Proto",
      color: "#ffca28",
    },
    { start: "09:00", end: "09:50", subject: "IoT Sys Eng", color: "#ef5350" },
    {
      start: "09:50",
      end: "10:40",
      subject: "Intro to Quant Comp",
      color: "#7e57c2",
    },
    { start: "10:40", end: "11:00", subject: "BREAK", color: "#9e9e9e" },
    {
      start: "11:00",
      end: "11:50",
      subject: "Industrial Training",
      color: "#8d6e63",
    },
    { start: "11:50", end: "12:40", subject: "Data Science", color: "#26a69a" },
    { start: "12:40", end: "13:40", subject: "LUNCH", color: "#616161" },
    { start: "13:40", end: "14:30", subject: "Mini Project", color: "#ab47bc" },
    { start: "14:40", end: "15:30", subject: "Mini Project", color: "#ab47bc" },
  ],
};

// Academic calendar events
const academicEvents = [
  { title: "Christmas (H5)", date: "2025-12-25", color: "#ff7675" },
  { title: "New Year (H6)", date: "2026-01-01", color: "#ffeaa7" },
  { title: "Pongal (H7)", date: "2026-01-15", color: "#ffeaa7" },
  { title: "Thiruvalluvar Day", date: "2026-01-16", color: "#ffeaa7" },
  { title: "Republic Day (H8)", date: "2026-01-26", color: "#ff7675" },

  { title: "Mid Sem Exam", date: "2026-02-19", color: "#fab1a0" },
  { title: "Mid Sem Exam", date: "2026-02-20", color: "#fab1a0" },

  { title: "Instincts", date: "2026-03-12", color: "#ce8080ff" },
  { title: "Instincts", date: "2026-03-13", color: "#ce8080ff" },
  { title: "Instincts", date: "2026-03-14", color: "#ce8080ff" },

  { title: "Assessment – I", date: "2026-03-23", color: "#fdcb6e" },
  { title: "Assessment – II", date: "2026-03-24", color: "#fdcb6e" },
  { title: "Sports Day", date: "2026-03-27", color: "#81ecec" },

  { title: "SNU Annual Day", date: "2026-04-02", color: "#74b9ff" },
  {
    title: "Tamil New Year / Dr B R Ambedkar Jayanthi",
    date: "2026-04-14",
    color: "#ffeaa7",
  },

  { title: "Project Viva", date: "2026-04-15", color: "#a29bfe" },
  { title: "Project Viva", date: "2026-04-16", color: "#a29bfe" },
  { title: "Project Viva", date: "2026-04-17", color: "#a29bfe" },

  { title: "May Day (H10)", date: "2026-05-01", color: "#ff7675" },
  {
    title: "End Semester Theory Exam Begins",
    date: "2026-05-18",
    color: "#e17055",
  },

  { title: "Bakrid", date: "2026-06-29", color: "#ff7675" },
  { title: "Convocation", date: "2026-07-05", color: "#00b894" },
];

app.get("/calendar", (req, res) => {
  res.json(academicEvents);
});

// API endpoint
app.get("/", (req, res) => {
  res.json(timetable);
});

// Start server
const PORT = process.env.PORT || 8080; // Changed from 5000 to 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
