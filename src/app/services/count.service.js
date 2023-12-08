import {getCountsByUserId, create, getCount, deleteCount, updateCount} from '../../models/repositories/count.repository.js'

export const getCountsByUser = (req) => {
   /*  console.log(req); */
        /* console.log(counts); */
        return getCountsByUserId(req.user.id)
}

export const createACount = (req) => {
    /* console.log(req);
 */
    const {name, date,total, totalin} = req.body
    const userId = req.user.id
    const savedCount =  create(name, date,total, totalin, userId);
    return savedCount

}

export const getCountById = (req) => {
    /*  console.log(req); */
         /* console.log(counts); */
         return  getCount(req.params.id)
 }

 export const deleteCountById = (req) => {
    /*  console.log(req); */
         /* console.log(counts); */
         return  deleteCount(req.params.id)
 }

 export const updateCountById = (req) => {

        return updateCount(req.params.id, req.body)

}