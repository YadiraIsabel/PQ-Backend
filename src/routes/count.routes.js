import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getCounts, getCount, createCount, deleteCount, updateCount } from "../controllers/count.controller.js";
import { validateSchema } from "../middlewares/validator.middlware.js";
import { countSchema } from "../schemas/count.schemas.js";

const router = Router()

router.get('/cuentas', authRequired, getCounts)
router.post('/cuentas', authRequired, validateSchema(countSchema), createCount)
router.get('/cuentas/:id', authRequired, getCount)
router.delete('/cuentas/:id', authRequired, deleteCount)
router.put('/cuentas/:id', authRequired, validateSchema(countSchema), updateCount)


export default router;