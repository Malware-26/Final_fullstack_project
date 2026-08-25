const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');

require('dotenv').config();

// Use Google DNS instead of the default DNS resolver
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = 3000;

app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });

    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

connect();