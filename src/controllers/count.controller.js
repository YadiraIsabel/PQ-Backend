import Count from '../models/count.models.js'

export const getCounts = async (req, res) => {
    try {

        const counts = await Count.find({user: req.user.id}).populate('user')
        res.json(counts)

        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las cuentas']})
    }
}

export const createCount = async (req, res) => {
    /* console.log(JSON.stringify(req.body)); */

    try {
        const {name, date,total, totalin} = req.body
        const newCount = new Count ({
            name,
            date,
            total,
            totalin,
            user: req.user.id
        })

        const savedCount = await newCount.save();
        res.json(savedCount)
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({message:[ 'Error al obtener las cuentas']})
    }
}

export const getCount = async (req, res) => {

    try {
        const count = await Count.findById(req.params.id).populate('user')
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
        const count = await Count.findByIdAndDelete(req.params.id)
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
        const count = await Count.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(count)
        
        if (!count)
        return res.status(404). json({error: 'cuenta no encontrada'})       
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({error: 'Error al obtener las cuentas'})
    }
}