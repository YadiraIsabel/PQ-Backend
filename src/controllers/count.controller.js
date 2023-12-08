import {getCountsByUser, getCountById, createACount, deleteCountById, updateCountById} from '../app/services/count.service.js'

export const getCounts = async (req, res) => {
    try {

        const counts = await getCountsByUser(req)
        /* console.log(counts); */
        res.json(counts)
        return (res)

        
    } catch (error) {
        console.log(error);
       return res.status(500).json ({message:[ 'Error al obtener las cuentas']})
    }
}

export const createCount = async (req, res) => {
    /* console.log(JSON.stringify(req.body)); */

    try {

        const savedCount = await createACount(req);
        res.json(savedCount)
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las cuentas']})
    }
}

export const getCount = async (req, res) => {

    try {
        const count = await getCountById(req)
        res.json(count)
        
        if (!count)
        return res.status(404).json({message:[ 'cuenta no encontrada']})
      
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las cuentas']})
    }
}

export const deleteCount = async (req, res) => {

    try {

        //const count = await count.findByIdAndRemove(req.param.id)
        const count = await deleteCountById(req)
        res.json(count)
        
        if (!count)
        return res.status(404). json({error: 'cuenta no encontrada'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener las cuentas'})
    }
}

export const updateCount = async (req, res) => {

    try {
        const count = await updateCountById(req)
        res.json(count)
        
        if (!count)
        return res.status(404). json({error: 'cuenta no encontrada'})       
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener las cuentas'})
    }
}