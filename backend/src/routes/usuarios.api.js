import { response, Router } from "express";
import { methods as usuariosController } from "../controllers/usuarios.controller";

const login = Router();

login.get("/", usuariosController.getUsuario);

export default login;