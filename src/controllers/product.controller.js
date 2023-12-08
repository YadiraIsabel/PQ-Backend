import Product from '../models/product.models.js'
import {getProductsByStore, getProductById, createAProduct, deleteProductById, updateProductById} from '../app/services/product.service.js'


export const getProducts = async (req, res) => {
    try {
        const products = await getProductsByStore(req)
        res.json(products)

        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener los productos']})
    }
}

export const createProduct = async (req, res) => {

    try {
        const savedProduct = await createAProduct(req);
        res.json(savedProduct)
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener los productos']})
    }
}

export const getProduct = async (req, res) => {

    try {
        const product = await getProductById(req)
        res.json(product)
        
        if (!product)
        return res.status(404).json({message:[ 'Producto no encontrado']})
      
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener los productos']})
    }
}

export const deleteProduct = async (req, res) => {

    try {

        //const product = await Product.findByIdAndRemove(req.param.id)
        const product = await deleteProductById(req)
        res.json(product)
        
        if (!product)
        return res.status(404). json({error: 'Producto no encontrado'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener los productos'})
    }
}

export const updateProduct = async (req, res) => {

    try {
        const product = await updateProductById(req)
        res.json(product)
        
        if (!product)
        return res.status(404). json({error: 'Producto no encontrado'})       
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener los productos'})
    }
}