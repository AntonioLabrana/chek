import express from "express";
import morgan from "morgan";

// Routes Import
import destinatariosApi from "./routes/destinatarios.api";
import usuariosApi from "./routes/usuarios.api";
import transferenciasApi from './routes/transferencias.api'

const app = express();
const cors = require('cors');

// Settings
app.set("port", 9090);

// Middlewares
app.use( morgan("dev") );
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/transferencias", transferenciasApi);
app.use("/api/destinatarios", destinatariosApi );
app.use("/api/usuarios", usuariosApi);

export default app;