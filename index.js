const express = require('express');
const connectDB = require('./config/db.js');
const taskRoutes = require('./routes/taskRoutes.js');
const errorHandler = require('./middleware/errorHandler.js');
const cors =require("cors")
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api', taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
