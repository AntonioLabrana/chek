import { getConnection } from "./../database/database";

const getUsuario = async (request, response) => {
    try{
        if( !request || !request.body || !request.body.usuario || !request.body.contrasena ) response.status(400).json({message:"Request vacío"});

        const { usuario, contrasena } = request.body;
        const connection = await getConnection();        
        const result = await connection.query("SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?", [usuario, contrasena]);

        if( !result || result.length === 0 ) response.status(404).json({message:"Usuario no encontrado"});

        response.json(result);
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {   
    getUsuario
};