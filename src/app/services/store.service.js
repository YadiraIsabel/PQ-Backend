import {getStoresByUserId, create, getStore, deleteStore, updateStore} from '../../models/repositories/store.repository.js'

export const getStoresByUser = (req) => {
   /*  console.log(req); */
        /* console.log(Stores); */
        return getStoresByUserId(req.user.id)
}

export const createAStore = (req) => {
    /* console.log(req);
 */
    const {name, date} = req.body
    const userId = req.user.id
    const savedStore =  create(name, date, userId);
    return savedStore

}

export const getStoreById = (req) => {
    /*  console.log(req); */
         /* console.log(Stores); */
         return  getStore(req.params.id)
 }

 export const deleteStoreById = (req) => {
    /*  console.log(req); */
         /* console.log(Stores); */
         return  deleteStore(req.params.id)
 }

 export const updateStoreById = (req) => {

        return updateStore(req.params.id, req.body)

}