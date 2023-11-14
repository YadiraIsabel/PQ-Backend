import Product from '../models/product.models.js'

export const getProducts = async (req, res) => {
    try {

        const products = await Product.find({store: req.store.id}).populate('store')
        res.json(products)

        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener los productos']})
    }
}

export const createProduct = async (req, res) => {

    try {
        const {name, price, year} = req.body
        const newProduct = new Product ({
            name,
            price,
            year,
            store: req.store.id
        })

        const savedProduct = await newProduct.save();
        res.json(savedProduct)
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener los productos']})
    }
}

export const getProduct = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id).populate('store')
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
        const product = await Product.findByIdAndDelete(req.params.id)
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
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(product)
        
        if (!product)
        return res.status(404). json({error: 'Producto no encontrado'})       
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener los productos'})
    }
}