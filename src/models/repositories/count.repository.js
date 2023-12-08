import Count from '../../models/count.models.js'

export const getCountsByUserId = (userId) => {
    /*  console.log(req); */

    /* console.log(counts); */
    return Count.find({ user: userId }).populate('user')
}

export const create = (name, date, total, totalin, userId) => {

    const newCount = new Count({
        name,
        date,
        total,
        totalin,
        user: userId
    })

    const savedCount = newCount.save();
    return savedCount

}

export const getCount = (id) => {
    /*  console.log(req); */

    /* console.log(counts); */
    return Count.findById(id).populate('user')
}

export const deleteCount = (id) => {
    /*  console.log(req); */

    /* console.log(counts); */
    return Count.findByIdAndDelete(id)
}

export const updateCount = (id, body) => {

        return Count.findByIdAndUpdate(id, body, {new: true})

}
