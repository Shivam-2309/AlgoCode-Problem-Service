const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    // In case somebody forgets to setup the dotenv file
    PORT : process.env.PORT || 3000
}