import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});

//        usuario       : password @ hhost .net              / database name ?    
//mysql://baf344f5e0d783:3f967d0a@us-cdbr-east-05.cleardb.net/heroku_39fd0a6f653f72b?reconnect=true

export const getConnection = () => {
    return connection;
}

// module.exports = {
//     getConnection
// };