import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net' || config.host,
    database: 'heroku_39fd0a6f653f72b' || config.database,
    user: 'baf344f5e0d783' || config.user,
    password: '3f967d0a' || config.password
});

export const getConnection = () => {
    return connection;
}

// module.exports = {
//     getConnection
// };