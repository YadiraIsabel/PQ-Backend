import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getStores, getStore, createStore, deleteStore, updateStore } from "../controllers/store.controller.js";
import { validateSchema } from "../middlewares/validator.middlware.js";
import { storeSchema } from "../schemas/store.schemas.js";

const router = Router()

router.get('/tiendas', authRequired, getStores)
router.post('/tiendas', authRequired, validateSchema(storeSchema), createStore)
router.get('/tiendas/:id', authRequired, getStore)
router.delete('/tiendas/:id', authRequired, deleteStore)
router.put('/tiendas/:id', authRequired, validateSchema(storeSchema), updateStore)


export default router;