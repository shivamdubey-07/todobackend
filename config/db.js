const mongoose = require('mongoose');
const env=require("dotenv")
env.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;
