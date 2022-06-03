import express from "express";
import morgan from "morgan";
import destinatariosApi from "./routes/destinatarios.api.js";
import usuariosApi from "./routes/usuarios.api.js";
import transferenciasApi from './routes/transferencias.api.js'
import cors from 'cors';

const app = express();

app.set("port", process.env.PORT || 9090);

app.use( morgan("dev") );
app.use(express.json());
app.use(cors());

app.use("/api/transferencias", transferenciasApi);
app.use("/api/destinatarios", destinatariosApi );
app.use("/api/usuarios", usuariosApi);

export default app;