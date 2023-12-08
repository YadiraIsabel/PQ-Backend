import Store from '../models/store.models.js'
import {getStoresByUser, getStoreById, createAStore, deleteStoreById, updateStoreById} from '../app/services/store.service.js'


export const getStores = async (req, res) => {
    try {

        const stores = await getStoresByUser(req)
        res.json(stores)

        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las tiendas']})
    }
}

export const createStore = async (req, res) => {

    try {
        const savedStore = await createAStore(req);
        res.json(savedStore)
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las tiendas']})
    }
}

export const getStore = async (req, res) => {

    try {
        const store = await getStoreById(req)
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
        const store = await deleteStoreById(req)
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
        const store = await updateStoreById(req, res)
        res.json(store)
        
        if (!store)
        return res.status(404). json({error: 'tienda no encontrada'})       
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener las tiendas'})
    }
}