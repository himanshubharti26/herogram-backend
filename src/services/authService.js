const HttpException = require('../HttpException');
const userService = require('./userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'qwertjklvcxz';
exports.login = async(email, password)=>{
    try{
        const user  = await userService.getUserByEmail(email);
        if(!user){
            throw new HttpException('403', "Invalid user");
        }
        const hashedPass = await bcrypt.compare(password, user.password);
        if(hashedPass){
            const token = jwt.sign({email}, secret, {expiresIn:"2h"});
            return token;
        }else{
            throw new HttpException(403,"Invalid password");
        }
    }catch(err){
        if(err.name === HttpException){
            return err;
        }else{
            throw new HttpException(500,`Internal server error ${err}`);
        }
    }
}

exports.logout = async()=>{
    try{
        
    }catch(err){

    }
}