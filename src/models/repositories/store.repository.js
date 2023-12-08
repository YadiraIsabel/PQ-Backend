import Store from '../store.models.js'

export const getStoresByUserId = (userId) => {
    /*  console.log(req); */

    /* console.log(Stores); */
    return Store.find({ user: userId }).populate('user')
}

export const create = (name, date, userId) => {

    const newStore = new Store({
        name,
        date,
        user: userId
    })

    const savedStore = newStore.save();
    return savedStore

}

export const getStore = (id) => {
    /*  console.log(req); */

    /* console.log(Stores); */
    return Store.findById(id).populate('user')
}

export const deleteStore = (id) => {
    /*  console.log(req); */

    /* console.log(Stores); */
    return Store.findByIdAndDelete(id)
}

export const updateStore = (id, body) => {

        return Store.findByIdAndUpdate(id, body, {new: true})

}
