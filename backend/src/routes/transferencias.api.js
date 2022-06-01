import { response, Router } from "express";
import { methods as transferenciasController } from "../controllers/transferencias.controller";

const router = Router();

router.get("/", transferenciasController.getTransferencias);
router.post("/", transferenciasController.postTransferencia);

export default router;