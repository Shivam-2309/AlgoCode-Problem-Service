const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    // In case somebody forgets to setup the dotenv file
    PORT : process.env.PORT || 3000,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL ,
    NODE_ENV :  process.env.NODE_ENV || "development"
}