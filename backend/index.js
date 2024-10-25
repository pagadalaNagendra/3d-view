// backend/index.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/api/water-flow', (req, res) => {
  // Simulate dynamic water flow data
  const waterFlowData = {
    flowRate: Math.random() * 5, // Flow rate between 0 and 5
  };
  res.json(waterFlowData);
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
