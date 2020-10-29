const assert = require( "assert" );
const dotenv = require( "dotenv" );

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const { PORT,
   HOST,
   HOST_URL,
   COOKIE_ENCRYPT_PWD,
   SQL_SERVER,
   SQL_DATABASE,
   SQL_USER,
   SQL_PASSWORD,
} = process.env;



// export the configuration information
module.exports = {
   port: PORT,
   host: HOST,
   url: HOST_URL,
   cookiePwd: COOKIE_ENCRYPT_PWD,
   sql: {
       server: SQL_SERVER,
       database: SQL_DATABASE,
       user: SQL_USER,
       password: SQL_PASSWORD
   }
};