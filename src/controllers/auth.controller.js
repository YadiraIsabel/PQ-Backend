//funcion registra usuarios
import { findUserByEmail, hashingPassword, createUser, comparePassword, findById } from '../app/services/auth.service.js'
import { createAccessToken } from "../libs/jwt.js";

//funcion registra usuarios
export const register = async (req, res) => {

    const userFound = await findUserByEmail(req.body.email)
    if (userFound) {
        return res.status(400).json({ message: ["el email ya esta en uso"] })
    }

    try {
        const passwordHash = await hashingPassword(req.body.password)
        const userSaved = await createUser(req, passwordHash);
        const token = await createAccessToken({
            id: userSaved._id
        })
        console.log(token);
        res.cookie('token', token, {
            sameSite: true,
            secure: true,
            sameSite: 'none'
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
        const userFound = await findUserByEmail(email)
        if (!userFound) {
            return res.status(400).json({ message: ['usuario no encontrado'] })
        }
        const isMatch = await comparePassword(password, userFound.password)
        if (!isMatch) {
            res.status(400)
                .json({ message: ["la contrseña no coincide"] })
        }
        else {
        const token = await createAccessToken({
            id: userFound._id
        })
        res.cookie('token', token, {
                sameSite: true,
                secure: true,
                sameSite: 'none'
            })
 
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    }


    } catch (error) {
        console.log(error);
    }
}

//cierra sesion
export const logout = (req, res) => {
    res.clearCookie("token");
    return res.sendStatus(200);
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

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token)
        return res.status(401).json({ message: ["No autorizado"] })

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err)
            return res.status(401).json({ message: ["No autorizado"] })


        const userFound = await User.findById(user.id);
        if (!userFound)
            return res.status(401).json({ message: ["No autorizado"] })

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    })
}