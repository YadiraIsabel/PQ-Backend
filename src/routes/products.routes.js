import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
import { validateSchema } from "../middlewares/validator.middlware.js";
import { productSchema } from "../schemas/product.schemas.js";

const router = Router()

router.get('/productos', authRequired, getProducts)
router.post('/productos', authRequired, validateSchema(productSchema), createProduct)
router.get('/productos/:id', authRequired, getProduct)
router.delete('/productos/:id', authRequired, deleteProduct)
router.put('/productos/:id', authRequired, validateSchema(productSchema), updateProduct)


export default router;