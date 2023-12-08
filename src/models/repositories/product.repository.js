import Product from '../../models/product.models.js'

export const getProductsByStoeId = (tienda) => {

    return Product.find({ store: tienda }).populate('store')
}
export const create = (name, price, fecha, store) => {

    const newProduct = new Product({ name, price, fecha, store })

    const savedProduct = newProduct.save();
    return savedProduct

}

export const getProduct = (tienda) => {
    return Product.findById(tienda).populate('store')
     
}

export const deleteProduct = (id) => {
    return Product.findByIdAndDelete(id)
}

export const updateProduct = (id, body) => {

        return Product.findByIdAndUpdate(id, body, {new: true})

}