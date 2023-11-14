import Store from '../models/store.models.js'

export const getStores = async (req, res) => {
    try {

        const stores = await Store.find({user: req.user.id}).populate('user')
        res.json(stores)

        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las tiendas']})
    }
}

export const createStore = async (req, res) => {

    try {
        const {name, year} = req.body
        const newStore = new Store ({
            name,
            year,
            user: req.user.id
        })

        const savedStore = await newStore.save();
        res.json(savedStore)
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las tiendas']})
    }
}

export const getStore = async (req, res) => {

    try {
        const store = await store.findById(req.params.id).populate('user')
        res.json(store)
        
        if (!store)
        return res.status(404).json({message:[ 'tienda no encontrada']})
      
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las tiendas']})
    }
}

export const deleteStore = async (req, res) => {

    try {

        //const store = await store.findByIdAndRemove(req.param.id)
        const store = await store.findByIdAndDelete(req.params.id)
        res.json(store)
        
        if (!store)
        return res.status(404). json({error: 'storeo no encontrado'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener las tiendas'})
    }
}

export const updateStore = async (req, res) => {

    try {
        const store = await store.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(store)
        
        if (!store)
        return res.status(404). json({error: 'tienda no encontrada'})       
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener las tiendas'})
    }
}