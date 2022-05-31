import { getConnection } from "./../database/database";
import { config } from "dotenv";

const jwt = require('jsonwebtoken');

const getUsuario = async (request, response) => {
    try{
        if( !request || !request.body || !request.body.usuario || !request.body.contrasena ) response.status(400).json({message:"Request vacío"});    

        const { usuario, contrasena } = request.body;
        const connection = await getConnection();   
        const sql = 'SELECT usuario FROM '+ process.env.LOGIN +' WHERE usuario = ? AND contrasena = ?';        
        const result = await connection.query(sql, [usuario, contrasena]) || [];

        if( result.length === 0 ) response.status(404).json({message:"Usuario no encontrado"});
        
        let data = JSON.stringify(result[0]);
        let token = jwt.sign(data, process.env.KEY);

        response.status(200).json({token});
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const checkToken = (request, response, next) => {
    const auth = request.headers.authorization;

    if( auth ) response.status(401).json({message:"No autorizado"});

    const token = auth.substr(7);

    //con la data entregada (json) se debe verificar al usuario para autorizar o no acciones
    if( token !== '' ) request.data = jwt.verify(token, process.env.KEY); 
    else  response.status(401).json({message:"No autorizado"});
};

export const methods = {   
    getUsuario
};