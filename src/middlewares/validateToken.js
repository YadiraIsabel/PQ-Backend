import { TOKEN_SECRET } from "../config.js";
import jws from 'jsonwebtoken'
export const authRequired = (req, res, next) => {

    const { token } = req.cookies
    if (!token) {
        return res.status(401)
            .json({
                message: ['unautoize']
            })
    }
    jws.verify(token, TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({
                message: ['token invalid']
            })
        req.user = user

        next();
    })


}