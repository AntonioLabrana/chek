import { config } from "dotenv";

config();

export default{
    host: process.env.HOST || "localhost",
    database: process.env.DATABASE || "check",
    user: process.env.USER || "check",
    password: process.env.PASSWORD || "check"
}