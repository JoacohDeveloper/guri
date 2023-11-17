import { NextResponse } from "next/server";
import User from "../models/User";
import { where } from "sequelize";
import * as bcrypt from "bcrypt"
import {v4 as uuidv4} from 'uuid';


export async function POST(req) {
    
    const data = await req.json()

    const {username, email, password} = data

    const user = await User();
    const dbUser = user.findAll({where: {
        email
    }})

    if(dbUser) return NextResponse.json({message: "Cuenta ya registrada"}, {status: 403, statusText: "Already exists"})
    const myuuid = uuidv4();
    const newUser = {
        id: myuuid,
        username, 
        email
    }
    try{
        const salt = await genSalt(10)
        const passwordHash = bcrypt.hashSync(password, salt)
        newUser.password = passwordHash
        await user.create(newUser)
    }catch (err) {
        console.log(err)
        process.exit(1)
    }

    return NextResponse.json({message: "Usuario registrado correctamente.", data: newUser})
}