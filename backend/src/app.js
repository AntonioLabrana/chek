import express from "express";
import morgan from "morgan";

// Routes Import
import destinatariosApi from "./routes/destinatarios.api";
import usuariosApi from "./routes/usuarios.api";

const app = express();

// Settings
app.set("port", 9090);

// Middlewares
app.use( morgan("dev") );
app.use(express.json());

// Routes
app.use("/api/destinatarios", destinatariosApi );
app.use("/api/usuarios", usuariosApi);

export default app;