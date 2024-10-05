const express = require('express');
const { PORT } = require('./config/server.config');

const app = express();
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler.js');
const connectToDB = require('./config/db.config.js');

// Express now includes body-parsing by default, so you don't need the body-parser package
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// If any request comes and routes start with /api, map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({ message: 'Problem Service is alive' });
});

// Last middleware if any error comes
app.use(errorHandler);

// Wrap connectToDB in try-catch to handle DB connection errors gracefully
app.listen(PORT, async () => {
    console.log(`Server started at PORT : ${ PORT }`);
    await connectToDB();
    console.log("Successfully connected to DB");
});
