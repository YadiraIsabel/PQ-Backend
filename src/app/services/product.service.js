import { getProductsByStoeId, create, getProduct, deleteProduct, updateProduct} from '../../models/repositories/product.repository.js'

export const getProductsByStore = (req) => {


        return getProductsByStoeId(req.params.tienda)
}

export const createAProduct = (req) => {
        const { name, price, fecha } = req.body
        const store = req.params.tienda
        const savedProduct = create(name, price, fecha, store);
        return savedProduct

}

export const getProductById = (req) => {
        return getProduct(req.params.id)
}

export const deleteProductById = (req) => {

        return  deleteProduct(req.params.id)
}

export const updateProductById = (req) => {

       return updateProduct(req.params.id, req.body)

} 