import { getConnection } from "./../database/database";

const getDestinatarios = async (request, response) => {
    try{        
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM destinatarios");

        response.json(result);
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getDestinatario = async (request, response) => {
    try{
        if( !request || !request.params ) response.status(400).json({message:"Request vacío"});

        const { id } = request.params;
        const connection = await getConnection();        
        const result = await connection.query("SELECT * FROM destinatarios WHERE id = ?", id);

        response.json(result);
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addDestinatario = async (request, response) => {

    try{              
        if( !request.body ) response.status(400).json({message:"Request vacío"});
        if( !request.body.nombre ) response.status(400).json({message:"Nombre no puede estar vacío"});
        if( !request.body.run ) response.status(400).json({message:"Run no puede estar vacío"});
        if( !request.body.telefono ) response.status(400).json({message:"Telefono no puede estar vacío"});
        if( !request.body.banco ) response.status(400).json({message:"Banco no puede estar vacío"});
        if( !request.body.tipocuenta ) response.status(400).json({message:"Tipo Cuenta no puede estar vacío"});
        if( !request.body.numerocuenta ) response.status(400).json({message:"Numero Cuenta no puede estar vacío"});        
           
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO destinatarios SET ?", request.body);       
        
        response.json(request.body);
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const updateDestinatario = async (request, response) => {
    try{
        if( !request || !request.params || !request.body ) response.status(400).json({message:"Request vacío"});

        const { id } = request.params;
        const connection = await getConnection();        
        const result = await connection.query("UPDATE destinatarios SET ? WHERE id = ?", [request.body, Number(id)] );

        if( !result || result.length === 0 ) response.status(404).json({message:"No es posible actualizar. Destinatario no encontrado"});

        response.json(result);
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const deleteDestinatario = async (request, response) => {
    try{
        console.log(request.params);
        if( !request || !request.params ) response.status(400).json({message:"Request vacío"});

        const { id } = request.params;
        const connection = await getConnection();        
        const result = await connection.query("DELETE FROM destinatarios WHERE nombre = ?", id);

        if( !result || result.length === 0 ) response.status(404).json({message:"No es posible eliminar. Destinatario no encontrado"});

        response.json(result);
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {
    getDestinatarios,
    getDestinatario,
    addDestinatario,
    updateDestinatario,
    deleteDestinatario
};
