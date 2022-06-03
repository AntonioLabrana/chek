import express from "express";
import morgan from "morgan";
import destinatariosApi from "./routes/destinatarios.api.js";
import usuariosApi from "./routes/usuarios.api.js";
import transferenciasApi from './routes/transferencias.api.js'
import cors from 'cors';

const app = express();
// const cors = require('cors');

// Settings
app.set("port", process.env.PORT || 9090);

// Middlewares
app.use( morgan("dev") );
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/transferencias", transferenciasApi);
app.use("/api/destinatarios", destinatariosApi );
app.use("/api/usuarios", usuariosApi);

const PORT = process.env.PORT || 9090;
app.listen(PORT, function(){
    console.log("NodeJS on PORT = ", PORT);
});

export default app;