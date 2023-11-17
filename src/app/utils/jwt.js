
import jwt from "jsonwebtoken"
import { JWT_MAX_AGE } from "../constants"
export function getToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: JWT_MAX_AGE
    })
}

export function verifyToken(token) {
    const data = jwt.verify(token, process.env.JWT_SECRET)

    if(data) return data
    return null
}