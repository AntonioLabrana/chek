import { Router } from "express";
import { methods as destinatariosController } from "../controllers/destinatarios.controller";

const trans = Router();

trans.get("/", destinatariosController.getDestinatarios);
trans.get("/:id", destinatariosController.getDestinatario);
trans.post("/", destinatariosController.addDestinatario)
trans.delete("/:id", destinatariosController.deleteDestinatario);
trans.put("/:id", destinatariosController.updateDestinatario);

export default trans;