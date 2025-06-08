// src/index.ts
import express from 'express';
import trackerRouter from './routes/tracker';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/tracker', trackerRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce Tracker API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
