import { getConnection } from "./../database/database";

const getTransferencias = async (request, response) => {
    try{        
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM transferencias");

        response.status(200).json(result);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
};

const postTransferencia = async (request, response) => {

    try{              
        if( !request.body ) response.status(400).json({message:"Request vacío"});
        if( !request.body.destinatario ) response.status(400).json({message:"Destinatario no puede estar vacío"});
        if( !request.body.run ) response.status(400).json({message:"Run no puede estar vacío"});        
        if( !request.body.banco ) response.status(400).json({message:"Banco no puede estar vacío"});
        if( !request.body.cuenta ) response.status(400).json({message:"Cuenta no puede estar vacío"});
        if( !request.body.monto ) response.status(400).json({message:"Monto no puede estar vacío"});

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO transferencias SET ?", request.body);       
        
        response.status(200).json({message:"Transferencia realizada con éxito"});
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {
    getTransferencias,
    postTransferencia
};