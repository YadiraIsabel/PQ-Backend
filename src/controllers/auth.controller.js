//funcion registra usuarios

import User from '../models/user.models.js'
import bcryptjs from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js";

//funcion registra usuarios
export const register = async (req, res) => {


    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email })
    if (userFound) {
        return res.status(400).json({ message: ["el email ya esta en uso"] })
    }

    try {
        const passwordHash = await bcryptjs.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({
            id: userSaved._id
        })
        console.log(token);
        res.cookie('token', token, {
            sameSite:'none',
            secure: true
        })
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            password: passwordHash,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt

        });
    } catch (error) {
        console.log(error);
    }
}



//funcion login usuarios
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email })
        if (!userFound) {
            return res.status(400).json({ message: ['usuario no encontrado'] })
        }
        const isMatch = await bcryptjs.compare(password, userFound.password)
        if (!isMatch) {
            res.status(400)
                .json({ message: ["la contrseña no coincide"] })
        }
        const token = await createAccessToken({
            id: userFound._id
        })
        res.cookie('token', token, {
            /*s ameSite:'none',
            secure: true */
        })
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })


    } catch (error) {
        console.log(error);
    }
}

//cierra sesion
export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound)
        return res.status(400).json({ message: ["User not found"] })
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })

}