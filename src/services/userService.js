

const HttpException = require('../HttpException');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');

exports.createUser = async (userData) => {
    try{
        userData.password = await bcrypt.hash(userData.password, 10);
        console.log("hased password", userData.password);
        userData.userId = v4();
        const resp = await userModel.create(userData);
        return resp;
    }catch(err){
        throw new HttpException(500, "Error in creating user");
    }

}

exports.getUserById = async(userId)=>{
    try{
        const user = await userModel.findOne({userId});
        if(!user){
            throw new HttpException(404, "User not found");
        }
        return user;
    }catch(err){
        if(err.name === HttpException){
            return err;
        }else{
            throw new HttpException(500, "Internal server err");
        }
    }
    
}

exports.getUserByEmail = async(email)=>{
    try{
        const user = await userModel.findOne({email});
        if(!user){
            throw new HttpException(404, "User not found");
        }
        return user;
    }catch(err){
        if(err.name === HttpException){
            return err;
        }else{
            throw new HttpException(500, "Internal server err");
        }
    }
    
}