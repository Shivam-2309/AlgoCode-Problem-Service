const express = require('express');

const v1Router = require('./v1');

const apiRouter = express.Router();

// if the request comes like /api/v1 then it is handled by v1Router
apiRouter.use('/v1', v1Router);

module.exports = apiRouter;