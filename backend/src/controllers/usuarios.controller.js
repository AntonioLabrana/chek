import { getConnection } from "./../database/database.js";
import jwt from "jsonwebtoken";

// const jwt = require('jsonwebtoken');

const getUsuario = async (request, response) => {
    try{
        if( !request || !request.body || !request.body.usuario || !request.body.contrasena ) response.status(400).json({message:"Request vacío"});    

        const { usuario, contrasena } = request.body;
        const connection = await getConnection();   

        const sqlSelectExists = "SELECT IF( EXISTS(SELECT usuario FROM "+ process.env.LOGIN +" WHERE usuario = ? AND contrasena = ?), 'LOGIN', 'NO_EXISTS') as RESULT;";        
        const result = await connection.query(sqlSelectExists, [usuario, contrasena], 
                (error, rows) => {
                    if( !error ){
                        var exists = rows[0].RESULT;                                         

                        if( exists === 'NO_EXISTS' ){    
                            let token = '';                                
                            response.status(200).json({token});
                        }
                        else{
                            
                            let data = JSON.stringify( usuario );
                            let token = jwt.sign(data, process.env.KEY);                          
                            response.status(200).json({token});
                        }
                    }
                    else{
                        response.status(500).json({message:"Ocurrió en el servidor"});
                    }
                }
            );
    }
    catch(error){
        response.status(500).json({message:"Usuario o Contraseña incorrectos"});
    }
};

// const checkToken = (request, response, next) => {
//     const auth = request.headers.authorization;

//     if( auth ) response.status(401).json({message:"No autorizado"});

//     const token = auth.substr(7);

//     if( token !== '' ) request.data = jwt.verify(token, process.env.KEY); 
//     else  response.status(401).json({message:"No autorizado"});
// };

export const methods = {   
    getUsuario
};