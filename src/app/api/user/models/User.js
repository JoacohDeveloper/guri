import { DataTypes } from "sequelize"

import connect from "@/app/config/database";
export default async function User() {
   const sequelize = await connect()
   const User = sequelize.define("User", {
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        token: {
            type: DataTypes.STRING,
        },
        confirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        
    })

    try{
        const result = await sequelize.sync();
        console.log("se sincronizo con exito la tabla.")
    }catch (err) {
        console.log("error al sincronizar la tabla.")
        process.exit(1)
    }

    return User
}