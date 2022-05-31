import { response, Router } from "express";
import { methods as usuariosController } from "../controllers/usuarios.controller";

const login = Router();

login.post("/", usuariosController.getUsuario);

export default login;