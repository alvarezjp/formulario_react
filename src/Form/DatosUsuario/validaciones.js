export const validarEmail = (email) =>{
    const length = email.length;
    console.log(length)
    if(length > 8 && length < 25 && email.includes('@')){
        return true
    }else{
        return false
    }
}

export function validarPassword(password){
    console.log(password);
    const length = password.length
    if(length > 8 && length < 20 ){
        return true 
    }else{
        return false
    }
}