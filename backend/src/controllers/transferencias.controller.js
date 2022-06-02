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

        request.body.fecha = getFechaTransaccion();

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO transferencias SET ?", request.body);       
        
        response.status(200).json({message:"Transferencia realizada con éxito"});
    }
    catch(error){
        response.status(500);
        response.send(error.message);
    }
};

function pad2(n) {
    return (n < 10 ? '0' : '') + n;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

const getFechaTransaccion = () => {
    var date = new Date();
    var month = pad2(date.getMonth() + 1);
    var day = pad2(date.getDate());
    var year= date.getFullYear();

    var hour = padTo2Digits(date.getHours());
    var minutes = padTo2Digits(date.getMinutes());

    return (day +"/"+ month +"/"+ year +" "+ hour +":"+ minutes);
    
};

export const methods = {
    getTransferencias,
    postTransferencia
};