const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');
const { METHOD_FAILURE } = require('http-status-codes');

async function connectToDB() {

    try {
        if(NODE_ENV == "developement"){
            await mongoose.connect(ATLAS_DB_URL);
        }
        await mongoose.connect(ATLAS_DB_URL);
    } catch(error) {
        console.log('Unable to connect to the DB Server');
        console.log(error);
    }
}

module.exports = connectToDB