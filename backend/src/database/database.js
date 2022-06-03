import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});

export const getConnection = () => {
    return connection;
}

// module.exports = {
//     getConnection
// };