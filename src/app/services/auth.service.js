import {findByEmail, create, findUserById} from '../../models/repositories/auth.repository.js'
import bcryptjs from 'bcryptjs'

export const findUserByEmail = (email) => {
        return findByEmail( email )
}
export const findById = (id) => {
        return findUserById( id )
}

export const hashingPassword = (password) => {
        return  bcryptjs.hash(password, 10)
}

export const comparePassword = (password, userFoundPassword) => {
        return  bcryptjs.compare(password, userFoundPassword)
}

export const createUser = (req, passwordHash) => {
        const { username, email} = req.body;
        const newUser = create (email,username, passwordHash)
    
            return newUser.save();
}
