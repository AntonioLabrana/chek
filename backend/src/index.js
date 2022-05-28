import app from "./app";

const main = () => {
    app.listen(app.get("port"));
    console.log("Server running on " + app.get("port"));
};

main();