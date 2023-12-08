 import User from '../user.models.js'

 export const findByEmail = (email) => {
    return User.findOne({ email })
}

export const findUserById = (id) => {
    return User.findById(id)
}

export const create = (email,username, passwordHash) => {

   return new User({
        username,
        email,
        password: passwordHash
    })

}
