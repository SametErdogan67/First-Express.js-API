const express = require("express");
const app = express();
const cors = require("cors");

// CORS settings
const corsOptions = {
  origin: ["http://localhost:5173"], // Vite application's port
};

// CORS middleware
app.use(cors(corsOptions));

// Example data
const pets = [
  { name: "Buddy", type: "Dog" },
  { name: "Mittens", type: "Cat" },
  { name: "Goldie", type: "Fish" },
];

// API endpoint
app.get("/api", (req, res) => {
  res.json({ pets }); // Return the pets array as JSON
});

// Start the server
app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
