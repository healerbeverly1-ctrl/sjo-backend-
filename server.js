require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
// Add other routes...

mongoose.connect(process.env.MONGO_URI);
const app = express();
app.use(cors({ origin: '*' })); // Update to your frontend URL later
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
// Add others...

app.listen(process.env.PORT || 5000, () => console.log('Server live'));
