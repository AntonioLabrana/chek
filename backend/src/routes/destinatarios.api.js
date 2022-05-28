import { response, Router } from "express";
import { methods as destinatariosController } from "../controllers/destinatarios.controller";

const router = Router();

router.get("/", destinatariosController.getDestinatarios);
router.get("/:id", destinatariosController.getDestinatario);
router.post("/", destinatariosController.addDestinatario)
router.delete("/:id", destinatariosController.deleteDestinatario);
router.put("/:id", destinatariosController.updateDestinatario);

export default router;