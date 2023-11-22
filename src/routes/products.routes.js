import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
import { validateSchema } from "../middlewares/validator.middlware.js";
import { productSchema } from "../schemas/product.schemas.js";

const router = Router()

router.get('/:tienda/productos', authRequired, getProducts)
router.post('/:tienda/productos', authRequired, validateSchema(productSchema), createProduct)
router.get('/:tienda/productos/:id', authRequired, getProduct)
router.delete('/:tienda/productos/:id', authRequired, deleteProduct)
router.put('/:tienda/productos/:id', authRequired, validateSchema(productSchema), updateProduct)


export default router;