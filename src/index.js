const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');

const app = express();
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and routes starts with /api
// Then we map it to apiRouter
app.use('/api', apiRouter)

app.get('/ping', (req, res) => {
    return res.json({message : 'Problem Service is alive'});
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at PORT : ${ PORT }`);
    // There can be some risky piece of code which might block the runtime of the program execution
    // such error must be wrapped in a try and catch statement
    // here now when exceptions come, it now won't stop the program execution
    try {
        // Real time example
        // 1. opened a db connection
        // 2. Queried on db, but u wrote wrong query
        // 3. Exception will be there
        throw new NotFoundError({});
    }
    catch(error) {
        // log the error
        console.log("Something went wrong", error.stack);
    }
    finally {
        // close the db connection because i don't want to waste resources
        // or it can be used by the finally process
        console.log("Executed Finally")
    }
});