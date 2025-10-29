import express from 'express';
import cors from 'cors'; // Import cors
import clientRoutes from './routes/client.routes.js';
import wpRoutes from './routes/wp.routes.js';
import dotenv from 'dotenv';

const app = express();

// Enable CORS
dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*', // Allow requests from the frontend origin or any origin if not specified
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.use(express.json());

// Routes
// app.use('/api/login', loginRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/wp', wpRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
