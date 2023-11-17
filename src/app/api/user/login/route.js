import { NextResponse } from "next/server";
import { compare, compareSync, genSalt } from "bcrypt"
import User from "../models/User";
import { getToken } from "@/app/utils/jwt";

export async function POST(req){

    const data = await req.json()

    const {email, password} = data

    const user = await User()

    const dbUser = await user.findAll({where: {
        email
    }})

    if(dbUser.length === 0) return NextResponse.json({message: "No existe un usuario con ese email"}, {status: 404, statusText:"Not found"})

    const isEqual = compareSync(password, dbUser[0].dataValues.password) 

    if(!isEqual) return NextResponse.json({message: "Contraseña incorrecta"}, {status: 401, statusText: "Not Authorized"})

    const accesToken = getToken({user: dbUser[0].dataValues})

    return NextResponse.json({accesToken, user: {username: dbUser[0].dataValues.username, email: dbUser[0].dataValues.email, uuid: dbUser[0].dataValues.uuid, image: dbUser[0].dataValues.image}})
}

