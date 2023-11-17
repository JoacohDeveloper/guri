import { Sequelize } from "sequelize";

export default async function connect() {
    const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {

            dialect: "mysql",
            dialectModule: require("mysql2"),
            logging: false,
            define: {
                freezeTableName: true
            }
            
        }
    )

    try{
        const auth = await sequelize.authenticate();
    } catch (err) {
        console.log("Error en la conexion ", err)
        process.exit(1)
    }

    return sequelize
}