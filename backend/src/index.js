import app from "./app.js";

const main = () => {
    app.listen( app.get("port") );
    console.log("Heroku NodeJS on PORT = " +  app.get("port"));
};

main();