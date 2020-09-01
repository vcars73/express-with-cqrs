const success = (code , data , message)=> {
    let result = {
        status : true,
        code : code,
        message : message,
        data : data,

    }
    return result
}

const error = (code , message) =>{

const result = {
    status : false,
    code : code,
    message : message
} 

return result;
}

const response = (res , result) =>{

        res.send(result);
    
}


module.exports = {
    success , 
    error,
    response
}